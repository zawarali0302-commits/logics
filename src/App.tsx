
import './App.css'
import Logics from './components/Logics'

export type Number = {
  num1: number;
  num2: number;
}

function App() {

  return (
    <>
    <Logics num1={5} num2={3}/>
    </>
  )
}

export default App
