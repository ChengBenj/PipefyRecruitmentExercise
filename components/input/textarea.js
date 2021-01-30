import Label from "./label"

const TextArea = ({ label, value, onChange }) => {
    return (
        <div className="flex flex-col mb-4">
            <Label>{label}</Label>
            <textarea
                className="rounded-md border border-border hover:border-blue-400 focus:border-blue-500 focus:outline-none p-4"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}

export default TextArea;