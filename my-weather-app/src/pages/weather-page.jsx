
import CardWeather from '../components/cards/card-weather.jsx';
import CardPodcast from '../components/cards/card-podcast.jsx';
import React from 'react';

export default function WeatherPage(){
    return (
        <React.Fragment>
        <CardWeather></CardWeather>
        <CardPodcast></CardPodcast>
        </React.Fragment>

    )
}