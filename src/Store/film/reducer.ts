import { AllFields, MovieDocsResponseDtoV13, MovieFields } from "@openmoviedb/kinopoiskdev_client"
import { FilmListConstants } from "../../Constants/FilmListConstants"

export const FilmActionName = {
    LOAD_FILMS: "LOAD_FILMS",
    SET_SEARCH_VALUE: "SET_SEARCH_VALUE",
    CLEAR_SEARCH: "CLEAR_SEARCH"
} as const



export type FilmsSearchFilterType = {
    filmListType: string
    page: number
    limit: number
    year: [number, number] | undefined
    rating: [number, number] | undefined
    country: string | undefined
    genres: string[] | undefined
    searchterm: string | undefined
    sortingField: AllFields<MovieFields> | undefined

}


export type FilmsPageType = {
    filter: FilmsSearchFilterType
    items: MovieDocsResponseDtoV13
}


const filtersInitialValue: FilmsSearchFilterType = {
    page: 0,
    limit: 10,
    country: undefined,
    filmListType: FilmListConstants.Default,
    genres: undefined,
    rating: undefined,
    searchterm: undefined,
    sortingField: undefined,
    year: undefined

}

const initialValue: FilmsPageType = {
    filter: filtersInitialValue,
    items: {} as MovieDocsResponseDtoV13
}

export type FilmActionType = {
    type: string;
    payload?: any
}

export const FilmsReducer = (state: FilmsPageType = initialValue, action: FilmActionType): FilmsPageType => {
    switch (action.type) {
        case FilmActionName.SET_SEARCH_VALUE:
            return {
                ...state,
                filter: action.payload as FilmsSearchFilterType
            }
        case FilmActionName.LOAD_FILMS:
            return {
                ...state,
                items: (action.payload as MovieDocsResponseDtoV13),
            }
        case FilmActionName.CLEAR_SEARCH:
            return {
                ...initialValue
            }
        default:
            return state
    }
}