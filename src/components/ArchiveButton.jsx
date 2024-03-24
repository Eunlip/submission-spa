import PropTypes from 'prop-types';

export default function ArchiveButton({ id, onArchive, isArchive, children }) {
	return (
		<button
			id={id}
			onClick={() => onArchive(id)}
			title={isArchive ? 'Unarchive' : 'Archive'}
			className='fixed p-1 text-5xl text-white bg-black rounded-full bottom-16 left-10 sm:bottom-20 sm:left-16 lg:left-56'
		>
			{children}
		</button>
	);
}

ArchiveButton.propTypes = {
	id: PropTypes.number.isRequired,
	onArchive: PropTypes.func.isRequired,
	isArchive: PropTypes.bool.isRequired,
	children: PropTypes.node,
};
