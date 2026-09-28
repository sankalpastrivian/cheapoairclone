"use client";

import { useState } from "react";

export default function TravelTabs() {
  const [activeTab, setActiveTab] = useState("Flights");

  const tabs = [
    {
      name: "Flights",
      icon: "bi-airplane",
    },
    {
      name: "Packages",
      icon: "bi-box-seam",
    },
    {
      name: "Hotels",
      icon: "bi-building",
    },
    {
      name: "Cars",
      icon: "bi-car-front",
    },
  ];

  return (
    <div className="travel-tabs">

      {tabs.map((tab) => (
        <button
          key={tab.name}
          type="button"
          className={`travel-tab ${
            activeTab === tab.name ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.name)}
        >
          <i className={`bi ${tab.icon}`}></i>

          {tab.name}
        </button>
      ))}

    </div>
  );
}