import { createStyles } from "antd-style";

const colors = {
  background: "#F8F9FA", // Soft White
  mainText: "#1D2D44", // Deep Navy Blue
  secondaryText: "#B0B8C1", // Ash Gray
  primary: "#C8A96B", // Muted Gold
  secondary: "#D9D6EA", // Gentle Lavender
};

export const useLandingStyles = createStyles(({ css, token }) => {
  // Override Ant Design's default token colors
  token.colorPrimary = colors.primary;

  return {
    layout: css`
      min-height: 100vh;
      background-color: ${colors.background};
    `,
    header: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${colors.background};
      padding: 0 24px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      position: sticky;
      top: 0;
      z-index: 100;
      height: 64px;

      @media (max-width: 768px) {
        padding: 0 16px;
      }
    `,
    logo: css`
      font-size: 20px;
      font-weight: bold;
      color: ${colors.primary};
      display: flex;
      align-items: center;
      gap: 8px;
    `,
    menu: css`
      border: none;
      flex: 1;
      display: flex;
      justify-content: center;
      color: ${colors.mainText};

      @media (max-width: 768px) {
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        background: ${colors.background};
        flex-direction: column;
        display: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    `,
    mobileMenuVisible: css`
      @media (max-width: 768px) {
        display: flex;
      }
    `,
    mobileMenuButton: css`
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 20px;
      cursor: pointer;

      @media (max-width: 768px) {
        display: flex;
      }
    `,
    menuBar: css`
      height: 3px;
      width: 100%;
      background-color: ${colors.primary};
      border-radius: 2px;
    `,
    authButtons: css`
      display: flex;
      gap: 8px;

      button {
        background-color: ${colors.primary};
        border-color: ${colors.primary};
        color: white;

        &:hover {
          background-color: ${colors.primary}dd;
          border-color: ${colors.primary}dd;
        }
      }

      button.ant-btn-default {
        background-color: white;
        border-color: ${colors.primary};
        color: ${colors.primary};

        &:hover {
          background-color: ${colors.background};
          border-color: ${colors.primary};
          color: ${colors.primary};
        }
      }

      @media (max-width: 768px) {
        gap: 4px;
      }
    `,
    heroSection: css`
      padding: 64px 24px;
      background: linear-gradient(
        to right,
        ${colors.background},
        ${colors.secondary}
      );

      @media (max-width: 768px) {
        padding: 48px 16px;
      }
    `,
    heroContent: css`
      max-width: 600px;

      h1 {
        font-size: 48px;
        line-height: 1.2;
        margin-bottom: 24px;
        color: ${colors.mainText};

        @media (max-width: 768px) {
          font-size: 32px;
        }
      }
    `,
    heroParagraph: css`
      font-size: 18px;
      margin-bottom: 32px;
      color: ${colors.secondaryText};
    `,
    heroButtons: css`
      display: flex;
      gap: 16px;
      margin-top: 24px;

      button {
        background-color: ${colors.primary};
        border-color: ${colors.primary};
        color: white;

        &:hover {
          background-color: ${colors.primary}dd;
          border-color: ${colors.primary}dd;
        }
      }

      button.ant-btn-default {
        background-color: white;
        border-color: ${colors.primary};
        color: ${colors.primary};

        &:hover {
          background-color: ${colors.background};
          border-color: ${colors.primary};
          color: ${colors.primary};
        }
      }

      @media (max-width: 576px) {
        flex-direction: column;
        width: 100%;

        button {
          width: 100%;
        }
      }
    `,
    heroImage: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    imagePlaceholder: css`
      width: 100%;
      aspect-ratio: 4/3;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    placeholderIcon: css`
      font-size: 64px;
      color: ${colors.primary};
    `,
    featuresSection: css`
      padding: 80px 24px;
      background-color: ${colors.background};

      @media (max-width: 768px) {
        padding: 48px 16px;
      }
    `,
    sectionTitle: css`
      text-align: center;
      margin-bottom: 16px;
      color: ${colors.mainText};
    `,
    sectionSubtitle: css`
      text-align: center;
      font-size: 18px;
      color: ${colors.secondaryText};
      max-width: 600px;
      margin: 0 auto 48px;
    `,
    featuresGrid: css`
      margin-top: 48px;
    `,
    featureCard: css`
      height: 100%;
      text-align: center;
      padding: 24px;
      transition: all 0.3s ease;
      border: 1px solid ${colors.secondary};
      background-color: ${colors.background};
      color: ${colors.mainText};

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
      }
    `,
    featureIcon: css`
      font-size: 40px;
      color: ${colors.primary};
      margin-bottom: 16px;
    `,
    testimonialSection: css`
      padding: 80px 24px;
      background-color: ${colors.secondary};

      @media (max-width: 768px) {
        padding: 48px 16px;
      }
    `,
    testimonialCard: css`
      height: 100%;
      background-color: ${colors.background};
    `,
    testimonialContent: css`
      display: flex;
      flex-direction: column;
      gap: 16px;
    `,
    stars: css`
      color: ${colors.primary};
      font-size: 20px;
    `,
    testimonialText: css`
      font-size: 16px;
      font-style: italic;
      color: ${colors.mainText};
    `,
    testimonialAuthor: css`
      display: flex;
      flex-direction: column;
      color: ${colors.secondaryText};
    `,
    ctaSection: css`
      padding: 80px 24px;
      background: linear-gradient(
        135deg,
        ${colors.primary},
        ${colors.secondary}
      );
      text-align: center;

      @media (max-width: 768px) {
        padding: 48px 16px;
      }

      h2 {
        color: ${colors.mainText};
      }
    `,
    ctaContent: css`
      max-width: 700px;
      margin: 0 auto;
    `,
    ctaParagraph: css`
      font-size: 18px;
      margin-bottom: 32px;
      color: ${colors.mainText};
    `,
    ctaButton: css`
      font-size: 16px;
      height: 48px;
      padding: 0 32px;
      background: ${colors.background};
      color: ${colors.primary};
      border: none;

      &:hover {
        background: ${colors.background}ee;
        color: ${colors.mainText};
      }
    `,
    contactSection: css`
      padding: 80px 24px;
      background-color: ${colors.background};

      @media (max-width: 768px) {
        padding: 48px 16px;
      }

      .ant-form-item .ant-form-item-control-input-content .ant-btn-primary {
        background-color: ${colors.primary};
        border-color: ${colors.primary};
      }
    `,
    contactForm: css`
      max-width: 500px;
      margin-top: 32px;
    `,
    footer: css`
      background-color: ${colors.mainText};
      color: ${colors.secondaryText};
      padding: 64px 24px 24px;

      @media (max-width: 768px) {
        padding: 48px 16px 24px;
      }

      h4 {
        color: ${colors.background};
        margin-bottom: 16px;
      }
    `,
    footerSection: css`
      margin-bottom: 32px;
      color: ${colors.secondaryText};
    `,
    footerLinks: css`
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 8px;
      }

      a {
        color: ${colors.secondary};
        text-decoration: none;

        &:hover {
          color: ${colors.background};
        }
      }
    `,
    copyright: css`
      text-align: center;
      margin-top: 24px;
      color: ${colors.secondaryText};
    `,
  };
});
