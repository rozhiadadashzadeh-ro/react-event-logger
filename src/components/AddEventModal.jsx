import { useState } from 'react';

export default function AddEventModal({ onClose, onAddEvent }) {
    const [title, setTitle] = useState('');
    const [datetime, setDatetime] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');
}

