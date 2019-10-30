(function() {

  glUtils.SL.init({ callback: function() { main(); } });

  function main() {
    
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);
  
    console.log("\nVERTEX SOURCE CODE:\n" + glUtils.SL.Shaders.v1.vertex);
    console.log("\nFRAGMENT SOURCE CODE:\n" + glUtils.SL.Shaders.v1.fragment);
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    var vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex);
    var fragmentShader2 = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v2.fragment);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);
    var program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader2);


    function line()
    {
      gl.useProgram(program2);
      var linesVertices = new Float32Array([


        -0.35,0.8,        1.0, 0.0, 0.0,
        -0.55,-0.2,       1.0, 0.0, 0.0,

        -0.35,0.8,        0.0, 0.0, 1.0,  
        -0.15,-0.2,       0.0, 0.0, 1.0,

        -0.45,-0.2,       1.0, 0.0, 1.0,
        -0.55, 0.5,       1.0, 0.0, 1.0,

        -0.15,-0.2,       1.0, 1.0, 0.0,
        -0.25, 0.0,       1.0, 1.0, 0.0,

      ]);

      var linesVerticesBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, linesVerticesBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(linesVertices), gl.STATIC_DRAW);

      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      var vColor = gl.getAttribLocation(program2, 'vColor');
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0);

      gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);

      gl.enableVertexAttribArray(aPosition);
      gl.enableVertexAttribArray(vColor);

      sudut += Math.PI * 0.0015;
      gl.uniform1f(sudutLoc2, sudut);
    }
    
    function triangle()
    {
      gl.useProgram(program);

      var triangleVertices = new Float32Array([
      0.2,0.8,   
      0.1,-0.2,  
      0,-0.2,     
      
      0.1,0.8,
      0.1,-0.2,
      0,-0.2,
    
      0.4, 0.3,
      0.4, 0.0,
      0.3, 0.0,

      0.4,-0.2,
      0.3,-0.2,
      0.2,0.8,

      ]);

      //0.35,0.2

      var triangleVertexBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

      var aPosition = gl.getAttribLocation(program, 'aPosition');
      var vColor = gl.getAttribLocation(program, 'vColor');
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      
      if (scale >= 1) membesar = -1;
      else if (scale <= -1) membesar = 1;
      scale = scale + (membesar * 0.0015);
      gl.uniform1f(scaleLoc, scale);
      
    }

    
    var sudutLoc = gl.getUniformLocation(program, 'sudut');
    var sudutLoc2 = gl.getUniformLocation(program2, 'sudut');
    var sudut = 0;
    var scaleLoc = gl.getUniformLocation(program, 'scale');
    var scaleLoc2 = gl.getUniformLocation(program2, 'scale');
    var scale = 1;
    var membesar = 1;

    function render() {
      
      // Bersihkan layar jadi hitam
      gl.clearColor(0.0, 0.0, 0.4, 1.0);
      // Bersihkan buffernya canvas
      gl.clear(gl.COLOR_BUFFER_BIT);
      line();
      gl.drawArrays(gl.LINE_LOOP, 0, 8);
      triangle();
      gl.drawArrays(gl.TRIANGLE_FAN, 0,9);
      
      requestAnimationFrame(render);
    }
    render();
  }

})();
