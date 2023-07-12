
import { Button } from 'react-bootstrap'
import styles from './styles.module.scss'

const SideBar = () => {

   
  document.documentElement.setAttribute('data-bs-theme','dark')

  const handleToggleTheme = () => {
      if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
          document.documentElement.setAttribute('data-bs-theme','light')
      }
      else {
          document.documentElement.setAttribute('data-bs-theme','dark')
      }
  };

    

    return (
      <div className={[styles.sideBar, "d-flex flex-column flex-shrink-0 p-3 text-white position-fixed"].join(' ')} >
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">PIXEMA</span>
      </a>
     
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
        <Button variant='dark' className="shadow" onClick={handleToggleTheme}>Toggle theme</Button>
        </li>
        </ul>
    </div>
    )


  //  <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn btn-primary"
 // aria-controls="#sidenav-1" aria-haspopup="true">
 // <i class="fas fa-bars"></i>
//</button>
}

export default SideBar
