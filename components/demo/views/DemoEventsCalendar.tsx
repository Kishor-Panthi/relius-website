'use client';

import { useState } from 'react';
import { CalendarDays, MapPin, Clock, Users, X, QrCode } from 'lucide-react';
import { mockEvents, eventCategoryColors, eventCategoryLabels } from '../data/mockData';
import type { DemoEvent } from '../types/demo.types';

// Simple placeholder QR code SVG component
function PlaceholderQRCode() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-48 h-48"
      fill="currentColor"
    >
      {/* QR code pattern - simplified placeholder */}
      <rect x="0" y="0" width="100" height="100" fill="white" />
      {/* Position patterns (corners) */}
      <rect x="5" y="5" width="25" height="25" fill="black" />
      <rect x="10" y="10" width="15" height="15" fill="white" />
      <rect x="13" y="13" width="9" height="9" fill="black" />

      <rect x="70" y="5" width="25" height="25" fill="black" />
      <rect x="75" y="10" width="15" height="15" fill="white" />
      <rect x="78" y="13" width="9" height="9" fill="black" />

      <rect x="5" y="70" width="25" height="25" fill="black" />
      <rect x="10" y="75" width="15" height="15" fill="white" />
      <rect x="13" y="78" width="9" height="9" fill="black" />

      {/* Data pattern (random-looking squares) */}
      <rect x="35" y="5" width="5" height="5" fill="black" />
      <rect x="45" y="5" width="5" height="5" fill="black" />
      <rect x="55" y="5" width="5" height="5" fill="black" />
      <rect x="35" y="15" width="5" height="5" fill="black" />
      <rect x="50" y="15" width="5" height="5" fill="black" />
      <rect x="60" y="15" width="5" height="5" fill="black" />
      <rect x="40" y="25" width="5" height="5" fill="black" />
      <rect x="55" y="25" width="5" height="5" fill="black" />

      <rect x="5" y="35" width="5" height="5" fill="black" />
      <rect x="15" y="35" width="5" height="5" fill="black" />
      <rect x="25" y="40" width="5" height="5" fill="black" />
      <rect x="5" y="50" width="5" height="5" fill="black" />
      <rect x="20" y="55" width="5" height="5" fill="black" />

      <rect x="35" y="35" width="5" height="5" fill="black" />
      <rect x="45" y="40" width="5" height="5" fill="black" />
      <rect x="55" y="35" width="5" height="5" fill="black" />
      <rect x="40" y="50" width="5" height="5" fill="black" />
      <rect x="60" y="45" width="5" height="5" fill="black" />
      <rect x="50" y="55" width="5" height="5" fill="black" />

      <rect x="70" y="35" width="5" height="5" fill="black" />
      <rect x="80" y="40" width="5" height="5" fill="black" />
      <rect x="90" y="35" width="5" height="5" fill="black" />
      <rect x="75" y="50" width="5" height="5" fill="black" />
      <rect x="85" y="55" width="5" height="5" fill="black" />

      <rect x="35" y="70" width="5" height="5" fill="black" />
      <rect x="45" y="75" width="5" height="5" fill="black" />
      <rect x="55" y="70" width="5" height="5" fill="black" />
      <rect x="40" y="85" width="5" height="5" fill="black" />
      <rect x="60" y="80" width="5" height="5" fill="black" />
      <rect x="50" y="90" width="5" height="5" fill="black" />

      <rect x="70" y="70" width="5" height="5" fill="black" />
      <rect x="80" y="75" width="5" height="5" fill="black" />
      <rect x="90" y="80" width="5" height="5" fill="black" />
      <rect x="75" y="85" width="5" height="5" fill="black" />
      <rect x="85" y="90" width="5" height="5" fill="black" />
    </svg>
  );
}

function formatDate(dateString: string): { month: string; day: string; weekday: string } {
  const date = new Date(dateString);
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.getDate().toString(),
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
  };
}

function EventCard({ event, onShowQR }: { event: DemoEvent; onShowQR: (event: DemoEvent) => void }) {
  const { month, day, weekday } = formatDate(event.date);
  const categoryColor = eventCategoryColors[event.category] || 'bg-gray-100 text-gray-700';
  const categoryLabel = eventCategoryLabels[event.category] || event.category;

  return (
    <div className="demo-card p-4 transition-shadow hover:shadow-md">
      <div className="flex gap-4">
        {/* Date badge */}
        <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-purple-600 text-white flex-shrink-0">
          <span className="text-xs font-medium">{month}</span>
          <span className="text-2xl font-bold leading-none">{day}</span>
        </div>

        {/* Event details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 truncate">{event.title}</h3>
              <p className="text-sm text-gray-500">{weekday}</p>
            </div>
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 ${categoryColor}`}>
              {categoryLabel}
            </span>
          </div>

          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <span>{event.attendees} expected</span>
            </div>
          </div>

          <button
            onClick={() => onShowQR(event)}
            className="mt-3 demo-btn demo-btn-secondary text-sm px-3 py-1.5"
          >
            <QrCode className="w-4 h-4 mr-2" />
            View Check-in QR
          </button>
        </div>
      </div>
    </div>
  );
}

function QRCodeModal({ event, onClose }: { event: DemoEvent; onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl p-6 m-4 max-w-sm w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Check-in QR Code</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">{event.title}</p>

          <div className="flex justify-center mb-4 p-4 bg-gray-50 rounded-lg">
            <PlaceholderQRCode />
          </div>

          <p className="text-sm text-gray-500 mb-2">Scan to check in</p>
          <p className="text-xs text-gray-400">
            {formatDate(event.date).weekday}, {event.time}
          </p>
          <p className="text-xs text-gray-400">{event.location}</p>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 demo-btn demo-btn-primary"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export function DemoEventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<DemoEvent | null>(null);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Events Calendar</h1>
            <p className="text-sm text-gray-500">January 2026</p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="demo-card p-4 mb-6 bg-purple-50/50 border-purple-200/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">{mockEvents.length}</p>
            <p className="text-sm text-gray-500">Upcoming Events</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {mockEvents.reduce((sum, e) => sum + e.attendees, 0)}
            </p>
            <p className="text-sm text-gray-500">Expected Attendees</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {mockEvents.filter(e => e.category === 'worship').length}
            </p>
            <p className="text-sm text-gray-500">Worship Services</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {new Set(mockEvents.map(e => e.location)).size}
            </p>
            <p className="text-sm text-gray-500">Venues</p>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {mockEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onShowQR={setSelectedEvent}
            />
          ))}
        </div>
      </div>

      {/* QR Code Modal */}
      {selectedEvent && (
        <QRCodeModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
