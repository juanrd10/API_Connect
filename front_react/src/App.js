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
    <button className='button' type='submit' onClick={(e)=>handleClick(e)}>Get Test</button>
    </>
  )
}

function GetEvents() {

  const handleClick = async(e)=>{
    e.preventDefault();
    let campus = localStorage.getItem('campus');
    console.log(campus);
    let info = await get_req("https://api.intra.42.fr/v2/campus/" + campus + "/events");
    console.log(info);
    localStorage.setItem('result', JSON.stringify(info));
  }

  return(
    <>
      <button className='button' type='submit' onClick={(e)=>handleClick(e)}>Get Events</button>
    </>
  )
}

function GetLogInfo() {

  const handleClick = async(e)=>{
    e.preventDefault();
    let login = localStorage.getItem('login');
    console.log(login);
    let info = await get_req("https://api.intra.42.fr/v2/users/" + login);
    console.log(info);
  }

  return(
    <>
      <button className='button' type='submit' onClick={(e)=>handleClick(e)}>Get Login Info</button>
    </>
  )
}

function GetEventsAss() {

  const handleClick = async(e)=>{
    e.preventDefault();
    let event = localStorage.getItem('event');
    console.log(event);
    let info = await get_req("https://api.intra.42.fr/v2/events/" + event + "/users");
    console.log(info);
  }

  return(
    <>
      <button className='button' type='submit' onClick={(e)=>handleClick(e)}>Get Event Users</button>
    </>
  )
}

function ShowEvents(params) {
  const [isSubmited, setIsSubmited] = useState(false);

  const handleClick = async(e) => {
    e.preventDefault();
    setIsSubmited(true);
    let test = localStorage.getItem('result');
    console.log(test);
    let parsed = JSON.parse(test)
    let numb = 0;
	  params.html = "Last 30 events created       "
	  while (parsed[numb])
	  {
	  	let des = parsed[numb].name;
	  	let id = parsed[numb].id;
	  	params.html = `${params.html}
	  	         ---->${id} ${des}
	  	`
	  	numb++;
  	}
    return (params.html);
  }
  return (
    !isSubmited ?
    <>
      <button className='button' type='submit' onClick={(e)=>handleClick(e)}>Get Results (only events, alpha ver)</button>
    </> :
    <>
      <button className='button' type='submit' onClick={(e)=>handleClick(e)}>Get Results (only events, alpha ver)</button>
      <div className='Results'>{params.html}</div>
    </>
  );
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
        <div className='CaptureInfo'>
          <EnterData type='login'/>
          <EnterData type='campus'/>
          <EnterData type='event'/>
        </div>
        <div>
          <EnterData type='test'/>
          <GetTest/>
        </div>
        <div>
          <GetEvents/>
          <GetEventsAss/>
          <GetLogInfo/>
        </div>
        <div>
          <ShowEvents/>
        </div>
        <div>Created by Juan Rodríguez</div>
      </header>
    </div>
  );
}

export default App;
