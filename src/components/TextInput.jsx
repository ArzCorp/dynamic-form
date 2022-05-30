export default function TextInput({ label, name, error, ...props }) {
	return (
		<div className="w-full flex flex-col gap-1 min-w-[280px]">
			<label className="font-medium" htmlFor={name}>
				{label}
			</label>
			<input
				className="p-1 px-2 border border-gray-800 rounded-md"
				name={name}
				type="text"
				{...props}
			/>
			{error ? <span className="text-red-600 text-sm">{error}</span> : null}
		</div>
	)
}
