import React from "react";
import styles from './ShopCard.module.css';
import photo from './lamp.jpg'


function ShopCard(props) {
    return(

        <div className={styles.card}>
            
            <div className={styles.picture}>
                <img src={photo} className={styles.photo}/>
            </div>

            <div className={styles.discription}>
                <div className={styles.title}> {props.title} </div>
                <div className={styles.subtitle}> {props.subtitle} </div>
                <div className={styles.price}> Price {props.price} </div>
                <div className={styles.productDiscription}> {props.productDiscription} </div>  
                <div className={styles.move}>
                    <button className={styles.button}> Buy </button>
                    <button className={styles.button}> Add to card </button>  
                </div>
            </div>

        </div>

    );
}

export default ShopCard;