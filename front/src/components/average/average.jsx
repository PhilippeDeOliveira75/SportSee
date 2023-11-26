import '@components/average/average.scss'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function Average ({ dataAverage }) {

  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const chartData = dataAverage.map(item => ({
    day: daysOfWeek[item.day - 1],
    session: item.sessionLength,
  })
  );
    


    return (
      
        <div className="average-container">
          
          <ResponsiveContainer width="100%" height="100%" >

            <LineChart data={chartData} margin={{top: 20, right: 15, left: 15, bottom: 20}} fill='#fff'>

              <text fill='#fff' opacity={0.5}>
                <tspan x={20} y={25}>Durée moyenne des</tspan>
                <tspan x={20} y={45}>sessions</tspan>
              </text>

              <YAxis dataKey="session" domain={['dataMin-10', 'dataMax+10']} hide={true} />

              <XAxis dataKey="day" tickLine={false} axisLine={false} stroke='#fff' opacity={0.5} tickMargin={15}/>

              <Line type="natural" dataKey="session" stroke='#fff' opacity={0.5} strokeWidth={1.2} dot={false} />

            </LineChart>

          </ResponsiveContainer>

        </div>
    )
}

export default Average