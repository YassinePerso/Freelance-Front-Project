import React from 'react';
import BackImg from '../../images/stars.jpg';
// import Products from './Products';
import styles from '../../Styles/Home.module.css';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <main className={styles.containerHome}>

            <section className={styles.containerHomeImg}>
                <img src={BackImg} alt="stars" />
            </section>

            <section className={styles.containerHomeText}>

                <div className={styles.divPHome}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus quae tempore illo error rem? Cumque adipisci aliquid debitis tempora suscipit! Officiis dolor quod     commodi facere ab id corporis ipsam!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque placeat voluptatibus quibusdam a mollitia corrupti vel consequatur iste fugit. Libero tenetur molestiae id dolorum officia laboriosam, incidunt hic modi alias!
                </p>
                </div>

            <section className={styles.containerHomeButton}>
                <div className={styles.firstButtonGridHome}></div>
                <div className={styles.secondButtonGridHome}>
                    <Zoom delay={200} duration={2000}>
                        <Link to='/Decouverte'>
                        <button>
                            Découvrez Chanvrax
                        </button>
                        </Link>
                    </Zoom>
                </div>
            <div className={styles.thirdButtonGridHome}></div>
            </section>
            
            </section>
        </main>
        </>
    );
};

export default Home;