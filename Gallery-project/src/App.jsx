import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

const App = () => {
  const [data, setData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );

    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUser = "No UserAvailable";

  if (data.length > 0) {
    printUser = data.map((elem, idx) => {
      return (
        <div key={idx}>
         <Card elem = {elem}/>
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen text-white p-4 overflow-auto">
      <div className="flex flex-wrap gap-6 justify-center">{printUser}</div>

      <Buttons index={index} setIndex={setIndex}/>
    </div>
  );
};

export default App;
