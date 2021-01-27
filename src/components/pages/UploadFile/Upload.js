import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { DivStyled } from './upload-styling';
// import Search from './SearchTerms'

const { Dragger } = Upload;
// Is this the right url?
const url =
  'http://asylum-hrf-team-b.eba-2bq2qkfg.us-east-1.elasticbeanstalk.com/insert';

function UploadFile() {
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
      <form>
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
        {file && <ImageThumb image={file} />}
        <label>Judge: </label>
        <input type="text" />
        <br></br>
        <label>Country of Origin: </label>
        <input type="text" />
        <br></br>
        <label>Outcome: </label>
        <input type="text" />
        <br></br>
        <label>Search Terms: </label>
        {/* <Search /> */}
        <br></br>
        <button>Submit</button>
      </form>
    </DivStyled>
  );
}

export default UploadFile;

// Notes:  Not sure why when the upload button is clicked the url doesn't change when it looks like it is linked in switch.
