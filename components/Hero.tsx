import TravelTabs from "@/components/TravelTabs";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Cheap Flights - Compare and Save</h1>

        <p>
          Fares Starting from <strong>$93</strong>
          <span className="arrow">↗</span>
          <span className="info">ⓘ</span>
        </p>

        <TravelTabs />
      </div>

      <div className="hero-image">
        <img src="/images/beach.jpg" alt="Beach destination" />
      </div>
    </section>
  );
}