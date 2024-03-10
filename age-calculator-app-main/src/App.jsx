import { useState } from "react";
import "/src/App.css";
import {
  validateDay,
  ifEmpty,
  validateMonth,
  validateYear,
  getDaysInMonth,
  calculate,
} from "./js/validate";

const App = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [diff, setDiff] = useState(null);

  const validateDate = () => {
    let passed = false;

    // Perform validations and set error messages
    const dError = ifEmpty(day)
      ? "This field is required"
      : validateDay(day)
      ? ""
      : "Must be a valid day";
    const mError = ifEmpty(month)
      ? "This field is required"
      : validateMonth(month)
      ? ""
      : "Must be a valid month";
    const yError = ifEmpty(year)
      ? "This field is required"
      : validateYear(year)
      ? "Must be in the past"
      : "";

    // Check if all error messages are empty to set passed to true
    if (dError === "" && mError === "" && yError === "") {
      passed = true;
    }

    if (passed) {
      const days = getDaysInMonth(month, year);
      console.log(days, day);
      if (day > days) {
        console.log('error');
        return setDayError("Must be a valid date");
      }
      else {
        let date = year + '-' + month + '-' + day;
        
        const result = calculate(date);
        setDiff(result);
        console.log(diff);
      }
    }

    // Set the error messages
    setDayError(dError);
    setMonthError(mError);
    setYearError(yError);
  };

  return (
    <>
      <div className="card">
        <div className="input-section">
          <div className="inputDay">
            <h2
              className={`${dayError ? "red" : ""} inputHeading poppins-bold`}
            >
              DAY
            </h2>
            <input
              type="text"
              name=""
              id="inputDay"
              placeholder="DD"
              className={`${dayError ? "red-border" : ""} poppins-bold`}
              maxLength={2}
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
            <p
              className={`${
                dayError ? "red" : ""
              } errorMessage poppins-regular-italic errorDay`}
            >
              {dayError}
            </p>
          </div>
          <div className="inputMonth">
            <h2
              className={`${monthError ? "red" : ""} inputHeading poppins-bold`}
            >
              MONTH
            </h2>
            <input
              type="text"
              name=""
              id="inputMonth"
              placeholder="MM"
              className={`${monthError ? "red-border" : ""} poppins-bold`}
              maxLength={2}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            />
            <p
              className={`${
                monthError ? "red" : ""
              } errorMessage poppins-regular-italic`}
            >
              {monthError}
            </p>
          </div>
          <div className="inputYear">
            <h2
              className={`${yearError ? "red" : ""} inputHeading poppins-bold`}
            >
              YEAR
            </h2>
            <input
              type="text"
              name=""
              id="inputYear"
              placeholder="YYYY"
              className={`${yearError ? "red-border" : ""} poppins-bold`}
              maxLength={4}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            <p
              className={`${
                yearError ? "red" : ""
              } errorMessage poppins-regular-italic`}
            >
              {yearError}
            </p>
          </div>
        </div>
        <div className="display-section">
          <h2 className="display poppins-extrabold-italic">
            <span className="purple">{diff ? diff.years + ' ' : '-- '} </span>years
          </h2>
          <h2 className="display poppins-extrabold-italic">
            <span className="purple">{diff ? diff.months + ' ' : '-- '} </span>months
          </h2>
          <h2 className="display poppins-extrabold-italic">
            <span className="purple">{diff ? diff.days + ' ' : '-- '} </span>days
          </h2>
        </div>

        <button
          onClick={() => {
            validateDate();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
      <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/justincbal" target="_blank">justincbal</a>.
  </div>
    </>
  );
};

export default App;
