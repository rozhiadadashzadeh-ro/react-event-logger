export default function EventList({ events, onSelectEvent, selectedEventId }) {
    if (events.length === 0) {
        return (
            <div className="no-events">
                <p>No events found</p>
            </div>
        );
    }
}

