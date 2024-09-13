import { forwardRef } from "react";
import Label from "./Label.jsx";
import Input from "./Input.jsx";


const InputFrom = forwardRef((PropTypes, ref) => {
    const { label, name, type, placeholder } = PropTypes;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        </div>
    );
});

InputFrom.displayName = 'InputFrom';

export default InputFrom;