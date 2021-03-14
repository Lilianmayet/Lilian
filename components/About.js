import {Button, Text, TouchableOpacity, View} from "react-native";
import members from "./package.json";
import React from "react";

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <View >
        {members.map(memb => (
            <React.Fragment>
                <TouchableOpacity onPress={ () => navigation.navigate('Details', {name: {memb}}) }>
                    <Text style={{color:'black', fontSize: 20}}>{memb[0]}</Text>
                    <Text style={{color:'black', fontSize: 20}}>{memb[1]}</Text>

                </TouchableOpacity>
            </React.Fragment>

        ))}
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')} />

    </View>
</View>