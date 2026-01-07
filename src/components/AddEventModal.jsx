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

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add New Event</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="event-form">
                    
                </div>
            </div>
        </div>
    );
}

