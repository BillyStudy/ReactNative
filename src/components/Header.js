import React, {Component} from 'react'
import global from '../style/global'
import { StatusBar, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default class Home extends Component{
    
    render(){
        return(
            <SafeAreaView>
                <StatusBar barStyle="dark-content" backgroundColor="#fafafa"/>
                <View style={global.header}>
                    <TouchableOpacity onPress={this.props.leftAction}>
                        <Icon name={this.props.leftIcon} color="#555" size={30}/>
                    </TouchableOpacity>
                    <Text style={global.headerTitle}>{this.props.title}</Text>
                    <TouchableOpacity onPress={this.props.rightAction}>
                        <Icon name={this.props.rightIcon} color="#555" size={30}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}