import { forwardRef } from 'react';

const Input = forwardRef((PropTypes, ref) => {
    const { type, placeholder, name } = PropTypes;
    return (
        <input
            type={type}
            className="w-full px-3 py-2 text-sm border rounded opacity-50 placeholder: text-slate-700"
            placeholder={placeholder}
            name={name}
            id={name}
            ref={ref}
        />
    );
});

Input.displayName = 'Input';


export default Input;