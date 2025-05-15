export const formatTextractResponse = (textLines: string[]) => {
  const columnCount = 8;

  if (
    textLines.length >= columnCount * 2 &&
    textLines.length % columnCount === 0
  ) {
    const rows = textLines.length / columnCount;

    const headers = textLines.slice(0, columnCount);

    const normalize = (str: string) =>
      str
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9]/g, "");

    const normalizedHeaders = headers.map(normalize);

    const expectedHeaders = [
      "firstname",
      "lastname",
      "idnumber",
      "dob",
      "dod",
      "dateoffuneral",
      "gravenumber",
      "section",
    ];

    const isLikelyHeaders = normalizedHeaders.every((h) =>
      expectedHeaders.includes(h),
    );

    if (!isLikelyHeaders) {
      console.warn("Headers do not match expected columns.");
      return null;
    }

    const dataRows: Record<string, string>[] = [];

    for (let i = 1; i < rows; i++) {
      const dataRow: Record<string, string> = {};

      for (let col = 0; col < columnCount; col++) {
        const index = i * columnCount + col;
        if (index < textLines.length) {
          dataRow[headers[col]] = textLines[index];
        }
      }

      dataRows.push(dataRow);
    }

    return {
      isTableData: true,
      table: dataRows,
    };
  }

  return null;
};
