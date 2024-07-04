import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './business.css';
import axios from 'axios';

export default function createBusiness() {
  const [name, setName] = useState(null);
  const [website, setWebsite] = useState(null);
  const [ownerId, setOwnerId] = useState(null);
  const [freeUsers, setFreeUsers] = useState(null);
  const baseURL = 'http://localhost:3000';

  useEffect(() => {
    axios.get(baseURL + '/user/free')
      .then(res => {
        setFreeUsers(res.data);
        setOwnerId(res.data[0].userid)
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });

  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !website || !ownerId) alert("All fields are required. Please fill in all inputs.")
    else {
      axios.post(baseURL + "/business/create", { name: name, website: website, userid: ownerId })
        .then(res => {
          alert(res.data.message);
        })
    }
  }

  if (!freeUsers) {
    return <div className="wrapper">Loading...</div>;

  }
  return (
    <div className="wrapper" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Create Business - LogicLeap</title>
      </Helmet>
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className='p-4 rounded-3 bg-white regular-border mx-10vw col-6'>
          <h3 className="text-bold">Create new business</h3>
          <form onSubmit={handleSubmit}>
            <div className="col-sm-12 my-3">
              <label htmlFor="businessName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="businessName"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
            </div>
            <div className="col-sm-12 mb-3">
              <label htmlFor="businessWebsite" className="form-label">
                Website
              </label>
              <input
                type="text"
                className="form-control"
                id="businessWebsite"
                value={website}
                onChange={(e) => { setWebsite(e.target.value) }}
              />
            </div>
            <div className="col-sm-12 mb-3">
              <label htmlFor="owner" className="form-label">
                Owner
              </label>
              <select
                className="form-select form-control"
                id="owner"
                value={ownerId}
                onChange={(e) => {
                  setOwnerId(e.target.value);
                }}
              >
                {freeUsers.map((item) => (
                  <option key={item.userid} value={item.userid}>
                    {item.firstname + " " + item.lastname}
                  </option>
                ))}
              </select>
            </div>


            <button type="submit" className="btn btn-primary w-100">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
