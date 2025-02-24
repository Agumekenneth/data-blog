export default function Home(){
  let firstNumber = 938
  let secondNumner = 7
  let sum = firstNumber + secondNumner
  let username = 'John Doe'
  let username2 = 'jane'
return (
  <div style={{color: "#0f0b14", backgroundColor: "#bec1f7", border: "10px solid black", padding: "10px", margin: "50px", borderRadius: "30px"}}>
    <h1>DATA SCIENCE</h1>
    <h2>A very nice initiative for 2025</h2>
    <p>Data science is the field of study that combines domain expertise, programming skills, and statistical knowledge to extract meaningful insights from data.</p>
    <strong>{10 + 10 * 1000}</strong>
    <br/>
    <em>{sum}</em>

    <p>Greetings, {username}🫡</p>
    <p>Greetings, {username2}🫡</p>
  </div>
)
}