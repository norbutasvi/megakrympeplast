import React, {useState} from 'react';
import './style.css';
import menu from './images/menu.svg';
import close from './images/close-button.svg';
import Aside from './Aside';
import Main from './Main';
import SimpleReactLightbox from 'simple-react-lightbox'

import { I18nProvider, LOCALES} from './i18n'

import englandFlag from './images/united-kingdom.png';
import norwayFlag from './images/norway.png';
import translate from './i18n/translate';

function App() {

  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const handleLanguageChange = (language) => {
    setLocale(language);
    setShowLanguageMenu(false);
  }

  const handleMenuOpen = () => {
    if (showLanguageMenu === true) {
      setShowLanguageMenu(false);
    } else {
      setShowLanguageMenu(true);
    }
  }

  // const handleOpacity = (e) => {
  //   document.getElementById('number').classList.toggle('show');
  // }

  const handleClick = () => {
    const aside = document.querySelector('aside');
    const icon = document.querySelector('.btn-icon');
    const button = document.querySelector('#menu-button');

    aside.classList.toggle('active');
    button.classList.toggle('active-btn');

    if (aside.classList.contains('active')) {
      icon.src = close;
    } else {
      icon.src = menu;
    }
  }

  const closePopup = (e) => {
    e.target.parentNode.parentNode.style.display = 'none';
  }

  const handleNavAppearance = (e) => {

    const button = document.querySelector('#menu-button');
    const icon = document.querySelector('.btn-icon');
    const aside = document.querySelector('aside');

    if (e.target.closest('aside')) {
        return;
    } else if (e.target.closest('.nav-button')) {
        return;
    } else {
      if (aside.classList.contains('active')) {
        aside.classList.toggle('active');
        button.classList.toggle('active-btn');
        icon.src = menu;
      } else {
        return;
      }

    }
  }

  return (
    <I18nProvider locale={locale}> 
    <SimpleReactLightbox>
    <div className="App" onClick={(e) => handleNavAppearance(e)}>
      <div className="btn-group">
        <div className='language-button' onClick={() => handleMenuOpen()}>
          {
            locale === 'en-us' ?
            <img alt="" src={englandFlag} /> : 
            <img alt="" src={norwayFlag} />
          }{translate('currentLanguage')}
        </div>
          {
            showLanguageMenu &&
            <div className='language-menu'>
              {
                locale === 'en-us' ?
                <div className='flex' onClick={() => handleLanguageChange('nb-no')}><img alt="" src={norwayFlag} /> Norway</div>:
                <div className='flex' onClick={() => handleLanguageChange('en-us')}><img alt="" src={englandFlag} /> English</div>
              }
            </div>
          }
          {/* <button onClick={() => setLocale(LOCALES.ENGLISH)}><img src={englandFlag} /></button>
          <button onClick={() => setLocale(LOCALES.NORWEGIAN)}><img src={norwayFlag} /></button> */}
      </div>
      <div class="msg-success">
        <div class="close-msg" onClick={closePopup}>
          <img alt="" src={close} width="30px"/>
        </div>
        <h1>Žinutė išsiųsta</h1>
        <p>Susisieksime su Jumis artimiausiu metu nurodytu telefonu arba el. pašto adresu.</p>
      </div>
      <div class="nav-button" id="menu-button" onClick={() => handleClick()}>
        <img alt="" src={menu} width="30px" class="btn-icon"/>
      </div>
      <Aside />
      <Main />
      {/* <MessengerCustomerChat
        pageId="100819872017471"
        appId="269807374543748"
      /> */}
      {/* <a href='tel:+37063631839' className='call'>
        <img alt="" src={phone} />
      </a>
      <div onClick={(e) => handleOpacity(e)} className='call-without-call'>
        <div class='number' id='number'>+37063631839</div>
        <img alt="" src={phone} />
      </div> */}
    </div>
    </SimpleReactLightbox>
    </I18nProvider>
  );
}

export default App;
