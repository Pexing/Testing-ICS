import React, { useEffect, useState } from "react";
import './Content.css';
import Place from './Place Content/Place'
import raw_data from '../../data/example_data.json'
import { IconButton, InputBase } from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SearchIcon from '@mui/icons-material/Search';
import Dialog from './DialogContent';

const Content = () => {
    // console.log(raw_data)
    const filterValue = ["restaurant", "bakery", "cafe"]

    const [filter, setFilter] = useState(2)
    const [Data, setData] = useState([])
    const [pageState, setPageState] = useState(0)
    const [searched, setSearched] = useState("");
    const [open, setOpen] = useState(false)

    const requestSearch = (event) => {
        setSearched(event.target.value)
    };

    const handleChangeMenu = (event) => {
        setFilter(event.target.value);
    };

    const next_page = () => {
        if (pageState != Math.ceil(Data.length / 9) && Data.length != 0) {
            setPageState(pageState + 1)
        }
    }
    const prev_page = () => {
        if (pageState > 1) {
            setPageState(pageState - 1)
        }
    }

    useEffect(() => {
        var temp_data = []
        for (let index = 0; index < raw_data.length; index++) {
            if (raw_data[index].categories.indexOf(filterValue[filter]) != -1) {
                temp_data.push(raw_data[index])
            }
        }
        setData(temp_data)
        setPageState(1)
    }, [filter]);

    useEffect(() => {
        const filteredData = raw_data.filter((row) => {
            return row.name.toLowerCase().includes(searched.toLowerCase());
        });
        setData(filteredData);
    }, [searched])

    return (
        <div className="content-container">
            <div className="content">
                <div className="top-content">
                    <div className="text-title">
                        Place List
                    </div>
                    <div className="control">
                        <select className="dropdown"
                            onChange={handleChangeMenu}
                        >
                            <option value={0}>Restaurant</option>
                            <option value={1}>Bakery</option>
                            <option value={2}>Cafe</option>
                        </select>
                        <div className="line-2"></div>
                        <div className="search">
                            <InputBase
                                sx={{ ml: 1, flex: 1, width: '87%' }}
                                placeholder="Search name"
                                value={searched}
                                onChange={requestSearch}
                            />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                {Data.length !== 0 && <div className="show-content">
                    <div className="column-content">
                        {Data.length > 0 + (9 * (pageState - 1)) ? <Place data={Data[0 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                        {Data.length > 1 + (9 * (pageState - 1)) ? <Place data={Data[1 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                        {Data.length > 2 + (9 * (pageState - 1)) ? <Place data={Data[2 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                    </div>
                </div>}
                {Data.length !== 0 && <div className="show-content">
                    <div className="column-content">
                        {Data.length > 3 + (9 * (pageState - 1)) ? <Place data={Data[3 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                        {Data.length > 4 + (9 * (pageState - 1)) ? <Place data={Data[4 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                        {Data.length > 5 + (9 * (pageState - 1)) ? <Place data={Data[5 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                    </div>
                </div>}
                {Data.length !== 0 && <div className="show-content">
                    <div className="column-content">
                        {Data.length > 6 + (9 * (pageState - 1)) ? <Place data={Data[6 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                        {Data.length > 7 + (9 * (pageState - 1)) ? <Place data={Data[7 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                        {Data.length > 8 + (9 * (pageState - 1)) ? <Place data={Data[8 + (9 * (pageState - 1))]} /> : <div className="empty-content" />}
                    </div>
                </div>}
                <div className="bottom-content">
                    <div className="bottom-control">
                        <IconButton
                            className="icon-botton"
                            onClick={prev_page}
                        >
                            <FiChevronLeft />
                        </IconButton>
                        <div className="page-circle">
                            {pageState}
                        </div>
                        <IconButton
                            className="icon-botton"
                            onClick={next_page}
                        >
                            <FiChevronRight />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
