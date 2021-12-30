import { useState } from 'react';

export default function (props) {
	const [msgText, setMsgText] = useState('');
	const { onPublish } = props;

	const innerOnPublish = () => {
		onPublish(msgText);
		setMsgText('');
	};

	return (
		<div className='input-group'>
			<textarea
				value={msgText}
				onChange={(e) => setMsgText(e.target.value)}
				className='form-control'
				aria-label='With textarea'
			></textarea>
			<button
				onClick={innerOnPublish}
				className='btn btn-outline-secondary'
				type='button'
			>
				Publish
			</button>
		</div>
	);
}
