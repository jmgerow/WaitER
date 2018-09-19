function initNWMap() {
    rushMap = new google.maps.Map(document.getElementById('nwMap'), {
      center: { lat: 41.8946315, lng: -87.6234987 },
      zoom: 16
    });
  };


  $(document).ready (function(){
    initNWMap();

  });