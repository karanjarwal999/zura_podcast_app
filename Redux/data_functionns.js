import axios from 'axios';
import { ADD_POJECTS, UPDATE_POJECT, UPDATE_SINGLE_PROJECT } from './actionTypes';


export const AddProject = (data,showToast) => async (dispatch) => {
    try {
        let res = axios.post('/api/project', { ...data })
        let temp = await res
        showToast('project Added successfully')
        dispatch({type:UPDATE_POJECT,payload:{...data,podcast:[]}})
    } catch (error) {
        showToast(error.message,"error")
    }
}
export const FetchAllProject= async (dispatch) => {
    try {
        let res = axios.get('/api/project')
        let temp = await res
        dispatch({type:ADD_POJECTS,payload:temp.data.data})
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchSingleProject=(id)=> async (dispatch) => {

    try {
        let res = axios.post('/api/singleProject',{"projectId":id})
        let temp = await res
        dispatch({type:UPDATE_SINGLE_PROJECT,payload:temp.data.data})
    } catch (error) {
        console.log(error.message)
    }
}

export const AddPodcastFunc = (ProjectId,data,showToast) => async (dispatch) => {
    try {
        let res = axios.post('/api/podcast', {projectId:ProjectId,title:data.name,description:data.description})
        let temp = await res
        showToast('Podcast Added successfully')
        dispatch(fetchSingleProject(ProjectId))
    } catch (error) {
        showToast(error.message,"error")
    }
}

export const DeletePodcast = (projectId,podcastId) => async (dispatch) => {
    console.log(projectId,podcastId)
    try {
        let res = axios.put('/api/podcast', {projectId,podcastId})
        let temp = await res
        dispatch(fetchSingleProject(projectId))
    } catch (error) {
        showToast(error.message,"error")
    }
}

export const updatePodcast=(data,showToast)=> async (dispatch) => {

    try {
        let res = axios.patch('/api/podcast',{podcastId:data.id,Data:data})
        let temp = await res
        showToast('podcast updated successfully')
    } catch (error) {
        console.log(error.message)
    }
}