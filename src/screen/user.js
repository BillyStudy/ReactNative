import React, {Component, useEffect, useState} from 'react'
import Header from '../components/Header'
import global from '../style/global'
import userStyle from '../style/userProfile'
import Icon from 'react-native-vector-icons/AntDesign'
import { SafeAreaView, Image, Text, View, Alert, Linking } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
// import { WebView } from 'react-native-webview';
//import Api from '../services/api'



const User = ({navigation}) => {

    const [user, setUser] = useState([]);

    const loadUsers = (userName) => {
        //userName = "BillyCoding"
        fetch(`https://api.github.com/users/${userName}`)
          .then( res => res.json() )
          .then( res => {
            
            setUser(res);
            
          })
      }

      const openProfile = () => {
        Linking.canOpenURL(user.html_url).then(supported => {
          if (supported) {
            Linking.openURL(user.html_url);
          } else {
            console.log("Don't know how to open URI: " + user.html_url);
          }
        });
      };
      const openBlog = () => {
        Linking.canOpenURL(user.blog).then(supported => {
          if (user.blog !== "") {
            if (supported) {
                Linking.openURL(user.blog);
              } else {
                console.log("Don't know how to open URI: " + user.blog);
              }
          }else{
              Alert.alert('Github', 'Blog não encontrado')
          }
        });
      };

      useEffect(() => loadUsers(navigation.state.params.user.login), []);
    
    return(
        <SafeAreaView style={global.safe}>
            
            <Header title={user.login} leftIcon="arrowleft" rightIcon="setting" leftAction={() => navigation.navigate('home')}/>
            <ScrollView>
            <View style={userStyle.userProfile}>
                <View style={userStyle.headerUser}>
                    <Image style={userStyle.avatarUser} source={{uri: user.avatar_url}}/>
                    <View style={userStyle.headerUserInfo}>
                        <Text style={userStyle.userName}>{user.name}</Text>
                        <View style={userStyle.headerUserFollow}>
                            
                            <View style={{alignItems: 'center', width: '50%', marginVertical: 5, borderRightWidth: 1, borderColor: '#fafafa'}}>
                                <Text style={{color: '#fafafa', fontFamily: 'Poppins', fontSize:16, fontWeight: 'bold'}}>{user.followers}</Text>
                                <Text style={{fontStyle: 'italic', color: '#ddd', fontSize: 12}}>Followers</Text>
                            </View>
                            <View style={{alignItems: 'center', width: '50%', marginVertical: 5}}>
                                <Text style={{color: '#fafafa', fontFamily: 'Poppins', fontSize:16, fontWeight: 'bold'}}>{user.following}</Text>
                                <Text style={{fontStyle: 'italic', color: '#ddd', fontSize: 12}}>Following</Text>
                            </View>
                            {/* <Text style={{color: '#fafafa', fontFamily: 'Poppins', fontSize:18, fontWeight: 'bold'}}>{user.following}</Text> */}
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <View style={{width: '50%'}}><TouchableOpacity style={[userStyle.button, {backgroundColor: 'black',flexDirection:'row', marginRight: 5}]} onPress={openProfile}>
                        <Icon name="github" size={20} color="#fafafa"/>
                        <Text style={{fontFamily: 'Poppins', color: 'white', fontWeight: 'bold', textAlign: 'center', marginLeft:15}}>Profile</Text>
                    </TouchableOpacity></View>
                    <View style={{width: '50%'}}>
                    <TouchableOpacity style={[userStyle.button, {backgroundColor: '#0083c4', marginLeft: 5}]} onPress={openBlog}>
                        <Text style={{fontFamily: 'Poppins', color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Blog</Text>
                    </TouchableOpacity></View>
                </View>
                
                    
                    <View style={userStyle.infoContainer}>
                        <View style={userStyle.infoTitleContainer}>
                            <Text style={userStyle.infoTitle}>Bio:</Text>
                        </View>
                        <View style={userStyle.infoValueContainer}>
                            <Text style={userStyle.infoValue}>{user.bio}</Text>
                        </View>
                    </View>
                    <View style={userStyle.infoContainer}>
                        <View style={userStyle.infoTitleContainer}>
                            <Text style={userStyle.infoTitle}>Location:</Text>
                        </View>
                        <View style={userStyle.infoValueContainer}>
                            <Text style={userStyle.infoValue}>{user.location}</Text>
                        </View>
                    </View>
                    <View style={userStyle.infoContainer}>
                        <View style={userStyle.infoTitleContainer}>
                            <Text style={userStyle.infoTitle}>Company:</Text>
                        </View>
                        <View style={userStyle.infoValueContainer}>
                            <Text style={userStyle.infoValue}>{user.company}</Text>
                        </View>
                    </View>
                    
            </View>
            </ScrollView>
        </SafeAreaView>
        )}

export default User;