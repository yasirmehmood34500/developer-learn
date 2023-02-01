import { useEffect, useState } from "react";
// import Customer from "./Customer";

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    setData([
      { name: "Mehmood", degree: "MS" },
      { name: "ALi Raza", degree: "MS" },
      { name: "Raza", degree: "BS" },
      { name: "Qadees", degree: "MS" },
      { name: "Qadees", degree: "MS" },
    ]);
  }, []);

  function nameChange(i) {
    setData(Data.map((d,p) => (
      p === i ? {name:"Change"} : d
    )))
  }

  return (
    <div>
      {Data.map((d, i) => (
        <div key={i} onClick={() => nameChange(i)} >{d.name} {d.degree}</div>
        // <Customer onClick={nameChange} key={i} name={d.name} degree={d.degree} />
      ))}
    </div>
  );
}

export default App;
