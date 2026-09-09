import GuestSearch from "./components/GuestSearch";

export default function Home() {
  return (
    <main>
      <div className="wedding-card">
        <div className="decorative-line"></div>

        <p className="welcome-text">
          Welcome to the Home coming of
        </p>

        <h1>Sandun & Dilini</h1>

        <p className="instruction">
          Find your table number below
        </p>

        <GuestSearch />

        <p className="footer-text">
          We are delighted to have you celebrate with us
        </p>
      </div>
    </main>
  );
}