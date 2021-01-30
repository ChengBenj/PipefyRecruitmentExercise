import Label from "./label"

const Select = ({ label, value, onChange, options = [] }) => {
    return (
        <div className="flex flex-col mb-4">
            <Label>{label}</Label>
            <select
                className="rounded-md border border-border hover:border-blue-400 focus:border-blue-500 focus:outline-none p-4"
                onChange={e => onChange(e.target.value)}
                value={value}
            >
                <option value={0}>Select an option</option>
                {
                    options.map(option => (
                        <option key={Math.random()} value={option.id}>{option.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select;