import React from 'react'
import HeaderComponent from '../HeaderComponent'
import MainPrincipalComponent from './MainPrincipalComponent'
import FooterComponent from '../FooterComponent'

export default function PrincipalComponent() {
  return (
    <>
        <HeaderComponent />
        <br />
        <MainPrincipalComponent />
        <br />
        <FooterComponent />
    </>
  )
}
