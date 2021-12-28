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
                        title="A Smartwatch"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZFsnKspGxjTnUJCytqjkhayQ0N4VERTpqw&usqp=CAU"
                        rating={5} />
                    <Product
                        id="90901919"
                        title="Television"
                        price={700.50}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2Jb0HLfcNHzch48xj_0Td_PPTbEXoMvfmQ&usqp=CAU"
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product
                        id="10203040"
                        title="A Keyboard"
                        price={30.59}
                        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbV--W-jA_sfYYAWZm2NHT7YprcT3W25PTPh1cDy22OEtA0SnY4fojWm_PnwwvF6IFbGO7K9N5fQPYGAWEk0N0fcvesatIGgYhfoxpTw&usqp=CAE"
                        rating={5} />
                    <Product
                        id="92939494"
                        title="Redimi 9A"
                        price={200.99}
                        image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ2ARdt10O12vlQ-oNq9SAEqHmfoHofFejtsDr90pZWVC7uDbVGIWHqnDQgfnCzlzBNQJyWDWsxgxuyJDL1cQvkpuJkc9ufqUMNVI_HyMrqXkoEvaiX6mQ&usqp=CAE"
                        rating={4} />
                    <Product
                        id="10200101"
                        title="A Pan"
                        price={20.10}
                        image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2-tIEnCDQBX4rrS0EHpPrIjeRCKChJhvBXIxLFCzhnlMpD_ipZj8d53brP_hZKy4-gLM528X0E7A10_CgXcWve4pSZLKjhzUGN6JoghtXl70xLGpxJjkB9Q&usqp=CAE"
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product
                        id="92928989"
                        title="HP All in One PC"
                        price={967.54}
                        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWGnboWCZ1ROgroo2IKvc2YPM4rrHw_8j6lxFZPMpAftDiY1ZPAlzbLetR9KSzh9h8wstdrQaGYhQLE7T664OaNKuQHiHyp7nCY-1amK2ORokDllam4T3s&usqp=CAE"
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
