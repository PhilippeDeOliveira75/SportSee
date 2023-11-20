import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '@components/score/score.scss'

function Score ({dataScore}) {

    return(

        <div className="score-container">
        
        <ResponsiveContainer width="100%" height="100%" >
      <RadialBarChart
        innerRadius="60%"
        outerRadius="80%"
        barSize={10}
        data={dataScore}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey="score"
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          label={false}
          background={false}
          dataKey="score"
          angleAxisId={0}
          cornerRadius={5}
        />
        <text>
          <tspan x={29} y={34}>Score</tspan>
        </text>

      </RadialBarChart>
    </ResponsiveContainer>
    </div>
    )
}

export default Score