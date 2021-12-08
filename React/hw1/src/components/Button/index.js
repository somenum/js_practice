import React, { PureComponent } from "react";

class Button extends PureComponent {
  state = {
    active: true,
  };

  render() {
    const { bgc, text, className, onClick } = this.props;

    return (
      <button
        style={{ backgroundColor: bgc }}
        className={className}
        onClick={() => {
          onClick();

          this.setState({
            active: !this.state.active,
          });
        }}
      >
        {text}
      </button>
    );
  }
}

export default Button;
