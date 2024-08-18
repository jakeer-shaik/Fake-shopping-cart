import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = [];
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider
export const useCart = () => {
  return useContext(CartContext);
};
