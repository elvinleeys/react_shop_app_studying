import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    // 중첩 라우팅
    // Browser 환경에서 주소가 변경되면 해당주소에 대응하는 뷰를 제공하기 위해
    // BrowserRouter에 감싸져 있는 이하 컴포넌트들에게 라우팅과 관련된 정보를 제공한다. 
    <BrowserRouter>
      {/* Routing을 처리해주기위해서는 이렇게 Routes로 감싸주고 */}
      <Routes>
        {/* Route 태그를 통해 해당 경로(path)로 진입시 
          대응되는 컴포넌트(element)를 랜더링시킨다. */}
        <Route path='/' element={<Layout />}>
          {/* Layout의 자녀 컴포넌트들 => Outlet에서 나옴 */}
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
