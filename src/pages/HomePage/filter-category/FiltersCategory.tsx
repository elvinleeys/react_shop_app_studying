import React from 'react'
import { CategoriesName } from '../../../store/categories/categories.type';
import CategoryTab from './category-tab/CategoryTab';
import styles from './FiltersCategory.module.scss';

const FiltersCategory = () => {
    return (
        // style을 Filter_category로 명명된 scss로부터 스타일링한다.
        <div className={styles.filter_category}>
            <CategoryTab text={"모두"} categoryName={CategoriesName.All} />
            <CategoryTab text={"전자기기"} categoryName={CategoriesName.Electronics} />
            <CategoryTab text={"쥬얼리"} categoryName={CategoriesName.Jewelry} />
            <CategoryTab text={"남성의류"} categoryName={CategoriesName.MensClothing} />
            <CategoryTab text={"여성의류"} categoryName={CategoriesName.WomensClothing} />
        </div>

    )
}

export default FiltersCategory