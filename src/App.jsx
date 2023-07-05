import Aside from "./Aside";
import ControlCenter from "./Components/ControlCenter";
import Main from "./Main";
const App = () => {
  return (
    <>
      <div className="flex flex-row gap-1 font-opensans text-black print:pb-0">
        <Aside />
        <Main />
      </div>
      <ControlCenter />
    </>
  );
};

export default App;
