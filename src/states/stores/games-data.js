import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";
import useStore from "swr-global-state";
import localStoragePersistor from '../persistors/local-storage';

const KEY = "@app/games";

function useGamesData() {
  const [loading, setLoading] = useStore({
    key: `${KEY}-loading`,
    initial: true
  });
  const [zipcode, setZipcode] = useStore({
    key: `${KEY}-zipcode`,
    initial: 0,
    //persistor: localStoragePersistor
  });
  const [games, setGames, swrDefaultResponse] = useStore(
    {
      key: KEY,
      initial: null,
      persistor: {
        onSet: localStoragePersistor.onSet,
        onGet: async(key) => {
            try { 
                if (window.navigator.onLine && zipcode) {
                    const remoteGames = await fetchApi({url : `${apiBaseUrl}/games/${zipcode}`, method : 'GET'});
                    if (remoteGames && remoteGames.data?.games != null && remoteGames.data?.games != '') {
                        console.log('remoteGames',remoteGames)
                        localStoragePersistor.onSet(key, remoteData);
                        let affiliate = remoteGames.data.games.affiliate
                        affiliate ? setZipcode(affiliate.zipcode) : ''
                        return remoteGames.data.games;
                    }
                    remoteGames.data.message = remoteGames?.message;
                    return remoteGames.data;
                }
                const cachedGames = window.localStorage.getItem(String(key));
                setLoading(false);
                //return JSON.parse(cachedGames);
            } catch (err) {
                if (window.navigator.onLine) {
                  if (err?.status !== 401) {
                    console.log('An error occured, returned cached data');
                  } else {
                    throw err;
                  }
                }
                const cachedData = localStoragePersistor.onGet(key);
                //return cachedData;
              } finally {
                setLoading(false);
            }
        }
      }
    },
    {
      /**
       * set another SWR config here
       * revalidateOnFocus: false
       * revalidateOnReconnect: false
       * refreshWhenHidden: false
       * refreshWhenOffline: false
       */
      revalidateOnFocus: true,
      revalidateOnReconnect: true
    }
  );

  /**
   * Destructuring response from SWR Default response
   */
  const { mutate, error } = swrDefaultResponse;

  const destroyGamesData = async () => {
    setLoading(true);
    window.localStorage.removeItem(KEY);
    // use default `mutate` from SWR to avoid `onSet` callback in `persistor`
    mutate(null);
    setLoading(false);
  };

  const updateGamesData = async (newZipcode) => {
    console.log('updateGamesData', newZipcode)
    setLoading(true);
    const newGamesData = await fetchApi({url : `${apiBaseUrl}/games/${newZipcode}`, method : 'GET'});
    if (newGamesData && newGamesData.data?.games != null && newGamesData.data?.games != '') {
        console.log('newGamesData',newGamesData)
        //localStoragePersistor.onSet(KEY, newGamesData);
        setGames(newGamesData.data.games)
        let affiliate = newGamesData.data.games.affiliate
        affiliate ? setZipcode(affiliate.zipcode) : ''
    }
    setLoading(false);
  };

  // custom mutator/dispatcher

  return {
    loading,
    error,
    zipcode,
    games,
    destroyGamesData,
    updateGamesData
  };
}

export default useGamesData;