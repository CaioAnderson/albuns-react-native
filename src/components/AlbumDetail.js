import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import Card from './Card';
import CardItem from './CardItem';

export default function Album({ album }) {

    const navigation = useNavigation();

    function openModalVerMusicas() {
        navigation.navigate('Album', { album })
    }

    return (
        <Card>
            <CardItem>
                <View style={styles.headerCard}>
                    <Image style={{ height: 50, width: 50 }}
                        source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + album.image }} />
                    <View style={styles.artist}>
                        <Text style={styles.textArtist}>{album.artist}</Text>
                        <Text>{album.name}</Text>
                    </View>
                </View>
            </CardItem>

            <CardItem>
                <View style={styles.areaImageAlbum}>
                    <Image style={{ height: 200, width: 200 }}
                        source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + album.image }} />
                </View>

            </CardItem>

            <CardItem>
                <View style={styles.areaButtons}>
                    <TouchableOpacity style={styles.button} onPress={openModalVerMusicas}>
                        <Text style={styles.textButton}>Ver musicas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Me compre!</Text>
                    </TouchableOpacity>
                </View>

            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerCard: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    artist: {
        height: 80,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textArtist: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    areaImageAlbum: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    areaButtons: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderColor: '#000',
        borderWidth: 0.5,
        width: 320,
        height: 40,
        elevation: 2

    },
    textButton: {
        fontWeight: 'bold',
    }
})
