import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import {
  SearchOutlined,
  FilePdfOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { DivStyled } from './dashboard-styling';
import { Table } from 'ant-table-extensions';

const PDFModal = lazy(() => import('../PDFModal/index'));

function Dashboard() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  // const [columnData, setColumnData] = useState([]); - to use http data

  // Holdover - to populate w api call to pull down data
  useEffect(() => {}, []);

  // search props
  let getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
          }}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  let handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  let handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  // map & implement in func
  const columns = [
    {
      title: "Judge's Name",
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
      filterMultiple: false,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Case ID',
      dataIndex: 'caseId',
      key: 'caseId',
      width: '20%',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.caseId - b.caseId,
    },
    {
      title: 'Country of Origin',
      dataIndex: 'country',
      key: 'country',
      filters: [
        {
          text: 'Ukraine',
          value: 'Ukraine',
        },
        {
          text: 'United States',
          value: 'United States',
        },
        {
          text: 'Nigeria',
          value: 'Nigeria',
        },
        {
          text: 'Ghana',
          value: 'Ghana',
        },
      ],
      filterMultiple: true,
      onFilter: (value, record) => record.country.indexOf(value) === 0,
      sorter: (a, b) => a.country.localeCompare(b.country),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Outcome',
      dataIndex: 'outcome',
      key: 'outcome',
      filters: [
        {
          text: 'Granted',
          value: 'Granted',
        },
        {
          text: 'Denied',
          value: 'Denied',
        },
        {
          text: 'Pending',
          value: 'Pending',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.outcome.indexOf(value) === 0,
      sorter: (a, b) => a.outcome.localeCompare(b.outcome),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '',
      dataIndex: 'documentId',
      key: 'documentId',
      render: (text, record) => (
        <div>
          <a href="#">
            <Suspense fallback={null}>
              <PDFModal />
            </Suspense>
          </a>
          <a href="#">
            <DownloadOutlined style={{ margin: '0 10%' }} />
          </a>
        </div>
      ),
    },
  ];

  // filler data
  const data = [
    {
      key: '1',
      name: 'Brian Brownstein',
      caseId: 32,
      country: 'United States',
      outcome: 'Pending',
      documentId: 1,
    },
    {
      key: '2',
      name: 'Jim Green',
      caseId: 42,
      country: 'Ukraine',
      outcome: 'Granted',
      documentId: 2,
    },
    {
      key: '3',
      name: 'Joe Black',
      caseId: 32,
      country: 'Nigeria',
      outcome: 'Denied',
      documentId: 5,
    },
    {
      key: '4',
      name: 'Jim Red',
      caseId: 32,
      country: 'Ghana',
      outcome: 'Denied',
      documentId: 4,
    },
  ];

  // log handler - to delete
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const fields = {
    name: {
      header: 'Full Name',
      formatter: fieldValue => {
        return fieldValue;
      },
    },
    caseId: {
      header: 'Case ID',
      formatter: fieldValue => {
        return fieldValue;
      },
    },
    country: {
      header: 'Country of Origin',
      formatter: fieldValue => {
        return fieldValue;
      },
    },
    outcome: {
      header: 'Outcome',
      formatter: fieldValue => {
        return fieldValue;
      },
    },
  };

  return (
    <DivStyled>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        exportable={true}
        exportableProps={{
          fileName: 'Court Data',
          fields,
          btnProps: {
            type: 'secondary',
          },
        }}
      />
    </DivStyled>
  );
}

export default Dashboard;
