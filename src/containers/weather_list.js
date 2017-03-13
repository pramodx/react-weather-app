import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from './../components/chart';

class WeatherList extends Component {

    renderWeather(cityData){

        const temps = cityData.list.map(weather => parseInt(weather.main.temp - 273.15, 10));
        const pressures = cityData.list.map(weather => parseInt(weather.main.pressure, 10));
        const humidities = cityData.list.map(weather => parseInt(weather.main.humidity, 10));

        return (
            <tr key={cityData.city.id}>
                <td>{ cityData.city.name }</td>
                <td><Chart data={temps} color="pink" units="&#8451;"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="blue" units="%"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <colgroup>
                    <col width="10%"/>
                    <col width="30%"/>
                    <col width="30%"/>
                    <col width="30%"/>
                </colgroup>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (&#8451;)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);