import React from 'react';
import './privacy-policy-screen.css';
import closeIcon from '../../assets/close-icon.svg';
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
}

export const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps>= ({
    handleSetScreen,
    closeModal
  }) => {
    return (
        <div>
            <div className="closeIconDiv">
                <img className="closeIcon" src={closeIcon} onClick={closeModal}/>
            </div>
            <div className="safetyWomanDiv">
                <img className="safetyWoman" src={safetyWoman}/>
            </div>

            <h1 className="title-text">Terrayn uses Metrc to connect with your regulatory cannibas data</h1>
            <p className="sub-text">Metrc is the government's trusted cannibas legalization partner.</p>
            <p className="privacy-policy-text">By selecting "continue" you agree to the <span className="policy-link">Metrc End User Privacy Policy</span></p>
            <div className="privacy-policy-div">
                <button className="privacy-policy-button" onClick={()=>handleSetScreen("credentials")}>Continue</button>
            </div>
        </div>
    )
}