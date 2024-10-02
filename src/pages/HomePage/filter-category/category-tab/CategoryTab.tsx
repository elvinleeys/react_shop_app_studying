import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { CategoriesName } from '../../../../store/categories/categories.type';
import styles from './CategoryTab.module.scss';

// CategoryTabProps의 기본 type은
// text와 categoryName이 기본 key로 존재하며
// text는 string을 categoryName은 CategoriesName이라 명명된 enum type으로
// 각 category의 이름이 key와 value로 존재한다.
type CategoryTabProps = {
    text: string;
    categoryName: CategoriesName
}

// CategoryTab은 CategoryTabProps를 인수로 받아 탭을 눌렀을 때 발생하는 함수이다.
const CategoryTab: FC<CategoryTabProps> = ({ text, categoryName }) => {
    // reducer를 사용하기 위해 dispatch를 활성화하며
    const dispatch = useAppDispatch();
    // category변수는 state에 존재하는 categories 값을 가져와 할당한다.
    const category = useAppSelector((state) => state.categories);
    // getActiveCategory는 dispatch를 통해 action을 발생시키며
    // setActiveCategory에 categoryName을 담는다. 즉, category 탭 클릭시
    // 탭에 해당하는 카테고리 이름을 setActiveCategory라는 상태관리 훅을 통해
    // activeCategory에 해당 내용을 담는다.
    const getActiveCategory = () => {
        dispatch(setActiveCategory(categoryName))
    }

    return (
        // button 클릭시 getActiveCategory함수가 활성화되어, 카테고리 내용이 activeCategory에 담기며
        // button 클릭시마다 categoryName이  state에서 가져온 categories와 일치한다면
        // 활성화되고 category의 styling이 변화되도록 className을 변경시켜준다.
        // 클릭되지 않은 categoryTab 버튼에 대해서는 category_button이라는 className을 주어
        // 해당 styling이 적용되도록 한다.
        <button
            className={
                categoryName === category
                    ? styles.active_category
                    : styles.category_button
            }
            onClick={getActiveCategory}
        >
            {text}
        </button>
    )
}

export default CategoryTab