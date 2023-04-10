import React from "react";
var moment = require("moment");

class HourlyForecast extends React.Component {
  render() {
    let _date = new Date();
    const weekday = this.props.data.dt * 1000;
    _date.setTime(weekday);
    console.log(this.props.data.main);
    const _img = `owf owf-${this.props.data.weather[0].id} owf-5x`;
    const fahrenheitMax = Math.round(this.props.data.main.temp_max);

    const fahrenheitMin = Math.round(this.props.data.main.temp_min);

    const farenheitTemp = Math.round(this.props.data.main.temp);

    return (
      <div className="row">
        <div className="col-12">
          <div className="card py-2 my-3">
            <div className="row">
              <div className="col">
                <h4 className="text-muted">
                  {moment(_date).format("MMMM D YYYY")}
                </h4>
                <h5>
                  {this.props.data.day} at {moment(_date).format("HH:mm a")}
                </h5>
                <i className={_img}></i>
                <p>{this.props.data.weather[0].description}</p>
                <h5>Temperature: {farenheitTemp}°F</h5>
                <p>
                  Minimum:{fahrenheitMin}°F and Maximum: {fahrenheitMax}°F
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HourlyForecast;
