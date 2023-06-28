import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../redux/rockets/thunks';
import RocketElement from './RocketElement';
import { selectRockets } from '../redux/store';
import { GET_ROCKETS } from '../redux/api';

const RocketsPage = () => {
  const dispatch = useDispatch();

  const { rockets, isLoading, error } = useSelector(selectRockets);

  useEffect(() => {
    if (rockets.length > 0) return;
    dispatch(fetchRockets({ url: GET_ROCKETS }));
  }, [dispatch, rockets.length]);

  if (error) {
    return (
      <div>
        Something went wrong:
        <br />
        &quot;
        {error}
        &quot;
      </div>
    );
  }

  return (
    <section>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <ul style={{ marginRight: '3em' }}>
            {rockets.map((rocket) => (
              <RocketElement key={rocket.id} rocket={rocket} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default RocketsPage;
