import React from "react";
import styles from "./MessageHistory.module.css";

function MessageHistory({data}) {
    
    // const massages = [];
    // const responses = [];
    // const typings = [];

    // for ( let i = 0; i < data.length; i++) {

    //     switch( data[i].type) {

    //         case "response":
    //             responses.push(data[i]);
    //             break;
    //         case "message":
    //             massages.push(data[i]);
    //             break;
    //         case "typing":
    //             typings.push(data[i]);
    //             break;
    //         default:
    //             console.log( "Нет таких значений" );

    //     }

    // }

    // console.log(data);


    return(

        <div className={styles.main}>

            <ul className={styles.allMessages}>

                {

                    data.map(function(item) {

                        switch( item.type) {

                            case "response":
                               return <li className={styles.foreignMessage}>
                                <div className={styles.massagesData}>
                                    <span className={styles.messageName}>{item.from.name}</span>
                                    <span className={styles.messageTime}>{item.time}</span>
                                </div>
                                <div className={styles.message}>{item.text}</div>
                            </li>
                                break;
                            case "message":
                                return <li className={styles.myMessage}>
                                    <div className={styles.massagesData}>
                                        <span className={styles.messageName}>{item.from.name}</span>
                                        <span className={styles.messageTime}>{item.time}</span>
                                    </div>
                                    <div className={styles.message}>{item.text}</div>
                                </li>
                                break;
                            case "typing":
                                return <li className={styles.foreignMessage}>
                                <div className={styles.massagesData}>
                                    <span className={styles.messageName}>{item.from.name}</span>
                                    <span className={styles.messageTime}>{item.time}</span>
                                </div>
                                <div className={styles.message}>***typing***</div>
                            </li>
                                break;
                            default:
                                console.log( "Нет таких значений" );

                        }

                    })

                }


                {/* <li className={styles.foreignMessage}>
                    <div className={styles.massagesData}>
                        <span className={styles.messageName}>Oleg</span>
                        <span className={styles.messageTime}>10:23</span>
                    </div>
                    <div className={styles.message}>Hi man. How are you?</div>
                </li>

                <li className={styles.myMessage}>
                    <div className={styles.massagesData}>
                        <span className={styles.messageName}>Simon</span>
                        <span className={styles.messageTime}>10:25</span>
                    </div>
                    <div className={styles.message}>Hi man. I'm fine. What about you?</div>
                </li> */}

            </ul>
           

        </div>

        

    );
}

export default MessageHistory;