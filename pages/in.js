import {useState} from 'react'
import Link from "next/link";
import {MainLayout} from "../components/MainLoyout";

const In = () => {
    const [weather, setWeather] = useState([
        {city: 'Moscow', temp: 'cold'},
        {city: 'Minsk', temp: 'hate'},
        {city: 'Kiev', temp: 'norm'}
    ])
    return (
        <MainLayout keywords='list cities' text='List cities'>
            <h1>In</h1>
            <ul>
                {weather.map(city =>
                    <li>
                        <Link href={`/in/${city.city}`}>
                           <a>{city.city}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainLayout>
    )
}
export default In;