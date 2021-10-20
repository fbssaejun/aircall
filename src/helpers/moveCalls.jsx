import axios from 'axios';

  export const unarchiveAll = (callArray) => {
    callArray.map((call) => {
      axios.post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
        is_archived: false
      });
    });
  };


 export const archiveAll = (callArray) => {

    callArray.map(call => {
     axios.post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
       is_archived: true
     })
   })
};