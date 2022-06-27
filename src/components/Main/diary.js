import React, { useState } from 'react';
import './diary.css';

const API_BASE = "http://localhost:3001";

function DailyDiary() {
  
  // set default of date to today 
   const today = new Date();
   const date = today.setDate(today.getDate()); 
   const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd

   const [daily, setDaily] = useState([]);
   const [newDate, setNewDate] = useState(defaultValue);
   const [newTitle, setNewTitle] = useState("");
   const [newWeather, setNewWeather] = useState("");
   const [newColor, setNewColor] = useState("#f5f5f5");
   const [newText, setNewText] = useState("");
  
    
    const addDiary = async () => {
      const data = await fetch(API_BASE + "/diary/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: newDate,
          title: newTitle,
          weather: newWeather,
          color: newColor,
          text: newText
        })
      }).then(res => res.json())

      setDaily([...daily, data]);

      setNewDate(defaultValue);
      setNewTitle("");
      setNewColor("#f5f5f5");
      setNewWeather("");
      setNewText("");
    }


    return (
        <div className="container">
            <p>Title</p>
            <input type="text" className="title" placeholder="Title" onChange={e => setNewTitle(e.target.value)} 
            value={newTitle}/>

            <p>Date</p>
            <input id="date" type="date"
            onChange={e => setNewDate(e.target.value)} 
            value={newDate}/>

            <p>Weather</p>
            <select className="weather" id='weather' 
            onChange={e => setNewWeather(e.target.value)}
            value={newWeather}>
              <option value="sunny">Sunny</option>
              <option value="cloudy">Cloudy</option>
              <option value="rainy">Rainy</option>
              <option value="snowy">Snowy</option>
            </select>

            <p>color</p>
            <input type="color" className="color" 
            onChange={e => setNewColor(e.target.value)}
            value={newColor}/>

            <p>Text</p>
            <textarea className="text" rows='20' cols='20' 
            onChange={(e => setNewText(e.target.value))}
            value={newText}/>

            <div className='submit' onClick={addDiary}>Submit</div>
      </div>
    );
}

export default DailyDiary;