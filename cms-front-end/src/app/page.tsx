"use client";
import React from "react";
import Image from "next/image";
import {
  Button,
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Divider,
} from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useLandingStyles } from "./style/style";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
  const { styles } = useLandingStyles();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <Layout className={styles.layout}>
      {/* Header Navigation */}
      <Header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/images/logo-small.ico"
            alt="Memoria Hero Image"
            width={50}
            height={50}
          />{" "}
          Memoria
        </div>
        <div className={styles.authButtons}>
          <Button type="text" onClick={() => handleNavigation("/login")}>
            Log in
          </Button>
          <Button type="primary" onClick={() => handleNavigation("/sign-up")}>
            Sign up
          </Button>
        </div>
      </Header>

      <Content>
        <section className={styles.heroSection}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12}>
              <div className={styles.heroContent}>
                <Title level={1}>
                  Honour Memories with Seamless Cemetery Management
                </Title>
                <Paragraph className={styles.heroParagraph}>
                  Memoria simplifies burial bookings, plot management, and
                  record digitization — offering a respectful and modern
                  solution for families, staff, and funeral parlours.
                </Paragraph>
                <div className={styles.heroButtons}>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => handleNavigation("/sign-up")}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className={styles.heroImage}>
                <Image
                  src="/images/hero-image.png"
                  alt="Memoria Hero Image"
                  width={500}
                  height={450}
                />
              </div>
            </Col>
          </Row>
        </section>

        <section className={styles.featuresSection} id="features">
          <Title level={2} className={styles.sectionTitle}>
            Our Capabilities
          </Title>
          <Paragraph className={styles.sectionSubtitle}>
            Trusted tools designed to support cemeteries with care and precision
          </Paragraph>

          <Row gutter={[32, 32]} className={styles.featuresGrid}>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <CalendarOutlined className={styles.featureIcon} />
                <Title level={4}>Burial Booking</Title>
                <Paragraph>
                  Schedule, modify, or cancel services with real-time
                  availability.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <AppstoreOutlined className={styles.featureIcon} />
                <Title level={4}>Plot Management</Title>
                <Paragraph>
                  Assign and manage grave plots with intuitive mapping.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <EnvironmentOutlined className={styles.featureIcon} />
                <Title level={4}>Interactive Map</Title>
                <Paragraph>
                  Locate burial plots effortlessly through detailed mapping.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <CreditCardOutlined className={styles.featureIcon} />
                <Title level={4}>Secure Payments</Title>
                <Paragraph>
                  Accept payments online quickly and safely.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <FileTextOutlined className={styles.featureIcon} />
                <Title level={4}>Digital Records</Title>
                <Paragraph>
                  Digitize and preserve vital documents with human verification.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>
      </Content>

      <Footer className={styles.footer}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div className={styles.footerSection}>
              <Title level={4}>Memoria</Title>
              <Paragraph>
                Honouring memories through trusted digital solutions.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className={styles.footerSection}>
              <Title level={4}>Quick Links</Title>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className={styles.footerSection}>
              <Title level={4}>Contact Us</Title>
              <Paragraph>South Street</Paragraph>
              <Paragraph>Die Hoewes, Centurion</Paragraph>
              <Paragraph>admin@memoria.co.za</Paragraph>
              <Paragraph>078 123 1234</Paragraph>
            </div>
          </Col>
        </Row>
        <Divider />
        <div className={styles.copyright}>
          <Paragraph>
            © {new Date().getFullYear()} Memoria. All rights reserved.
          </Paragraph>
        </div>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
