import React from 'react';
import {PrivacyPolicyScreen} from '../privacy-policy-screen/PrivacyPolicyScreen'
import {CredentialsScreen} from '../credentials-screen/CredentialsScreen'
import {LoadScreen} from '../load-screen/LoadScreen'
import {SuccessScreen} from '../success-screen/SuccessScreen'
import {ErrorScreen} from '../error-screen/ErrorScreen'
import './modal.css';

export interface Response {
    /**
     * State passed into form
     */
    state:string;
    /**
     * User key passed into form
     */
    user_key?:string;
}

export interface ModalProps {
    /**
     * Callback to send data back to app on success
     */
    callback: (resp:Response) => void;
    /**
     * Backend Url
     */
    backendUrl: string;
    /**
     * Callback to set next screen
     */
    handleSetScreen: (screenName: string) => void;
    /**
     * Callback to set next screen
     */
    screen: string;
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
    callback,
    backendUrl,
    open,
    closeModal,
    handleSetScreen,
    screen,
    states
  }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                {screen === "privacy" ? <PrivacyPolicyScreen closeModal={closeModal} handleSetScreen={handleSetScreen}/>:null}
                {screen === "credentials" ? <CredentialsScreen closeModal={closeModal} handleSetScreen={handleSetScreen} states={states} callback={callback} backendUrl={backendUrl}/>:null}
                {screen === "load" ? <LoadScreen closeModal={closeModal} handleSetScreen={handleSetScreen}/>:null}
                {screen ==="success" ? <SuccessScreen closeModal={closeModal}/>:null}
                {screen === "error" ? <ErrorScreen closeModal={closeModal} handleSetScreen={handleSetScreen}/>:null}
            </div>
        </div>
    )
}