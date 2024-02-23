function NavItem({ title, status = '' }) {
  return (
    <li class="navbar-item">
      <button class={`navbar-link ${status}`} data-nav-link="">
        {title}
      </button>
    </li>
  )
}
function NavBar() {
  return (
    <nav class="navbar">
      <ul class="navbar-list">
        <NavItem title="About" status="active" />
        <NavItem title="Résumé" />
        <NavItem title="Skills" />
        <NavItem title="Achievements" />
        <NavItem title="Credit" />
      </ul>
    </nav>
  )
}

export default NavBar
