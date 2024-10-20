import { useEffect, useContext } from 'react'
import mapboxgl from '!mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { UberContext } from '../context/uberContext'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [77.216, 28.6139], // Center on Delhi
      zoom: 10,
      maxBounds: [
        [68.17665, 6.74714], // Southwest corner of India
        [97.40256, 35.50422]  // Northeast corner of India
      ],
    })

    // Add the geocoder to the map, restricting results to India
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Search for places in India',
      countries: 'IN',  // Restrict to India (ISO country code)
      limit: 5,         // Limit the number of suggestions
      bbox: [68.17665, 6.74714, 97.40256, 35.50422],  // Restrict search results to India’s bounding box
      proximity: {       // Optional: focus suggestions around a specific point
        longitude: 77.216,
        latitude: 28.6139,
      },
      autocomplete: true,
    })

    // Add the geocoder search box to the map
    map.addControl(geocoder)

    // Listen for the selection of a suggestion
    geocoder.on('result', (e) => {
      const selectedLocation = e.result.geometry.coordinates
      map.flyTo({
        center: selectedLocation,
        essential: true, // This animation is considered essential with respect to prefers-reduced-motion
      })
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 60,
      })
    }
  }, [pickupCoordinates, dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id='map' />
}

export default Map
