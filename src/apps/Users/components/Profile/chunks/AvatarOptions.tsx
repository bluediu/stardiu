/* Context */
import { startRemoveAvatar, startUpdateUser } from '@/apps/Users/context';

/* Components */
import { MDBBtn, MDBSpinner } from 'mdb-react-ui-kit';

/* Hooks */
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useAppDispatch, useAppSelector } from '@/hooks';

interface IProps {
  closeModal: () => void;
}

export const AvatarOptions = ({ closeModal }: IProps) => {
  const { updating } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file: File = acceptedFiles[0];
      dispatch(startUpdateUser({ img: file })).then((success) => {
        if (success) closeModal();
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onRemoveImage = () => {
    dispatch(startRemoveAvatar()).then((success) => {
      if (success) closeModal();
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpge'],
      'image/jpg': ['.jpg'],
      'image/webp': ['.webp'],
    },
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <>
      <ul className="pointer list-group-flush profile-list">
        <div className="d-grid gap-2">
          {updating && (
            <div className="text-center">
              <span className="me-2">Loading...</span>
              <MDBSpinner size="sm" className="ms-auto" role="status" />
            </div>
          )}
          <MDBBtn color="light" {...getRootProps()} disabled={updating}>
            <span className="text-primary">Upload new photo</span>
          </MDBBtn>
          <MDBBtn color="light" disabled={updating} onClick={onRemoveImage}>
            <span className="text-danger">Remove current photo</span>
          </MDBBtn>
          <MDBBtn color="light" onClick={closeModal} disabled={updating}>
            <span className="text-body">Cancel</span>
          </MDBBtn>
        </div>
      </ul>

      <input {...getInputProps()} />
    </>
  );
};
