import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles'

export default class Sul extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    loadStates = () => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes/4/estados')
        .then( res => res.json() )
        .then( res => {
            this.setState ({
                data: res
            })
        })
    }

    componentDidMount() {
        this.loadStates();
    }

    render() {
        return( 
            <View style={styles.container}> 
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={styles.line}>
                            <Text style={styles.uf}>Estado: {item.nome}</Text>
                            <Text style={styles.uf}>Sigla: {item.sigla}</Text>
                        </View>
                    )}
                    keyExtractor={ item => item.nome }
                />
            </View>
        )
    }
}