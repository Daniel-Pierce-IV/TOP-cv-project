import { createRef } from "react";

function DynamicTextarea(props) {
  const { className, name, placeholder, value, onInput } = props;
  const textareaRef = createRef();

  // Ensures that the textarea grows vertically with the text it contains
  const textareaResizer = (textareaRef) => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  return (
    <textarea
      ref={textareaRef}
      className={`${className} block overflow-hidden resize-none`}
      name={name}
      placeholder={placeholder}
      value={value ? value : ""}
      rows="1"
      onInput={(event) => {
        onInput(event);
        textareaResizer(textareaRef);
      }}
    ></textarea>
  );
}

export default DynamicTextarea;
