import Axios from 'axios'
import { useState } from 'react'
import './App.css';

function App() {

  const [employeeList, setemployeeList] = useState([]);


  const getEmployees = () => {
    Axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((response) => {
      console.log(response)
      setemployeeList(response.data);
    });
  }




  getEmployees();
  return (
    
    
        <div class="ex2">
          {employeeList.map((val, key) => {
            return (
              <div className="employee card">

                <div className="card-body text-left">
                  <p className="card-text">
                    name:{val.email}
                  </p>
                  <p className="card-text">

                  </p>
                  <p className="card-text">

                  </p>
                  <p className="card-text">

                  </p>
                </div>


                <a href={val.email}> เพิ่มเติม</a>


                <button className="btn btn-primary"> {val.email}</button>
                <input type="file" />
              </div>
              
            )

          }



          )}</div>


      
  );
}

export default App;
