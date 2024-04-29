import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bulma-components'
import axios from 'axios'
import { ImageList } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const [data, setData] = useState([]);
    const [type, setType] = useState("men's clothing");
    const [search, setSearch] = useState("");
    const types = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${type}`)
            .then((res) => {
                console.log(res.data);
                // mongodb+srv://akbaralievbehruz44:user@cluster0.6tpnz02.mongodb.net/insta?retryWrites=true&w=majority
                setData(res.data)
            }).catch((e) => {
                console.log(e);
            })
    }, [type])
    const navigate = useNavigate();
    return (
        <div className='main-wrappe' style={{ display: 'flex', justifyContent: "space-between", paddingBottom: "40px" }}>
            <div className="main-row-1">
                <div className="main-header" style={{ paddingLeft: "20px" }}>
                    <Form.Input onChange={(e) => setSearch(e.target.value)} style={{ width: "500px" }} placeholder='Search product...' />
                </div>
                <ImageList className="main-products" style={{ padding: "10px", height: "600px" }} cols={4}>
                    {

                        data
                        .filter((item) => {
                            const searchUpper = (search && search.toUpperCase()) || "";
                            return searchUpper === ""
                                ? true
                                : (item.title && item.title.toUpperCase().includes(searchUpper));
                        })
                        .map((item,index) => (
                            <>
                                <Card onClick={() => navigate(`/product/card/${item.id}`)} style={{ display: 'flex', alignItems: "center", flexDirection: 'column', width: "300px", margin: "10px", cursor: 'pointer',padding:"30px"}} key={item.id}>
                                    <Card.Content>
                                        <img style={{ width: "200px", height: "200px" }} src={item.image} alt="product-image" />
                                    </Card.Content>
                                    <Card.Header>
                                        <Card.Header.Title style={{fontSize:"15px"}}>{item.title}</Card.Header.Title>
                                        <Card.Header.Title >{item.price}$</Card.Header.Title>
                                    </Card.Header>
                                </Card>
                            </>
                        ))
                    }
                </ImageList>
            </div>
            <div className="main-row-2" style={{ display: 'flex', flexDirection: 'column', gap: "10px", paddingRight: "30px" }}>
                {
                    types.map((item,index) => (
                        <Button onClick={() => setType(item)} key={index}>{item}</Button>
                    ))
                }

            </div>
        </div>
    )
}

export default Main