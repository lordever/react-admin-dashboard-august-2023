import React from 'react';
import {useTranslation} from "react-i18next";
import styles from "./search.module.less";
import {BsSearch} from "react-icons/bs";

const Search = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.search}>
            <label>
                <input type="text" placeholder={t("search.inputField")}/>
                <BsSearch />
            </label>
        </div>
    );
};

export default Search;