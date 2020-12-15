import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

const PDFModal = () => {
  const [visible, setVisible] = useState(false);
  const getFilePluginInstance = getFilePlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
        <Button type="primary" onClick={() => setVisible(true)}>
          Open Modal of 1000px width
        </Button>
        <Modal
          title="Modal 1000px width"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <Viewer
            fileUrl="https://human-rights-first-asylum-analysis-documents-fe.s3.amazonaws.com/lulu-book-creation-guide.pdf"
            plugins={[
              // Register plugins
              defaultLayoutPluginInstance,
              getFilePluginInstance,
            ]}
          />
        </Modal>
      </Worker>
    </>
  );
};

export default PDFModal;
