import React from 'react'
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom'
import styles from './homepage.less'
import Carousel from 'nuka-carousel'
import Header from './header'
import IndexPage from './indexpage'
import Main from './main'
import Lunbo from './lunbo'
import Maintwo from './maintwo'
import Contact from './contact'
import Last from './last'
import Nav from './nav'

export default () => {
    return (
            <div className={styles.title}>
                <Header />
                <IndexPage />
                <Main />
                <div className={styles.lunbo}>
                    <div className={styles.mainlunbo}>
                        <Carousel>
                            <div className={styles.ceng1}>
                                <div className={styles.touming}>
                                    <span>xxxxx</span>
                                </div>
                            </div>
                            <div className={styles.ceng2}>
                                <div className={styles.touming}>
                                    <span>xxxxx</span>
                                </div>
                            </div>
                            <div className={styles.ceng3}>
                                <div className={styles.touming}>
                                    <span>xxxxx</span>
                                </div>
                            </div>


                        </Carousel>
                    </div>
                </div>
                <Maintwo />
                <Contact />
                <Last />
                <Nav />
            </div>
    );
}