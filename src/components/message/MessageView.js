import MessageInput from '../input/MessageInput';
import { useState } from 'react';

export default function () {
	const [msgs, setMsgs] = useState([]);

	const msgItems = msgs.map((msg) => (
		<div key={msg} className='row'>
			<span>{msg}</span>
		</div>
	));

	const onPublish = async (msgText) => {
		setMsgs([...msgs, msgText]);

		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			Body: msgText,
			Sender: 'test',
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		fetch('https://localhost:7286/Message', requestOptions)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
	};

	return (
		<div className='container border rounded my-5'>
			{msgItems}
			<div className='row py-3'>
				<div className='col'>
					<MessageInput onPublish={onPublish} />
				</div>
			</div>
		</div>
	);
}
