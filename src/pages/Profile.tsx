import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <p className="page-header">My Profile</p>
        <button type="button" className="log-out">
          Logout
        </button>
      </header>
      <main>
        <div className="profile-details-header">
          <p className="profile-details-text">Personal Details</p>
          <p className="change-personal-details">change</p>
        </div>
        <div className="profile-card">
          <form>
            <input type="text" id="name" />
            <input type="text" id="email" />
          </form>
        </div>
        <Link to="/create-listing" className="create-listing">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <p>Sell or rent your home</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </Link>
      </main>
    </div>
  );
}
