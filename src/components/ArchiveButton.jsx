import PropTypes from 'prop-types';

export default function ArchiveButton({ id, onArchive, isArchive, children }) {
	return (
		<button
			id={id}
			onClick={() => onArchive(id)}
			title={isArchive ? 'Unarchive' : 'Archive'}
			className='fixed p-1 text-5xl text-white bg-black rounded-full bottom-16 right-28 sm:bottom-20 sm:right-40 lg:right-72 2xl:right-80 '
		>
			{children}
		</button>
	);
}

ArchiveButton.propTypes = {
	id: PropTypes.string.isRequired,
	onArchive: PropTypes.func.isRequired,
	isArchive: PropTypes.bool,
	children: PropTypes.node,
};
