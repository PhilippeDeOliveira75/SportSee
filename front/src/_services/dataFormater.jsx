import axios, { all } from "axios";
import ApiCaller from "@services/apiCaller";

function DataFormater(userId) {

  return ApiCaller(userId)

    .then((allDatas) => {
      
      // Si l'objet userData.user a une propriété todayScore, renommez-la en score
      if ("todayScore" in allDatas.user.data.data) {
        allDatas.user.data.data.score = allDatas.user.data.data.todayScore;
        delete allDatas.user.data.data.todayScore;
      }
    
      return allDatas
      
    })
}

export default DataFormater