import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'


const bottlePromise = fetch('../public/bottle.json').then(res => res.json());


function App() {


  return (
    <>
      <h1>Hello Awesome Bottle</h1>
      <Suspense fallback={<h3>Awesome Bottles are comming....</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
