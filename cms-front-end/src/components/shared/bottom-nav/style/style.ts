import { createStyles } from "antd-style";

// Define our color palette
const colors = {
  background: "#F8F9FA", // Soft White
  mainText: "#1D2D44", // Deep Navy Blue
  secondaryText: "#B0B8C1", // Ash Gray
  primary: "#C8A96B", // Muted Gold
  secondary: "#D9D6EA", // Gentle Lavender
};

export const useStyles = createStyles(({ css, token }) => {
  // Override Ant Design's default token colors
  token.colorPrimary = colors.primary;

  return {
    bottomNav: css`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60px;
      background-color: #ffffff;
      border-top: 1px solid #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `,

    bottomNavButton: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      font-size: 20px;
      color: #595959;
      background: transparent;
      border: none;
      box-shadow: none;
      height: auto;
      min-width: 60px;

      &:hover {
        background: transparent;
        color: #1677ff;
      }

      .ant-btn-icon {
        margin: 0;
      }
    `,

    bottomNavButtonActive: css`
      color: ${token.colorPrimary} !important;
      background: transparent !important;
    `,

    bottomNavLabel: css`
      font-size: 12px;
      margin-top: 4px;
    `,
  };
});
