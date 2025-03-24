
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import ShowHide from './ShowHide';
import Users from './users';

function App() {

  function handleClick() {
    alert("I am clicked!");
  }
  const handleClickByArrowFunction = () => {
    alert("clicked in arrow function.");
  }

  return (
    <>
      <div>
        <h1>Hello React</h1>
        <ShowHide></ShowHide>
        <Counter></Counter>
        <Users></Users>
        <Batsman></Batsman>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClickByArrowFunction}>Click it</button>
      </div>
    </>
  )
}

export default App
