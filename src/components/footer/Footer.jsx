import React from 'react'
import { Link } from 'react-router-dom'
import Btn2 from '../ui/btn2/Btn2'
import "./footer.scss"

import Logo from "../../assets/img/Logo.svg"
import { useSelector } from 'react-redux'
import { getClearPhone, getCuttedString, getLatestNews } from '../../functions/helpers'
import Socials from '../ui/socials/Socials'

export default function Footer() {

  let news = useSelector((state) => state.globalReducer.news)
  let mainInfo = useSelector((state) => state.globalReducer.mainInfo)

  return (
    <footer className="Footer">
      <div className="Footer_content">
        <div className="Footer_logoText">
          <div className="Footer_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Footer_text">
            <p>{mainInfo.footerText}</p>
          </div>
          <div className="Footer_socials">
            <Socials />
          </div>
        </div>

        <div className="Footer_column Footer_nav">
          <h4 className="title">Посилання</h4>
          <ul>
            <li>
              <Link to={'/'}>
                <span>Головна</span>
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                <span>Про нас</span>
              </Link>
            </li>
            <li>
              <Link to={'/news'}>
                <span>Новини</span>
              </Link>
            </li>
            <li>
              <Link to={'/events'}>
                <span>Події</span>
              </Link>
            </li>
            <li>
              <Link to={'/contacts'}>
                <span>Контакти</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="Footer_column Footer_contacts">
          <h4 className="title">Зв'яжіться з нами</h4>
          <ul>
            <li>
              <a className="Footer_contact" href={"tel:" + getClearPhone(mainInfo.phone)}>
                <div className="icon">
                  <svg viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.73239 19.1679C4.2688 20.2551 2.80431 21.3425 1.34082 22.4298C0.710853 22.8974 0.518651 23.738 0.883124 24.4333C2.73418 27.9666 6.97469 29.3995 10.5394 27.5363C17.8387 23.7208 22.7711 17.2822 24.5551 9.24126C25.4262 5.31447 22.9388 1.59306 19.0454 0.725652C18.2793 0.554709 17.5176 0.959099 17.2292 1.68924C16.5614 3.38527 15.8926 5.08236 15.2239 6.7784C14.9105 7.57406 15.1238 8.44098 15.7709 8.99926C16.6185 9.73168 17.466 10.4639 18.3135 11.1955C17.2467 15.2386 14.4275 18.9186 10.8015 21.001C9.87454 20.3732 8.94693 19.7455 8.01911 19.1178C7.31071 18.6384 6.41889 18.6581 5.73244 19.1678L5.73239 19.1679Z" fill="white" />
                  </svg>
                </div>
                <span>{mainInfo.phone}</span>
              </a>
            </li>
            <li>
              <a className="Footer_contact" href={"mailto:" + mainInfo.email}>
                <div className="icon">
                  <svg viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5941 3.68843L14.5944 10.6886L0.594635 3.68843V0.188477H28.5941V3.68843Z" fill="white" />
                    <path d="M0.594543 5.43872V21.1883H28.594V5.43872L14.5943 12.4388L0.594543 5.43872Z" fill="white" />
                  </svg>
                </div>
                <span>{mainInfo.email}</span>
              </a>
            </li>
            {mainInfo.address.map((address) => {
              return (
                <li key={address} className="Footer_contact">
                  <div className="icon">
                    <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5962 0.188477C5.24361 0.188477 0.0942993 5.31145 0.0942993 11.6296C0.0942993 14.3074 1.00377 16.3742 3.10059 19.499C5.19571 22.6237 11.5962 31.1885 11.5962 31.1885C11.5962 31.1885 17.9968 22.6257 20.088 19.499C22.1866 16.3759 23.0943 14.3074 23.0943 11.6296C23.0945 5.31145 17.9452 0.188477 11.5962 0.188477ZM11.5962 15.9554C9.19495 15.9554 7.24842 14.0188 7.24842 11.6298C7.24842 9.24434 9.19495 7.3043 11.5962 7.3043C13.9974 7.3043 15.944 9.24427 15.944 11.6298C15.944 14.0188 13.9974 15.9554 11.5962 15.9554Z" fill="white" />
                    </svg>
                  </div>
                  <span>{address}</span>
                </li>
              )
            })}
            
          </ul>
        </div>

        <div className="Footer_column">
          <h4 className="title">Трендові новини</h4>
          <div className="Footer_column_newsW">
            {getLatestNews(news, 'newDate').slice(0, 2).map((item) => {
              return (
                <div key={item.id} className="small_newCard">
                  <div className="img">
                    <img src={'../img/' + item.img} alt="" />
                  </div>
                  <div className="content">
                    <h5 className="title">{getCuttedString(item.title, 42)}</h5>
                    <Link to={'/news/' + item.id} className="button">
                      <Btn2 text={'Read More'} func={() => { }} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="Footer_copyright">
        © 2022 EAF is Powered  by 
        <a href="https://wox.academy/it-kompaniya/">WOX-Studio</a>
      </div>



      <script src="https://donorbox.org/widget.js" paypalexpress="false"></script>
    </footer>
  )
}