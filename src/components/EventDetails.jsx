export default function EventDetails({ event }) {
    if (!event) {
        return (
            <div className="placeholder">
                <p>Select an event to view details</p>
            </div>
        );
    }
}