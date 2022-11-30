let token = '69deb064567701ee298ddc5d8842cb6170269fbebff97981'


export const serverCalls = {
    get : async () => {
        const response = await fetch(`https://nettle-exciting-rake.glitch.me/api/cars`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async(data:any) => {
        const response = await fetch(`https://nettle-exciting-rake.glitch.me/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },

    update: async (id: string, data:any) => {
        const response = await fetch(`https://nettle-exciting-rake.glitch.me/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://nettle-exciting-rake.glitch.me/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }

}