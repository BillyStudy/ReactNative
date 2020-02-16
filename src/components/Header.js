import React, {Component} from 'react'
import global from '../style/global'
import { StatusBar, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default class Home extends Component{
    
    render(){
        return(
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor="#222"/>
                <View style={global.header}>
                    <TouchableOpacity onPress={this.props.leftAction}>
                        <Icon name={this.props.leftIcon} color="#fafafa" size={30}/>
                    </TouchableOpacity>
                    <Text style={global.headerTitle}>{this.props.title}</Text>
                    <TouchableOpacity onPress={this.props.rightAction}>
                        <Icon name={this.props.rightIcon} color="#fafafa" size={30}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}