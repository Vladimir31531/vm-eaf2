import React, { useState } from 'react';
import './App.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Events from './pages/events/Events';
import SingleEvent from './pages/singleEvent/SingleEvent';
import ScrollToTop from './components/ui/ScrollToTop';
import News from './pages/news/News';
import SingleNew from './pages/singleNew/SingleNew';
import Causes from './pages/causes/Causes';
import CausesCard from './components/CausesCard/CausesCard';
import SingleCause from './pages/singleCause/SingleCause';
import Contacts from './pages/contacts/Contacts';
import Donate from './pages/donate/Donate';
import Search from './pages/search/Search';
import Page404 from './pages/page404/Page404';

function App() {

  let [searchQuery, setsearchQuery] = useState('')

  let [selectedEvents, setselectedEvents] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>

        <Header setselectedEvents={setselectedEvents} />

        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/events'} element={<Events selectedEvents={selectedEvents} />}/>
          <Route path={'/events/:id'} element={<SingleEvent/>}/>
          <Route path={'/news'} element={<News searchQuery={searchQuery} setsearchQuery={setsearchQuery} />}/>
          <Route path={'/news/:id'} element={<SingleNew setsearchQuery={setsearchQuery} />}/>
          <Route path={'/causes'} element={<Causes searchQuery={searchQuery} setsearchQuery={setsearchQuery} />}/>
          <Route path={'/causes/:id'} element={<SingleCause setsearchQuery={setsearchQuery} />}/>
          <Route path={'/contacts'} element={<Contacts/>}/>
          <Route path={'/donate'} element={<Donate/>}/>
          <Route path={'/search'} element={<Search/>}/>
          <Route path={'*'} element={<Page404/>}/>
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;