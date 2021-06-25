import React from 'react';
import './credentials-screen.css';
import {closeIcon, metrcLogo} from '../../assets'

const { useState } = React

export interface CredentialsScreenProps {
    /**
     * Callback to send data back to app on success
     */
    callback: () => void;
    /**
     * Backend Url
     */
    backendUrl: string;
    /**
     * Callback to set next screen
     */
    handleSetScreen: () => void;
    /**
     * Callback to close modal
     */
    closeModal: () => void;
    /**
     * States your company has vendor keys for
     */
    states: Array<string>;
}

export const CredentialsScreen: React.FC<CredentialsScreenProps>= ({
    callback,
    backendUrl,
    handleSetScreen,
    closeModal,
    states
  }) => {
    const [state, setState] = useState(states[0])
    const [userKey, setUserKey] = useState()

    const handleSubmit = async() =>{
        handleSetScreen("load")
        const data = {'state':state, 'user_key':userKey}
        const formBody = Object.entries(data).map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&')
        const response = await fetch(backendUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody 
        })
        if(response.status === 200){
            callback(data)
            handleSetScreen("success")
        }else{
            handleSetScreen("error")
        }
    } 
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
            <input className="user-key-input" placeholder="User Key" onChange={(e)=>setUserKey(e.target.value)}/>
            <select className="state-select" name="state" id="state" onChange={(e)=>setState(e.target.value)}>
                {states && states.length ? states.map((state, index)=><option key={index} value={state}>{state}</option>):null}
            </select>
            <div className="credentials-buttons-div">
                <button className="credentials-button" onClick={handleSubmit}>Submit</button>
                <a className="credentials-link" onClick={()=>handleSetScreen("privacy")}>Back</a>
            </div>
        </div>
    )
}