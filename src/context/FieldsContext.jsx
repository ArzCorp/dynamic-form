import { initialFields } from '../utils/fields'
import { createContext, useState } from 'react'

export const FieldContext = createContext()

export default function FieldsContext({ children }) {
	const [fields, setFields] = useState(initialFields)

	const addField = (field) => {
		setFields([...fields, field])
	}

	const removeField = (id) => {
		setFields(fields.filter((field) => field.id !== id))
	}

	console.log(fields)

	return (
		<FieldContext.Provider value={{ fields, addField, removeField }}>
			{children}
		</FieldContext.Provider>
	)
}
