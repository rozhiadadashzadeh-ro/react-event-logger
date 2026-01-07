import { useState } from 'react';
import Sidebar from './components/Sidebar';
import EventDetails from './components/EventDetails';
import './App.css';

const INITIAL_EVENTS = [
  {
    id: '1',
    title: 'Painting workshop',
    datetime: '2026-01-15T10:00',
    description: 'friendy painting workshop for beginners',
    location: 'Tehran , ss',
    notes: ' bring your own tools for painting'
  },
  {
    id: '2',
    title: 'Photography Workshop',
    datetime: '2026-02-05T17:00',
    description: 'friendly photography workshop for beginners .',
    location: 'Tabriz, shahnaz street',
    notes: 'Bring your own camera'
  },
  {
    id: '3',
    title: 'Taylor Swift Concert',
    datetime: '2026-01-28T20:00',
    description: 'Taylor Swift Concert',
    location: 'United States , Concert Hull',
    notes: 'Doors open at 7:30 PM'
  }
];

function getEventsFromStorage() {
  const savedEvents = localStorage.getItem('events');
  if (savedEvents) {
    return JSON.parse(savedEvents);
  } else {
    localStorage.setItem('events', JSON.stringify(INITIAL_EVENTS));
    return INITIAL_EVENTS;
  }
}

export default function App() {
  const [events, setEvents] = useState(getEventsFromStorage());
  const [selectedEventId, setSelectedEventId] = useState(null);
}
