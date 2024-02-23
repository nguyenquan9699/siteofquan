function NavItem({title, status = ''}) {
    return (
        <li class="navbar-item">
            <button class={`navbar-link ${status}`} data-nav-link="">{title}</button>
        </li>
    );
}
function NavBar() {
    return (<nav class="navbar">

    <ul class="navbar-list">

    <NavItem title="About"/>
    <NavItem title="Résumé" />
    <NavItem title="Skills" />
    <NavItem title="Achievements" />
    <NavItem title="Contact" />
    
    </ul>
</nav>);
}

export default NavBar;