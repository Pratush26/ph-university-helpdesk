import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'

let ticket = async () => {
  let res = await (await fetch('/issues.json')).json();
  return res;
}
let data = ticket()

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Container data={data} />
      </Suspense>
    </>
  )
}

export default App
