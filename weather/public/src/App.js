import { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import SearchBar from './components/SearchBar';
import ForecastWeather from './components/ForecastWeather';
import Default from './components/Default';
import img from './Main.png'
import { WeatherUrl , APIKey} from './components/Api/LocationApi';
function App() {
  const [Weather,setWeather] = useState(null);
  const [Forecast,setForecast] = useState(null);
  const [defa1,setdefa1] = useState(null);
  const [defa2,setdefa2] = useState(null);

  useEffect(()=>{
    const lat = 42.8525;
       const logi = -80.4989;
    const WeatherFetch = fetch(`${WeatherUrl}/weather?lat=${lat}&lon=${logi}&appid=${APIKey}&units=metric`)
    const ForecastFetch = fetch(`${WeatherUrl}/forecast?lat=${lat}&lon=${logi}&appid=${APIKey}&units=metric`)

    Promise.all([WeatherFetch,ForecastFetch])
    .then(async (response)=>{
       const Weatherdata = await response[0].json();
       const Forecastdata = await response[1].json();
 

       setWeather({...Weatherdata})
       setForecast({...Forecastdata})        
       
    })
    .catch((err)=>{
     console.log(err);
    })
 },[])



 useEffect(()=>{

  const lat = 18.3;
       const logi = 83.9;
  const WeatherFetch = fetch(`${WeatherUrl}/weather?lat=${lat}&lon=${logi}&appid=${APIKey}&units=metric`)
     Promise.all([WeatherFetch])
     .then(async (response)=>{
        const Weatherdata = await response[0].json();
  

        setdefa1({...Weatherdata})        
        
     })
     .catch((err)=>{
      console.log(err);
     })
 },[])


 useEffect(()=>{

   const lat = 18.12;
   const logi = 83.42;
  const WeatherFetch = fetch(`${WeatherUrl}/weather?lat=${lat}&lon=${logi}&appid=${APIKey}&units=metric`)
     Promise.all([WeatherFetch])
     .then(async (response)=>{
        const Weatherdata = await response[0].json(); 
  

        setdefa2({...Weatherdata})        
        
     })
     .catch((err)=>{
      console.log(err);
     })
 },[])




  const HandleChangeData = (data)=>{
  const[lati,longi] = data.value.split(" ");   

     const WeatherFetch = fetch(`${WeatherUrl}/weather?lat=${lati}&lon=${longi}&appid=${APIKey}&units=metric`)
     const ForecastFetch = fetch(`${WeatherUrl}/forecast?lat=${lati}&lon=${longi}&appid=${APIKey}&units=metric`)

     Promise.all([WeatherFetch,ForecastFetch])
     .then(async (response)=>{
        const Weatherdata = await response[0].json();
        const Forecastdata = await response[1].json();
  

        setWeather({...Weatherdata})
        setForecast({...Forecastdata})        
        
     })
     .catch((err)=>{
      console.log(err);
     })
  }

  return (
    <>  
     <div className="box" >
     <div className='CurrentWeather'> 
     <div className='main-weather'>
      <img alt='logo' src={img} className='main-img'/>
      <SearchBar onchangedata={HandleChangeData}/>
    {Weather && <CurrentWeather   data={Weather}/>}
    </div>
    <div className='defa'>
    {Weather && <Default data={defa1}/>}
    </div>
    <div className='defa'>
    {Weather && <Default data={defa2}/>}
    </div>
    </div>
    <div className='Forecast'>
    {Forecast && <ForecastWeather data={Forecast}/>} 
    {/* <ForecastWeather/> */}
    </div>
    </div>
   </>
  );
}

export default App;
