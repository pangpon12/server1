import Axios from 'axios'
import { useState } from 'react'
import './App.css';

function App() {

  const [colum2, setcolum2] = useState([]);
  const [newcolum2, setnewcolum2] = useState([]);
  const [colum3, setcolum3] = useState([]);

  const [colum1, setcolum1] = useState([]);
  const [colum4, setcolum4] = useState([]);
  const [employeeList, setemployeeList] = useState([]);


  const getEmployees = () => {
    Axios.get('http://localhost:3002/employees').then((response) => {
      console.log(response)
      setemployeeList(response.data);
    });
  }

  const deleteEmployees = (colum1) => {
    Axios.delete(`http://localhost:3002/delete/${colum1}`).then((response) => {
      setemployeeList(
        employeeList.filter((val) => {
          return val.colum1 !== colum1;
        })
      );
    });
  };
  const createPost = () => {
    Axios.post("http://localhost:3002/create", {
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

 
  return (
    <div className="App container">
      <h1>employee</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">

            <label htmlFor="name" className="form-label">colum1</label>
            <input type="text" placeholder="input Name" className="form-control" onChange={(event) => {
              setcolum1(event.target.value)
            }}></input>
          </div>
          <div className="mb-3">

            <label htmlFor="age" className="form-label">colum2</label>


            <input type="text" placeholder="input Name" className="form-control" onChange={(event) => {
              setcolum2(event.target.value)
            }}></input>
          </div>
          <div className="mb-3">

            <label htmlFor="name" className="form-label">colum3</label>
            <input type="text" placeholder="input Name" className="form-control" onChange={(event) => {
              setcolum3(event.target.value)
            }}></input>
          </div>
          <div className="mb-3">

            <label htmlFor="name" className="form-label">colum4</label>
            <input type="text" placeholder="input Name" className="form-control" onChange={(event) => {
              setcolum4(event.target.value)
            }}></input>
          </div>
          <button className="btn btn-success" onClick={createPost}>ADD employee</button>
        </form>
      </div>
      <hr></hr>
      <div className="employees">
        <button className="btn btn-primary" onClick={getEmployees}>SHOW employee</button>
        <div class="ex1">
          {employeeList.map((val, key) => {
            return (
              <div className="employee card">

                <div className="card-body text-left">
                  <p className="card-text">
                    colum1:{val.colum1}
                  </p>
                  <p className="card-text">
                    colum2:{val.colum2}
                  </p>

                  <p className="card-text">

                  </p>
                  <p className="card-text">

                  </p>
                </div>


                <a href={val.colum1}> เพิ่มเติม</a>




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
                  <button className="btn btn-delete" onClick={() => {update(val.colum1) }} >update</button>



                </div>

                <button className="btn btn-primary"> {val.colum1}</button>
                <button className="btn btn-delete" onClick={() => { deleteEmployees(val.colum1) }}>ลบ</button>
                <input type="file" />
              </div>
            )
          }
          )}</div>
      </div>
    </div>
  );
}

export default App;
