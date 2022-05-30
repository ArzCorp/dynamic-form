import { useState } from 'react'
import Button from './Button'
import TextInput from './TextInput'

export default function AddOptions({ onChange, initialOptions = [] }) {
	const [value, setValue] = useState('')
	const [options, setOptions] = useState(initialOptions)

	const submit = (e) => {
		e.preventDefault()
		setOptions([...options, value])
		onChange([...options, value])
	}

	const removeOption = (idx) => {
		const newOptions = options.filter((option, index) => idx !== index)
		setOptions(newOptions)
		onChange(newOptions)
	}

	return (
		<>
			<h3 className="font-bold text-xl">Opciones</h3>
			<div className="flex gap-10 items-center">
				<div>
					<TextInput
						value={value}
						onChange={(e) => setValue(e.target.value)}
						label="Nombre de la opción"
						placeholder="Nombre aqui"
					/>
				</div>
				<div>
					<Button type="button" onClick={submit}>
						Agregar opción
					</Button>
				</div>
			</div>
			<ul className="flex flex-col gap-3">
				{options.map((option, i) => (
					<li className="flex border-b border-gray-900 pb-3" key={option}>
						<p className="mr-3">{option}</p>
						<Button red type="button" onClick={() => removeOption(i)}>
							Eliminar
						</Button>
					</li>
				))}
			</ul>
		</>
	)
}
