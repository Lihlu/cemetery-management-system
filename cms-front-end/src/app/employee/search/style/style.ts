import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  pageWrapper: css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `,

  contentArea: css`
    flex: 1;
    overflow-y: auto;
    background: #f5f5f5;
    padding: 24px;
    @media (max-width: 768px) {
      padding: 16px;
    }
    @media (max-width: 480px) {
      padding: 12px;
    }
  `,

  searchCard: css`
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
    margin-bottom: 24px;
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  `,

  searchTitle: css`
    margin-bottom: 24px;
    font-weight: 600;
    @media (max-width: 768px) {
      margin-bottom: 16px;
      font-size: 20px;
    }
  `,

  formSection: css`
    margin-bottom: 16px;
  `,

  searchButton: css`
    height: 40px;
    font-weight: 500;
    @media (max-width: 480px) {
      height: 36px;
    }
  `,

  resultsArea: css`
    margin-top: 24px;
    min-height: 200px;
    @media (max-width: 768px) {
      margin-top: 16px;
    }
  `,

  resultCard: css`
    height: 100%;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  `,

  resultCardTitle: css`
    font-weight: 500;
  `,

  emptyState: css`
    padding: 40px 0;
    @media (max-width: 480px) {
      padding: 24px 0;
    }
  `,

  loadingState: css`
    padding: 60px 0;
    text-align: center;
    @media (max-width: 480px) {
      padding: 40px 0;
    }
  `,

  formContainer: css`
    max-width: 100%;
  `,

  checkboxWrapper: css`
    margin-top: 30px;
    @media (max-width: 768px) {
      margin-top: 0;
    }
  `,

  dateRangePicker: css`
    width: 100%;
    .ant-picker-input > input {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      .ant-picker-panels {
        flex-direction: column;
      }
    }
  `,
});
