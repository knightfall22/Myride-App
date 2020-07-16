import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default (shouldTrack,callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);
    const startWatching = async () => {
       try {
         await Location.requestPermissionsAsync();
         const sub = await Location.watchPositionAsync(
           {
             accuracy: Location.Accuracy.BestForNavigation,
             timeInterval: 1000,
             distanceInterval: 10,
           },
           callback
         );
         setSubscriber(sub)
       } catch (e) {
         setErr(e);
       }
     };
    useEffect(() => {
         if (shouldTrack) {
             startWatching();
         }else{
            subscriber.remove();
            setSubscriber(null)

            
         }
       }, [shouldTrack]);

    return [err]
}