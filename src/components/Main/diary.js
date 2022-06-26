import React from 'react';
import './diary.css';

function DailyDiary() {

   // set default of date to today 
    const today = new Date();
    const date = today.setDate(today.getDate()); 
    const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd
    
    return (
        <div className="container">
          <form>
            <p>Title</p>
            <input type="text" className="title" placeholder="Title"/>

            <p>Date</p>
            <input id="date" type="date" name="date" defaultValue={defaultValue} />

            <p>Weather</p>
            
            <select className="weather" id='weather'>
              <option value="sunny">Sunny</option>
              <option value="cloudy">Cloudy</option>
              <option value="rainy">Rainy</option>
              <option value="snowy">Snowy</option>
            </select>

            <p>color</p>
            <input type="color" className="color"/>

            <p>Content</p>
            <textarea className="content" rows='20' cols='20'/>

            <button className='submit'>Submit</button>
          </form>
      </div>
    );
}

export default DailyDiary;