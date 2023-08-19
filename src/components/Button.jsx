import classNames from "classnames";

export default function Button({
    children,
    rounded,
    outline,
    variation,
    ...rest
}) {

    const classes = classNames(rest.className, "flex items-center px-3 py-1.5 border", {
        "bg-blue-500 text-white border-blue-600": variation === "primary",
        "bg-gray-900 text-white border-gray-900": variation === "secondary",
        "bg-green-500 text-white border-green-600": variation === "success",
        "bg-yellow-400 text-white border-yellow-600": variation === "warning",
        "bg-red-500 text-white border-red-600": variation === "danger",
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": variation === "primary" && outline,
        "text-gray-900": variation === "secondary" && outline,
        "text-green-500": variation === "success" && outline,
        "text-yellow-400": variation === "warning" && outline,
        "text-red-500": variation === "danger" && outline,
    })

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}