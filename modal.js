import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Modal, Button } from 'react-native';

export default function App() {
    const [isModalVisible, setIsModelVisible] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            <View>
                <StatusBar
                    backgroundColor="plum"
                />
            </View>
            <Button
                title="Press"
                onPress={() => setIsModelVisible(true)}
                color="midnightblue"
            />

            <Modal
                visible={isModalVisible}
                onRequestClose={() => setIsModelVisible(true)}
            >
                <View style={{ flex: 1, backgroundColor: "Lightblue", padding: 60 }}>
                    <Text>Modal Content</Text>
                    <Button
                        title='Close'
                        color="midnightblue"
                        onPress={() => setIsModelVisible(false)}
                    />
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
    },
});
