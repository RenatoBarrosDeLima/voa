import React, { useState, useCallback } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState(null);

  const onAddToCart = useCallback(
    (campaignId, value = true, anonymous = false) => {
      const newCart = { campaignId: campaignId, value: value, anonymous: anonymous };
      setCart(newCart);

      localStorage.setItem('cart', JSON.stringify(newCart));
    },
    [cart]
  );

  const getCart = useCallback(() => {
    const cartStorage = localStorage.getItem('cart');
    const cartSaved = JSON.parse(cartStorage);
    return cartSaved;
  })

  const removeCart = useCallback(() => {
    localStorage.removeItem('cart');
    setCart(null);
    return true;
  })

  return {
    onAddToCart, getCart, removeCart
  }

}
