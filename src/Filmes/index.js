import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../Detalhes';


export default function Filmes({data}) {
const [visiblemodal, setVisibleModal] = useState(false)

  return (
      <View>
        <View style={styles.card}>
          <Text style={styles.titulo}>{data.nome}</Text>

          <Image 
            style={styles.capa}
            source={{ uri: data.foto}}
          />

          <View style={styles.areaBotao}>
            <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
              <Text style={styles.botaoText}>Leia mais!</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal transparent={true} animationType='slide' visible={visiblemodal}>
          <Detalhes filme={data} voltar={() => setVisibleModal(false)}/>
        </Modal>
      </View>

  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#fff',
    margin: 15,
    elevation: 2
  },
  capa:{
    height: 250,
    zIndex: 2
  },
  titulo:{
    padding: 15,
    fontSize: 18
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 4
  },
  botao:{
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 2,
    alignItems: 'center'

  },
  botaoText:{
    color: '#fff',
    fontSize: 18
  }
})