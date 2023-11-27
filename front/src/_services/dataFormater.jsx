import ApiCaller from "./apiCaller"
import MockCaller from "./mockCaller"

async function DataFormater(userId, context) {

  console.log('context', context)
  

    if (context === 'api') {
      let allDatas = await ApiCaller(userId)
      console.log('api', allDatas);

    }

    console.log(allDatas);


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