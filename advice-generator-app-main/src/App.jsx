import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  // useEffect(() => {
  //   fetch("https://api.adviceslip.com/advice", { mode: "cors" })
  //   .then((res) => console.log(res));
  // }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const handleResize = () => {
      setMobile(mediaQuery.matches);
    };
    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server Error");
        }
        return res.json();
      })
      .then((res) => setAdvice(res.slip.advice))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="main">
        <h1 className="adviceHeading">ADVICE #117</h1>
        <p className="adviceText">
          "{loading ? "Click to get advice" : advice}"
        </p>

        {!isMobile ? (
          <svg
            className="divider"
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        ) : (
          <svg className="divider" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        )}
        

        <button onClick={() => getAdvice()}>
          <svg
            className="button"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
