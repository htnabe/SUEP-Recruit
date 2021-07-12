import React from 'react';
import { View, Text, Button } from 'react-native';

export default function JobRetails({ navigation }) {
        return (
            <View>
            <Text>Retails of the job screen</Text>
            <Button
              title="Go to ApplyForm"
              onPress={() => navigation.navigate('Apply')}
            />
            <Button
               title="Go to InquiryForm"
               onPress={() => navigation.navigate('Inquiry')}
            />
            </View>
        );
}
