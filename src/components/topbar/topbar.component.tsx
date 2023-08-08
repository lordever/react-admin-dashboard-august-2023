import React, {FC, memo} from 'react';
import styles from './topbar.module.less';
import BurgerButton from "./burger-button/burger-button.component";
import Search from "./search/search.component";
import UserIcon from "./user-icon/user-icon.component";

interface TopbarProps {
    onBurgerBtnClick: () => void;
}

const Topbar: FC<TopbarProps> = ({onBurgerBtnClick}) => {
    return (
        <div className={styles.topbar}>
            <BurgerButton onClick={onBurgerBtnClick}/>
            <Search/>
            <UserIcon/>
        </div>
    );
};

export default memo(Topbar);