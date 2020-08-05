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

class Index extends React.Component {


    componentDidMount() {
        changebg()
        // console.log("vzcbvmxb");
        
    }

    render() {

        return (
            <div className={styles.title}>
                <Header />
                <IndexPage />
                <Main />
                {/* <div className={styles.lunbo}>
                    <div className={styles.mainlunbo}>
                        <Carousel className={styles.carousel}>
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
                </div> */}
                <Maintwo />
                <Contact />
                <Last />

                <div className={styles.nav}>
                    <div  className={styles.clearfix}>
                        <span>我们的主页</span>
                        <a id="abg" className={styles.navbg} href="#header"></a>
                    </div>
                    <div className={styles.clearfix}>
                        <span>我们的优势</span>
                        <a id="bbg" className={''} href="#main"></a>
                    </div >
                    <div className={styles.clearfix}>
                        <span>我们的产品</span>
                        <a id="cbg" className={''} href="#maintwo"></a>
                    </div>
                    <div className={styles.clearfix}>
                        <span>我们获得的奖项</span>
                        <a id="dbg" className={''} href="#contact"></a>
                    </div>
                    <div className={styles.clearfix}>
                        <span>联系我们</span>
                        <a id="ebg" className={''} href="#last"></a>
                    </div>
                </div>
            </div>
        );
    }    
}
function changebg() {
    window.onscroll = function () {
        var abg = document.getElementById('abg');
        var bbg = document.getElementById('bbg');
        var cbg = document.getElementById('cbg');
        var dbg = document.getElementById('dbg');
        var ebg = document.getElementById('ebg');

        if (abg) {
            if (window.pageYOffset == 0 || window.pageYOffset < 500 ) {
                abg.className = styles.navbg
            } else {
                abg.className = ''
            }
        }
        if (bbg) {
            if (window.pageYOffset > 500 && window.pageYOffset < 2795) {
                bbg.className = styles.navbg
            } else {
                bbg.className = ''
            }
        }
        if (cbg) {
            if (window.pageYOffset > 2795 && window.pageYOffset < 3544) {
                cbg.className = styles.navbg
            } else {
                cbg.className = ''
            }
        }
        if (dbg) {
            if (window.pageYOffset > 3544 && window.pageYOffset < 4200 ) {
                dbg.className = styles.navbg
            } else {
                dbg.className = ''
            }
        }
        if (ebg) {
            if (window.pageYOffset > 4200) {
                ebg.className = styles.navbg
            } else {
                ebg.className = ''
            }
        }
        

        
    }
}


export default Index

// export default () => {


// }