import React, {useState} from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {Switch, List, Appbar, Text} from 'react-native-paper';
import {SettingsScreenProps} from './screen.types';

const renderListIcon = (iconName: string) => {
  return <List.Icon icon={iconName} />;
};

const SettingsPage: React.FC<SettingsScreenProps> = ({navigation}) => {
  const [onboardingEnabled, setOnboardingEnabled] = useState(true);

  const toggleOnboarding = () => setOnboardingEnabled(!onboardingEnabled);

  const handleAlertNotificationsPress = () =>
    navigation.navigate('NotificationScreen', {name: 'NotificationScreen'});
  const handleSetUpAlertPress = () =>
    navigation.navigate('AlertSetupScreen', {name: 'AlertSetupScreen'});
  const handleSetUpFAQPress = () => {
    Linking.openURL('https://resynctech.com/');
  };
  const handleFeedBackPress = () =>
    navigation.navigate('FeedbackScreen', {name: 'FeedbackScreen'});

  const handleSetUpResetLoginPasswordPress = () =>
    navigation.navigate('ResetLoginPasswordScreen', {
      name: 'ResetLoginPasswordScreen',
    });

  const handleSetUpLogoutPress = () =>
    navigation.navigate('LoginScreen', {
      name: 'LoginScreen',
    });
  return (
    <>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content
          title={'Settings'}
          style={styles.content}
          titleStyle={styles.title}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <List.Section>
          <List.Subheader style={styles.titleHeader}>Onboarding</List.Subheader>
          <List.Item
            title="Onboarding Tutorial"
            description="Enable every time app opens"
            right={() => (
              <Switch
                value={onboardingEnabled}
                onValueChange={toggleOnboarding}
              />
            )}
          />
        </List.Section>

        <List.Section>
          <List.Subheader style={styles.titleHeader}>Help</List.Subheader>
          <List.Item
            title="Alert Notifications"
            right={() => renderListIcon('bell')}
            onPress={handleAlertNotificationsPress}
          />
          <List.Item
            title="Set up an alert"
            right={() => renderListIcon('chevron-right')}
            onPress={handleSetUpAlertPress}
          />
          <List.Item
            title="FAQs & Troubleshooting"
            right={() => renderListIcon('chevron-right')}
            onPress={handleSetUpFAQPress}
          />
          <List.Item
            title="Reset Login Password"
            right={() => renderListIcon('chevron-right')}
            onPress={handleSetUpResetLoginPasswordPress}
          />
          <List.Item
            title="Give Us Feedback"
            right={() => renderListIcon('chevron-right')}
            onPress={handleFeedBackPress}
          />
          <List.Item
            title="Logout"
            right={() => renderListIcon('logout')}
            onPress={handleSetUpLogoutPress}
          />
        </List.Section>

        <Text style={styles.appVersion}>App Version: 1.7.1</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  appBar: {
    backgroundColor: '#FDFBFC',
    elevation: 0,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#FDFBFC',
  },
  appVersion: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SettingsPage;
