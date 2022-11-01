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
              <p>Somos uma empresa dedicada ao ensino de música</p>
              <p>Conheça alguns de nossos cursos:</p>
              <a href="/contato">Contato</a>
              <a href="/cursos">Cursos</a>
                 <Card></Card> 
            </div>
        </section>
      <footer>
          <Footer></Footer>
            <img src="/favicon.ico"></img>
      </footer>
    </div>
  )
}
