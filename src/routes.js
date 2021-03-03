import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Norte from './pages/Norte';
import Nordeste from './pages/Nordeste';
import Sudeste from './pages/Sudeste';
import Sul from './pages/Sul';
import CentroOeste from './pages/Centro-Oeste';

const Drawer = createDrawerNavigator();

const colorF = '#ccffdd';
const colorNF = '#00cc44';

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Sudeste"
                drawerStyle={{
                    backgroundColor: '#006622',
                    paddingVertical: 40
                }}
                drawerContentOptions={{
                    activeBackgroundColor: '#003311',
                }}
            >
            <Drawer.Screen
                name="Norte"
                component={Norte}
                options={
                {
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? `${colorF}` : `${colorNF}` }}>Norte</Text>)
                }
            }
            />
            <Drawer.Screen
                name="Nordeste"
                component={Nordeste}
                options={
                {
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? `${colorF}` : `${colorNF}` }}>Nordeste</Text>)
                }
            }
            />
            <Drawer.Screen
                name="Sudeste"
                component={Sudeste}
                options={
                {
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? `${colorF}` : `${colorNF}` }}>Sudeste</Text>)
                }
            }
            />
            <Drawer.Screen
                name="Sul"
                component={Sul}
                options={
                {
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? `${colorF}` : `${colorNF}` }}>Sul</Text>)
                }
            }
            />
            <Drawer.Screen
                name="CentroOeste"
                component={CentroOeste}
                options={
                {
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? `${colorF}` : `${colorNF}` }}>Centro-Oeste</Text>)
                }
            }
            />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}