import {Context as LocationContext} from '../Context/LocationContext'
import googleRoute from "../Api/google";
import {Keyboard} from "react-native"
import PolyLine from "@mapbox/polyline"

export default async (location,locationName) => {
    const {state:{currentLocation},addRoute,setDetination,addPredictions} = useContext(LocationContext);     

    const lat = currentLocation.coords.latitude,
    long = currentLocation.coords.longitude,
    locationComp = lat +','+long;


    try {
      const response = await googleRoute.get('/',{
        params: {
          key: "AIzaSyA7Dj7Uxfl6YWSMN8aVhgbEiYqF-hPiSD0",
          radius:2000,
          destination:location,
          origin: locationComp
        }
      })
      const points = PolyLine.decode(response.routes[0].overview_polyline.points);
      const pointCoords = points.map(point => {
        return {latitude:point[0],longitude:point[1]}
      })
      addRoute(pointCoords)
      addPredictions([])
      setDetination(locationName)
      Keyboard.dismiss()
     // Zoom Out this.map.fitToCoordinates(pointCoords)
    } catch (error) {
      console.log(error);
      
    }

   
    
}
