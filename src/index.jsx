import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { StrictMode } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
// import { AddPage, DetailPage, HomePage, LoginPage, RegisterPage, WelcomePage } from './pages';
// import ArchiveNotes from './components/ArchiveNotes';
// import RequireAuth from './components/RequireAuth';
import App from './App.jsx';
import Page404 from './pages/404Page.jsx';

export const router = createBrowserRouter(
	createRoutesFromElements(<Route path='*' element={<App />} errorElement={<Page404 />} />),
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
