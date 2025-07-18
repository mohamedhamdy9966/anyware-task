import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { login, logout } from '../redux/authSlice';
import { RootState } from '../redux/store';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{t('welcome')}</h1>
        <Button
          variant="contained"
          onClick={() => dispatch(isAuthenticated ? logout() : login())}
        >
          {t(isAuthenticated ? 'logout' : 'login')}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;