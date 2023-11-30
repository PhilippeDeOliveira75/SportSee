import ApiCaller from "./apiCaller"
import MockCaller from "./mockCaller"

/**
 * 
 * @param {string} userId 
 * @param {string} context 
 * @returns {Object}
 */

async function DataFormater(userId, context) {

  // Initialisation de l'objet qui contiendra toutes les données
  let allDatas

  // Appel des données selon la valeur du toggle grace au paramètre context
  if (context === 'api') {
    allDatas = await ApiCaller(userId)

  }
  else{
    allDatas = await MockCaller(userId)
  }

  // Si l'objet userData.user a une propriété todayScore, renommez-la en score
  if ("todayScore" in await allDatas.user.data.data) {
    allDatas.user.data.data.score = allDatas.user.data.data.todayScore;
    delete allDatas.user.data.data.todayScore;
  }

  // Foramtage des chemins d'accès aux données
  allDatas.dataUser = allDatas.user.data.data.userInfos
  allDatas.dataActivity = allDatas && allDatas.activity.data.data.sessions
  allDatas.dataAverage = allDatas && allDatas.averageSessions.data.data.sessions
  allDatas.dataPerformance = allDatas && allDatas.performance.data.data.data
  allDatas.dataScore = allDatas && allDatas.user.data.data.score
  allDatas.dataNutrient = allDatas && allDatas.user.data.data.keyData

  return allDatas
  
}

export default DataFormater