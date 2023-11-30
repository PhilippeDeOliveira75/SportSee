import '@components/nutrient/nutrient.scss'
import CaloriesIcon from '@assets/energy.svg'
import ProteinesIcon from '@assets/chicken.svg'
import GlucidesIcon from '@assets/apple.svg'
import LipidesIcon from '@assets/cheeseburger.svg'

function Nutrient ({ dataNutrient }) {

    // Nommage des clés de l'objet dataNutrient
    const chartData = {
        Calories: dataNutrient.calorieCount,
        Proteines: dataNutrient.proteinCount,
        Glucides: dataNutrient.carbohydrateCount,
        Lipides: dataNutrient.lipidCount,
    }

    // Nommage des icones
    const icons = {
        Calories: CaloriesIcon,
        Proteines: ProteinesIcon,
        Glucides: GlucidesIcon,
        Lipides: LipidesIcon,
    }

    // Fonction permettant d'afficher kCal ou g selon la clé
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

                    {/* Changement des background-color selon la clé */}
                    <div key={index} className={`icon-container icon-${key}`}>

                        {/* Changement des icones selon la clé */}
                        <img className="icon" src={icons[key]} alt={key} />

                    </div>

                    <div className='info-nutrient'>

                        {/* Changement des noms et valeurs des nutriments selon la clé */}
                        <p>{formatValue(key, value)}</p>
                        <h3>{key}</h3>

                    </div>

                </div>
            ))}

        </div>
    )
}

export default Nutrient