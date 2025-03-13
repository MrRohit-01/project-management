export interface Admin {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface Customer {
    id: string;
    name: string;
    address: string;
    squareFeet: number;
    contactNumber: string;
    email: string;
    siteLocation: string;
    buildingType: 'Commercial' | 'Residential';
}

export interface Project {
    id: string;
    customerId: string;
    title: string;
    description: string;
    status: string;
    progress: number; // Represented as a percentage
    documents: string[]; // Array of document URLs
    images: string[]; // Array of image URLs
    videos: string[]; // Array of video URLs
}