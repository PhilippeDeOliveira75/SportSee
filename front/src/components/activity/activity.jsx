import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '@components/activity/activity.scss'


function Activity ({ dataActivity }) {

  // Formatage des données spécifique pour le graphique
  const chartData = dataActivity.map((item, index) => ({
    day: index + 1,
    kilogram: item.kilogram,
    calories: item.calories
  }));

  // Paramètres des infobulles
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
            <p>{chartData[label-1].kilogram} kg</p>
            <p>{chartData[label-1].calories} kcal</p>
        </div>
      )
    }
  
    return null
  }

    return (
        <div className='activity-container'> 

            <ResponsiveContainer width="100%" height="90%">
            
                {/* Paramètres des barres entre elles*/}
                <BarChart data={chartData} barGap={10} >

                    {/* Titre du graphique */}
                    <text x={0} y={20} fill='#282D30' >
                        <tspan>Activité quotidienne</tspan>
                    </text>

                    {/* Légende du graphique */}
                    <Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} height={65} />

                    {/* Paramètres des lignes en arrière plan */}
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.5}/>

                    {/* Paramètres des légendes de l'axe horizontal */}
                    <XAxis dataKey="day" tickLine={false} height={50} tickMargin={15} opacity={0.5} stroke="#7b7b7b" scale='point' padding={{left: 12, right: 12}} />

                    {/* Paramètres des légendes de l'axe vertical */}
                    <YAxis dataKey="kilogram" yAxisId="kilogram" tickMargin={25} orientation='right' tickCount={3} domain={['dataMin - 1', 'dataMax + 2']} tickLine={false} axisLine={false} opacity={0.5} stroke="#7b7b7b" />
                    <YAxis dataKey="calories" yAxisId="calories" tickMargin={50} domain={[0, 'dataMax + 10']} hide />

                    {/* Paramètres des infobulles */}
                    <Tooltip content={<CustomTooltip data={chartData}/>} offset={50} />

                    {/* Paramètres des barres */}
                    <Bar name="Poids (kg)" dataKey="kilogram" yAxisId="kilogram" barSize={7} radius={[20, 20, 0, 0]} fill="#282D30" />
                    <Bar name="Calories brûlées (kCal)" dataKey="calories" yAxisId="calories" barSize={7} radius={[20, 20, 0, 0]} fill="#E60000" />

                </BarChart>
                
            </ResponsiveContainer> 
            
        </div>
    ) 
}
  
export default Activity