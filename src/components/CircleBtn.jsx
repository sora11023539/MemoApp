import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import Icon from './Icon';

export default function CircleBtn(props) {
  // props 他のファイルで書き換えれるように
  const { style, name, onPress } = props;
  return (
    // スタイル上書きできるように
    // TouchableOpacity = 透明度
    <TouchableOpacity style={[styles.circleBtn, style]} onPress={onPress}>
      <Icon name={name} size={24} color="white" />
    </TouchableOpacity>
  );
}

CircleBtn.propTypes = {
  style: shape(),
  // isRequired 必須の項目
  name: string.isRequired,
  // func = onPressが関数である
  onPress: func,
};

CircleBtn.defaultProps = {
  style: null,
  onPress: null,
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
