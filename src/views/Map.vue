<template>
  <div id='map-area'>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  data: function () {
    return {
      zoom: this.$route.params.zoom || 17,
      lat: this.$route.params.lat || 43.05,
      lon: this.$route.params.lon || 141.35
    }
  },
  mounted () {
    L.map('map-area')
      .setView([this.lat, this.lon], this.zoom)
      .addLayer(
        L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        })
      )
  }
}
</script>
