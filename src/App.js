import Axios from 'axios'
import { useState } from 'react'
import './App.css';
import  { Redirect } from 'react-router-dom';

function App() {

  const [colum2, setcolum2] = useState([]);
  const [newcolum2, setnewcolum2] = useState([]);
  const [colum3, setcolum3] = useState([]);

  const [colum1, setcolum1] = useState([]);
  const [colum4, setcolum4] = useState([]);
  const [employeeList, setemployeeList] = useState([]);


  const getEmployees = () => {
    Axios.get('http://194.59.165.141:3003/employees').then((response) => {
      console.log(response)
      setemployeeList(response.data);
    });
  }
 

  
  const deleteEmployees = (colum1) => {
    Axios.delete(`http://194.59.165.141:3003/delete/${colum1}`).then((response) => {
      setemployeeList(
        employeeList.filter((val) => {
          return val.colum1 !== colum1;
        })
      );
    });
  };
  const createPost = () => {
    Axios.post("http://194.59.165.141:3003/create", {
      colum2: colum2, colum3: colum3, colum1: colum1, colum4: colum4,
    }).then(() => {
      setemployeeList([
        ...employeeList,
        {
          colum2: colum2, colum3: colum3, colum1: colum1, colum4: colum4,
        },
      ]);
    });
  };


  const update = (colum1) => {
    Axios.put("http://localhost:3002/UPDATE", { colum1: colum1, colum2: newcolum2 }).then(
      (response) => {
        setemployeeList(
          employeeList.map((val) => {
            return val.colum1 === colum1
              ? {
                colum1: val.colum1, colum2: newcolum2,
              }
              : val;
          })
        );
      }
    );
  };

 getEmployees();


  return (
    



    <div class="ex2">
 <h1>กำลังทำ</h1>
    {employeeList.map((val, key) => {
      return (
        <div className="employee card">

          <div className="card-body text-left">
            <p className="card-text">
              คิวที่:{val.colum1}
            </p>
          </div>
          <div className="d-flex">
            <input
              className="form-control"
              style={{ width: "300px" }}
              type="number"
              placeholder="15000..."
              onChange={(event) => {
                setnewcolum2(event.target.value)
              }}
            />
            <button className="btn btn-delete" onClick={() => { update(val.colum1) }} >update</button>


          </div>
</div>
          )

        }



        )}
        </div>


      );

    }

export default App;
