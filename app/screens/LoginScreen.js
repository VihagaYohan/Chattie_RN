import React, { Component, useEffect, useState } from 'react'
import {
    StyleSheet, View, Text, TextInput,
    KeyboardAvoidingView,
    Image
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup';

// hooks
import { useTheme } from '../hooks'

// components
import { AppWrapper, AppTextField, AppButton, CustomIcons, CustomText,
FormError } from '../components'

// utils
import { appStyles, colors, constants, fonts, utils } from '../utils'

// api services
import { userLogin } from '../services/Auth'

// routes
import routes from '../navigators/routes';

import Logo from '../../assets/images/logo.svg'

const { FontAwesomeIcon } = CustomIcons
const { BoldText } = CustomText
const { storeData } = utils

// login form validation
const loginValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email address, please check again')
        .required('Email address required'),
    password: Yup.string().required('Password required')
})

const Screen = ({ navigation }) => {
    const [theme, setTheme] = useTheme();

    const handleLogin = async (email, password) => {
        try {
           const { data } = await userLogin({ email: email, password: password })
           await storeData(constants.keys.ACCESS_TOKEN, data.token);

           navigation.navigate(routes.BottomNavigator)

        } catch (e) {
            console.log(e)
        }
    }

    return (

        <AppWrapper parentContainerStyle={styles(theme).parentContainerStyle}>
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
                        email:"",
                        password:""
                    }}
                    validationSchema={loginValidation}
                    onSubmit={values => handleLogin(values.email, values.password)}>

                    {({
                        errors,
                        touched,
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
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')} />
                            </View>

                            {errors.password && touched.password ? (
                                 <FormError>{errors.password}</FormError>
                            ) : null}

                            <AppButton
                                roundConners={true}
                                title="Sign in"
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
        paddingHorizontal: constants.innerGap,
        borderWidth: 1
    },
    innerContainer: {
        height: constants.screenHeight,
        alignItems: 'center',
        justifyContent: 'center'
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