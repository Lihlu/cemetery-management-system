import { createStyles } from "antd-style";

// Define our color palette
const colors = {
  background: '#F8F9FA',  // Soft White
  mainText: '#1D2D44',    // Deep Navy Blue
  secondaryText: '#B0B8C1', // Ash Gray
  primary: '#C8A96B',     // Muted Gold
  secondary: '#D9D6EA',   // Gentle Lavender
};

export const useStyles = createStyles(({ css, token }) => {
  // Override Ant Design's default token colors
  token.colorPrimary = colors.primary;
  
  return {
    pageContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, ${colors.background} 0%, ${colors.secondary} 100%);
      padding: 16px;
    `,
    contentWrapper: css`
      width: 100%;
      max-width: 460px;
    `,
    loadingOverlay: css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `,
    loginCard: css`
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
      padding: 32px;
      background: white;
    `,
    logoContainer: css`
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
    `,
    logo: css`
      background-color: ${colors.primary};
      border-radius: 50%;
      width: 10px;
      height: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    formTitle: css`
      color: ${colors.mainText};
      text-align: center;
      margin-bottom: 8px;
      font-weight: 600;
    `,
    formSubtitle: css`
      display: block;
      text-align: center;
      margin-bottom: 32px;
      color: ${colors.secondaryText};
    `,
    loginForm: css`
      .ant-form-item-label > label {
        color: ${colors.mainText};
      }
    `,
    input: css`
      border-radius: 6px;
      border-color: ${colors.secondary};
      
    `,
    inputIcon: css`
      color: ${colors.secondaryText};
      margin-right: 8px;
    `,
    forgotPasswordContainer: css`
      text-align: right;
    `,
    forgotPassword: css`
      color: ${colors.primary};
      transition: color 0.3s;
      
      &:hover {
        color: ${colors.mainText};
      }
    `,
    submitContainer: css`
      margin-bottom: 0;
    `,
    submitButton: css`
      border-radius: 6px;
      font-weight: 500;
      font-size: 16px;
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      
      &:hover {
        background-color: ${colors.primary}ee;
        border-color: ${colors.primary}ee;
      }
    `,
    divider: css`
      margin: 10px 0;
      
      .ant-divider-inner-text {
        font-size: 14px;
      }
    `,
    registerContainer: css`
      text-align: center;
    `,
    registerButton: css`
      border-radius: 6px;
      font-weight: 500;
      background-color: white;
      border-color: ${colors.primary};
      color: ${colors.primary};
      
      &:hover {
        background-color: ${colors.background};
        border-color: ${colors.mainText};
        color: ${colors.mainText};
      }
    `,
  };
});