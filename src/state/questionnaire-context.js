import React from 'react';

const CartContext = React.createContext({
  answers: {},
  addAnswer: (key, value) => {},
  resetContext: () => {},
});

export default CartContext;
