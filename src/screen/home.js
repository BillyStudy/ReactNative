import React, {Component} from 'react'
import Header from '../components/Header'
import global from '../style/global'
import { StatusBar, SafeAreaView, ScrollView, View, Text, Alert, FlatList, TouchableOpacity, Image} from 'react-native'
//import Api from '../services/api'

export default class Home extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            users: [],
            page: 1
        }
        
      }
    loadUsers = () => {
        fetch(`https://api.github.com/users?since=${this.state.page}&per_page=10`)
          .then( res => res.json() )
          .then( res => {
            this.setState({ users: res || [] })
          })
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
            <SafeAreaView>
            <Header title="Home" leftIcon="arrowleft" rightIcon="setting" leftAction={this.leftAction} rightAction={this.rightAction}/>
            <FlatList data={this.state.users} showsVerticalScrollIndicator={true} renderItem={({item}) => (
                
                    <View style={global.userContainer}>
                       

                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', width: '80%'}}>
                            <Text style={global.userName}>{item.login}</Text>
                            </View>
                   
                    </View>  
                    )}  />
            </SafeAreaView>
        );
    }
}