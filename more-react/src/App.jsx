import { Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Pricing from './components/Pricing/Pricing'
import ChartLine from './components/chart/linechart/ChartLine';
import axios from 'axios';

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const pricingAxiosPromise = axios.get('pricingData.json');


function App() {


  return (
    <>
      <header>
      <NavBar></NavBar>
      </header>
      <main className='container mx-auto my-10'>
        <Suspense fallback={<span className=' loading loading-spinner loading-xl'></span>}>
          <Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>
        <ChartLine pricingAxiosPromise={pricingAxiosPromise}></ChartLine>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
