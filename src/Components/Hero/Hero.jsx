import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section>
      <Navbar />
      <div className={styles.description}>
        <h1>Summarize Articles with</h1>
        <h2>OpenAI GPT-4</h2>
        <div className={styles.details}>
          <h4>Simplify your reading with Summary, an open-source article summarizer that transforms lengthy articles into clear concise summaries</h4>
        </div>
      </div>
    </section>
  )
}

export default Hero