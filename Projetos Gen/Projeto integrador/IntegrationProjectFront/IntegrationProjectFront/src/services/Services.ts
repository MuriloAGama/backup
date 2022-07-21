import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://greeniverse.herokuapp.com/'
})

export const login = async(url: any, info: any, setDado: any) => {
    const answer = await api.post(url, info)
    setDado('Bearer ' + answer.data.token)
}

export const registerUser = async(url: any, info: any, setDado: any) => {
    const answer = await api.post(url, info)
    setDado(answer.data)
}

export const busca = async (url: any, setDado: any, header: any) => {
    const answer = await api.get(url, header)
    setDado(answer.data)
}

export const buscaId = async(url: any, setDado: any, header: any) => { 
    const answer = await api.get(url, header)
    setDado(answer.data)
}

export const buscaCategoria = async(url:any, setDado: any, header: any) => {
    const answer = await api.get(url, header)
    setDado(answer.data)
}