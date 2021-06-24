import { BadCredentialsAuthError } from "./errors/AuthErrors";

export async function authenticate(username: string, password: string): Promise<any> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const request: RequestInit = {
        method: 'POST',
        headers,
        body:   JSON.stringify({username, password})
    }

    const response = await fetch("https://fit-imc-calc.herokuapp.com/auth/login", request);
    if (response.ok) return response.json();
    if (response.status === 403 || response.status === 401) throw new BadCredentialsAuthError("Username or password invalid!");

    console.error(JSON.stringify(response));
    throw Error("Unknown authentication error happened!");
}
