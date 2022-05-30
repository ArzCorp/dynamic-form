import { useState } from 'react'
import AddInput from './components/AddInput'
import Form from './components/Form'

const fields = [
	{ id: 1, name: 'text' },
	{ id: 2, name: 'select' },
	{ id: 3, name: 'options' },
]

function App() {
	const [selected, setSelected] = useState('select')

	const isActive = (name) => (name === selected ? 'text-blue-700' : '')

	return (
		<section className="bg-gray-100 min-h-screen">
			<div className="text-gray-900 max-w-screen-xl mx-auto flex gap-10 py-3">
				<div className="w-6/12">
					<Form />
				</div>
				<div className="border-l border-gray-800 pl-10 w-6/12">
					<h3 className="font-bold text-xl">{`Añair campo tipo`}</h3>
					<ul className="flex gap-2 mb-5">
						{fields.map((field) => (
							<li
								className={`${isActive(
									field.name
								)} px-2 py-1 hover:underline cursor-pointer`}
								key={field.id}
								onClick={() => setSelected(field.name)}
							>
								{field.name}
							</li>
						))}
					</ul>
					<AddInput type={selected} />
				</div>
			</div>
		</section>
	)
}

export default App
