import { FC } from 'react';
import dayjs from 'dayjs';
import { MdOutlineClose } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import { selectSelectedDay } from '@/store/modal/selectors';
import { closeWorkoutModal } from '@/store/modal/slice';
import { DAY_FORMAT, STEP_MODAL } from '@/types/other';

import styles from './index.module.scss';

export const Header: FC = () => {
    const daySelected = useAppSelector(selectSelectedDay);
    const dispatch = useAppDispatch();
    return (
        <div className={styles.header}>
            <p>{dayjs(daySelected).format(DAY_FORMAT.DD_MM_YYYY)}</p>
            <div
                className={styles.cross}
                onClick={() => {
                    dispatch(closeWorkoutModal());
                }}
            >
                <MdOutlineClose />
            </div>
        </div>
    );
};
