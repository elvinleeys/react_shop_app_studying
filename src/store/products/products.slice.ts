import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";

// fetchProducts라는 변수에 할당하여 다른 컴포넌트들에서 호출할 수 있도록 export를 통해
// 내보낸다.
export const fetchProducts = createAsyncThunk(
    // fetch prefix를 fetchProducts로 설정
    "products/fetchProducts",
    // 비동기 함수를 통해, category와 thunkAPI를 인자로 받고
    async (category: string, thunkAPI) => {
        // try-catch문을 통해 함수의 실행과 에러부분 처리를 맡는다.
        try {
            let response;
            // 만일 category가 존재한다면
            if (category) {
                // axios의 get method를 통해 해당 경로를 통해 products 정보를 받아오며
                response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`);
            } else {
                // category가 없을 때는 모든 데이터를 불러와야한다.
                response = await axios.get<IProduct[]>("https://fakestoreapi.com/products");
            }
            // 반환값으로 payload, 즉 response의 data를 반환한다.
            return response.data; //payload
        } catch (error) {
            // 만일 위의 과정이 발생되지 않고 error가 발생한다면
            // thunkAPI의 rejectWithValue 메소드가 발생되도록 한다.
            return thunkAPI.rejectWithValue("Error loading products");
        }
    }
)

type ProductsType = {
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductsType = {
    products: [],
    isLoading: false,
    error: "",
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    // 보통의 reducer는 내부에서 action을 처리하기 위해 reducer: {} 내부에 정의했으나
    // AsyncThunk와 같이 외부에서 생성된 비동기 함수는 extraReducer를 통해 처리한다. 
    // reducer를 추가하면 프로미스의 진행 상태에 따라서 리듀서를 실행할 수 있습니다.
    extraReducers: (builder) => {
        // 비동기함수의 작동원리는 pending, fullfilled 그리고 함수의 요청이 거절됐을 때 rejected상태를 거친다.
        // 이를 builder case를 통해 각 단계를 제어할 수 있다.
        builder
            .addCase(fetchProducts.pending, (state) => {
                // pending상태는 요청을 보내고 요청이 끝나지 않은 상태이므로
                // isLoading을 true로 설정해준다.
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // fulfilled상태는 응답이 온상태이기 때문에
                // isLoading상태는 false로 변경하고
                state.isLoading = false;
                // 요청에 대한 응답이 왔기에 응답온 데이터를 state의 products에 담아준다.
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                // 요청을 거절당했으므로
                // isLoading은 false로 변경해주고
                state.isLoading = false;
                // state의 error는 error문구를 보여주기 위해 action의 payload로 보여준다.
                // 해당 payload의 문구 type은 string이기에 alias를 이용해 string으로 설정
                // 해당 payload는 fetchProducts함수의 Error loading products 문구이다.
                state.error = action.payload as string;
            })
    }
})


export default productsSlice.reducer;
//  ==> sub reducer 