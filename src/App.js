import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import NavBar from './NavBar';
import Carrossel from './Carrossel';

function App() {
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
      <Carrossel></Carrossel>

      <h2>Confira nossos últimos lançamentos</h2>
      <div className="container-fluid">
        <div className="row">

          {posts.map((post) => {
            return <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
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

export default App;
