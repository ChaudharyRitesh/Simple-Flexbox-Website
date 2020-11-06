// intialize  and the map

function initMap() {
    // your location
    const loc = {lat: 28.237988, lng: 83.995590 };
    // centered map on the location
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    // the marker, positioned at the location
    const marker = new google.maps.Marker({ position: loc, map: map});
}

// sticky menu background
window.addEventListener('scroll', function() {
    if(window.scrollY > 150) {
        document.querySelector('#navbar').getElementsByClassName.opacity = 0.9;
    } else{
        document.querySelector('#navbar').getElementsByClassName.opacity = 1;
    }
});


//smooth scroll
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});