import React from 'react';

import DEFAULT_PIC from '../../../../../assets/img/defaultProfile.png';

import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
} from 'mdb-react-ui-kit';

import './CommentItem.css';

function CommentItem({ title }) {
  return (
    <section className="mt-4 comment-item">
      <div>
        <div className="avatar me-3">
          <img
            className="avatar__image"
            src={DEFAULT_PIC}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = DEFAULT_PIC;
            }}
          />
        </div>
      </div>
      <div>
        <section className="comment-item-text">{title}</section>
        <small className="text-black-50">hace 1 hora</small>
      </div>
      <div className="comment-action">
        <MDBDropdown group className="shadow-0">
          <MDBDropdownToggle color="light">
            <MDBIcon fas icon="ellipsis-v" className="me-2" />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>
              <div className="dropdown-item">Editar</div>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <div className="dropdown-item">Eliminar</div>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
    </section>
  );
}

export default CommentItem;
