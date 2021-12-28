import React from 'react';
import Product from '../Product/Product';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="12338888"
                        title="THe lean startup"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZFsnKspGxjTnUJCytqjkhayQ0N4VERTpqw&usqp=CAU"
                        rating={5} />
                    <Product
                        id="90901919"
                        title="THe lean startup"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZFsnKspGxjTnUJCytqjkhayQ0N4VERTpqw&usqp=CAU"
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product
                        id="10203040"
                        title="THe lean startup"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZFsnKspGxjTnUJCytqjkhayQ0N4VERTpqw&usqp=CAU"
                        rating={5} />
                    <Product
                        id="92939494"
                        title="THe lean startup"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZFsnKspGxjTnUJCytqjkhayQ0N4VERTpqw&usqp=CAU"
                        rating={5} />
                    <Product
                        id="10200101"
                        title="THe lean startup"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZFsnKspGxjTnUJCytqjkhayQ0N4VERTpqw&usqp=CAU"
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product
                        id="92928989"
                        title="THe lean startup"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZFsnKspGxjTnUJCytqjkhayQ0N4VERTpqw&usqp=CAU"
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
