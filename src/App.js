import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Rockets />} />
            <Route path="missions" element={<Missions />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
