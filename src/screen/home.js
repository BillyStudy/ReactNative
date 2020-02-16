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
            <SafeAreaView style={global.safe}>
            <Header title="Github" leftIcon="home" rightIcon="search1" leftAction={this.leftAction}/>
            <FlatList data={this.state.users} showsVerticalScrollIndicator={true} onEndReached={this.loadMore} onEndReachedThreshold={0.3} renderItem={({item}) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('user', {user: item})}>
                    <View style={global.userContainer}>
                       
                            <Image source={{uri: item.avatar_url}} style={global.userTumb}/>
                            <View style={global.userInfo}>
                                <Text style={[global.userName]}>{item.login}</Text>
                            </View>
                   
                    </View></TouchableOpacity>
                    )}  />
            </SafeAreaView>
        );
    }
}