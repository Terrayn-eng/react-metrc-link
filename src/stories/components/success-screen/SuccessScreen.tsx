import React from 'react';
import './success-screen.css';
import {closeIcon, successWoman} from '../../assets'

const { useState } = React

export interface SuccessScreenProps {
    /**
     * Optional click handler
     */
    handleSetScreen?: () => void;
    closeModal?: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps>= ({
    handleSetScreen,
    closeModal,
    ...props
  }) => {
    return (
        <div>
            <div className="closeIconDiv">
                <img className="closeIcon" src={closeIcon} onClick={closeModal}/>
            </div>
            <div className="successWomanDiv">
                <img className="successWoman" src={successWoman}/>
            </div>

            <h1 className="success-title-text">Nice! Metrc has successfully been connected</h1>
            <p className="sub-text">You will now be able to see data from Metrc in your Terrayn dashboard. Way to go!</p>
            <div className="success-button-div">
                <button className="success-button" onClick={()=>handleSetScreen("error")}>Back to Terrayn</button>
            </div>
        </div>
    )
}