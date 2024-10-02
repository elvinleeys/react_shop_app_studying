import React from 'react'
import { useAppSelector } from '../../../../../hooks/redux'
import NavCartItem from './nav-cart-item/NavCartItem';
import styles from './NavCartList.module.scss';

// 해당 컴포넌트는 cartitem들의 목록을 감싸주는 상위 컴포넌트이다.
const NavCartList = () => {
    // useSelector의 커스텀 훅을 사용하여 state의 cart를 불러와 products로 비구조화 할당한다.
    const { products } = useAppSelector((state) => state.cart);
    return (
        // 해당 cart내 item 목록을 map함수를 활용하여 뿌린다.
        <div className={styles.nav_cart_list}>
            {/* 이때 NavCartItem 컴포넌트 목록을 뿌리며
            뿌릴때는 item정보를 담아 뿌리고 각 컴포넌트의 고유값을 유지하기 위해
            key값에 item의 id를 전달한다. */}
            {products.map((item) => (
                <NavCartItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default NavCartList