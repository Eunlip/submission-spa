import { useContext, useEffect, useState } from 'react';
import { filterNotes } from '../utils/local-data';
import { getArchivedNotes, archiveNote } from '../utils/network-data';
import { Link, useSearchParams } from 'react-router-dom';
import NoteList from './NoteList';
import AddButton from './button/AddButton';
import SearchNote from './SearchNote';
import LocaleContext from '../contexts/LocaleContext';
import { localeTitleChange } from '../utils';

export default function ArchiveNotes() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(true);
	const [notes, setNotes] = useState([]);
	const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
	const { locale } = useContext(LocaleContext);

	function onKeywordChangeHandler(keyword) {
		setKeyword(keyword);
		setSearchParams({ keyword });
	}

	useEffect(() => {
		getArchivedNotes()
			.then(({ data }) => {
				setNotes(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	});

	const archiveNotes = filterNotes(notes, keyword);

	return (
		<div className='mt-10 '>
			<div className='flex items-center justify-between mb-3 mt-7 sm:mt-5'>
				<Link to='/' className={`px-6 py-1 font-bold rounded-md cursor-pointer`}>
					{localeTitleChange(locale, 'Catatan Aktif', 'Active Notes')}
				</Link>
				<h2
					className={`px-6 py-1 font-bold rounded-md cursor-pointer ${
						archiveNote
							? 'bg-dark-green dark:bg-[#2c343e] dark:shadow-black dark:shadow-sm text-white'
							: 'bg-white text-black'
					}`}
				>
					{localeTitleChange(locale, 'Catatan Arsip', 'Archive Notes')}
				</h2>
			</div>
			<SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler} />
			<div className={`flex flex-col items-center justify-center `}>
				{isLoading && <p className='justify-center font-bold text-center mt-60'>Loading...</p>}
				{!isLoading &&
					(archiveNotes.length ? (
						<NoteList notes={archiveNotes} />
					) : (
						<p className='justify-center font-bold text-center mt-60'>
							{localeTitleChange(
								locale,
								'Anda tidak memiliki catatan Arsip.',
								"You don't have any active records.",
							)}
						</p>
					))}
			</div>
			<AddButton path='/notes/new' />
		</div>
	);
}
