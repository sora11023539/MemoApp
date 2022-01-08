import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  // Helloで囲まれた要素がchildrenに格納される
  const { children, bang, style } = props;
  return (
    <View>
      {/* スタイル上書き */}
      <Text style={[styles.text, style]}>
        {/* 三項演算子 左がtrue 右がfalse */}
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

// childrenは文字列と宣言
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

// デフォルトの値指定
Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
