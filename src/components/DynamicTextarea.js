import React from "react";

class DynamicTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
  }

  // Ensures that the textarea grows vertically with the text it contains
  textareaResizer = (textareaRef) => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  render() {
    const { className, name, placeholder, value, onInput } = this.props;

    return (
      <textarea
        ref={this.textareaRef}
        className={`${className} block overflow-hidden resize-none`}
        name={name}
        placeholder={placeholder}
        value={value ? value : ""}
        rows="1"
        onInput={(event) => {
          onInput(event);
          this.textareaResizer(this.textareaRef);
        }}
      ></textarea>
    );
  }
}

export default DynamicTextarea;
