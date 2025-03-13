export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    role?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'client' | 'contractor';
    createdAt: Date;
    updatedAt: Date;
}

