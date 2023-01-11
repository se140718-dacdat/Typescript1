export enum Roles {
    ADMIN = "ADMIN",
    CANDIDATE = "CANDIDATE",
    EMPLOYEE = "EMPLOYEE"
}

export interface User {
    accountId: string;
    email: string;
    roleName: string;
    token: string;
}

export interface ResponseData {
    error: number;
    message: string;
}