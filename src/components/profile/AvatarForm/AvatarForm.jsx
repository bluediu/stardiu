import { MDBListGroupItem } from 'mdb-react-ui-kit';
import { useDropzone } from 'react-dropzone';
import React, { useCallback } from 'react';

function AvatarForm({ setShowModal }) {
  const onDrop = useCallback(async (aceptedFile) => {
    const file = aceptedFile[0];

    try {
      console.log(file);
    } catch (error) {
      console.error(error);
    }
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/png, image/jpeg, image/jpg',
    noKeyboard: true,
    multiple: true,
    onDrop,
  });

  return (
    <>
      <ul
        style={{
          border: '0',
          padding: '8px',
          margin: '0',
          width: '100%',
        }}
        className="pointer list-group-flush"
      >
        <MDBListGroupItem
          className="text-body"
          {...getRootProps()}
        >
          Cargar foto
        </MDBListGroupItem>
        <MDBListGroupItem className="text-danger">
          Borrar foto actual
        </MDBListGroupItem>
        <MDBListGroupItem
          onClick={() => setShowModal(false)}
          className="text-black-50"
        >
          Cancelar
        </MDBListGroupItem>
      </ul>

      <input {...getInputProps()} />
    </>
  );
}

export default AvatarForm;
