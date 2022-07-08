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

  createControl = (label, callback, colorClass = "bg-gray-300") => {
    return (
      <button
        // key needed to avoid React's "unique key" error
        key={Entry.controlCount++}
        className={`${colorClass} px-2 hover:brightness-90 active:brightness-[.8]`}
        onClick={callback}
      >
        {label}
      </button>
    );
  };

  renderControlOverlay = (...controls) => {
    return (
      // <div className="entry-controls flex flex-col gap-1 h-full absolute -translate-x-full -left-5">
      <div className="entry-controls flex gap-[2px] absolute -translate-y-full bg-gray-600 border-2 border-gray-600">
        {controls}
      </div>
    );
  };
}

export default Entry;
