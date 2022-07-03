import React, { useCallback } from 'react';

/* hooks */
import { useDropzone } from 'react-dropzone';

/* context */
import { useDispatch } from 'react-redux';
import { startUpdateUserAvatar } from '../../../context/actions/user.action';

/* Components */
import { MDBListGroupItem } from 'mdb-react-ui-kit';

function AvatarForm({ setShowModal }) {
  const dispatch = useDispatch();

  const onDrop = useCallback(async (aceptedFile) => {
    const file = aceptedFile[0];

    try {
      dispatch(startUpdateUserAvatar(file));
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
