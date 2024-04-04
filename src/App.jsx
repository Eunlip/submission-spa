import { useEffect, useMemo, useState } from 'react';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import ArchiveNotes from './components/ArchiveNotes';
import {
	AddPage,
	DetailPage,
	HomePage,
	LoginPage,
	Page404,
	// Page404,
	RegisterPage,
	WelcomePage,
} from './pages';
import LandingPage from './pages/LandingPage';

function App() {
	const [authUser, setAuthUser] = useState(null);
	const [initializing, setInitializing] = useState(true);
	const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
	const navigate = useNavigate();

	const toggleLocale = () => {
		setLocale((prevLocale) => {
			const newLocale = prevLocale === 'id' ? 'en' : 'id';
			localStorage.setItem('locale', newLocale);
			return newLocale;
		});
	};

	const localeValue = useMemo(() => {
		return { locale, toggleLocale };
	}, [locale]);

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	const themeValue = useMemo(() => {
		return { theme, toggleTheme };
	}, [theme]);

	const onLoginSuccess = async (response) => {
		if (response !== null) {
			const { accessToken } = response;
			putAccessToken(accessToken);

			const userResponse = await getUserLogged();
			const { data } = userResponse;

			if (data) {
				setAuthUser(data);
			}

			navigate('/');
		}
	};

	const onLogout = () => {
		setAuthUser(null);
		putAccessToken(null);
		navigate('/login');
	};

	// useEffect(() => {
	// 	document.documentElement.setAttribute('data-theme', themeValue.theme);
	// }, [themeValue.theme]);

	useEffect(() => {
		if (themeValue.theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [themeValue.theme]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await getUserLogged();
				setAuthUser(data);
			} catch (error) {
				console.error('Error fetching user data', error);
			} finally {
				setInitializing(false);
			}
		};

		fetchData();
	}, []);

	if (initializing) {
		return null;
	}

	return (
		<ThemeProvider value={themeValue}>
			<LocaleProvider value={localeValue}>
				<Routes>
					{!authUser ? (
						<Route path='/' element={<Layout authUser={authUser} />}>
							<Route index element={<LandingPage />} />
							<Route path='/welcomePage' element={<WelcomePage />} />
							<Route path='/login' element={<LoginPage loginSuccess={onLoginSuccess} />} />
							<Route path='/register' element={<RegisterPage />} />
						</Route>
					) : (
						<Route
							path='/'
							element={
								<Layout
									onLogout={onLogout}
									name={authUser.name}
									authUser={authUser}
									errorElement={<Page404 />}
								/>
							}
						>
							<Route index element={<HomePage />} />
							<Route path='/notes/archive' element={<ArchiveNotes />} />
							<Route path='/notes/new' element={<AddPage />} />
							<Route path='/notes/:id' element={<DetailPage />} />
						</Route>
					)}
					<Route path='*' element={<Page404 />} />
				</Routes>
			</LocaleProvider>
		</ThemeProvider>
	);
}

export default App;
