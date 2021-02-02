import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Input, Button, Space, Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import {
  FolderAddOutlined,
  SearchOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import Collections from './Collections/Collections';
import Footer from '../../common/footer/Footer';
import { DivStyled } from './dashboard-styling';
import { Table } from 'ant-table-extensions';
import { Layout } from 'antd';

const { Sider } = Layout;
const { Search } = Input;

const onSearch = value => console.log(value);

const PDFModal = lazy(() => import('../PDFModal/index'));

function Dashboard() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  // const [columnData, setColumnData] = useState([]); - to use http data

  //Modal Business
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      // this is the filter box with search bar, search button, and reset button
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
    filterIcon: filtered => <SearchOutlined style={{ fontSize: 18 }} />,
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
      render: (text, record, title) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a>
            <FolderAddOutlined
              style={{ margin: '0% 5%' }}
              title="Add to collections"
              onClick={showModal}
            />
            <Modal
              // title="Upload"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              width={600}
              centered
            >
              {/* modal contents here */}
            </Modal>
          </a>

          <a href="#">
            <Suspense fallback={null}>
              <PDFModal style={{ margin: '0% 5%' }} />
            </Suspense>
          </a>

          <a href="#">
            <DownloadOutlined style={{ margin: '0% 5%' }} />
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
    <>
      <Sider
        style={{
          background: 'white',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          marginTop: 30,
        }}
      >
        <Collections />
      </Sider>
      <DivStyled>
        <div className={'searchDiv'}>
          <Search
            className={'searchBar'}
            placeholder="Search..."
            onSearch={onSearch}
            enterButton
          />
          <Button type="secondary">Export to CSV</Button>
        </div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </DivStyled>
      <Footer />
    </>
  );
}

export default Dashboard;
