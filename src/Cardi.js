import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Button, Card } from 'antd';
// import '../App.css';
import { Link } from 'react-router-dom';
import PaginaDetalhes from './paginas/PaginaDetalhes';


export default function Cardi({item}) {
    const linkStyle = {
        textDecoration: 'none'
      };
    return (<>
        <Link to={`/item/${item.id}` } style={linkStyle}>
            <Card
                hoverable
                style={{
                    width: 300,
                    margin:20,
                }}
                cover={<img alt="example" src={item.image} />}
            >
                <h6>{item.title}</h6>
                <p>R${(item.price*4.92).toFixed(2)}</p>

            </Card>
        </Link>


    </>
    );
};