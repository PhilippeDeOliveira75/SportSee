import axios from 'axios';

/**
 * 
 * @param {sting} userId 
 * @returns {Promise<Object>}
 */

async function MockCaller(userId) {

  // Récupération des données du Mock
  
  let test 

  await axios.get(`http://localhost:5173/dataMock.json/`)

  .then(response=>{

   response.data&&response.data.forEach((e,i)=>{

    if(e.user.data.data.id===parseInt(userId)){

      test = response.data[i]

    }
   })
  })

  return test
  
}

export default MockCaller