import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const CusDropzone = (props) => {
  const [files, setFiles] = useState([]);

  const handleAcceptedFiles = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div>
        <img
          src={file.preview}
          alt="img"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  return (
    <div>
      <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>
                CusDropzone Drag 'n' drop some files here, or click to select
                files
              </p>
            </div>
          </section>
        )}
      </Dropzone>
      <aside>{thumbs}</aside>
    </div>
  );
};

export default CusDropzone;
