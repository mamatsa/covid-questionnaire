import React from 'react';

const CartContext = React.createContext({
  answers: {},
  addAnswer: (key, value) => {},
});

export default CartContext;
