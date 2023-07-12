
import { RoutesConstants } from '../../Constants/RouteConstants'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../Store'
import styles from './styles.module.scss'
import { Button, ButtonGroup, Offcanvas, ToggleButton, Form, CloseButton, ToggleButtonGroup } from 'react-bootstrap'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { loadDictionaries, setFilter } from '../../Store/film/actions'
import { AllFields, MovieFields } from '@openmoviedb/kinopoiskdev_client'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { MultiValue, ActionMeta, InputActionMeta } from 'react-select'
import { FilmsSearchFilterType } from '../../Store/film/reducer'


const Header = () => {
   const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
    dispatch(loadDictionaries());
   }, [])

   
    const authentificationState = useSelector((state: AppState) => state.authentication)
    const filtersState = useSelector((state: AppState) => state.films)
    const [form, setForm] = useState<FilmsSearchFilterType>(filtersState.filter)
   
    const genres = useSelector((state: AppState) => filtersState.genres ?? "")
    const contries = useSelector((state: AppState) => filtersState.contries ?? "")
    const animatedComponents = makeAnimated();


    const [showFilters, setShowFilters] = useState(false);
    

    const handleCloseFilters = () => setShowFilters(false);
    const handleShowFilters = () => setShowFilters(true);

    const handleClearButtonClick = () => 
    {
      handleCloseFilters();
    };

    const handleSearchValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      if(e.target.value){ 
         
        setForm({...form, searchterm : e.target.value})
          
      }       
  }, [])
  const handleSortValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value){ 
      setForm({...form, sortingField : e.target.value as AllFields<MovieFields>})
        
    }       
}, [])

const handleGenresChange = (newValue: MultiValue<string>, actionMeta: ActionMeta<string>) => {
  setForm({...form, genres : newValue.map(x=>x.value)})
       
};
const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  dispatch(setFilter(form))
} 

    return (
    <>
    
        <nav className={[styles.header, "navbar text-right fixed-top "].join(' ')}>
         <Form className={[styles.search, "flex-grow-1"].join(' ')}>
         <Form.Control type="text" placeholder="Фильмы и сериалы" onChange={handleSearchValueChange} onClick={handleCloseFilters} value={filtersState.filter.searchterm } />
         {filtersState.filter.searchterm ? 
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
          <Offcanvas.Title>Фильтры</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="sortby">
        <Form.Label>Сортировка по</Form.Label>
        <ToggleButtonGroup  type="radio" name="options" defaultValue={form.sortingField} >
        <ToggleButton id="tbg-radio-1" value="rating.kp" variant="secondary" onChange={handleSortValueChange}>
        Rating
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value="year" variant="secondary" onChange={handleSortValueChange}>
        Year
        </ToggleButton>
      </ToggleButtonGroup>
       
       
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Фильм ли сериал</Form.Label>
        <Form.Control placeholder="Your text" onChange={handleSearchValueChange} value={form.searchterm } />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Жанр</Form.Label>
        <Select closeMenuOnSelect={false} components={animatedComponents} defaultValue={form.genres}
                onChange={handleGenresChange}
                isMulti={true} options={genres.map((genre, idx) => ({value: genre.name, label: genre.name}))}  />
        
       
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


