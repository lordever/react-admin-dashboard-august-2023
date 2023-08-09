import React from 'react';
import styles from "./details.module.less";
import RecentOrders from "./recent-orders/recent-orders.component";
import RecentCustomers from "./recent-customers/recent-customers.component";

const Details = () => {
    return (
        <div className={styles.details}>
            <RecentOrders/>
            <RecentCustomers/>
        </div>
    );
};

export default Details;