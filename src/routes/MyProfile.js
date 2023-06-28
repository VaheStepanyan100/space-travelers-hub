import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ProfileRocktes from '../components/ProfileRocktes';
import ProfileMissions from '../components/ProfileMissions';
import { selectMissions } from '../redux/store';

const MyProfile = () => {
  const {
    missionItems,
  } = useSelector(selectMissions);
  const filterReserved = (missions) => missions.filter((mission) => mission.reserved);
  const filteredMissions = filterReserved(missionItems);

  return (
    <Section>
      <ProfileMissions missions={filteredMissions} />
      <ProfileRocktes />
    </Section>
  );
};

export default MyProfile;

const Section = styled.section`
display: flex;
flex-direction: column;

@media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-around;

  div {
    width: 40%;
  }
}
`;
