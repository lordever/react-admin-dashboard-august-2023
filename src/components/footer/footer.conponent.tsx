import React from 'react';
import styles from './footer.module.less';
import cls from "classnames";
import {BiLogoInstagramAlt, BiSolidPhone} from "react-icons/bi";
import {HiMail} from "react-icons/hi";
import {SlSocialTwitter} from "react-icons/sl";
import {FaFacebook} from "react-icons/fa";
import {BsYoutube} from "react-icons/bs";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation();

    return (
        <>
            <footer>
                <div className={styles.footerContainer}>
                    <div className={styles.sec}>
                        <h2>{t("footer.aboutUs.title")}</h2>
                        <p>
                            {t("footer.aboutUs.description")}
                        </p>
                        <ul className={styles.sci}>
                            <li><a href="#"><FaFacebook/></a></li>
                            <li><a href="#"><SlSocialTwitter/></a></li>
                            <li><a href="#"><BiLogoInstagramAlt/></a></li>
                            <li><a href="#"><BsYoutube/></a></li>
                        </ul>
                    </div>
                    <div className={cls(styles.sec, styles.quicklinks)}>
                        <h2>{t("footer.support.title")}</h2>
                        <ul>
                            <li><a href="#">{t("footer.support.faq")}</a></li>
                            <li><a href="#">{t("footer.support.privacyPolicy")}</a></li>
                            <li><a href="#">{t("footer.support.help")}</a></li>
                            <li><a href="#">{t("footer.support.contact")}</a></li>
                        </ul>
                    </div>
                    <div className={cls(styles.sec, styles.quicklinks)}>
                        <h2>{t("footer.shop.title")}</h2>
                        <ul>
                            <li><a href="#">{t("footer.shop.men")}</a></li>
                            <li><a href="#">{t("footer.shop.women")}</a></li>
                            <li><a href="#">{t("footer.shop.kids")}</a></li>
                            <li><a href="#">{t("footer.shop.shoes")}</a></li>
                        </ul>
                    </div>
                    <div className={styles.sec}>
                        <h2>{t("footer.contactUs.title")}</h2>
                        <ul className={styles.info}>
                            <li>
                                <span><BiSolidPhone/></span>
                                <p><a href="tel:+12345678900">{t("footer.contactUs.phoneNumber")}</a></p>
                            </li>
                            <li>
                                <span><HiMail/></span>
                                <p><a href="mailto:zoomlex@gmail.com">{t("footer.contactUs.email")}</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles.copyrightText}>
                <p>{t("footer.copyrightText")}</p>
            </div>
        </>
    );
};

export default Footer;