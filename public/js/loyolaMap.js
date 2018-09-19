function initLoyolaMap() {
    rushMap = new google.maps.Map(document.getElementById('loyolaMap'), {
      center: { lat: 41.8605645, lng: -87.8368233 },
      zoom: 15
    });
  };


  $(document).ready (function(){
    initLoyolaMap();

  });