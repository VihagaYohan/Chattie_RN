import React from 'react'
import { render } from '@testing-library/react-native'
import renderer from 'react-test-renderer';

/* import Login from '../app/screens/LoginScreen'; */
import LoginScreen from '../app/components/Button'

import axios from 'axios';

import mockAxios from 'axios';

jest.mock('axios');
mockAxios.post.mockImplementation(() => Promise.resolve({
    data: {
        sucess: "",
        token: ""
    }
}))

const dummyData = {
    sucess: true,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTM1ZTJiNzNjOWVhNmJhNWEzMmFjMiIsImlhdCI6MTY1NzQ1NDU2MCwiZXhwIjoxNjYwMDQ2NTYwfQ.x45jep0KOGrsD_rr7j6Xlz1kRL_8-dIxwlNxlV7ooaY"
}



