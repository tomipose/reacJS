import React, { Component } from 'react';
import laptop from '../assets/imagenes/laptop.jpg'

class ItemListContainer extends Component {
    render () {
        return (
            <div className="container-fluid" style={{display:'flex',justifyContent:'center'}}>
            <div className="card" style={{width:'18rem',margin:'1rem 0 0 1rem'}}>
                <img src={laptop} className="card-img-top" style={{width:'18rem'}} alt="..."></img>
                <div className="card-body anchoCard">
                <h5 className="card-title">Producto 1</h5>
                <p className="card-text text-black-50">Descripcion</p>
                <a href="," className="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div className="card" style={{width:'18rem',margin:'1rem 0 0 1rem'}}>
                <img src={laptop} className="card-img-top" style={{width:'18rem'}} alt="..."></img>
                <div className="card-body anchoCard">
                <h5 className="card-title">Producto 2</h5>
                <p className="card-text text-black-50">Descripcion</p>
                <a href="," className="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div className="card" style={{width:'18rem',margin:'1rem 0 0 1rem'}}>
                <img src={laptop} className="card-img-top" style={{width:'18rem'}} alt="..."></img>
                <div className="card-body anchoCard">
                <h5 className="card-title">Producto 3</h5>
                <p className="card-text text-black-50">Descripcion</p>
                <a href="," className="btn btn-primary">Comprar</a>
                </div>
            </div>

            </div>
        )
    }
}

export default ItemListContainer;