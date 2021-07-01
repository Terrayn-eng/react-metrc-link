import React from 'react';
import './privacy-policy-screen.css';
import metrcCloseIcon from '../../assets/close-icon.svg';
import safetyWoman from '../../assets/safety-woman.svg';

export interface PrivacyPolicyScreenProps {
    /**
     * Callback to set next screen
     */
    handleSetScreen: (screenName: string) => void;
    /**
     * Callback to close modal
     */
    closeModal: () => void;
    /**
     * Company name to use on privacy screen
     */
    companyName: string;
    /**
     * Company name to use on privacy screen
     */
    privacyPolicyLink:string;
}

export const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps>= ({
    handleSetScreen,
    closeModal,
    companyName,
    privacyPolicyLink
  }) => {
    return (
        <div>
            <div className="metrcCloseIconDiv">
                <img className="metrcCloseIcon" src={metrcCloseIcon} onClick={closeModal}/>
            </div>
            <div className="safetyWomanDiv">
                <img className="safetyWoman" src={safetyWoman}/>
            </div>

            <h1 className="title-text">{companyName} uses Metrc to connect with your regulatory cannibas data</h1>
            <p className="metrc-sub-text">Metrc is the government's trusted cannibas legalization partner.</p>
            <p className="privacy-policy-text">By selecting "continue" you agree to the <a className="policy-link" href={privacyPolicyLink} target="_blank">Metrc End User Privacy Policy</a></p>
            <div className="privacy-policy-div">
                <button className="privacy-policy-button" onClick={()=>handleSetScreen("credentials")}>Continue</button>
            </div>
        </div>
    )
}