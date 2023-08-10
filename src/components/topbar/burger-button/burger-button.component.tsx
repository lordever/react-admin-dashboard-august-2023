import React, {FC, memo} from 'react';
import styles from "./burger-button.module.less";
import cls from 'classnames';
import {IoMenuOutline} from "react-icons/io5";
import {useMediaQuery} from "usehooks-ts";
import {mobileScreenSize} from "../../../constants/common";

interface BurgerButton {
    isActive?: boolean;
    onClick: () => void;
}

const BurgerButton: FC<BurgerButton> = ({isActive, onClick}) => {
    const isMobile = useMediaQuery(`(max-width: ${mobileScreenSize}px)`);
    const classes = cls(styles.toggle, isActive && isMobile ? styles.active : undefined)

    return (
        <div className={classes}>
            <IoMenuOutline onClick={onClick}/>
        </div>
    );
};

export default memo(BurgerButton);