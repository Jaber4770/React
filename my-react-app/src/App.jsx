
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';

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
        <Batsman></Batsman>
        <Counter></Counter>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClickByArrowFunction}>Click it</button>
      </div>
    </>
  )
}

export default App
