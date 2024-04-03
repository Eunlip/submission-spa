import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchNote from '../components/SearchNote';
import NoteList from '../components/NoteList';
import AddButton from '../components/button/AddButton';
import LocaleContext from '../contexts/LocaleContext';
import useHomePage from '../hooks/useHomePage';
import { localeTitleChange } from '../utils';

export default function HomePage() {
	const { locale } = useContext(LocaleContext);
	const { keyword, activeNotes, isLoading, onKeywordChangeHandler } = useHomePage();

	return (
		<div className='mt-10'>
			<div className='flex items-center justify-between mb-3 mt-7 sm:mt-5'>
				<h2
					className={`px-6 py-1 font-bold rounded-md cursor-pointer ${
						activeNotes
							? 'bg-dark-green dark:bg-[#2c343e] dark:shadow-black dark:shadow-sm text-white'
							: 'bg-white text-black'
					} `}
				>
					{localeTitleChange(locale, 'Catatan Aktif', 'Active Notes')}
				</h2>
				<Link to='/notes/archive' className={`px-6 py-1 font-bold rounded-md cursor-pointer `}>
					{localeTitleChange(locale, 'Catatan Arsip', 'Archive Notes')}
				</Link>
			</div>
			<SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler} />
			<div className='flex flex-col items-center justify-center '>
				{isLoading ? (
					<p className='justify-center font-bold text-center mt-60'>Loading...</p>
				) : null}
				{!isLoading &&
					(activeNotes.length ? (
						<NoteList notes={activeNotes} />
					) : (
						<p className='justify-center font-bold text-center mt-60'>
							{localeTitleChange(
								locale,
								'Anda tidak memiliki catatan aktif',
								"You don't have any active records",
							)}
						</p>
					))}
			</div>
			<AddButton path='/notes/new' title='Add note' />
		</div>
	);
}
