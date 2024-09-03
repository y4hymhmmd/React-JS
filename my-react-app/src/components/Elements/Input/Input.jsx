const Input = (PropTypes) => {
    const { type, placeholder, name } = PropTypes;
    return (
        <input type={type} className="w-full px-3 py-2 text-sm border rounded opacity-50 placeholder: text-slate-700"
            placeholder={placeholder} name={name} id={name}/>
    )
}

export default Input;