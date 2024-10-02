import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { fetchProducts } from '../../../store/products/products.slice';
import CardSkeleton from '../card-skeleton/CardSkeleton';
import CardItem from './card-item/CardItem';
import styles from './CardList.module.scss';
import { useDispatch, useSelector } from 'react-redux';

// 해당 컴포넌트는 메인화면의 상품의 정보를 보여주는 cardList컴포넌트이다.
const CardList = () => {

    const dispatch = useAppDispatch();
    // 이부분은 redux store에 있는 products 값을 가져오는 부분 
    const { products, isLoading } = useAppSelector(state => state.products);
    const category = useAppSelector(state => state.categories);
    
    // category가 변화할 때마다 비동기 함수가 실행되며
    useEffect(() => {
        // dispatch를 통해 products.slice파일에서 만들었던 fetchProducts 비동기 함수를 호출하여 
        // category가 존재한다면 일괄적으로 소문자로 만들어 인수로 전달하도록 한다.
        // category를 인수로 받아 전달해야 category에 해당되는 data만을 가져온다. 
        dispatch(fetchProducts(category?.toLowerCase()));
    }, [category])

    // loading상태라면 cardSkeleton 컴포넌트가 보이도록 설정
    if (isLoading) return <CardSkeleton />;

    return (
        <ul className={styles.card_list}>
            {products.map(product => <CardItem key={product.id} item={product} />)}
        </ul>
    )
}

export default CardList