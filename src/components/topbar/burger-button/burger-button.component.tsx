import React, {FC, memo} from 'react';
import styles from "./burger-button.module.less";
import {IoMenuOutline} from "react-icons/io5";

interface BurgerButton {
    onClick: () => void;
}

const BurgerButton: FC<BurgerButton> = ({onClick}) => {
    return (
        <div className={styles.toggle}>
            <IoMenuOutline onClick={onClick}/>
        </div>
    );
};

export default memo(BurgerButton);