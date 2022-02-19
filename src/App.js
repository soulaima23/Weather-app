import React, {Component} from 'react';
import Form from './component/Form';
import Weather from './component/Weather';
const API_KEY="e36ed364400282e43250b6c4c0274d44";
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44//
class App extends Component {

state = {
  tempreture: '',
  country:'',
  city:'',
  humidity:'',
  description:'',
  error:''

}
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data =await api.json();
   if (city && country){
    this.setState({
      tempreture:data.main.temp,
      country:data.sys.country,
      city:data.name,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
    })

   }
   else{
    this.setState ({
      tempreture: '',
      country:'',
      city:'',
      humidity:'',
      description:'',
      error:'please enter DATA'
    
    })

   }
  }

  render (){

      return (
        <div className="wrapper">
          <div className='Form-container'>
          <Form getWeather={this.getWeather}/>
          <Weather tempreture={this.state.tempreture}
                    country={this.state.country}
                    city={this.state.city}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}/>
          </div>
        </div>
      );
}
}

export default App;
