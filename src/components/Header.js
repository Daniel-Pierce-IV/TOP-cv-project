import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      title: null,
      phone: null,
      email: null,
      linkedin: null,
      github: null,
    };
  }

  render() {
    const infoClasses = "text-right text-sm";
    const { fullName, title, phone, email, github, linkedin } = this.state;

    return (
      <header className="flex p-2 px-4 bg-blue-400 justify-between break">
        <div className="flex flex-col grow">
          <input
            className="text-4xl bg-transparent placeholder-gray-200"
            name="fullName"
            placeholder="John Doe"
            value={fullName ? fullName : ""}
            onInput={(event) => this.setState({ fullName: event.target.value })}
          />

          <input
            className="text-xl bg-transparent placeholder-gray-200"
            name="title"
            placeholder="Web Developer"
            value={title ? title : ""}
            onInput={(event) => this.setState({ title: event.target.value })}
          />
        </div>

        <div className="flex flex-col justify-center items-stretch grow">
          <input
            className={`${infoClasses} bg-transparent placeholder-gray-200`}
            name="phone"
            placeholder="123-456-7890"
            value={phone ? phone : ""}
            onInput={(event) => this.setState({ phone: event.target.value })}
          />

          <input
            className={`${infoClasses} bg-transparent placeholder-gray-200`}
            name="email"
            placeholder="john.doe@example.com"
            value={email ? email : ""}
            onInput={(event) => this.setState({ email: event.target.value })}
          />

          <input
            className={`${infoClasses} bg-transparent placeholder-gray-200`}
            name="github"
            placeholder="github.com/john-doe"
            value={github ? github : ""}
            onInput={(event) => this.setState({ github: event.target.value })}
          />

          <input
            className={`${infoClasses} bg-transparent placeholder-gray-200`}
            name="linkedin"
            placeholder="linkedin.com/john-doe"
            value={linkedin ? linkedin : ""}
            onInput={(event) => this.setState({ linkedin: event.target.value })}
          />
        </div>
      </header>
    );
  }
}

export default Header;
