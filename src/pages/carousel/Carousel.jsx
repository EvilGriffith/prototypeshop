import "./Carousel.css"
import React, {useEffect, useState, Children, cloneElement} from "react"
async function getWidth(){
    try{
        const res = await fetch("https://evilgriffith.github.io/serverdata/clothes.json")
        const data = await res.json()
        const maledata = data.filter((value) => {return value.gender == "male"})
        const length = maledata.length
        return length
    }
    catch(error){
        return false
    }
}

export const Carousel = ({children}) => {
    const [Width,setWidth] = useState(0)
    useEffect(()=>{
    async function grabWidth(){
        setWidth(await getWidth())
        
    }
    grabWidth()
},[])
    const PAGE_WIDTH = 2400
    let totalwidth
    Width ? totalwidth = PAGE_WIDTH / Width : totalwidth = 0

    const handleLeftArrowClick = () => {
        setoffset((currentoffset) => {
            const newOffset = currentoffset + totalwidth
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setoffset((currentoffset) => {
            const newOffset = currentoffset - totalwidth
            return Math.max(newOffset,-2000)
        })
    }
    const [pages,setpages] = useState([])
    const [offset,setoffset] = useState(0)
    useEffect(() => {
        setpages(
            Children.map(children,child => {
               return cloneElement(child,{
                style:{
                    height: "100%",
                    minWidth: "2400px",
                    maxWidth: "2400px",
                }
               })
            })
        )
    },[])

    return(
        <div className="maincarousel">
            <div className="leftarrow" onClick={handleLeftArrowClick}/>
            <div className="window">
                <div className="allitems"
                style={{
                 transform: `translateX(${offset}px)`   
                }}
                >{pages}</div>
            </div>
            <div className="rightarrow" onClick={handleRightArrowClick}/>
        </div>
    )
}