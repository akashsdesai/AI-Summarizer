import {React, useState, useEffect} from 'react'
import styles from './Demo.module.css'
import link from '../../Assets/link.ico'
import Axios from 'axios'


function Demo() {
const [article , setArticle]=useState({
  url:'',
  summary:'Enter URL in the Search Box for the Summary'
})

const [active, setActive]=useState(false)

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: article.url,
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': '370249de1bmshe687695a3dfd6c2p1f7e20jsn93035124ba1a',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};


  async function handleSubmit(e){ 
    setArticle({
      ...article,
      summary:'Loading... Please wait'
    })
    e.preventDefault() 

    try {
      const response = await Axios.request(options);
      setActive(true)
      setArticle({
        ...article,
        summary:response.data.summary
      })
    } catch (error) {
      alert('Entered URL is not a article')
      setActive(false)
      setArticle({
        ...article,
        summary:'Enter a valid URL'
      })
      console.error(error);
    }
  }

  function handleChange(e){
    setArticle({
      ...article,
      url:e.target.value
    }
    )
  }

  function reset(){
    setActive(false)
    setArticle({
      url:'',
      summary:'Enter URL in the Search Box for the Summary'
    })
  }
  return (
    <section className={styles.demo}>
      <div className={styles.search}>
        <form onSubmit={handleSubmit} className={styles.input}>
          <img src={link} />
          <input name='url' value={article.url} required onChange={handleChange} type='url' placeholder='Enter a URL' />
          <button>⏎</button>
        </form>
        {active && <button onClick={reset} className={styles.reset}>Reset</button>}
      </div>
      <div className={styles.result}>
        {active && <h2>Result</h2>}
        <p>{article.summary}</p>
      </div>
    </section>
  )
}

export default Demo