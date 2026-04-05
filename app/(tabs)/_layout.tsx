import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
const Tablayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='friends'
                options={{
                    title: 'Friends',
                    tabBarIcon: ({ color }) => (
                        <Feather name="users" size={24} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name='newPost'
                options={{
                    title: 'New Post',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="plus-square" size={24} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name='inbox'
                options={{
                    title: 'Inbox',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-minus-outline" size={24} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

export default Tablayout