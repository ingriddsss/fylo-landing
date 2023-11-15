import "./styles.css";

function Header() {
  return (
    <div className="header">
      <img src="logo.svg" />
      <div className="nav">
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="input-email">
          <input type="text" placeholder="Enter your email..."></input>
          <button>Get started</button>
        </div>
      </div>
      <div className="hero-img">
        <img src="illustration-1.svg" />
      </div>
    </div>
  );
}

function Productive() {
  return (
    <div className="productive">
      <div className="productive-text">
        <h1>Stay productive, wherever you are</h1>
        <p className="productive-line">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="productive-line">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>

        <a href="#">
          See how Fylo works
          <img id="arrow" src="icon-arrow.svg" />
        </a>
        <div className="testimonial">
          <img id="quotes" src="icon-quotes.svg" />
          <p className="testimonial-description">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <User
            img="avatar-testimonial.jpg"
            name="Kyle Burton"
            role="Founder & CEO, Huddle"
          />
        </div>
      </div>
      <div className="productive-img">
        <img src="illustration-2.svg" />
      </div>
    </div>
  );
}

function User(props) {
  return (
    <div className="user">
      <img id="user-img" src={props.img} />
      <div className="user-details">
        <p className="name">{props.name}</p>
        <p className="role">{props.role}</p>
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className="support">
      <div className="support-info">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div className="support-input">
        <input type="email" placeholder="email@example.com"></input>
        <button>Get Started For Free</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <img id="curve" src="bg-curve-desktop.svg" />
      <Productive />
      <Support />
    </div>
  );
}
