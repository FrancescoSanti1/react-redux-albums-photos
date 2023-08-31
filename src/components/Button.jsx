import classNames from "classnames";

export default function Button({
    children,
    rounded,
    outline,
    variation,
    loading,
    ...rest
}) {

    const classes = classNames(rest.className, "flex items-center px-3 py-1.5 border h-8", {
        "bg-blue-500 border-blue-600": variation === "primary",
        "bg-gray-900 border-gray-900": variation === "secondary",
        "bg-green-500 border-green-600": variation === "success",
        "bg-yellow-400 border-yellow-600": variation === "warning",
        "bg-red-500 border-red-600": variation === "danger",
        "rounded-full": rounded,
        "bg-white": outline,
        "text-white": !outline,
        "text-blue-500": variation === "primary" && outline,
        "text-gray-900": variation === "secondary" && outline,
        "text-green-500": variation === "success" && outline,
        "text-yellow-400": variation === "warning" && outline,
        "text-red-500": variation === "danger" && outline,
        "opacity-80": loading
    })

    return (
        <button {...rest} disabled={loading} className={classes}>
            {loading
                ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                : children
            }
        </button>
    );
}