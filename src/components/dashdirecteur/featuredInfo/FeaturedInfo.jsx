import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState, useEffect } from 'react'

export default function FeaturedInfo() {
  const [project,setProject] = useState([])
  const [students,setStudents] = useState([])
  const [profs,setProfs] = useState([])


  const getProject = async ()=>{
    let res = await fetch('http://localhost:5000/group/',{
      method : 'GET',
      headers : {
        'Content-type' : "application/json",
        'Authorization' : `Bearer ${localStorage.getItem('Token')}`
      }
    })
    let {Groups} =await res.json()
    setProject(Groups)
    console.log(project);
  }

  const getMembers = async ()=>{
    let res = await fetch('http://localhost:5000/auth/users',{
      method : 'GET',
      headers : {
        'Content-type' : "application/json",
        'Authorization' : `Bearer ${localStorage.getItem('Token')}`
      }
    })
    let {data} =await  res.json()

    let student = data.filter((e)=>{
      return e.type == 'ETUDIANT'
    })
    setStudents(student)
    console.log(students);

    let prof = data.filter((e)=>{
      return e.type == 'ENCADRENT'
    })

    setProfs(prof)
    console.log(profs);
  }

  useEffect(() => {
    getProject()
    getMembers()
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem1">
        <span className="featuredTitle">Tous Les Projets</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{project.length}</span>

        </div>
        <span className="featuredSub">Cette Annee</span>
      </div>
      <div className="featuredItem2">
        <span className="featuredTitle">Nombre Des Etudiants</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{students.length}</span>

        </div>
        <span className="featuredSub">Cette Annee</span>
      </div>
      <div className="featuredItem3">
        <span className="featuredTitle">Nombre des encadrants</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{profs.length}</span>

        </div>
        <span className="featuredSub">Cette Annee</span>
      </div>
    </div>
  );
}
