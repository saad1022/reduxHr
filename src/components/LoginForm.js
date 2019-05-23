import React, { Component } from "react";
import { CustomButton, Card, CardSection, Input, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { connect } from "react-redux";

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onLoginUser(email , password) {
        console.log("Email : "+email+ " Password : "+password);
        this.props.loginUser(email , password);
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        placeholder = "user@gmail.com"
                        label = "Email : "
                        onChangeText = {this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder = "Password"
                        secureTextEntry
                        label = "Password : "
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        
                    />
                </CardSection>
                {/* onPress = { () => this.onLoginUser(this.props.email,this.props.password)} */}
                <CardSection>
                    <CustomButton onPress = { () => this.onLoginUser(this.props.email,this.props.password)} >Login</CustomButton>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect (mapStateToProps, {emailChanged,passwordChanged,loginUser})(LoginForm);