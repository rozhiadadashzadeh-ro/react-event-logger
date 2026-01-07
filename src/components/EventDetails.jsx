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
            <div className="section">
                <h3>Description</h3>
                <p>{event.description}</p>
            </div>
            <div className="section">
                <h3>Location</h3>
                <p>{event.location}</p>
            </div>
            <div className="section">
                <h3>Additional Notes</h3>
                <p>{event.notes}</p>
            </div>
        </div>
    );
}