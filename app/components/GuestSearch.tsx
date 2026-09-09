"use client";

import { useEffect, useState } from "react";
import FloorPlan from "./FloorPlan";

type Guest = {
  name: string;
  table: number;
};

export default function GuestSearch() {
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState<Guest[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  useEffect(() => {
    if (search.length < 3) {
      setMatches([]);
      return;
    }

    const fetchGuests = async () => {
      const response = await fetch(
        `/api/guests?search=${encodeURIComponent(search)}`
      );

      const data = await response.json();
      setMatches(data);
    };

    fetchGuests();
  }, [search]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter your name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSelectedGuest(null);
        }}
      />

      {matches.length > 0 && !selectedGuest && (
        <div className="suggestions">
          {matches.map((guest) => (
            <button
              key={guest.name}
              onClick={() => {
                setSelectedGuest(guest);
                setSearch(guest.name);
                setMatches([]);
              }}
            >
              {guest.name}
            </button>
          ))}
        </div>
      )}

      {selectedGuest && (
        <div className="table-result">
          <p>Your table</p>

          <div className="table-number-circle">
            {selectedGuest.table}
          </div>

          <div className="floorplan-button-container">
            <FloorPlan />
          </div>
        </div>
      )}
    </div>
  );
}