import styles from '../../../styles/Game.module.css';
import Door from '../../../components/Door';
import { useState } from 'react';
import { createDoors, updateDoors } from '../../../functions/doors';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function game() {
	const router = useRouter();
	const [doors, setDoors] = useState([]);

	useEffect(() => {
		const doorsAmount = +router.query.doors;
		const hasPrize = +router.query.hasPrize;
		setDoors(createDoors(doorsAmount, hasPrize));
	}, [router?.query]);

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

	return (
		<div id={styles.game}>
			<div className={styles.doors}>{renderDoors()}</div>
			<div className={styles.buttons}>
				<Link href="/">
					<button>Restart</button>
				</Link>
			</div>
		</div>
	);
}
