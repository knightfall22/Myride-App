import createDataContext from '../Context/createDataContext'


const locationReducer = (state,action) => {
    switch (action.type) {
        case 'add_current_location':
            return {...state,currentLocation:action.payload}
        case 'add_location_prediction':
            return {...state,predictions:action.payload}
        case 'add_location_route':
            return {...state,pointCoords:action.payload}
        case 'add_location_name':
            return {...state,destinationName:action.payload}
        default:
            return state
    }
}


const startRecording = dispatch => () => {}
const stopRecording = dispatch => () => {}
const addLocation = dispatch => (location) => {
    dispatch({type:'add_current_location', payload:location})
}
const addPredictions = dispatch => (predict) => {
    dispatch({type:'add_location_prediction', payload:predict})
}

const addRoute = dispatch => (route) => {
    dispatch({type:'add_location_route', payload:route})
}

const setDestination = dispatch => (text) => {
    dispatch({type:'add_location_name', payload:text})
}
export const {Context,Provider} = createDataContext(
    locationReducer,
    {
        startRecording,
        stopRecording,
        addLocation,
        addPredictions,
        addRoute,
        setDestination,
    },
    {recording: false, locations: [],predictions:[] ,currentLocation:null,pointCoords:[], destinationName:""}
)