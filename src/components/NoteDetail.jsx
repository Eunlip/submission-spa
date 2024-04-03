import PropTypes from 'prop-types';
import NoteBodyParse from './NoteBodyParse';
import { localeTitleChange, showFormattedDate } from '../utils';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import DeleteButton from './button/DeleteButton';
import ArchiveButton from './button/ArchiveButton';
import { BiSolidArchiveIn, BiSolidArchiveOut } from 'react-icons/bi';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

export default function NoteDetail({ note, id, onDelete, onArchive }) {
	const { title, createdAt, body, archived } = note;
	const { locale } = useContext(LocaleContext);

	return (
		<div className=''>
			<Link to='/' className='absolute top-24'>
				<IoArrowBackCircleSharp className='text-5xl text-x2' />
			</Link>
			<h1 className='pt-5 text-xl font-bold text-center'>
				{archived
					? localeTitleChange(locale, 'Arsip', 'Archive')
					: localeTitleChange(locale, 'Aktif', 'Active')}
			</h1>
			<div className='flex flex-col px-4 my-16 sm:my-24'>
				<div className='flex flex-col mb-7'>
					<h3 className='text-3xl font-bold'>{title}</h3>
					<p className='text-xs text-secondary dark:text-[#d3d3d3]'>
						{showFormattedDate(createdAt, locale)}
					</p>
				</div>
				<NoteBodyParse className='text-justify ' body={body} />
			</div>
			<DeleteButton id={id} onDelete={onDelete} />
			<ArchiveButton id={id} onArchive={onArchive}>
				{archived ? <BiSolidArchiveOut /> : <BiSolidArchiveIn />}
			</ArchiveButton>
		</div>
	);
}

NoteDetail.propTypes = {
	note: PropTypes.shape({
		title: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		archived: PropTypes.bool.isRequired,
	}).isRequired,
	id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
	onArchive: PropTypes.func.isRequired,
};
