
function StatusBadge({ status }) {
    const base = "px-3 py-1 text-xs font-medium rounded-full";

    const styles = {
        Applied: "bg-gray-500/20 text-gray-300 border border-gray-500/30",
        Interview: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
        Rejected: "bg-red-500/20 text-red-300 border border-red-500/30",
        Offer: "bg-green-500/20 text-green-300 border border-green-500/30"
    }

    return(
        <span className={`${base} ${styles[status] || styles.Applied}`}>
            {status}
        </span>
    )
}

export default StatusBadge;