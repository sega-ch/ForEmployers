import React from "react";
import styles from "./Stars.module.css";
import photo from "../ShopCard/lamp.jpg";


function Stars(props) {

    const array = [];

    for (let i = 0; i < props.count; i++) {

        array.push(i);

    }

    const listItems = array.map((arr) => arr = <li key={"star "+arr}>
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="<http://www.w3.org/2000/svg>">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
    </li>)
    

    return (

        <div className={styles.root}>

            <div className={styles.filmCard}>

                <div className={styles.picture}>
                    <img src={photo} className={styles.photo}/>
                </div>

                <div className={styles.discription}>

                    <h1 className={styles.name}> Титаник </h1>
                    <p className={styles.tell}> Фильм о кораблекрушении, очень трагичное кино с любовной историей. </p>
                    <ul className={styles.reviews}>

                      { listItems }            
                                              
                    </ul>

                </div>

            </div>

        </div>

    );
}

export default Stars;