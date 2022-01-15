import { string } from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Btn(props) {
  const { label } = props;
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.btnLabel}>{ label }</Text>
    </View>
  );
}

Btn.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  btnLabel: {
    fontSize: 16,
    lineHeight: 32,

    paddingVertical: 8,
    paddingHorizontal: 32,

    color: '#fff',
  },
});
