import axios from 'axios';


  //Loop through array of calls that are NOT archived and change data to be archived
  export const unarchiveAll = (callArray, currentCalls, setCurrentCalls) => {
    callArray.map((call) => {
      axios.post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
        is_archived: false
      }).then((res) => {
        const newCalls = [...currentCalls];
        newCalls.map((call) => {
          call.is_archived = false;
        })
        setCurrentCalls(newCalls)
      })
    });
  };

//Loop through array of calls that are archived and change data to be NOT archived
 export const archiveAll = (callArray, currentCalls, setCurrentCalls) => {

    callArray.map(call => {
     axios.post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
       is_archived: true
     }).then((res) => {
      const newCalls = [...currentCalls];
      newCalls.map((call) => {
        call.is_archived = true;
      })
      setCurrentCalls(newCalls)
    })
   })
};
