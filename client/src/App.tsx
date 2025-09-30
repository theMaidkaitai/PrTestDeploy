import './App.css'
import axios, {type AxiosResponse} from 'axios'
import {useState} from "react";

function App() {

    const backendUrl = 'http://localhost:5422'
    const [randomNumbers, setRandomNumbers] = useState<null | number>(null)
    const [randomMathNumbers, setRandomMathNumbers] = useState<null | number>(null)
    const [history, setHistory] = useState<number[]>([])

    async function randomNumber() {
        const random: AxiosResponse<number> = await axios.get(`${backendUrl}/random`, {})
        setRandomNumbers(random.data)
        setHistory(prev => [...prev, random.data])
    }

    async function randomMathh () {
        const math = await axios.get(`${backendUrl}/random/math`, {})
        setRandomMathNumbers(math.data)
        setHistory(prev => [...prev, math.data])
    }



  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
        <div style={{ display: 'flex',flexDirection: "column",border: '1px solid black', margin: 10 }}>
            Рандом число
            <h2>{randomNumbers}</h2>
            <button onClick={randomNumber}>Получить</button>
        </div>

        <div style={{ display: 'flex',flexDirection: "column",border: '1px solid black', margin: 10 }}>
            Рандом вычисление
            <h2>{randomMathNumbers}</h2>
            <button onClick={randomMathh}>Получить</button>
        </div>

        <div style={{ display: 'flex', flexDirection: "column", border: '1px solid black', margin: 10, padding: 20, minWidth: 200 }} >
            История:
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {history.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default App
