import data from "../productos.json";

const getData = () => {
    
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data)
        }, 3000)
    })
}

export default getData;