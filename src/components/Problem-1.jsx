import React, { useState } from 'react';
const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [inputs, setInputs] = useState([]);
  
    const handleClick = (val) => {
      setShow(val);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const { name, status } = event.target.elements;
      setInputs([...inputs, { name: name.value, status: status.value }]);
    };
  
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
          <div className="col-6 ">
            <form
              className="row gy-2 gx-3 align-items-center mb-4"
              onSubmit={handleSubmit}
            >
              <div className="col-auto">
                <input type="text" className="form-control" name="name" placeholder="Name" />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  placeholder="Status"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-8">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link ${show === 'all' && 'active'}`}
                  type="button"
                  onClick={() => handleClick('all')}
                >
                  All
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${show === 'active' && 'active'}`}
                  type="button"
                  onClick={() => handleClick('active')}
                >
                  Active
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${show === 'completed' && 'active'}`}
                  type="button"
                  onClick={() => handleClick('completed')}
                >
                  Completed
                </button>
              </li>
            </ul>
            <div className="tab-content"></div>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
  
       {inputs
    .sort((a, b) => {
      if (show === "active") {
        if (a.status === "active") return -1;
        if (b.status === "active") return 1;
      } else if (show === "completed") {
        if (a.status === "completed") return -1;
        if (b.status === "completed") return 1;
      } else if (show === "all") {
        if (a.status === "active") return -1;
        if (a.status === "completed") return -1;
        if (b.status === "active") return 1;
        if (b.status === "completed") return 1;
      }
      return 0;
    })
    .map((input, index) => {
      if (show === "active" && input.status !== "active") return null;
      if (show === "completed" && input.status !== "completed") return null;
      return (
        <tr key={index}>
          <td>{input.name}</td>
          <td>{input.status}</td>
        </tr>
      );
     })}

  </tbody>
  
</table>
</div>
</div>
</div>
);
};

export default Problem1;
