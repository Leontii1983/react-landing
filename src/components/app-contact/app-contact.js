import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import './app-contact.css';
// import React, {useState, useEffect } from 'react';

export default class AppContact extends Component {
/* через управляемые компоненты */

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            textarea: ''
        };
        

        this.formChangeName = (e) => {
            this.setState({ name: e.target.value });
        }

        this.formChangeEmail = (e) => {
            this.setState({ email: e.target.value });
        }

        this.formChangeArea = (e) => {
            this.setState({ textarea: e.target.value });
        }
        
        // state обновлён спец-но, чтобы поля сами очистились
        this.formSubmit = (e) => {
            e.preventDefault();
            console.log(`Username: ${this.state.name}, e-mail: ${this.state.email}, message: ${this.state.textarea}`);
            this.setState({
                name: '',
                email: '',
                textarea: ''
            });
        }
    }
    
    render() {

        const { name, email, textarea } = this.state;

        return(
            <Container className="contact">
            <h1 className="text-center" id="contact">Contact me</h1>
                <Form> 
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>
                            Your name:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Please enter your name" value={name} onChange={this.formChangeName} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>
                            Your email:
                        </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={this.formChangeEmail} />
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            Your message:
                        </Form.Label>
                        <Form.Control as="textarea" rows={5} value={textarea} onChange={this.formChangeArea} />
                    </Form.Group> 
                    <Button className="button-secondary" variant="secondary" id="submit" onClick={this.formSubmit}>Submit</Button>
                </Form>
            </Container>
        );
    }
}


/*
const AppContact = () => {

    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [textarea, setTextarea] = useState('');
    const [textPast, setTextPast] = useState(false);
    const [emailPast, setEmailPast] = useState(false);
    const [textAreaPast, setTextAreaPast] = useState(false);
    const [textEmpty, setTextEmpty] = useState('This is a required field, please enter a name.');
    const [emailEmpty, setEmailEmpty] = useState('This is a required field, please enter an email.');
    const [textAreaEmpty, setTextAreaEmpty] = useState('This is a required field, please enter a message.');
    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
        if(textEmpty || emailEmpty || textAreaEmpty) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [textEmpty, emailEmpty, textAreaEmpty]);


    const formSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${text}, e-mail: ${email}, message: ${textarea}.`);
    }


    const validateText = (e) => {
        setText(e.target.value);
        const re1 = /^[a-zA-Z\-0-9]+$/;
        if(!re1.test(String(e.target.value).toLowerCase())) {
            setTextEmpty('Incorrect form of username.');
        } else {
            setTextEmpty('');
        }
    }


    const validateEmail = (e) => {
        setEmail(e.target.value);
        const re2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re2.test(String(e.target.value).toLowerCase())) {
            setEmailEmpty('Incorrect form of email.');
        } else {
            setEmailEmpty('');
        }
    }


    const validateArea = (e) => {
        setTextarea(e.target.value);
        const re3 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re3.test(String(e.target.value).toLowerCase())) {
            setTextAreaEmpty('');
        } 
    }


    const cursorIsEmpty = (e) => {
        switch(e.target.name) {
            case 'text':
                setTextPast(true)
                break;

            case 'email':
                setEmailPast(true)
                break;

            case 'textarea':
                setTextAreaPast(true)
                break;

            default:
                break;
        }
    }

    return(
        <Container className="contact-form">
        <h1 className="text-center" id="contact">Contact with me</h1>
            <Form> 
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>
                        Your name:
                    </Form.Label>
                    {(textPast && textEmpty) && <div style={{color: 'red'}}>{textEmpty}</div>}
                    <Form.Control type="text" onBlur={(e) => cursorIsEmpty(e)} name="text" value={text} placeholder="Please enter your name" onChange={(e) => validateText(e)} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>
                        Your email:
                    </Form.Label>
                    {(emailPast && emailEmpty) && <div style={{color: 'red'}}>{emailEmpty}</div>}
                    <Form.Control type="email" onBlur={(e) => cursorIsEmpty(e)} name="email" value={email} placeholder="name@example.com" onChange={(e) => validateEmail(e)} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                        Your message:
                    </Form.Label>
                    {(textAreaPast && textAreaEmpty) && <div style={{color: 'red'}}>{textAreaEmpty}</div>}
                    <Form.Control as="textarea" rows={5} onBlur={(e) => cursorIsEmpty(e)} 
                    name="textarea" value={textarea} onChange={(e) => validateArea(e)} />
                </Form.Group> 
                <Button className="button-secondary" variant="secondary" disabled={!formValid} onClick={formSubmit}>Submit</Button>
            </Form>
        </Container>
    );

}

export default AppContact;
*/