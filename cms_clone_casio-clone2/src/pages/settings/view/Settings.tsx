import { Button, Col, Form, Input, Row, Space, Spin, Typography, notification } from 'antd';
import { getSettingsApi, updateSettingsApi } from '../api';
import { useEffect, useState } from 'react';

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [id, setId] = useState('');

  useEffect(() => {
    handleGetSettings();
  }, []);

  const handleGetSettings = async () => {
    setLoading(true);
    try {
      const res = await getSettingsApi();

      if (res) {
        setId(res.data._id);
        form.setFieldsValue({ keyProxy: res.data.keyProxy });
      }
    } catch (error) {
      notification.error({ message: 'Có lỗi xảy ra' });
    }
    setLoading(false);
  };

  const onFinish = async (values: any) => {
    console.log('Success:', values);

    try {
      const res = await updateSettingsApi({ id, keyProxy: values.keyProxy });

      await handleGetSettings();
      notification.success({ message: 'Cập nhật thành công' });
    } catch (error) {
      notification.error({ message: 'Có lỗi xảy ra' });
    }
  };

  return (
    <Spin spinning={loading}>
      <Space className="dashboard full-width" direction="vertical" size={15}>
        <div className="dashboard__wrap">
          <Typography.Title level={3}>Settings</Typography.Title>
          <br />
          <Row>
            <Col span={12}>
              <Form form={form} name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                <Form.Item
                  label="Key Proxy"
                  name="keyProxy"
                  rules={[{ required: true, message: 'Vui lòng nhập key proxy!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <div className="display-flex-center justify-content-end">
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </Space>
    </Spin>
  );
};

export default Settings;
