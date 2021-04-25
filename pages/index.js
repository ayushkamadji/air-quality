import { useState } from "react"
import Head from "next/head"
import "bootstrap/dist/css/bootstrap.min.css"
import parser from "../utils/data/parser"
import dataJson from "../public/data/en.json"
import dataJsonIn from "../public/data/in.json"

function EmptyOrAQIDisplay({city}) {
  const style = {
    height: "72px",
    margin: "0 auto"
  }
  let render;
  if (typeof city.name === "undefined") {
    render = <EmptyDisplay style={style}/>
  } else {
    render = <AQIDisplay city={city} style={style}/>
  }
  return render;
}

function EmptyDisplay({style}) {
  let styleBg = {...style, background: "#ddd"}
  return (
    <div className="container px-3">
      <div className="row">
        <div className="col-5 rounded-3" style={styleBg}></div>
        <div className="col-5 rounded-3" style={styleBg}></div>
      </div>
    </div>
  )
}

function AQIDisplay({city, style}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 border-end" style={style}>
          <div className="text-center">
            <div className="h3 mt-2 mb-0">{city.aqi}</div>
            <div className="p-1 text-danger">{city.aqi_unit}</div>
          </div>
        </div>
        <div className="col-5" style={style}>
          <div className="text-center">
            <div className="h3 mt-3">{city.cigg}</div>
          </div>
        </div>
        <div className="col-1 px-0" style={style}>
          <img className="img-fluid mh-100" src="img/ciggrette_icon.png"></img>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const articleEn = parser.parse(dataJson)
  const articleIn = parser.parse(dataJsonIn)
  const [selectedCity, setSelectedCity] = useState({})
  const [article, setArticle] = useState(articleEn)

  const onChangeSelectCity = (e) => {
    e.preventDefault()
    setSelectedCity(article.data[e.target.value])
  }

  const onChangeLanguage = (e) => {
    e.preventDefault()
    console.log(e)
    let nextAr = e.target.value === "hindi" ? articleIn : articleEn
    setArticle(nextAr)
  }

  const jumbotronStyle = {
    background: `url("${article.image}")`,
    backgroundSize: "cover",
    minHeight: "50vw"
  }
  return (
    <div className="container-fluid">
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="row">
        <div className="container-fluid">
          <nav id="mainNav" className="navbar navbar-light">
            <a className="navbar-brand" href="#">BBC Test</a>
              <div className="d-flex flex-column align-items-end" id="navbarScroll">
                <a className="nav-link" href="http://github.com/ayushkamadji" aria-disabled="true">
                  <img
                    className="rounded-circle img-thumbnail mh-25 p-0"
                    src="https://avatars.githubusercontent.com/u/8255357?s=30&v=4"></img>
                  <span> Ayushka</span>
                </a>
              </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <main className="px-0">
          <div className="container-fluid px-0 mb-5">
            <div className="d-flex flex-row align-items-end bg-light h-25" style={jumbotronStyle}>
              <div className="container-fluid py-6">
                <h5 className="pb-3 px-md-3 px-lg-5 display-5 fst-italic">{article.title}</h5>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="row">
              <div className="col-md-12 col-lg-7 me-lg-3">
                <div className="mb-4">
                  <div className="h6 fst-italic mb-0">{article.author}</div>
                  <div className="text-muted fw-light">{article.date}</div>
                </div>
                <hr />
                <p>{article.paragraphs[1]}</p>
                <p>{article.paragraphs[3]}</p>
                <p>{article.paragraphs[2]}</p>
                <p>{article.paragraphs[6]}</p>
                <p>{article.paragraphs[8]}</p>
              </div>
              <div className="col-md-12 col-lg-4 ms-lg-3">
                <div className="card rounded-3">
                  <div className="card-header">
                    <h6 className="card-title">
                      {article.paragraphs[0]}
                    </h6>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                      <label htmlFor="select-city" className="form-label" style={{fontSize: "13px"}}>
                        {article.paragraphs[4]}
                      </label>
                      <select
                        onChange={onChangeSelectCity}
                        className="form-select"
                        aria-label="Select City"
                        defaultValue="">
                        <option value="" disabled></option>
                        {article.data.map( (city, index) => {
                          return <option key={city.name} value={index}>{city.name}</option>
                        })}
                      </select>
                      </div>
                    </form>
                    <EmptyOrAQIDisplay city={selectedCity} />
                  </div>
                  <div className="card-footer" style={{fontSize: "10px"}}>
                    <p className="fw-bold">{article.paragraphs[5]}</p>
                    <p>{article.paragraphs[9]}</p>
                    <p>{article.paragraphs[7]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="row">
        <footer className="bg-dark">
          <button
            onClick={onChangeLanguage}
            value="english"
            className="btn d-inline link-btn link-light">English</button>
          <span className="text-light">|</span>
          <button
            onClick={onChangeLanguage}
            value="hindi"
            className="btn link-btn link-light">Hindi</button>
        </footer>
      </div>
    </div>
  )
}
