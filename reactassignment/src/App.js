
import './App.css';
import React, { useState } from 'react';

const App = () => {

  const[percent,setpercent] = useState(0);
  const[avg,setavg] = useState(0);
const[all,setall] = useState(0);
const[good,setgood] = useState(0);
const[neutral,setneutral] = useState(0);
const[bad,setbad] = useState(0);
const handleEvent1 =()=>{
  setgood(good+1)
  setall(all+1)
  setavg((good-bad)/all)
  setpercent((good/all)*100)
}

const handleEvent2 =()=>{
  setneutral(neutral+1)
  setall(all+1)
  setavg((good-bad)/all)
  setpercent((good/all)*100)
}

const handleEvent3 =()=>{
  setbad(bad+1)
  setall(all+1)
  setavg((good-bad)/all)
  setpercent((good/all)*100)
}





  return (
<div>


<button onClick={handleEvent1} >good  </button>
<button onClick={handleEvent2}>neutral</button>
<button onClick={handleEvent3}>bad</button>
<p><b>Statistics</b></p>
<p>Good   {good}</p>
 <p>Neutral     {neutral}</p>
<p>Bad   {bad}</p>
<p>All   {all}</p>
<p>Average   {avg}</p>
<p>Percent   {percent}</p>
</div>

  )
}

export default App;