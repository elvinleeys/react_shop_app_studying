import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('user') ?
    JSON.parse(localStorage.getItem('user') || "") : { email: "", token: "", id: "" }

    // toolkit에서 제공하는 createSlice를 활용하여 slice를 생성한다.
export const userSlice = createSlice({
    // 이름 부여
    name: 'user',
    // 기본 값 생성
    initialState,
    // reducer 생성
    reducers: {
        // setUser 메소드는 action 발생시 user의 email과 token, id를 받아오는 역할을 합니다.
        // 또한 받아온 정보를 localstorage에 저장하며 JSON형식으로 문자열화시킵니다.
        setUser: (state, action) => {    
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

            localStorage.setItem('user', JSON.stringify(state));
        },
        // removeUser메소드는 user의 정보를 지워주는 역할로 action 발생시
        // email과 token, id에 빈 문자열을 넣어 지워주는 역할을 합니다.
        // 또한 해당 정보를 localStorage에 저장하고, 저장시 데이터는
        // JSON형식의 문자열을 통해 저장합니다.
        removeUser: (state) => {
            state.email = "";
            state.token = "";
            state.id = "";

            localStorage.setItem('user', JSON.stringify(state));
        }
    }
})

// userSlice내에 존재하는 action들을 비구조화 할당(destructuring)을 통해
// setUser와 removeUser를 내보내 파일 외부에서 사용할 수 있도록 내보냅니다.(export)
export const { setUser, removeUser } = userSlice.actions;
// 각각의 reducer는 rootReducer에서 합쳐주어야 하기때문에
// userSlice의 reducer를 내보내줘야 합니다.
export default userSlice.reducer;