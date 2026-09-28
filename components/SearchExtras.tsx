"use client";

import { useState } from "react";

export default function SearchExtras() {
  const [addHotel, setAddHotel] = useState(false);
  const [addCar, setAddCar] = useState(false);
  const [otherAirport, setOtherAirport] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  return (
    <div className="search-extras">

      <div className="bundle-section">

        <div className="bundle-title">
          <i className="bi bi-box-seam"></i>
          <strong>Bundle & Save</strong>
        </div>

        <label>
          <input
            type="checkbox"
            checked={addHotel}
            onChange={(e) =>
              setAddHotel(e.target.checked)
            }
          />
          Add Hotel
        </label>

        <label>
          <input
            type="checkbox"
            checked={addCar}
            onChange={(e) =>
              setAddCar(e.target.checked)
            }
          />
          Add Car
        </label>

      </div>

      <div className="advanced-section">

        <label>
          <input
            type="checkbox"
            checked={otherAirport}
            onChange={(e) =>
              setOtherAirport(e.target.checked)
            }
          />

          From/to another airport?
        </label>

        <button
          type="button"
          onClick={() =>
            setAdvancedOpen(!advancedOpen)
          }
        >
          Advanced search

          <i
            className={`bi ${
              advancedOpen
                ? "bi-chevron-up"
                : "bi-chevron-down"
            }`}
          ></i>
        </button>

        {advancedOpen && (
          <div className="advanced-options">

            <label>
              <input type="checkbox" />
              Flexible dates
            </label>

            <label>
              <input type="checkbox" />
              Refundable fares
            </label>

          </div>
        )}

      </div>

    </div>
  );
}