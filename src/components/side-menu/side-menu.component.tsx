import React, {FC, memo} from 'react';
import {AiFillApple, AiOutlineHome, AiOutlineLock} from "react-icons/ai";
import {MdPeopleOutline} from "react-icons/md";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2";
import {IoIosHelpCircleOutline} from "react-icons/io";
import {IoLogOutOutline, IoSettingsOutline} from "react-icons/io5";
import {useTranslation} from "react-i18next";
import styles from "./side-menu.module.less";
import cls from "classnames";

interface SideMenuProps {
    isActive: boolean;
}

const SideMenu: FC<SideMenuProps> = ({isActive}) => {

    const {t} = useTranslation();

    const navigationClassNames = cls(
        styles.navigation,
        isActive ? styles.active : undefined
    );

    return (
        <div className={navigationClassNames}>
            <ul>
                <li>
                    <a href="#">
                        <span className={styles.icon}><AiFillApple/></span>
                        <span className={styles.title}>{t("sideMenu.brandName")}</span>
                    </a>
                </li>
                <li className={styles.hovered}>
                    <a href="#">
                        <span className={styles.icon}><AiOutlineHome/></span>
                        <span className={styles.title}>{t("sideMenu.dashboard")}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><MdPeopleOutline/></span>
                        <span className={styles.title}>{t("sideMenu.customers")}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><HiOutlineChatBubbleOvalLeft/></span>
                        <span className={styles.title}>{t("sideMenu.message")}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IoIosHelpCircleOutline/></span>
                        <span className={styles.title}>{t("sideMenu.help")}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IoSettingsOutline/></span>
                        <span className={styles.title}>{t("sideMenu.settings")}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><AiOutlineLock/></span>
                        <span className={styles.title}>{t("sideMenu.password")}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IoLogOutOutline/></span>
                        <span className={styles.title}>{t("sideMenu.signOut")}</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default memo(SideMenu);