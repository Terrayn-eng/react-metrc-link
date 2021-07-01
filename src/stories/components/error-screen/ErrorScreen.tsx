import React from 'react';
import './error-screen.css';
import metrcCloseIcon from '../../assets/close-icon.svg';
import errorMan from '../../assets/error-man.svg';

export interface ErrorScreenProps {
     /**
     * Callback to set next screen
     */
    handleSetScreen: (screenName: string) => void;
    /**
     * Callback to close modal
     */
    closeModal: () => void;
}

export const ErrorScreen: React.FC<ErrorScreenProps>= ({
    handleSetScreen,
    closeModal
  }) => {
    return (
        <div>
            <div className="metrcCloseIconDiv">
                <img className="metrcCloseIcon" src={metrcCloseIcon} onClick={closeModal}/>
            </div>
            <div className="errorManDiv">
                <img className="errorMan" src={errorMan}/>
            </div>

            <h1 className="error-title-text">Uh-oh! Something is up...</h1>
            <p className="metrc-sub-text">We were not able to verify your Metrc account. Please reenter your User Key.</p>
            <div className="error-button-div">
                <button className="error-button" onClick={()=>handleSetScreen("credentials")}>Go to Credentials Page</button>
            </div>
        </div>
    )
}