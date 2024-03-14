import "../styles/ThemeSwitch.css";

const ThemeSwitch = () => {
  return (
    <>
      <div className="themeSwitch">
        <h1 className="header themeSection">calc</h1>
        <h3 className="themeHead themeSection">THEME</h3>
        <div className="themes themeSection">
          <div className="themesNum">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className="outer">
            
            <div className="switch"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitch;
