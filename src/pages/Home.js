import Footer from "../Component/Footer";
import Header from "../Component/Header";

function Home() {
  return (
    <div className="App">
        <Header/>
     <main className="hero-section">
      <div className="hero-text">
        <h2>Start your journey with Web Development</h2>
        <p>Learn step-by-step and build real projects.</p>
        <a href="www" className="hero-btn">
            Start Learning
            </a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
        alt=""
        className="hero-img"
      />
    </main>
  <Footer/>
    </div>
  );
}

export default Home;
