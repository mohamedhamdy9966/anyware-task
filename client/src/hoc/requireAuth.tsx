import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';

const requireAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    
    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" />
    );
  };
  
  return AuthenticatedComponent;
};

export default requireAuth;