
import React from 'react'
import styles from './indexpage.less'
import PropTypes from 'prop-types'
export default () => {
    // const propTypes = {
    //     mesg: PropTypes.string.isRequired
    // }
    return (
        <div className={styles.indexpagebg}>
            <div className={styles.indexpagecenter}>
            <div id="indexpage" className={styles.indexpage}>
                
                <div className={styles.content}>
                    <h1>UNISPACE</h1>
                    <h3>企业数据管理平台</h3>
                    <p>高质量数据是更快、更明智决策的关键所在。借助Unispace数据平台，您的团队可以通过数据中心、托管服务或者云端，随时随地发现、集成、丰富和使用他们所需的数据。</p>
                    <div>了解更多 <span></span></div>
                </div>
            </div> 
        </div>
            
        </div>
    )
}