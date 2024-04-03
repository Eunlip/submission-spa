import { useState, useEffect } from 'react';

export default function useUser() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// Contoh implementasi pengambilan informasi pengguna yang diautentikasi
		// Misalnya, Anda dapat memeriksa apakah pengguna sudah login pada localStorage atau dari backend API
		const authUser = localStorage.getItem('authUser');
		if (authUser) {
			setUser(JSON.parse(authUser)); // Set nilai user jika sudah login
		} else {
			setUser(null); // Kosongkan nilai user jika tidak ada informasi pengguna yang diautentikasi
		}
	}, []);

	return user; // Kembalikan informasi pengguna yang diautentikasi
}
