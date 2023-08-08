import React, {FC, memo, useEffect, useRef} from 'react';
import {ChartData} from 'chart.js';
import {Chart} from 'chart.js/auto';
import styles from "./graph-box.module.less";

interface GraphBoxProps {
    polarAreaData: ChartData;
    barData: ChartData;
}

const GraphBox: FC<GraphBoxProps> = ({polarAreaData, barData}) => {
    const polarAreaRef = useRef<HTMLCanvasElement | null>(null);
    const barRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (polarAreaRef.current) {
            const ctx = polarAreaRef.current.getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'polarArea',
                    data: polarAreaData,
                    options: {
                        responsive: true
                    }
                });
            }
        }
    }, [polarAreaData]);

    useEffect(() => {
        if (barRef.current) {
            const ctx = barRef.current.getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'bar',
                    data: barData,
                    options: {
                        responsive: true
                    }
                });
            }
        }
    }, [barData]);

    return (
        <div className={styles.graphBox}>
            <div className={styles.box}>
                <canvas ref={polarAreaRef}></canvas>
            </div>
            <div className={styles.box}>
                <canvas ref={barRef}></canvas>
            </div>
        </div>
    );
};

export default memo(GraphBox);