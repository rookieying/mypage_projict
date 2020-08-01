import React from 'react'
import { Link } from 'umi'
import styles from './header.less'
import Main from './main'
import Maintwo from './maintwo'
import Contact from './contact'
import Last from './main'
import IndexPage from './indexpage'

export default () => {
    return (
        <div>
            <header id="header">
                <div className={styles.mainnav}>
                    <div className={styles.left}>
                        <div></div>
                    </div>
                    <div className={styles.right}>
                        <a href="">主页</a>
                        <Link to='/main'><span>工作领域</span></Link>
                        <Link to='/maintwo'><span>金融数据</span></Link>
                        <Link to='/contact'><span>支持与培训</span></Link>
                        <Link to='/last'><span>Elektron数据平台</span></Link>
                        <Link to='/indexpage'><span>关于我们</span></Link>
                    </div>
                </div>
            </header>
        </div>
    )
}