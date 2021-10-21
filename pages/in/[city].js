import {useRouter} from "next/router"
import styles from '../../styles/city.module.scss'
import {MainLayout} from "../../components/MainLoyout";

export default  function ( {weather} ){
    const {query}=useRouter()

    return (
        <MainLayout className={styles.city} keywords='Current Weather' text='Current Weather'>
            <h1>City name: {query.city}</h1>
            <h1>City timezone: {weather.data[0].timezone}</h1>
        </MainLayout>
    )
}

export async function getServerSideProps({params}) {
    const API_KEY = '86512471b71842648e15cb207e3c98df'
    const response =  await fetch(`https://api.weatherbit.io/v2.0//current?&city=${params.city}&key=${API_KEY}`)
    const weather = await response.json()
    return {
        props: {weather}, // will be passed to the page component as props
    }
}