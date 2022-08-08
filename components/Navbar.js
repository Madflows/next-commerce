import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <h1>Company</h1>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        <button className='btn'>View Cart</button>
    </nav>
  )
}

