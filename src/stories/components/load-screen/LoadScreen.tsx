import React from 'react';
import './load-screen.css';
import {closeIcon, thinkingWoman} from '../../assets'

export interface LoadScreenProps {
     /**
     * Callback to set next screen
     */
    handleSetScreen: () => void;
    /**
     * Callback to close modal
     */
    closeModal: () => void;
}

export const LoadScreen: React.FC<LoadScreenProps>= ({
    handleSetScreen,
    closeModal
  }) => {
    return (
        <div>
            <div className="closeIconDiv">
                <img className="closeIcon" src={closeIcon} onClick={closeModal}/>
            </div>
            <div className="thinkingWomanDiv">
                <img className="thinkingWoman" src={thinkingWoman}/>
            </div>
            <div className="load-text-div">
                <h1 className="load-title-text">Verifying your Metrc credentials...</h1>
                <a className="load-link" onClick={()=>handleSetScreen("success")}>Back</a>
            </div>
        </div>
    )
}