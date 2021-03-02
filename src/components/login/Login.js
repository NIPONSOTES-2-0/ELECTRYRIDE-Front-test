import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './styles/Login.css'


export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {email:"",password:""};
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const email = "prueba@gmail.com";
        const pass = "hola123";
        if (this.state.email === email && this.state.password === pass) {
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("password", this.state.password);
            alert("Prototipo logueo correcto");
            document.location.href = "/viaje";
          } else {
              alert("Usuario o Contraseña incorrecta");
          }
    }
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <div className= "base-container" ref={this.props.containerRef}>
                    <Typography variant="h3">login</Typography>
                    <div className = "content">
                        <form className="form" onSubmit={this.handleSubmit}>
                            <Avatar className="avatar">
                                <LockIcon />
                            </Avatar>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email"   onChange={this.handleChange} autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    onChange={this.handleChange}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="submit"
                                >
                                    Login
                            </Button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}