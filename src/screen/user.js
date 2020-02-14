import React, {Component} from 'react'
import Header from '../components/Header'
import global from '../style/global'
import { SafeAreaView, Image, Text, View} from 'react-native'
// import { WebView } from 'react-native-webview';
//import Api from '../services/api'



const User = ({navigation}) => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#fafafa'}}>
            <Header title={navigation.state.params.user.login} leftIcon="arrowleft" rightIcon="setting" leftAction={() => navigation.navigate('home')}/>
            <View style={global.userProfile}>
                <View style={global.avatarUser}><Image style={global.avatarUser} source={{uri: navigation.state.params.user.avatar_url}}/></View>
                {/* <Text>{navigation.state.params.user.url}</Text> */}
            </View>
        </SafeAreaView>
        )}

export default User;