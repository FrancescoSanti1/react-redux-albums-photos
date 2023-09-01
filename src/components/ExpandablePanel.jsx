import { useState } from "react"

export default function ExpandablePanel({ header, children }) {

    const [expanded, setExpanded] = useState(false);

    const chevron = expanded
        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>;

    const handleClick = () => setExpanded(!expanded);

    return <div className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center">
            <div className="flex justify-between items-center">
                {header}
            </div>
            <div onClick={handleClick} className="cursor-pointer">{chevron}</div>
        </div>
        {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
}