import React from 'react';
import { View, Text, Button } from 'react-native';

export default function JobRetails({ navigation }) {
        return (
            <View>
            <Text>This is Inquiry Form</Text>
            <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
            </View>
        );
}
