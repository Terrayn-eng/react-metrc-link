import React from 'react';
import {PrivacyPolicyScreen} from '../privacy-policy-screen/PrivacyPolicyScreen'
import {CredentialsScreen} from '../credentials-screen/CredentialsScreen'
import {LoadScreen} from '../load-screen/LoadScreen'
import {SuccessScreen} from '../success-screen/SuccessScreen'
import {ErrorScreen} from '../error-screen/ErrorScreen'
import './modal.css';

const { useState } = React

export interface ModalProps {
    /**
     * Boolean to set modal as open or closed
     */
    open: boolean;
    /**
     * Callback to close modal
     */
    closeModal: () => void;
    /**
     * States your company has vendor keys for
     */
    states: Array<string>;
}

export const Modal: React.FC<ModalProps>= ({
    open,
    closeModal,
    states
  }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none";
    const [screen, setScreen]=useState("privacy")

    const handleSetScreen = (screenName) =>{
        setScreen(screenName)
    }
    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                {screen === "privacy" ? <PrivacyPolicyScreen closeModal={closeModal} handleSetScreen={handleSetScreen}/>:null}
                {screen === "credentials" ? <CredentialsScreen closeModal={closeModal} handleSetScreen={handleSetScreen} states={states}/>:null}
                {screen === "load" ? <LoadScreen closeModal={closeModal} handleSetScreen={handleSetScreen}/>:null}
                {screen ==="success" ? <SuccessScreen closeModal={closeModal} handleSetScreen={handleSetScreen}/>:null}
                {screen === "error" ? <ErrorScreen closeModal={closeModal} handleSetScreen={handleSetScreen}/>:null}
            </div>
        </div>
    )
}