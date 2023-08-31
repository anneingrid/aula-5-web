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
    <div className="row">


      {posts.map((post) => {
        return <div className="col-sm-3">
        <Card 
          title={post.title} 
          imagem={post.image}
          preco={post.price}
        />
        </div>
      })}

    </div>
  );
}

export default App;
