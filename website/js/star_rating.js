jQuery(document).ready(function($) {
    $('.rating_stars span.r').hover(function() {
                // get hovered value
                var rating = $(this).data('rating');
                var value = $(this).data('value');
                $(this).parent().attr('class', '').addClass('rating_stars').addClass('rating_'+rating);
                highlight_star(value);
            }, function() {
                // get hidden field value
                var rating = $("#rating").val();
                var value = $("#rating_val").val();
                $(this).parent().attr('class', '').addClass('rating_stars').addClass('rating_'+rating);
                highlight_star(value);
            }).click(function() {
                // Set hidden field value
                var value = $(this).data('value');
                $("#rating_val").val(value);
    
                var rating = $(this).data('rating');
                $("#rating").val(rating);
                
                highlight_star(value);
            });
            
            var highlight_star = function (rating) {
                // Reset background color of input
                $("#rating_val").css("background-color", "white");
            
                // Define color thresholds
                var redThreshold = 1;
                var yellowThreshold = 3;
                var greenThreshold = 5;
            
                // Apply background color based on rating value
                if (rating <= redThreshold) {
                    $("#rating_val").css("background-color", "red");
                } else if (rating <= yellowThreshold) {
                    $("#rating_val").css("background-color", "yellow");
                } else {
                    $("#rating_val").css("background-color", "green");
                }
            
                // Update stars' colors based on rating value
                $(".rating_stars span.s").each(function () {
                    var low = $(this).data("low");
                    var high = $(this).data("high");
                    $(this).removeClass("active-high").removeClass("active-low");
                    if (rating >= high) $(this).addClass("active-high");
                    else if (rating == low) $(this).addClass("active-low");
                });
            };
});