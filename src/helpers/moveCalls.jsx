import axios from 'axios';

  //Loop through array of calls that are NOT archived and change data to be archived
  export const unarchiveAll = (callArray) => {
    callArray.map((call) => {
      axios.post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
        is_archived: false
      });
    });
  };

//Loop through array of calls that are archived and change data to be NOT archived
 export const archiveAll = (callArray) => {

    callArray.map(call => {
     axios.post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
       is_archived: true
     })
   })
};
