// types.ts
export interface Project {
    _id?: string;
    title: string;
    description: string;
    image: string;
    __v?: number;
}

export interface ApiResponse {
    projects: Project[];
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
    _id?: string;
    image : string;
    __v?: number
}

export interface ProjectLogoResponse {
    image: string;
    name: string;
    
}