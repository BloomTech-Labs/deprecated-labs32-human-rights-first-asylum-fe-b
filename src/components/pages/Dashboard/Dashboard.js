import React from 'react';
import { Table } from 'antd';

// Filler Data. To be replaced at a later date
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

function Dashboard() {
  return (
    <div>
      <div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
}

export default Dashboard;
