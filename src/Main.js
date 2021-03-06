import React from 'react'
import Header from './Header';
import Form from './Form';

import { SRLWrapper } from "simple-react-lightbox";
import translate from './i18n/translate';

// IMAGES
import boats from './images/boats.jpg';
import check from './images/check.png';
import one from './images/one.PNG';
import two from './images/two.PNG';
import three from './images/three.PNG';
import four from './images/four.PNG';
import five from './images/five.PNG';
import six from './images/six.PNG';
import galleryOne from './images/gallery1.jpg';
import galleryTwo from './images/gallery2.jpg';
import galleryFour from './images/gallery4.jpg';
import galleryFive from './images/gallery5.jpg';
import gallerySix from './images/gallery6.jpg';
import gallerySeven from './images/gallery7.jpg';
import galleryEight from './images/gallery8.jpg';
import video from './images/video.mp4';
import video2 from './images/video2.mp4';
import galleryNine from './images/gallery9.jpg';
import galleryTen from './images/gallery10.jpg';
import galleryEleven from './images/gallery11.jpg';
import galleryTwelve from './images/gallery12.jpg';
import galleryThirteen from './images/gallery13.jpg';
// import partners from './images/partners.jpg';

function Main() {


    

    return (
        <div class="main__container">
            <Header />
            <div class="section__col-2">
                {/* <div class="logo-separator"></div> */}
                <div class="section__wrapper">
                    <div class="left">
                        <h1>
                        {translate('headerInfo')}
                        </h1>
                        <div class="buttons">
                            <a href="#contacts">
                                <div class="btn-primary">{translate('contact_us')}</div>
                            </a>
                            <a href="#galleri">
                                <div class="btn-secondary">{translate('gallery')}</div>
                            </a>
                        </div>
                    </div>
                    <div class="right">
                        <img alt="" src={boats} class="hero-image"/>
                    </div>
                </div>
            </div>
            <div className="section__advantages">
                <div className="section__wrap">
                <h2>{translate('advantages')}</h2>
                    <div className="section__list">
                        <p className="item"><img alt="" src={check} />{translate('advantageOne')}</p>
                        <p className="item"><img alt="" src={check} />{translate('advantageTwo')}</p>
                        <p className="item"><img alt="" src={check} />{translate('advantageThree')}</p>
                        <p className="item"><img alt="" src={check} />{translate('advantageFour')}</p>
                        <p className="item"><img alt="" src={check} />{translate('advantageFive')} </p>
                        <p className="item"><img alt="" src={check} />{translate('advantageSix')}</p>
                    </div>
                </div>
            </div>
            <div className="section__product" id="produkt">
            <h1 className="text-center">{translate('aboutProduct')}</h1>
                <div className="section__wrap">
                    <div className="section__timeline">
                        <div className="row">
                            <div className="item">
                                <h2>{translate('professionalAppearance')}</h2>
                            </div>
                            <div className="item">
                                <img alt="" src={one} />
                                <img alt="" src={two} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="item padding">
                                <h2>{translate('shrinkWrap')}</h2>
                            </div>
                            <div className="item">
                                <img alt="" src={three} />
                                <img alt="" src={four} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="item padding">
                                <h2>{translate('enclosed')}</h2>
                            </div>
                            <div className="item">
                                <img alt="" src={five} />
                                <img alt="" src={six} />
                            </div>
                        </div>
                        <div className="section__list">
                            <p>{translate('weCanApply')}
                            </p>
                            <p className="item"><img alt="" src={check} />{translate('one')}</p>
                            <p className="item"><img alt="" src={check} />{translate('two')}</p>
                            <p className="item"><img alt="" src={check} />{translate('three')}</p>
                            <p className="item"><img alt="" src={check} />{translate('four')}</p>
                            <p className="item"><img alt="" src={check} />{translate('five')}</p>
                            <p className="item"><img alt="" src={check} />{translate('six')}</p>
                            <p className="item"><img alt="" src={check} />{translate('seven')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__gallery" id="galleri">
                <div className="section__wrap">
                    <div className="text-center"><h1>{translate('gallery')}</h1></div>
                    
                    <SRLWrapper>
                    <div className="gallery" id="darbai">
                        <a href={galleryOne}><img src={galleryOne} alt="" title=""/></a>
                        <a href={galleryTwo}><img src={galleryTwo} alt="" title=""/></a>
                        <a href={galleryFour}><img src={galleryFour} alt="" title=""/></a>
                        <a href={galleryFive}><img src={galleryFive} alt="" title=""/></a>
                        <a href={gallerySix}><img src={gallerySix} alt="" title=""/></a>
                        <a href={gallerySeven}><img src={gallerySeven} alt="" title=""/></a>
                        <a href={galleryEight}><img src={galleryEight} alt="" title=""/></a>
                        <a href={galleryNine}><img src={galleryNine} alt="" title=""/></a>
                        <a href={galleryTen}><img src={galleryTen} alt="" title=""/></a>
                        <a href={galleryEleven}><img src={galleryEleven} alt="" title=""/></a>
                        <a href={galleryTwelve}><img src={galleryTwelve} alt="" title=""/></a>
                        <a href={galleryThirteen}><img src={galleryThirteen} alt="" title=""/></a>
                        </div>
                    </SRLWrapper>
                    <video controls>
                        <source src={video} type="video/mp4" />
                    </video>
                    <video controls style={{ width: '100%'}}>
                        <source src={video2} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* <div class="section__col-3">
                <div class="item">
                    <img alt="" src={euro} width="64px"/>
                    <p>
                    Patirtis su ??vairaus sud??tingumo projektais leis Jums pasi??lyti ger?? kainos ir kokyb??s
                    santyk??. Kiekvieno projekto kaina pas mus - <span> nuo 80 eur??</span>. 
                    Mokate tik tada, jeigu atliktas darbas Jus tenkina.
                    </p>
                </div>
                <div class="item">
                    <img alt="" src={workFromHome} width="64px"/>
                    <p>
                    Darb?? atliksime pagal J??s?? individualius pageidavimus, 
                    m??s?? pasi??lymus ar Jums patikusius pavyzd??ius.
                    </p>
                </div>
                <div div class="item">
                    <img alt="" src={duration} width="64px"/>
                    <p>
                    Kadangi projektui skiriamas didelis d??mesys dizaino 
                    elementams ir tinkamam funkcionalumo u??baigtumui, 
                    priklausomai nuo projekto dyd??io, darb?? trukm?? -
                    <span> nuo 1 iki 2 savai??i??</span>.
                    </p>
                </div>
            </div> */}
            {/* <div class="section__team">
                <h2 class="text-center">KOMANDA</h2>
                <div class="wrapper">
                    <div class="member">
                        <img src={programmer} alt="" class="staff-img"/>
                        <div class="info">
                            <h3>Vilius</h3>
                            <p>??k??r??jas ir programuotojas</p>
                        </div>
                    </div>
                    <div class="member">
                        <img src={programmer2} alt="" class="staff-img"/>
                        <div class="info">
                            <h3>Marius</h3>
                            <p>Programuotojas</p>
                        </div>
                    </div>
                    <div class="member">
                        <img src={designer} alt="" class="staff-img"/>
                        <div class="info">
                            <h3>Rolandas</h3>
                            <p>Dizaineris</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="section__contact" id="contacts">
            {/* <div class="logo-separator"></div> */}
            <h1 class="text-center">{translate('contact_us')}</h1>
            <div class="wrapper">
                <Form />
            </div>
        </div>
        <div class="footer">
            Copyright <strong>??</strong> 2021. Made by <a href="https://northweb.lt">northweb.lt</a><br />
            <div class='tags'>All rights reserved.</div>
        </div>
        </div>
    )
}

export default Main
