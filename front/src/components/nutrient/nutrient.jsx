import '@components/nutrient/nutrient.scss'
import CaloriesIcon from '@assets/energy.svg'
import ProteinesIcon from '@assets/chicken.svg'
import GlucidesIcon from '@assets/apple.svg'
import LipidesIcon from '@assets/cheeseburger.svg'

function Nutrient ({ dataNutrient }) {

    const chartData = {
        Calories: dataNutrient.calorieCount,
        Proteines: dataNutrient.proteinCount,
        Glucides: dataNutrient.carbohydrateCount,
        Lipides: dataNutrient.lipidCount,
    }

    const icons = {
        Calories: CaloriesIcon,
        Proteines: ProteinesIcon,
        Glucides: GlucidesIcon,
        Lipides: LipidesIcon,
    }

    function formatValue(key, value) {
        if (key === 'Calories') {
            return `${value.toLocaleString('fr-FR')} kCal`;
        } else {
            return `${value} g`;
        }
    }

    return (

        <div className="container-nutrient">
            {Object.entries(chartData).map(([key, value], index) => (
                <div key={key} className='card'>
                    <div key={index} className={`icon-container icon-${key}`}>
                        <img className="icon" src={icons[key]} alt={key} />
                    </div>
                    <div className='info-nutrient'>
                        <p>{formatValue(key, value)}</p>
                        <h3>{key}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Nutrient