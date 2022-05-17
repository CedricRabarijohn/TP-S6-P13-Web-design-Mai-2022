import React from 'react'
import Link from 'next/Link'
type Props = {}
//https://www.amnesty.org/fr/what-we-do/climate-change/?utm_source=google&utm_medium=cpc&gclid=CjwKCAjwj42UBhAAEiwACIhADl-Zf1vg9RGoFzZdKIeRoGPgfGO2O8RF4LnxTn9EzpH1X_cikMNPEBoC9HwQAvD_BwE
const HomePage = (props: Props) => {
  return (
    <div className='homePage'>
      <h1>
        Rechauffement Climatiqueee
      </h1>
      <div className="homePageContent">
        <div className="defintionContainer">
          <h2>Definition</h2>
          <div className='definition'>
            De façon plus précise, lorsque l’on parle du réchauffement climatique,
            on parle de l’augmentation des températures liées à l’activité industrielle
            et notamment à l’effet de serre : on parle donc parfois du réchauffement
            climatique dit « d’origine anthropique » (d’origine humaine).
            Il s’agit donc d’une forme dont les causes ne sont pas naturelles mais
            économiques et industrielles.
            De nombreux scientifiques étudient ce phénomène et tentent de comprendre
            comment les activités des sociétés humaines provoque ce réchauffement.
            Ces scientifiques sont regroupés au sein du GIEC
            (Groupe International d’Experts sur le Climat), et ils publient régulièrement
            des rapports étudiant l’évolution du réchauffement climatique.
          </div>
        </div>
        <div className="causesContainer">
          <Link href="/Causes"><a><h2>Causes du rechauffement climatique</h2></a></Link>
          <div className='causes'>
            <div>
              <div className="titre">
                <h3>
                  Combustion de carburants fossiles
                </h3>
              </div>
              <div className="description">
                <h5>
                  L’une des principales causes du changement climatique est de loin notre combustion de carburants fossiles (charbon, gaz et pétrole) qui augmente
                  la concentration de gaz à effet de serre (comme le dioxyde de carbone) dans notre atmosphère.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="consequencesContainer">
          <Link href="/Consequences"><a><h2>Consequences du rechauffement climatique</h2></a></Link>
          <div className="consequences">
            <div>
              <h3>Hausse des températures de 1 °C environ par rapport aux niveaux de l’ère préindustrielle</h3>
            </div>
            <div>
              <h3></h3>
            </div>
            <div>
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage