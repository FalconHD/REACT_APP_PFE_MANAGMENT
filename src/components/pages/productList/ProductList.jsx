import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const getUsers = async () => {
    console.log(data);
    let res = await fetch('http://localhost:5000/group/', {
      method: 'GET',
      headers: {
        'Content-type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    })
    let { Groups } = await res.json()
    let arr = []
      console.log(Groups);
    Groups.map((d) => {
      let u = {
        id: d._id,
        name: d.name,
        NBGroup: d.member.length,
        img:d.leader.img,
        status: "active",
        price: d.leader.name,
        wewe: ""+d.member.map((m)=>{
          return m.name.split(' ')[0]
        }).join(' - '),
      }
      console.log(d);
      arr.push(u)

    })
    setData(arr)

  }

  useEffect(() => {
    getUsers()
  }, [])


  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Nom de Projet ",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "NBGroup", headerName: "NB group", width: 150 },


    {
      field: "wewe",
      headerName: "mombres groupe",
      width: 360,
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: " Team Leader ",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/dashdirecteur/project/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div class="headerr"><div class="app-content-header"><h1 class="app-content-headerText">Les Projets</h1></div></div>

      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection className="bordernone"
      />
    </div>
  );
}
