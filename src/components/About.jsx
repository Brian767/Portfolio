import profileImage from "../assets/profileImage.jpg";
export default function About() {
  return (
    <section id="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <img
          className="about-image"
          src={profileImage}
          alt="Brian Ramirez Ortega"
        />
        <p className="about-description">
          I'm a Front-End Developer passionate about building responsive,
          user-friendly and visually appealing websites. With a background in
          Computer Science from the University of Colorado Boulder, I enjoy
        solving problems, learning new technologies and turning ideas into
        functional web experiences. I'm continuously improving my skills and
        building projects that demonstrate my growth as a developer. I'm excited
        to connect with other developers, collaborate on meaningful projects,
        and pursue opportunities where I can contribute, learn, and grow as a
        Front-End Developer.
      </p>
      </div>
    </section>
  );
}
