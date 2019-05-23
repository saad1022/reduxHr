import React, { Component } from "react";
import { quoteoftheday } from "../actions";
import { connect } from "react-redux";
import { Card, CardSection, CustomButton } from "./common";
import { Picker } from "react-native";
import { employeeUpdate,employeeCreate } from "../actions";

class EmployeeCreate extends Component {
    
    

    onAddEmployeebtn(phone,email,shift){
        this.props.quoteoftheday(phone,email,shift)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label = "Name" 
                        placeholder = "Zahid"
                        onChangeText={text => this.props.employeeUpdate ({ prop: "name", value: text})}
                    />    
                </CardSection>
                <CardSection>
                    <Input 
                        label = "Phone" 
                        placeholder = "+55-555-5555"
                        onChangeText={text => this.props.employeeUpdate ({ prop: "phone", value: text})}

                    />    
                </CardSection>
                <CardSection />
                <CardSection>
                    <CustomButton>Add Employee</CustomButton>   
                </CardSection>

                <CardSection>
                    <Picker 
                        style={{flex:1}} 
                        selectedValue={this.props.shift} 
                        onValueChange={day => this.props.employeeUpdate({prop: "shift", value})}>
                        <Picker.Item label = "Monday" value = "Monday" />
                        <Picker.Item label = "Tuesday" value = "Tuesday" />
                        <Picker.Item label = "Wednesday" value = "Wednesday" />
                        <Picker.Item label = "Thursday" value = "Thursday" />
                        <Picker.Item label = "Friday" value = "Friday" />
                        <Picker.Item label = "Saturday" value = "Saturday" />
                        <Picker.Item label = "Sunday" value = "Sunday" />
                    </Picker>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = state => {
    const { name , phone ,shift } = state.employeeForm;
    return {
        phone,
        shift,
        name
    };
};

export default connect (mapStateToProps, {employeeUpdate,employeeCreate})(EmployeeCreate);