import { Radar, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import '@components/performance/performance.scss'

function Performance ({dataPerformance}) {

    // Création d'un tableau contenant les noms des catégories
    const kinds = [ 'Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio' ]

    // Récupération des catégorie et de leurs valeurs
    const chartData = dataPerformance.map(item => ({
      category : kinds[item.kind - 1],
      value: item.value
    }))

    return(
        
        <div className="performance-container">
           
           <ResponsiveContainer width="100%" height="100%">

                <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="70%"  margin={{ right: 17, left: 17 }}>
                    
                    <PolarGrid gridType="polygon" radialLines={false} />
                    
                    <PolarAngleAxis dataKey="category" stroke="#FFF"  tickLine={false} />
                    
                    <Radar dataKey="value" fill="#FF0101B2"  />
                
                </RadarChart>

            </ResponsiveContainer>
        
        </div>
    )
}

export default Performance