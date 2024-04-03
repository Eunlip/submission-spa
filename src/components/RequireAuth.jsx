import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function RequireAuth() {
	const authUser = useUser();

	if (!authUser) return <Navigate to='/login' />;

	return <Outlet />;
}
