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
        <Photo source={"./img/vk.png"}/>
        <Bio name={"Vitalii Kulyk"} location={"Klaipeda"} occupation={"Save freedom!"}/>
        <Updates />
      </div>
    );
  }
}

class Photo extends React.Component {
  render() {
    return (
      <div className="photo">
        <img src={this.props.source} alt="Photo" />
      </div>
    );
  }
}

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <h1 className="name">{this.props.name}</h1>
        <h2 className="location">{this.props.location}</h2>
        <div className="occupation">
          <p>{this.props.occupation}</p>
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
