import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption'

export default function Carrossel() {
    return (
        <Carousel className="carrossel">
            <Carousel.Item>
                <img src="./1.png" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="./2.png" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="./3.png" className="d-block w-100" />
            </Carousel.Item>
            
        </Carousel>

    );
};




// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';

// export default function Carrossel() {
//     return (
//         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <img src="./1.png" className="d-block w-100" alt="..." />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="./2.png" className="d-block w-100" alt="..." />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="./3.png" className="d-block w-100" alt="..." />
//                 </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>
//     )
// }