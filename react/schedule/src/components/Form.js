import React, {Component} from 'react';
import * as $ from "jquery";

export class Form extends Component {
    componentDidMount() {
        (function () {
            'use strict';
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();
    }

    render() {
        return (
            <form id={this.props.id} className={"needs-validation " + this.props.className} method={this.props.method} action={this.props.action} noValidate>
                {this.props.children}
            </form>
        );
    }
}

export const FirstName = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom01">First name</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const LastName = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom02">Last name</label>
            <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const City = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom03">City</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const State = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom04">State</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="State" required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const Zip = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom05">Zip</label>
            <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const Textarea = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom06">{props.label}</label>
            <textarea className="form-control" id="validationCustom06" rows="3" required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const Email = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom07">Email</label>
            <input type="email" className="form-control" id="validationCustom07" placeholder="Email" required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const Phone = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom08">Phone</label>
            <input type="tel" className="form-control" id="validationCustom08" placeholder="Phone" required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const Year = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom09">Year</label>
            <input type="number" className="form-control w-100" id="validationCustom08" placeholder="Year" min="2018" max="2020" name={props.name} required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const Month = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom10">Month</label>
            <input type="number" className="form-control w-100" id="validationCustom08" placeholder="Month" min="1" max="12" name={props.name} required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const Day = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom11">Day</label>
            <input type="number" className="form-control w-100" id="validationCustom08" placeholder="Day" min="1" max="31" name={props.name}  required/>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

export const Select = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor="validationCustom12"/>
            <select className="custom-select" id="validationCustom12" name={props.name} required>
                {props.children}
            </select>
            <div className="valid-feedback">
                {props.valid}
            </div>
            <div className="invalid-feedback">
                {props.invalid}
            </div>
        </div>
    );
};

function getCookie(name) {
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
}

var csrftoken = getCookie('csrftoken');

export const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};