
import React from 'react'
import styles from './contact.less'

export default () => {
    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.text}>
                <h1>Contact Us</h1>
                <p>Our security consulting experts bring peace of mind to your complex security needs. Learn how we can help your organization. Email us today.</p>
                <p>This form will allow you to send a secure email to Security Risk Management Consultants (SRMC).</p>
            </div>
            <div className={styles.input}>
                <div className={styles.name}>
                    <div>
                        姓名 *<br />
                        <input type="text" /><br />First Name
                        </div>
                    <div className={styles.lastname}>
                        <input type="text" /><br />Last Name
                        </div>
                </div>
                <div>
                    姓名 *<br />
                    <input type="text" />
                </div>
                <div>
                    邮箱 *<br />
                    <input className={styles.emali} type="email" />
                </div>
                <div>
                    联系电话 *<br />
                    <input className={styles.telephone} type="telephone" />
                </div>
                <div>
                    公司 *<br />
                    <input className={styles.company} type="text" />
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
                    How did you hear about SRMC?<br />
                    <input type="checkbox" name="way" value="Google Search" />Google Search<br />
                    <input type="checkbox" name="way" value="Referral" />Referral<br />
                    <input type="checkbox" name="way" value="LinkedIn" />LinkedIn<br />
                    <input type="checkbox" name="way" value="Facebook" />Facebook<br />
                    <input type="checkbox" name="way" value="Twitter" />Twitter
                     </div>
                <div >
                    <input type="submit" className={styles.submit} />
                </div>
            </div>
        </div>
    )
}