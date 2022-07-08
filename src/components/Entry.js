import React from "react";
import "./Entry.css";

class Entry extends React.Component {
  static controlCount = 0;

  constructor(props) {
    super(props);
    this.deleteEntry = this.props.deleteEntry;
  }

  copyEntryState = () => {
    return {
      ...this.props.entry,
    };
  };

  updateEntry = (mutatorFunction) => {
    const entryCopy = this.copyEntryState();
    mutatorFunction(entryCopy);
    this.props.updateEntry(entryCopy);
  };

  updateValue = (propertyName, event) => {
    this.updateEntry((entryCopy) => {
      entryCopy[propertyName] = event.target.value;
    });
  };

  createControl = (label, callback, color = "gray") => {
    return (
      <button
        // key needed to avoid React's "unique key" error
        key={Entry.controlCount++}
        className={`bg-${color}-300 px-2 py-[2px]`}
        onClick={callback}
      >
        {label}
      </button>
    );
  };

  renderControlOverlay = (...controls) => {
    return (
      // <div className="entry-controls flex flex-col gap-1 h-full absolute -translate-x-full -left-5">
      <div className="entry-controls flex gap-1 absolute -translate-y-full w-full">
        {controls}
      </div>
    );
  };
}

export default Entry;
