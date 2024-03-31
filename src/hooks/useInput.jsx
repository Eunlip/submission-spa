import { useState } from 'react';

export default function useInput(defaultInput = '') {
	const [value, setValue] = useState(defaultInput);

	const onValueChangeHandler = (event) => {
		setValue(event.target.value);
	};

	return { value, onValueChangeHandler };
}
