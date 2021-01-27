import React, { useState } from 'react';
import { Modal } from 'antd';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { FilePdfOutlined } from '@ant-design/icons';

export const PDFModal = () => {
  const [visible, setVisible] = useState(false);
  const getFilePluginInstance = getFilePlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
        <FilePdfOutlined type="primary" onClick={() => setVisible(true)}>
          Preview
        </FilePdfOutlined>
        <Modal
          title="Preview"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <Viewer
            // fileurl is a placeholder until we can get the proper endpoints
            fileUrl="https://human-rights-first-asylum-analysis-documents-fe.s3.amazonaws.com/lulu-book-creation-guide.pdf"
            plugins={[defaultLayoutPluginInstance, getFilePluginInstance]}
          />
        </Modal>
      </Worker>
    </>
  );
};
