import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import image1 from './-images/image1.jpg';
import image2 from './-images/image2.jpg';
import image3 from './-images/image3.jpg';
import image4 from './-images/image4.jpg';
import image5 from './-images/image5.jpg';
import image6 from './-images/image6.jpg';
import image7 from './-images/image7.jpg';
import image8 from './-images/image8.jpg';
import image9 from './-images/image9.jpg';
import image10 from './-images/image10.jpg';
import image11 from './-images/image11.jpg';
import image12 from './-images/image12.jpg';
import image13 from './-images/image13.jpg';
import image14 from './-images/image14.jpg';
import image15 from './-images/image15.jpg';
import image16 from './-images/image16.jpg';
import image17 from './-images/image17.jpg';
import image18 from './-images/image18.jpg';
import image19 from './-images/image19.jpg';
import image20 from './-images/image20.jpg';
import image21 from './-images/image21.jpg';
import image22 from './-images/image22.jpg';
import image23 from './-images/image23.jpg';
import image24 from './-images/image24.jpg';
import image25 from './-images/image25.jpg';
import image26 from './-images/image26.jpg';
import image27 from './-images/image27.jpg';
import image28 from './-images/image28.jpg';
import image29 from './-images/image29.jpg';
import {Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarNav, NavLink, NavBtn} from './-components/Navbar';
import {
    Carousel,
    CarouselIndicators,
    CarouselInner,
    CarouselItem,
    CarouselControl,
    CenterText
} from "./-components/Carousel";
import Jumbotron from './-components/Jumbotron';
import {CardDeck, Card, CardImg, CardBody, CardTitle, CardText} from './-components/CardDeck';
import {CardColumns} from "./-components/CardColumns";
import CustomCard from "./-components/CustomCard";
import Modal from "./-components/Modal";
import {Form, FirstName, LastName, Email, City, Zip, Textarea, Phone} from "./-components/Form";
class App extends Component {

    render() {
        return (
            <div className="App">
			<Navbar className="navbar-dark bg-dark position-fixed z-1 w-100">
                    <NavbarBrand href="/">Duehring Masonry, LLC</NavbarBrand>
                    <NavbarToggle/>
                    <NavbarCollapse>
                        <NavbarNav className="ml-auto mt-2 mt-lg-0 text-center">
                            <NavLink href="/">Services</NavLink>
                            <NavLink href="/">Gallery</NavLink>
                            <NavBtn className="btn-outline-light" href="/">Estimate</NavBtn>
                        </NavbarNav>
                    </NavbarCollapse>
                </Navbar>
                <Carousel>
                    <CarouselIndicators/>
                    <CarouselInner>
                        <CarouselItem
                            src={image4}
                            className="active"
                        />
                        <CarouselItem
                            src={image5}
                        />
                        <CarouselItem
                            src={image6}
                        />
                    </CarouselInner>
                    <CarouselControl/>
                    <CenterText className="text-center text-white">
                        <h1 className="display-4">Duehring Masonry, LLC</h1>
                        <p className="lead">Milwaukee, WI</p>
                    </CenterText>
                </Carousel>
               
                <main className="container-fluid" role="main">
                    <article>
                        <Jumbotron className="jumbotron-fluid text-center">
                            <h1 className="display-4">Services</h1>
                            <p className="lead">Chimney repair | Tuckpointing | Fireplace and mantel stone work | Wall
                                restoration | Caulking and patios, stoups and driveways</p>
                        </Jumbotron>
                        <CardDeck>
                            <Card id="residential">
                                <CardImg
                                    src={image4}
                                />
                                <CardBody>
                                    <CardTitle className="h1">Residential</CardTitle>
                                    <CardText>Building your next escape requires the highest quality material at a cost
                                        you desire. Summer in Wisconsin awaits, let's imagine together your next great
                                        patio for your friend's and family to enjoy.</CardText>
                                    <CardText>As summer fun flies by, winter is here before you know it. A high-rise
                                        fireplace maybe what you seek. There's nothing like a toast nearby a toasty fire
                                        with friends and family.</CardText>
                                </CardBody>
                            </Card>
                            <Card id="commercial">
                                <CardImg
                                    src={image1}
                                />
                                <CardBody>
                                    <CardTitle className="h1">Commercial</CardTitle>
                                    <CardText>Every venture brings new challenges, my pride in work lays the ground work
                                        that'll stand the test of time. As a startup and proud owner, I will use all of
                                        my resources to keep cost down and quality outstanding.</CardText>
                                </CardBody>
                            </Card>
                            <Card id="restoration">
                                <CardImg
                                    src={image2}
                                />
                                <CardBody>
                                    <CardTitle className="h1">Restoration</CardTitle>
                                    <CardText>When the unexpected happens, don't sweat it because from damaged to
                                        fixed, Duehring Masonry has serviced it all.</CardText>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </article>
                    <article>
                        <Jumbotron className="jumbotron-fluid text-center">
                            <h1 className="display-4">Gallery</h1>
                            <p className="lead">Historic stone restorations and completed masonry services</p>
                        </Jumbotron>
                        <CardColumns>
                            <CustomCard
                                before={image2}
                                after={image3}
                            />
                            <CustomCard
                                before={image9}
                                after={image7}
                            />
                            <CustomCard
                                before={image15}
                                after={image14}
                            />
                            <CustomCard
                                before={image21}
                                after={image4}
                            />
                            <CustomCard
                                before={image16}
                                after={image17}
                            />
                            <CustomCard
                                before={image26}
                                after={image27}
                            />
                            <Card>
                                <CardImg
                                    src={image12}
                                />
                            </Card>
                            <Card>
                                <CardImg
                                    src={image20}
                                />
                            </Card>
                        </CardColumns>
                    </article>
                    <Modal
                        title="Estimate"
                        form="estimate"
                        type="submit"
                        label="Submit"
                    >
                        <Form id="estimate">
                            <FirstName
                                valid="Looks good!"
                                invalid="Please enter your first name"
                            />
                            <LastName
                                valid="Looks good!"
                                invalid="Please enter your last name"
                            />
                            <Email
                                valid="Looks good!"
                                invalid="Please enter your email"
                            />
                            <Phone
                                valid="Looks good!"
                                invalid="Please enter your phone number"
                            />
                            <City
                                valid="Looks good!"
                                invalid="Please enter your city"
                            />
                            <Zip
                                valid="Looks good!"
                                invalid="Please enter a valid zip"
                            />
                            <Textarea
                                label="Request"
                                valid="Looks good!"
                                invalid="Please enter your request"
                            />
                        </Form>
                    </Modal>
                   
                </main>
                <hr/>
                <footer>
                    <section className="d-flex justify-content-around flex-row text-center">
                        <div>
                            <h5>Residential</h5>
                            <ul>
                                <li><a href="#residential">Patios</a></li>
                                <li><a href="#residential">Fireplaces</a></li>
                                <li><a href="#residential">Chimneys</a></li>
                                <li><a href="#residential">Garages</a></li>
                                <li><a href="#residential">Driveways</a></li>
                                <li><a href="#residential">Steps</a></li>
                                <li><a href="#residential">Stoups</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5>Commercial</h5>
                            <ul>
                                <li><a href="#commercial">Doors</a></li>
                                <li><a href="#commercial">Structural</a></li>
                                <li><a href="#commercial">Foundation</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5>Restoration</h5>
                            <ul>
                                <li><a href="#restoration">Walls</a></li>
                                <li><a href="#restoration">Chimneys</a></li>
                                <li><a href="#restoration">Basement</a></li>
                                <li><a href="#restoration">Waterproofing</a></li>
                                <li><a href="#restoration">Fireplaces</a></li>
                                <li><a href="#restoration">Historic</a></li>
                                <li><a href="#restoration">Powerwash</a></li>
                            </ul>
                        </div>
                    </section>
                    <hr/>
                    <section className="d-flex justify-content-center flex-column text-center">
                        <h6>Duehring Masonry, LLC</h6>
                        <p>
                            <small>© 2018 DuehringMasonryLLC.com</small>
                        </p>
                    </section>
                </footer>
            </div>
        );
    }
}

export default App;
