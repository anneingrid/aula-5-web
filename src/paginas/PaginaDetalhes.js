import { Card, Col, Row, Image, Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';

export default function PaginaDetalhes() {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resposta) => {
                setPost(resposta.data);
            });
    }, []);

    if (post) {
        return <>

            <Row gutter={16} style={{ margin: 20 }}>
                <Col span={5}>
                    <Card className='imageDetalhe' bordered={true}
                        hoverable
                        size='small'
                        
                    >
                        <Image
                            width={200}
                            src={post.image}
                        />
                    </Card>
                </Col >
                <Col span={15} className='detalhes'>
                    <h2 className='title'>{post.title}</h2>
                    <p>{post.description}</p>
                    <p className='preco'>R$ {(post.price*4.92).toFixed(2)}</p>
                    
                    <Button type="primary" className="botaoCompra">Comprar agora</Button>
                    <p className='obs'>Vendido e entregue por Van Neves.</p>
                </Col >

            </Row>

        </>
    }

}