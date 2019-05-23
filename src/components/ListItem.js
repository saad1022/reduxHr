import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Card, CardSection, CustomButton } from "./common";
import { Text, UIManager,Platform,TouchableWithoutFeedback,View,LayoutAnimation } from "react-native";


class ListItem extends Component {
    
    componentWillUpdate(){
        if(Platform.OS === "android"){
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
            LayoutAnimation.spring();
        }
    }

    renderDescription() {
        
        const {library, expanded} = this.props;

        if(expanded) {
            return (
                <CardSection>
                    <Text style={{flex:1}}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        
        const {titleStyle} = styles;
        const {id,title} = this.props.library;

        return(
            <TouchableWithoutFeedback onPress = {() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 10,
        paddingRight:10
    }
};

const mapStateToProps = (state,ownProps) => {
    
    const expanded = state.selectedLibraryID === ownProps.library.id;

    return { expanded };

}

export default connect(mapStateToProps,actions)(ListItem);
