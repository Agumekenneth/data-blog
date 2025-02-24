export default function Home(){
  let firstNumber = 938
  let secondNumner = 7
  let sum = firstNumber + secondNumner
  let username = 'John Doe'
  let username2 = 'jane'
return (
<div style={{color: "red",backgroundColor: "#bec1f7", border: "10px solid black",padding:"10px",margin:"50px"}}>
  <h1>DATA SCIENCE FOR AFRICA </h1>
  <h2>An intiative for 2025</h2>
  <p>Welcome to our website</p>
  <strong>{10+10*1000}</strong> 
  <br/>
  <em>{sum}</em>

  <p>Greetings,{username}🫡</p>
  <p>Greetings,{username2}🫡</p>
</div>
)
}