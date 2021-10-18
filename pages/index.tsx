import styles from '../styles/Form.module.css';
import Card from '../components/Card';
import Link from 'next/link';
import NumericInput from '../components/NumericInput';
import { useState } from 'react';

export default function Form() {
	const [doorsQuantity, setDoorsQuantity] = useState(3);
	const [withPrize, setWithPrize] = useState(1);

	return (
		<div className={styles.form}>
			<div>
				<Card bgcolor="#c0392c">
					<h1>Monty Hall</h1>
				</Card>
				<Card>
					<NumericInput
						text="Quantity of Doors"
						value={doorsQuantity}
						onChange={(newQuantity) =>
							setDoorsQuantity(newQuantity)
						}
					/>
				</Card>
			</div>
			<div>
				<Card>
					<NumericInput
						text="Door with Prize"
						value={withPrize}
						onChange={(newDoorWithPrize) =>
							setWithPrize(newDoorWithPrize)
						}
					/>
				</Card>

				<Card bgcolor="#28a085">
					<Link href={`/game/${doorsQuantity}/${withPrize}`} passHref>
						<h2 className={styles.link}>Start</h2>
					</Link>
				</Card>
			</div>
		</div>
	);
}
