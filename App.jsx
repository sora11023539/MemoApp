import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarTitle}>Memo App</Text>
          <Text style={styles.appBarRight}>ログアウト</Text>
        </View>
      </View>

      {/* memo list */}
      <View>
        {/* memo list item */}
        <View style={styles.memoListItem}>
          {/* memo title */}
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          {/* delete btn */}
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* memo list item */}
        <View style={styles.memoListItem}>
          {/* memo title */}
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          {/* delete btn */}
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* memo list item */}
        <View style={styles.memoListItem}>
          {/* memo title */}
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          {/* delete btn */}
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      {/* add btn */}
      <View style={styles.circleBtn}>
        <Text style={styles.circleBtnLabel}>+</Text>
      </View>
    </View>
  );
}

const blue = '#467fd3';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: blue,
    justifyContent: 'flex-end',
  },

  appBarInner: {
    alignItems: 'center',
  },

  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255,255,255,0.8)',
  },

  appBarTitle: {
    fontSize: 22,
    marginBottom: 8,
    lineHeight: 32,
    color: '#fff',
    fontWeight: 'bold',
  },

  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',

    paddingVertical: 16,
    paddingHorizontal: 19,

    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },

  circleBtn: {
    backgroundColor: blue,

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
