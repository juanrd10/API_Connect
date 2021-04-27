import './App.css';
import { useState } from 'react';

function TokenLink() {

  const authorize = async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:3000/private");
    let res = await response.json();
    const {token} = res;
    console.log(token);
    localStorage.setItem('bearer', token);
  }

  return (
    <div>
      <button className='button' type='submit' onClick={(e)=>authorize(e)}>Refresh Token</button>
    </div>
  )
}

let get_req = async(lnk)=>{
	let usr_token = localStorage.getItem('bearer');
	let myHeaders =  {"Authorization": "Bearer " + usr_token};
	let myInit = { method: 'GET',
	headers: myHeaders,
	mode: 'cors',
	cache: 'default' };
	let myRequest = new Request(lnk, myInit);
	let response = await fetch(myRequest);
	let data = await response.json();
	return (data);
}

function GetTest() {
  const handleClick = async(e) => {
    e.preventDefault();
    let test = localStorage.getItem('test');
    console.log(test);
    let info = await get_req("https://api.intra.42.fr/" + test);
    console.log(info);
  }

  return(
    <>
    <button className='button' type='submit' onClick={(e)=>handleClick(e)}>Get Test in Console</button>
    </>
  )
}

function EnterData(props) {
  const [text, steText] = useState("");

  function handleClick(e) {
    e.preventDefault();
    localStorage.setItem(props.type, text);
    console.log({text});
  }

  return (
    <>
      <input type='text' placeholder={"Enter " + props.type} value={text} onChange={(e)=>steText(e.target.value)}/>
      <button className='button' type='submit' onClick={(e)=>handleClick(e)}>Send {props.type}</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Can you see the results in console</p>
        <TokenLink/>
        <div>
          <EnterData type='test'/>
          <GetTest/>
        </div>
        <div>Created by Juan Rodríguez</div>
      </header>
    </div>
  );
}

export default App;
