import { ConfigProvider, theme as antdTheme } from "antd";
import React from "react";

const colors = {
  background: "#F8F9FA", // Soft White
  mainText: "#1D2D44", // Deep Navy Blue
  secondaryText: "#B0B8C1", // Ash Gray
  primary: "#C8A96B", // Muted Gold
  secondary: "#D9D6EA", // Gentle Lavender
};

const CustomAntdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
          colorBgBase: colors.background,
          colorTextBase: colors.mainText,
          colorTextSecondary: colors.secondaryText,
          fontFamily: "'Segoe UI', sans-serif",
        },
        components: {
          Card: {
            colorBgContainer: "#ffffff",
            borderRadiusLG: 8,
          },
          Button: {
            colorPrimary: colors.primary,
            colorText: "#ffffff",
          },
        },
        algorithm: antdTheme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default CustomAntdProvider;
