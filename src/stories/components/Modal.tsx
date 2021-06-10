import React from 'react';
import './modal.css';
import {closeIcon} from '../assets'

export interface ModalProps {
    open: boolean;
    /**
     * Optional click handler
     */
    closeModal?: () => void;
}

export const Modal: React.FC<ModalProps>= ({
    open,
    closeModal,
    ...props
  }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <img className="closeIcon" src={closeIcon} onClick={closeModal}/>
                <h1>wuuut</h1>
            </div>
        </div>
    )
}