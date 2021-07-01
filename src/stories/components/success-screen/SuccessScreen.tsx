import React from 'react';
import './success-screen.css';
import metrcCloseIcon from '../../assets/close-icon.svg';
import successWoman from '../../assets/success-woman.svg';

export interface SuccessScreenProps {
    /**
     * Callback to close modal
     */
    closeModal: () => void;
    /**
     * Company name to use on privacy screen
     */
    companyName: string;
}

export const SuccessScreen: React.FC<SuccessScreenProps>= ({
    closeModal,
    companyName
  }) => {
    return (
        <div>
            <div className="metrcCloseIconDiv">
                <img className="metrcCloseIcon" src={metrcCloseIcon} onClick={closeModal}/>
            </div>
            <div className="successWomanDiv">
                <img className="successWoman" src={successWoman}/>
            </div>

            <h1 className="success-title-text">Nice! Metrc has successfully been connected</h1>
            <p className="metrc-sub-text">You will now be able to see data from Metrc in your {companyName} app. Way to go!</p>
            <div className="success-button-div">
                <button className="success-button" onClick={closeModal}>Back to {companyName}</button>
            </div>
        </div>
    )
}