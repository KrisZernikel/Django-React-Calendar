import React, {Component} from 'react';
import MonthView from './MonthView';
import DayView from './DayView';
import Logo from "../logo.svg";
import $ from 'jquery';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            CurrentTimeZoneOffsetInHours: new Date().getTimezoneOffset() / 60,
            GetFullYear: new Date().getFullYear(),
            GetMonth: new Date().getMonth(),
            GetHours: new Date().getHours(),
            GetMinutes: new Date().getMinutes(),
            GetSeconds: new Date().getSeconds()
        };
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    getCookie = (name) => {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = $.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };

    handlePrev = () => {
        if (this.state.GetMonth > 0) {
            this.setState((state) => ({
                GetMonth: state.GetMonth - 1
            }), this.fetchData);
        } else {
            this.setState((state) => ({
                GetMonth: state.GetMonth = 11,
                GetFullYear: state.GetFullYear - 1
            }), this.fetchData);
        }
    };

    handleNext = () => {
        if (this.state.GetMonth < 11) {
            this.setState((state) => ({
                GetMonth: state.GetMonth + 1
            }), this.fetchData);
        } else {
            this.setState((state) => ({
                GetMonth: state.GetMonth = 0,
                GetFullYear: state.GetFullYear + 1
            }), this.fetchData);
        }
    };

    fetchData = () => {
        fetch("/schedule/ajax/", {
            method: 'POST',
            body: JSON.stringify({
                firstDay: document.getElementById("grid-calendar").firstChild.id,
                lastDay: document.getElementById("grid-calendar").lastChild.id
            }),
            headers: {
                'Accept': 'application/json',
                "X-CSRFToken": this.getCookie('csrftoken'),
                'X-Requested-With': 'XMLHttpRequest'
            },
            credentials: 'include'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                    let fD = document.getElementById("grid-calendar").firstChild.id;
                    let begin = new Date(fD.substring(0, 4), parseInt(fD.substring(5, 7)) - 1, fD.substring(8, 10));
                    console.log(begin);
                    let lD = document.getElementById("grid-calendar").lastChild.id;
                    let end = new Date(lD.substring(0, 4), parseInt(lD.substring(5, 7)) - 1, lD.substring(8, 10));

                    for (let i = begin; i <= end; i.setDate(i.getDate() + 1)) {
                        for (let j = 0; j < result.length; j++) {
                            if (result[j].type === "Residential" && i >= new Date(result[j].start.substring(0, 4), parseInt(result[j].start.substring(5, 7)) - 1, result[j].start.substring(8, 10)) && i <= new Date(result[j].end.substring(0, 4), parseInt(result[j].end.substring(5, 7)) - 1, result[j].end.substring(8, 10))) {
                                document.getElementById(i.toISOString().substring(0, 10)).style.backgroundColor = "#ffc107";
                            }
                            if (result[j].type === "Commercial" && i >= new Date(result[j].start.substring(0, 4), parseInt(result[j].start.substring(5, 7)) - 1, result[j].start.substring(8, 10)) && i <= new Date(result[j].end.substring(0, 4), parseInt(result[j].end.substring(5, 7)) - 1, result[j].end.substring(8, 10))) {
                                document.getElementById(i.toISOString().substring(0, 10)).style.backgroundColor = "#dc3545";
                            }
                        }
                    }
                }
                ,
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    calendarMonthView = () => {
        // let now = new Date(x.getFullYear(), x.getMonth(), x.getDate(), x.getHours() - currentTimeZoneOffsetInHours, x.getMinutes(), x.getSeconds()).toISOString();
        // let prevMonthLastDay = new Date(x.getFullYear(), x.getMonth(), 0, x.getHours() - currentTimeZoneOffsetInHours, x.getMinutes(), x.getSeconds());
        // let currentMonthFirstDay = new Date(x.getFullYear(), x.getMonth(), 1, x.getHours() - currentTimeZoneOffsetInHours, x.getMinutes(), x.getSeconds());
        let currentMonthLastDay = new Date(this.state.GetFullYear, this.state.GetMonth + 1, 0, this.state.GetHours - this.state.CurrentTimeZoneOffsetInHours, this.state.GetMinutes, this.state.GetSeconds);
        let prevMonthLastSunday = (() => {
            let found = false;
            let daysToPrevMonthLastSunday = 0;
            let date;
            while (!found) {
                if (new Date(this.state.GetFullYear, this.state.GetMonth, 0 - daysToPrevMonthLastSunday).getDay() === 0) {
                    date = new Date(this.state.GetFullYear, this.state.GetMonth, 0 - daysToPrevMonthLastSunday, this.state.GetHours - this.state.CurrentTimeZoneOffsetInHours, this.state.GetMinutes, this.state.GetSeconds);
                    found = true;
                }
                daysToPrevMonthLastSunday++;
            }
            return date;
        })();
        if (prevMonthLastSunday !== undefined) {
            let dates = [];
            for (let i = prevMonthLastSunday; i <= currentMonthLastDay; i.setDate(i.getDate() + 1)) {
                dates.push(i.toISOString().substring(0, 10));
            }
            return dates.map((x) =>
                <DayView id={x} date={x}/>
            );
        }
    };

    monthArr = (arg) => {
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return month[arg];
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let fD = document.getElementById("grid-calendar").firstChild.id;
        let begin = new Date(fD.substring(0, 4), parseInt(fD.substring(5, 7)) - 1, fD.substring(8, 10));
        console.log(begin);
        let lD = document.getElementById("grid-calendar").lastChild.id;
        let end = new Date(lD.substring(0, 4), parseInt(lD.substring(5, 7)) - 1, lD.substring(8, 10));

        for (let i = begin; i <= end; i.setDate(i.getDate() + 1)) {
            document.getElementById(i.toISOString().substring(0, 10)).style.backgroundColor = "";
        }
    }

    render() {
        return (
            <div>
                <div className="d-flex">
                    <button id="btn-prev" onClick={this.handlePrev}
                            className="btn btn-primary mr-auto my-auto h-25">Prev
                    </button>
                    <img height="100" src={Logo} alt=""/>
                    <button id="btn-next" onClick={this.handleNext}
                            className="btn btn-primary ml-auto my-auto h-25">Next
                    </button>
                </div>
                <h1>{this.state.GetFullYear + " - " + this.monthArr(this.state.GetMonth)}</h1>
                <div className="grid-day">
                    <p className="h5">Sun</p>
                    <p className="h5">Mon</p>
                    <p className="h5">Tue</p>
                    <p className="h5">Wed</p>
                    <p className="h5">Thu</p>
                    <p className="h5">Fri</p>
                    <p className="h5">Sat</p>
                </div>
                <MonthView className="grid-calendar">
                    {this.calendarMonthView()}
                </MonthView>
                <ul>

                </ul>
            </div>
        );
    }
}