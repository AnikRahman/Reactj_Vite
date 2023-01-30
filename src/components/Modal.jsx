import React from "react";

const Modal = ({ closeModal, children }) => {
    return (
        <div className="modal-backdrop" onClick={closeModal} style={{backgroundColor: "white"}}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
                <button 
                  className="modal-close-button" 
                  onClick={closeModal} 
                  style={{backgroundColor: "#46139f", color: "white"}}
                >
                    Close
                </button>
               
            </div>
        </div>
    );
};

export default Modal;
