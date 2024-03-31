import { Link } from 'react-router-dom';
import { FaCirclePlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';

export default function AddButton({ path, title }) {
	return (
		<Link to={path} title={title} className='fixed text-6xl right-8 2xl:right-28 bottom-10 2xl:bottom-20'>
			<FaCirclePlus />
		</Link>
	);
}

AddButton.propTypes = {
	path: PropTypes.string.isRequired,
	title: PropTypes.string,
};
