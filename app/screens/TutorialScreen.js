import React, { Component, useState, useRef } from 'react'
import { StyleSheet, View, Text, Modal, ScrollView } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

import { colors, constants } from '../utils/'

const { screenWidth, screenHeight } = constants

const Screen = () => {
    const [visible, setVisible] = useState(false)
    const [pos, setPos] = useState(false)
    const modalScroll = useRef(null)
    const parentScroll = useRef(null)

    const handleScroll = () => {
        'worklets'
        parentScroll.current.scrollTo({ x: 0, y: pos, animated: true })
    }

    /* const scrollToPosition = ()={

    } */

    return (
        <ScrollView style={styles.container}
            scrollEnabled
            scrollEventThrottle={16}
            ref={parentScroll}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
            <View style={styles.box5}></View>
            <View style={styles.box6}></View>

            <Modal visible
                transparent
                animationType='slide'>
                <ScrollView style={styles.scrollView}
                ref={modalScroll}
                    nestedScrollEnabled
                    scrollEnabled
                    scrollEventThrottle={16}
                    onScroll={e => {
                        e.persist()
                        let y = e.nativeEvent.contentOffset.y;
                        modalScroll.current = y;
                        setPos(y)
                        //console.log(modalScroll)
                        handleScroll()
                        //console.log(parentScroll)
                    }}>
                    <View style={{
                        position: 'absolute',
                        top: 10,
                        right: 20
                    }}>
                        <Text>Skip</Text>
                    </View>

                    <View style={styles.box1}></View>
                    <View style={styles.box2}></View>
                    <View style={styles.box3}></View>
                    <View style={styles.box4}></View>
                    <View style={styles.box5}></View>
            <View style={styles.box6}></View>

                    {/*  <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
 */}
                </ScrollView>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    text: {
        color: 'red',
        fontSize: responsiveFontSize(3)
    },
    scrollView: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginBottom: 10
    },
    box1: {
        width: '80%',
        height: 200,
        backgroundColor: 'green',
        marginBottom: 10,
        zIndex: 10000000000000
    }
    ,
    box2: {
        width: '80%',
        height: 200,
        backgroundColor: 'blue',
        marginBottom: 10
    },
    box3: {
        width: '80%',
        height: 200,
        backgroundColor: 'orange',
        marginBottom: 10
    },
    box4: {
        width: '80%',
        height: 200,
        backgroundColor: 'blueviolet',
        marginBottom: 10
    },
    box5: {
        width: '80%',
        height: 200,
        backgroundColor: 'cornflowerblue',
        marginBottom: 10
    },
    box6: {
        width: '80%',
        height: 200,
        backgroundColor: 'crimson',
        marginBottom: 10
    }
})

export default Screen;