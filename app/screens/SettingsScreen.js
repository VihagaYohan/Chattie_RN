import React, { Component,useState,useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'

// hooks
import { useTheme } from '../hooks'

// components
import { CustomText, AppHeader, AppWrapper, AppSeparator, CustomIcons } from '../components'

// utils
import { colors, utils, appStyles, constants, fonts } from '../utils'
import { changeTheme } from '../store/Reducers/theme'

const { BoldText, RegularText } = CustomText
const { FontAwesomeIcon5, IoniconsIcon } = CustomIcons

const SettingsScreen = () => {
    const [theme, setTheme] = useTheme('light-mode')
    const [isEnabled, setIsEnabled] = useState(theme==='light-mode'?false:true);
    const dispatch = useDispatch();
    
    // toggle switch
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        if(isEnabled == false) {
            dispatch(changeTheme('dark-mode'))
        }else{
            dispatch(changeTheme('light-mode'))
        }
    }

    return (
        <AppWrapper parentContainerStyle={styles(theme).parentContainer}>
            <AppHeader
                title="Settings"
            />

            {/* profile card */}
            <View style={styles(theme).profileCard}>
                <TouchableOpacity
                    style={styles(theme).profileImageContainer}>
                    <Image
                        style={styles(theme).profileImage}
                        source={{ uri: 'https://randomuser.me/api/portraits/thumb/men/75.jpg' }} />
                </TouchableOpacity>

                <View>
                    <RegularText style={{
                        fontSize: fonts.medium
                    }}>John Doe</RegularText>
                    <RegularText style={styles(theme).statusTitle} numberOfLines={2}>Trust your feelings,{'\n'} be a good human beings</RegularText>
                </View>
            </View>

            <AppSeparator />

            {/* settings item */}
            <View style={styles(theme).itemContainer}>
                <IoniconsIcon
                    name="moon"
                    color={colors.primaryPurple} />

                <RegularText style={styles(theme).itemTitle}>Dark mode</RegularText>

                <Switch
                    trackColor={{ false: colors.primaryGray, true: colors.primaryPurple }}
                    thumbColor={isEnabled ? colors.lightPurple : colors.lightGray}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />

            </View>
        </AppWrapper>
    )
}

const styles = theme => StyleSheet.create({
    parentContainer: {
        padding: constants.innerGap * 2
    },
    profileCard: {
        ...appStyles.flex_Row,
        marginTop: constants.gap,
    },
    profileImageContainer: {
        width: constants.gap * 3,
        height: constants.gap * 3,
        borderRadius: (constants.gap * 3) / 2,
        overflow: 'hidden',
        marginRight: constants.gap
    },
    profileImage: {
        flex: 1
    },
    statusTitle: {
        fontSize: fonts.extraSmall,
        color: colors.primaryPurple
    },

    // item 
    itemContainer: {
        ...appStyles.flex_Row,
        alignItems: 'center'
    },
    itemTitle: {
        marginLeft: constants.gap,
        fontSize: fonts.small,
        flex:1
    }
})

export default SettingsScreen