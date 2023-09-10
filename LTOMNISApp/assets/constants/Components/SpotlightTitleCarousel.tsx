import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import GlobalStyles from '../colors';

interface CustomTitleProps {
  title: string;
  buttonText: string;
  onButtonPress: () => void;
}

export const CustomTitle: React.FC<CustomTitleProps> = ({
  title,
  buttonText,
  onButtonPress,
}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

interface ImageData {
  url: string;
  tag?: string;
}

interface CustomCarouselProps {
  images: ImageData[];
}

interface ViewableItem {
  item: ImageData; // Assuming ImageData is the correct type for item
  key: string;
  index: number | null;
  isViewable: boolean;
}

interface OnViewableItemsChangedInfo {
  viewableItems: ViewableItem[];
  changed: ViewableItem[];
}

export const CustomCarousel: React.FC<CustomCarouselProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const viewConfigRef = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const onViewableItemsChanged = React.useCallback(
    ({viewableItems}: OnViewableItemsChangedInfo) => {
      setCurrentIndex(viewableItems[0]?.index || 0);
    },
    [],
  );

  return (
    <View style={{left: 20}}>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.carouselItem}>
            <Image
              source={{uri: item.url}}
              style={{flex: 1, borderRadius: 20}}
              resizeMode="cover"
            />
            {item.tag && (
              <View style={styles.tagContainer}>
                <Text style={styles.tagText}>{item.tag}</Text>
              </View>
            )}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{marginBottom: 24}}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef}
      />
      <View style={styles.indicatorContainer}>
        {images.map((image, index) => (
          <View
            key={index}
            style={{
              ...styles.indicator,
              backgroundColor:
                currentIndex === index
                  ? GlobalStyles.Colors.primary210
                  : 'rgba(256, 256, 256, 0.1)',
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    width: '90%',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    color: GlobalStyles.Colors.primary100,
  },
  button: {
    height: 24,
    width: 95,
    backgroundColor: GlobalStyles.Colors.primary200, // Change as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 14, // Change as needed
    textAlign: 'center',
    fontWeight: 'bold',
    color: GlobalStyles.Colors.primary100,
  },
  carouselItem: {
    backgroundColor: '#f9f9f9', // Change as needed
    width: 300, // or your defined width
    height: 162, // or your defined height
    borderRadius: 20, // or your defined borderRadius
    marginRight: 8,
  },
  carouselImage: {
    flex: 1,
  },
  tagContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    height: 24,
    width: 94,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(	246,	244,	244, 0.1)', // Adjust as needed
    borderRadius: 6,
  },
  tagText: {
    color: '#fff', // Adjust as needed
    textAlign: 'center',
    fontSize: 14,
  },
  indicator: {
    height: 2,
    width: 300 / 5, // Assuming you have 5 images, adjust accordingly
    borderRadius: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 8,
    width: '90%',
  },
});
