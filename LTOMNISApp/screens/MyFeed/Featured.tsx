import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { PostCard } from './PostCard'
import GlobalStyles from '../../assets/constants/colors'

export default function Featured() {
  return (
    <ScrollView style={styles.container} >
      <PostCard
        avatar="https://randomuser.me/api/portraits/men/41.jpg"
        firstname="John"
        lastname="Doe"
        hours={1}
        number={5000}
        title="This is a Post Title"
        subtext="This is some subtext for the post. It provides more information about the post."
        imageUrl="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" // using a placeholder image URL
      />
      <PostCard
        firstname="Jane"
        lastname="Smith"
        hours={2}
        number={3000}
        title="Another Post Title"
        subtext="Here is more subtext for another post."
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: GlobalStyles.Colors.primary100,
      flex: 1,
    },
})