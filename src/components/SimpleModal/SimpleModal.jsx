import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { Transition } from "react-transition-group";
import "./simplemodal.css";

export const SimpleModal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };
 
  return (
    <Transition in={isOpen} timeout={350} unmountOnExit={true}>
      {(state) => (
        <div className={`modal modal--${state}`}>
          <div className="modal-wrapper" onClick={onWrapperClick}>
            <div className="modal-content">
              <button className="modal-close-button" onClick={() => onClose()}>
                <IoCloseOutline />
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}

export default SimpleModal