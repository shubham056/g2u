import { createStore } from 'swr-global-state';
import localStoragePersistor from '../persistors/local-storage';

const useZipcodePersisted = createStore({
  key: "@app/zipcode-persisted",// (Required) state key with unique string
  initial: 0, // <- (Required) initial state
  persistor: localStoragePersistor
});

export default useZipcodePersisted;