import { createStyles } from "antd-style";

export const useLandingStyles = createStyles(({ css, token }) => ({
  layout: css`
    min-height: 100vh;
  `,
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
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
    color: ${token.colorPrimary};
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  menu: css`
    border: none;
    flex: 1;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: white;
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
    background-color: ${token.colorPrimary};
    border-radius: 2px;
  `,
  authButtons: css`
    display: flex;
    gap: 8px;

    @media (max-width: 768px) {
      gap: 4px;
    }
  `,
  heroSection: css`
    padding: 64px 24px;
    background: linear-gradient(to right, #f0f5ff, #e6f7ff);

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
      color: ${token.colorTextHeading};

      @media (max-width: 768px) {
        font-size: 32px;
      }
    }
  `,
  heroParagraph: css`
    font-size: 18px;
    margin-bottom: 32px;
    color: ${token.colorTextSecondary};
  `,
  heroButtons: css`
    display: flex;
    gap: 16px;
    margin-top: 24px;

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
    color: ${token.colorPrimary};
  `,
  featuresSection: css`
    padding: 80px 24px;
    background-color: white;

    @media (max-width: 768px) {
      padding: 48px 16px;
    }
  `,
  sectionTitle: css`
    text-align: center;
    margin-bottom: 16px;
  `,
  sectionSubtitle: css`
    text-align: center;
    font-size: 18px;
    color: ${token.colorTextSecondary};
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
    border: 1px solid ${token.colorBorderSecondary};

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    }
  `,
  featureIcon: css`
    font-size: 40px;
    color: ${token.colorPrimary};
    margin-bottom: 16px;
  `,
  testimonialSection: css`
    padding: 80px 24px;
    background-color: #f9f9f9;

    @media (max-width: 768px) {
      padding: 48px 16px;
    }
  `,
  testimonialCard: css`
    height: 100%;
  `,
  testimonialContent: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  stars: css`
    color: #faad14;
    font-size: 20px;
  `,
  testimonialText: css`
    font-size: 16px;
    font-style: italic;
  `,
  testimonialAuthor: css`
    display: flex;
    flex-direction: column;
  `,
  ctaSection: css`
    padding: 80px 24px;
    background: linear-gradient(135deg, ${token.colorPrimary}, #1890ff);
    color: white;
    text-align: center;

    @media (max-width: 768px) {
      padding: 48px 16px;
    }

    h2 {
      color: white;
    }
  `,
  ctaContent: css`
    max-width: 700px;
    margin: 0 auto;
  `,
  ctaParagraph: css`
    font-size: 18px;
    margin-bottom: 32px;
    color: rgba(255, 255, 255, 0.85);
  `,
  ctaButton: css`
    font-size: 16px;
    height: 48px;
    padding: 0 32px;
    background: white;
    color: ${token.colorPrimary};
    border: none;

    &:hover {
      background: #f0f0f0;
      color: ${token.colorPrimary};
    }
  `,
  contactSection: css`
    padding: 80px 24px;
    background-color: white;

    @media (max-width: 768px) {
      padding: 48px 16px;
    }
  `,
  contactForm: css`
    max-width: 500px;
    margin-top: 32px;
  `,
  footer: css`
    background-color: #001529;
    color: rgba(255, 255, 255, 0.85);
    padding: 64px 24px 24px;

    @media (max-width: 768px) {
      padding: 48px 16px 24px;
    }

    h4 {
      color: white;
      margin-bottom: 16px;
    }
  `,
  footerSection: css`
    margin-bottom: 32px;
    color: rgba(255, 255, 255, 0.85);
  `,
  footerLinks: css`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
    }

    a {
      color: rgba(255, 255, 255, 0.65);
      text-decoration: none;

      &:hover {
        color: white;
      }
    }
  `,
  copyright: css`
    text-align: center;
    margin-top: 24px;
    color: rgba(255, 255, 255, 0.45);
  `,
}));
