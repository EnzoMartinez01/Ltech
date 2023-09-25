import React from 'react';
import HeaderComponent from '../HeaderComponent';
import MainContactComponent from './MainContactComponent';
import FooterComponent from '../FooterComponent';
import ContactCommingSoon from './ContactCommingSoon';

export default function () {
  return (
    <>
        <HeaderComponent />
        <br />
        <ContactCommingSoon />
        {/* <MainContactComponent/> */}
        <br />
        <FooterComponent />
    </>
  )
}
