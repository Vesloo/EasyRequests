class RequestFromApi {

    private getBaseHeaders(): HeadersInit {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    }

    private getAuthHeaders(token: string): HeadersInit {
        return {
            ...this.getBaseHeaders(),
            'Authorization': `Bearer ${token}`
        };
    }

    

    async GetRequestWithToken(token: string, url: string) {
        try {
            const response = await fetch(url, {
                headers: this.getAuthHeaders(token),
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status} : ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async GetRequestWithoutToken(url: string) {
        try {
            const response = await fetch(url, {
                headers: this.getBaseHeaders(),
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status} : ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async PostRequestWithToken(token: string, url: string, body: any) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: this.getAuthHeaders(token),
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status} : ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async PostRequestWithoutToken(url: string, body: any) {
        try {
            const response = await fetch(url, {
                body: JSON.stringify(body),
                method: 'POST',
                headers: this.getBaseHeaders(),
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status} : ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async DeleteRequestWithToken(token: string, url: string) {
        try {
            const response = await fetch(url, {
                headers: this.getAuthHeaders(token),
                method: "DELETE"
            })
            return response;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async DeleteRequestWithoutToken(url: string) {
        try {
            const response = await fetch(url, {
                headers: this.getBaseHeaders(),
                method: "DELETE"
            })
            return response;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async PutRequestWithToken(token: string, url: string, body: any) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: this.getAuthHeaders(token),
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status} : ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async PutRequestWithoutToken(url: string, body: any) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: this.getBaseHeaders(),
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status} : ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async PatchRequestWithToken(token: string, url: string, body: any) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: this.getAuthHeaders(token),
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status} : ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async PatchRequestWithoutToken(url: string, body: any) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: this.getBaseHeaders(),
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status} : ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

export default RequestFromApi;