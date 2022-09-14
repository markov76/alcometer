import { useState } from 'react';
import './App.css';

function App() {

  const[ weight, setWeight ] = useState(0);
  const[ bottles, setBottles ] = useState(1);
  const[ time, setTime ] = useState(1);
  const[ gender, setGender ] = useState('male')
  const[ result, setResult ] = useState(0);

  function handleSubmit(e) {
     e.preventDefault();
     let promille = 0;
     if (gender === 'male') {
      promille = (((bottles * 0.33) *8 * 4.5) - ((weight/10) * time )) / (weight * 0.7)
     }
     else {
      promille = (((bottles * 0.33) *8 * 4.5) - ((weight/10) * time )) / (weight * 0.6)
     }
     setResult(promille)
  }

  return (
    <>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input name='weight' type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)} ></input>
      </div>
      <div>
        <label>Bottles</label>
          <select value={bottles} onChange={e=> setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
      </div>
      <div>
        <label>Time</label>
            <select value={time} onChange={e=> setTime(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name='gender' value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name='gender' value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(1)} </output>
      </div>
      <button>Calculate</button>
    </form>

    </>

    
  );
}

export default App;
