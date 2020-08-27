import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

const CrearProducto = () =>{
    const [Nombre, setNombre] = useState("")
    const [Email, setEmail] = useState("")
    const [Telefono, setTelefono] = useState("")
    const [Salario, setSalario] = useState("")
    const [Foto, setFoto] = useState("")
    const [modal, setModal] = useState(false)
    return(
        <View style={ styles.root }>
            <TextInput
            label="Nombre"
            value={Nombre}
            style={ styles.inputStyle }
            theme={ theme }
            mode='outlined'
            onChangeText={text => setNombre(text)}
            />
            <TextInput
            label="Email"
            value={Email}
            style={ styles.inputStyle }
            theme={ theme }
            mode='outlined'
            onChangeText={text => setEmail(text)}
            />
            <TextInput
            label="Telefono"
            value={Telefono}
            keyboardType='number-pad'
            style={ styles.inputStyle }
            theme={ theme }
            mode='outlined'
            onChangeText={text => setTelefono(text)}
            />
            <TextInput
            label="Salario"
            value={Salario}
            keyboardType='number-pad'
            style={ styles.inputStyle }
            theme={ theme }
            mode='outlined'
            onChangeText={text => setSalario(text)}
            />

            <Button 
            style={ styles.inputStyle }
            icon='upload'
            mode='contained'
            theme={ theme }
            onPress={ () => setModal(true) }
            >
                Subir Imagen
            </Button>
            <Button 
            style={ styles.inputStyle }
            icon='content-save'
            mode='contained'
            theme={ theme }
            onPress={ () => console.log('saved') }
            >
                Guardar
            </Button>

            <Modal
            animationType='slide'
            transparent={ true }
            visible = { modal }
            onRequestClose={ () => { setModal(false) } }
            >
                <View style={ styles.modalView }>
                    <View style={ styles.modalBottonView }>
                        <Button
                        icon='camera'
                        theme={ theme }
                        mode='contained'
                        onPress={() => console.log('presses')}
                        >
                            Camara
                        </Button>
                        <Button
                        icon='image-area'
                        theme={ theme }
                        mode='contained'
                        onPress={() => console.log('presses')}
                        >
                            Galeria
                        </Button>
                    </View>
                    <Button
                    theme={ theme }
                    onPress={() => setModal(false)}
                    >
                        Cancelar
                    </Button>
                </View>
            </Modal>

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
    inputStyle:{
        margin:10
    },
    modalView:{
        position:'absolute',
        bottom:2,
        width:'100%',
        backgroundColor:'white'
    },
    modalBottonView:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
})

export default CrearProducto