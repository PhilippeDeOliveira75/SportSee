import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import '@components/score/score.scss'

function Score ({dataScore}) {

  // Multiplication par 100 pour avoir un pourcentage
  const pourcentScore = dataScore*100

  // Calcul total = score + reste (100 - score)
  const scoreCalcul = [{ name: 'Score', value: pourcentScore},{ name: 'Reste', value: 100-pourcentScore}]


    return(

      <div className="score-container">

        <div className="legend">Score</div>

        <div className="stats">{pourcentScore+"%"}
          <span>de votre 
            <br/>objectif
          </span>
        </div>

        <ResponsiveContainer  width="100%" height="100%">

          <PieChart>

            <Pie data={scoreCalcul} innerRadius={65} outerRadius={75} radius={[20, 20, 0, ]} paddingAngle={1} startAngle={90} endAngle={470} dataKey="value" >

              {scoreCalcul.map((element,index)=>{

              return(

                <Cell key={`cell-${index}`} fill={index===0?"red":"#ff000023"} />)
      
            })}

            </Pie>
 
          </PieChart>

      </ResponsiveContainer>
  
  </div>
  )
}

export default Score