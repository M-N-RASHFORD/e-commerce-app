import React from 'react';

const Login = () => {
    const [state, setState] = React.useState({username: '', password: ''});
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }
    return (
        <div>
            <h2>Welcome to XXX traders</h2>
            <form>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} value={state.username}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={state.password}/>
                <input type="submit" name="submit" placeholder="First name" value="Login"
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetch('https://fakestoreapi.com/auth/login',{
                            method:'POST',
                            body:JSON.stringify({
                                username: state.username,
                                password: state.password
                            })
                        }).then(res=>res.json()).then(data => console.log(data))
                    }}
                    disabled={!state.username ||!state.password}
                />
            </form>
        </div>
    );
}

export default Login;
