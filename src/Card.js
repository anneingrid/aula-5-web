import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


export default function Card({ id, title, imagem, preco }) {
    return (
        <div className="card">
            <img src={imagem} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">R${preco}</p>
                <a href="#" className="btn btn-secondary">Adicionar ao carrinho</a>
            </div>
        </div>
    );
};