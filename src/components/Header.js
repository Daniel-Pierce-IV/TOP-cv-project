import React from "react";
import EditableText from "./EditableText";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "John Doe",
      title: "Web Developer",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      linkedin: "linkedin.com/john-doe",
      github: "github.com/john-doe",
    };
  }

  render() {
    const infoClasses = "text-right text-sm whitespace-nowrap";
    return (
      <header className="flex p-2 px-4 bg-blue-400 justify-between break">
        <div className="flex flex-col grow">
          <EditableText
            classes="text-4xl whitespace-nowrap"
            text={this.state.fullName}
            onEdit={(value) => this.setState({ fullName: value })}
          />

          <EditableText
            classes="text-xl whitespace-nowrap"
            text={this.state.title}
            onEdit={(value) => this.setState({ title: value })}
          />
        </div>

        <div className="flex flex-col justify-center items-stretch">
          <EditableText
            classes={infoClasses}
            text={this.state.phone}
            onEdit={(value) => this.setState({ phone: value })}
          />

          <EditableText
            classes={infoClasses}
            text={this.state.email}
            onEdit={(value) => this.setState({ email: value })}
          />

          <EditableText
            classes={infoClasses}
            text={this.state.github}
            onEdit={(value) => this.setState({ github: value })}
          />

          <EditableText
            classes={infoClasses}
            text={this.state.linkedin}
            onEdit={(value) => this.setState({ linkedin: value })}
          />
        </div>
      </header>
    );
  }
}

export default Header;
