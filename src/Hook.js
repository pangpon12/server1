import Axios from 'axios'
import { useState } from 'react'
import './App.css';

function App() {

  const [employeeList, setemployeeList] = useState([]);
  const [newcolum2, setnewcolum2] = useState([]);

  const getEmployees1 = () => {
    Axios.get('http://localhost:3002/employees2').then((response) => {
      console.log(response)
      setemployeeList(response.data);
    });
  }
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




  getEmployees1();
  return (


    <div class="ex2">
 <h1>ทำเสร็จแล้ว</h1>

      {employeeList.map((val, key) => {
        return (
          <div className="employee card">

            <div className="card-body text-left">
              <p className="card-text">
                คิวที่:{val.colum1}
              </p>
              <p className="card-text">

              </p>
              <p className="card-text">

              </p>
              <p className="card-text">

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
