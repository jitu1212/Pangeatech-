import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hearder from "./Component/Header";
import './App.css'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LineBar from "./Component/LineChart/LineBar";

import TableCom from "./Component/TableCom";

const url = "http://fetest.pangeatech.net/data";
function App() {
  const [data, setData] = useState([]);
  const[filterdeData,setFilteredData] = useState([]);
  const [currRev,setRev]=useState("All");
  const [revenuetype,setRevenue]=useState([]);
  const [loading,setLoading] = useState(false);
  const [productType,setProductType]=useState([])


  useEffect(() => {
    (async () => {
      try {
        setLoading(false)
        const response = await axios.get(url);
        setData(response.data);
        setFilteredData(response.data)
        setLoading(true)
      } catch (error) {
        console.log(error);
      } 
    })();
  }, [])

  useEffect(()=>{
    if(loading){
      const temp=data.map((item)=>{
        return item.revenue_type;
     })
     const set=[...new Set(temp)]
     setRevenue(set);

     const arr=data.map((item)=>{
      return item.product;
   })
   const set2=[...new Set(arr)]
   setProductType(set2)
    }
  //  console.log(revenuetype);
  },[loading])

 
  const filter = (e)=>{
    if(e.target.name === "All"){
      setFilteredData(data)
      setRev("All")
    }else{
     const arr=data.filter((item)=>{
      return item.revenue_type===e.target.name;
     })
     setRev(e.target.name)
     setFilteredData(arr);
    }
  }
  
  return (
    <>
      <Hearder data={data} filter={filter} loading={loading} revenuetype={revenuetype} currRev={currRev}/>
      <div className="line-bar">
        <LineBar data={filterdeData} productType={productType}/>
        <TableCom data={filterdeData}/>
      </div>
    </>
  );
}

export default App;
