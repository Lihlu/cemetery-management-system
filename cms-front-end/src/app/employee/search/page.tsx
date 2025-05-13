"use client";

import {
  Input,
  Button,
  Form,
  Row,
  Col,
  Checkbox,
  DatePicker,
  Card,
  Empty,
  Spin,
  Layout,
  Typography,
  ConfigProvider,
} from "antd";
import {
  SearchOutlined,
  UserOutlined,
  IdcardOutlined,
  NumberOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import {
  useDeceasedPersonActions,
  useDeceasedPersonState,
} from "@/providers/deceased-person";
import { ISearchDeceasedPerson } from "@/providers/deceased-person/context";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useStyles } from "./style/style";

const { RangePicker } = DatePicker;
const { Title } = Typography;
const { Content } = Layout;

interface ISearchValues {
  firstName: string;
  lastName: string;
  idNumber: string;
  graveNumber: string;
  section: string;
  isBuried: boolean;
  dateOfDeathRange: [dayjs.Dayjs, dayjs.Dayjs];
}

const SearchDeceasedPersonPage = () => {
  const { styles } = useStyles();
  const { searchDeceasedPerson } = useDeceasedPersonActions();
  const { searchResults, isPending } = useDeceasedPersonState();
  const [form] = Form.useForm();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const onFinish = (values: ISearchValues) => {
    const searchParams: ISearchDeceasedPerson = {
      firstName: values.firstName,
      lastName: values.lastName,
      idNumber: values.idNumber,
      graveNumber: values.graveNumber,
      section: values.section,
      isBuried: values.isBuried,
    };

    if (values.dateOfDeathRange) {
      searchParams.dateOfDeathStart = dayjs(
        values.dateOfDeathRange[0],
      ).toISOString();
      searchParams.dateOfDeathEnd = dayjs(
        values.dateOfDeathRange[1],
      ).toISOString();
    }

    searchDeceasedPerson(searchParams);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 6,
        },
        components: {
          Form: {
            itemMarginBottom: 16,
          },
        },
      }}
    >
      <Layout className={styles.pageWrapper}>
        <Content className={styles.contentArea}>
          <Title level={isMobile ? 3 : 2} className={styles.searchTitle}>
            Search Deceased Persons
          </Title>

          <Card className={styles.searchCard}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className={styles.formSection}
              size={isMobile ? "middle" : "large"}
            >
              <div className={styles.formContainer}>
                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24 },
                    { xs: 8, sm: 16, md: 16 },
                  ]}
                >
                  <Col xs={24} md={12}>
                    <Form.Item label="First Name" name="firstName">
                      <Input
                        placeholder="Enter First Name"
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Last Name" name="lastName">
                      <Input
                        placeholder="Enter Last Name"
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24 },
                    { xs: 8, sm: 16, md: 16 },
                  ]}
                >
                  <Col xs={24} md={12}>
                    <Form.Item label="ID Number" name="idNumber">
                      <Input
                        placeholder="Enter ID Number"
                        prefix={<IdcardOutlined />}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Grave Number" name="graveNumber">
                      <Input
                        placeholder="Enter Grave Number"
                        prefix={<NumberOutlined />}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24 },
                    { xs: 8, sm: 16, md: 16 },
                  ]}
                >
                  <Col xs={24} md={12}>
                    <Form.Item label="Section" name="section">
                      <Input
                        placeholder="Enter Section"
                        prefix={<EnvironmentOutlined />}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="isBuried"
                      valuePropName="checked"
                      className={styles.checkboxWrapper}
                    >
                      <Checkbox>Is Buried</Checkbox>
                    </Form.Item>
                  </Col>
                </Row>

                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24 },
                    { xs: 8, sm: 16, md: 16 },
                  ]}
                >
                  <Col xs={24}>
                    <Form.Item
                      label="Date of Death Range"
                      name="dateOfDeathRange"
                    >
                      <RangePicker
                        className={styles.dateRangePicker}
                        prefix={<CalendarOutlined />}
                        ranges={{
                          "Last Month": [dayjs().subtract(1, "month"), dayjs()],
                          "Last 3 Months": [
                            dayjs().subtract(3, "month"),
                            dayjs(),
                          ],
                          "Last Year": [dayjs().subtract(1, "year"), dayjs()],
                        }}
                        allowClear
                        format="DD/MM/YYYY"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={isPending}
                  icon={<SearchOutlined />}
                  className={styles.searchButton}
                >
                  Search
                </Button>
              </div>
            </Form>
          </Card>

          <div className={styles.resultsArea}>
            {isPending ? (
              <div className={styles.loadingState}>
                <Spin size={isMobile ? "default" : "large"} />
              </div>
            ) : !searchResults || searchResults.length === 0 ? (
              <Empty
                description="No results found. Try adjusting your search criteria."
                className={styles.emptyState}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            ) : (
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24 },
                  { xs: 8, sm: 16, md: 24 },
                ]}
              >
                {searchResults.map((person) => (
                  <Col xs={24} sm={12} lg={8} key={person.id}>
                    <Card
                      title={`${person.firstName} ${person.lastName}`}
                      className={styles.resultCard}
                      headStyle={{ background: "#f0f5ff" }}
                      size={isMobile ? "small" : "default"}
                    >
                      <p>
                        <strong>ID Number:</strong> {person.idNumber}
                      </p>
                      <p>
                        <strong>Grave Number:</strong> {person.graveNumber}
                      </p>
                      <p>
                        <strong>Section:</strong> {person.section}
                      </p>
                      <p>
                        <strong>Is Buried:</strong>{" "}
                        {person.isBuried ? "Yes" : "No"}
                      </p>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default SearchDeceasedPersonPage;
