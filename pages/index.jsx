import Door from '../components/Door';
import DoorModel from '../model/door';
import { useState } from 'react';

export default function Home() {
	const [d1, setD1] = useState(new DoorModel(1));

	return (
		<div>
			<Door door={d1} />
		</div>
	);
}
