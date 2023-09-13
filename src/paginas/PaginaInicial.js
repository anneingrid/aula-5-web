import axios from 'axios';
import { useEffect, useState } from 'react';
import Cardi from '../Cardi';
import '../App.css';
import { Col, Row } from 'antd';

function PaginaInicial() {
    const [posts, setPost] = useState([]);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((resposta) => {
                setPost(resposta.data);
            });
    }, []);
    return (
        
        <div className="App">
            <h2>Bem vindos a loja do Chile</h2>
            <div className="container-fluid">
                <Row gutter={16}>
                    {posts.map((post) => {
                        return <Col span={6}>
                            <Cardi
                                item = {post}
                            />
                        </Col>
                    })}
            </Row>

        </div>
        </div >
    );
}

export default PaginaInicial;
