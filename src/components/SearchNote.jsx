import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

export default function SearchNote({ keyword, keywordChange }) {
	return (
		<div className='relative flex items-center'>
			<input
				className='relative w-full h-10 p-6 border rounded-lg focus:outline-2 focus:border-transparent'
				type='text'
				placeholder='Search by title...'
				value={keyword}
				onChange={(event) => keywordChange(event.target.value)}
			/>
			<FiSearch className='absolute text-2xl right-5' />
		</div>
	);
}

SearchNote.propTypes = {
	keyword: PropTypes.string.isRequired,
	keywordChange: PropTypes.func.isRequired,
};
