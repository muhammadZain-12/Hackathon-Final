import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {Text, View} from 'react-native';
import {useEffect} from 'react';

function MapScreen() {
  const [location, setLocation] = React.useState('');

  useEffect(() => {
    Geolocation.getCurrentPosition(info => setLocation(info));
  });

  return (
    <View>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: '100%'}}
          region={{
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              longitude: location.coords.longitude,
              latitude: location.coords.latitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            title="Hello User"
            description="Your Current Location"
          />
        </MapView>
      )}
    </View>
  );
}

export default MapScreen;
