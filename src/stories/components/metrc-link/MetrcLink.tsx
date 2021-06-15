import React from 'react';
import './metrc-link.css';
import {Modal} from '../modal/Modal'

const { useState } = React

export interface MetrcLinkProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;

    color:string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
}

export const MetrcLink: React.FC<MetrcLinkProps>= ({
    size,
    backgroundColor,
    label,
    color,
    ...props
  }) => {
    const [open, setOpen]=useState(false)

    const openOnClick = () => {
        setOpen(!open)
    }

    const closeModal =() =>{
        setOpen(false)
    }

    return (
        <div>
            <Modal open={open} closeModal={closeModal}/>
            <button
            type="button"
            className={['metrc-button', `metrc-button--${size}`].join(' ')}
            style={{backgroundColor, color}}
            onClick={()=>openOnClick()}
            {...props}
            >
            {label}
            </button>
        </div>
    )
}
