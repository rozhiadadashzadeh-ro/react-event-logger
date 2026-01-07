import { useState } from 'react';
import EventList from './EventList';
import AddEventModal from './AddEventModal';

export default function Sidebar({ events, onSelectEvent, selectedEventId, onAddEvent }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleAddEvent = (newEvent) => {
        onAddEvent(newEvent);
        setIsModalOpen(false);
    };
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Events</h2>
                <button
                    className="add-button"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Add Event
                </button>
            </div>
            <input
                type="text"
                className="search-bar"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <EventList
                events={filteredEvents}
                onSelectEvent={onSelectEvent}
                selectedEventId={selectedEventId}
            />
            {isModalOpen && (
                <AddEventModal
                    onClose={() => setIsModalOpen(false)}
                    onAddEvent={handleAddEvent}
                />
            )}
        </div>
    );
}

