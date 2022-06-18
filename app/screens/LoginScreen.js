import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

// components
import { AppWrapper, AppTextField, AppButton } from '../components'

const Screen = ({navigation}) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();

    const handlePhoneNumber = e => {
        setPhoneNumber(e)
    }

    return (

        <AppWrapper style={{ backgroundColor: 'white', flex: 1 }}>

            <AppTextField
                roundConners={true}
                placeholder="Enter email"
                value={phoneNumber}
                onChangeText={e => handlePhoneNumber(e)}
                leftIcon={true}
                leftIconName="envelope"
                keyboardType="email-address" />

            <Text>{phoneNumber}</Text>

            <AppTextField
                roundConners={true}
                placeholder="Enter password"
                value={phoneNumber}
                onChangeText={e => handlePhoneNumber(e)}
                leftIcon={true}
                leftIconName="lock"
                keyboardType="default"
                secureTextEntry={true} />


                <AppButton
                title="Login"
                onPress={()=>{navigation.navigate("BottomNavigator")}}/>

        </AppWrapper>
    )
}

const styles = theme => StyleSheet.create({

})

export default Screen;