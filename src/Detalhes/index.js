import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Detalhes(props) {
  return(
    <View style={styles.constainer}>
      <View style={styles.modalContainer}>

        <TouchableOpacity style={styles.BTNvoltar} onPress={props.voltar} >
          <Text style={styles.textVoltar}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse :</Text>
        <Text style={styles.descricao}>{props.filme.sinopse}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textVoltar:{
    color: '#fff',
    fontSize: 16
  },
  modalContainer:{
    width: '90%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius:5
  },
  BTNvoltar:{
    borderTopLeftRadius: 5,
    borderTopRightRadius:5,
    backgroundColor: '#e52246',
    padding: 10
  },
  titulo:{
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold'
  },
  sinopse:{
    color: '#fff',
    marginBottom: 8,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  descricao:{
    color: '#fff',
    marginBottom: 8,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18
  }
})