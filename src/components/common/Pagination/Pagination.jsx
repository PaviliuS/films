import React from 'react';
import * as Style from './Style';
import {VscArrowLeft,VscArrowRight} from "react-icons/vsc";
import { useState, useEffect } from "react"

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])
  
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
  
    useEffect(() => {
      window.addEventListener('resize', handleResize)
  
      return () => window.removeEventListener('resize', handleResize)
    }, [size])
  
    return size;
}
const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let portionSize = 5;

    if (useWindowSize()[0] > 900){
        portionSize = 10;
    }
    else{portionSize = 5;}
    

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    let pagesElements = pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map(element => {
        if (element === props.currentPage) {
            return <Style.ActiveItem key={`pagination${element}`} >{element}</Style.ActiveItem>
        }
        else {
            return <Style.Item key={`pagination${element}`}  onClick={() => props.onPageChange(element, props.pageSize)}>{element}</Style.Item>
        }
    })

    return (
        <Style.Pagination>
                <Style.Content>
                    {portionNumber > 1 && <Style.Item onClick={() => setPortionNumber(portionNumber - 1)}><VscArrowLeft/></Style.Item>}
                    {pagesElements}
                    {portionCount > portionNumber && <Style.Item  onClick={() => setPortionNumber(portionNumber + 1)}><VscArrowRight/></Style.Item>}
                </Style.Content>
        </Style.Pagination>
    )
}
export default Pagination;