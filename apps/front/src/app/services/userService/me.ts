import { httpClient } from "../httpClient";

interface IMeResponse {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    name: string;
    email: string;
    password: string;
}

export async function me() {
    const  { data } = await httpClient.get<IMeResponse>('user/me')

    return data
}