import {combineReducers} from "redux";

// Store and Checkout
import products from "./products/productReducer";
import singleProduct from "./product/singleProductReducer";
import cart from "./cart/cartReducer";
import scrollBottom from "./infiniteScroll/scrollReducer";

// Gives Total value and Quantity, used in USEEFFECT on render in MiniMeny. Also is used in Checkout
import totalReducer from "./total/totalReducer";

//AUTH
import authReducer from "./login/reducers/authReducers";
import errorReducer from "./login/reducers/errorReducers";

import socketHandler from "./socket/socketReducer";
//AUTH

//users
import userReducer from "./users/usersReducer";

export default combineReducers({
  chat: socketHandler,
  products: products,
  singleProduct: singleProduct,
  cart: cart,
  scrollBottom: scrollBottom,
  total: totalReducer,
  auth: authReducer,
  errors: errorReducer,
  users: userReducer
});
