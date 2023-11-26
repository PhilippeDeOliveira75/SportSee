import axios from 'axios';

async function MockCaller(userId) {

  // Récupération des données de l'API
  return Promise.all([
    axios.get(`http://localhost:5173/dataMock.json/user/${userId}`),
    axios.get(`http://localhost:5173/dataMock.json/user/${userId}/activity`),
    axios.get(`http://localhost:5173/dataMock.json/user/${userId}/average-sessions`),
    axios.get(`http://localhost:5173/dataMock.json/user/${userId}/performance`)
    
  ])
  
  // Assignation des données de l'API
  .then(([userData, activityData, averageSessionsData, performanceData]) => ({
    user: userData,
    activity: activityData,
    averageSessions: averageSessionsData,
    performance: performanceData
  }))
  
  // Affichage des erreurs dans la console
  .catch(error => console.error('Error:', error))
}

export default MockCaller