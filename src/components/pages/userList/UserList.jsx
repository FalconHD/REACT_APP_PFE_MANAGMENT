import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserList() {

  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const getUsers = async () => {
    console.log(data);
    let res = await fetch('http://localhost:5000/auth/users', {
      method: 'GET',
      headers: {
        'Content-type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    })
    let result = await res.json()
    let arr = []
    result.data.map((d) => {
      let u = {
        id: d._id,
        username: d.name,
        avatar: d.img ? d.img : "",
        email: d.email,
        status: "active",
        numberPhone: "063346584",
        leRole: d.type
      }
      arr.push(u)

    })
    setData(arr)

  }

  useEffect(() => {
    getUsers()
  }, [])

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Nom et Prenom",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "numberPhone",
      headerName: "number Phone",
      width: 220,
    },
    {
      field: "leRole",
      headerName: "le role",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="class">
            <Link to={"/dashdirecteur/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div class="headerr"><div class="app-content-header"><h1 class="app-content-headerText">Les Utilisateurs</h1></div></div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        checkboxSelection
        className="wewe3" />
    </div>
  );
}
