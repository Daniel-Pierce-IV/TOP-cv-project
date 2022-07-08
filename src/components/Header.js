import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const infoClasses = "text-right text-sm";
    const { fullName, title, phone, email, github, linkedin, updateInfo } =
      this.props;

    return (
      <header className="flex p-2 px-4 bg-blue-400 justify-between break">
        <div className="flex flex-col grow">
          <input
            className="text-4xl bg-transparent placeholder-blue-200"
            name="fullName"
            placeholder="John Doe"
            value={fullName ? fullName : ""}
            onInput={(event) => updateInfo({ fullName: event.target.value })}
          />

          <input
            className="text-xl bg-transparent placeholder-blue-200"
            name="title"
            placeholder="Web Developer"
            value={title ? title : ""}
            onInput={(event) => updateInfo({ title: event.target.value })}
          />
        </div>

        <div className="flex flex-col justify-center items-stretch grow">
          <input
            className={`${infoClasses} bg-transparent placeholder-blue-200`}
            name="phone"
            placeholder="123-456-7890"
            value={phone ? phone : ""}
            onInput={(event) => updateInfo({ phone: event.target.value })}
          />

          <input
            className={`${infoClasses} bg-transparent placeholder-blue-200`}
            name="email"
            placeholder="john.doe@example.com"
            value={email ? email : ""}
            onInput={(event) => updateInfo({ email: event.target.value })}
          />

          <input
            className={`${infoClasses} bg-transparent placeholder-blue-200`}
            name="github"
            placeholder="github.com/john-doe"
            value={github ? github : ""}
            onInput={(event) => updateInfo({ github: event.target.value })}
          />

          <input
            className={`${infoClasses} bg-transparent placeholder-blue-200`}
            name="linkedin"
            placeholder="linkedin.com/john-doe"
            value={linkedin ? linkedin : ""}
            onInput={(event) => updateInfo({ linkedin: event.target.value })}
          />
        </div>
      </header>
    );
  }
}

export default Header;
