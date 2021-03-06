import {Route} from 'react-router-dom';
import {ProtectedRoute} from './config/ProtectedRoutes';
import Landing from '../views/Landing';
import SignUp from '../views/SignUp';
import Login from '../views/Login';
import Customer from '../views/Customer';
import Product from '../views/Product';
import ShoppingCart from '../views/ShoppingCart';
import Checkout from '../views/Checkout';
import Products from '../views/Products';

export default [
  {
    type: Route,
    path: ['/'],
    component: Landing,
    exact: true,
  },
  {
    type: Route,
    path: '/customers/register',
    component: SignUp,
    exact: false
  },
  {
    type: Route,
    path: '/customers/login',
    component: Login,
    exact: false
  },
  {
    type: ProtectedRoute,
    path: '/customer',
    component: Customer,
    exact: false
  },
  {
    type: Route,
    path: '/products/:id',
    component: Product,
    exact: true
  },
  {
    type: Route,
    path: '/shoppingCart',
    component: ShoppingCart,
    exact: true
  },
  {
    type: ProtectedRoute,
    path: '/checkout',
    component: Checkout,
    exact: true
  },
  {
    type: Route,
    path: ['/products', '/products/inDepartment/:departmentId'],
    component: Products,
    exact: true
  }
];
