export default function EventDetails({ event }) {
    if (!event) {
        return (
            <div className="placeholder">
                <p>Select an event to view details</p>
            </div>
        );
    }

    return (
        <div className="details">
            <h1>{event.title}</h1>
            <p className="datetime">{event.datetime}</p>
        </div>
    );
}