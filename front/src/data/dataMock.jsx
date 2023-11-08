function DataMock() {
    
    const data = {
        "userData": {
            "id": 18,
            "userInfos": {
                "firstName": "Cecilia",
                "lastName": "Ratorez",
                "age": 34
            },
            "score": 0.3,
            "keyData": {
                "calorieCount": 2500,
                "proteinCount": 90,
                "carbohydrateCount": 150,
                "lipidCount": 120
            }
        },
        "performance": {
            "userId": 18,
            "kind": {
                "1": "cardio",
                "2": "energy",
                "3": "endurance",
                "4": "strength",
                "5": "speed",
                "6": "intensity"
            },
            "data": [
                {
                    "value": 200,
                    "kind": 1
                },
                {
                    "value": 240,
                    "kind": 2
                },
                {
                    "value": 80,
                    "kind": 3
                },
                {
                    "value": 80,
                    "kind": 4
                },
                {
                    "value": 220,
                    "kind": 5
                },
                {
                    "value": 110,
                    "kind": 6
                }
            ]
        },
        "activity": [
            {
                "day": "2020-07-01",
                "kilogram": 70,
                "calories": 240
            },
            {
                "day": "2020-07-02",
                "kilogram": 69,
                "calories": 220
            },
            {
                "day": "2020-07-03",
                "kilogram": 70,
                "calories": 280
            },
            {
                "day": "2020-07-04",
                "kilogram": 70,
                "calories": 500
            },
            {
                "day": "2020-07-05",
                "kilogram": 69,
                "calories": 160
            },
            {
                "day": "2020-07-06",
                "kilogram": 69,
                "calories": 162
            },
            {
                "day": "2020-07-07",
                "kilogram": 69,
                "calories": 390
            }
        ],
        "average": [
            {
                "day": 1,
                "sessionLength": 30
            },
            {
                "day": 2,
                "sessionLength": 40
            },
            {
                "day": 3,
                "sessionLength": 50
            },
            {
                "day": 4,
                "sessionLength": 30
            },
            {
                "day": 5,
                "sessionLength": 30
            },
            {
                "day": 6,
                "sessionLength": 50
            },
            {
                "day": 7,
                "sessionLength": 50
            }
        ]
      }

    // Transformation des objets en tableau pour pouvoir les exploiter dans les composants

    const userDataArray = Object.entries(data.userData).map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            return [key, Object.entries(value)]
        }
        return [key, value]
    })
    
    const performanceArray = Object.entries(data.performance).map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            return [key, Object.entries(value)]
        }
        return [key, value]
    })

    const activityArray = Object.entries(data.activity).map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            return [key, Object.entries(value)]
        }
        return [key, value]
    })

    const averageArray = Object.entries(data.average).map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            return [key, Object.entries(value)]
        }
        return [key, value]
    })
    
    console.log(userDataArray)
    console.log(performanceArray)
    console.log(activityArray)
    console.log(averageArray)
}

export default DataMock