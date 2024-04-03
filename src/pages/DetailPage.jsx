import { useContext, useEffect, useState } from 'react';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import { useNavigate, useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import Page404 from './404Page';
import LocaleContext from '../contexts/LocaleContext';
import { localeTitleChange } from '../utils';

export default function DetailPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [note, setNote] = useState('');
	const { id } = useParams();
	const { locale } = useContext(LocaleContext);
	const navigate = useNavigate();

	useEffect(() => {
		getNote(id)
			.then(({ data }) => {
				setNote(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [id]);

	async function onDeleteHandler() {
		const Delete = localeTitleChange(
			locale,
			'Apakah anda yakin ingin menghapus catatan ini?',
			'Are you sure you want to delete this note?',
		);
		const alertDelete = confirm(Delete);
		if (!alertDelete) return;

		await deleteNote(note.id);
		const pathParameter = note.archived ? '/notes/archive' : '/';
		navigate(pathParameter);
	}

	async function onArchiveHandler() {
		if (note && !note.archived) {
			const Archive = localeTitleChange(
				locale,
				'Apakah anda yakin ingin mengarsipkan catatan ini?',
				'Are you sure you want to archive this note?',
			);
			const alertArchive = confirm(Archive);
			if (!alertArchive) return;

			archiveNote(note.id);
			navigate('/');
		}
	}

	async function onUnarchiveHandler() {
		if (note && note.archived) {
			const Unarchive = localeTitleChange(
				locale,
				'Apakah anda yakin ingin membuka arsip catatan ini?',
				'Are you sure you want to unarchive this note?',
			);
			const alertUnarchive = confirm(Unarchive);
			if (!alertUnarchive) return;

			unarchiveNote(note.id);
			navigate('/notes/archive');
		}
	}

	if (isLoading) return <p className='font-bold text-center mt-60'>Loading...</p>;

	return (
		<div>
			<div className='h-full py-5'>
				{note && !isLoading ? (
					<NoteDetail
						id={note.id}
						onDelete={onDeleteHandler}
						onArchive={!note.archived ? onArchiveHandler : onUnarchiveHandler}
						note={note}
					/>
				) : (
					<Page404 />
				)}
			</div>
		</div>
	);
}
