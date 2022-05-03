import styles from '../Weather/Weather.module.css'

function Weather ({data}) {

    return(
        <>
                <div className={styles.weather}> 
                    <h1 className={styles.header}>Погода в {data.name}</h1>
                    <div  className={styles.temp}>{Math.round(data.main.temp)}&deg;</div>  
                    <div className={styles.weather__icon}>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" img/>
                    </div>  
                </div>    
        </>
    )
}

export default Weather