import React from 'react';
import styles from "./user-icon.module.less";
import userImg from '@images/user.jpg';

const UserIcon = () => {
    return (
        <div className={styles.user}>
            <img src={userImg} alt="user"/>
        </div>
    );
};

export default UserIcon;