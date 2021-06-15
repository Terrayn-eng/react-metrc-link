import React from 'react';
import './load-screen.css';
import {closeIcon, safetyWoman} from '../../assets'

const { useState } = React

export interface LoadScreenProps {
    /**
     * Optional click handler
     */
    handleSetScreen?: () => void;
    closeModal?: () => void;
}

export const LoadScreen: React.FC<LoadScreenProps>= ({
    handleSetScreen,
    closeModal,
    ...props
  }) => {
    return (
        <div>
            <div className="closeIconDiv">
                <img className="closeIcon" src={closeIcon} onClick={closeModal}/>
            </div>
            <div className="safetyWomanDiv">
                <img className="safetyWoman" src={safetyWoman}/>
            </div>
            <div className="load-text-div">
                <h1 className="load-title-text">Verifying your Metrc credentials...</h1>
                <a className="load-link" onClick={()=>handleSetScreen("success")}>Back</a>
            </div>
        </div>
    )
}