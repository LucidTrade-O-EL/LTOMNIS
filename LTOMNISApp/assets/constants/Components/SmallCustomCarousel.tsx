import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Animated } from 'react-native';
import ScrollingBarComponent from './Buttons/ScrollingBarComponent';
import { ViewToken } from 'react-native';

interface ImageData {
  url: string;
  text?: string; 
}

interface SmallCustomCarouselProps {
  images: ImageData[];
}

export const SmallCustomCarousel: React.FC<SmallCustomCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollPosition = useState(new Animated.Value(0))[0];

  const totalWidth = images.length * 80; // Adjust as necessary
  const flatListWidth = 400; // Adjust as necessary
  const highlightedWidth = flatListWidth * 0.4; // Adjust as necessary
  const individualBarWidth = 300 / images.length;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollPosition } } }],
    { useNativeDriver: false },
  );

  const formatText = (text?: string) => {
    if (text && text.length > 7) {
      return text.slice(0, 7) + '...';
    }
    return text || 'Default Text';
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }, []);

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.text}>{formatText(item.text)}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <View style={styles.barContainer}>
        <ScrollingBarComponent
          scrollPosition={scrollPosition}
          totalWidth={totalWidth}
          flatListWidth={flatListWidth}
          highlightedWidth={highlightedWidth}
        />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 5, 
  },
  image: {
    height: 74,
    width: 74,
    borderRadius: 16,
    marginBottom: 5,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: 'rgba(256,256,256,0.6)',
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  bar: {
    height: 2,
    borderRadius: 1,
    marginHorizontal: 2,
  },
});
