import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterNotes } from '../utils/local-data';
import { getActiveNotes } from '../utils/network-data';

export default function useHomePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
	const [activeNotes, setActiveNotes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	function onKeywordChangeHandler(keyword) {
		setKeyword(keyword);
		setSearchParams({ keyword });
	}

	useEffect(() => {
		getActiveNotes()
			.then(({ data }) => {
				setActiveNotes(filterNotes(data, keyword));
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [keyword]);

	return { searchParams, keyword, activeNotes, isLoading, onKeywordChangeHandler };
}
