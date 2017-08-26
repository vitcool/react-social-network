var person = {
  name: "Vitalii Kulyk",
  location: "Vilnus, Lithuania",
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
        <Photo source={person.photo} />
        <Bio
          name={person.name}
          location={person.location}
          occupation={person.occupation}
        />
        <Updates updates={person.updates} />
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
        <h1 className="name">
          {this.props.name}
        </h1>
        <h2 className="location">
          {this.props.location}
        </h2>
        <div className="occupation">
          <p>
            {this.props.occupation}
          </p>
        </div>
      </div>
    );
  }
}

class Updates extends React.Component {
  updates() {
    return this.props.updates.map(function(update, index) {
      return (<li className={"update " + update.platform} key={index}>{update.status}</li>)
    });
  }

  render() {
    return (
      <div className="updates">
        <ul>
          {this.updates()}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Card />, document.getElementById("app"));
