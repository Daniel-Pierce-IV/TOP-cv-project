import React from "react";
import "./Section.css";

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, createEntry, children } = this.props;

    return (
      <section className="section relative">
        <div className="flex justify-between border-b-2">
          <h2 className="text-2xl">{title}</h2>

          <button
            onClick={createEntry}
            className="create-entry bg-gray-300 border-2 border-gray-600 self-center my-0.5 px-2 hover:brightness-90 active:brightness-[.8]"
          >
            Add Entry
          </button>
        </div>

        <div className={`flex flex-col ${this.props.flexClasses}`}>
          {children}
        </div>
      </section>
    );
  }
}

export default Section;
