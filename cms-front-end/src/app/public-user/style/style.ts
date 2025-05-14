import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  pageWrapper: css`
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  `,

  sider: css`
    height: 100vh;
    background: #ffffff;
  `,

  mainLayout: css`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    overflow: hidden;
  `,

  header: css`
    height: 64px;
    background: #fff;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    z-index: 100;
  `,

  profileMenu: css`
    margin-left: auto;
  `,

  contentArea: css`
    flex: 1;
    overflow-y: auto;
    background: #f5f5f5;
    padding: 24px;
  `,

  menu: css`
    height: 100%;
    border-right: none;
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
});
