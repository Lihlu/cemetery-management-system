"use client";
import { useEffect, useRef, useState } from "react";
import { getAxiosInstance } from "@/utils/axios-instance";
import { YocoInlineInstance } from "@/types/yoco";

interface PaymentFormProps {
  gravesiteName: string;
  gravesitePrice: number;
}

const PaymentForm = ({ gravesiteName, gravesitePrice }: PaymentFormProps) => {
  const cardElementRef = useRef<HTMLDivElement>(null);
  const [inlineInstance, setInlineInstance] =
    useState<YocoInlineInstance | null>(null);
  const instance = getAxiosInstance();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.yoco.com/sdk/v1/yoco-sdk-web.js";
    script.async = true;

    script.onload = () => {
      // Safely get the public key
      const publicKey = process.env.NEXT_PUBLIC_YOCO_PUBLIC_KEY;
      if (!publicKey) {
        throw new Error("Yoco public key is not defined");
      }

      // Instantiate Yoco
      const yoco = new window.YocoSDK({ publicKey });

      const inline = yoco.inline({
        layout: "basic",
        amountInCents: gravesitePrice,
        currency: "ZAR",
      });

      inline.mount("#card-element");
      setInlineInstance(inline);
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
      if (inlineInstance) {
        inlineInstance.unmount();
      }
    };
  }, [gravesitePrice]);

  const handlePayment = async () => {
    if (!inlineInstance) {
      alert("Payment form not ready yet.");
      return;
    }

    const result = await inlineInstance.createToken();

    if (result.error) {
      alert(result.error.message);
    } else {
      try {
        await instance
          .post(
            `/api/services/app/Payment/Charge?token=${result.id}&amount=${gravesitePrice}`,
            {
              token: result.id,
              amount: gravesitePrice,
              gravesiteName: gravesiteName,
            },
          )
          .catch((error) => {
            console.error("Error:", error);
            const errorText = error.response.text();
            throw new Error(
              `Server Error: ${error.response.status} ${errorText}`,
            );
          });

        alert("Payment successful!");
      } catch (error) {
        console.error("Payment failed:", error);
        alert(`Payment failed: ${error.message}`);
      }
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Purchase {gravesiteName}</h1>

      <div style={{ marginBottom: "1rem" }}>
        <strong>Amount:</strong> R {(gravesitePrice / 100).toFixed(2)}
      </div>

      <div
        id="card-element"
        ref={cardElementRef}
        style={{ marginBottom: "1rem" }}
      ></div>

      <button onClick={handlePayment} style={{ padding: "0.5rem 1rem" }}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentForm;
