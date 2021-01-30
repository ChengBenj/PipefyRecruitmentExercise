import Label from "./label"

const Radios = ({ label, value, onChange, options = [] }) => {
    const id = "radio_id";

    return (
        <div className="flex flex-col mb-4">
            <Label>{label}</Label>

            <div className="space-y-2">
                {
                    options.map(option => (
                        <div key={Math.random()} className="space-x-4 flex flex-row items-center">
                            <input type="radio" id={option.id + "radio"} name={id} value={option.id} onChange={() => onChange(option.id)} className="w-4 h-4" checked={option.id === value} />
                            <label htmlFor={option.id + "radio"}>{option.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Radios;