import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { DivStyled, ButtonDiv } from './upload-styling';
import axios from 'axios';

const { Dragger } = Upload;

function UploadFile() {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const props = {
    name: 'file',
    multiple: false,
    showDownloadIcon: true,
    onRemove(file) {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload(file) {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const clickHandler = () => {
    const formData = new FormData();
    fileList.forEach(file => formData.append('files[]', file));
    setUploading(true);

    axios
      .post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData)
      .then(res => {
        setFileList([]);
        message.success('Upload Successful');
      })
      .catch(err => {
        message.error('Upload Failed');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <DivStyled>
      <Dragger {...props} accept=".pdf, .csv">
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
      </Dragger>
      <ButtonDiv>
        <Button
          type="primary"
          onClick={clickHandler}
          disabled={fileList.length === 0}
          loading={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>
      </ButtonDiv>
    </DivStyled>
  );
}

export default UploadFile;
