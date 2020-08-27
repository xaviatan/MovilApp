import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons'; 

const Producto=(props)=>{

    const {id,nombre,descripcion,precio,stock,categoria,foto} = props.route.params.item

    return(
        <View style={ styles.root }>
            <LinearGradient
            colors={['#006aff','#d1efff']}
            style={{ height:'20%' }}
            />
            <View style={{ alignItems:'center' }}>
                <Image 
                style={{ width:150,height:150,borderRadius:150/2,marginTop:-75 }}
                source={{ uri: foto }}
                />
            </View>
            <View style={{ alignItems:'center',margin:15 }}>
                <Title>{ nombre }</Title>
                <Text style={{ fontSize:17 }}>{ categoria }</Text>
            </View>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="description" size={35} color="#006aff" />
                    <Text style={styles.myText}>{ descripcion }</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <Entypo name="shop" size={35} color="#006aff" />
                    <Text style={styles.myText}>{ stock }</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={35} color="#006aff" />
                    <Text style={styles.myText}>{ precio } $.</Text>
                </View>
            </Card>
            <View style={{ flexDirection:'row',justifyContent:'space-around',padding:10 }}>
                <Button 
                style={ styles.inputStyle }
                icon='account-edit'
                mode='contained'
                theme={ theme }
                onPress={ () => setModal(true) }
                >
                    Editar
                </Button>
                <Button 
                style={ styles.inputStyle }
                icon='delete'
                mode='contained'
                theme={ theme }
                onPress={ () => setModal(true) }
                >
                    Eliminar Empleado
                </Button>
            </View>
        </View>
        
    )
}

const theme = {
    colors:{
        primary:'#006aff'
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    myCard:{
        margin:5
    },
    cardContent:{
        flexDirection:'row',
        padding:7
    },
    myText:{
        fontSize:17,
        margin:4,
        marginLeft:8
    }
})

export default Producto