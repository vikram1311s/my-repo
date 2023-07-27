import { useState } from "react";
import "./MyTable.css";

function MyTable() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] =  useState([])
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => setData([...data, {name, email}])}>Add</button>\
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>

                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}




export default MyTable;


// react component with table two fields age and id with onlclick event



