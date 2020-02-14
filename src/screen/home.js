import React, {Component} from 'react'
import Header from '../components/Header'
import global from '../style/global'
import { StatusBar, SafeAreaView, ScrollView, View, Text, Alert } from 'react-native'
import Api from '../services/api'

export default class Home extends Component{
    
    state={
        users: []
    }
    loadUsers = async () =>{
        const response = await Api.get('/?results=20');
        const {docs} = response.results;
        console.log(docs);
    }

    componentDidMount(){
        this.loadUsers();
    }

    leftAction = () => {
        
    }

    rightAction = () => {
        
    }

    render(){
        return(
            <Header title="Home" leftIcon="arrowleft" rightIcon="setting" leftAction={this.leftAction} rightAction={this.rightAction}/>
        );
    }
}