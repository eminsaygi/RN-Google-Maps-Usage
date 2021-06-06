import React from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polygon,
  Circle,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    };
  }

  componentDidMount = async () => {
    if (Platform.OS === 'android') {
      const response = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'MapsAndGeo',
          message: 'Konumunuzu öğrenmek istiyoruz',
        },
      );
      //  alert(response);
    } else {
      Geolocation.requestAuthorization();
    }
  };

  render() {
    const {latitude, longitude} = this.state;
    console.log('log2: ' + latitude, longitude);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 40.9880495,
            longitude: 28.8449067,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            draggable={true}
            onDrag={e => console.log(e.nativeEvent.coordinate)}
            onDragStart={e => console.log(e.nativeEvent.coordinate)}
            onDragEnd={e =>
              alert(
                'Enlem: ' +
                  e.nativeEvent.coordinate.longitude +
                  '\nBoylam: ' +
                  e.nativeEvent.coordinate.latitude,
              )
            }
            title={'Şirinevler Meydanı'}
            description={'Halk Meydanı'}
            coordinate={{
              latitude: 40.9880495,
              longitude: 28.8449067,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </MapView>
      </View>
    );
  }
}

/* Direction */
/*
 <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 41.010316,
            longitude: 28.847029,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <MapViewDirections
            apikey={'API KEY HERE'}
            origin={{latitude: 40.013759, longitude: 22.843864}}
            destination={{latitude: 40.010939, longitude: 22.847008}}
          />
        </MapView>
      </View>
 */

/* Dragable Marker*/
/*
 <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 40.9880495,
            longitude: 20.8449067,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            draggable={true}
            onDrag={e => console.log(e.nativeEvent.coordinate)}
            onDragStart={e => console.log(e.nativeEvent.coordinate)}
            onDragEnd={e =>
              alert(
                'Enlem: ' +
                  e.nativeEvent.coordinate.longitude +
                  '\nBoylam: ' +
                  e.nativeEvent.coordinate.latitude,
              )
            }
            title={'Şirinevler Meydanı'}
            description={'meydan'}
            coordinate={{
              latitude: 40.9880495,
              longitude: 28.8449067,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </MapView>
      </View>
 */

/* Custom Maker*/
/*
<View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 40.9880495,
            longitude: 28.8449067,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            title={'Şirinevler Meydanı'}
            description={'meydan'}
            coordinate={{
              latitude: 40.9880495,
              longitude: 28.8449067,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 30,
                height: 30,
                backgroundColor: 'red',
                borderRadius: 50,
              }}>
              <Text style={{color: 'white', padding: 0, fontSize: 15}}>1</Text>
            </View>
          </Marker>
        </MapView>
      </View>
 */

/* Circle */
/*
 <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 40.006381,
            longitude: 28.843542,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Circle
            strokeWidth={3}
            strokeColor={'red'}
            radius={100}
            fillColor={'yellow'}
            lineCap={'butt'}
            center={{latitude: 41.006701, longitude: 28.845247}}
          />
        </MapView>
      </View>
 */

/* Polygon*/
/*
 <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 40.006381,
            longitude: 28.843542,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Polygon
            onPress={() => alert('Basıldı')}
            fillColor={'yellow'}
            strokeWidth={3}
            strokeColor={'red'}
            tappable={true}
            coordinates={[
              {
                latitude: 40.006701,
                longitude: 28.845247,
              },
              {
                latitude: 40.007631,
                longitude: 28.845523,
              },
              {
                latitude: 40.007688,
                longitude: 28.843742,
              },
            ]}
          />
        </MapView>
      </View>
 */

/* Marker */
/*
<View style={styles.container}>
  <MapView
    style={styles.map}
    region={{
      latitude: 40.9880495,
      longitude: 28.8449067,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}>
    <Marker
      draggable={true}
      // onPress={() => alert('Marker Tıklandı')}
      //onDrag={()=>alert('Kaydırma için')}
      title={'Şirinevler Meydanı'}
      description={'meydan'}
      opacity={0.8}
      coordinate={{
        latitude: 40.9880495,
        longitude: 28.8449067,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  </MapView>
</View>
 */

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 600,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
