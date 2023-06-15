import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import { authGoogle } from 'redux/auth/operations';

import { Header, Description } from 'components/Main';
import { MainWrapper } from './MainPage.styled';
import { fetchReviews } from '../redux/reviews/operations';

const MainPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const descriptionRef = useRef(null);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    dispatch(authGoogle(token));
  }, [location.search, dispatch]);

  return (
    <>
      <Header />
      <MainWrapper>
        <Description ref={descriptionRef} />
        
      </MainWrapper>
    </>
  );
};

export default MainPage;
