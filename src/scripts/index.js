"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e("div", {}, "This is new INDEX page");
  }
}

const domContainer = document.getElementById("root");
ReactDOM.render(e(LikeButton), domContainer);
