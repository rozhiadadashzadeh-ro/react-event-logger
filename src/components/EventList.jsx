export default function EventList({ events, onSelectEvent, selectedEventId }) {
    if (events.length === 0) {
        return (
            <div className="no-events">
                <p>No events found</p>
            </div>
        );
    }
    return (
        <div className="event-list">
            {events.map(event => {
                let itemClass = "event-item";
                if (selectedEventId === event.id) {
                    itemClass = "event-item selected";
                }
                return (
                    <div
                        key={event.id}
                        className={itemClass}
                        onClick={() => onSelectEvent(event.id)}
                    >
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-datetime">{event.datetime}</p>
                    </div>
                );
            })}
        </div>
    );
}

