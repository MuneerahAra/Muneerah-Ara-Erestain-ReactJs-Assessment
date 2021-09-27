import React, { useState, useEffect } from "react";
import axios from "axios";


const ViewList = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
            loadUsers();
          }, []);
          const loadUsers = async () => {
            const result = await axios.get("http://localhost:3005/users?_sort=views&_order=desc&_limit=5");
            setUser(result.data);
          };
          const clickFirst = async () => {
            const result = await axios.get("http://localhost:3005/users?_page=1&_limit=5");
            setUser(result.data);
          };
          const clickOne = async () => {
            const result = await axios.get("http://localhost:3005/users?_page=2&_limit=5");
            setUser(result.data);
          };
          const clickTwo = async () => {
            const result = await axios.get("http://localhost:3005/users?_page=3&_limit=5");
            setUser(result.data);
          };
        return (
            <div>
               
                <div className="container">
                    <div className="py-4">
                        <h2>Contact List Directory</h2>
                        <table className="table border shadow">
                            <thead className="thead-dark-bg">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email Address</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">EID</th>
                                    <th scope="col">BirthDate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.emailAddress}</td>
                                        <td>{user.eid}</td>
                                        <td>{user.contactNumber}</td>
                                        <td>{user.birthDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            <button onClick={() => clickFirst()} className="btn btn-dark btn-block">1</button>
            <button onClick={() => clickOne()} className="btn btn-dark btn-block">2</button>
            <button onClick={() => clickTwo()} className="btn btn-dark btn-block">3</button>
                </div>
            </div>
        );
    }

export default ViewList;