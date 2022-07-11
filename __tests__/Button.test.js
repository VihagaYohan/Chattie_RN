import React from 'react'
import {render} from '@testing-library/react-native'
import renderer from 'react-test-renderer';

/* import Login from '../app/screens/LoginScreen'; */
import LoginScreen from '../app/components/Button'

test("renders",()=>{
    const tree = renderer.create(<LoginScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
})