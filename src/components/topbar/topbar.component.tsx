import React, {FC, memo} from 'react';
import styles from './topbar.module.less';
import BurgerButton from "./burger-button/burger-button.component";
import Search from "./search/search.component";
import UserIcon from "./user-icon/user-icon.component";

interface TopbarProps {
    isSideMenuActive: boolean;
    onBurgerBtnClick: () => void;
}

const Topbar: FC<TopbarProps> = ({isSideMenuActive, onBurgerBtnClick}) => {
    return (
        <div className={styles.topbar}>
            <BurgerButton isActive={isSideMenuActive} onClick={onBurgerBtnClick}/>
            <Search/>
            <UserIcon/>
        </div>
    );
};

export default memo(Topbar);