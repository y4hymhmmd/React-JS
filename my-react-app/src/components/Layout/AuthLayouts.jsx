
const AuthLayout = (PropTypes) => {
    const { children, title } = PropTypes;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500">Welcome, Please enter your details</p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;
