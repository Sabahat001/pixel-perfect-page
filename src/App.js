import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <>
      <nav className="header">
        <div className="logo">
          <a href="#">ngrok</a>
        </div>
        <div className="btn">
          <button className="login">login</button>
          <button className="signup" >Sign Up</button>
        </div>
      </nav>
      <section className="hero-section">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              Trusted by <br />
              <span>over 5 million <br />developers</span>
            </h1>
            <p class="hero-description">
              Trusted by the <strong>best teams.</strong> <br />
              Recommended by <strong>category leaders.</strong>
            </p>
            <a href="#" class="btn-hero btn--full margin-right-sm"
            >Try ngrok for free</a >
            <a href="#" class="btn-hero btn--outline">Get in touch <strong className="arrow">&rarr;</strong></a>
          </div>
          <div class="hero-img-box">
            <img
              src="/img/hero-img.png"
              class="hero-img"
              alt="circle of people images "
            />
          </div>
        </div>
      </section>
      <section className="how-it-works">
      <div className="container">
      <span class="subheading">Developers</span>
          <h2 class="heading-secondary">
            Trusted by over 5 million developers
          </h2>
          <p>Read a few kind words from our users</p>
       </div>
        <div className="container grid grid--3-cols">
          <div className="user-profiles">
          <div className="profile">
          <p className="profile-content">ngrok is about 1000x better than any other local tunnel tool I've used. Usually they are a nightmare. </p>
              <h2>– matt at populi</h2>
          </div>
          </div>
          <div className="user-profiles">
           <div className="profile">
           <p className="profile-content">ngrok is pretty much my favorite thing right now</p>
            <h2>– @EWDurbin</h2>
           </div>
          </div>
          <div className="user-profiles">
          <div className="profile">
          <p className="profile-content">#ngrok is a dream for testing localhost with remote APIs!</p>
            <h2>– @davejlong</h2>
          </div>
          </div>
          <div className="user-profiles">
          <div className="profile">
          <p className="profile-content">@inconshreveable No need to download the newest ngrok because... it updates itself! You are the best.</p>
            <h2>– @brent_noorda</h2>
          </div>
          </div>
          <div className="user-profiles">
           <div className="profile">
           <p className="profile-content"> ngrok, probably the best tool I have started to use for my webwork since firebug also great support @inconshreveable</p>
            <h2>– @Botto</h2>
           </div>
          </div>
          <div className="user-profiles">
         <div className="profile">
         <p className="profile-content">holy crap. ngrok.com is awesome, this solves pretty much all local developer problems.</p>
            <h2>– @julianwachholz</h2>
         </div>
          </div>

          <div className="user-profiles remove-shadow">
        <div className="profile">
        <p className="profile-content">holy crap. ngrok.com is awesome,  developer problems.</p>
            <h2 className="heading-blur">– @pedromelo</h2>
        </div>
          </div>
          <div className="user-profiles remove-shadow">
         <div className="profile">
         <p className="profile-content">ngrok, probably the best tool I have for my webwork @inconshreveable</p>
            <h2 className="heading-blur">– @paulcampbell</h2>
         </div>
          </div>
          <div className="user-profiles remove-shadow">
        <div className="profile">
        <p className="profile-content">@inconshreveable No need to download the newest </p>
            <h2 className="heading-blur">– @philadams</h2>
        </div>
          </div>
          </div>
          <div class=" seemore">
          <a href="#" class="link">See More</a>
        </div>
      </section>
    </>

  );
}

export default App;
