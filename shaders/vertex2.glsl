precision mediump float;
attribute vec4 aPosition;
uniform float theta;

void main() {

mat4 translasi = mat4(
    1.0, 0.0, 0.0, 0.35,  
    0.0, 1.0, 0.0, -0.3,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * translasi;

  mat4 rotasi = mat4(
    cos(theta), -(sin(theta)), 0.0, 0.0,
    sin(theta), cos(theta) , 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
   );

  gl_Position = aPosition * rotasi;
  
    mat4 translasi2 = mat4(
    1.0, 0.0, 0.0, -0.35,   
    0.0, 1.0, 0.0, 0.3,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * translasi2;


}