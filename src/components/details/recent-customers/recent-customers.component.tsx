import React from 'react';
import styles from './recent-customers.module.less';
import img1 from '@images/img1.jpg';
import img2 from '@images/img2.jpg';
import img3 from '@images/img3.jpg';
import img4 from '@images/img4.jpg';
import img5 from '@images/img5.jpg';
import img6 from '@images/img6.jpg';
import img7 from '@images/img7.jpg';
import img8 from '@images/img8.jpg';
import {useTranslation} from "react-i18next";

const RecentCustomers = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.recentCustomers}>
            <div className={styles.cardHeader}>
                <h2>
                    {t("details.recentCustomers.title")}
                </h2>
            </div>
            <table>
                <tr>
                    <td width="60px">
                        <div className={styles.imgBx}>
                            <img src={img1} alt="img"/>
                        </div>
                    </td>
                    <td>
                        <h4>
                            David <br/>
                            <span>Italy</span>
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td width="60px">
                        <div className={styles.imgBx}>
                            <img src={img2} alt="img"/>
                        </div>
                    </td>
                    <td>
                        <h4>
                            Muhammad <br/>
                            <span>India</span>
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td width="60px">
                        <div className={styles.imgBx}>
                            <img src={img3} alt="img"/>
                        </div>
                    </td>
                    <td>
                        <h4>
                            Amelia <br/>
                            <span>France</span>
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td width="60px">
                        <div className={styles.imgBx}>
                            <img src={img4} alt="img"/>
                        </div>
                    </td>
                    <td>
                        <h4>
                            Olivia <br/>
                            <span>USA</span>
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td width="60px">
                        <div className={styles.imgBx}>
                            <img src={img5} alt="img"/>
                        </div>
                    </td>
                    <td>
                        <h4>
                            Amit <br/>
                            <span>Japan</span>
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td width="60px">
                        <div className={styles.imgBx}>
                            <img src={img6} alt="img"/>
                        </div>
                    </td>
                    <td>
                        <h4>
                            Ashraf <br/>
                            <span>India</span>
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td width="60px">
                        <div className={styles.imgBx}>
                            <img src={img7} alt="img"/>
                        </div>
                    </td>
                    <td>
                        <h4>
                            Diana <br/>
                            <span>Malaysia</span>
                        </h4>
                    </td>
                </tr>
                <tr>
                    <td width="60px">
                        <div className={styles.imgBx}>
                            <img src={img8} alt="img"/>
                        </div>
                    </td>
                    <td>
                        <h4>
                            Amit <br/>
                            <span>India</span>
                        </h4>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default RecentCustomers;