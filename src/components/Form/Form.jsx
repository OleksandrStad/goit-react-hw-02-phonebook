import { Component } from 'react';
import { nanoid } from "nanoid";
import { Btn, Form } from "./Form.styled"

export class ContactForm extends Component {
    state = {
        name: '',

    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value, });
    };
    handleSubmit = e => {
        e.preventDefault()

        const contact = {
            id: nanoid(),
            name: this.state.name,

        }

        this.props.onSubmit(contact)

        this.setState({
            name: '',

        })
    };

    render() {
        return (
            < div >
                <Form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        <p>Name</p>
                        <input
                            type="text"
                            name='name'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian,
               Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleChange}
                            value={this.state.name}
                        />

                    </label>

                    <Btn type="submit" >add contact</Btn >
                </Form>
            </div >
        )
    }



}