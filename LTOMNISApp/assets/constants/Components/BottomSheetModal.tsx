import {color} from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import GlobalStyles from '../colors';
import AcceptAndDecline from './Buttons/AcceptAndDecline';

type BottomSheetModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
};

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  isVisible,
  onClose,
  onAccept,
  onDecline,
}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <View style={styles.content}>
        <Text style={styles.bigTitle}>Are you sure you want to</Text>
        <Text style={styles.bigTitle}>accept this offer?</Text>
        <Text style={styles.subText}>
          This offer covers the rest of the amount, so other
        </Text>
        <Text style={styles.subText}>
          offers for this post will be rejected.
        </Text>
        <AcceptAndDecline onAccept={onAccept} onDecline={onDecline} />
      </View>
    </Modal>
  );
};

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    height: (2 / 5) * height,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80, // Space for the AcceptAndDecline component
  },
  bigTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    marginTop: 10,
    color: GlobalStyles.Colors.primary700,
  },
});

export default BottomSheetModal;
