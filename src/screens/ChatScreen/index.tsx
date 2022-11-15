/* eslint-disable prettier/prettier */
import {View, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import Header from '../../components/Header';
import {colors} from '../../utils';
import InputChat from '../../components/InputChat';
import ChatItem from './ChatItem';

const ChatScreen = ({navigation}) => {
  const [chatContent, setChatContent] = useState('');

  const chatSend = () => {
    console.log('chat yang akan dikirim: ', chatContent);
    setChatContent('');
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Chat" onPress={navigation.goBack} />
      <View style={styles.content}>
        <ChatItem isMe />
        <ChatItem />
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
});
