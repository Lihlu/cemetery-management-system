"use client";
import React, { useState } from "react";
import {
  Button,
  Layout,
  Menu,
  Typography,
  Row,
  Col,
  Card,
  Divider,
} from "antd";
import {
  RocketOutlined,
  TeamOutlined,
  AppstoreOutlined,
  MailOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useLandingStyles } from "./style/style";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
  const { styles } = useLandingStyles();
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleNavigation = (path) => {
    router.push(path);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Layout className={styles.layout}>
      {/* Header Navigation */}
      <Header className={styles.header}>
        <div className={styles.logo}>
          <RocketOutlined /> Cemetery Management System
        </div>
        <div className={styles.mobileMenuButton} onClick={toggleMenu}>
          <div className={styles.menuBar}></div>
          <div className={styles.menuBar}></div>
          <div className={styles.menuBar}></div>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          className={`${styles.menu} ${menuVisible ? styles.mobileMenuVisible : ""}`}
        >
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="pricing">Pricing</Menu.Item>
          <Menu.Item key="about">About Us</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
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
                  Manage Burial Bookings and Cemetery Operations with Ease
                </Title>
                <Paragraph className={styles.heroParagraph}>
                  A modern solution for the public, staff, and funeral parlouts
                  to book burials, manage plots, and digitize recores - all in
                  one place.
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
                <div className={styles.imagePlaceholder}>
                  <RocketOutlined className={styles.placeholderIcon} />
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className={styles.featuresSection} id="features">
          <Title level={2} className={styles.sectionTitle}>
            Key Features
          </Title>
          <Paragraph className={styles.sectionSubtitle}>
            Discover the powerful capabilities that make our platform stand out
          </Paragraph>

          <Row gutter={[32, 32]} className={styles.featuresGrid}>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <CalendarOutlined className={styles.featureIcon} />
                <Title level={4}>Burial Booking System</Title>
                <Paragraph>
                  Schedule, edit, or cancel burial services with real-time
                  availability.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <AppstoreOutlined className={styles.featureIcon} />
                <Title level={4}>Plot Management</Title>
                <Paragraph>
                  Organize and manage grave plots with intuitive mapping and
                  tracking.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <EnvironmentOutlined className={styles.featureIcon} />
                <Title level={4}>Cemetery Map</Title>
                <Paragraph>
                  View an interactive map to choos and locate burial plots
                  easily.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <TeamOutlined className={styles.featureIcon} />
                <Title level={4}>Funeral Parlour Access</Title>
                <Paragraph>
                  Allow funeral parlours to manage client bookings
                  independently.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <CreditCardOutlined className={styles.featureIcon} />
                <Title level={4}>Online Payments</Title>
                <Paragraph>
                  Complete booking payments securely through the platform.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <FileTextOutlined className={styles.featureIcon} />
                <Title level={4}>Digitized Records</Title>
                <Paragraph>
                  Upload, verify, and maintain digital records of all burial
                  services.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <MailOutlined className={styles.featureIcon} />
                <Title level={4}>Automated Notifications</Title>
                <Paragraph>
                  Receive confirmations and reminders to ensure smooth
                  operations.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className={styles.featureCard}>
                <ScheduleOutlined className={styles.featureIcon} />
                <Title level={4}>Balanced Scheduling</Title>
                <Paragraph>
                  Prevent overbooking and mange services with optimized
                  scheduling tools
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
              <Title level={4}>Cemetery Management System</Title>
              <Paragraph>
                Transforming cemetery management with innovative solutions.
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
              <Paragraph>admin@cms.co.za</Paragraph>
              <Paragraph>078 123 1234</Paragraph>
            </div>
          </Col>
        </Row>
        <Divider />
        <div className={styles.copyright}>
          <Paragraph>
            © {new Date().getFullYear()} YourApp. All rights reserved.
          </Paragraph>
        </div>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
