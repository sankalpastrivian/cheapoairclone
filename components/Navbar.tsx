export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        cheap<span>O</span>air
      </div>

      <div className="explore">
        Explore Travel
        <i className="bi bi-chevron-down"></i>
      </div>

      <div className="nav-right">
        <div className="agent">
          <img
            src="https://c.fareportal.com/gcms/cms/2/img/agent-expert-s@2x.webp"
            alt="Agent"
          />
        </div>

        <div className="phone-deals">
          Phone-Only Deals! Call <span>000-800-050-3540</span>
        </div>

        <i className="bi bi-chat-square-text"></i>

        <div className="currency">
          <i className="bi bi-globe"></i>
          USD
        </div>

        <i className="bi bi-person-circle"></i>
      </div>
    </nav>
  );
}