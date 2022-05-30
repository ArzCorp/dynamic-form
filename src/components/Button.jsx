export default function Button({ red, ...props }) {
	const buttonColor = red ? 'bg-red-600' : 'bg-blue-900'
	return (
		<button
			className={`${buttonColor} text-white px-2 py-1 rounded-md`}
			{...props}
		/>
	)
}
