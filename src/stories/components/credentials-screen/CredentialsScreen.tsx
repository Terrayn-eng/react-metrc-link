import React from 'react';
import './credentials-screen.css';
import {closeIcon, metrcLogo} from '../../assets'

export interface CredentialsScreenProps {
    /**
     * Callback to set next screen
     */
    handleSetScreen: () => void;
    /**
     * Callback to close modal
     */
    closeModal: () => void;
}

export const CredentialsScreen: React.FC<CredentialsScreenProps>= ({
    handleSetScreen,
    closeModal
  }) => {
    return (
        <div>
            <div className="closeIconDiv">
                <img className="closeIcon" src={closeIcon} onClick={closeModal}/>
            </div>
            <h1 className="metrc-title-text">Enter you Metrc User Key and State below:</h1>
            <div className="metrcLogoDiv">
                <img className="metrcLogo" src={metrcLogo}/>
            </div>
            <p className="user-key-label">User Key</p>
            <input className="user-key-input" placeholder="User Key"/>
            <select className="state-select" name="state" id="state">
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="OR">OR</option>
            </select>
            <div className="credentials-buttons-div">
                <button className="credentials-button" onClick={()=>handleSetScreen("load")}>Submit</button>
                <a className="credentials-link" onClick={()=>handleSetScreen("privacy")}>Back</a>
            </div>
        </div>
    )
}