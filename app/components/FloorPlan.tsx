"use client";

import { useState } from "react";

export default function FloorPlan() {
  const [showFloorPlan, setShowFloorPlan] = useState(false);

  return (
    <>
      <button
        className="floorplan-link"
        onClick={() => setShowFloorPlan(true)}
      >
        View floor plan
      </button>

      {showFloorPlan && (
        <div className="floorplan-overlay">
          <div className="floorplan-modal">
            <button
              className="close-floorplan"
              onClick={() => setShowFloorPlan(false)}
              aria-label="Close floor plan"
            >
              ×
            </button>

            <img
              src="/floorplan.png"
              alt="HGG Ballroom floor plan"
              className="floorplan-image"
            />
          </div>
        </div>
      )}
    </>
  );
}