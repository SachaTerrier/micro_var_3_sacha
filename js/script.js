var positionY = 0;
var scrollTop;

var lastPositionX = 0;

$(document).ready(function() {
    // Récupérer les dimensions de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); // récupérer la "quantité" de scroll

    // Mettez à jour positionY lors du mouvement de la souris
    $(window).on('mousemove', function(event) {
        positionY = event.pageY - scrollTop; // Correction de la position Y en prenant en compte le scroll
    });

    // Fonction scroll
    $(window).on('scroll', function() {
        scrollTop = $(window).scrollTop(); 
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var scrollPercentage = scrollTop / (documentHeight - windowHeight);
        var opacity = scrollPercentage;
        $('#p7').css('opacity', opacity);
    });

    // Animation sur les éléments lors du mouvement de la souris
    $(window).on('mousemove', function(event) {
        $("#p5").css({
            "transform": "scale(" + (event.pageY * 0.0004) + ")"
        });
        $("#p8").css({
            "transform": "scale(" + (event.pageY * 0.0005) + ")"
        });
        $("#p4").css({
            "transform": "scale(" + (event.pageY * 0.0003) + ")"
        });
    });

    // Rotation des éléments avec le mouvement de la souris
    $(window).on('mousemove', function(event) {
        $("#p2").css({
            'transform': 'rotate(' + (event.pageX * 0.1) + 'deg)'
        });
        $("#p3").css({
            'transform': 'rotate(' + (event.pageX * 0.8) + 'deg)'
        });
        $("#p6").css({
            'transform': 'rotate(' + (event.pageX * 7) + 'deg)'
        });
    });

    // Déplacement de l'élément avec la classe 'deplacement'
    $('.deplacement').on("mousedown", function() {
        $("#p1").toggleClass('move'); // Ajouter ou retirer la classe "move"
    });

    // Déplacement de l'élément au clic avec la souris
    $(window).on('mousemove', function(event) {
        
            $("#p1").css({
                'position': 'absolute',
                'top': positionY + 'px', // Position Y mise à jour
                'left': event.pageX + 'px'
            });
        
    });

   
});

