
import { RoutesConstants } from '../../Constants/RouteConstants'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../Store'
import styles from './styles.module.scss'
import { Button, ButtonGroup, Offcanvas, ToggleButton, Form, CloseButton, ToggleButtonGroup } from 'react-bootstrap'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { loadDictionaries, setFilter } from '../../Store/film/actions'
import { AllFields, MovieFields } from '@openmoviedb/kinopoiskdev_client'



const Header = () => {
   const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
    dispatch(loadDictionaries());
   }, [])

   
    const authentificationState = useSelector((state: AppState) => state.authentication)
    const filtersState = useSelector((state: AppState) => state.films)
    const searchValue = useSelector((state: AppState) => filtersState.filter.searchterm ?? "")
    const genres = useSelector((state: AppState) => filtersState.genres ?? "")
    const contries = useSelector((state: AppState) => filtersState.contries ?? "")
   


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
  const handleSortValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value){ 
       
        dispatch(setFilter({...filtersState.filter, sortingField : e.target.value as AllFields<MovieFields>}))
        
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
        <ToggleButtonGroup  type="radio" name="options" defaultValue={filtersState.filter.sortingField} >
        <ToggleButton id="tbg-radio-1" value="rating.kp" variant="secondary" onChange={handleSortValueChange}>
        Rating
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value="year" variant="secondary" onChange={handleSortValueChange}>
        Year
        </ToggleButton>
      </ToggleButtonGroup>
       
       
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Full or short movie name</Form.Label>
        <Form.Control placeholder="Your text" onChange={handleSearchValueChange} value={searchValue} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Genre</Form.Label>
        <Form.Select size="lg" value={filtersState.filter.genres} multiple>
        <option  disabled={true} ></option>
        {genres.map((genre, idx) => (
           <option value={genre.name} >{genre.name}</option>
          
        ))}
         
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


