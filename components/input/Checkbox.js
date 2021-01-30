import Label from "./label"

const CheckboxList = ({ label, value, onChange, options = [] }) => {
    const id = "checkbox_id";
    const valueList = new Set(value);

    const handleClick = (e) => {
        const option = parseInt(e.target.value);

        if (!e.target.checked && valueList.has(option)) {
            valueList.delete(option);
            onChange([...valueList])
        } else {
            valueList.add(option);
            onChange([...valueList])
        }
    }

    return (
        <div className="flex flex-col mb-4">
            <Label>{label}</Label>

            <div className="space-y-2">
                {
                    options.map(option => (
                        <div key={Math.random()} className="space-x-4 flex flex-row items-center">
                            <input type="checkbox" id={option.id + option.name} name={id} value={option.id} className="w-4 h-4" checked={valueList.has(option.id)} onChange={handleClick} />
                            <label htmlFor={option.id + option.name}>{option.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CheckboxList;