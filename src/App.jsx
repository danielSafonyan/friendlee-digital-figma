import { useState } from 'react'

function App() {
  const [count, setCount] = useState(3300000)
  const orangeWidth = count / 5000000 * 100

  return (
    <>
      <div className='title'>Рассчитайте стоимость автомобиля в лизинг</div>
      <div className="input-container">
        <label htmlFor="wantedSum" className="input__label">
          Стоимость автомобиля
        </label>
        <div className="input-container__inputs">
          <input type="number"
                 id="wantedSum"
                 name="wantedSum"
                 value={count}
                 onChange={e => setCount(e.target.value)}
                 className="input__number"
                 min="1"
                 max="5000000" />
          <label htmlFor="wantedSum" className="input__label-aux">
            ₽
          </label>
          <input type="range"
                 id="wantedSum"
                 name="wantedSum"
                 value={count}
                 onChange={e => setCount(e.target.value)}
                 className="input__range"
                 min="1"
                 max="5000000"
                 step="1"/>
          <div className="range-tracks-container">
            <div className="orange track" style={{width: `${orangeWidth}%`}}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
