import "./about.css";
import TeamMember from "./TeamMember";
import { useSpring, animated } from "react-spring";
import SimpleCarousel from "simple-react-carousel";

const teamMembers = [

  {
    name: "Varsha Sharma",
    photo:
      "",
    description:
      "Final year BCA student at Chandigarh University. DSA enthusiast, passionate about coding and learning new technologies. She is a quick learner and loves to work in a team.",
    gitHub: "",
    linkedIcon: "https://www.linkedin.com/in/varsha-sharma-41004b228/",
  },

  {
    name: "Yash Vijay",
    photo:
      "",
    description:
      "Final year BCA student at Chandigarh University. DSA enthusiast, passionate about coding and learning new technologies. She is a quick learner and loves to work in a team.",
    gitHub: "",
    linkedIcon: "https://www.linkedin.com/in/varsha-sharma-41004b228/",
  },

  {
    name: "Rohan",
    photo:
      "",
    description:
      "Final year BCA student at Chandigarh University. DSA enthusiast, passionate about coding and learning new technologies. She is a quick learner and loves to work in a team.",
    gitHub: "",
    linkedIcon: "https://www.linkedin.com/in/varsha-sharma-41004b228/",
  },
  {
    name: "Dhruv Dhingra",
    photo:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEnrE8osXZM4Q/profile-displayphoto-shrink_400_400/0/1568148063945?e=1625702400&v=beta&t=02WqZMxtw2EI8B0_mmMv22_Oi2S4RB_c74tNWrl0GTA",
    description:
      "Pursuing B.Tech in Computer Science from BK Birla Institute Of Engineering And Technology. He is a passionate coder and loves to work in a team. He is a quick learner and loves to learn new technologies.",
    gitHub: "",
    linkedIcon: "https://www.linkedin.com/in/isabelmehlmann/",
  },

];

const About = () => {
  const cardsAni = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 800,

    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });

  const teamAni = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,

    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });

  return (
    <>
      <div className="ourHistory">
        <animated.div style={teamAni}>
          <h1>Team Members</h1>
        </animated.div>
      </div>
      <animated.div style={cardsAni}>
        <div className="containerCards">
          {teamMembers.map((member) => (
            <TeamMember memberInfo={member} />
          ))}
        </div>
      </animated.div>
      <animated.div style={cardsAni}>
        <div className="containerCards-mobile">
          <SimpleCarousel>
            {teamMembers.map((member) => (
              <TeamMember memberInfo={member} />
            ))}
          </SimpleCarousel>
        </div>
      </animated.div>
    </>
  );
};

export default About;
