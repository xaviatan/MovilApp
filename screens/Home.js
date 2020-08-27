import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { Card, FAB } from 'react-native-paper';

/* function Home()
{
    return (
        <Text>Hola desde Home</Text>
    )
} */

const Home=({navigation})=>{
    const data = [
        {id:'1', nombre:'Manzana',descripcion:'La manzana es el fruto comestible de la especie Malus domestica, llamada comúnmente manzano. Es una fruta pomácea de forma redonda y sabor más o menos dulce, dependiendo de la variedad.',precio:'1,22',stock:'123', categoria:'Fruta',foto:'https://valenciagastronomica.com/wp-content/uploads/2016/12/manzana.jpg'},
        {id:'2', nombre:'Pera',descripcion:'La pera es una fruta comestible que procede del Pyrus communis, un árbol que se conoce coloquialmente como peral común. Existen, de todas maneras, muchas clases de peras, que son producidas por otros árboles del género Pyrus.',precio:'1,20',stock:'456', categoria:'Fruta',foto:'https://media.mercola.com/assets/images/foodfacts/pear-nutrition-facts.jpg'},
        {id:'3', nombre:'Durazno',descripcion:'Su fruto, el melocotón o durazno, contiene una única semilla encerrada en una cáscara dura, el «hueso». Esta fruta, normalmente de piel aterciopelada, posee una carne amarilla o blanquecina de sabor dulce y aroma delicado.',precio:'2,24',stock:'789', categoria:'Fruta',foto:'https://frutapasion.es/wp-content/uploads/2019/09/melocoton-01.jpg'},
        {id:'4', nombre:'Patatas',descripcion:'La patata, también conocida como papa, es un tubérculo que tiene su origen en Sudamérica pero que, en la actualidad, se cultiva en diversas regiones del planeta. ... El tubérculo de la patata, que crece de manera subterránea, alberga los nutrientes de la planta.',precio:'1,50',stock:'987', categoria:'Verdura',foto:'https://ep01.epimg.net/elcomidista/imagenes/2017/02/22/articulo/1487804099_363696_1487804800_sumario_normal.jpg'},
        {id:'5', nombre:'Zanahorias',descripcion:'La zanahoria es una planta herbácea hojas recortadas, flores blancas y raíz puntiaguda, jugosa y comestible, perteneciente a la familia umbelíferas (Umbelliferae), y su nombre botánico es Daucus carota var. sativa. Es la hortaliza más importante y de mayor y consumo de la familia.',precio:'1,70',stock:'857', categoria:'Verdura',foto:'https://conceptodefinicion.de/wp-content/uploads/2014/11/zanahoria.jpg'},
        {id:'6', nombre:'Leche',descripcion:'La leche es una secreción nutritiva de color blanquecino opaco',precio:'0,87',stock:'150', categoria:'Lacteo',foto:'https://www.guioteca.com/nutricion/files/2015/02/la-leche.jpg'},
        {id:'7', nombre:'Cereales',descripcion:'Los cereales son ricos',precio:'1,90',stock:'178', categoria:'Cereal',foto:'https://images-na.ssl-images-amazon.com/images/I/91DlzwrCd5L._AC_SL1500_.jpg'},
        {id:'8', nombre:'Galleta',descripcion:'Las galletas son ricas y poco nutritivas',precio:'1,50',stock:'120', categoria:'Reposteria',foto:'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2014/04/receta-galletas-caseras.jpg'},
    ]
    const renderList = ((item)=>{
        return (
            <Card 
            style={ styles.mycard }
            onPress={() => navigation.navigate('Producto',{ item })}
            >
                <View style={ styles.cardView }>
                    <Image 
                        style={{ width:60, height:60, borderRadius:30 }}
                        source={{ uri: item.foto  }}

                    />
                    <View style={{ marginLeft:10 }}>
                        <Text style={ styles.text }>{ item.nombre }</Text>
                        <Text style={ styles.text }>Categoria: { item.categoria }</Text>
                        <Text style={ styles.text }>Precio: { item.precio }$.</Text>
                    </View>
                </View>
            </Card>
        )
    })
    return(
        <View style={{ flex:1 }}>
            <FlatList 
                data = { data }
                renderItem = {({item}) => {
                    return renderList(item)
                }}
                keyExtractor = { item => `${item.id}` }
            />

            <FAB
                onPress={() => navigation.navigate('CrearProducto')}
                style={styles.fab}
                small={ false }
                icon="plus"
                theme={{ colors:{accent:"#006aff"} }}
            />

            {/* { renderList } */}
        </View>
        
        
   
    )
}

const styles = StyleSheet.create({
    mycard:{
       margin:5,
       padding:5 
    },
    cardView:{
        flexDirection:'row',
        padding:6
    },
    text:{
        fontSize:20,
        
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home