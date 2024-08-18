import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionsType";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    case INCREASE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case DECREASE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
    default:
      return state;
  }
};
