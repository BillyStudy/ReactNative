const global = {

        header:{
            padding: 20,
            elevation:5,
            backgroundColor: '#222',
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 5,
            alignItens: 'center',
        },
        safe:{
            backgroundColor: '#444', 
            flex: 1
        },

        headerTitle:{
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            textAlign: 'center',
            fontSize: 18,
            color: '#fafafa'
        },

        userContainer:{
            paddingVertical:10,
            paddingHorizontal: 20,
            elevation:15,
            backgroundColor: '#efefef',
            marginVertical: 6,
            marginHorizontal: 10,
            borderRadius:5,
            flexDirection: 'row',
            borderWidth: 3, borderColor: 'black'
        },
        
        userTumb:{
            width: 40,
            height:40,
            borderRadius:360,
            marginRight: 20
        },
        userName:{
            fontWeight: 'bold',
             textTransform: 'uppercase',
             fontFamily: 'Poppins'
        },

        infoContainer:{
            backgroundColor: '#efefef',
            padding: 5,
            marginVertical: 10,
            borderRadius: 5,
            elevation: 2
           
        },
        userInfo:{
            flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' ,
            
        },

    
}

export default global;