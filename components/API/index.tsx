// ApiComponent.ts
import axios from 'axios';
import {  ProjectLogoResponse , MembersResponse } from '../../types'; // O'zgartirish kerak


const apiUrl = 'http://localhost:5000'; // BaseUrl
const projectLogo = '/projectlogos'; // Backend projects endPoint
const members = "/members"
const clientsEndpoint = '/clients'; // Backend clients endPoint
const mottoEndpoint = '/motto'; // Backend motto endpoint
// const projectsLogo = '/projectlogos' // Backend logo endpoint


const projectsLogoAPI = async (): Promise<ProjectLogoResponse> => {
  try {
    const response = await axios.get(`${apiUrl}${projectLogo}`);
    const data = response.data as ProjectLogoResponse;
    // console.log(data); // Get Clients info
    return data;
  } catch (error) {
    console.error(`Error fetching clients data:`, error);
    throw error;
  }
};


const membersApi = async (): Promise<MembersResponse> => {
  try {
    const response = await axios.get(`${apiUrl}${members}`);
    const data = response.data as MembersResponse;
    // console.log(data); // Get Clients info
    return data;
  } catch (error) {
    console.error(`Error fetching clients data:`, error);
    throw error;
  }
};


export {  projectsLogoAPI , membersApi};