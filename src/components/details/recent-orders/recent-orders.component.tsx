import React from 'react';
import styles from './recent-orders.module.less';
import {useTranslation} from "react-i18next";
import Label, {LabelTypeEnum} from "../../common/label.component";

const RecentOrders = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.recentOrders}>
            <div className={styles.cardHeader}>
                <h2>
                    {t("details.recentOrders.title")}
                </h2>
                <a href="#" className={styles.btn}>{t("details.recentOrders.viewAll")}</a>
            </div>
            <table>
                <thead>
                <tr>
                    <td>{t("details.recentOrders.nameRow")}</td>
                    <td>{t("details.recentOrders.priceRow")}</td>
                    <td>{t("details.recentOrders.paymentRow")}</td>
                    <td>{t("details.recentOrders.statusRow")}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                        <Label type={LabelTypeEnum.DELIVERED}/>
                    </td>
                </tr>
                <tr>
                    <td>Window Coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>
                        <Label type={LabelTypeEnum.PENDING}/>
                    </td>
                </tr>
                <tr>
                    <td>Speakers</td>
                    <td>$620</td>
                    <td>Paid</td>
                    <td>
                        <Label type={LabelTypeEnum.RETURN}/>
                    </td>
                </tr>
                <tr>
                    <td>Hp Laptoop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>
                        <Label type={LabelTypeEnum.IN_PROGRESS}/>
                    </td>
                </tr>
                <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                        <Label type={LabelTypeEnum.IN_PROGRESS}/>
                    </td>
                </tr>
                <tr>
                    <td>Wall Fan</td>
                    <td>$110</td>
                    <td>Paid</td>
                    <td>
                        <Label type={LabelTypeEnum.DELIVERED}/>
                    </td>
                </tr>
                <tr>
                    <td>Adidas Shoes</td>
                    <td>$620</td>
                    <td>Paid</td>
                    <td>
                        <Label type={LabelTypeEnum.RETURN}/>
                    </td>
                </tr>
                <tr>
                    <td>Denim Shirts</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>
                        <Label type={LabelTypeEnum.RETURN}/>
                    </td>
                </tr>
                <tr>
                    <td>Casual Shoes</td>
                    <td>$575</td>
                    <td>Paid</td>
                    <td>
                        <Label type={LabelTypeEnum.PENDING}/>
                    </td>
                </tr>
                <tr>
                    <td>Wall Fan</td>
                    <td>$110</td>
                    <td>Paid</td>
                    <td>
                        <Label type={LabelTypeEnum.PENDING}/>
                    </td>
                </tr>
                <tr>
                    <td>Denim Shirts</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>
                        <Label type={LabelTypeEnum.IN_PROGRESS}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrders;