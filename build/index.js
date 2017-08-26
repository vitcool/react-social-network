var person = {
  name: "Vitalii Kulyk",
  location: "Palanga, Lithuania",
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
      React.createElement(Photo, null),
      React.createElement(Bio, null),
      React.createElement(Updates, null)
    );
  }
}

class Photo extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "photo" },
      React.createElement("img", { src: "img/vk.png", alt: "Photo" })
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
        "Name"
      ),
      React.createElement(
        "h2",
        { className: "location" },
        "Location"
      ),
      React.createElement(
        "div",
        { className: "occupation" },
        React.createElement(
          "p",
          null,
          "Protecting freedom"
        )
      )
    );
  }
}

class Updates extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "updates" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          { className: "update" },
          "Updates"
        ),
        React.createElement(
          "li",
          { className: "update" },
          "Updates"
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(Card, null), document.getElementById("app"));