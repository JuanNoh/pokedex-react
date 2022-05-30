import React from 'react';
import style from './Card.module.sass';

export default function Card ({number, image, name, types}) {
    return(
        <div className={style.card}>
            <img className={style.image} src={image} alt={name}></img>
            <div className={style.content}>
                <p className={style.number}>{number}</p>
                <h2 className={style.title}>{name}</h2>
                <div className={style.types}>
                    {types.map((item, key)=>{
                        return(
                            <div key={key} className={`${style.type} ${style[`type-${item.type.name}`]}`}>
                                {item.type.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};