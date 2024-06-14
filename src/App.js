import "./App.css";
import "./MediaQuries.css"
// import "./LogoSlider"
function App() {
  return (
    <>

      <nav className="header">
        <div className="logo">
          <a href="#"><img className="header-img" src="img/ngrok.svg" alt="" /></a>
        </div>
        <div className="btn">
          <button className="login">login</button>
          <button className="signup" >Sign Up</button>
        </div>
      </nav>

      <section className="hero-section">
        <div class="hero">
          <div class="hero-text-box">
            <div className="hero-data">
              <h1 class="heading-primary">
                Trusted by <br />
                <span>over 5 million <br />developers</span>
              </h1>
              <p class="hero-description">
                Trusted by the <strong>best teams.</strong> <br />
                Recommended by <strong>category leaders.</strong>
              </p>
              <div className="head-btn">
                <a href="#" class="btn-hero btn--full margin-right-sm"
                >Try ngrok for free</a >
                <div className="get-in-touch">
                  <a href="#" class="btn-hero btn--outline">Get in touch</a>
                  <img className="arrow-img" src="./img/Arrow forward.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="hero-img-box">
            <img
              src="/img/front-img.webp"
              class="hero-img"
              alt="circle of people images" />
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container ">
          <h3 class="subheading">Developers</h3>
          <h2 class="heading-secondary">
            Trusted by over 5 million developers
          </h2>
          <p className="user-para">Read a few kind words from our users</p>
        </div>
        <div className="container grid grid--3-cols">
          <div className="user-profiles">
            <div className="profile">
              <p className="profile-content">ngrok is about 1000x better than any other local tunnel tool I've used. Usually they are a nightmare. </p>
              <h2>–matt at populi</h2>
            </div>
          </div>
          <div className="user-profiles p2">
            <div className="profile">
              <p className="profile-content">ngrok is pretty much my favorite thing right now</p>
              <h2>–@EWDurbin</h2>
            </div>
          </div>
          <div className="user-profiles p3">
            <div className="profile">
              <p className="profile-content">#ngrok is a dream for testing localhost with remote APIs!</p>
              <h2>–@davejlong</h2>
            </div>
          </div>
          <div className="user-profiles">
            <div className="profile">
              <p className="profile-content">@inconshreveable No need to download the newest ngrok because... it updates itself! You are the best.</p>
              <h2>–@brent_noorda</h2>
            </div>
          </div>
          <div className="user-profiles p5">
            <div className="profile">
              <p className="profile-content"> ngrok, probably the best tool I have started to use for my webwork since firebug also great support @inconshreveable</p>
              <h2>–@Botto</h2>
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
        <div class="seemore">
          <a href="#" class="link">See More</a>
        </div>
      </section>

      <section className="section-customers">
        <div class="container">
          <h3 class="subheading">Customers</h3>
          <h2 class="heading-secondary">
            Trusted by the best teams
          </h2>
          <p className="user-para">Companies trust in ngrok to increase their developer productivity, secure <br /> remote access, enable B2B communications, and enable remote IoT access.</p>
        </div>
        <div className="customer-grid">
          <div className="customer">
            <div className="image-container">
              <img
                src="img/p1.webp"
                class="customer-img"
                alt="Avocado Salad"
              />
            </div>
            <div class="customer-content">
              <div class="customer-tags">
                <h3>Zendesk keeps 200 engineers focused, productive and safe</h3>
              </div>
              <p class="customer-title para-1">Nearly 200 software engineers across AMER, EMEA and APAC regions use ngrok every day. New engineers up and running in less than 15 minutes.</p>
            </div>
            <div class=" all-content customer-link-3">
              <a href="#" class="link">Read more</a>
              <img className="arrow-img" src="./img/Arrow forward.svg" alt="" />
            </div>
          </div>

          <div className="customer">
            <div className="image-container">
              <img
                src="img/p2.webp"
                class="customer-img"
                alt="Avocado Salad"
              />
            </div>
            <div class="customer-content">
              <div class="customer-tags">
                <h3>Copado extends the reach of their CI/CD platform without VPN friction</h3>
              </div>
              <p class="customer-title para-2">With ngrok, Copado save weeks setting up new connections per customer, plus countless hours troubleshooting bad connectivity.</p>
            </div>
            <div class=" all-content customer-link-3">
              <a href="#" class="link">Read more</a>
              <img className="arrow-img" src="./img/Arrow forward.svg" alt="" />
            </div>
          </div>

          <div className="customer">
            <div className="image-container">
              <img
                src="img/p3.webp"
                class="customer-img"
                alt="Avocado Salad"
              />
            </div>
            <div class="customer-content">
              <div class="customer-tags">
                <h3>HENNGE extends Zero Trust access to on-prem systems�with ngrok</h3>
              </div>
              <p class="customer-title para-3">HENNGE adds SSO and MFA to on-prem apps such as Oracle, IBM, and SAP with the best time to value.</p>
            </div>
            <div class=" all-content customer-link-3">
              <a href="#" class="link">Read more</a>
              <img className="arrow-img" src="./img/Arrow forward.svg" alt="" />
            </div>
          </div>

        </div>

        <div class=" features">
          <div class="logos">
            <img className="twilio" src="img/twilio.svg" alt="" />
            <img src="img/SendGrid.svg" alt="" />
            <img src="img/git2.svg" alt="" />
            <img src="img/okta.svg" alt="" />
            <img src="img/slack.svg" alt="" />
            <img src="img/ms.svg" alt="" />
            <img className="zoom" src="img/zoom.svg" alt="" />
          </div>
        </div>
      </section>


      <section className="section-category">
        <div class=" category-sec">
          <h3 class="subheading">CATEGORY LEADERS</h3>
          <h2 class="heading-secondary">
            Recommended by category leaders
          </h2>
          <p className="user-para">ngrok is recommended by many developer platforms and category leaders <br /> for systems and webhook development:</p>
        </div>
        <div className="container categories">
          <div className="category">
            <img src="img/sendgrid.svg" alt="" className="cat-img" />
          </div>

          <div className="category">
            <div className="category-img">
              <img src="img/zoom.svg" alt="" className="cat-img" />
            </div>
          </div>

          <div className="category">
            <img src="img/twilio.svg" alt="" className="cat-img" />
          </div>

          <div className="category">
            <img src="img/git2.svg" alt="" className="cat-img" />
          </div>

          <div className="category">
            <img src="img/okta.svg" alt="" className="cat-img" />
          </div>

          <div className="category">
            <img src="img/zoom.svg" alt="" className="cat-img" />
          </div>
          <div className="category">
            <img src="img/slack.svg" alt="" className="cat-img" />
          </div>

          <div className="category" >
            <img src="img/twilio.svg" alt="" className="cat-img" />
          </div>
          <div className="category">
            <img src="img/slack.svg" alt="" className="cat-img" />
          </div>
          <div className="category">
            <img src="img/sendgrid.svg" alt="" className="cat-img" />
          </div>
          <div className="category">
            <img src="img/zoom.svg" alt="" className="cat-img" />
          </div>
          <div className="category">
            <img src="img/sendgrid.svg" alt="" className="cat-img" />
          </div>
          <div className="category">
            <img src="img/slack.svg" alt="" className="cat-img" />
          </div>
          <div className="category">
            <img src="img/ms.svg" alt="" className="cat-img" />
          </div>
          <div className="category">
            <img src="img/slack.svg" alt="" className="cat-img " />
          </div>
          <div className="category">
            <img src="img/zoom.svg" alt="" className="cat-img " />
          </div>
        </div>
      </section>

      <section className="container experts">
        <div className="expert">
          <div className="talktoexpert">
            <h1 className="expert-heading">Talk to an expert</h1>
            <p className="expert-desc">Let’s discuss your project</p>
            <div className="expert-btn">
              <a href="#" class="btn-hero btn--full margin-right-sm">Get started now</a >
              <div className="ex-btn">
                <a href="#" class="btn-hero btn--outline">Get in touch with us</a>
                <img className="arrow-img" src="./img/Arrow forward.svg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer class="footer">
        <div class="container grid grid--footer">
          <nav class="nav-col navigation">
            <p class="footer-heading f1">Products</p>
            <p class="footer-heading f1">Pricing</p>
            <p class="footer-heading f1">Docs</p>
            <p class="footer-heading f1">Download</p>
            <p class="footer-heading f1">Careers</p>
            <p class="footer-heading f1">Blogs</p>
            <p class="footer-heading f1">Trust Portal</p>
            <p class="footer-heading ">Service Status</p>
          </nav>

          <nav class="nav-col middle-grid">
            <p class="footer-heading">Online in One Line</p>
          </nav>

          <div class="logo-col last-grid">
            <p class="footer-heading faded">Abuse</p>
            <p class="footer-heading faded">DPA</p>
            <p class="footer-heading faded">Privacy</p>
            <p class="footer-heading faded">Security</p>
            <p class="footer-heading faded">Terms & Services</p>


            <ul class="social-links">
              <li>
                <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-slack"></ion-icon
                ></a>
              </li>
              <li>
                <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-twitter"></ion-icon
                ></a>
              </li>
              <li>
                <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-linkedin"></ion-icon
                ></a>
              </li>
            </ul>

            <a href="#" class="footer-logo">
              <img class="logo" alt="ngrok logo" src="img/ngrok.svg" />
            </a>
          </div>

        </div>
        <div className="copyright">&copy; NGROK 2022</div>
      </footer>























    </>
  );
}

export default App;