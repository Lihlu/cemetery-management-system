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
});
