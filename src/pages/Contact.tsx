export default function Contact() {
  return (
    <div className="page-container">
      <header>
        <p className="page-header">Contact Landlord</p>
      </header>
      <main>
        <div className="contact-landlord">
          <p className="landlord-name">Contact landlord name</p>
        </div>
        <form className="message-form">
          <div className="message-div">
            <label htmlFor="message" className="message-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="text-area"
              value={""}
              style={{
                padding: "10px",
                borderRadius: "5px",
                height: "200px",
                resize: "none",
                border: "1px solid #ccc",
                outline: "none",
              }}
            ></textarea>
          </div>
          <a>
            <button className="primary-button" type="button">
              Message
            </button>
          </a>
        </form>
      </main>
    </div>
  );
}
