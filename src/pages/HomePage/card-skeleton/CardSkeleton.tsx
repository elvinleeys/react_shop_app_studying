import React from 'react'
import styles from './CardSkeleton.module.scss';
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
    // fetch를 통해 요청을 보냈을 때 pending상태가 되고 isLoading상태일 시
    // item을 보여주기 위한 carlist의 골격을 미리 보여주는 컴포넌트
    return (
        <div className={styles.card_skeleton_container}>
            <div className={styles.card_skeleton}>
                <Skeleton height={350} />
            </div>
            <div className={styles.card_skeleton}>
                <Skeleton height={350} />
            </div>
            <div className={styles.card_skeleton}>
                <Skeleton height={350} />
            </div>
            <div className={styles.card_skeleton}>
                <Skeleton height={350} />
            </div>
        </div>
    )
}

export default CardSkeleton