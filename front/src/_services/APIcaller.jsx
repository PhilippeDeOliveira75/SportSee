import axios from 'axios'

/**
 * 
 * @param {string} userId 
 * @returns {Promise<Object>}
 */

// async function ApiCaller(userId) {

const ApiCaller = async (userId) => {
  
  const urlPrefix = `http://localhost:3000/user/${userId}`

  // Récupération des données de l'API
  return Promise.all([
    axios.get(`${urlPrefix}`),
    axios.get(`${urlPrefix}/activity`),
    axios.get(`${urlPrefix}/average-sessions`),
    axios.get(`${urlPrefix}/performance`)
  ])
  
  // Assignation des données de l'API
  .then(([userData, activityData, averageSessionsData, performanceData]) => ({
    user: userData,
    activity: activityData,
    averageSessions: averageSessionsData,
    performance: performanceData
  }))
  

}

export default ApiCaller;