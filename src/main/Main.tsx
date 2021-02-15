import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../interfaces/product';


const Main = () => {
    const [products, setProducts] = useState([] as Product[]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products');

                const data = await response.json();

                console.log(data);

                setProducts(data);



            }
        )();
    }, []);

    const like = async (id: number) => {
        await fetch (`http://localhost::5000/api/products/${id}/like`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        });

        setProducts(products.map(
            (p: Product) => {
                if(p.id === id) {
                    p.likes++;
                }
                return p;
            }
        ))

    }



    return (
    <>
    <Link to='/admin/admin/products/create'>create products</Link>
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Follow on Twitter</a></li>
                            <li><a href="#" className="text-white">Like on Facebook</a></li>
                            <li><a href="#" className="text-white">Email me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                   {products.map(
                       (p: Product) => {
                           return(
                            <div className="col" key={p.id}>
                                <div className="card shadow-sm">
                                    <img src={p.image} height='180' />
                                <div className="card-body">
                                    <p className="card-text">{p.title}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"
                                            onClick={() => like(p.id)}
                                            >Like</button>
                                        </div>
                                        <small className="text-muted">{p.likes}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                           )
                       }
                   )}
            </div>
        </div>
    </div>

  </>      
    )
}

export default Main;