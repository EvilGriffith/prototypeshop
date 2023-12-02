import React, {useState, useEffect} from "react"
import  "./prod.css"

const url = "https://evilgriffith.github.io/serverdata/clothes.json"
async function getClothes(){
  try{
  const res = await fetch(url)
  const data = await res.json()
  const filt = data.filter((value) => {return value.gender == "male"})
  return filt
  }
  catch(error){
    const res = await fetch(url)
    return false
  }
}
export const Prod = ({children}) => {
  const [Maledata,setMaledata] = useState([])
  useEffect(()=>{
  async function datamale(){
    try{
    setMaledata(await getClothes())
  }
    catch(error){
      setMaledata(404)
    }
  }    
  datamale()
 
},[])
  
  if(Array.isArray(Maledata)){
 return(
  <>{Maledata.map((value) => { 
    return (
    <div className="obj">
      <div className="imageprod" style={{backgroundImage: `url(${value.image})`}}></div>
      <div className="name">{value.title}</div>
      <div className="price">{value.price} ₽</div>
    </div>)})}
  </>
 )
}
else{
  return(<div className="error">Невозможно загрузить данные Cтатус: {Maledata}</div>)
}
  
}
async function getFemaleclothes(){
  try{
  const res = await fetch(url)
  const data = await res.json()
  const filt = data.filter((value) => {return value.gender == "female"})
  return filt
  }
  catch(error){
    const response = await fetch(url)
    return false
  }
}
export const Femaleprod = ({children}) => {
  const [Femaledata,setFemaledata] = useState([])
  useEffect(()=>{
    async function datafemale(){
      try{
      setFemaledata(await getFemaleclothes())
      }
      catch(error){
        setFemaledata(404)
      }
    }
    datafemale()
  },[])
  if(Array.isArray(Femaledata)){
  return(
    <>{Femaledata.map((value) => { 
      return (
      <div className="obj">
        <div className="imageprod" style={{backgroundImage: `url(${value.image})`}}></div>
        <div className="name">{value.title}</div>
        <div className="price">{value.price} ₽</div>
      </div>)})}
    </>
   )
      }
  else{
    return(<div className="error">Невозможно загрузить данные Cтатус: {Femaledata}</div>)
  }
}