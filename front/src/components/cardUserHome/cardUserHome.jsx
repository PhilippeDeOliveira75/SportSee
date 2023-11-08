import '@components/CardUserHome/CardUserHome.scss'

function CardUserHome (props) {
    return (
        <>
            <div className='w-card-user-home'>
                <p className='card-user-home-title'> Robert </p>
            </div>
            <div className='w-card-user-home'>
                <p className='card-user-home-title'> Nicolas </p>
            </div>
            <div className='w-card-user-home'>
                <p className='card-user-home-title'> Brigitte </p>
            </div>
            <div className='w-card-user-home'>
                <p className='card-user-home-title'> Manu </p>
            </div>
        </>
    )
}

export default CardUserHome