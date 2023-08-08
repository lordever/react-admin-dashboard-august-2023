import React from 'react';
import {IoCartOutline, IoCashOutline, IoChatbubblesOutline, IoEyeOutline} from "react-icons/io5";
import styles from "./card-box.module.less"

const CardBox = () => {
    return (
        <div className={styles.cardBox}>
            <div className={styles.card}>
                <div>
                    <div className={styles.numbers}>1,504</div>
                    <div className={styles.cardName}>Daily Views</div>
                </div>
                <div className={styles.iconBx}>
                    <IoEyeOutline/>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <div className={styles.numbers}>80</div>
                    <div className={styles.cardName}>Sales</div>
                </div>
                <div className={styles.iconBx}>
                    <IoCartOutline/>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <div className={styles.numbers}>284</div>
                    <div className={styles.cardName}>Comments</div>
                </div>
                <div className={styles.iconBx}>
                    <IoChatbubblesOutline/>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <div className={styles.numbers}>$7,842</div>
                    <div className={styles.cardName}>Earning</div>
                </div>
                <div className={styles.iconBx}>
                    <IoCashOutline/>
                </div>
            </div>
        </div>
    );
};

export default CardBox;