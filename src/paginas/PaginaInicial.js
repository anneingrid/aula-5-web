import axios from 'axios';
import { useEffect, useState } from 'react';
import Cardi from '../Cardi';
import NavBar from '../NavBar';
import PaginaDetalhes from './PaginaDetalhes';
import '../App.css';
import { Link } from 'react-router-dom';

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
      <NavBar></NavBar>
      
      <div className="container-fluid">
        <div className="row">

          {posts.map((post) => {
            return <div className="col-sm-12 col-md-6 col-lg-3" >
                
              <Cardi
                onClick={() => {PaginaDetalhes(post.title, post.image, post.price.toFixed(2),post.description)}}
                key={post.id}
                title={post.title}
                imagem={post.image}
                preco={post.price.toFixed(2)}
                
              />
            </div>
          })}


        </div>
      </div>
    </div>
  );
}

export default PaginaInicial;
