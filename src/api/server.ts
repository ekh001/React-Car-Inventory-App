let token = '8fe08d6495c1b6753d1a0ca3048d59905dd1246441dd9fab'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://able-believed-boar.glitch.me/api/cars`,{
            method: 'GET',
            headers: {              
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
// The commas are important because create, update, get, and delete are all actually key/value pairs (objects in objects in objects)
    create: async(data: any = {}) => {
        const response = await fetch(`https://able-believed-boar.glitch.me/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            // Think of line 28 like a dictionary. Body is the key, and the data gets turned into a string and becomes the value for the "body" key
            body: JSON.stringify(data)
        });
        if (!response.ok){
            console.log('Fail, girl')
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async(id: string, data: any = {}) => {
        const response = await fetch(`https://able-believed-boar.glitch.me//api/cars/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id: string) => {
        const response = await fetch(`https://able-believed-boar.glitch.me/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}