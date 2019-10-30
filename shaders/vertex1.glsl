precision mediump float;
attribute vec2 aPosition;
attribute vec3 vColor;
varying vec3 fColor; 
uniform float scale;
uniform float theta2;

void main() {
  fColor = vColor;

  mat4 skalasi = mat4(
          scale, 0.0, 0.0, 0.0,
          0.0, 1.0 , 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          0.0, 0.0, 0.0, 1.0
  );

 gl_Position = vec4(aPosition,0.0,1.0) * skalasi;
 
}