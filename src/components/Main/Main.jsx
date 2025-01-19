import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Contacts from '../../Pages/Contacts/Contacts';
import Gallery from '../../Pages/Gallery/Gallery';
import NotFound from '../../Pages/NotFound/NotFound';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Main;