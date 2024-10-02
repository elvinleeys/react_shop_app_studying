import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import styles from './CountProducts.module.scss';

const CountProducts = () => {
    const { products, isLoading } = useAppSelector(state => state.products);

    return (
        // products 배열의 길이를 통해 item의 총 수를 나타내는 컴포넌트 
        <div className={styles.count_products}>
            {!isLoading && (
                <p>
                    Showing: {products.length} items
                </p>
            )}
        </div>
    )
}

export default CountProducts