import React, { useEffect, useState } from "react";
import './Place.css';
import data from '../../../data/example_data.json'
import { FaCalendarAlt } from "react-icons/fa";
import { IconButton, InputBase } from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import raw_data from '../../../data/example_data.json'
const Place = (props) => {
    const [time, setTime] = useState([])
    const [img_state, set_imgState] = useState(0)
    useEffect(() => {
        if (props.data != undefined) {
            var temp = {
                time_open: "",
                time_close: ""
            }

            if (props.data.operation_time[0].time_open.length == 4) {
                temp.time_open = parseInt(props.data.operation_time[0].time_open[0])
            }
            else if (props.data.operation_time[0].time_open.length == 5) {
                temp.time_open = parseInt(props.data.operation_time[0].time_open.slice(0, 2))
            }

            if (props.data.operation_time[0].time_close.length == 4) {
                temp.time_close = parseInt(props.data.operation_time[0].time_close[0])
            }
            else if (props.data.operation_time[0].time_close.length == 5) {
                temp.time_close = parseInt(props.data.operation_time[0].time_close.slice(0, 2))
            }

            setTime(temp)
        }

    }, []);

    const next_img = () => {
        set_imgState((img_state + 1) % 3)
    }

    const prev_img = () => {
        if (img_state == 0) {
            set_imgState(2)
        }
        else {
            set_imgState((img_state - 1) % 3)
        }
    }

    return (
        <div className="place-container">
            {props.data != undefined && <div className="content-detail">

                <div className="top-detail">
                    <div className="mobile-ratingDiv">
                        <div className="mobile-rating">
                            {props.data.rating}
                        </div>
                    </div>
                    <div className="place-img">
                        <img src={props.data.profile_image_url} style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }} />
                    </div>
                    <div className="detail-place">
                        <div className="name-place">
                            {props.data.name}
                        </div>
                        <div className="bottom-detailPlace">
                            <div className="time-calendar">
                                <div>
                                    <FaCalendarAlt />
                                </div>
                                {time.length != 0 && <div className="time">
                                    {time.time_open < 12 ? `${time.time_open}:00 AM` : `${time.time_open - 12}:00 PM`}  - {time.time_close < 12 ? `${time.time_close}:00 AM` : `${time.time_close - 12}:00 PM`}
                                </div>}
                            </div>
                            <div className="rating-detail">
                                <div className="rating-circle">

                                </div>
                                <div className="rating">
                                    {props.data.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-img">
                    <div className="img-left">
                        <img src={props.data.images[0]} style={{ width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px' }} />
                    </div>
                    <div className="img-center">
                        <img src={props.data.images[1]} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="img-right">
                        <img src={props.data.images[2]} style={{ width: '100%', height: '100%', borderRadius: '0px 10px 10px 0px' }} />
                    </div>
                </div>
                <div className="bottom-img2">
                    <div className="mobile-imgShow">
                        <div className="bottom-control2">
                            <IconButton
                                className="icon-botton"
                                onClick={prev_img}
                            >
                                <FiChevronLeft />
                            </IconButton>
                        </div>
                        <img src={props.data.images[img_state]} style={{ width: '100%', height: '100%', borderRadius: '10px', position: 'relative' }} />
                        <div className="bottom-control2">
                            <IconButton
                                className="icon-botton"
                                onClick={next_img}
                            >
                                <FiChevronRight />
                            </IconButton>
                        </div>

                    </div>
                </div>
            </div>}

        </div>
    )
}

export default Place
