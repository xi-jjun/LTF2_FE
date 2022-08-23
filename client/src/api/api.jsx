import axios from 'axios'


export async function getPhoneList() {
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    return await axios.get(url).catch(e => {
        console.log(e)
    })
}