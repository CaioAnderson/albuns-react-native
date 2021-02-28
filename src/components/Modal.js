import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardItem from './CardItem';

function getURL(musicas) {
    const baseURL = 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + musicas;
    return baseURL;
}

export default function Modal({ album }) {

    const { tracks } = album.links;

    const navigation = useNavigation();

    const [listTracks, setListTracks] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function GetDados() {
            fetch(getURL(tracks)).then((response) => response.json())
                .then((json) => {
                    const { tracks } = json;
                    setListTracks(tracks);
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }
        GetDados();
    }, [listTracks])

    return (
        <View style={styles.container}>
            <CardItem>
                <View style={styles.header}>
                    <Text style={styles.textHeaderArtist}>.:: {album.artist} ::.</Text>
                    <Text>Lista de musicas</Text>
                </View>

            </CardItem>

            <CardItem >
                {loading ?
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='#000' />
                    </View> :
                    <FlatList data={listTracks} keyExtractor={({ id }, index) => id}
                        style={styles.areaTracks}
                        renderItem={({ item, index }) => {
                            return (
                                <Text>{index + 1} - ({item.duration}) - {item.title}</Text>
                            );
                        }} />
                }
            </CardItem>

            <CardItem >
                <View style={styles.areaButton}>
                    <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                        <Text style={styles.textButton}>Volte</Text>
                    </TouchableOpacity>
                </View>

            </CardItem>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 20
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10

    },
    textHeaderArtist: {
        fontWeight: 'bold',
        fontSize: 16
    },
    areaTracks: {
        marginVertical: 10,
        marginHorizontal: 8
    },
    areaButton: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
});