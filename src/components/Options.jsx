export default function Options({ label, options = [], value, ...props }) {
	return (
		<div className="min-w-[280px]">
			<label className="mb-1 font-medium">{label}</label>
			{options.map((option) => (
				<div key={option} className="flex items-center gap-1">
					<input
						type="radio"
						value={option}
						checked={value === option}
						{...props}
					/>
					{option}
				</div>
			))}
		</div>
	)
}
