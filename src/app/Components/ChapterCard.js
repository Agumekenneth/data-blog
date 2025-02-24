export default function ChapterCard(props){
    let ourStyles ={color: "#0f0b14",
        backgroundColor: "#bec1f7",
        border: "10px solid black",
          padding: "10px",
           margin: "50px",
            borderRadius: "30px"

    }
    return (
        <div style={ourStyles}>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.content}</p>
    </div>

    );
}