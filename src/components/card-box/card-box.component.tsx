import React from 'react';
import {IoCartOutline, IoCashOutline, IoChatbubblesOutline, IoEyeOutline} from "react-icons/io5";
import styles from "./card-box.module.less"
import {useTranslation} from "react-i18next";

const CardBox = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.cardBox}>
            <div className={styles.card}>
                <div>
                    <div className={styles.numbers}>{t("cardBox.dailyNews.value")}</div>
                    <div className={styles.cardName}>{t("cardBox.dailyNews.title")}</div>
                </div>
                <div className={styles.iconBx}>
                    <IoEyeOutline/>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <div className={styles.numbers}>{t("cardBox.sales.value")}</div>
                    <div className={styles.cardName}>{t("cardBox.sales.title")}</div>
                </div>
                <div className={styles.iconBx}>
                    <IoCartOutline/>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <div className={styles.numbers}>{t("cardBox.comments.value")}</div>
                    <div className={styles.cardName}>{t("cardBox.comments.title")}</div>
                </div>
                <div className={styles.iconBx}>
                    <IoChatbubblesOutline/>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <div className={styles.numbers}>{t("cardBox.earning.value")}</div>
                    <div className={styles.cardName}>{t("cardBox.earning.title")}</div>
                </div>
                <div className={styles.iconBx}>
                    <IoCashOutline/>
                </div>
            </div>
        </div>
    );
};

export default CardBox;