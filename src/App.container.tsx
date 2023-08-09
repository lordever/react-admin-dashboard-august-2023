import React, {useState} from "react";
import i18n from "./i18n";
import {I18nextProvider} from 'react-i18next';
import styles from "./App.module.less";
import SideMenu from "./components/side-menu/side-menu.component";
import cls from "classnames";
import Topbar from "./components/topbar/topbar.component";
import CardBox from "./components/card-box/card-box.component";
import GraphBox from "./components/graph-box/graph-box.component";
import {graphBarData, graphBoxPolarAreaData} from "./stub/graphBox";
import Details from "./components/details/details.component";

const AppContainer = () => {

    const [isSideMenuActive, setIsSideMenuActive] = useState(false);
    const mainClassnames = cls(
        styles.main,
        isSideMenuActive ? styles.active : undefined
    );

    return (
        <I18nextProvider i18n={i18n}>
            <div className={styles.container}>
                <SideMenu isActive={isSideMenuActive}/>

                <div className={mainClassnames}>
                    <Topbar onBurgerBtnClick={() => setIsSideMenuActive(!isSideMenuActive)}/>
                    <CardBox/>
                    <GraphBox polarAreaData={graphBoxPolarAreaData} barData={graphBarData}/>
                    <Details/>
                </div>
            </div>
        </I18nextProvider>
    );
};

export default AppContainer;