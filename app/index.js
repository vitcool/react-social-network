var person = {
  name: "Vitalii Kulyk",
  location: "Palanga, Lithuania",
  ocupation: {
    title: "Travelling",
    employer: "Have fun"
  },
  photo: "./img/vk.png",
  updates: [
    { platform: "twitter", status: "I am happpy with twitter" },
    {
      platform: "facebook",
      status: "I am happy with facebook"
    },
    { platform: "twitter", status: "I am happpy with twitter - 2" }
  ]
};

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <Photo />
        <Bio />
        <Updates />
      </div>
    );
  }
}

class Photo extends React.Component {
  render() {
    return (
      <div className="photo">
        <img src="img/vk.png" alt="Photo" />
      </div>
    );
  }
}

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <h1 className="name">Name</h1>
        <h2 className="location">Location</h2>
        <div className="occupation">
          <p>Protecting freedom</p>
        </div>
      </div>
    );
  }
}

class Updates extends React.Component {
  render() {
    return (
      <div className="updates">
        <ul>
          <li className="update">Updates</li>
          <li className="update">Updates</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Card />, document.getElementById("app"));
