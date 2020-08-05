import React from 'react'
import styles from './main.less'
import Carousel from 'nuka-carousel';
import Img2 from '../imgs/bg11.jpg'
import Img3 from '../imgs/bg111.jpg'

class Index extends React.Component {

    render() {

        return (
            <div id="main" className={styles.main}>
                <div className={styles.mainone}>
                    <h2>
                        为什么选择我们？
                        </h2>
                    <div className={styles.right}>
                        <Carousel 
                            className={styles.carousel} 
                            autoplay={true} 
                            defaultControlsConfig={{
                                // nextButtonText: 'Custom Next',
                                // prevButtonText: 'Customn Prev',
                                pagingDotsStyle: {
                                  fill: 'white'
                                }
                              }}
                        >
                            <div className={styles.ceng1}>
                                <div className={styles.touming}>
                                    <span>
                                        <h1>您可以借助Elektron获得竞争优势。</h1>
                                            <br />获得各种实时、参考、日终、时间序列和替代数据，以及强大的分析解决方案。
                                            <br />此外，还可以挖掘包括股票、FICC和场外衍生品业务员在内的深度数据覆盖。
                                            <br />这些数据可与您的专有数据和源自第三方的优质信息集成。
                                            <br />您需要的数据经过传送、整理、标记和标准化处理，可以轻松发现其中的关联、关系和联系，从而帮助您发现新机会。
                                            <br />这些数据通过数据流馈送，经由云上或者托管数据管理服务，直接到达您的电脑或应用程序。
                                        </span>
                                </div>
                            </div>
                            <div className={styles.ceng2}>
                                <div className={styles.touming}>
                                    <span>
                                    <h1>您可以借助Elektron获得竞争优势。</h1>
                                        <br />获得各种实时、参考、日终、时间序列和替代数据，以及强大的分析解决方案。
                                        <br />此外，还可以挖掘包括股票、FICC和场外衍生品业务员在内的深度数据覆盖。
                                        <br />这些数据可与您的专有数据和源自第三方的优质信息集成。
                                        <br />您需要的数据经过传送、整理、标记和标准化处理，可以轻松发现其中的关联、关系和联系，从而帮助您发现新机会。
                                        <br />这些数据通过数据流馈送，经由云上或者托管数据管理服务，直接到达您的电脑或应用程序。
                                    </span>
                                </div>
                            </div>
                            <div className={styles.ceng3}>
                                <div className={styles.touming}>
                                    <span>
                                    <h1>您可以借助Elektron获得竞争优势。</h1>
                                            <br />获得各种实时、参考、日终、时间序列和替代数据，以及强大的分析解决方案。
                                            <br />此外，还可以挖掘包括股票、FICC和场外衍生品业务员在内的深度数据覆盖。
                                            <br />这些数据可与您的专有数据和源自第三方的优质信息集成。
                                            <br />您需要的数据经过传送、整理、标记和标准化处理，可以轻松发现其中的关联、关系和联系，从而帮助您发现新机会。
                                            <br />这些数据通过数据流馈送，经由云上或者托管数据管理服务，直接到达您的电脑或应用程序。
                                        </span>
                                </div>
                            </div>
                        </Carousel>
                    </div>
    
                </div>
                <div className={styles.bg}></div>
                <div className={styles.maintwo}>
                    <h2>数据平台为企业带来的优势</h2>
                    <div id="tese" className={styles.tese}>
                        <div className={styles.teseright}>
                            <div>
                                <div className={styles.block1}>
                                    
                                    <div className={styles.bgc}>
                                    <h4>市场领先的数据与数据流</h4>
                                    <p>我们的实时市场数据流能以最适合您工作流程的方式提供您所需的任何数据。</p>
                                    </div>
                                </div>
                                <div className={styles.block2}>
                                    
                                    <div className={styles.bgc}>
                                    <h4>实时与非实时数据</h4>
                                    <p>访问实时和非实时数据，包括广泛的tick histoyr、基本面、定价、和参考数据。</p>
                                    </div>
                                </div>
                                <div className={styles.block3}>
                                    
                                    <div className={styles.bgc}>
                                    <h4>低延迟数据传送</h4>
                                    <p>通过低延迟数据流、迅速获得来自数千个交易所和场外交易市场的实时数据。</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.block4}>
                                    
                                   <div className={styles.bgc}>
                                   <h4>一致的符号系统</h4>
                                    <p>将不同数据类型和资产类别的数据作规范化处理，让您的决策指定过程和分析更清晰。</p>
                                   </div>
                                </div>
                                <div className={styles.block5}>
                                    
                                   <div className={styles.bgc}>
                                   <h4>灵活部署</h4>
                                    <p>在本地或者以“即服务”方式部署业界功能强大的软件，用于分发和管理实时市场数据。</p>
                                   </div>
                                </div>
                                <div className={styles.block6}>
                                    
                                    <div className={styles.bgc}>
                                    <h4>开发者支持</h4>
                                    <p>利用我们业界领先的专业知识，从我们的API、SDK、工具和数据中获得更多价值。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bg}></div>
                <div className={styles.mainthree}>
                    <h2>数据平台为企业提供的应用</h2>
                    <div className={styles.flex}>
                        <div className={styles.flexone}>
                            <div className={styles.img}></div>
                            <h2>助力企业，连接全球市场</h2>
                            <p>使用来自全球各个市场的高速数据、机器可读数据和新闻，发挥您的竞争优势。</p>
                            <div className={styles.btn}>了解更多 <span></span></div>
                        </div>
                        <div className={styles.flexone}>
                            <div className={styles.img}></div>
                            <h2>创建您的数据愿景，我们会助您实现</h2>
                            <p>通过部署Elektron as a Service提高您的灵活性、速度和成本效益。随着业务的发展，您将能够更好地应对和利用新机会。</p>
                            <div className={`${styles.btn}`}>了解更多 <span></span></div>
                        </div>
                        <div className={styles.flexone}>
                            <div className={styles.img}></div>
                            <h2>开发者社区支持</h2>
                            <p>加入我们不断发展的开发者社区，学习如何充分利用我们的数据和API。您还可以从与专家和更广泛社区的交流和讨论中受益。</p>
                            <div className={styles.btn}>了解更多 <span></span></div>
                        </div>
    
                    </div>
                </div>
                {/* <div className={styles.mainfour}>
                    我们的业务分布
    
                </div> */}
            
            </div>
        );
    }    
}
export default Index