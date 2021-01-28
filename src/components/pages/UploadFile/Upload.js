import React from 'react';
import {
  Upload,
  message,
  Form,
  Button,
  Input,
  Checkbox,
  Select,
  Radio,
} from 'antd';
import { InboxOutlined, FilePdfOutlined } from '@ant-design/icons';

import { DivStyled } from './upload-styling';

const { Option } = Select;

const { Dragger } = Upload;
// Is this the right url?
const url =
  'http://asylum-hrf-team-b.eba-2bq2qkfg.us-east-1.elasticbeanstalk.com/insert';

function UploadFile() {
  // const props = {
  //   name: 'file',
  //   multiple: true,
  //   showDownloadIcon: true,
  //   action: url,
  //   onChange(info) {
  //     const { status } = info.file;
  //     if (status !== 'uploading') {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

  const [file, setFile] = React.useState('');

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

  return (
    <DivStyled>
      {/* file validation */}
      {/* <Dragger {...props} accept=".pdf, .csv">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files.{' '}
          <p>Upload .pdf or .csv files only</p>
        </p>
      </Dragger> */}
      <Form name="UploadForm" initialValues={{ remember: true }}>
        <h1>Upload a Document</h1>
        <hr />
        <br />
        <Input type="file" onChange={handleUpload} />

        {/* <p>Filename: {file.name}</p> */}
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
        {/* <Form.Item>
        {file && <ImageThumb image={file} />}
        </Form.Item> */}

        <hr />
        <br />
        <Form.Item>
          <label>Judge:</label>
          <Input type="text" placeholder="Name..." />
        </Form.Item>

        <Form.Item>
          <label>Country of Origin:</label>
          <Input type="text" placeholder="Country..." />
        </Form.Item>

        <Form.Item>
          <label>Outcome:</label>
          <Select placeholder="Select an outcome..." allowClear>
            <Option value="granted">Granted</Option>
            <Option value="denied">Denied</Option>
            <Option value="dismissed">Dismissed</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <label>Tags:</label>
          <Radio.Group>
            <Radio.Button class="radio" value="one">
              Main 1
            </Radio.Button>
            <Radio.Button class="radio" value="two">
              Main 2
            </Radio.Button>
            <Radio.Button class="radio" value="three">
              Main 3
            </Radio.Button>
            <Radio.Button class="radio" value="four">
              Main 4
            </Radio.Button>
            <Radio.Button class="radio" value="five">
              Main 5
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Radio.Group>
            <Radio.Button class="radio" value="one">
              Sub 1
            </Radio.Button>
            <Radio.Button class="radio" value="two">
              Sub 2
            </Radio.Button>
            <Radio.Button class="radio" value="three">
              Sub 3
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        {/* <Form.Item>
          <div class="tagsitem">
            <label>Tags: </label>
            <Checkbox>Ethnicity</Checkbox>
            <Checkbox>Race</Checkbox>
            <Checkbox>Religion</Checkbox>
            <Checkbox>Orientation</Checkbox>
            <Button>Add New Tag</Button>
          </div>
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </DivStyled>
  );
}

export default UploadFile;

// Notes:  Not sure why when the upload button is clicked the url doesn't change when it looks like it is linked in switch.
