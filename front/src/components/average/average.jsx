import '@components/average/average.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
]

function Average () {
    
    return (
        <div className="container-card duration">
          
          <ResponsiveContainer width={258} height={263} >

            <LineChart
                data={data}

                margin={{top: 20, right: 15, left: 15, bottom: 20}}
            >

              <text>
                <tspan x={34} y={35}>Durée moyenne des</tspan>
                <tspan x={34} y={55}>sessions</tspan>
              </text>

              <YAxis 
                domain={['dataMin-10', 'dataMax+10']} 
                hide={true}
              />

              <XAxis 
                dataKey="weekday"
                tickLine={false}
                axisLine={false}
                opacity='0.5'
                stroke='var(--color-white)'
              />

              <Tooltip
                cursor={false}

                wrapperStyle={{outline: 'none'}}
              />

              <Line
                type="natural"
                dataKey="sessionLength"
                stroke="var(--color-white)"
                strokeWidth={1.6} 
                dot={false}
              />

            </LineChart>

          </ResponsiveContainer>
        </div>
    )
}

const CustomTool=({ active, payload, label, data })=>{
  if(active && payload && payload.length){
      return(
      <div className='tooltip duration'>
        {payload[0].value + " min"}
      </div>
  )
}
return null
}


export default Average