import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, customHeaderBackground }) {
  return (
    <>
      <Header customBackground={customHeaderBackground} />
      {children}
      <Footer />
    </>
  )
}
