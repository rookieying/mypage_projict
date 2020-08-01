
import React from 'react'
import styles from './last.less'

export default () => {
    return (
        <div id="last" className={styles.last}>
            <div>
                <h1>UNISPACE</h1>
            </div>
            <div>
                <ul>
                    <li className={styles.lager}>企业</li>
                    <li>关于我们</li>
                    <li>工作机会</li>
                    <li>投资者信息</li>
                    <li>媒体中心</li>
                    <li>新闻稿</li>
                </ul>
                <ul>
                    <li className={styles.lager}>产品</li>
                    <li>产品项目一</li>
                    <li>产品项目一</li>
                    <li>产品项目一</li>
                </ul>
                <ul>
                    <li className={styles.lager}>联系我们</li>
                    <li>办公室地址</li>
                    <li>产品支持</li>
                    <li>销售</li>
                    <li>媒体联系</li>
                </ul>
                <ul>
                    <li className={styles.lager}>关注我们</li>
                    <li>微信</li>
                    <li>微博</li>
                    <li>微博</li>
                </ul>

            </div>
        </div>
    )
}