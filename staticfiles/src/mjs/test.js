    $(document).ready(function () {

      const language = navigator.language || navigator.userLanguage; // e.g., "en-US"
      const userAgent = navigator.userAgent; // Full user agent string

      // Simple browser detection (not 100% reliable)
      let browser = "Unknown";

      if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
            
            if ( language.startsWith("de")) {
               alert("Herztlich Wilkommen bei Magic - Mallys ");
               window.location.href = "ms_de.html"

            }else if ( language.startsWith("fr")) {
               alert("Bienvenue chez Magic - Mallys ");
               window.location.href = "ms_fr.html";

            }else {
                alert("You are Welcome to Magic - Mallys ");
                window.location.href = "ms_en.html"
            }
            
      } else if (userAgent.includes("Firefox")) {
           if ( language.startsWith("de")) {
               alert("Herztlich Wilkommen bei Magic - Mallys ");
               window.location.href = "ms_de.html";

            }else if ( language.startsWith("fr")) {
               alert("Bienvenue chez Magic - Mallys ");
               window.location.href = "ms_fr.html";

            }else {
                alert("You are Welcome to Magic - Mallys ");
               window.location.href = "ms_en.html"
            }
      } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
            if ( language.startsWith("de")) {
               alert("Herztlich Wilkommen bei Magic - Mallys ");
               window.location.href = "ms_de.html"

            }else if ( language.startsWith("fr")) {
               alert("Bienvenue chez Magic - Mallys ");
               window.location.href = "ms_fr.html"

            }else {
                alert("You are Welcome to Magic - Mallys ");
               window.location.href = "ms_en.html"

            }
      } else if (userAgent.includes("Edg")) {
            if ( language.startsWith("de")) {
               alert("Herztlich Wilkommen bei Magic - Mallys ");
               window.location.href = "ms_de.html"

            }else if ( language.startsWith("fr")) {
               alert("Bienvenue chez Magic - Mallys ");
               window.location.href = "ms_fr.html"

            }else {

                alert("You are Welcome to Magic - Mallys ");
               window.location.href = "ms_en.html"
               
            }
      } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
            
            if ( language.startsWith("de")) {
               alert("Herztlich Wilkommen bei Magic - Mallys ");
               window.location.href = "ms_de.html"
            }else if ( language.startsWith("fr")) {
               alert("Bienvenue chez Magic - Mallys ");
               window.location.href = "ms_fr.html"
            }else {
                alert("You are Welcome to Magic - Mallys ");
               window.location.href = "ms_en.html"
            }
      }

      // Show result in the HTML
      $('#info').html(`Language: ${language} <br> Browser: ${browser}`);
    });