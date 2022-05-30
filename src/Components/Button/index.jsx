import React from 'react';
import style from './Button.module.sass';

export default function Button(handleSubmit){

    return (
        <button className={style.button} onClick={()=>handleSubmit()}>
        </button>
    )
}