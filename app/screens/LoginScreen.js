import React, { Component, useEffect, useState } from 'react'
import {
    StyleSheet, View, Text, TextInput,
    KeyboardAvoidingView,
    Image
} from 'react-native'
import { Formik } from 'formik'

// hooks
import { useTheme } from '../hooks'

// components
import { AppWrapper, AppTextField, AppButton, CustomIcons, CustomText } from '../components'

// utils
import { appStyles, colors, constants, fonts,utils } from '../utils'

// api services
import {userLogin} from '../services/Auth'

import Logo from '../../assets/images/logo.svg'

const { FontAwesomeIcon } = CustomIcons
const { BoldText } = CustomText
const {storeData} = utils

const Screen = ({ navigation }) => {
    const [theme, setTheme] = useTheme();

    const handleLogin = async (email, password) => {
       try{
       const {data} = await userLogin({email:email,password:password})
       const result = await storeData(constants.keys.ACCESS_TOKEN,data.token);
       console.log(result)
       }catch(e){
        console.log(e)
       }
    }

    return (

        <AppWrapper parentContainerStyle={{
            backgroundColor: 'white', flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: constants.innerGap
        }}>
            <KeyboardAvoidingView style={styles(theme).innerContainer}>

                <Logo
                    width={100}
                    height={100} />

                <BoldText
                    style={styles(theme).title}>
                    Chattie
                </BoldText>

                <Formik
                    initialValues={{
                        email: "vihagayohan94@gmail.com",
                        password: "Lol@117"
                    }}
                    onSubmit={values => console.log(values)}>

                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values
                    }) => (
                        <React.Fragment>
                            <View style={styles(theme).textFieldContainer}>
                                <FontAwesomeIcon
                                    name="envelope"
                                    color={colors.primaryPurple} />
                                <TextInput
                                    style={styles(theme).textField}
                                    keyboardType="email-address"
                                    placeholder='Enter email address'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                />
                            </View>

                            <View style={styles(theme).textFieldContainer}>
                                <FontAwesomeIcon
                                    name="lock"
                                    color={colors.primaryPurple} />
                                <TextInput
                                    style={styles(theme).textField}
                                    keyboardType="default"
                                    placeholder='Enter password'
                                    secureTextEntry={true}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')} />
                            </View>

                            <AppButton
                                roundConners={true}
                                title="Sign in"
                                onPress={() => handleLogin(values.email,
                                    values.password)} />

                        </React.Fragment>
                    )}



                </Formik>

            </KeyboardAvoidingView>
        </AppWrapper>
    )
}

const styles = theme => StyleSheet.create({
    innerContainer: {
        width: constants.screenWidth,
        height: constants.screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme == 'light-mode' ? colors.primaryWhite : colors.primaryBlack,
    },
    title: {
        fontSize: fonts.extraLarge * 2
    },
    textFieldContainer: {
        ...appStyles.flex_Row,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme == 'light-mode' ? colors.lightGray2 : colors.primaryPurple,
        borderRadius: constants.buttonRadius * 5,
        paddingHorizontal: constants.gap,
        marginBottom: constants.gap
    },
    textField: {
        marginLeft: constants.gap,
        fontFamily: fonts.regularFont,
        flex: 1,
        fontSize: fonts.regular,
        color: theme == 'light-mode' ? colors.primaryBlack : colors.primaryWhite,
    }
})

export default Screen;