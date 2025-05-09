import { createStyles } from "antd-style";

const colors = {
  background: "#F8F9FA",
  mainText: "#1D2D44",
  secondaryText: "#B0B8C1",
  primary: "#C8A96B",
  secondary: "#D9D6EA",
};

export const useStyles = createStyles(({ css, token }) => {
  token.colorPrimary = colors.primary;

  return {
    pageContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(
        135deg,
        ${colors.background} 0%,
        ${colors.secondary} 100%
      );
      padding: 24px;
    `,
    contentWrapper: css`
      width: 100%;
      max-width: 500px;
    `,
    loadingOverlay: css`
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `,
    loginCard: css`
      border-radius: 14px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      padding: 16px;
      background: white;
      margin: 0px;
    `,
    signUpCard: css`
      border-radius: 14px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      padding: 0px;
      margin: 0px;
      background: white;
    `,
    logoContainer: css`
      display: flex;
      justify-content: center;
    `,
    logo: css`
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 120px;
        height: auto;
      }
    `,

    formTitle: css`
      color: ${colors.mainText};
      text-align: center;
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 26px;
    `,
    formSubtitle: css`
      text-align: center;
      margin-bottom: 32px;
      color: ${colors.secondaryText};
      font-size: 14px;
    `,
    formRow: css`
      display: flex;
      gap: 16px;

      .ant-form-item {
        flex: 1;
      }
    `,
    halfWidthInput: css`
      flex: 1;
    `,
    loginForm: css`
      .ant-form-item {
        margin-bottom: 12px;
      }

      .ant-form-item-label > label {
        color: ${colors.mainText};
      }
    `,

    input: css`
      border-radius: 6px;
      border-color: ${colors.secondary};

      &:hover,
      &:focus-within {
        border-color: ${colors.primary};
      }
    `,
    inputIcon: css`
      color: ${colors.secondaryText};
      margin-right: 8px;
    `,
    submitContainer: css`
      margin-top: 16px;
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
      margin: 24px 0;

      .ant-divider-inner-text {
        font-size: 14px;
        color: ${colors.secondaryText};
      }
    `,
    registerContainer: css`
      text-align: center;
    `,
    registerButton: css`
      border-radius: 6px;
      font-weight: 500;
      background-color: white;
      border: 1px solid ${colors.primary};
      color: ${colors.primary};

      &:hover {
        background-color: ${colors.background};
        color: ${colors.mainText};
        border-color: ${colors.mainText};
      }
    `,
  };
});
