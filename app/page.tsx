'use client'

import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Pain from './components/Pain'
import Included from './components/Included'
import SampleWork from './components/SampleWork'
import Packages from './components/Packages'
import Handled from './components/Handled'
import Process from './components/Process'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Pain />
      <Included />
      <SampleWork />
      <Packages />
      <Handled />
      <Process />
      <ContactForm />
      <Footer />
    </>
  )
}