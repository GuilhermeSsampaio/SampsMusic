import Menu from '../components/Header'
import Card from '../components/Cards'
import Footer from '../components/Footer'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <Menu/>
        <section>
            <div id="card">
              <p>Conheça alguns de nossos       cursos:</p>
                 <Card></Card> 
            </div>
        </section>
      <footer>
          <Footer></Footer>
      </footer>
    </div>
  )
}
