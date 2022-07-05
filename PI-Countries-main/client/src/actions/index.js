import axios from 'axios';

export function getCountries() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/countries",{

        });
        return dispatch({
        type: 'GET_COUNTRIES',
        payload: json.data
    })
}
}

export function getNameCountries(name){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/countries/"+ name);
            return dispatch({
                type: "GET_NAME_COUNTRIES",
                payload: json.data
            });
        }catch(error){
            console.log(error)
        }
    }
}
export function getActivities() {
    return async function (dispatch) {
        var info = await axios.get("http://localhost:3001/activities",{

        });
        
        return dispatch({
        type: 'GET_ACTIVITIES',
        payload: info.data
    })
}
}

export function addActivities(payload) {
    return async function (dispatch) {
        console.log("🚀 ~ file: index.js ~ line 47 ~ info",  payload)
        var info = await axios.post("http://localhost:3001/activities", payload);
        return dispatch({
        type: 'ADD_ACTIVITIES',
        payload: info.data
    })
}
}

// export function postCountries (payload){ 
//     return async function(dispach){
//         const response = await axios.post("http://localhost:3001/countries", payload);
//     console.log(response)
//     return response;
//     }
// }

export function filterCountriesByRegion(payload){
    return{
        type: 'FILTER_BY_REGION',
        payload
    }
}

export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function getDetail (id){
    return async function(dispach){
        try {
            var json = await axios.get(`http://localhost:3001/countries?id=${id}`);
            console.log("🚀 ~ file: index.js ~ line 85 ~ returnfunction ~ json", json)
            return dispach({
                type: "GET_DETAILS",
                payload: json.data[0]
            })
        } catch (error) {
        console.log("🚀 ~ file: index.js ~ line 91 ~ returnfunction ~ error", error)
            
        }
    }
}







// aqui es donde se conecta el fromt con el back