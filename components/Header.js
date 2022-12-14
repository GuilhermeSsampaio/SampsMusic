
const Menu = () => (
    <div>
        <header class="p-3 text-bg-dark">
          <p>SampaioMusic</p>
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class=" links-menu nav-link px-2 text-secondary">Home</a></li>
          <li><a href="../pages/cursos" class=" links-menu nav-link px-2 text-white">Cursos</a></li>
          <li><a href="./pages/cursos.js" class=" links-menu nav-link px-2 text-white">Dê aula</a></li>
          <li><a href="/contato" class=" links-menu nav-link px-2 text-white">Contato</a></li>
          <li><a href="#" class=" links-menu nav-link px-2 text-white">Sobre</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Cadastrar</button>
        </div>
      </div>
    </div>
  </header>
    </div>
);

export default Menu;