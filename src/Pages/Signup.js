import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '', lastname: '', email: '', password: '', username: '', city: '', street: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { firstname,email, lastname, password, username, city, street } = this.state;
        const user = {
            email: email, username: username, password: password,
            name: {
                firstname: firstname, lastname: lastname
            },
            address: {
                city: city,street: street, number: null, zipcode: 0
            },
            geolocation: {
                lat: null, long: null
            },
            phone: '0750839851'
        };
        fetch('https://fakestoreapi.com/users', {
            method: "POST"
            ,
            body: JSON.stringify(user)
        }).then(resp => resp.json()).then(data => console.log(data));
        this.setState({
            firstname: '', lastname: '', email: '', password: '', username: '', city: '', street: ''
        });
    }
    render(){
        const { firstname, email, lastname, password, username, city, street } = this.state;
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="firstname" placeholder="First name" onChange={this.handleChange} value={firstname}/>
                        <input type="text" name="lastname" placeholder="Last name" onChange={this.handleChange} value={lastname}/>
                    </div>
                    <div>
                        <p>Name</p>
                        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={email}/>
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password}/>
                        <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={username}/>
                    </div>
                    <div>
                        <p>Address</p>
                        <input type="text" name="city" placeholder="City" onChange={this.handleChange} value={city}/>
                        <input type="text" name="street" placeholder="Street" onChange={this.handleChange} value={street}/>
                    </div>
                    <button type="button" onClick={this.handleSubmit}
                        disabled={!firstname|| !email|| !lastname|| !password|| !username|| !city|| !street}
                    >Signup</button>
                </form>
            </div>
        );
    }
}

export default Signup;
