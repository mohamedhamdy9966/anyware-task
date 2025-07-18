import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container } from '@mui/material';
import Sidebar from '../components/Sidebar';
import AnnouncementList from '../components/AnnouncementList';
import QuizList from '../components/QuizList';
import { fetchAnnouncements, fetchQuizzes } from '../redux/dataSlice';
import requireAuth from '../hoc/requireAuth';
import { RootState } from '../redux/store';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const announcements = useSelector((state: RootState) => state.data.announcements);
  const quizzes = useSelector((state: RootState) => state.data.quizzes);

  useEffect(() => {
    dispatch(fetchAnnouncements());
    dispatch(fetchQuizzes());
  }, [dispatch]);

  return (
    <Container maxWidth={false} className="min-h-screen bg-gray-100">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={9}>
          <h1 className="text-2xl font-bold mb-4">{t('dashboard')}</h1>
          <AnnouncementList announcements={announcements} />
          <QuizList quizzes={quizzes} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default requireAuth(Dashboard);