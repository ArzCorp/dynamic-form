import { useContext } from 'react'
import { FieldContext } from '../context/FieldsContext'
import Button from './Button'

import Options from './Options'
import Select from './Select'
import TextInput from './TextInput'

export default function Form() {
	const { removeField } = useContext(FieldContext)
	const { fields } = useContext(FieldContext)
	return (
		<form className="flex flex-wrap gap-x-5 gap-y-3">
			{fields.map((field, idx) => {
				return field.fieldType === 'text' ? (
					<div key={field.id} className="flex gap-3 flex-col">
						<TextInput label={field.label} placeholder={field.placeholder} />
						<Button red onClick={() => removeField(field.id)} type="button">
							eliminar
						</Button>
					</div>
				) : field.fieldType === 'select' ? (
					<div key={field.id} className="flex gap-3 flex-col">
						<Select label={field.label} options={field.options} />
						<Button red onClick={() => removeField(field.id)} type="button">
							eliminar
						</Button>
					</div>
				) : field.fieldType === 'options' ? (
					<div key={field.id} className="flex gap-3 flex-col">
						<Options
							value="Opción 1"
							label={field.label}
							options={field.options}
							onChange={(e) => console.log(e.target.value)}
						/>
						<Button red onClick={() => removeField(field.id)} type="button">
							eliminar
						</Button>
					</div>
				) : null
			})}
		</form>
	)
}
