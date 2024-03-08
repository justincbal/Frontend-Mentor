import { useState } from "react";
import "/src/App.css";
import { validateDay } from "./js/validate";

const App = () => {
  const [day, setDay] = useState();
  const [dayError, setDayError] = useState('');
  const [month, setMonth] = useState()
  const [year, setYear] = useState()

  const validDay = (e) => {
    if(e < 1 || e > 31) {
      const errorDay = document.querySelector('.errorDay');
      errorDay.style.color = 'red';
      setDayError('Not a valid number');
    }
    else {
      const errorDay = document.querySelector('.errorDay');
      errorDay.style.color = 'blue';
      setDayError('');
    }
  }

  return (
    <>
      <div className="card">
        <div className="input-section">
          <div className="inputDay">
            <h2 className="inputHeading poppins-bold">DAY</h2>
            <input
              type="text"
              name=""
              id="inputDay"
              placeholder="DD"
              className="poppins-bold"
              maxLength={2}
              onChange={(e) => { validDay(e.target.value)}}
            />
            <p className="errorMessage poppins-regular-italic errorDay">
              {dayError}
            </p>
          </div>
          <div className="inputMonth">
            <h2 className="inputHeading poppins-bold">MONTH</h2>
            <input
              type="text"
              name=""
              id="inputMonth"
              placeholder="MM"
              className="poppins-bold"
              maxLength={2}
            />
            <p className="errorMessage poppins-regular-italic">
              This field is required
            </p>
          </div>
          <div className="inputYear">
            <h2 className="inputHeading poppins-bold">YEAR</h2>
            <input
              type="text"
              name=""
              id="inputYear"
              placeholder="YYYY"
              className="poppins-bold"
              maxLength={4}
            />
            <p className="errorMessage poppins-regular-italic">
              This field is required
            </p>
          </div>
        </div>
        <div className="display-section">
          <h2 className="display poppins-extrabold-italic">
            <span className="purple">-- </span>years
          </h2>
          <h2 className="display poppins-extrabold-italic">
            <span className="purple">-- </span>months
          </h2>
          <h2 className="display poppins-extrabold-italic">
            <span className="purple">-- </span>days
          </h2>
        </div>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
};

export default App;
