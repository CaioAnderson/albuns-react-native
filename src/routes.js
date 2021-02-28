import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';

import Home from './screens/Home';
import Album from './screens/Album';

export default function Routes() {
    return (
        <Navigator>
            <Screen name='Home' component={Home}
                options={{
                    headerShown: true,
                    header: () => <Header title="Projeto Álbuns" />
                }} />

            <Screen name='Album' component={Album}
                options={{
                    headerShown: true,
                    header: () => <Header title="Projeto Álbuns" />
                }} />
        </Navigator>
    );
};
