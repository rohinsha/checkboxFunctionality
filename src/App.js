import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const handleCheckbox = (e, id) => {
    // console.log(e.target.checked);
    // console.log(id + "rrrrrrrrrr");

    const updatedData = data.filter((tag, i) => {
      if (id === tag.id) {
        data[i].completed = !data[i].completed;
      }
      return tag;
    });
    // console.log("ssjhsjdhjsdhjsd" + updatedData);
    setData(updatedData);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  return (
    <div className="App">
      {data.map((item, i) => {
        return (
          <>
            <div key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => handleCheckbox(e, item.id)}
              />
              <label>{item.title}</label>
            </div>
          </>
        );
      })}
    </div>
  );
}
