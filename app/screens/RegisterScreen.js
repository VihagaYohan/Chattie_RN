import React, { Component, useState, useEffect, useRef } from 'react'
import {
    StyleSheet, View, Text, TouchableOpacity,
    KeyboardAvoidingView,
    TextInput
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

// components
import {
    AppWrapper, AppButton, CustomIcons, CustomText, AppHeader,
    FormError
} from '../components'

// utils
import { fonts, colors, mode, constants, appStyles } from '../utils'

// hooks
import { useTheme } from '../hooks'

// routes
import routes from '../navigators/routes'

import Logo from '../../assets/images/logo.svg'


const { FontAwesomeIcon, IoniconsIcon } = CustomIcons

// sign up form validation
const signUpValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email address, please check check again')
        .required('Email address required'),
    phoneNumber: Yup.string().required('Phone number required'),
    password: Yup.string().required('Password required')
})

const Screen = ({ navigation }) => {
    const [theme, setTheme] = useTheme('light-mode');

    // handle user registeration
    const handleRegister = async(email,password,phoneNumber)=>{
        try{
             
        }catch(e){
            console.log(e)
        }
    }

    return (
        <AppWrapper parentContainerStyle={styles(theme).parentContainerStyle}>
            <KeyboardAvoidingView style={styles(theme).innerContainer}>

                <Logo
                    width={100}
                    height={100} />

                <Formik initialValues={{
                    email: "",
                    phoneNumber: "",
                    password: ""
                }}
                    validationSchema={signUpValidation}
                    onSubmit={values => console.log(values)}>
                    {({
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
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

                            {errors.email && touched.email ? (
                                <FormError>{errors.email}</FormError>
                            ) : null}

                            <View style={styles(theme).textFieldContainer}>
                                <FontAwesomeIcon
                                    name="lock"
                                    color={colors.primaryPurple} />
                                <TextInput
                                    style={styles(theme).textField}
                                    keyboardType="default"
                                    placeholder='Enter password'
                                    secureTextEntry={true}
                                    onChangeText={handleChange}
                                    onBlur={handleBlur} />
                            </View>

                            {errors.password && touched.password ? (
                                <FormError>{errors.password}</FormError>
                            ) : null}

                            <View style={styles(theme).textFieldContainer}>
                                <IoniconsIcon
                                    name="ios-call"
                                    color={colors.primaryPurple}
                                />
                                <TextInput
                                    style={styles(theme).textField}
                                    keyboardType="phone-pad"
                                    placeholder='Enter phone number'
                                    onChangeText={handleChange}
                                    onBlur={handleBlur} />
                            </View>

                            {
                                errors.phoneNumber && touched.phoneNumber ? (
                                    <FormError>{errors.phoneNumber}</FormError>
                                ) : null
                            }
                            <AppButton
                                roundConners={true}
                                title="Sign up"
                                onPress={handleSubmit} />

                        </React.Fragment>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </AppWrapper>
    )
}

const styles = theme => StyleSheet.create({
    parentContainerStyle: {
        backgroundColor: 'white',
        width: constants.screenWidth,
        height: constants.screenHeight,
        padding: constants.innerGap
    },

    innerContainer: {
        height: constants.screenHeight,
        alignItems: 'center',
        justifyContent: 'center'
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