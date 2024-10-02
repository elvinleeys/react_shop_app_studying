import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

// useDispatch와 useSelector메소드는 redux에서 제공하는 메소드이지만
// typescript와 함께 사용할 때 단순히 useDispatch, useSelector를 사용한다면 
// state의 type을 알 수 없다.
// 따라서 state의 type을 지정해주기 위해서 
// store의 getState 메소드를 활용하여 전체 state를 불러온뒤
// typescript의 utility 중 ReturnType을 활용하여 type을 지정하며
// 이것을 RootState로 지정한다.
// 또한 dispatch 역시 dispatch의 typeof 연산자를 통해 type을 지정한뒤
// 반복적인 사용을 줄이기 위해 useAppDispatch라는 커스텀 훅 함수를 생성한다.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// {
//     order: OrderState;
//     product: ProductType;
//     cart: CartState;
//     user: any;
//     categories: CategoriesName;
//     products: ProductsType;
// }

// {
//     state: {
//         order: OrderState;
//         product: ProductType;
//         cart: CartState;
//         user: any;
//         categories: CategoriesName;
//         products: ProductsType;
//     }
// }

// useSelector(state => state.order);
// useAppSelector(state => state.product);