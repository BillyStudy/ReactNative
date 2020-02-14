import React, {Component} from 'react'
import Header from '../components/Header'
import global from '../style/global'
import { StatusBar, SafeAreaView, ScrollView, View, Text, Alert, FlatList, TouchableOpacity, Image, TouchableHighlight} from 'react-native'
//import Api from '../services/api'

export default class Home extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            users: [],
            page: 100
        }
        
      }
    loadUsers = async(page) => {
        await fetch(`https://api.github.com/users?since=${page}&per_page=15`)
          .then( res => res.json() )
          .then( res => {
            this.setState({ users: [...this.state.users, ...res] || [] })
          })
      }

    componentDidMount(){
        this.loadUsers(this.state.page);
    }

    leftAction = () => {
        
    }

    rightAction = () => {
        this.props.navigation.navigate('user');
    }
    loadMore = () => {
        const {page} = this.state;

        if(page === 850) return;
        
        const pageNumber = page + 15;
        this.setState({page: pageNumber});
        this.loadUsers(pageNumber);
    }


    render(){
        return(
            <SafeAreaView>
            <Header title="Home" leftIcon="home" rightIcon="user" leftAction={this.leftAction} rightAction={this.rightAction}/>
            <FlatList data={this.state.users} showsVerticalScrollIndicator={true} onEndReached={this.loadMore} onEndReachedThreshold={0.1} renderItem={({item}) => (
                
                    <View style={global.userContainer}>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate('user', {user: item})}>

                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', width: '80%'}}>
                            <Text style={global.userName}>{item.login}</Text>
                            </View></TouchableOpacity>
                   
                    </View>
                    )}  />
            </SafeAreaView>
        );
    }
}