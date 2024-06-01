// types.ts
export interface Project {
    image: string;
    nameuz: string;
    certificate: string;
    siteLink : string;
    instagram: string;
    facebook : string;
    telegram: string
}

export interface ApiResponse {
    projects: Project[];
}

export interface Member{
    title: string;
    image: string;
}

export interface MembersResponse {
    members : Member[]
}

export interface Client {
    _id?: string;
    title?: string;
    video: string;
    __v?: number
}

export interface ClientsResponse {
    clients: Client[];
}
 
export interface ProjectLogos {
    image: string;
    nameuz: string;
    certificate: string;
    siteLink : string;
    instagram: string;
    facebook : string;
    telegram: string
}

export interface ProjectLogoResponse {
    image: string;
    nameuz: string;
    certificate: string;
    siteLink : string;
    instagram: string;
    facebook : string;
    telegram: string

    
}