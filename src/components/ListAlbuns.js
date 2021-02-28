import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import AlbumDetail from '../components/AlbumDetail';

const albunsURL = 'https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json';

export default function ListAlbuns() {

    const [listAlbuns, setListAlbuns] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        function GetDados() {
            fetch(albunsURL).then((response) => response.json())
                .then((json) => setListAlbuns(json.albums))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }
        GetDados();
    }, [listAlbuns])

    return (
        <View style={styles.container}>
            {loading ?
                <View style={styles.areaActivityIndicator}>
                    <ActivityIndicator size='large' color='#000' />
                </View>
                :
                <View style={styles.areaCards}>
                    <FlatList data={listAlbuns} keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => {
                            return (
                                <AlbumDetail album={item} />
                            );
                        }} />
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    areaActivityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaCards: {
        paddingTop: 10,
    }
})