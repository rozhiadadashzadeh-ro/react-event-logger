import { useState } from 'react';

export default function AddEventModal({ onClose, onAddEvent }) {
    const [title, setTitle] = useState('');
    const [datetime, setDatetime] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');

    function handleSubmit(e) {
        if (title === '' || datetime === '') {
            alert('Please fill in title and date/time');
            return;
        }
        const newEvent = {
            id: Date.now().toString(),
            title: title,
            datetime: datetime,
            description: description,
            location: location,
            notes: notes
        };
        onAddEvent(newEvent);
    }
}

