import React, { useEffect } from 'react'
import CartEmpty from '../../../components/cart-empty/CartEmpty';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useAuth } from '../../../hooks/useAuth'
import { deleteOrder, fetchOrder } from '../../../store/order/order.slice';
import OrderItem from './order-item/OrderItem';
import styles from './OrdersList.module.scss';

const OrdersList = () => {
    const { id } = useAuth();
    const { order } = useAppSelector(state => state.order);
    const dispatch = useAppDispatch();
    // id가 변경될 때 fetchOrder라는 action을 id를 담아 보내줄 것
    useEffect(() => {
        dispatch(fetchOrder(id));
    }, [id])
    // order 배열의 길이가 존재하지 않는다면, 즉 주문 상품이 존재하지 않는다면
    // CartEmpty 컴포넌트를 보여준다.
    if (!order.length) {
        return <CartEmpty title="주문 내역" />
    }
    // handleClick함수는 item의 id를 인수로 받아
    // deleteOrder에 id를 전달하여 삭제
    const handleClick = (itemId: string) => {
        dispatch(deleteOrder(itemId))
    }

    return (
        <div className={styles.orders}>
            {order.map(item => (
                <div key={item.id}>
                    <div className={styles.order_header}>
                        {/* 주문 번호 클릭시 item의 id를 전달하여 해당 item이 삭제되도록 설정 */}
                        <h3 onClick={() => handleClick(item.id)}>주문 번호_{item.id}</h3>
                        <p>합계: $ {item.totalPrice.toFixed(2)}</p>
                    </div>

                    <ul className={styles.orders_list}>
                        {item.products.map(order => (
                            <OrderItem key={order.id} order={order} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default OrdersList