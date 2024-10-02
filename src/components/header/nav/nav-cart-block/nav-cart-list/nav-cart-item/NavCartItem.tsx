import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavCartItem.module.scss'
import { useAppDispatch } from '../../../../../../hooks/redux';
import { deleteFromCart } from '../../../../../../store/cart/cart.slice';
import { AiOutlineDelete } from 'react-icons/ai';
import { IProduct } from '../../../../../../store/products/products.type';

type NavCartItemProps = {
    item: IProduct;
}
// 메뉴바의 cart를 나타내는 컴포넌트이다.
// item을 props로 받아오며 이 item의 type은 IProducts로 설정한 interface로
// id, total, 이름, 가격, 카테고리, 이미지 등의 data를 담고 있다.
const NavCartItem: FC<NavCartItemProps> = ({ item }) => {
    // dispatch를 활용하기 위해 type을 설정했던 useAppDispatch라는
    // 커스텀 훅함수를 불러온다.
    const dispatch = useAppDispatch();
    // 해당 함수는 cart내 상품을 삭제하기 위한 함수로
    // dispatch를 통해 deleteFormCart라는 action을 불러오며
    // 이 함수는 선택한 item의 id를 인수로 전달하여
    // 해당 item의 id와 일치하지 않는 품목에 대해서만
    // localStorage에 data를 전달한다.
    const deleteProduct = () => {
        dispatch(deleteFromCart(item.id))
    }

    return (
        <div className={styles.nav_cart_item}>
            {/* item 이미지에는 각 상품에 해당하는 상세정보페이지로 넘어갈 수 있도록
            link를 전달해주며 경로에 해당 item의 id를 전달한다. */}
            <Link to={`/product/${item.id}`}>
                {" "}
                <img src={item.image} alt="product card" />
            </Link>
            <div className={styles.nav_cart_description}>
                <h3>{item.category}</h3>
                <h2>{item.title}</h2>
                <span>
                    {/* item 가격의 총계를 나타내며
                    해당 상품의 가격은 소수점아래 2자리 숫자로 고정한다. */}
                    {item.price} x {item.quantity} = $ {item.total.toFixed(2)}
                </span>
            </div>
            {/* 해당 버튼을 클릭시 item이 삭제되도록 하는 deleteProduct함수를 연결  */}
            <button onClick={deleteProduct} className={styles.nav_cart_delete}>
                <AiOutlineDelete />
            </button>
        </div>
    )
}

export default NavCartItem