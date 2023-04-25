import React, { useState } from "react";
import Giveaways from ".";
import GiveawaysHeader from "@/components/GiveawaysHeader";
import Navbar from "@/components/Navbar";

const User = () => {
  const [list, setList] = useState([38, 34]);
  const [inputvalue, setinputvlue] = useState(0);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setinputvlue(value);
    // setinputvlue("");
    // setList(value.split(",").map((item) => item.trim()));
    // setinputvlue("");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setList([...list, inputvalue]);
    console.log(list);
  };
  return (
    <div
      className="h-[400px] "
      style={{
        backgroundImage: "url(/assets/images/userbg.png)",
        backgroundSize: "100% ",
      }}
    >
      <div className="text-black">
        <form action="" onSubmit={handlesubmit}>
          <input
            type="numver"
            onChange={handleInputChange}
            value={inputvalue}
          />
          <input type="submit" value="btn" />
        </form>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
