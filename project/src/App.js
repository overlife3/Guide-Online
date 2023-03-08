import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import MainPage from './pages/MainPage';
import SideMenu from './components/SideMenu';
import './style/normalize.css'
import './style/index.css'
import ProfilePage from './pages/ProfilePage';
import ActionPage from './pages/ActionPage';
import FilmPage from './pages/FilmPage';
import EditProfilePage from './pages/EditProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import Test from './Test';

function App() {
  return (
    <>
			<Header />
			<SideMenu />
			<Routes>
				<Route path='/' element={<MainPage />}/>
				<Route path='/profile' element={<ProfilePage />}/>
				<Route path='/actions/:id' element={<ActionPage />} />
				<Route path='/films/:id' element={<FilmPage />} />
				<Route path='/editprofile' element={<EditProfilePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/searchfilm' element={<SearchPage />} />

				<Route path='/test' element={<Test />} />

			</Routes>
		</>
  );
}

export default App;
