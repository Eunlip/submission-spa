import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { GB, ID } from 'country-flag-icons/react/1x1';

export default function ToggleLocale() {
	const { locale, toggleLocale } = useContext(LocaleContext);

	return (
		<button className='w-5 hover:opacity-95' onClick={toggleLocale}>
			{locale === 'id' ? (
				<ID className='rounded-full shadow-lg' title='Indonesia' />
			) : (
				<GB className='rounded-full shadow-lg' title='English' />
			)}
		</button>
	);
}
