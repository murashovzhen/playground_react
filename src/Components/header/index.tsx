
import { RoutesConstants } from '../../Constants/RouteConstants'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../Store'
import styles from './styles.module.scss'
import { Button, ButtonGroup, Offcanvas, ToggleButton, Form } from 'react-bootstrap'
import { useState } from 'react'



const Header = () => {

    const authentificationState = useSelector((state: AppState) => state.authentication)

    const [showFilters, setShowFilters] = useState(false);

    const handleCloseFilters = () => setShowFilters(false);
    const handleShowFilters = () => setShowFilters(true);

    const handleToggleTheme = () => {
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
        }
    };

    return (
<>
        <nav className={[styles.header, "navbar  flex-grow-1 text-right position-fixed start-0 end-0"].join(' ')}>
        <Button variant='dark' className="shadow" onClick={handleToggleTheme}>Toggle theme</Button>
    
     <Button variant="primary" onClick={handleShowFilters}>Launch</Button>
            {!authentificationState.isAuthenticated &&
                <Link to={RoutesConstants.SignIn} className="btn btn-primary float-end ms-auto flex-nowrap"> Sign In</Link>

            }
            {authentificationState.isAuthenticated &&
                <span className="float-end ms-auto flex-nowrap">
                    {authentificationState.user?.username ?? authentificationState.user?.email}
                </span>
            }

        </nav>
        <Offcanvas show={showFilters} onHide={handleCloseFilters} placement="end" >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <Form>
      <Form.Group className="mb-3" controlId="sortby">
        <Form.Label>Sort by</Form.Label>
        <ButtonGroup className="mb-2">
        <ToggleButton value="rating" key="rating" id="radio-rating" type="radio"  variant="secondary"  name="sortby" >
            Rating
          </ToggleButton>
          <ToggleButton value="rating" key="year" id="radio-year" type="radio"  variant="secondary"  name="sortby" >
          Year
          </ToggleButton>
      </ButtonGroup>
       
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Full or short movie name</Form.Label>
        <Form.Control placeholder="Your text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Genre</Form.Label>
        <Form.Select >
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Show results
      </Button>
    </Form>
       
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}

export default Header
