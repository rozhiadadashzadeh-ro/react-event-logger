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
}

