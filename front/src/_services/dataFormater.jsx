import ApiCaller from "./apiCaller";

async function DataFormater(userId) {

  const allDatas = await ApiCaller(userId)


  // Si l'objet userData.user a une propriété todayScore, renommez-la en score
  if ("todayScore" in allDatas.user.data.data) {
    allDatas.user.data.data.score = allDatas.user.data.data.todayScore;
    delete allDatas.user.data.data.todayScore;
  }
  
    allDatas.dataUser = allDatas.user.data.data.userInfos

    allDatas.dataActivity = allDatas && allDatas.activity.data.data.sessions

    allDatas.dataAverage = allDatas && allDatas.averageSessions.data.data.sessions

    allDatas.dataPerformance = allDatas && allDatas.performance.data.data.data

    allDatas.dataScore = allDatas && allDatas.user.data.data.score

    allDatas.dataNutrient = allDatas && allDatas.user.data.data.keyData

  return allDatas
}

export default DataFormater