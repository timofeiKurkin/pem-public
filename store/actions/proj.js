import {setFetching, setProj} from "../reducers/projectSlice";
import projectInfo from '../../data/projectsInfo.json'

export const getProj = (currentPage, perPage) => {
    return async (dispatch)
    {
        dispatch(setFetching(true))
        const response = projectInfo.main
        dispatch(setProj(response.data))
    }
//    try {
//
//    } catch (e) {
//
//    }
}