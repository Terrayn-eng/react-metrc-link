import React from 'react';
import './metrc-link.css';
import {Modal} from '../modal/Modal'

const { useState } = React

export interface Response {
    /**
     * State passed into form
     */
    state:string;
    /**
     * User key passed into form
     */
    user_key?:string;
}

export interface MetrcLinkProps {
    /**
     * Callback to send data back to app on success
     */
    callback: (resp:Response) => void;
    /**
     * States your company has vendor keys for
     */
    states: Array<string>;
    /**
     * Backend Url
     */
    backendUrl: string;
    /**
     * What button background color to use
     */
    backgroundColor?: string;
    /**
     * What button font color to use
     */
    color?:string;
    /**
     * Button contents
     */
    label?: string;
    /**
     * What button font family to use
     */
    fontFamily?:string;
    /**
     * What button font weight to use
     */
    fontWeight?:number;
    /**
     * What button border to use
     */
    border?:string;
    /**
     * What button radius to use
     */
    borderRadius?:string;
    /**
     * What button line height to use
     */
    lineHeight?: number;
    /**
     * What button line spacing to use
     */
    letterSpacing?: string;
    /**
     * What button font size to use
     */
    fontSize?: string;
    /**
     * What button padding to use
     */
    padding?: string;
    /**
     * What button margin to use
     */
    margin?: string;
}

export const MetrcLink: React.FC<MetrcLinkProps>= ({
    callback,
    states,
    backendUrl,
    backgroundColor,
    label,
    color,
    border,
    borderRadius,
    lineHeight,
    letterSpacing,
    fontFamily,
    fontWeight,
    fontSize,
    padding,
    margin
  }) => {
    const [open, setOpen]=useState(false)
    const [screen, setScreen]=useState("privacy")

    const openOnClick = () => {
        setOpen(!open)
    }

    const closeModal =() =>{
        setOpen(false)
        handleSetScreen('privacy')
    }

    const handleSetScreen = (screenName:string) =>{
        setScreen(screenName)
    }

    return (
        <>
            <Modal open={open} closeModal={closeModal} states={states} screen={screen} handleSetScreen={handleSetScreen} callback={callback} backendUrl={backendUrl}/>
            <button
            type="button"
            className='metrc-button'
            style={{backgroundColor, color, border, borderRadius, lineHeight, letterSpacing, fontFamily, fontWeight, fontSize, padding, margin}}
            onClick={()=>openOnClick()}
            >
            {label ? label : 'Link with Metrc'}
            </button>
        </>
    )
}
