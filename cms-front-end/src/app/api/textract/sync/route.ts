import { NextRequest, NextResponse } from "next/server";
import {
  TextractClient,
  DetectDocumentTextCommand,
} from "@aws-sdk/client-textract";

const textractClient = new TextractClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Call Textract directly (synchronous API)
    const response = await textractClient.send(
      new DetectDocumentTextCommand({
        Document: {
          Bytes: buffer,
        },
      }),
    );

    // Process the results
    let extractedText = "";
    if (response && response.Blocks) {
      const textBlocks = response.Blocks.filter(
        (block) => block.BlockType === "LINE",
      );

      extractedText = textBlocks.map((block) => block.Text).join("\n");
    }

    return NextResponse.json({
      status: "completed",
      text: extractedText,
    });
  } catch (error) {
    console.error("Error processing document:", error);
    return NextResponse.json(
      { error: "Failed to process document" },
      { status: 500 },
    );
  }
}
