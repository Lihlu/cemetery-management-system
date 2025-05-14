import { IGravesite } from "@/providers/gravesite/context";

export const gravesitePurchaseTemplate = (
  name: string,
  price: number,
  gravesite: IGravesite,
  sectionName: string,
): string => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #4B8B3B;">🌿 Gravesite Purchase Confirmation</h2>
      <p>Dear ${name},</p>

      <p>We are pleased to inform you that your purchase with <strong>Memoria</strong> has been successfully completed.</p>

      <h3 style="color: #4B8B3B;">📋 Purchase Details:</h3>
      <ul>
        <li><strong>Section:</strong> ${sectionName}</li>
        <li><strong>Site Number:</strong> ${gravesite.siteNumber}</li>
        <li><strong>Grave Type:</strong> ${gravesite.graveType}</li>
        <li><strong>Row:</strong> ${gravesite.row}</li>
        <li><strong>Is Extra Deep:</strong> ${gravesite.isExtraDeep ? "Yes" : "No"}</li>
        <li><strong>Price:</strong> R${(price / 10).toFixed(2)}</li>
      </ul>

      <p>If you have any questions or need further assistance, please don’t hesitate to contact our team.</p>

      <br />
      <p>Warm regards,<br/>The Memoria Team</p>
    </div>
  `;
};
