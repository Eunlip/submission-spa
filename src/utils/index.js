import PropTypes from 'prop-types';

const localeTitleChange = (locale, idText, enText) => {
	return locale === 'id' ? idText : enText 
}

const showFormattedDate = (date, locale) => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const localeToUse = locale === 'en' ? 'en-US' : 'id-ID';
	return new Date(date).toLocaleDateString(localeToUse, options);
};

const noteItemPropTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
};

export {localeTitleChange, showFormattedDate, noteItemPropTypes };
