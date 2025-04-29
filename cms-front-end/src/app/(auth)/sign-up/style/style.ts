import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  outerContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
  `,
  formContainer: css`
    max-width: 360px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  formTitle: css`
    text-align: center;
    margin-bottom: 24px;
    font-size: 24px;
  `,
  loadingOverlay: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,
  nameFields: css`
    display: flex;
    gap: 16px;
    margin-bottom: 0;
  `,
  halfWidthInput: css`
    flex: 1;
  `,
  loginLink: css`
    text-align: center;
    margin-top: 16px;
  `,
});
