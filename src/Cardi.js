import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Card } from 'antd';
// import '../App.css';
import { Link } from 'react-router-dom';
import PaginaDetalhes from './paginas/PaginaDetalhes';


export default function Cardi({ title, imagem, preco }) {
    return (<>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={imagem} />}
            >
                <Card.Meta title={title} description={preco} />

            </Card>
        


    </>
    );
};