import React, { useState, useCallback } from 'react';

export const useAuth = () => {
  const [auth, setAuth] = useState(null);

  const onAddToAuth = useCallback(
    (auth = true) => {
      const newAuth = auth;
      setAuth(newAuth);
      localStorage.setItem('auth', JSON.stringify(newAuth));
    },
    [auth]
  );

  const getAuth = useCallback(() => {
    const authStorage = localStorage.getItem('auth');
    const authSaved = JSON.parse(authStorage);
    return authSaved;
  })

  const removeAuth = useCallback(() => {
    localStorage.removeItem('auth');
    setAuth(null);
    return true;
  })

  const isAuthenticated = useCallback(() => {
    const authStorage = localStorage.getItem('auth');
    const authSaved = JSON.parse(authStorage);
    if (authSaved) {
      return true;
    } else {
      return false;
    }
  })

  return {
    onAddToAuth, getAuth, removeAuth, isAuthenticated
  }

}
