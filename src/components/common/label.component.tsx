import React, {FC, memo, useCallback, useMemo} from 'react';
import styles from './label.module.less';
import cls from "classnames";
import {useTranslation} from "react-i18next";

export enum LabelTypeEnum {
    DELIVERED = "delivered",
    PENDING = "pending",
    RETURN = "return",
    IN_PROGRESS = "inProgress"
}

interface LabelProps {
    type: LabelTypeEnum;
}

const Label: FC<LabelProps> = ({type}) => {

    const {t} = useTranslation();

    const classNames = useMemo(() => {
        return cls(styles[type]);
    }, [type]);

    const getLocalizedKey = () => {
        let result = '';
        switch (type) {
            case LabelTypeEnum.DELIVERED:
                result = t("labels.delivered")
                break;
            case LabelTypeEnum.IN_PROGRESS:
                result = t("labels.inProgress")
                break;
            case LabelTypeEnum.PENDING:
                result = t("labels.pending")
                break;
            case LabelTypeEnum.RETURN:
                result = t("labels.return")
                break;
            default:
                result = t("labels.none")
                break;
        }

        return result;
    };

    return (
        <span className={classNames}>{getLocalizedKey()}</span>
    );
};

export default memo(Label);