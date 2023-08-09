import React from 'react';
import styles from './footer.module.less';
import cls from "classnames";
import {BiLogoInstagramAlt, BiSolidPhone} from "react-icons/bi";
import {HiMail} from "react-icons/hi";
import {SlSocialTwitter} from "react-icons/sl";
import {FaFacebook} from "react-icons/fa";
import {BsYoutube} from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.footerContainer}>
                    <div className={styles.sec}>
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, deserunt dignissimos eaque
                            excepturi
                            fugit, ipsa ipsam labore magni natus neque numquam optio pariatur recusandae sed sit. Iste
                            nisi
                            officiis tenetur.
                        </p>
                        <ul className={styles.sci}>
                            <li><a href="#"><FaFacebook/></a></li>
                            <li><a href="#"><SlSocialTwitter/></a></li>
                            <li><a href="#"><BiLogoInstagramAlt/></a></li>
                            <li><a href="#"><BsYoutube/></a></li>
                        </ul>
                    </div>
                    <div className={cls(styles.sec, styles.quicklinks)}>
                        <h2>Support</h2>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={cls(styles.sec, styles.quicklinks)}>
                        <h2>Shop</h2>
                        <ul>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Woman</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Shoes</a></li>
                        </ul>
                    </div>
                    <div className={styles.sec}>
                        <h2>Contact Us</h2>
                        <ul className={styles.info}>
                            <li>
                                <span><BiSolidPhone/></span>
                                <p><a href="tel:+12345678900">+1 234 567 8900</a></p>
                            </li>
                            <li>
                                <span><HiMail/></span>
                                <p><a href="mailto:zoomlex@gmail.com">zoomlex@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles.copyrightText}>
                <p>Copyright 2023 zoomlex. All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;