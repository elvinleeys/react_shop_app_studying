import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesName } from "./categories.type";


const initialState = CategoriesName.All;

// 화면단에서 남성옷, 여성옷, 전자기기 등 category를 선택시 
// 그에 대한 정보를 업데이트하기 위한 reducer
export const categoriesSlice = createSlice({
    // 이름은 category이며
    name: "category",
    // 값을 초기화해주고
    initialState,
    // setActiveCategory메소드는 action의 payload에 category 정보가 담기도록 한다.
    reducers: {         
        setActiveCategory: (_, action: PayloadAction<CategoriesName>) => action.payload
    }
})


export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;