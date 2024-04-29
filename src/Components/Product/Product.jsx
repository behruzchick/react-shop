import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Box, Button } from 'react-bulma-components';
import { useParams } from 'react-router-dom'

const Product = () => {
  const {id} = useParams();
  const [card,setCard] = useState({});
  useEffect(() => {
    if(id){
        axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            console.log(res);
            setCard(res?.data);
        }).catch((e) => {
            console.log(e);
        })
    }else{
        alert("Id is not valibale!")
    }
  },[id])
  return (
    <Box style={{display:'flex',alignItems:'center',justifyContent:'center',gap:"30px",width:"900px",margin:"100px auto"}}>
        <div className="card-image-wrappe">
            <img src={card?.image} style={{width:"300px"}} alt="" />
        </div>
        <div style={{width:"600px"}} className="card-info-wrapper">
            <b >{card?.title}</b> 
            <p style={{marginTop:"10px"}}>{card?.description}</p>
            <Button style={{background:"#FFFF00",color:"#000",borderRadius:'10px',marginTop:"30px"}}>{card?.price}$</Button>
            <Button style={{background:"none",color:"#44BE29",borderRadius:'70%',marginTop:"30px",width:"40px",marginLeft:"10px"}}>{card.rating?.rate}</Button>
        </div>
    </Box>
  )
}

export default Product