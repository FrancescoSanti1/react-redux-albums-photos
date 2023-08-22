export default function Skeleton({ times, className }) {

    return Array(times).fill(0).map((_, i) => {
        return (
            <div key={i} className={`relative overflow-hidden bg-gray-200 rounded mb-2.5 ${className}`}>
                <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200"></div>
            </div>
        )
    });
}