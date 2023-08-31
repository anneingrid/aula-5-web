import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

function App() {
  const [posts, setPost] = useState([]);

    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products`)
        .then((resposta) => {
          setPost(resposta.data);
        });
    }, []);
  return (
    <div className='App'>
    <div className="row">
    <h1 className="display-1">Loja de coisas ótimas</h1>
      {posts.map((post) => {
        return <div className="col-sm-3">
        <Card 
          id={post.id}
          title={post.title} 
          imagem={post.image}
          preco={post.price}
        />
        </div>
      })}

    </div>
    </div>
  );
}

export default App;
