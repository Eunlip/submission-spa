import parser from 'html-react-parser';
import PropTypes from 'prop-types';

export default function NoteBodyParse({ className, body }) {
	return <div className={className}>{parser(body)}</div>;
}

NoteBodyParse.propTypes = {
	className: PropTypes.string,
	body: PropTypes.string.isRequired,
};
