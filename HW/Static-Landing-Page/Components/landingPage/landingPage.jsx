import "./landingPage.css";

function LandingPage() {
  return (
    <div className="container">
      <section className="leftSection">
        <img
          src="https://wallpapercave.com/wp/wp9095424.jpg"
          alt="Landing Page Illustration"
        />
      </section>
      <section className="rightSection">
        <h1>Create Account</h1>
        <form>
          <div className="inputGroup">
            <input type="text" placeholder="First-name" required />
            <input type="text" placeholder="Last-name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Create account</button>
        </form>
      </section>
    </div>
  );
}

export default LandingPage;
