function initUCMap() {
    rushMap = new google.maps.Map(document.getElementById('ucMap'), {
      center: { lat: 41.788879, lng: -87.6064662 },
      zoom: 15
    });
  };


  $(document).ready (function(){
    initUCMap();

  });