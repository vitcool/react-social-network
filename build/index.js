var person = {
  name: "Vitalii Kulyk",
  location: "Vilnus, Lithuania",
  ocupation: {
    title: "Travelling",
    employer: "Have fun"
  },
  photo: "./img/vk.png",
  updates: [{ platform: "twitter", status: "I am happpy with twitter" }, {
    platform: "facebook",
    status: "I am happy with facebook"
  }, { platform: "twitter", status: "I am happpy with twitter - 2" }]
};

class Card extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "card" },
      React.createElement(Photo, { source: person.photo }),
      React.createElement(Bio, {
        name: person.name,
        location: person.location,
        occupation: person.occupation
      }),
      React.createElement(Updates, { updates: person.updates })
    );
  }
}

class Photo extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "photo" },
      React.createElement("img", { src: this.props.source, alt: "Photo" })
    );
  }
}

class Bio extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "bio" },
      React.createElement(
        "h1",
        { className: "name" },
        this.props.name
      ),
      React.createElement(
        "h2",
        { className: "location" },
        this.props.location
      ),
      React.createElement(
        "div",
        { className: "occupation" },
        React.createElement(
          "p",
          null,
          this.props.occupation
        )
      )
    );
  }
}

class Updates extends React.Component {
  updates() {
    return this.props.updates.map(function (update, index) {
      return React.createElement(
        "li",
        { className: "update " + update.platform, key: index },
        update.status
      );
    });
  }

  render() {
    return React.createElement(
      "div",
      { className: "updates" },
      React.createElement(
        "ul",
        null,
        this.updates()
      )
    );
  }
}

ReactDOM.render(React.createElement(Card, null), document.getElementById("app"));