
import React from 'react'
import styles from './indexpage.less'

export default () => {
    return (
        <div id="indexpage" className={styles.indexpage}>
            <div className={styles.content}>
                <h1>ELEKTRON</h1>
                <h3>企业数据管理平台</h3>
                <p>高质量数据是更快、更明智决策的关键所在。借助Elektron数据平台，您的团队可以通过数据中心、托管服务或者云端，随时随地发现、集成、丰富和使用他们所需的数据。</p>
                <div>LEARN MORE <span></span></div>
            </div>
        </div>
    )
}