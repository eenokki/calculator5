import React from'react';
import { View, Text,FlatList,StyleSheet } from'react-native';

export default function History({ route, navigation }) {
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.list}>History:</Text>

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =><Text>{item.key}</Text>}
            />
        </View>);
};

const styles = StyleSheet.create({
    container: {

        marginTop: 70,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        marginTop: 30,
    }
});
