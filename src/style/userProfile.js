const userProfile = {

    headerUser:{
        flexDirection: 'row',
        marginBottom: 20,
        alignItens: 'center'
    },
    avatarUser:{
        width: 90, 
        height: 90,
        borderRadius:1000,
        alignSelf: 'flex-start',
        elevation:15,
        backgroundColor: 'white',
    },

    headerUserInfo:{
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 25,
        //backgroundColor: 'green',
        width: '72%'
    },

    headerUserFollow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    userName:{
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#fafafa',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },



    infoContainer:{
        backgroundColor: '#efefef',
        marginVertical: 5,
        borderRadius: 5,
        elevation: 2 ,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 2,
    },
    infoTitleContainer:{
        //backgroundColor: 'cyan',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    infoTitle:{
        fontWeight: 'bold'
    },
    infoValueContainer:{
        //backgroundColor: 'yellow',
        paddingHorizontal: 20,
        paddingVertical: 10,
        maxWidth: '90%'
    },
    infoValue:{
        fontStyle: 'italic'
    },

    
    userProfile:{
        //backgroundColor: 'cyan',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItens: 'center'
        
    },
    
    button:{
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: 'white',
    }
    
   
}

export default userProfile;