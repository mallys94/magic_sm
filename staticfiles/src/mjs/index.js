    $(document).ready(function () {

      const language = navigator.language || navigator.userLanguage; // e.g., "en-US"
      const userAgent = navigator.userAgent; // Full user agent string

      // Simple browser detection (not 100% reliable)
      let browser = "Unknown";

      if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
          console.log("Ok1");

      }else if ( userAgent.includes("Firefox")) {
          if ( language.startsWith("de")){

            $('#de_logo').css({
                "fontSize": "55px",
                "marginLeft": "-1%",
            });
            
            $(function(){
               $('.a, .a1, .a2, .a3').hover(
                 function() {
                   // Create underline div inside the hovered element if not exists
                   if ($(this).find('.underline').length === 0) {
                     $('<div class="underline"></div>').appendTo(this);
                   }
                   let $underline = $(this).find('.underline');
             
                   // Style and reset width
                   $underline.css({
                     position: 'absolute',
                     bottom: '0',
                     left: '0',
                     height: '2px',
                     backgroundColor: 'red',
                     width: '0',
                   });
             
                   // Animate width from 0 to full width
                   $underline.stop(true).animate({
                     width: $(this).outerWidth()
                   }, 500);
                 },
                 function() {
                   let $underline = $(this).find('.underline');
             
                      // Animate width back to 0 and remove after animation
                   $underline.stop(true).animate({
                     width: 0
                   }, 500, function(){
                        $(this).remove();
                   });
                 }
               );
             });

          }else if ( language.startsWith("fr")){
            $('#de_logo').css(
              {
                "fontSize": "95px",
                "marginLeft": "-28%",
            });
          }else {
            console.log("Languange not found ");
          }
      }else {
        alert("Else not ok ");
      }

    });