import axios from "axios";

const baseUrl = "https://localhost:7231/product/"


export default {
    productAction(url = baseUrl){
        return{
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url+id),
            create : newProduct => axios.post(url, newProduct),
            update : (id, updateProduct) => axios.put(url+id, updateProduct),
            delete : id => axios.delete(url + id)
        }
    }
}