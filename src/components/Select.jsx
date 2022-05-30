import { useState } from 'react'
import TextInput from './TextInput'

export default function Select({ name, label, options = [], error }) {
	const [open, setOpen] = useState(false)
	const isOpen = open ? 'block' : 'hidden'

	return (
		<div className="relative w-full min-w-[280px]">
			<TextInput
				name={name}
				label={label}
				error={error}
				readOnly
				placeholder="--selecciona--"
				onClick={() => setOpen(!open)}
			/>
			<ul
				className={`${isOpen} absolute top-[85px] border border-gray-800 bg-white min-w-max w-full`}
			>
				{options.map((option) => (
					<li
						key={option}
						className="py-2 px-1 hover:bg-blue-400"
						onClick={() => setOpen(!open)}
					>
						{option}
					</li>
				))}
			</ul>
		</div>
	)
}
