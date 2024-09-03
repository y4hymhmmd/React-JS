const Label = (PropTypes) => {
    const { htmlFor, children } = PropTypes;
    return (
        <label htmlFor={htmlFor} className="block mb-2 text-sm font-bold text-slate-700">{children}</label>
    )
}

export default Label;