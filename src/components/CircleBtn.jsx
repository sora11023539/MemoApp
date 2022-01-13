import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
// アイコン使用
import { Feather } from '@expo/vector-icons';

export default function CircleBtn(props) {
  // props 他のファイルで書き換えれるように
  const { style, name } = props;
  return (
    // スタイル上書きできるように
    <View style={[styles.circleBtn, style]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

CircleBtn.propTypes = {
  style: shape(),
  // isRequired 必須の項目
  name: string.isRequired,
};

CircleBtn.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleBtn: {
    backgroundColor: '#467fd3',

    width: 64,
    height: 64,
    borderRadius: 32,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: 40,
    bottom: 40,

    // ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    // android
    elevation: 8,
  },

  circleBtnLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});
