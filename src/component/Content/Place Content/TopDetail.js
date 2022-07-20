import React, { useEffect, useState } from "react";
import './Place.css';
import data from '../../../data/example_data.json'
import { FaCalendarAlt } from "react-icons/fa";

const TopDetail = (props) => {
    const [time, setTime] = useState([])

    useEffect(() => {
        var temp_time = []
        for (let index = 0; index < 40; index++) {
            var temp = {
                time_open: "",
                time_close: ""
            }

            if (data[index].operation_time[0].time_open.length == 4) {
                temp.time_open = parseInt(data[index].operation_time[0].time_open[0])
            }
            else if (data[index].operation_time[0].time_open.length == 5) {
                temp.time_open = parseInt(data[index].operation_time[0].time_open.slice(0, 2))
            }

            if (data[index].operation_time[0].time_close.length == 4) {
                temp.time_close = parseInt(data[index].operation_time[0].time_close[0])
            }
            else if (data[index].operation_time[0].time_close.length == 5) {
                temp.time_close = parseInt(data[index].operation_time[0].time_close.slice(0, 2))
            }

            temp_time.push(temp)
        }
        setTime(temp_time)
    }, []);

    return (
        <div className="top-detail">
            <div className="small-img">
                <img src={data[props.index].profile_image_url} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
            </div>
            <div className="detail-place">
                <div className="name-place">
                    {data[props.index].name}
                </div>
                <div className="bottom-detailPlace">
                    <div className="time-calendar">
                        <div>
                            <FaCalendarAlt />
                        </div>
                        {time != [] && <div className="time">
                            {time[props.index].time_open < 12 ? `${time[props.index].time_open}:00 AM` : `${time[props.index].time_open - 12}:00 PM`}  - {time[props.index].time_close < 12 ? `${time[props.index].time_close}:00 AM` : `${time[props.index].time_close - 12}:00 PM`}
                        </div>}
                    </div>
                    <div className="rating-detail">
                        <div className="rating-circle">

                        </div>
                        <div className="rating">
                            {data[props.index].rating}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDetail
