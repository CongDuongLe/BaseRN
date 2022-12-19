import React from 'react';
import { View, LogBox, StatusBar } from 'react-native';
import AppWithNavigationState from '@navigators';
import {} from '@components';
import GlobalLoading, { globalLoadingRef } from '@components/GlobalLoading';
import GlobalMessage, { globalMessageRef } from '@components/GlobalMessage';
import { I18nextProvider } from 'react-i18next';
import i18next from '@shared/language';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@reduxCore/store';
 import {
   useQuery,
   useMutation,
   useQueryClient,
   QueryClient,
   QueryClientProvider,
 } from 'react-query';

LogBox.ignoreAllLogs(true);
StatusBar.setBarStyle('dark-content', true);
StatusBar.setBackgroundColor('transparent', true);



const queryClient = new QueryClient();


const MyBase = () => {
  return (
    <View style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18next}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <AppWithNavigationState />
              <GlobalLoading ref={globalLoadingRef} />
              <GlobalMessage ref={globalMessageRef} />
            </PersistGate>
          </Provider>
        </I18nextProvider>
      </QueryClientProvider>
    </View>
  );
};
export default MyBase;
