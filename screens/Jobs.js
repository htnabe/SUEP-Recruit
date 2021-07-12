import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Jobs({ navigation }) {
        return (
            <View>
            <Text>Jobs Screen</Text>
            <Button
        title="Go to Job-Details"
        onPress={() => navigation.navigate('Details')}
      />
            </View>
        );
}
