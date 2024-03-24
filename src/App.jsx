import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import DetailPage from './pages/DetailPage';
import Pages404 from './pages/404Page';
import Layout from './layout/Layout';
import ArchiveNotes from './components/ArchiveNotes';
import AddPage from './pages/AddPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<WelcomePage />} />
				<Route path='/notes' element={<HomePage />} />
				<Route path='/notes/archive' element={<ArchiveNotes />}/>
				<Route path='/notes/:id' element={<DetailPage />}/>
				<Route path='/notes/new' element={<AddPage />} />
				<Route path='*' element={<Pages404 />}/>
			</Route>
		</Routes>
	);
}

export default App;
