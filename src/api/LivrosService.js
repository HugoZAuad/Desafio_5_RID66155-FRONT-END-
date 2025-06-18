import axios from "axios";

const BASE_URL = "https://desafio-5-rid-66155-back-end-hugozauads-projects.vercel.app/"

export class LivrosService{
    static getLivros(){
        return axios.get(BASE_URL+'books');
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}books/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}books`,body);
    }

    static updateLivro(id,body){
        return axios.put(`${BASE_URL}books/${id}`,body);
    }

    static deleteLivro(id){
        return axios.delete(`${BASE_URL}books/${id}`);
    }
    
}
