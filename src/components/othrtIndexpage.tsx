
import React from 'react'
import styles from './otherindexpage.less'
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
                    <h3>我们的工作领域</h3>
                    <p>我们的工作领域有...</p>
                </div>
            </div> 
        </div>
            
        </div>
    )
}
