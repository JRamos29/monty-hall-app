import styles from '../../../styles/Game.module.css';
import Door from '../../../components/Door';
import { useState, useEffect } from 'react';
import { createDoors, updateDoors } from '../../../functions/doors';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function game() {
	const router = useRouter();
	const [doors, setDoors] = useState([]);
	const [valid, setValid] = useState(false);

	useEffect(() => {
		const doorsQuantity = +router.query.doors;
		const hasPrize = +router.query.hasPrize;

		const validDoorsQuantity = doorsQuantity >= 3 && doorsQuantity <= 100;
		const validHasPrize = hasPrize >= 1 && hasPrize <= doorsQuantity;

		setValid(validDoorsQuantity && validHasPrize);
	}, [doors]);

	useEffect(() => {
		const doorsQuantity = +router.query.doors;
		const hasPrize = +router.query.hasPrize;
		setDoors(createDoors(doorsQuantity, hasPrize));
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
			<div className={styles.doors}>
				{valid ? renderDoors() : <h2>Invalid Values!</h2>}
			</div>
			<div className={styles.buttons}>
				<Link href="/">
					<button>Restart</button>
				</Link>
			</div>
		</div>
	);
}
