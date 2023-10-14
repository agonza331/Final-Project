import React from 'react';
import Place from './Place';


const MexicoList = ({attractions}) => {
  return (
    <div className="mexico-list">
     {attractions.map((attraction, index) => (
  <Place
    key={index}
    name={place.name}
    about={place.about}
    location={place.location}
  />
  ))}
    </div>
  );
};

export default MexicoList;



// import React from 'react';
// import {Place} from '../components/Place.js'
// import { API } from '../rest/MexicoApi.js'; 
// import { NewPlaceForm } from './NewPlaceForm.js'; 


// export class MexicoList extends React.Component{
//     state = {
//         places : []
//     };

//     componentDidMount() {
//         this.fetchPlaces();
//     }

//     fetchPlaces = async () => {
//         const places = await placesApi.get();
//         this.setState({ places });
//     }

//     updatePlace = async (updatedPlace) => {
//         await mexicoApi.put(updatedPlace);
//         this.fetchHouses();
//     };

//     deletePlace = async (placeId) => {
//         // Send a DELETE request to API
//         try {
//             await fetch(`${HOUSES_ENDPOINT}/${houseId}`, {
//                 method: 'DELETE',
//             });
//             // to update the state by fetching the updated list of houses
//             this.fetchHouses();
//         } catch (error) {
//             console.error('Oops, looks like deleting the house had an issue.', error);
//         }
//     };

    
//     render() {
//         return (
//           <div className="house-list">
//             <h1 className='title'>House list</h1>
//             <NewHouseForm />
//             {this.state.houses.map((house) => (
//               <div className="house-card" key={house._id}>
//                 <House
//                   house={house}
//                   key={house._id}
//                   updateHouse={this.updateHouse}
//                   deleteHouse={this.deleteHouse}
//                 />
//               </div>
//             ))}
//           </div>
//         );
//       }
//     }
//      
//     export default MexicoList;
    
    
    