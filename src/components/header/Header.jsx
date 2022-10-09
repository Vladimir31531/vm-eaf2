import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MuiDrop from '../ui/mui_drop/MuiDrop'
import Btn1 from '../ui/btn1/Btn1'
import "./header.scss"

import Logo from "../../assets/img/Logo.svg"
import { useDispatch, useSelector } from 'react-redux'
import { setglobalSearchQuery, setSelectedNewsCategs } from '../../redux_store/globalReducer'
import { getClearPhone } from '../../functions/helpers'
import Socials from '../ui/socials/Socials'

export default function Header({ setselectedEvents }) {

  let causesCategs = useSelector((state) => state.globalReducer.causesCategories)
  // let selectedCausesCategs = useSelector((state) => state.globalReducer.selectedCausesCategs)
  let mainInfo = useSelector((state) => state.globalReducer.mainInfo)
  let globalSearchQuery = useSelector((state) => state.globalReducer.globalSearchQuery)

  let dispatch = useDispatch()

  let [openNav, setopenNav] = useState(false);

  let [showSearchForm, setshowSearchForm] = useState(false)

  let handleSearchForm = (e) => {
    e.preventDefault()
    dispatch(setglobalSearchQuery(e.target[0].value))
  }

  let navigate = useNavigate()
  useEffect(() => {
    if (globalSearchQuery) {
      return navigate("/search")
    }
  }, [globalSearchQuery]);

  return (
    <div className="header">
      <div className="header_top">
        <div className="headerTop_contacts">
          <a href={"tel:" + getClearPhone(mainInfo.phone)}>
            <div className="header_tel_icon">
              <svg viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.61559 0H1.38441C0.621092 0 0 0.613731 0 1.36819V13.6318C0 14.3863 0.621121 15 1.38441 15H7.61559C8.37891 15 9 14.3863 9 13.6318V1.36819C9 0.613703 8.37899 0 7.61559 0ZM8.2017 13.6317C8.2017 13.951 7.93879 14.2111 7.6157 14.2111H1.38453C1.06144 14.2111 0.798527 13.9511 0.798527 13.6317V12.2366H8.20176L8.2017 13.6317ZM8.2017 11.4478H0.79847V2.88106H8.2017V11.4478ZM8.2017 2.09212H0.79847V1.36814C0.79847 1.04884 1.06138 0.788776 1.38447 0.788776H7.61565C7.93873 0.788776 8.20164 1.04872 8.20164 1.36814L8.2017 2.09212Z" fill="#cc9955" />
              </svg>
            </div>
            <span>{mainInfo.phone}</span>
          </a>
          <a href={"mailto:" + mainInfo.email}>
            <div className="header_tel_icon">
              <svg viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.01207 0C0.460272 0 0 0.453641 0 1.00529V11.9426C0 12.4943 0.460272 12.9547 1.01207 12.9547H17.9879C18.5397 12.9547 19 12.4943 19 11.9426V1.00529C19 0.453602 18.5397 0 17.9879 0H1.01207ZM1.65305 0.863559H17.3469L9.50019 6.98342L1.65305 0.863559ZM0.863559 1.33586L6.96993 6.09935L0.863559 11.531V1.33586ZM18.1363 1.33586V11.531L12.0299 6.09935L18.1363 1.33586ZM7.6647 6.63913L9.23686 7.86719C9.39198 7.98631 9.60795 7.98631 9.76306 7.86719L11.3352 6.63913L17.4682 12.0908H1.53141L7.6647 6.63913Z" fill="#cc9955" />
              </svg>
            </div>
            <span>{mainInfo.email}</span>
          </a>
        </div>
        <div className="headerTop_socials">
          <Socials/>
        </div>
      </div>
      <div className="header_nav_w">
        <Link to={'/'}>
          <div className="header_logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        <nav className={"nav " + ((openNav) && "openNav")}>
          <ul>
            <li onClick={() => setopenNav(false)}>
              <Link to={'/'}><span>Головна</span></Link>
            </li>
            <li onClick={() => setopenNav(false)}>
              <Link to={'/about'}><span>Про нас</span></Link>
            </li>
            <li>
              <MuiDrop
                DropBtn={
                  <span className="label">
                    Події 
                    <span className="arrow">
                      <svg viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </span>
                }
                DropItems={
                  <div className="header_dropdown">
                    <Link to={'/events'}>
                      <span
                        onClick={() => setselectedEvents('')}
                      >Всі</span>
                    </Link>
                    <Link to={'/events'}>
                      <span
                        onClick={() => setselectedEvents('future')}
                      >Майбутні</span>
                    </Link>
                    <Link to={'/events'}>
                      <span
                        onClick={() => setselectedEvents('past')}
                      >Минулі</span>
                    </Link>
                  </div>
                }
              />
            </li>
            <li>
              <MuiDrop
                DropBtn={
                  <span className="label">
                    Програми
                    <span className="arrow">
                      <svg viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </span>
                }
                DropItems={
                  <div className="header_dropdown">
                    <Link to={'/causes'}>
                      <span>Всі</span>
                    </Link>
                    {Object.entries(causesCategs).map((categ, i) => {
                      return (
                        <Link key={i} to={'/causes'}>
                          <span onClick={() => dispatch(setSelectedNewsCategs(categ[1].slug))}>{categ[1].title}</span>
                        </Link>
                      )
                    })}
                  </div>
                }
              />
            </li>
            <li onClick={() => setopenNav(false)}>
              <Link to={'/news'}><span>Новини</span></Link>
            </li>
            <li onClick={() => setopenNav(false)}>
              <Link to={'/contacts'}><span>Контакти</span></Link>
            </li>
          </ul>
        </nav>
        <div className="headerNav_donate">
          <div className="search_w">
            <button className="search_btn" onClick={() => setshowSearchForm(!showSearchForm)}>
              <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="8.5" stroke="#323232" strokeWidth="2" />
                <line x1="15.7071" y1="16.2929" x2="23.7071" y2="24.2929" stroke="#323232" strokeWidth="2" />
              </svg>
            </button>
            <div className={"header_searchForm " + ((showSearchForm) && "header_searchForm_show")}>
              <form onSubmit={(e) => handleSearchForm(e)}>
                <input type="text" placeholder="Введіть для пошуку ..." />
                <button className="search_btn">
                  <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.5" cy="9.5" r="8.5" stroke="#323232" strokeWidth="2" />
                    <line x1="15.7071" y1="16.2929" x2="23.7071" y2="24.2929" stroke="#323232" strokeWidth="2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <Link to={'/donate'}>
            <Btn1
              text={'ПІДТРИМАТИ НАС'}
              func={() => { }}
            />
          </Link>
        </div>
        <div
          className={
            "burger " + (openNav ? "burger_close" : "")
          }
          onClick={() => setopenNav(!openNav)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}