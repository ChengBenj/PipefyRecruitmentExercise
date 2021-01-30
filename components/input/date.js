import Label from "./label"

const DatePicker = ({ label, value, onChange }) => {
    return (
        <div className="flex flex-col mb-4">
            <Label>{label}</Label>
            <input type="date" value={value} onChange={e => onChange(e.target.value)} className="rounded-md border border-border hover:border-blue-400 focus:border-blue-500 focus:outline-none p-4" />
        </div>
    )
}

export default DatePicker;