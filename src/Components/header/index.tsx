
import { RoutesConstants } from '../../Constants/RouteConstants'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../Store'
import styles from './styles.module.scss'
import { Button, ButtonGroup, Offcanvas, ToggleButton, Form, CloseButton } from 'react-bootstrap'
import { ChangeEvent, useCallback, useState } from 'react'
import { setFilter } from '../../Store/film/actions'



const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const authentificationState = useSelector((state: AppState) => state.authentication)
    const filtersState = useSelector((state: AppState) => state.films)
    const searchValue = useSelector((state: AppState) => filtersState.filter.searchterm ?? "")

    const [showFilters, setShowFilters] = useState(false);
    

    const handleCloseFilters = () => setShowFilters(false);
    const handleShowFilters = () => setShowFilters(true);

    const handleClearButtonClick = () => 
    {
      handleCloseFilters();
    };

    const handleSearchValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      if(e.target.value){ 
         
          dispatch(setFilter({...filtersState.filter, searchterm : e.target.value}))
          
      }       
  }, [])


    

    return (
    <>
    
        <nav className={[styles.header, "navbar text-right fixed-top "].join(' ')}>
         <Form className={[styles.search, "flex-grow-1"].join(' ')}>
         <Form.Control type="text" placeholder="Фильмы и сериалы" onChange={handleSearchValueChange} onClick={handleCloseFilters} value={searchValue} />
         {searchValue ? 
              (<CloseButton  className={styles.clear_button}  onClick={handleClearButtonClick}> </CloseButton>) : 
              ( <Button className={styles.filter_button}  onClick={handleShowFilters} >
                 <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  > <path  d="M5 6L19 6M10 12H19M14 18H19" stroke="#AFB2B6"
              strokeWidth="2" strokeLinecap="round" /> </svg>
                </Button>)}
         </Form>
         <div className=''>
         {!authentificationState.isAuthenticated &&
                <Link to={RoutesConstants.SignIn} className="btn btn-primary"> Sign In</Link>
                

            }
            {authentificationState.isAuthenticated &&
                <span className="">
                    {authentificationState.user?.username ?? authentificationState.user?.email}
                </span>
            }
         </div>
           

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
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}

