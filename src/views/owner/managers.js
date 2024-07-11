import "./managers.css";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Breadcrumbs from "../../components/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

function Managers() {
    const baseURL = 'http://localhost:3000';
    const [managerList, setManagerList] = useState([]);
    const [plans, setPlans] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isAdd, setIsAdd] = useState(null);
    const [nLicensesToChange, setNLicensesToChange] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [freeUsers, setFreeUsers] = useState([]);
    const [searchValue, setSearchValue] = useState(null);

    useEffect(() => {
        fetchManagers();
        fetchPlans();
        fetchFreeUsers();
    }, []);

    const fetchManagers = () => {
        if (!searchValue) {
            axios.get(baseURL + '/owner/' + JSON.parse(localStorage.getItem('user')).data.businessid)
                .then(res => {
                    setManagerList(res.data);
                    if (res.data.length > 0) {
                        setSelectedUser(res.data[0]);
                    } else {
                        setSelectedUser(null);
                    }
                })
                .catch(error => {
                    console.error('Error fetching managers:', error);
                });
        }
        else {
            axios.get(baseURL + '/owner/' + JSON.parse(localStorage.getItem('user')).data.businessid + "/" + searchValue)
                .then(res => {
                    setManagerList(res.data);
                    if (res.data.length > 0) {
                        setSelectedUser(res.data[0]);
                    } else {
                        setSelectedUser(null);
                    }
                })
                .catch(error => {
                    console.error('Error fetching managers:', error);
                });
        }
    };
    const fetchFreeUsers = () => {
        axios.get(baseURL + '/user/free')
            .then(res => {
                setFreeUsers(res.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };
    const fetchPlans = () => {
        axios.get(baseURL + '/owner/licenses/' + JSON.parse(localStorage.getItem('user')).data.businessid)
            .then(res => {
                setPlans(res.data);
            })
            .catch(error => {
                console.error('Error fetching plans:', error);
            });
    };

    const removeManager = () => {
        if (selectedUser && selectedUser.userid) {
            axios.delete(baseURL + "/owner/removemanager/" + selectedUser.userid)
                .then(res => {
                    alert(res.data.message);
                    fetchManagers();
                    fetchFreeUsers();
                    fetchPlans();
                })
                .catch(error => {
                    console.error('Error removing manager:', error);
                    alert('Failed to remove manager.');
                });
        } else {
            console.error('No selected user to remove.');
        }
    };

    const getManagerLicenses = (licenses) => {
        if (!selectedUser) return 0;
        return licenses.filter(license => license.userid === selectedUser.userid).length;
    };

    const getFreeLicenses = (licenses) => {
        return licenses.filter(license => !license.userid).length;
    };

    const handleSubmit = (e, managerLicenses, freeLicenses, planid) => {
        e.preventDefault();

        if (nLicensesToChange) {
            if (isAdd) {
                if (nLicensesToChange > freeLicenses) alert('The number you inserted exceeds the free licenses')
                else {
                    axios.post(baseURL + "/owner/managelicenses", {
                        nLicenses: nLicensesToChange,
                        userid: selectedUser.userid,
                        isadd: isAdd,
                        planid: planid
                    }).then(res => {
                        if (res.data.success) {
                            fetchManagers();
                            fetchFreeUsers();
                            fetchPlans();
                        }
                        alert(res.data.message);
                    })
                }
            }
            else if (isAdd === false) {
                if (nLicensesToChange < managerLicenses) alert("The number you inserted exceeds the manager's licenses")
                else {
                    axios.post(baseURL + "/owner/managelicenses", {
                        nLicenses: nLicensesToChange,
                        userid: selectedUser.userid,
                        isadd: isAdd,
                        planid: planid
                    }).then(res => {
                        if (res.data.success) {
                            fetchManagers();
                            fetchFreeUsers();
                            fetchPlans();
                        }
                        alert(res.data.message);
                    })
                }
            }
        }
        else alert('Type the number of licenses you wish to transfer.')

    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleUserSelection = (user) => {
        setSelectedUsers(prevSelectedUsers => {
            // Check if the user already exists in prevSelectedUsers based on a unique identifier (e.g., userid)
            const isUserSelected = prevSelectedUsers.some(u => u.userid === user.userid);

            if (isUserSelected) {
                // If user is already selected, filter them out
                return prevSelectedUsers.filter(u => u.userid !== user.userid);
            } else {
                // If user is not selected, add them to prevSelectedUsers
                return [...prevSelectedUsers, user];
            }
        });
    };
    const handleModalSubmit = () => {
        if (selectedUsers.length > 0) {
            axios.post(baseURL + "/owner/addmanagers", { users: selectedUsers.map(user => user.userid), businessid: JSON.parse(localStorage.getItem('user')).data.businessid }).then(res => {
                if (res.data.length > 0) {
                    if (res.data[0].success) {
                        fetchManagers();
                        fetchFreeUsers();
                        fetchPlans();
                    }
                }

                let alertMessage = res.data.map(item => item.message).join('\n');
                alert(alertMessage);
                setSelectedUsers([]);
            })
        }
        setShowModal(false);

    };

    const submitManagerSearch = (e) => {
        e.preventDefault();
        fetchManagers();

    }

    if (!managerList || !plans) {
        return <div className="wrapper text-center">Loading...</div>;
    }
    return (
        <div className="wrapper">
            <Helmet>
                <title>Managers - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Managers" />
            <div className="pt-4">
                <div className="manager-container row regular-border bg-white rounded-2 p-3 mx-10vw">
                    <div className="manager-col col-lg-6 col-xl-4 h-100">
                        <div className="manager-select regular-border bg-gray1 rounded-2 w-100">
                            <form className="inline-form" onSubmit={submitManagerSearch}>
                                <div className="input-group rounded-2 border-0">
                                    <input type="text" className="form-control bg-transparent border-0" placeholder="Search for email" name="searchValue" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="manager-group p-3">
                                {managerList.map((item, index) => (
                                    <div className="mb-2" key={index}>

                                        <button className="manager-item regular-border d-flex w-100 align-items-center bg-white rounded-2 p-3" onClick={() => setSelectedUser(item)}>
                                            <img className="rounded-circle me-3" src={item.image} alt={`${item.firstname} ${item.lastname}`} />
                                            <div>
                                                <h5 className="m-0 text-medium">{item.firstname + " " + item.lastname}</h5>
                                                <p className="m-0 text-secondary">{item.email}</p>
                                            </div>
                                        </button>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <button className="btn btn-secondary rounded-circle add-button mt-3" onClick={toggleModal}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <div className="manager-selected-col col-lg-6 col-xl-8 ps-xl-3">
                        {selectedUser && (
                            <div className="manager-selected d-flex align-items-center mb-3">
                                <img className="rounded-circle me-3" src={selectedUser.image} alt={`${selectedUser.firstname} ${selectedUser.lastname}`} />
                                <div>
                                    <p className="mb-0 text-medium fs-4">{selectedUser.firstname + " " + selectedUser.lastname}</p>
                                    <p className="mb-0 text-secondary">{selectedUser.email}</p>
                                </div>
                                <button className="btn btn-secondary ms-auto" onClick={removeManager}>Remove Manager</button>
                            </div>
                        )}

                        <div className="right row">
                            {plans.map((item, index) => (
                                <div key={index} className="regular-border rounded-2 p-3 mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img src={item.price.product.icon} className="rounded-2 me-3" height="60" alt={item.price.product.name} />
                                            <div>
                                                <p className="mb-0 text-medium fs-5">{item.price.product.name}</p>
                                            </div>
                                        </div>
                                        <span className="badge badge-secondary badge-pill">R</span>
                                        <span className="ml-auto text-right">{selectedUser ? `${getManagerLicenses(item.licenses)} licenses` : 'No manager selected'}  <span className="text-bold">({getFreeLicenses(item.licenses)} available)</span></span>
                                    </div>
                                    <form onSubmit={(e) => handleSubmit(e, getManagerLicenses(item.licenses), getFreeLicenses(item.licenses), item.planid)} className="d-flex justify-content-between mt-2">
                                        <input className="form-control w-25" placeholder="00" type="text" value={nLicensesToChange} onChange={(e) => setNLicensesToChange(e.target.value)} />
                                        <div>
                                            <button className="btn btn-secondary mx-2" type="submit" onClick={() => setIsAdd(false)}>Remove Licenses</button>
                                            <button className="btn btn-secondary" onClick={() => setIsAdd(true)}>Add Licenses</button>
                                        </div>
                                    </form>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="add-manager-modal modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Select Users</h5>

                        </div>
                        <div className="modal-body">
                            <div className="user-list">
                                {freeUsers.map((user, index) => (
                                    <div key={index} className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={user.userid}
                                            id={`user${index}`}
                                            onChange={() => toggleUserSelection(user)}
                                            checked={selectedUsers.some(u => u.userid === user.userid)}
                                        />
                                        <label className="form-check-label" htmlFor={`user${index}`}>
                                            {user.firstname} {user.lastname}
                                        </label>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Managers;
