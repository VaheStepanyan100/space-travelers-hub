import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
