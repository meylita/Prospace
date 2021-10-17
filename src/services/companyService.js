import axios from "axios";

export const getAllCompany = () => {
    return new Promise((resolve, reject) => {
        try{
            axios.get("http://localhost:3005/data").then(resp=> resolve(resp.data));
        } catch (error) {
            reject('System error. Please try again later!')
        }
    })
} 

class CompanyService {
    getAllCompanys() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        return fetch("http://localhost:3005/data", requestOptions);
    }
}
export default new CompanyService();
