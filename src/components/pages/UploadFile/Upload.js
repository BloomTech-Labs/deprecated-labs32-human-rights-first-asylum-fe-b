import React, { useState, useEffect } from 'react';
import { Upload, message, Form, Button, Input, Checkbox, Select } from 'antd';
import { InboxOutlined, FilePdfOutlined } from '@ant-design/icons';
import axios from 'axios';

import { DivStyled } from './upload-styling';

const { Option } = Select;

const url1 =
  //   'https://asylum-b-api.herokuapp.com/api/tags';
  'https://quote-garden.herokuapp.com/api/v3/quotes/random';
const url2 =
  //   'https://asylum-b-api.herokuapp.com/api/tags';
  'https://quote-garden.herokuapp.com/api/v3/quotes/random';
const url3 =
  //   'https://asylum-b-api.herokuapp.com/api/tags';
  'https://quote-garden.herokuapp.com/api/v3/quotes/random';

function UploadFile() {
  const [file, setFile] = React.useState('');

  const [tags, setTags] = useState([]);
  const [main, setMain] = useState([]);
  const [sub, setSub] = useState([]);
  // const [selections, setSelections] = useState([])

  useEffect(() => {
    axios
      .get(url1)
      .then(res => {
        setMain(res.data.data);
      })
      .catch(e => {
        console.log('Problems getting main data', e);
      });
  }, []);
  useEffect(() => {
    axios
      .get(url2)
      .then(res => {
        setSub(res.data);
      })
      .catch(e => {
        console.log('Problems with sub data', e);
      });
  }, []);
  useEffect(() => {
    axios
      .get(url3)
      .then(res => {
        setTags(res.data.data[0]);
      })
      .catch(e => {
        console.log('Problems with tag data', e);
      });
  }, []);

  console.log('main', main);
  console.log('sub', sub);
  console.log('tags', tags);

  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Server code here?
  }
  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };

  function handleSubmit() {
    // Submit all form information here?
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <DivStyled>
      <Form {...layout} name="UploadForm" initialValues={{ remember: true }}>
        <Form.Item>
          <Input type="file" onChange={handleUpload} />
        </Form.Item>

        <br />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
        {file.type == 'image/png'
          ? file && <ImageThumb image={file} />
          : file && <FilePdfOutlined />}
        <br />

        <Form.Item>
          <label>Judge: </label>
          <Input type="text" placeholder="Name..." />
        </Form.Item>

        <Form.Item>
          <label>Country of Origin: </label>
          <Input type="text" placeholder="Country..." />
        </Form.Item>

        <Form.Item>
          <label>Outcome: </label>
          <Select placeholder="Select an outcome..." allowClear>
            <Option value="granted">Granted</Option>
            <Option value="denied">Denied</Option>
            <Option value="pending">Pending</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <label>Tags: </label>
          <Checkbox>Ethnicity</Checkbox>
          <Checkbox>Race</Checkbox>
          <Checkbox>Religion</Checkbox>
          <Checkbox>Orientation</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </DivStyled>
  );
}

export default UploadFile;
