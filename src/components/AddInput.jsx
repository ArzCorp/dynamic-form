import { useContext, useState } from 'react'
import { FieldContext } from '../context/FieldsContext'

import AddOptions from './AddOptions'
import Button from './Button'
import TextInput from './TextInput'

export default function AddSelect({ type = 'select', initialValues = {} }) {
	const { addField } = useContext(FieldContext)
	const [values, setValues] = useState(initialValues)

	const submit = (e) => {
		e.preventDefault()
		const id = crypto.randomUUID()
		addField({ id, fieldType: type, ...values })
		setValues({})
	}

	return (
		<form className="flex flex-col gap-5" onSubmit={submit}>
			<TextInput
				name="label"
				label="Nombre de label:"
				value={values.label}
				onChange={(e) =>
					setValues({
						...values,
						[e.target.name]: e.target.value,
					})
				}
			/>
			{type !== 'text' ? (
				<AddOptions
					initialOptions={values.options}
					onChange={(options) =>
						setValues({
							...values,
							options,
						})
					}
				/>
			) : null}
			<Button type="submit">Añadir Campo</Button>
		</form>
	)
}
