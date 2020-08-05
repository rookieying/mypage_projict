
import React from 'react'
import styles from './maintwo.less'
import Carousel from 'nuka-carousel';
import Img2 from '../imgs/logoj.png'

export default () => {
    return (
        <div id="maintwo" className={styles.main2}>
            <div className={styles.main2two}>
                <h1>更多产品</h1>
                <p>助你增长数据处理能力</p>
                <div className={styles.flexouter}>
                    <div className={styles.flexinner}>
                        <div className={styles.block}>
                            <div className={styles.bgc}>
                            <h4>市场领先的数据与数据流</h4>
                            <p>我们的实时市场数据流能以最适合您工作流程的方式提供您所需的任何数据。</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.bgc}>
                            <h4>实时与非实时数据</h4>
                            <p>访问实时和非实时数据，包括广泛的tick histoyr、基本面、定价、和参考数据。</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            
                            <div className={styles.bgc}>
                            <h4>低延迟数据传送</h4>
                            <p>通过低延迟数据流、迅速获得来自数千个交易所和场外交易市场的实时数据。</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.flexinner}>
                        <div className={styles.block}>
                            <div className={styles.bgc}>
                            <h4>一致的符号系统</h4>
                            <p>将不同数据类型和资产类别的数据作规范化处理，让您的决策指定过程和分析更清晰。</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.bgc}>
                            <h4>灵活部署</h4>
                            <p>以“即服务”方式部署业界功能强大的软件，用于分发和管理实时市场数据。</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.bgc}>
                            <h4>开发者支持</h4>
                            <p>利用我们业界领先的专业知识，从我们的API、SDK、工具和数据中获得更多价值。</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.flexinner}>
                        <div className={styles.block}>
                            <div className={styles.bgc}>
                            <h4>一致的符号系统</h4>
                            <p>将不同数据类型和资产类别的数据作规范化处理，让您的决策指定过程和分析更清晰。</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.bgc}>
                            <h4>灵活部署</h4>
                            <p>以“即服务”方式部署业界功能强大的软件，用于分发和管理实时市场数据。</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.bgc}>
                            <h4>开发者支持</h4>
                            <p>利用我们业界领先的专业知识，从我们的API、SDK、工具和数据中获得更多价值。</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.main2one}>
                <h1>奖项荣誉</h1>
                {/* <div className={styles.btn}>
                    <span className={styles.btn1}></span>
                    <span className={styles.btn2}></span>
                </div> */}
                <div className={styles.lunbo2}>
                    <Carousel 
                        className={styles.carousel}
                        defaultControlsConfig={{
                            pagingDotsStyle: {
                              fill: 'black'
                            }
                          }}
                    > 
                        <div>
                            <img src={Img2} alt=""/>
                            <img src={Img2} alt=""/>
                            <img src={Img2} className={styles.imglast} alt=""/>
                        </div>
                        <div>
                            <img src={Img2} />
                            <img src={Img2} alt=""/>
                            <img src={Img2} className={styles.imglast} alt=""/>
                        </div>
                        <div>
                            <img src={Img2} />
                            <img src={Img2} />
                            <img src={Img2} className={styles.imglast} alt=""/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}