/* eslint-disable react-native/no-inline-styles */
import {View, Button, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  onImageNotification,
  onTextDesignNotification,
  onTextNotification,
  onTimerNotification,
} from '../helper/notifee';
import {
  getDesignedText,
  getImage,
  getNormalText,
  getTimer,
} from '../api/NotificationApi';

const HomeScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16, // Optional padding for spacing
      }}>
      <Text
        style={{
          fontWeight: 'black',
          fontSize: 20,
          marginBottom: 8,
        }}>
        Local Notification
      </Text>
      <View
        style={{
          width: '100%',
          marginBottom: 20,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={{marginBottom: 12}}>
        <Button
          title="Normal Text notification"
          onPress={() => {
            onTextNotification();
          }}
        />
      </View>
      <View style={{marginBottom: 12}}>
        <Button
          title="Design Text notification"
          onPress={() => {
            onTextDesignNotification();
          }}
        />
      </View>
      <View style={{marginBottom: 12}}>
        <Button
          title="Image notification"
          onPress={() => {
            onImageNotification();
          }}
        />
      </View>
      <View>
        <Button
          title=" notification"
          onPress={() => {
            onTimerNotification();
          }}
        />
      </View>
      {/* update  */}
      <Text
        style={{
          fontWeight: 'black',
          fontSize: 20,
          marginBottom: 8,
          marginTop: 30,
        }}>
        Push Notification
      </Text>
      <View
        style={{
          width: '100%',
          marginBottom: 20,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={{marginBottom: 12}}>
        <Button
          title="Normal Text notification"
          onPress={async () => {
            try {
              const data = await getNormalText();
              console.log(data);
            } catch (e) {
              console.log(e);
            }
          }}
        />
      </View>
      <View style={{marginBottom: 12}}>
        <Button
          title="Design Text notification"
          onPress={async () => {
            try {
              const data = await getDesignedText();
              console.log(data);
            } catch (e) {
              console.log(e);
            }
          }}
        />
      </View>
      <View style={{marginBottom: 12}}>
        <Button
          title="Image notification"
          onPress={async () => {
            try {
              const data = await getImage();
              console.log(data);
            } catch (e) {
              console.log(e);
            }
          }}
        />
      </View>
      <View>
        <Button
          title=" notification"
          onPress={async () => {
            try {
              const data = await getTimer();
              console.log(data);
            } catch (e) {
              console.log(e);
            }
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
