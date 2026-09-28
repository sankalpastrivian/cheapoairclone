"use client";

import { useState } from "react";

export default function SearchOptions() {
  const [tripType, setTripType] = useState("Round-trip");
  const [tripOpen, setTripOpen] = useState(false);

  const [cabin, setCabin] = useState("Economy");
  const [cabinOpen, setCabinOpen] = useState(false);

  const [travelerOpen, setTravelerOpen] = useState(false);

  const [adults, setAdults] = useState(1);
  const [seniors, setSeniors] = useState(0);
  const [children, setChildren] = useState(0);
  const [seatInfants, setSeatInfants] = useState(0);
  const [lapInfants, setLapInfants] = useState(0);

  const travelerCount =
    adults + seniors + children + seatInfants + lapInfants;

  return (
    <div className="search-options">

      {/* Round-trip */}
      <div className="option-wrapper">
        <button
          type="button"
          className="option"
          onClick={() => {
            setTripOpen(!tripOpen);
            setTravelerOpen(false);
            setCabinOpen(false);
          }}
        >
          <span>{tripType}</span>
          <i className="bi bi-chevron-down"></i>
        </button>

        {tripOpen && (
          <div className="option-dropdown">
            {["Round-trip", "One-way", "Multi-city"].map((type) => (
              <div
                key={type}
                className="dropdown-item"
                onClick={() => {
                  setTripType(type);
                  setTripOpen(false);
                }}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>


      {/* Travelers */}
      <div className="option-wrapper">
        <button
          type="button"
          className="option"
          onClick={() => {
            setTravelerOpen(!travelerOpen);
            setTripOpen(false);
            setCabinOpen(false);
          }}
        >
          <i className="bi bi-person"></i>

          <span>
            {travelerCount} Traveler
            {travelerCount !== 1 ? "s" : ""}
          </span>

          <i className="bi bi-chevron-down"></i>
        </button>

        {travelerOpen && (
          <div className="traveler-dropdown">

            {/* Adult */}
            <div className="traveler-row">
              <span>Adult</span>

              <div className="counter">
                <button
                  type="button"
                  onClick={() =>
                    setAdults(Math.max(1, adults - 1))
                  }
                >
                  −
                </button>

                <span>{adults}</span>

                <button
                  type="button"
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </button>
              </div>
            </div>


            {/* Senior */}
            <div className="traveler-row">
              <span>Senior</span>

              <div className="counter">
                <button
                  type="button"
                  onClick={() =>
                    setSeniors(Math.max(0, seniors - 1))
                  }
                >
                  −
                </button>

                <span>{seniors}</span>

                <button
                  type="button"
                  onClick={() => setSeniors(seniors + 1)}
                >
                  +
                </button>
              </div>
            </div>


            {/* Child */}
            <div className="traveler-row">
              <span>Child</span>

              <div className="counter">
                <button
                  type="button"
                  onClick={() =>
                    setChildren(Math.max(0, children - 1))
                  }
                >
                  −
                </button>

                <span>{children}</span>

                <button
                  type="button"
                  onClick={() => setChildren(children + 1)}
                >
                  +
                </button>
              </div>
            </div>


            {/* Seat Infant */}
            <div className="traveler-row">
              <span>Seat Infant</span>

              <div className="counter">
                <button
                  type="button"
                  onClick={() =>
                    setSeatInfants(
                      Math.max(0, seatInfants - 1)
                    )
                  }
                >
                  −
                </button>

                <span>{seatInfants}</span>

                <button
                  type="button"
                  onClick={() =>
                    setSeatInfants(seatInfants + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>


            {/* Lap Infant */}
            <div className="traveler-row">
              <span>Lap Infant</span>

              <div className="counter">
                <button
                  type="button"
                  onClick={() =>
                    setLapInfants(
                      Math.max(0, lapInfants - 1)
                    )
                  }
                >
                  −
                </button>

                <span>{lapInfants}</span>

                <button
                  type="button"
                  onClick={() =>
                    setLapInfants(lapInfants + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>


            {/* Done */}
            <button
              type="button"
              className="traveler-done"
              onClick={() => setTravelerOpen(false)}
            >
              Done
            </button>

          </div>
        )}
      </div>


      {/* Economy */}
      <div className="option-wrapper">
        <button
          type="button"
          className="option"
          onClick={() => {
            setCabinOpen(!cabinOpen);
            setTripOpen(false);
            setTravelerOpen(false);
          }}
        >
          <span>{cabin}</span>

          <i className="bi bi-chevron-down"></i>
        </button>

        {cabinOpen && (
          <div className="option-dropdown">
            {[
              "Economy",
              "Premium Economy",
              "Business",
              "First Class",
            ].map((type) => (
              <div
                key={type}
                className="dropdown-item"
                onClick={() => {
                  setCabin(type);
                  setCabinOpen(false);
                }}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}