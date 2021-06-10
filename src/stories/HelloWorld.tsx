import React from 'react';
import './helloworld.css';
import {Modal} from './components/Modal'

const { useState } = React
export interface HelloWorldProps {
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
    /**
     * Optional click handler
     */
    onLinkClick?: () => void;
}

export const HelloWorld: React.FC<HelloWorldProps>= ({
    size,
    backgroundColor,
    label,
    color,
    ...props
  }) => {
    const [open, setOpen]=useState(false)

    const OpenOnClick = () => {
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
            className={['storybook-button', `storybook-button--${size}`].join(' ')}
            style={{backgroundColor, color}}
            onClick={()=>OpenOnClick()}
            {...props}
            >
            {label}
            </button>
        </div>
    )
}

