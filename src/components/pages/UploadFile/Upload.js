import React from 'react';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { DivStyled } from './upload-styling';

const { Dragger } = Upload;
const url =
  'http://asylum-hrf-team-b.eba-2bq2qkfg.us-east-1.elasticbeanstalk.com/insert';

function UploadFile() {
  const props = {
    name: 'file',
    multiple: true,
    showDownloadIcon: true,
    action: url,
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

  return (
    <DivStyled>
      {/* file validation */}
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
    </DivStyled>
  );
}

export default UploadFile;
