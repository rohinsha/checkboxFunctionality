import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const handleCheckbox = (e, id) => {
    // console.log(e.target.checked);
    // console.log(id + "rrrrrrrrrr");

    // const updatedData = data.filter((tag, i) => {
    //   if (id === tag.id) {
    //     tag.completed = !tag.completed;
    //   }
    //   return tag;
    // });
    // setData(updatedData);
    const newArr = [...data];
    const f = newArr.filter((item) => item.id === id);
    console.log(JSON.stringify(f) + "dshds");
    f[0].completed = !f[0].completed;

    // console.log(f);
    // console.log(newArr);
    setData(newArr);
    // console.log("ssjhsjdhjsdhjsd" + updatedData);
  };
  useEffect(() => {
    console.log("rohi");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        //  console.log(res);
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
