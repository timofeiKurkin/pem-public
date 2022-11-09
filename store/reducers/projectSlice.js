// const SET_PROJECT = "SET_PROJECT"
// const SET_IS_FETCHING = "SET_IS_FETCHING"
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
//
// const defaultState = {
//     items: [],
//     isFetching: true,
//     currentPage: 1,
//     perPage: 10,
//     totalCount: 0
// }
//
// export default function projectReducer(state = defaultState, action) {
//     switch (action.type) {
//         case SET_PROJECT:
//             return {
//                 ...state,
//                 items: action.payload.items,
//                 totalCount: action.payload.total_count,
//                 isFetching: false
//             }
//     case SET_IS_FETCHING :
//             return {
//                 ...state,
//                 isFetching: action.payload
//             }
//     case SET_CURRENT_PAGE:
//         return {
//             ...state,
//             currentPage: action.payload
//         }
//     default:
//         return state
//     }
// }
//
// export const setProj = (proj) => ({type: SET_PROJECT, payload: proj})
// export const setFetching = (bool) ({type: SET_IS_FETCHING, payload: bool})
// export const setCurrentPage = (page) ({type: SET_CURRENT_PAGE, payload: page})

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    project: [],
    isLoading: false,
    error: '',
    page: 1,
    limit: 3
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProject(state, action) {
          state.project = action.payload
        },
        setPage(state, action) {
            state.page = action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const {setPage, setProject, setLoading} = projectSlice.actions
export default projectSlice.reducer