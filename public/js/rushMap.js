function initRushMap() {
    rushMap = new google.maps.Map(document.getElementById('rushMap'), {
      center: { lat: 41.8741337, lng: -87.6712806 },
      zoom: 15
    });
  };


  $(document).ready (function(){
    initRushMap();

  })