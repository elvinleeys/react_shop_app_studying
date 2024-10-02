import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import styles from './CartEmpty.module.scss';

type CartEmptyProps = {
  title: string
}

// 장바구니가 비어있다면 CartEmpty 컴포넌트를 보여주록 설정
// CartEmptyProps를 받으며 이 props는 title을 가지고 있고 비구조화 할당을 통해
// 해당 data를 받아온다.
const CartEmpty: FC<CartEmptyProps> = ({ title }) => {
  return (
    // cart가 비어있다면 
    <div className={styles.cart_empty}>
      <img src='img/empty-cart.png' alt='cart empty' />
      {/* 해당 title이 비어있다는 문구와 상품을 넣어주세요라는 문구를 보여주고 */}
      <h1>{title}가 비어있습니다.</h1>
      <p>{title}에 상품을 넣어주세요.</p>
      {/* 계속 쇼핑하기라는 링크를 통해 메인화면으로 되돌아가도록 link를 감싸준다. */}
      <Link to="/" >계속 쇼핑하기</Link>
    </div>
  )
}

export default CartEmpty