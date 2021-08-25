import React from 'react'
import homePage from './images/home-page.png';
import letter from './images/letter.png';
import box from './images/box.png';
import gallery from './images/gallery.png';
import translate from './i18n/translate';

function Aside() {
    return (
            <aside>
                {/* <div class="logo"><img alt="" src={logo} /></div> */}
                <nav>
                    <ul>
                        <a href="#start">
                        <li id="home">
                            <img alt="" src={homePage} class="menu-icon" />
                            <div class="title">
                                {translate('home')}
                            </div>
                        </li>
                        </a>
                        <a href="#produkt">
                        <li id="product">
                            <img alt="" src={box} class="menu-icon" />
                            <div class="title">
                            {translate('product')}
                            </div>
                        </li>
                        </a>
                        <a href="#galleri">
                        <li id="gallery">
                            <img alt="" src={gallery} class="menu-icon" />
                            <div class="title">
                            {translate('gallery')}
                            </div>
                        </li>
                        </a>
                        <a href="#contacts">
                        <li id="contact">
                            <img alt="" src={letter} class="menu-icon" />
                            <div class="title">
                            {translate('contact')}
                            </div>
                        </li>
                        </a>
                        {/* <a href="#klientai">
                        <li id="clients">
                            <img alt="" src={customers} class="menu-icon" />
                            <div class="title">
                                ATSILIEPIMAI
                            </div>
                        </li>
                        </a>
                        <a href="#darbai">
                        <li id="portfolio">
                            <img alt="" src={portfolio} class="menu-icon" />
                            <div class="title">
                                DARBAI
                            </div>
                        </li>
                        </a>
                        <a href="#procesas">
                        <li id="process">
                            <img alt="" src={workStation} class="menu-icon"/>
                            <div class="title">
                                PROCESAS
                            </div>
                        </li>
                        </a>
                        <a href="#kontaktai">
                        <li id="contact">
                            <img alt="" src={letter} class="menu-icon" />
                            <div class="title">
                                KONTAKTAI
                            </div>
                        </li>
                        </a> */}
                    </ul>
                </nav>
            </aside>
    )
}

export default Aside
