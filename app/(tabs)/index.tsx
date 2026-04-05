import posts from "@/assets/data/posts.json";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import FeedTab from '../components/GenericComponents/FeedTab';
import PostListItem from '../components/PostListItem';
const TABS = {
    EXPLORE: 'Explore',
    FOLLOWING: 'Following',
    FOR_YOU: 'For You'
};
const Index = () => {
    const [activeTab, setActiveTab] = useState(TABS.FOR_YOU);
    const { height } = Dimensions.get('window');
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <View>
            <View style={styles.topBar}>
                <MaterialIcons name="live-tv" size={24} color="white" />
                <View style={styles.navigationBar}>
                    <FeedTab title={TABS.EXPLORE} setActiveTab={setActiveTab} activeTab={activeTab} />
                    <FeedTab title={TABS.FOLLOWING} setActiveTab={setActiveTab} activeTab={activeTab} />
                    <FeedTab title={TABS.FOR_YOU} setActiveTab={setActiveTab} activeTab={activeTab} />
                </View>
                <Ionicons name="search" size={24} color="white" />
            </View>

            <FlatList
                data={posts}
                renderItem={({ item, index }) => (
                    <PostListItem postItem={item} isActive={index === currentIndex} />
                )}
                getItemLayout={(data, index) => ({
                    length: height - 80,
                    offset: (height - 80) * index,
                    index
                })}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                windowSize={5}
                showsVerticalScrollIndicator={false}
                snapToInterval={height - 80}
                decelerationRate={"fast"}
                disableIntervalMomentum

                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}

                onEndReachedThreshold={2}
            />
        </View>
    )
}

export default Index
const styles = StyleSheet.create({
    navigationBar: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        gap: 30
    },
    topBar: {
        flexDirection: 'row',
        position: 'absolute',
        top: 70,
        zIndex: 1,
        paddingHorizontal: 15,
        width: "100%"
    }
})