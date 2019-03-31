import React, {Component} from 'react';

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
            <form id={this.props.id} className={"needs-validation " + this.props.className} noValidate>
                {this.props.children}
            </form>
        );
    }
}

export const FirstName = (props) => {
    return (
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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


/*


 */