import ChapterCard from "./Components/ChapterCard";

export default function Home(){
  let ourStyles ={color: "#0f0b14",
     backgroundColor: "#bec1f7",
      border: "10px solid black",
       padding: "10px",
        margin: "50px",
         borderRadius: "30px"

  }
return (
  <div>
    
      <ChapterCard
        title={"DATA SCIENCE"}
        subtitle={"Data the new oil"}
        content={"Data science is the field of study that combines domain expertise, programming skills, and statistical knowledge to extract meaningful insights from data."}
      />

    
    
    <ChapterCard
        title={"CYBER SECURITY"}
        subtitle={"Guardians of the bytes"}
        content={"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes."}
      />

    
    <ChapterCard
        title={"ROBOTICS"}
        subtitle={"We make nice bots"}
        content={"Robotics is the interdisciplinary field that combines computer science and engineering to design, build, and program robots. It involves the study of mechanical engineering, electrical engineering, and computer science to create intelligent machines that can perform tasks autonomously or with human guidance."}
      />
    

    
  </div>
)
}