import React from 'react'
import styles from './nav.less'

export default () => {
    return (
        <div className={styles.nav}>
            <div className={styles.clearfix}>
                <span>我们的主页</span>
                <a href="#header"></a>
            </div>
            <div className={styles.clearfix}>
                <span>我们的优势</span>
                <a href="#main"></a>
            </div >
            <div className={styles.clearfix}>
                <span>我们的产品</span>
                <a href="#maintwo"></a>
            </div>
            <div className={styles.clearfix}>
                <span>我们获得的奖项</span>
                <a href="#contact"></a>
            </div>
            <div className={styles.clearfix}>
                <span>联系我们</span>
                <a href="#last"></a>
            </div>


        </div>
    )
}