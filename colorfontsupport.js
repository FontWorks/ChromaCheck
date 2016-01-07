function clrtest() {

   try {
      // Based on:
      // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas

      var canvas = document.getElementById('svgCanvas');

      var ctx = canvas.getContext('2d');

      // var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
      //            '<foreignObject width="100%" height="100%">' +
      //            '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
      //              '<em>I</em> like ' +
      //              '<span style="color:white; text-shadow:0 0 2px blue;">' +
      //              'cheese</span>' +
      //            '</div>' +
      //            '</foreignObject>' +
      //            '</svg>';

      var data = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100">' +
                 '<style type="text/css">@font-face{font-family:"colorfontsupport";src:url(data:font/truetype;base64,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WkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppASmmBaSYFpBiWkCKaQEppgWkmBaQYlpAimkBKaYFpJgWkGJaQIppAQB85QFzKwZY4Bws2QAAAABJRU5ErkJgggA=);}</style> '+
                 '<text x="0" y="50" fill="limegreen" font-family="colorfontsupport" font-size="40">&#xe900;!&#xe901;!&#xe902;!&#xe903;!</text>' +
                 '</svg>';

      var DOMURL = window.URL || window.webkitURL || window;

      var img = new Image();
      var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
      var url = DOMURL.createObjectURL(svg);

      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
      }

      img.src = url;
   }
   catch (ex) {
      console.log(ex);
      return false;
   }
}

window.onload = function() {
  console.log ( clrtest() );
  console.log ( "test done." );
}


