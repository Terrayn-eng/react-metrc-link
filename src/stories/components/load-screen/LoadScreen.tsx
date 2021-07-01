import React from 'react';
import './load-screen.css';
import metrcCloseIcon from '../../assets/close-icon.svg';
import thinkingWoman from '../../assets/thinking-woman.gif';

export interface LoadScreenProps {
     /**
     * Callback to set next screen
     */
    handleSetScreen: (screenName: string) => void;
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
            <div className="metrcCloseIconDiv">
                <img className="metrcCloseIcon" src={metrcCloseIcon} onClick={closeModal}/>
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