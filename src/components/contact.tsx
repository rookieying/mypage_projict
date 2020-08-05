
import React from 'react'
import styles from './contact.less'

export default () => {
    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.text}>
                <h1>联系我们</h1>
                <p>这里为您提供了我们的各种联系方式，如果您有任何需求或者遇到任何问题都可以随时联系我们。</p>

            </div>
            <div className={styles.div}>
                <div>
                        我们的公司：易简空间技术有限公司
                    </div>
                    <div>
                        我们的联系电话：0377-888666
                    </div>
                    <div>
                        我们的邮箱：yijian@gmail.com
                    </div>
                    <div>
                        请联系我们：
                        <div className={styles.img}>
                            
                        </div>
                    </div>
                </div>
            {/* <div className={styles.input}>
                
                <div className={styles.name}>

                    <div>
                        我们的公司：<br />
                        <input disabled type="text" placeholder="易简空间技术有限公司"/><br />中文名称
                        </div>
                    <div className={styles.lastname}>
                        <input disabled type="text" placeholder="Unispace"/><br />英文名称
                        </div>
                </div>
                <div>
                    姓名 *<br />
                    <input type="text" />
                </div>

                <div>
                    我们的联系电话：<br />
                    <input disabled className={styles.telephone} type="telephone" placeholder="0377-888666"/>
                </div>
                <div>
                    我们的邮箱：<br />
                    <input disabled className={styles.emali} type="email" placeholder="666888@yijian.com"/>
                </div>
                <div>
                    我们的公众号：<br />
                    <input disabled className={styles.company} type="text"  placeholder="易简空间技术有限公司"/>
                </div>
                <div>
                    您需要什么帮助？<br />
                    <input className={styles.help} type="text" />
                </div>
                <div>
                    咨询内容 *<br />
                    <textarea></textarea>
                </div>
                <div className={styles.checkbox}>
                    您是怎么了解到我们的?<br />
                    <input type="checkbox" name="way" value="Google Search" />Google Search<br />
                    <input type="checkbox" name="way" value="Referral" />Referral<br />
                    <input type="checkbox" name="way" value="LinkedIn" />LinkedIn<br />
                    <input type="checkbox" name="way" value="Facebook" />Facebook<br />
                    <input type="checkbox" name="way" value="Twitter" />Twitter
                     </div>
                <div >
                    <input type="submit" className={styles.submit} />
                </div>
            </div> */}
        </div>
    )
}