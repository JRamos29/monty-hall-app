import Door from '../components/Door';
import DoorModel from '../model/door';
import { useState } from 'react';
import { createDoors, updateDoors } from '../functions/doors';

export default function Home() {
	const [doors, setDoors] = useState(createDoors(3, 2));

	console.log(createDoors(3, 2));

	function renderDoors() {
		return doors.map((door) => {
			return (
				<Door
					key={door.number}
					value={door}
					onChange={(newDoor) =>
						setDoors(updateDoors(doors, newDoor))
					}
				/>
			);
		});
	}

	return <div style={{ display: 'flex' }}>{renderDoors()}</div>;
}
