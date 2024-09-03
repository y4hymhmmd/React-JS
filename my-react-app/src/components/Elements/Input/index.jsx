import Label from "./Label.jsx";
import Input from "./Input.jsx";

const InputFrom = (PropTypes) => {
    const { label, name, type, placeholder } = PropTypes;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputFrom;