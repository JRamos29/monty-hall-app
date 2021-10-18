import Door from '../components/Door';
import DoorModel from '../model/door';
import { useState } from 'react';

export default function Home() {
	const [d1, setD1] = useState(new DoorModel(1));

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Door value={d1} onChange={(newDoor) => setD1(newDoor)} />
		</div>
	);
}
