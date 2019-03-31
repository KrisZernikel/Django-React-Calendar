import React, {Component} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from "jquery";
import "bootstrap";
import "popper.js";
import Logo from "./logo.svg";
import Modal from "./components/Modal";
import {Form, Year, Month, Day, Select, CSRFToken} from "./components/Form";
import Calendar from "./components/Calendar"

class App extends Component {

    componentDidMount() {
        $(document).ready(function () {

            function submit() {
                let csrftoken = window.Cookies.get('csrftoken');

                let dayStart = document.forms['job']['dayStart'].value;
                let monthStart = document.forms['job']['monthStart'].value;
                let yearStart = document.forms['job']['yearStart'].value;

                let dayEnd = document.forms['job']['dayEnd'].value;
                let monthEnd = document.forms['job']['monthEnd'].value;
                let yearEnd = document.forms['job']['yearEnd'].value;

                let jobOption = document.forms['job']['jobOption'].value;

                $.ajax({
                    "url": "",
                    "success": function () {
                        alert("works");
                    },
                    "method": "POST",
                    "headers": {"X-CSRFToken": csrftoken},
                    "data": {
                        'dayStart': dayStart,
                        'monthStart': monthStart,
                        'yearStart': yearStart,
                        'dayEnd': dayEnd,
                        'monthEnd': monthEnd,
                        'yearEnd': yearEnd,
                        'jobOption': jobOption
                    }
                });
            }
        });
    }

    render() {
        return (
            <div className="App container-fluid">
                <Calendar/>
                <Modal
                    label="Submit"
                    form="job"
                    id="submit-job"
                >
                    <Form
                        id="job"
                        method="POST"
                    ><CSRFToken/>
                        <div className="d-inline-flex justify-content-between w-100">
                            <Year
                                className="w-50 p-1"
                                name="yearStart"
                            />
                            <Month
                                className="w-25 p-1"
                                name="monthStart"
                            />
                            <Day
                                className="w-25 p-1"
                                name="dayStart"
                            />
                        </div>
                        <div className="d-inline-flex justify-content-between w-100">
                            <Year
                                className="w-50 p-1"
                                name="yearEnd"
                            />
                            <Month
                                className="w-25 p-1"
                                name="monthEnd"
                            />
                            <Day
                                className="w-25 p-1"
                                name="dayEnd"
                            />
                        </div>
                        <Select
                            name="jobOption"
                        >
                            <option>Residential</option>
                            <option>Commercial</option>
                        </Select>
                    </Form>
                </Modal>
                <div>
                    <header className="text-center">
                        <h3>Key</h3>
                        <p>Values</p>
                        <hr className="w-75"/>
                        <button
                            type="button"
                            className="btn btn-primary mx-auto ml-4 my-4 px-5"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                        >
                            Add
                        </button>
                    </header>
                    <div className="d-flex justify-content-center">
                        <h4 className="h6 m-0">Completed</h4>
                        <div className="key-color bg-success ml-1 mr-4"/>
                        <h4 className="h6 m-0">Residential</h4>
                        <div className="key-color bg-warning ml-1 mr-4"/>
                        <h4 className="h6 m-0">Commercial</h4>
                        <div className="key-color bg-danger ml-1"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
