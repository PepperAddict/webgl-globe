// threejs.org/license
'use strict';
var THREE = {
  REVISION: "69"
};
"object" === typeof module && (module.exports = THREE);
void 0 === Math.sign && (Math.sign = function (a) {
  return 0 > a ? -1 : 0 < a ? 1 : 0
});
THREE.MOUSE = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2
};
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.MinEquation = 103;
THREE.MaxEquation = 104;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.UVMapping = function () {};
THREE.CubeReflectionMapping = function () {};
THREE.CubeRefractionMapping = function () {};
THREE.SphericalReflectionMapping = function () {};
THREE.SphericalRefractionMapping = function () {};
THREE.RepeatWrapping = 1E3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.RGB_PVRTC_4BPPV1_Format = 2100;
THREE.RGB_PVRTC_2BPPV1_Format = 2101;
THREE.RGBA_PVRTC_4BPPV1_Format = 2102;
THREE.RGBA_PVRTC_2BPPV1_Format = 2103;
THREE.Color = function (a) {
  return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(a)
};
THREE.Color.prototype = {
  constructor: THREE.Color,
  r: 1,
  g: 1,
  b: 1,
  set: function (a) {
    a instanceof THREE.Color ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
    return this
  },
  setHex: function (a) {
    a = Math.floor(a);
    this.r = (a >> 16 & 255) / 255;
    this.g = (a >> 8 & 255) / 255;
    this.b = (a & 255) / 255;
    return this
  },
  setRGB: function (a, b, c) {
    this.r = a;
    this.g = b;
    this.b = c;
    return this
  },
  setHSL: function (a, b, c) {
    if (0 === b) this.r = this.g = this.b = c;
    else {
      var d = function (a, b, c) {
        0 > c && (c += 1);
        1 < c && (c -= 1);
        return c < 1 / 6 ? a + 6 * (b - a) *
          c : .5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a
      };
      b = .5 >= c ? c * (1 + b) : c + b - c * b;
      c = 2 * c - b;
      this.r = d(c, b, a + 1 / 3);
      this.g = d(c, b, a);
      this.b = d(c, b, a - 1 / 3)
    }
    return this
  },
  setStyle: function (a) {
    if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a)) return a = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a), this.r = Math.min(255, parseInt(a[1], 10)) / 255, this.g = Math.min(255, parseInt(a[2], 10)) / 255, this.b = Math.min(255, parseInt(a[3], 10)) / 255, this;
    if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a)) return a = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a), this.r =
      Math.min(100, parseInt(a[1], 10)) / 100, this.g = Math.min(100, parseInt(a[2], 10)) / 100, this.b = Math.min(100, parseInt(a[3], 10)) / 100, this;
    if (/^\#([0-9a-f]{6})$/i.test(a)) return a = /^\#([0-9a-f]{6})$/i.exec(a), this.setHex(parseInt(a[1], 16)), this;
    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a)) return a = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a), this.setHex(parseInt(a[1] + a[1] + a[2] + a[2] + a[3] + a[3], 16)), this;
    if (/^(\w+)$/i.test(a)) return this.setHex(THREE.ColorKeywords[a]), this
  },
  copy: function (a) {
    this.r = a.r;
    this.g =
      a.g;
    this.b = a.b;
    return this
  },
  copyGammaToLinear: function (a) {
    this.r = a.r * a.r;
    this.g = a.g * a.g;
    this.b = a.b * a.b;
    return this
  },
  copyLinearToGamma: function (a) {
    this.r = Math.sqrt(a.r);
    this.g = Math.sqrt(a.g);
    this.b = Math.sqrt(a.b);
    return this
  },
  convertGammaToLinear: function () {
    var a = this.r,
      b = this.g,
      c = this.b;
    this.r = a * a;
    this.g = b * b;
    this.b = c * c;
    return this
  },
  convertLinearToGamma: function () {
    this.r = Math.sqrt(this.r);
    this.g = Math.sqrt(this.g);
    this.b = Math.sqrt(this.b);
    return this
  },
  getHex: function () {
    return 255 * this.r << 16 ^ 255 * this.g <<
      8 ^ 255 * this.b << 0
  },
  getHexString: function () {
    return ("000000" + this.getHex().toString(16)).slice(-6)
  },
  getHSL: function (a) {
    a = a || {
      h: 0,
      s: 0,
      l: 0
    };
    var b = this.r,
      c = this.g,
      d = this.b,
      e = Math.max(b, c, d),
      f = Math.min(b, c, d),
      g, h = (f + e) / 2;
    if (f === e) f = g = 0;
    else {
      var k = e - f,
        f = .5 >= h ? k / (e + f) : k / (2 - e - f);
      switch (e) {
        case b:
          g = (c - d) / k + (c < d ? 6 : 0);
          break;
        case c:
          g = (d - b) / k + 2;
          break;
        case d:
          g = (b - c) / k + 4
      }
      g /= 6
    }
    a.h = g;
    a.s = f;
    a.l = h;
    return a
  },
  getStyle: function () {
    return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
  },
  offsetHSL: function (a,
    b, c) {
    var d = this.getHSL();
    d.h += a;
    d.s += b;
    d.l += c;
    this.setHSL(d.h, d.s, d.l);
    return this
  },
  add: function (a) {
    this.r += a.r;
    this.g += a.g;
    this.b += a.b;
    return this
  },
  addColors: function (a, b) {
    this.r = a.r + b.r;
    this.g = a.g + b.g;
    this.b = a.b + b.b;
    return this
  },
  addScalar: function (a) {
    this.r += a;
    this.g += a;
    this.b += a;
    return this
  },
  multiply: function (a) {
    this.r *= a.r;
    this.g *= a.g;
    this.b *= a.b;
    return this
  },
  multiplyScalar: function (a) {
    this.r *= a;
    this.g *= a;
    this.b *= a;
    return this
  },
  lerp: function (a, b) {
    this.r += (a.r - this.r) * b;
    this.g += (a.g - this.g) * b;
    this.b += (a.b - this.b) * b;
    return this
  },
  equals: function (a) {
    return a.r === this.r && a.g === this.g && a.b === this.b
  },
  fromArray: function (a) {
    this.r = a[0];
    this.g = a[1];
    this.b = a[2];
    return this
  },
  toArray: function () {
    return [this.r, this.g, this.b]
  },
  clone: function () {
    return (new THREE.Color).setRGB(this.r, this.g, this.b)
  }
};
THREE.ColorKeywords = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
THREE.Quaternion = function (a, b, c, d) {
  this._x = a || 0;
  this._y = b || 0;
  this._z = c || 0;
  this._w = void 0 !== d ? d : 1
};
THREE.Quaternion.prototype = {
  constructor: THREE.Quaternion,
  _x: 0,
  _y: 0,
  _z: 0,
  _w: 0,
  get x() {
    return this._x
  },
  set x(a) {
    this._x = a;
    this.onChangeCallback()
  },
  get y() {
    return this._y
  },
  set y(a) {
    this._y = a;
    this.onChangeCallback()
  },
  get z() {
    return this._z
  },
  set z(a) {
    this._z = a;
    this.onChangeCallback()
  },
  get w() {
    return this._w
  },
  set w(a) {
    this._w = a;
    this.onChangeCallback()
  },
  set: function (a, b, c, d) {
    this._x = a;
    this._y = b;
    this._z = c;
    this._w = d;
    this.onChangeCallback();
    return this
  },
  copy: function (a) {
    this._x = a.x;
    this._y = a.y;
    this._z = a.z;
    this._w = a.w;
    this.onChangeCallback();
    return this
  },
  setFromEuler: function (a, b) {
    if (!1 === a instanceof THREE.Euler) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    var c = Math.cos(a._x / 2),
      d = Math.cos(a._y / 2),
      e = Math.cos(a._z / 2),
      f = Math.sin(a._x / 2),
      g = Math.sin(a._y / 2),
      h = Math.sin(a._z / 2);
    "XYZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "YXZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z =
      c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "ZXY" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "ZYX" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "YZX" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e - f * g * h) : "XZY" === a.order && (this._x = f * d * e - c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e + f * g * h);
    if (!1 !== b) this.onChangeCallback();
    return this
  },
  setFromAxisAngle: function (a,
    b) {
    var c = b / 2,
      d = Math.sin(c);
    this._x = a.x * d;
    this._y = a.y * d;
    this._z = a.z * d;
    this._w = Math.cos(c);
    this.onChangeCallback();
    return this
  },
  setFromRotationMatrix: function (a) {
    var b = a.elements,
      c = b[0];
    a = b[4];
    var d = b[8],
      e = b[1],
      f = b[5],
      g = b[9],
      h = b[2],
      k = b[6],
      b = b[10],
      n = c + f + b;
    0 < n ? (c = .5 / Math.sqrt(n + 1), this._w = .25 / c, this._x = (k - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (k - g) / c, this._x = .25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y =
      .25 * c, this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + k) / c, this._z = .25 * c);
    this.onChangeCallback();
    return this
  },
  setFromUnitVectors: function () {
    var a, b;
    return function (c, d) {
      void 0 === a && (a = new THREE.Vector3);
      b = c.dot(d) + 1;
      1E-6 > b ? (b = 0, Math.abs(c.x) > Math.abs(c.z) ? a.set(-c.y, c.x, 0) : a.set(0, -c.z, c.y)) : a.crossVectors(c, d);
      this._x = a.x;
      this._y = a.y;
      this._z = a.z;
      this._w = b;
      this.normalize();
      return this
    }
  }(),
  inverse: function () {
    this.conjugate().normalize();
    return this
  },
  conjugate: function () {
    this._x *=
      -1;
    this._y *= -1;
    this._z *= -1;
    this.onChangeCallback();
    return this
  },
  dot: function (a) {
    return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
  },
  lengthSq: function () {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
  },
  length: function () {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
  },
  normalize: function () {
    var a = this.length();
    0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
    this.onChangeCallback();
    return this
  },
  multiply: function (a, b) {
    return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
  },
  multiplyQuaternions: function (a, b) {
    var c = a._x,
      d = a._y,
      e = a._z,
      f = a._w,
      g = b._x,
      h = b._y,
      k = b._z,
      n = b._w;
    this._x = c * n + f * g + d * k - e * h;
    this._y = d * n + f * h + e * g - c * k;
    this._z = e * n + f * k + c * h - d * g;
    this._w = f * n - c * g - d * h - e * k;
    this.onChangeCallback();
    return this
  },
  multiplyVector3: function (a) {
    console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
    return a.applyQuaternion(this)
  },
  slerp: function (a, b) {
    if (0 === b) return this;
    if (1 === b) return this.copy(a);
    var c = this._x,
      d = this._y,
      e = this._z,
      f = this._w,
      g = f * a._w + c * a._x + d * a._y + e * a._z;
    0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
    if (1 <= g) return this._w = f, this._x = c, this._y = d, this._z = e, this;
    var h = Math.acos(g),
      k = Math.sqrt(1 - g * g);
    if (.001 > Math.abs(k)) return this._w = .5 * (f + this._w), this._x = .5 * (c + this._x), this._y = .5 * (d + this._y), this._z = .5 * (e + this._z), this;
    g = Math.sin((1 - b) * h) / k;
    h =
      Math.sin(b * h) / k;
    this._w = f * g + this._w * h;
    this._x = c * g + this._x * h;
    this._y = d * g + this._y * h;
    this._z = e * g + this._z * h;
    this.onChangeCallback();
    return this
  },
  equals: function (a) {
    return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
  },
  fromArray: function (a, b) {
    void 0 === b && (b = 0);
    this._x = a[b];
    this._y = a[b + 1];
    this._z = a[b + 2];
    this._w = a[b + 3];
    this.onChangeCallback();
    return this
  },
  toArray: function (a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this._x;
    a[b + 1] = this._y;
    a[b + 2] = this._z;
    a[b + 3] = this._w;
    return a
  },
  onChange: function (a) {
    this.onChangeCallback =
      a;
    return this
  },
  onChangeCallback: function () {},
  clone: function () {
    return new THREE.Quaternion(this._x, this._y, this._z, this._w)
  }
};
THREE.Quaternion.slerp = function (a, b, c, d) {
  return c.copy(a).slerp(b, d)
};
THREE.Vector2 = function (a, b) {
  this.x = a || 0;
  this.y = b || 0
};
THREE.Vector2.prototype = {
  constructor: THREE.Vector2,
  set: function (a, b) {
    this.x = a;
    this.y = b;
    return this
  },
  setX: function (a) {
    this.x = a;
    return this
  },
  setY: function (a) {
    this.y = a;
    return this
  },
  setComponent: function (a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;
      case 1:
        this.y = b;
        break;
      default:
        throw Error("index is out of range: " + a);
    }
  },
  getComponent: function (a) {
    switch (a) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error("index is out of range: " + a);
    }
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    return this
  },
  add: function (a,
    b) {
    if (void 0 !== b) return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
    this.x += a.x;
    this.y += a.y;
    return this
  },
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this
  },
  addScalar: function (a) {
    this.x += a;
    this.y += a;
    return this
  },
  sub: function (a, b) {
    if (void 0 !== b) return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
    this.x -= a.x;
    this.y -= a.y;
    return this
  },
  subVectors: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this
  },
  multiply: function (a) {
    this.x *= a.x;
    this.y *= a.y;
    return this
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    return this
  },
  divide: function (a) {
    this.x /= a.x;
    this.y /= a.y;
    return this
  },
  divideScalar: function (a) {
    0 !== a ? (a = 1 / a, this.x *= a, this.y *= a) : this.y = this.x = 0;
    return this
  },
  min: function (a) {
    this.x > a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    return this
  },
  max: function (a) {
    this.x < a.x && (this.x = a.x);
    this.y < a.y && (this.y = a.y);
    return this
  },
  clamp: function (a,
    b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    return this
  },
  clampScalar: function () {
    var a, b;
    return function (c, d) {
      void 0 === a && (a = new THREE.Vector2, b = new THREE.Vector2);
      a.set(c, c);
      b.set(d, d);
      return this.clamp(a, b)
    }
  }(),
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  },
  roundToZero: function () {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    return this
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    return this
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  },
  normalize: function () {
    return this.divideScalar(this.length())
  },
  distanceTo: function (a) {
    return Math.sqrt(this.distanceToSquared(a))
  },
  distanceToSquared: function (a) {
    var b =
      this.x - a.x;
    a = this.y - a.y;
    return b * b + a * a
  },
  setLength: function (a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a / b);
    return this
  },
  lerp: function (a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    return this
  },
  equals: function (a) {
    return a.x === this.x && a.y === this.y
  },
  fromArray: function (a, b) {
    void 0 === b && (b = 0);
    this.x = a[b];
    this.y = a[b + 1];
    return this
  },
  toArray: function (a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this.x;
    a[b + 1] = this.y;
    return a
  },
  clone: function () {
    return new THREE.Vector2(this.x, this.y)
  }
};
THREE.Vector3 = function (a, b, c) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0
};
THREE.Vector3.prototype = {
  constructor: THREE.Vector3,
  set: function (a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c;
    return this
  },
  setX: function (a) {
    this.x = a;
    return this
  },
  setY: function (a) {
    this.y = a;
    return this
  },
  setZ: function (a) {
    this.z = a;
    return this
  },
  setComponent: function (a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;
      case 1:
        this.y = b;
        break;
      case 2:
        this.z = b;
        break;
      default:
        throw Error("index is out of range: " + a);
    }
  },
  getComponent: function (a) {
    switch (a) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error("index is out of range: " +
          a);
    }
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    return this
  },
  add: function (a, b) {
    if (void 0 !== b) return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this
  },
  addScalar: function (a) {
    this.x += a;
    this.y += a;
    this.z += a;
    return this
  },
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this
  },
  sub: function (a, b) {
    if (void 0 !== b) return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
      this.subVectors(a, b);
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    return this
  },
  subVectors: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this
  },
  multiply: function (a, b) {
    if (void 0 !== b) return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
    this.x *= a.x;
    this.y *= a.y;
    this.z *= a.z;
    return this
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this
  },
  multiplyVectors: function (a, b) {
    this.x = a.x * b.x;
    this.y =
      a.y * b.y;
    this.z = a.z * b.z;
    return this
  },
  applyEuler: function () {
    var a;
    return function (b) {
      !1 === b instanceof THREE.Euler && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");
      void 0 === a && (a = new THREE.Quaternion);
      this.applyQuaternion(a.setFromEuler(b));
      return this
    }
  }(),
  applyAxisAngle: function () {
    var a;
    return function (b, c) {
      void 0 === a && (a = new THREE.Quaternion);
      this.applyQuaternion(a.setFromAxisAngle(b, c));
      return this
    }
  }(),
  applyMatrix3: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z;
    a = a.elements;
    this.x = a[0] * b + a[3] * c + a[6] * d;
    this.y = a[1] * b + a[4] * c + a[7] * d;
    this.z = a[2] * b + a[5] * c + a[8] * d;
    return this
  },
  applyMatrix4: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z;
    a = a.elements;
    this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
    this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
    this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
    return this
  },
  applyProjection: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z;
    a = a.elements;
    var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
    this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
    this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
    this.z =
      (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
    return this
  },
  applyQuaternion: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z,
      e = a.x,
      f = a.y,
      g = a.z;
    a = a.w;
    var h = a * b + f * d - g * c,
      k = a * c + g * b - e * d,
      n = a * d + e * c - f * b,
      b = -e * b - f * c - g * d;
    this.x = h * a + b * -e + k * -g - n * -f;
    this.y = k * a + b * -f + n * -e - h * -g;
    this.z = n * a + b * -g + h * -f - k * -e;
    return this
  },
  project: function () {
    var a;
    return function (b) {
      void 0 === a && (a = new THREE.Matrix4);
      a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld));
      return this.applyProjection(a)
    }
  }(),
  unproject: function () {
    var a;
    return function (b) {
      void 0 ===
        a && (a = new THREE.Matrix4);
      a.multiplyMatrices(b.matrixWorld, a.getInverse(b.projectionMatrix));
      return this.applyProjection(a)
    }
  }(),
  transformDirection: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z;
    a = a.elements;
    this.x = a[0] * b + a[4] * c + a[8] * d;
    this.y = a[1] * b + a[5] * c + a[9] * d;
    this.z = a[2] * b + a[6] * c + a[10] * d;
    this.normalize();
    return this
  },
  divide: function (a) {
    this.x /= a.x;
    this.y /= a.y;
    this.z /= a.z;
    return this
  },
  divideScalar: function (a) {
    0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a) : this.z = this.y = this.x = 0;
    return this
  },
  min: function (a) {
    this.x >
      a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    this.z > a.z && (this.z = a.z);
    return this
  },
  max: function (a) {
    this.x < a.x && (this.x = a.x);
    this.y < a.y && (this.y = a.y);
    this.z < a.z && (this.z = a.z);
    return this
  },
  clamp: function (a, b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
    return this
  },
  clampScalar: function () {
    var a, b;
    return function (c, d) {
      void 0 === a && (a = new THREE.Vector3, b = new THREE.Vector3);
      a.set(c, c, c);
      b.set(d, d, d);
      return this.clamp(a,
        b)
    }
  }(),
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this
  },
  roundToZero: function () {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
    return this
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y + this.z * a.z
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  },
  lengthManhattan: function () {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
  },
  normalize: function () {
    return this.divideScalar(this.length())
  },
  setLength: function (a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a /
      b);
    return this
  },
  lerp: function (a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    this.z += (a.z - this.z) * b;
    return this
  },
  cross: function (a, b) {
    if (void 0 !== b) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b);
    var c = this.x,
      d = this.y,
      e = this.z;
    this.x = d * a.z - e * a.y;
    this.y = e * a.x - c * a.z;
    this.z = c * a.y - d * a.x;
    return this
  },
  crossVectors: function (a, b) {
    var c = a.x,
      d = a.y,
      e = a.z,
      f = b.x,
      g = b.y,
      h = b.z;
    this.x = d * h - e * g;
    this.y = e * f - c * h;
    this.z = c * g - d * f;
    return this
  },
  projectOnVector: function () {
    var a, b;
    return function (c) {
      void 0 === a && (a = new THREE.Vector3);
      a.copy(c).normalize();
      b = this.dot(a);
      return this.copy(a).multiplyScalar(b)
    }
  }(),
  projectOnPlane: function () {
    var a;
    return function (b) {
      void 0 === a && (a = new THREE.Vector3);
      a.copy(this).projectOnVector(b);
      return this.sub(a)
    }
  }(),
  reflect: function () {
    var a;
    return function (b) {
      void 0 === a && (a = new THREE.Vector3);
      return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)))
    }
  }(),
  angleTo: function (a) {
    a = this.dot(a) / (this.length() * a.length());
    return Math.acos(THREE.Math.clamp(a, -1, 1))
  },
  distanceTo: function (a) {
    return Math.sqrt(this.distanceToSquared(a))
  },
  distanceToSquared: function (a) {
    var b = this.x - a.x,
      c = this.y - a.y;
    a = this.z - a.z;
    return b * b + c * c + a * a
  },
  setEulerFromRotationMatrix: function (a, b) {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
  },
  setEulerFromQuaternion: function (a, b) {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
  },
  getPositionFromMatrix: function (a) {
    console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
    return this.setFromMatrixPosition(a)
  },
  getScaleFromMatrix: function (a) {
    console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
    return this.setFromMatrixScale(a)
  },
  getColumnFromMatrix: function (a, b) {
    console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
    return this.setFromMatrixColumn(a,
      b)
  },
  setFromMatrixPosition: function (a) {
    this.x = a.elements[12];
    this.y = a.elements[13];
    this.z = a.elements[14];
    return this
  },
  setFromMatrixScale: function (a) {
    var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(),
      c = this.set(a.elements[4], a.elements[5], a.elements[6]).length();
    a = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
    this.x = b;
    this.y = c;
    this.z = a;
    return this
  },
  setFromMatrixColumn: function (a, b) {
    var c = 4 * a,
      d = b.elements;
    this.x = d[c];
    this.y = d[c + 1];
    this.z = d[c + 2];
    return this
  },
  equals: function (a) {
    return a.x ===
      this.x && a.y === this.y && a.z === this.z
  },
  fromArray: function (a, b) {
    void 0 === b && (b = 0);
    this.x = a[b];
    this.y = a[b + 1];
    this.z = a[b + 2];
    return this
  },
  toArray: function (a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this.x;
    a[b + 1] = this.y;
    a[b + 2] = this.z;
    return a
  },
  clone: function () {
    return new THREE.Vector3(this.x, this.y, this.z)
  }
};
THREE.Vector4 = function (a, b, c, d) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0;
  this.w = void 0 !== d ? d : 1
};
THREE.Vector4.prototype = {
  constructor: THREE.Vector4,
  set: function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.w = d;
    return this
  },
  setX: function (a) {
    this.x = a;
    return this
  },
  setY: function (a) {
    this.y = a;
    return this
  },
  setZ: function (a) {
    this.z = a;
    return this
  },
  setW: function (a) {
    this.w = a;
    return this
  },
  setComponent: function (a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;
      case 1:
        this.y = b;
        break;
      case 2:
        this.z = b;
        break;
      case 3:
        this.w = b;
        break;
      default:
        throw Error("index is out of range: " + a);
    }
  },
  getComponent: function (a) {
    switch (a) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error("index is out of range: " + a);
    }
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    this.w = void 0 !== a.w ? a.w : 1;
    return this
  },
  add: function (a, b) {
    if (void 0 !== b) return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    this.w += a.w;
    return this
  },
  addScalar: function (a) {
    this.x += a;
    this.y += a;
    this.z += a;
    this.w += a;
    return this
  },
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this
  },
  sub: function (a, b) {
    if (void 0 !== b) return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    this.w -= a.w;
    return this
  },
  subVectors: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    this.w *= a;
    return this
  },
  applyMatrix4: function (a) {
    var b =
      this.x,
      c = this.y,
      d = this.z,
      e = this.w;
    a = a.elements;
    this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
    this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
    this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
    this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
    return this
  },
  divideScalar: function (a) {
    0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a) : (this.z = this.y = this.x = 0, this.w = 1);
    return this
  },
  setAxisAngleFromQuaternion: function (a) {
    this.w = 2 * Math.acos(a.w);
    var b = Math.sqrt(1 - a.w * a.w);
    1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
    return this
  },
  setAxisAngleFromRotationMatrix: function (a) {
    var b, c, d;
    a = a.elements;
    var e = a[0];
    d = a[4];
    var f = a[8],
      g = a[1],
      h = a[5],
      k = a[9];
    c = a[2];
    b = a[6];
    var n = a[10];
    if (.01 > Math.abs(d - g) && .01 > Math.abs(f - c) && .01 > Math.abs(k - b)) {
      if (.1 > Math.abs(d + g) && .1 > Math.abs(f + c) && .1 > Math.abs(k + b) && .1 > Math.abs(e + h + n - 3)) return this.set(1, 0, 0, 0), this;
      a = Math.PI;
      e = (e + 1) / 2;
      h = (h + 1) / 2;
      n = (n + 1) / 2;
      d = (d + g) / 4;
      f = (f + c) / 4;
      k = (k + b) / 4;
      e > h && e > n ? .01 > e ? (b = 0, d = c = .707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : h > n ? .01 > h ? (b = .707106781, c = 0, d = .707106781) : (c = Math.sqrt(h),
        b = d / c, d = k / c) : .01 > n ? (c = b = .707106781, d = 0) : (d = Math.sqrt(n), b = f / d, c = k / d);
      this.set(b, c, d, a);
      return this
    }
    a = Math.sqrt((b - k) * (b - k) + (f - c) * (f - c) + (g - d) * (g - d));
    .001 > Math.abs(a) && (a = 1);
    this.x = (b - k) / a;
    this.y = (f - c) / a;
    this.z = (g - d) / a;
    this.w = Math.acos((e + h + n - 1) / 2);
    return this
  },
  min: function (a) {
    this.x > a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    this.z > a.z && (this.z = a.z);
    this.w > a.w && (this.w = a.w);
    return this
  },
  max: function (a) {
    this.x < a.x && (this.x = a.x);
    this.y < a.y && (this.y = a.y);
    this.z < a.z && (this.z = a.z);
    this.w < a.w && (this.w = a.w);
    return this
  },
  clamp: function (a, b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
    this.w < a.w ? this.w = a.w : this.w > b.w && (this.w = b.w);
    return this
  },
  clampScalar: function () {
    var a, b;
    return function (c, d) {
      void 0 === a && (a = new THREE.Vector4, b = new THREE.Vector4);
      a.set(c, c, c, c);
      b.set(d, d, d, d);
      return this.clamp(a, b)
    }
  }(),
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this
  },
  roundToZero: function () {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
    this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
    return this
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  },
  lengthManhattan: function () {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
  },
  normalize: function () {
    return this.divideScalar(this.length())
  },
  setLength: function (a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a / b);
    return this
  },
  lerp: function (a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    this.z += (a.z - this.z) * b;
    this.w += (a.w - this.w) * b;
    return this
  },
  equals: function (a) {
    return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
  },
  fromArray: function (a, b) {
    void 0 === b && (b = 0);
    this.x = a[b];
    this.y = a[b + 1];
    this.z = a[b + 2];
    this.w = a[b + 3];
    return this
  },
  toArray: function (a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this.x;
    a[b + 1] = this.y;
    a[b + 2] =
      this.z;
    a[b + 3] = this.w;
    return a
  },
  clone: function () {
    return new THREE.Vector4(this.x, this.y, this.z, this.w)
  }
};
THREE.Euler = function (a, b, c, d) {
  this._x = a || 0;
  this._y = b || 0;
  this._z = c || 0;
  this._order = d || THREE.Euler.DefaultOrder
};
THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
THREE.Euler.DefaultOrder = "XYZ";
THREE.Euler.prototype = {
  constructor: THREE.Euler,
  _x: 0,
  _y: 0,
  _z: 0,
  _order: THREE.Euler.DefaultOrder,
  get x() {
    return this._x
  },
  set x(a) {
    this._x = a;
    this.onChangeCallback()
  },
  get y() {
    return this._y
  },
  set y(a) {
    this._y = a;
    this.onChangeCallback()
  },
  get z() {
    return this._z
  },
  set z(a) {
    this._z = a;
    this.onChangeCallback()
  },
  get order() {
    return this._order
  },
  set order(a) {
    this._order = a;
    this.onChangeCallback()
  },
  set: function (a, b, c, d) {
    this._x = a;
    this._y = b;
    this._z = c;
    this._order = d || this._order;
    this.onChangeCallback();
    return this
  },
  copy: function (a) {
    this._x =
      a._x;
    this._y = a._y;
    this._z = a._z;
    this._order = a._order;
    this.onChangeCallback();
    return this
  },
  setFromRotationMatrix: function (a, b) {
    var c = THREE.Math.clamp,
      d = a.elements,
      e = d[0],
      f = d[4],
      g = d[8],
      h = d[1],
      k = d[5],
      n = d[9],
      p = d[2],
      q = d[6],
      d = d[10];
    b = b || this._order;
    "XYZ" === b ? (this._y = Math.asin(c(g, -1, 1)), .99999 > Math.abs(g) ? (this._x = Math.atan2(-n, d), this._z = Math.atan2(-f, e)) : (this._x = Math.atan2(q, k), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-c(n, -1, 1)), .99999 > Math.abs(n) ? (this._y = Math.atan2(g, d), this._z = Math.atan2(h, k)) : (this._y =
      Math.atan2(-p, e), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(c(q, -1, 1)), .99999 > Math.abs(q) ? (this._y = Math.atan2(-p, d), this._z = Math.atan2(-f, k)) : (this._y = 0, this._z = Math.atan2(h, e))) : "ZYX" === b ? (this._y = Math.asin(-c(p, -1, 1)), .99999 > Math.abs(p) ? (this._x = Math.atan2(q, d), this._z = Math.atan2(h, e)) : (this._x = 0, this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z = Math.asin(c(h, -1, 1)), .99999 > Math.abs(h) ? (this._x = Math.atan2(-n, k), this._y = Math.atan2(-p, e)) : (this._x = 0, this._y = Math.atan2(g, d))) : "XZY" === b ? (this._z = Math.asin(-c(f,
      -1, 1)), .99999 > Math.abs(f) ? (this._x = Math.atan2(q, k), this._y = Math.atan2(g, e)) : (this._x = Math.atan2(-n, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
    this._order = b;
    this.onChangeCallback();
    return this
  },
  setFromQuaternion: function (a, b, c) {
    var d = THREE.Math.clamp,
      e = a.x * a.x,
      f = a.y * a.y,
      g = a.z * a.z,
      h = a.w * a.w;
    b = b || this._order;
    "XYZ" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.y * a.z), h - e - f + g), this._y = Math.asin(d(2 * (a.x * a.z + a.y * a.w), -1, 1)), this._z = Math.atan2(2 * (a.z * a.w - a.x *
      a.y), h + e - f - g)) : "YXZ" === b ? (this._x = Math.asin(d(2 * (a.x * a.w - a.y * a.z), -1, 1)), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h - e - f + g), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h - e + f - g)) : "ZXY" === b ? (this._x = Math.asin(d(2 * (a.x * a.w + a.y * a.z), -1, 1)), this._y = Math.atan2(2 * (a.y * a.w - a.z * a.x), h - e - f + g), this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), h - e + f - g)) : "ZYX" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.z * a.y), h - e - f + g), this._y = Math.asin(d(2 * (a.y * a.w - a.x * a.z), -1, 1)), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h + e - f - g)) : "YZX" === b ? (this._x = Math.atan2(2 *
      (a.x * a.w - a.z * a.y), h - e + f - g), this._y = Math.atan2(2 * (a.y * a.w - a.x * a.z), h + e - f - g), this._z = Math.asin(d(2 * (a.x * a.y + a.z * a.w), -1, 1))) : "XZY" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.y * a.z), h - e + f - g), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h + e - f - g), this._z = Math.asin(d(2 * (a.z * a.w - a.x * a.y), -1, 1))) : console.warn("THREE.Euler: .setFromQuaternion() given unsupported order: " + b);
    this._order = b;
    if (!1 !== c) this.onChangeCallback();
    return this
  },
  reorder: function () {
    var a = new THREE.Quaternion;
    return function (b) {
      a.setFromEuler(this);
      this.setFromQuaternion(a, b)
    }
  }(),
  equals: function (a) {
    return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
  },
  fromArray: function (a) {
    this._x = a[0];
    this._y = a[1];
    this._z = a[2];
    void 0 !== a[3] && (this._order = a[3]);
    this.onChangeCallback();
    return this
  },
  toArray: function () {
    return [this._x, this._y, this._z, this._order]
  },
  onChange: function (a) {
    this.onChangeCallback = a;
    return this
  },
  onChangeCallback: function () {},
  clone: function () {
    return new THREE.Euler(this._x, this._y, this._z, this._order)
  }
};
THREE.Line3 = function (a, b) {
  this.start = void 0 !== a ? a : new THREE.Vector3;
  this.end = void 0 !== b ? b : new THREE.Vector3
};
THREE.Line3.prototype = {
  constructor: THREE.Line3,
  set: function (a, b) {
    this.start.copy(a);
    this.end.copy(b);
    return this
  },
  copy: function (a) {
    this.start.copy(a.start);
    this.end.copy(a.end);
    return this
  },
  center: function (a) {
    return (a || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
  },
  delta: function (a) {
    return (a || new THREE.Vector3).subVectors(this.end, this.start)
  },
  distanceSq: function () {
    return this.start.distanceToSquared(this.end)
  },
  distance: function () {
    return this.start.distanceTo(this.end)
  },
  at: function (a,
    b) {
    var c = b || new THREE.Vector3;
    return this.delta(c).multiplyScalar(a).add(this.start)
  },
  closestPointToPointParameter: function () {
    var a = new THREE.Vector3,
      b = new THREE.Vector3;
    return function (c, d) {
      a.subVectors(c, this.start);
      b.subVectors(this.end, this.start);
      var e = b.dot(b),
        e = b.dot(a) / e;
      d && (e = THREE.Math.clamp(e, 0, 1));
      return e
    }
  }(),
  closestPointToPoint: function (a, b, c) {
    a = this.closestPointToPointParameter(a, b);
    c = c || new THREE.Vector3;
    return this.delta(c).multiplyScalar(a).add(this.start)
  },
  applyMatrix4: function (a) {
    this.start.applyMatrix4(a);
    this.end.applyMatrix4(a);
    return this
  },
  equals: function (a) {
    return a.start.equals(this.start) && a.end.equals(this.end)
  },
  clone: function () {
    return (new THREE.Line3).copy(this)
  }
};
THREE.Box2 = function (a, b) {
  this.min = void 0 !== a ? a : new THREE.Vector2(Infinity, Infinity);
  this.max = void 0 !== b ? b : new THREE.Vector2(-Infinity, -Infinity)
};
THREE.Box2.prototype = {
  constructor: THREE.Box2,
  set: function (a, b) {
    this.min.copy(a);
    this.max.copy(b);
    return this
  },
  setFromPoints: function (a) {
    this.makeEmpty();
    for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
    return this
  },
  setFromCenterAndSize: function () {
    var a = new THREE.Vector2;
    return function (b, c) {
      var d = a.copy(c).multiplyScalar(.5);
      this.min.copy(b).sub(d);
      this.max.copy(b).add(d);
      return this
    }
  }(),
  copy: function (a) {
    this.min.copy(a.min);
    this.max.copy(a.max);
    return this
  },
  makeEmpty: function () {
    this.min.x =
      this.min.y = Infinity;
    this.max.x = this.max.y = -Infinity;
    return this
  },
  empty: function () {
    return this.max.x < this.min.x || this.max.y < this.min.y
  },
  center: function (a) {
    return (a || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
  },
  size: function (a) {
    return (a || new THREE.Vector2).subVectors(this.max, this.min)
  },
  expandByPoint: function (a) {
    this.min.min(a);
    this.max.max(a);
    return this
  },
  expandByVector: function (a) {
    this.min.sub(a);
    this.max.add(a);
    return this
  },
  expandByScalar: function (a) {
    this.min.addScalar(-a);
    this.max.addScalar(a);
    return this
  },
  containsPoint: function (a) {
    return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
  },
  containsBox: function (a) {
    return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
  },
  getParameter: function (a, b) {
    return (b || new THREE.Vector2).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
  },
  isIntersectionBox: function (a) {
    return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y >
      this.max.y ? !1 : !0
  },
  clampPoint: function (a, b) {
    return (b || new THREE.Vector2).copy(a).clamp(this.min, this.max)
  },
  distanceToPoint: function () {
    var a = new THREE.Vector2;
    return function (b) {
      return a.copy(b).clamp(this.min, this.max).sub(b).length()
    }
  }(),
  intersect: function (a) {
    this.min.max(a.min);
    this.max.min(a.max);
    return this
  },
  union: function (a) {
    this.min.min(a.min);
    this.max.max(a.max);
    return this
  },
  translate: function (a) {
    this.min.add(a);
    this.max.add(a);
    return this
  },
  equals: function (a) {
    return a.min.equals(this.min) &&
      a.max.equals(this.max)
  },
  clone: function () {
    return (new THREE.Box2).copy(this)
  }
};
THREE.Box3 = function (a, b) {
  this.min = void 0 !== a ? a : new THREE.Vector3(Infinity, Infinity, Infinity);
  this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity)
};
THREE.Box3.prototype = {
  constructor: THREE.Box3,
  set: function (a, b) {
    this.min.copy(a);
    this.max.copy(b);
    return this
  },
  setFromPoints: function (a) {
    this.makeEmpty();
    for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
    return this
  },
  setFromCenterAndSize: function () {
    var a = new THREE.Vector3;
    return function (b, c) {
      var d = a.copy(c).multiplyScalar(.5);
      this.min.copy(b).sub(d);
      this.max.copy(b).add(d);
      return this
    }
  }(),
  setFromObject: function () {
    var a = new THREE.Vector3;
    return function (b) {
      var c = this;
      b.updateMatrixWorld(!0);
      this.makeEmpty();
      b.traverse(function (b) {
        var e = b.geometry;
        if (void 0 !== e)
          if (e instanceof THREE.Geometry)
            for (var f = e.vertices, e = 0, g = f.length; e < g; e++) a.copy(f[e]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a);
          else if (e instanceof THREE.BufferGeometry && void 0 !== e.attributes.position)
          for (f = e.attributes.position.array, e = 0, g = f.length; e < g; e += 3) a.set(f[e], f[e + 1], f[e + 2]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a)
      });
      return this
    }
  }(),
  copy: function (a) {
    this.min.copy(a.min);
    this.max.copy(a.max);
    return this
  },
  makeEmpty: function () {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this
  },
  empty: function () {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
  },
  center: function (a) {
    return (a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
  },
  size: function (a) {
    return (a || new THREE.Vector3).subVectors(this.max, this.min)
  },
  expandByPoint: function (a) {
    this.min.min(a);
    this.max.max(a);
    return this
  },
  expandByVector: function (a) {
    this.min.sub(a);
    this.max.add(a);
    return this
  },
  expandByScalar: function (a) {
    this.min.addScalar(-a);
    this.max.addScalar(a);
    return this
  },
  containsPoint: function (a) {
    return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
  },
  containsBox: function (a) {
    return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
  },
  getParameter: function (a, b) {
    return (b || new THREE.Vector3).set((a.x - this.min.x) / (this.max.x -
      this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
  },
  isIntersectionBox: function (a) {
    return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
  },
  clampPoint: function (a, b) {
    return (b || new THREE.Vector3).copy(a).clamp(this.min, this.max)
  },
  distanceToPoint: function () {
    var a = new THREE.Vector3;
    return function (b) {
      return a.copy(b).clamp(this.min, this.max).sub(b).length()
    }
  }(),
  getBoundingSphere: function () {
    var a =
      new THREE.Vector3;
    return function (b) {
      b = b || new THREE.Sphere;
      b.center = this.center();
      b.radius = .5 * this.size(a).length();
      return b
    }
  }(),
  intersect: function (a) {
    this.min.max(a.min);
    this.max.min(a.max);
    return this
  },
  union: function (a) {
    this.min.min(a.min);
    this.max.max(a.max);
    return this
  },
  applyMatrix4: function () {
    var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    return function (b) {
      a[0].set(this.min.x, this.min.y,
        this.min.z).applyMatrix4(b);
      a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
      a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
      a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
      a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
      a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
      a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
      a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
      this.makeEmpty();
      this.setFromPoints(a);
      return this
    }
  }(),
  translate: function (a) {
    this.min.add(a);
    this.max.add(a);
    return this
  },
  equals: function (a) {
    return a.min.equals(this.min) && a.max.equals(this.max)
  },
  clone: function () {
    return (new THREE.Box3).copy(this)
  }
};
THREE.Matrix3 = function () {
  this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
};
THREE.Matrix3.prototype = {
  constructor: THREE.Matrix3,
  set: function (a, b, c, d, e, f, g, h, k) {
    var n = this.elements;
    n[0] = a;
    n[3] = b;
    n[6] = c;
    n[1] = d;
    n[4] = e;
    n[7] = f;
    n[2] = g;
    n[5] = h;
    n[8] = k;
    return this
  },
  identity: function () {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this
  },
  copy: function (a) {
    a = a.elements;
    this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
    return this
  },
  multiplyVector3: function (a) {
    console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
    return a.applyMatrix3(this)
  },
  multiplyVector3Array: function (a) {
    console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
    return this.applyToVector3Array(a)
  },
  applyToVector3Array: function () {
    var a = new THREE.Vector3;
    return function (b, c, d) {
      void 0 === c && (c = 0);
      void 0 === d && (d = b.length);
      for (var e = 0; e < d; e += 3, c += 3) a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix3(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
      return b
    }
  }(),
  multiplyScalar: function (a) {
    var b = this.elements;
    b[0] *= a;
    b[3] *= a;
    b[6] *=
      a;
    b[1] *= a;
    b[4] *= a;
    b[7] *= a;
    b[2] *= a;
    b[5] *= a;
    b[8] *= a;
    return this
  },
  determinant: function () {
    var a = this.elements,
      b = a[0],
      c = a[1],
      d = a[2],
      e = a[3],
      f = a[4],
      g = a[5],
      h = a[6],
      k = a[7],
      a = a[8];
    return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
  },
  getInverse: function (a, b) {
    var c = a.elements,
      d = this.elements;
    d[0] = c[10] * c[5] - c[6] * c[9];
    d[1] = -c[10] * c[1] + c[2] * c[9];
    d[2] = c[6] * c[1] - c[2] * c[5];
    d[3] = -c[10] * c[4] + c[6] * c[8];
    d[4] = c[10] * c[0] - c[2] * c[8];
    d[5] = -c[6] * c[0] + c[2] * c[4];
    d[6] = c[9] * c[4] - c[5] * c[8];
    d[7] = -c[9] * c[0] + c[1] * c[8];
    d[8] = c[5] * c[0] - c[1] * c[4];
    c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];
    if (0 === c) {
      if (b) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
      console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");
      this.identity();
      return this
    }
    this.multiplyScalar(1 / c);
    return this
  },
  transpose: function () {
    var a, b = this.elements;
    a = b[1];
    b[1] = b[3];
    b[3] = a;
    a = b[2];
    b[2] = b[6];
    b[6] = a;
    a = b[5];
    b[5] = b[7];
    b[7] = a;
    return this
  },
  flattenToArrayOffset: function (a, b) {
    var c = this.elements;
    a[b] = c[0];
    a[b + 1] = c[1];
    a[b + 2] = c[2];
    a[b + 3] = c[3];
    a[b + 4] = c[4];
    a[b + 5] = c[5];
    a[b + 6] = c[6];
    a[b + 7] = c[7];
    a[b + 8] = c[8];
    return a
  },
  getNormalMatrix: function (a) {
    this.getInverse(a).transpose();
    return this
  },
  transposeIntoArray: function (a) {
    var b = this.elements;
    a[0] = b[0];
    a[1] = b[3];
    a[2] = b[6];
    a[3] = b[1];
    a[4] = b[4];
    a[5] = b[7];
    a[6] = b[2];
    a[7] = b[5];
    a[8] = b[8];
    return this
  },
  fromArray: function (a) {
    this.elements.set(a);
    return this
  },
  toArray: function () {
    var a = this.elements;
    return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]]
  },
  clone: function () {
    return (new THREE.Matrix3).fromArray(this.elements)
  }
};
THREE.Matrix4 = function () {
  this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
};
THREE.Matrix4.prototype = {
  constructor: THREE.Matrix4,
  set: function (a, b, c, d, e, f, g, h, k, n, p, q, m, r, t, s) {
    var u = this.elements;
    u[0] = a;
    u[4] = b;
    u[8] = c;
    u[12] = d;
    u[1] = e;
    u[5] = f;
    u[9] = g;
    u[13] = h;
    u[2] = k;
    u[6] = n;
    u[10] = p;
    u[14] = q;
    u[3] = m;
    u[7] = r;
    u[11] = t;
    u[15] = s;
    return this
  },
  identity: function () {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
  },
  copy: function (a) {
    this.elements.set(a.elements);
    return this
  },
  extractPosition: function (a) {
    console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
    return this.copyPosition(a)
  },
  copyPosition: function (a) {
    var b = this.elements;
    a = a.elements;
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    return this
  },
  extractRotation: function () {
    var a = new THREE.Vector3;
    return function (b) {
      var c = this.elements;
      b = b.elements;
      var d = 1 / a.set(b[0], b[1], b[2]).length(),
        e = 1 / a.set(b[4], b[5], b[6]).length(),
        f = 1 / a.set(b[8], b[9], b[10]).length();
      c[0] = b[0] * d;
      c[1] = b[1] * d;
      c[2] = b[2] * d;
      c[4] = b[4] * e;
      c[5] = b[5] * e;
      c[6] = b[6] * e;
      c[8] = b[8] * f;
      c[9] = b[9] * f;
      c[10] = b[10] * f;
      return this
    }
  }(),
  makeRotationFromEuler: function (a) {
    !1 === a instanceof THREE.Euler &&
      console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    var b = this.elements,
      c = a.x,
      d = a.y,
      e = a.z,
      f = Math.cos(c),
      c = Math.sin(c),
      g = Math.cos(d),
      d = Math.sin(d),
      h = Math.cos(e),
      e = Math.sin(e);
    if ("XYZ" === a.order) {
      a = f * h;
      var k = f * e,
        n = c * h,
        p = c * e;
      b[0] = g * h;
      b[4] = -g * e;
      b[8] = d;
      b[1] = k + n * d;
      b[5] = a - p * d;
      b[9] = -c * g;
      b[2] = p - a * d;
      b[6] = n + k * d;
      b[10] = f * g
    } else "YXZ" === a.order ? (a = g * h, k = g * e, n = d * h, p = d * e, b[0] = a + p * c, b[4] = n * c - k, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = k * c - n, b[6] = p + a * c,
      b[10] = f * g) : "ZXY" === a.order ? (a = g * h, k = g * e, n = d * h, p = d * e, b[0] = a - p * c, b[4] = -f * e, b[8] = n + k * c, b[1] = k + n * c, b[5] = f * h, b[9] = p - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, k = f * e, n = c * h, p = c * e, b[0] = g * h, b[4] = n * d - k, b[8] = a * d + p, b[1] = g * e, b[5] = p * d + a, b[9] = k * d - n, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, k = f * d, n = c * g, p = c * d, b[0] = g * h, b[4] = p - a * e, b[8] = n * e + k, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = k * e + n, b[10] = a - p * e) : "XZY" === a.order && (a = f * g, k = f * d, n = c * g, p = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + p, b[5] = f * h, b[9] = k *
      e - n, b[2] = n * e - k, b[6] = c * h, b[10] = p * e + a);
    b[3] = 0;
    b[7] = 0;
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return this
  },
  setRotationFromQuaternion: function (a) {
    console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
    return this.makeRotationFromQuaternion(a)
  },
  makeRotationFromQuaternion: function (a) {
    var b = this.elements,
      c = a.x,
      d = a.y,
      e = a.z,
      f = a.w,
      g = c + c,
      h = d + d,
      k = e + e;
    a = c * g;
    var n = c * h,
      c = c * k,
      p = d * h,
      d = d * k,
      e = e * k,
      g = f * g,
      h = f * h,
      f = f * k;
    b[0] = 1 - (p + e);
    b[4] = n - f;
    b[8] = c + h;
    b[1] = n + f;
    b[5] = 1 -
      (a + e);
    b[9] = d - g;
    b[2] = c - h;
    b[6] = d + g;
    b[10] = 1 - (a + p);
    b[3] = 0;
    b[7] = 0;
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return this
  },
  lookAt: function () {
    var a = new THREE.Vector3,
      b = new THREE.Vector3,
      c = new THREE.Vector3;
    return function (d, e, f) {
      var g = this.elements;
      c.subVectors(d, e).normalize();
      0 === c.length() && (c.z = 1);
      a.crossVectors(f, c).normalize();
      0 === a.length() && (c.x += 1E-4, a.crossVectors(f, c).normalize());
      b.crossVectors(c, a);
      g[0] = a.x;
      g[4] = b.x;
      g[8] = c.x;
      g[1] = a.y;
      g[5] = b.y;
      g[9] = c.y;
      g[2] = a.z;
      g[6] = b.z;
      g[10] = c.z;
      return this
    }
  }(),
  multiply: function (a, b) {
    return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
  },
  multiplyMatrices: function (a, b) {
    var c = a.elements,
      d = b.elements,
      e = this.elements,
      f = c[0],
      g = c[4],
      h = c[8],
      k = c[12],
      n = c[1],
      p = c[5],
      q = c[9],
      m = c[13],
      r = c[2],
      t = c[6],
      s = c[10],
      u = c[14],
      v = c[3],
      y = c[7],
      G = c[11],
      c = c[15],
      w = d[0],
      K = d[4],
      x = d[8],
      D = d[12],
      E = d[1],
      A = d[5],
      B = d[9],
      F = d[13],
      R = d[2],
      H = d[6],
      C = d[10],
      T = d[14],
      Q = d[3],
      O = d[7],
      S = d[11],
      d = d[15];
    e[0] = f * w + g * E + h * R + k * Q;
    e[4] = f * K + g * A + h * H + k * O;
    e[8] = f * x + g * B + h * C + k * S;
    e[12] = f * D + g * F + h * T + k * d;
    e[1] = n * w + p * E + q * R + m * Q;
    e[5] = n * K + p * A + q * H + m * O;
    e[9] = n * x + p * B + q * C + m * S;
    e[13] = n * D + p * F + q * T + m * d;
    e[2] = r * w + t * E + s * R + u * Q;
    e[6] = r * K + t * A + s * H + u * O;
    e[10] = r * x + t * B + s * C + u * S;
    e[14] = r * D + t * F + s * T + u * d;
    e[3] = v * w + y * E + G * R + c * Q;
    e[7] = v * K + y * A + G * H + c * O;
    e[11] = v * x + y * B + G * C + c * S;
    e[15] = v * D + y * F + G * T + c * d;
    return this
  },
  multiplyToArray: function (a, b, c) {
    var d = this.elements;
    this.multiplyMatrices(a, b);
    c[0] = d[0];
    c[1] = d[1];
    c[2] = d[2];
    c[3] = d[3];
    c[4] =
      d[4];
    c[5] = d[5];
    c[6] = d[6];
    c[7] = d[7];
    c[8] = d[8];
    c[9] = d[9];
    c[10] = d[10];
    c[11] = d[11];
    c[12] = d[12];
    c[13] = d[13];
    c[14] = d[14];
    c[15] = d[15];
    return this
  },
  multiplyScalar: function (a) {
    var b = this.elements;
    b[0] *= a;
    b[4] *= a;
    b[8] *= a;
    b[12] *= a;
    b[1] *= a;
    b[5] *= a;
    b[9] *= a;
    b[13] *= a;
    b[2] *= a;
    b[6] *= a;
    b[10] *= a;
    b[14] *= a;
    b[3] *= a;
    b[7] *= a;
    b[11] *= a;
    b[15] *= a;
    return this
  },
  multiplyVector3: function (a) {
    console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
    return a.applyProjection(this)
  },
  multiplyVector4: function (a) {
    console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return a.applyMatrix4(this)
  },
  multiplyVector3Array: function (a) {
    console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
    return this.applyToVector3Array(a)
  },
  applyToVector3Array: function () {
    var a = new THREE.Vector3;
    return function (b, c, d) {
      void 0 === c && (c = 0);
      void 0 === d && (d =
        b.length);
      for (var e = 0; e < d; e += 3, c += 3) a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix4(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
      return b
    }
  }(),
  rotateAxis: function (a) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
    a.transformDirection(this)
  },
  crossVector: function (a) {
    console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return a.applyMatrix4(this)
  },
  determinant: function () {
    var a = this.elements,
      b =
      a[0],
      c = a[4],
      d = a[8],
      e = a[12],
      f = a[1],
      g = a[5],
      h = a[9],
      k = a[13],
      n = a[2],
      p = a[6],
      q = a[10],
      m = a[14];
    return a[3] * (+e * h * p - d * k * p - e * g * q + c * k * q + d * g * m - c * h * m) + a[7] * (+b * h * m - b * k * q + e * f * q - d * f * m + d * k * n - e * h * n) + a[11] * (+b * k * p - b * g * m - e * f * p + c * f * m + e * g * n - c * k * n) + a[15] * (-d * g * n - b * h * p + b * g * q + d * f * p - c * f * q + c * h * n)
  },
  transpose: function () {
    var a = this.elements,
      b;
    b = a[1];
    a[1] = a[4];
    a[4] = b;
    b = a[2];
    a[2] = a[8];
    a[8] = b;
    b = a[6];
    a[6] = a[9];
    a[9] = b;
    b = a[3];
    a[3] = a[12];
    a[12] = b;
    b = a[7];
    a[7] = a[13];
    a[13] = b;
    b = a[11];
    a[11] = a[14];
    a[14] = b;
    return this
  },
  flattenToArrayOffset: function (a,
    b) {
    var c = this.elements;
    a[b] = c[0];
    a[b + 1] = c[1];
    a[b + 2] = c[2];
    a[b + 3] = c[3];
    a[b + 4] = c[4];
    a[b + 5] = c[5];
    a[b + 6] = c[6];
    a[b + 7] = c[7];
    a[b + 8] = c[8];
    a[b + 9] = c[9];
    a[b + 10] = c[10];
    a[b + 11] = c[11];
    a[b + 12] = c[12];
    a[b + 13] = c[13];
    a[b + 14] = c[14];
    a[b + 15] = c[15];
    return a
  },
  getPosition: function () {
    var a = new THREE.Vector3;
    return function () {
      console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
      var b = this.elements;
      return a.set(b[12], b[13], b[14])
    }
  }(),
  setPosition: function (a) {
    var b =
      this.elements;
    b[12] = a.x;
    b[13] = a.y;
    b[14] = a.z;
    return this
  },
  getInverse: function (a, b) {
    var c = this.elements,
      d = a.elements,
      e = d[0],
      f = d[4],
      g = d[8],
      h = d[12],
      k = d[1],
      n = d[5],
      p = d[9],
      q = d[13],
      m = d[2],
      r = d[6],
      t = d[10],
      s = d[14],
      u = d[3],
      v = d[7],
      y = d[11],
      d = d[15];
    c[0] = p * s * v - q * t * v + q * r * y - n * s * y - p * r * d + n * t * d;
    c[4] = h * t * v - g * s * v - h * r * y + f * s * y + g * r * d - f * t * d;
    c[8] = g * q * v - h * p * v + h * n * y - f * q * y - g * n * d + f * p * d;
    c[12] = h * p * r - g * q * r - h * n * t + f * q * t + g * n * s - f * p * s;
    c[1] = q * t * u - p * s * u - q * m * y + k * s * y + p * m * d - k * t * d;
    c[5] = g * s * u - h * t * u + h * m * y - e * s * y - g * m * d + e * t * d;
    c[9] = h * p * u - g * q * u - h * k *
      y + e * q * y + g * k * d - e * p * d;
    c[13] = g * q * m - h * p * m + h * k * t - e * q * t - g * k * s + e * p * s;
    c[2] = n * s * u - q * r * u + q * m * v - k * s * v - n * m * d + k * r * d;
    c[6] = h * r * u - f * s * u - h * m * v + e * s * v + f * m * d - e * r * d;
    c[10] = f * q * u - h * n * u + h * k * v - e * q * v - f * k * d + e * n * d;
    c[14] = h * n * m - f * q * m - h * k * r + e * q * r + f * k * s - e * n * s;
    c[3] = p * r * u - n * t * u - p * m * v + k * t * v + n * m * y - k * r * y;
    c[7] = f * t * u - g * r * u + g * m * v - e * t * v - f * m * y + e * r * y;
    c[11] = g * n * u - f * p * u - g * k * v + e * p * v + f * k * y - e * n * y;
    c[15] = f * p * m - g * n * m + g * k * r - e * p * r - f * k * t + e * n * t;
    c = e * c[0] + k * c[4] + m * c[8] + u * c[12];
    if (0 == c) {
      if (b) throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
      console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
      this.identity();
      return this
    }
    this.multiplyScalar(1 / c);
    return this
  },
  translate: function (a) {
    console.warn("THREE.Matrix4: .translate() has been removed.")
  },
  rotateX: function (a) {
    console.warn("THREE.Matrix4: .rotateX() has been removed.")
  },
  rotateY: function (a) {
    console.warn("THREE.Matrix4: .rotateY() has been removed.")
  },
  rotateZ: function (a) {
    console.warn("THREE.Matrix4: .rotateZ() has been removed.")
  },
  rotateByAxis: function (a, b) {
    console.warn("THREE.Matrix4: .rotateByAxis() has been removed.")
  },
  scale: function (a) {
    var b = this.elements,
      c = a.x,
      d = a.y;
    a = a.z;
    b[0] *= c;
    b[4] *= d;
    b[8] *= a;
    b[1] *= c;
    b[5] *= d;
    b[9] *= a;
    b[2] *= c;
    b[6] *= d;
    b[10] *= a;
    b[3] *= c;
    b[7] *= d;
    b[11] *= a;
    return this
  },
  getMaxScaleOnAxis: function () {
    var a = this.elements;
    return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])))
  },
  makeTranslation: function (a, b, c) {
    this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
    return this
  },
  makeRotationX: function (a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(1,
      0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationY: function (a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationZ: function (a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationAxis: function (a, b) {
    var c = Math.cos(b),
      d = Math.sin(b),
      e = 1 - c,
      f = a.x,
      g = a.y,
      h = a.z,
      k = e * f,
      n = e * g;
    this.set(k * f + c, k * g - d * h, k * h + d * g, 0, k * g + d * h, n * g + c, n * h - d * f, 0, k * h - d * g, n * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
    return this
  },
  makeScale: function (a, b, c) {
    this.set(a,
      0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
    return this
  },
  compose: function (a, b, c) {
    this.makeRotationFromQuaternion(b);
    this.scale(c);
    this.setPosition(a);
    return this
  },
  decompose: function () {
    var a = new THREE.Vector3,
      b = new THREE.Matrix4;
    return function (c, d, e) {
      var f = this.elements,
        g = a.set(f[0], f[1], f[2]).length(),
        h = a.set(f[4], f[5], f[6]).length(),
        k = a.set(f[8], f[9], f[10]).length();
      0 > this.determinant() && (g = -g);
      c.x = f[12];
      c.y = f[13];
      c.z = f[14];
      b.elements.set(this.elements);
      c = 1 / g;
      var f = 1 / h,
        n = 1 / k;
      b.elements[0] *= c;
      b.elements[1] *=
        c;
      b.elements[2] *= c;
      b.elements[4] *= f;
      b.elements[5] *= f;
      b.elements[6] *= f;
      b.elements[8] *= n;
      b.elements[9] *= n;
      b.elements[10] *= n;
      d.setFromRotationMatrix(b);
      e.x = g;
      e.y = h;
      e.z = k;
      return this
    }
  }(),
  makeFrustum: function (a, b, c, d, e, f) {
    var g = this.elements;
    g[0] = 2 * e / (b - a);
    g[4] = 0;
    g[8] = (b + a) / (b - a);
    g[12] = 0;
    g[1] = 0;
    g[5] = 2 * e / (d - c);
    g[9] = (d + c) / (d - c);
    g[13] = 0;
    g[2] = 0;
    g[6] = 0;
    g[10] = -(f + e) / (f - e);
    g[14] = -2 * f * e / (f - e);
    g[3] = 0;
    g[7] = 0;
    g[11] = -1;
    g[15] = 0;
    return this
  },
  makePerspective: function (a, b, c, d) {
    a = c * Math.tan(THREE.Math.degToRad(.5 * a));
    var e = -a;
    return this.makeFrustum(e * b, a * b, e, a, c, d)
  },
  makeOrthographic: function (a, b, c, d, e, f) {
    var g = this.elements,
      h = b - a,
      k = c - d,
      n = f - e;
    g[0] = 2 / h;
    g[4] = 0;
    g[8] = 0;
    g[12] = -((b + a) / h);
    g[1] = 0;
    g[5] = 2 / k;
    g[9] = 0;
    g[13] = -((c + d) / k);
    g[2] = 0;
    g[6] = 0;
    g[10] = -2 / n;
    g[14] = -((f + e) / n);
    g[3] = 0;
    g[7] = 0;
    g[11] = 0;
    g[15] = 1;
    return this
  },
  fromArray: function (a) {
    this.elements.set(a);
    return this
  },
  toArray: function () {
    var a = this.elements;
    return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]
  },
  clone: function () {
    return (new THREE.Matrix4).fromArray(this.elements)
  }
};
THREE.Ray = function (a, b) {
  this.origin = void 0 !== a ? a : new THREE.Vector3;
  this.direction = void 0 !== b ? b : new THREE.Vector3
};
THREE.Ray.prototype = {
  constructor: THREE.Ray,
  set: function (a, b) {
    this.origin.copy(a);
    this.direction.copy(b);
    return this
  },
  copy: function (a) {
    this.origin.copy(a.origin);
    this.direction.copy(a.direction);
    return this
  },
  at: function (a, b) {
    return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)
  },
  recast: function () {
    var a = new THREE.Vector3;
    return function (b) {
      this.origin.copy(this.at(b, a));
      return this
    }
  }(),
  closestPointToPoint: function (a, b) {
    var c = b || new THREE.Vector3;
    c.subVectors(a, this.origin);
    var d = c.dot(this.direction);
    return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
  },
  distanceToPoint: function () {
    var a = new THREE.Vector3;
    return function (b) {
      var c = a.subVectors(b, this.origin).dot(this.direction);
      if (0 > c) return this.origin.distanceTo(b);
      a.copy(this.direction).multiplyScalar(c).add(this.origin);
      return a.distanceTo(b)
    }
  }(),
  distanceSqToSegment: function (a, b, c, d) {
    var e = a.clone().add(b).multiplyScalar(.5),
      f = b.clone().sub(a).normalize(),
      g = .5 * a.distanceTo(b),
      h =
      this.origin.clone().sub(e);
    a = -this.direction.dot(f);
    b = h.dot(this.direction);
    var k = -h.dot(f),
      n = h.lengthSq(),
      p = Math.abs(1 - a * a),
      q, m;
    0 <= p ? (h = a * k - b, q = a * b - k, m = g * p, 0 <= h ? q >= -m ? q <= m ? (g = 1 / p, h *= g, q *= g, a = h * (h + a * q + 2 * b) + q * (a * h + q + 2 * k) + n) : (q = g, h = Math.max(0, -(a * q + b)), a = -h * h + q * (q + 2 * k) + n) : (q = -g, h = Math.max(0, -(a * q + b)), a = -h * h + q * (q + 2 * k) + n) : q <= -m ? (h = Math.max(0, -(-a * g + b)), q = 0 < h ? -g : Math.min(Math.max(-g, -k), g), a = -h * h + q * (q + 2 * k) + n) : q <= m ? (h = 0, q = Math.min(Math.max(-g, -k), g), a = q * (q + 2 * k) + n) : (h = Math.max(0, -(a * g + b)), q = 0 < h ? g : Math.min(Math.max(-g,
      -k), g), a = -h * h + q * (q + 2 * k) + n)) : (q = 0 < a ? -g : g, h = Math.max(0, -(a * q + b)), a = -h * h + q * (q + 2 * k) + n);
    c && c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));
    d && d.copy(f.clone().multiplyScalar(q).add(e));
    return a
  },
  isIntersectionSphere: function (a) {
    return this.distanceToPoint(a.center) <= a.radius
  },
  intersectSphere: function () {
    var a = new THREE.Vector3;
    return function (b, c) {
      a.subVectors(b.center, this.origin);
      var d = a.dot(this.direction),
        e = a.dot(a) - d * d,
        f = b.radius * b.radius;
      if (e > f) return null;
      f = Math.sqrt(f - e);
      e = d - f;
      d += f;
      return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c)
    }
  }(),
  isIntersectionPlane: function (a) {
    var b = a.distanceToPoint(this.origin);
    return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
  },
  distanceToPlane: function (a) {
    var b = a.normal.dot(this.direction);
    if (0 == b) return 0 == a.distanceToPoint(this.origin) ? 0 : null;
    a = -(this.origin.dot(a.normal) + a.constant) / b;
    return 0 <= a ? a : null
  },
  intersectPlane: function (a, b) {
    var c = this.distanceToPlane(a);
    return null === c ? null : this.at(c, b)
  },
  isIntersectionBox: function () {
    var a = new THREE.Vector3;
    return function (b) {
      return null !== this.intersectBox(b, a)
    }
  }(),
  intersectBox: function (a, b) {
    var c, d, e, f, g;
    d = 1 / this.direction.x;
    f = 1 / this.direction.y;
    g = 1 / this.direction.z;
    var h = this.origin;
    0 <= d ? (c = (a.min.x - h.x) * d, d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d, d *= a.min.x - h.x);
    0 <= f ? (e = (a.min.y - h.y) * f, f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f, f *= a.min.y - h.y);
    if (c > f || e > d) return null;
    if (e > c || c !== c) c = e;
    if (f < d || d !== d) d = f;
    0 <= g ? (e = (a.min.z - h.z) * g, g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g, g *= a.min.z - h.z);
    if (c > g || e > d) return null;
    if (e > c || c !==
      c) c = e;
    if (g < d || d !== d) d = g;
    return 0 > d ? null : this.at(0 <= c ? c : d, b)
  },
  intersectTriangle: function () {
    var a = new THREE.Vector3,
      b = new THREE.Vector3,
      c = new THREE.Vector3,
      d = new THREE.Vector3;
    return function (e, f, g, h, k) {
      b.subVectors(f, e);
      c.subVectors(g, e);
      d.crossVectors(b, c);
      f = this.direction.dot(d);
      if (0 < f) {
        if (h) return null;
        h = 1
      } else if (0 > f) h = -1, f = -f;
      else return null;
      a.subVectors(this.origin, e);
      e = h * this.direction.dot(c.crossVectors(a, c));
      if (0 > e) return null;
      g = h * this.direction.dot(b.cross(a));
      if (0 > g || e + g > f) return null;
      e = -h * a.dot(d);
      return 0 > e ? null : this.at(e / f, k)
    }
  }(),
  applyMatrix4: function (a) {
    this.direction.add(this.origin).applyMatrix4(a);
    this.origin.applyMatrix4(a);
    this.direction.sub(this.origin);
    this.direction.normalize();
    return this
  },
  equals: function (a) {
    return a.origin.equals(this.origin) && a.direction.equals(this.direction)
  },
  clone: function () {
    return (new THREE.Ray).copy(this)
  }
};
THREE.Sphere = function (a, b) {
  this.center = void 0 !== a ? a : new THREE.Vector3;
  this.radius = void 0 !== b ? b : 0
};
THREE.Sphere.prototype = {
  constructor: THREE.Sphere,
  set: function (a, b) {
    this.center.copy(a);
    this.radius = b;
    return this
  },
  setFromPoints: function () {
    var a = new THREE.Box3;
    return function (b, c) {
      var d = this.center;
      void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);
      for (var e = 0, f = 0, g = b.length; f < g; f++) e = Math.max(e, d.distanceToSquared(b[f]));
      this.radius = Math.sqrt(e);
      return this
    }
  }(),
  copy: function (a) {
    this.center.copy(a.center);
    this.radius = a.radius;
    return this
  },
  empty: function () {
    return 0 >= this.radius
  },
  containsPoint: function (a) {
    return a.distanceToSquared(this.center) <=
      this.radius * this.radius
  },
  distanceToPoint: function (a) {
    return a.distanceTo(this.center) - this.radius
  },
  intersectsSphere: function (a) {
    var b = this.radius + a.radius;
    return a.center.distanceToSquared(this.center) <= b * b
  },
  clampPoint: function (a, b) {
    var c = this.center.distanceToSquared(a),
      d = b || new THREE.Vector3;
    d.copy(a);
    c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
    return d
  },
  getBoundingBox: function (a) {
    a = a || new THREE.Box3;
    a.set(this.center, this.center);
    a.expandByScalar(this.radius);
    return a
  },
  applyMatrix4: function (a) {
    this.center.applyMatrix4(a);
    this.radius *= a.getMaxScaleOnAxis();
    return this
  },
  translate: function (a) {
    this.center.add(a);
    return this
  },
  equals: function (a) {
    return a.center.equals(this.center) && a.radius === this.radius
  },
  clone: function () {
    return (new THREE.Sphere).copy(this)
  }
};
THREE.Frustum = function (a, b, c, d, e, f) {
  this.planes = [void 0 !== a ? a : new THREE.Plane, void 0 !== b ? b : new THREE.Plane, void 0 !== c ? c : new THREE.Plane, void 0 !== d ? d : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== f ? f : new THREE.Plane]
};
THREE.Frustum.prototype = {
  constructor: THREE.Frustum,
  set: function (a, b, c, d, e, f) {
    var g = this.planes;
    g[0].copy(a);
    g[1].copy(b);
    g[2].copy(c);
    g[3].copy(d);
    g[4].copy(e);
    g[5].copy(f);
    return this
  },
  copy: function (a) {
    for (var b = this.planes, c = 0; 6 > c; c++) b[c].copy(a.planes[c]);
    return this
  },
  setFromMatrix: function (a) {
    var b = this.planes,
      c = a.elements;
    a = c[0];
    var d = c[1],
      e = c[2],
      f = c[3],
      g = c[4],
      h = c[5],
      k = c[6],
      n = c[7],
      p = c[8],
      q = c[9],
      m = c[10],
      r = c[11],
      t = c[12],
      s = c[13],
      u = c[14],
      c = c[15];
    b[0].setComponents(f - a, n - g, r - p, c - t).normalize();
    b[1].setComponents(f +
      a, n + g, r + p, c + t).normalize();
    b[2].setComponents(f + d, n + h, r + q, c + s).normalize();
    b[3].setComponents(f - d, n - h, r - q, c - s).normalize();
    b[4].setComponents(f - e, n - k, r - m, c - u).normalize();
    b[5].setComponents(f + e, n + k, r + m, c + u).normalize();
    return this
  },
  intersectsObject: function () {
    var a = new THREE.Sphere;
    return function (b) {
      var c = b.geometry;
      null === c.boundingSphere && c.computeBoundingSphere();
      a.copy(c.boundingSphere);
      a.applyMatrix4(b.matrixWorld);
      return this.intersectsSphere(a)
    }
  }(),
  intersectsSphere: function (a) {
    var b = this.planes,
      c = a.center;
    a = -a.radius;
    for (var d = 0; 6 > d; d++)
      if (b[d].distanceToPoint(c) < a) return !1;
    return !0
  },
  intersectsBox: function () {
    var a = new THREE.Vector3,
      b = new THREE.Vector3;
    return function (c) {
      for (var d = this.planes, e = 0; 6 > e; e++) {
        var f = d[e];
        a.x = 0 < f.normal.x ? c.min.x : c.max.x;
        b.x = 0 < f.normal.x ? c.max.x : c.min.x;
        a.y = 0 < f.normal.y ? c.min.y : c.max.y;
        b.y = 0 < f.normal.y ? c.max.y : c.min.y;
        a.z = 0 < f.normal.z ? c.min.z : c.max.z;
        b.z = 0 < f.normal.z ? c.max.z : c.min.z;
        var g = f.distanceToPoint(a),
          f = f.distanceToPoint(b);
        if (0 > g && 0 > f) return !1
      }
      return !0
    }
  }(),
  containsPoint: function (a) {
    for (var b = this.planes, c = 0; 6 > c; c++)
      if (0 > b[c].distanceToPoint(a)) return !1;
    return !0
  },
  clone: function () {
    return (new THREE.Frustum).copy(this)
  }
};
THREE.Plane = function (a, b) {
  this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0);
  this.constant = void 0 !== b ? b : 0
};
THREE.Plane.prototype = {
  constructor: THREE.Plane,
  set: function (a, b) {
    this.normal.copy(a);
    this.constant = b;
    return this
  },
  setComponents: function (a, b, c, d) {
    this.normal.set(a, b, c);
    this.constant = d;
    return this
  },
  setFromNormalAndCoplanarPoint: function (a, b) {
    this.normal.copy(a);
    this.constant = -b.dot(this.normal);
    return this
  },
  setFromCoplanarPoints: function () {
    var a = new THREE.Vector3,
      b = new THREE.Vector3;
    return function (c, d, e) {
      d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
      this.setFromNormalAndCoplanarPoint(d,
        c);
      return this
    }
  }(),
  copy: function (a) {
    this.normal.copy(a.normal);
    this.constant = a.constant;
    return this
  },
  normalize: function () {
    var a = 1 / this.normal.length();
    this.normal.multiplyScalar(a);
    this.constant *= a;
    return this
  },
  negate: function () {
    this.constant *= -1;
    this.normal.negate();
    return this
  },
  distanceToPoint: function (a) {
    return this.normal.dot(a) + this.constant
  },
  distanceToSphere: function (a) {
    return this.distanceToPoint(a.center) - a.radius
  },
  projectPoint: function (a, b) {
    return this.orthoPoint(a, b).sub(a).negate()
  },
  orthoPoint: function (a,
    b) {
    var c = this.distanceToPoint(a);
    return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
  },
  isIntersectionLine: function (a) {
    var b = this.distanceToPoint(a.start);
    a = this.distanceToPoint(a.end);
    return 0 > b && 0 < a || 0 > a && 0 < b
  },
  intersectLine: function () {
    var a = new THREE.Vector3;
    return function (b, c) {
      var d = c || new THREE.Vector3,
        e = b.delta(a),
        f = this.normal.dot(e);
      if (0 == f) {
        if (0 == this.distanceToPoint(b.start)) return d.copy(b.start)
      } else return f = -(b.start.dot(this.normal) + this.constant) / f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
    }
  }(),
  coplanarPoint: function (a) {
    return (a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
  },
  applyMatrix4: function () {
    var a = new THREE.Vector3,
      b = new THREE.Vector3,
      c = new THREE.Matrix3;
    return function (d, e) {
      var f = e || c.getNormalMatrix(d),
        f = a.copy(this.normal).applyMatrix3(f),
        g = this.coplanarPoint(b);
      g.applyMatrix4(d);
      this.setFromNormalAndCoplanarPoint(f, g);
      return this
    }
  }(),
  translate: function (a) {
    this.constant -= a.dot(this.normal);
    return this
  },
  equals: function (a) {
    return a.normal.equals(this.normal) &&
      a.constant == this.constant
  },
  clone: function () {
    return (new THREE.Plane).copy(this)
  }
};
THREE.Math = {
  generateUUID: function () {
    var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      b = Array(36),
      c = 0,
      d;
    return function () {
      for (var e = 0; 36 > e; e++) 8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-" : 14 == e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a[19 == e ? d & 3 | 8 : d]);
      return b.join("")
    }
  }(),
  clamp: function (a, b, c) {
    return a < b ? b : a > c ? c : a
  },
  clampBottom: function (a, b) {
    return a < b ? b : a
  },
  mapLinear: function (a, b, c, d, e) {
    return d + (a - b) * (e - d) / (c - b)
  },
  smoothstep: function (a, b, c) {
    if (a <=
      b) return 0;
    if (a >= c) return 1;
    a = (a - b) / (c - b);
    return a * a * (3 - 2 * a)
  },
  smootherstep: function (a, b, c) {
    if (a <= b) return 0;
    if (a >= c) return 1;
    a = (a - b) / (c - b);
    return a * a * a * (a * (6 * a - 15) + 10)
  },
  random16: function () {
    return (65280 * Math.random() + 255 * Math.random()) / 65535
  },
  randInt: function (a, b) {
    return a + Math.floor(Math.random() * (b - a + 1))
  },
  randFloat: function (a, b) {
    return a + Math.random() * (b - a)
  },
  randFloatSpread: function (a) {
    return a * (.5 - Math.random())
  },
  degToRad: function () {
    var a = Math.PI / 180;
    return function (b) {
      return b * a
    }
  }(),
  radToDeg: function () {
    var a =
      180 / Math.PI;
    return function (b) {
      return b * a
    }
  }(),
  isPowerOfTwo: function (a) {
    return 0 === (a & a - 1) && 0 !== a
  }
};
THREE.Spline = function (a) {
  function b(a, b, c, d, e, f, g) {
    a = .5 * (c - a);
    d = .5 * (d - b);
    return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
  }
  this.points = a;
  var c = [],
    d = {
      x: 0,
      y: 0,
      z: 0
    },
    e, f, g, h, k, n, p, q, m;
  this.initFromArray = function (a) {
    this.points = [];
    for (var b = 0; b < a.length; b++) this.points[b] = {
      x: a[b][0],
      y: a[b][1],
      z: a[b][2]
    }
  };
  this.getPoint = function (a) {
    e = (this.points.length - 1) * a;
    f = Math.floor(e);
    g = e - f;
    c[0] = 0 === f ? f : f - 1;
    c[1] = f;
    c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
    c[3] = f > this.points.length - 3 ? this.points.length - 1 : f +
      2;
    n = this.points[c[0]];
    p = this.points[c[1]];
    q = this.points[c[2]];
    m = this.points[c[3]];
    h = g * g;
    k = g * h;
    d.x = b(n.x, p.x, q.x, m.x, g, h, k);
    d.y = b(n.y, p.y, q.y, m.y, g, h, k);
    d.z = b(n.z, p.z, q.z, m.z, g, h, k);
    return d
  };
  this.getControlPointsArray = function () {
    var a, b, c = this.points.length,
      d = [];
    for (a = 0; a < c; a++) b = this.points[a], d[a] = [b.x, b.y, b.z];
    return d
  };
  this.getLength = function (a) {
    var b, c, d, e = b = b = 0,
      f = new THREE.Vector3,
      g = new THREE.Vector3,
      h = [],
      k = 0;
    h[0] = 0;
    a || (a = 100);
    c = this.points.length * a;
    f.copy(this.points[0]);
    for (a = 1; a < c; a++) b =
      a / c, d = this.getPoint(b), g.copy(d), k += g.distanceTo(f), f.copy(d), b *= this.points.length - 1, b = Math.floor(b), b != e && (h[b] = k, e = b);
    h[h.length] = k;
    return {
      chunks: h,
      total: k
    }
  };
  this.reparametrizeByArcLength = function (a) {
    var b, c, d, e, f, g, h = [],
      k = new THREE.Vector3,
      m = this.getLength();
    h.push(k.copy(this.points[0]).clone());
    for (b = 1; b < this.points.length; b++) {
      c = m.chunks[b] - m.chunks[b - 1];
      g = Math.ceil(a * c / m.total);
      e = (b - 1) / (this.points.length - 1);
      f = b / (this.points.length - 1);
      for (c = 1; c < g - 1; c++) d = e + 1 / g * c * (f - e), d = this.getPoint(d), h.push(k.copy(d).clone());
      h.push(k.copy(this.points[b]).clone())
    }
    this.points = h
  }
};
THREE.Triangle = function (a, b, c) {
  this.a = void 0 !== a ? a : new THREE.Vector3;
  this.b = void 0 !== b ? b : new THREE.Vector3;
  this.c = void 0 !== c ? c : new THREE.Vector3
};
THREE.Triangle.normal = function () {
  var a = new THREE.Vector3;
  return function (b, c, d, e) {
    e = e || new THREE.Vector3;
    e.subVectors(d, c);
    a.subVectors(b, c);
    e.cross(a);
    b = e.lengthSq();
    return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
  }
}();
THREE.Triangle.barycoordFromPoint = function () {
  var a = new THREE.Vector3,
    b = new THREE.Vector3,
    c = new THREE.Vector3;
  return function (d, e, f, g, h) {
    a.subVectors(g, e);
    b.subVectors(f, e);
    c.subVectors(d, e);
    d = a.dot(a);
    e = a.dot(b);
    f = a.dot(c);
    var k = b.dot(b);
    g = b.dot(c);
    var n = d * k - e * e;
    h = h || new THREE.Vector3;
    if (0 == n) return h.set(-2, -1, -1);
    n = 1 / n;
    k = (k * f - e * g) * n;
    d = (d * g - e * f) * n;
    return h.set(1 - k - d, d, k)
  }
}();
THREE.Triangle.containsPoint = function () {
  var a = new THREE.Vector3;
  return function (b, c, d, e) {
    b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a);
    return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
  }
}();
THREE.Triangle.prototype = {
  constructor: THREE.Triangle,
  set: function (a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this
  },
  setFromPointsAndIndices: function (a, b, c, d) {
    this.a.copy(a[b]);
    this.b.copy(a[c]);
    this.c.copy(a[d]);
    return this
  },
  copy: function (a) {
    this.a.copy(a.a);
    this.b.copy(a.b);
    this.c.copy(a.c);
    return this
  },
  area: function () {
    var a = new THREE.Vector3,
      b = new THREE.Vector3;
    return function () {
      a.subVectors(this.c, this.b);
      b.subVectors(this.a, this.b);
      return .5 * a.cross(b).length()
    }
  }(),
  midpoint: function (a) {
    return (a ||
      new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
  },
  normal: function (a) {
    return THREE.Triangle.normal(this.a, this.b, this.c, a)
  },
  plane: function (a) {
    return (a || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
  },
  barycoordFromPoint: function (a, b) {
    return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
  },
  containsPoint: function (a) {
    return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
  },
  equals: function (a) {
    return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
  },
  clone: function () {
    return (new THREE.Triangle).copy(this)
  }
};
THREE.Clock = function (a) {
  this.autoStart = void 0 !== a ? a : !0;
  this.elapsedTime = this.oldTime = this.startTime = 0;
  this.running = !1
};
THREE.Clock.prototype = {
  constructor: THREE.Clock,
  start: function () {
    this.oldTime = this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
    this.running = !0
  },
  stop: function () {
    this.getElapsedTime();
    this.running = !1
  },
  getElapsedTime: function () {
    this.getDelta();
    return this.elapsedTime
  },
  getDelta: function () {
    var a = 0;
    this.autoStart && !this.running && this.start();
    if (this.running) {
      var b = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(),
        a = .001 * (b - this.oldTime);
      this.oldTime = b;
      this.elapsedTime += a
    }
    return a
  }
};
THREE.EventDispatcher = function () {};
THREE.EventDispatcher.prototype = {
  constructor: THREE.EventDispatcher,
  apply: function (a) {
    a.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
    a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
    a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
    a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
  },
  addEventListener: function (a, b) {
    void 0 === this._listeners && (this._listeners = {});
    var c = this._listeners;
    void 0 === c[a] && (c[a] = []); - 1 === c[a].indexOf(b) &&
      c[a].push(b)
  },
  hasEventListener: function (a, b) {
    if (void 0 === this._listeners) return !1;
    var c = this._listeners;
    return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
  },
  removeEventListener: function (a, b) {
    if (void 0 !== this._listeners) {
      var c = this._listeners[a];
      if (void 0 !== c) {
        var d = c.indexOf(b); - 1 !== d && c.splice(d, 1)
      }
    }
  },
  dispatchEvent: function (a) {
    if (void 0 !== this._listeners) {
      var b = this._listeners[a.type];
      if (void 0 !== b) {
        a.target = this;
        for (var c = [], d = b.length, e = 0; e < d; e++) c[e] = b[e];
        for (e = 0; e < d; e++) c[e].call(this, a)
      }
    }
  }
};
(function (a) {
  a.Raycaster = function (b, c, f, g) {
    this.ray = new a.Ray(b, c);
    this.near = f || 0;
    this.far = g || Infinity;
    this.params = {
      Sprite: {},
      Mesh: {},
      PointCloud: {
        threshold: 1
      },
      LOD: {},
      Line: {}
    }
  };
  var b = function (a, b) {
      return a.distance - b.distance
    },
    c = function (a, b, f, g) {
      a.raycast(b, f);
      if (!0 === g) {
        a = a.children;
        g = 0;
        for (var h = a.length; g < h; g++) c(a[g], b, f, !0)
      }
    };
  a.Raycaster.prototype = {
    constructor: a.Raycaster,
    precision: 1E-4,
    linePrecision: 1,
    set: function (a, b) {
      this.ray.set(a, b)
    },
    intersectObject: function (a, e) {
      var f = [];
      c(a, this, f, e);
      f.sort(b);
      return f
    },
    intersectObjects: function (a, e) {
      var f = [];
      if (!1 === a instanceof Array) return console.log("THREE.Raycaster.intersectObjects: objects is not an Array."), f;
      for (var g = 0, h = a.length; g < h; g++) c(a[g], this, f, e);
      f.sort(b);
      return f
    }
  }
})(THREE);
THREE.Object3D = function () {
  Object.defineProperty(this, "id", {
    value: THREE.Object3DIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.type = "Object3D";
  this.parent = void 0;
  this.children = [];
  this.up = THREE.Object3D.DefaultUp.clone();
  var a = new THREE.Vector3,
    b = new THREE.Euler,
    c = new THREE.Quaternion,
    d = new THREE.Vector3(1, 1, 1);
  b.onChange(function () {
    c.setFromEuler(b, !1)
  });
  c.onChange(function () {
    b.setFromQuaternion(c, void 0, !1)
  });
  Object.defineProperties(this, {
    position: {
      enumerable: !0,
      value: a
    },
    rotation: {
      enumerable: !0,
      value: b
    },
    quaternion: {
      enumerable: !0,
      value: c
    },
    scale: {
      enumerable: !0,
      value: d
    }
  });
  this.renderDepth = null;
  this.rotationAutoUpdate = !0;
  this.matrix = new THREE.Matrix4;
  this.matrixWorld = new THREE.Matrix4;
  this.matrixAutoUpdate = !0;
  this.matrixWorldNeedsUpdate = !1;
  this.visible = !0;
  this.receiveShadow = this.castShadow = !1;
  this.frustumCulled = !0;
  this.userData = {}
};
THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0);
THREE.Object3D.prototype = {
  constructor: THREE.Object3D,
  get eulerOrder() {
    console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
    return this.rotation.order
  },
  set eulerOrder(a) {
    console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
    this.rotation.order = a
  },
  get useQuaternion() {
    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
  },
  set useQuaternion(a) {
    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
  },
  applyMatrix: function (a) {
    this.matrix.multiplyMatrices(a, this.matrix);
    this.matrix.decompose(this.position, this.quaternion, this.scale)
  },
  setRotationFromAxisAngle: function (a, b) {
    this.quaternion.setFromAxisAngle(a, b)
  },
  setRotationFromEuler: function (a) {
    this.quaternion.setFromEuler(a, !0)
  },
  setRotationFromMatrix: function (a) {
    this.quaternion.setFromRotationMatrix(a)
  },
  setRotationFromQuaternion: function (a) {
    this.quaternion.copy(a)
  },
  rotateOnAxis: function () {
    var a = new THREE.Quaternion;
    return function (b, c) {
      a.setFromAxisAngle(b,
        c);
      this.quaternion.multiply(a);
      return this
    }
  }(),
  rotateX: function () {
    var a = new THREE.Vector3(1, 0, 0);
    return function (b) {
      return this.rotateOnAxis(a, b)
    }
  }(),
  rotateY: function () {
    var a = new THREE.Vector3(0, 1, 0);
    return function (b) {
      return this.rotateOnAxis(a, b)
    }
  }(),
  rotateZ: function () {
    var a = new THREE.Vector3(0, 0, 1);
    return function (b) {
      return this.rotateOnAxis(a, b)
    }
  }(),
  translateOnAxis: function () {
    var a = new THREE.Vector3;
    return function (b, c) {
      a.copy(b).applyQuaternion(this.quaternion);
      this.position.add(a.multiplyScalar(c));
      return this
    }
  }(),
  translate: function (a, b) {
    console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
    return this.translateOnAxis(b, a)
  },
  translateX: function () {
    var a = new THREE.Vector3(1, 0, 0);
    return function (b) {
      return this.translateOnAxis(a, b)
    }
  }(),
  translateY: function () {
    var a = new THREE.Vector3(0, 1, 0);
    return function (b) {
      return this.translateOnAxis(a, b)
    }
  }(),
  translateZ: function () {
    var a = new THREE.Vector3(0, 0, 1);
    return function (b) {
      return this.translateOnAxis(a,
        b)
    }
  }(),
  localToWorld: function (a) {
    return a.applyMatrix4(this.matrixWorld)
  },
  worldToLocal: function () {
    var a = new THREE.Matrix4;
    return function (b) {
      return b.applyMatrix4(a.getInverse(this.matrixWorld))
    }
  }(),
  lookAt: function () {
    var a = new THREE.Matrix4;
    return function (b) {
      a.lookAt(b, this.position, this.up);
      this.quaternion.setFromRotationMatrix(a)
    }
  }(),
  add: function (a) {
    if (1 < arguments.length) {
      for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);
      return this
    }
    if (a === this) return console.error("THREE.Object3D.add:",
      a, "can't be added as a child of itself."), this;
    a instanceof THREE.Object3D ? (void 0 !== a.parent && a.parent.remove(a), a.parent = this, a.dispatchEvent({
      type: "added"
    }), this.children.push(a)) : console.error("THREE.Object3D.add:", a, "is not an instance of THREE.Object3D.");
    return this
  },
  remove: function (a) {
    if (1 < arguments.length)
      for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]);
    b = this.children.indexOf(a); - 1 !== b && (a.parent = void 0, a.dispatchEvent({
      type: "removed"
    }), this.children.splice(b, 1))
  },
  getChildByName: function (a,
    b) {
    console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
    return this.getObjectByName(a, b)
  },
  getObjectById: function (a, b) {
    if (this.id === a) return this;
    for (var c = 0, d = this.children.length; c < d; c++) {
      var e = this.children[c].getObjectById(a, b);
      if (void 0 !== e) return e
    }
  },
  getObjectByName: function (a, b) {
    if (this.name === a) return this;
    for (var c = 0, d = this.children.length; c < d; c++) {
      var e = this.children[c].getObjectByName(a, b);
      if (void 0 !== e) return e
    }
  },
  getWorldPosition: function (a) {
    a = a || new THREE.Vector3;
    this.updateMatrixWorld(!0);
    return a.setFromMatrixPosition(this.matrixWorld)
  },
  getWorldQuaternion: function () {
    var a = new THREE.Vector3,
      b = new THREE.Vector3;
    return function (c) {
      c = c || new THREE.Quaternion;
      this.updateMatrixWorld(!0);
      this.matrixWorld.decompose(a, c, b);
      return c
    }
  }(),
  getWorldRotation: function () {
    var a = new THREE.Quaternion;
    return function (b) {
      b = b || new THREE.Euler;
      this.getWorldQuaternion(a);
      return b.setFromQuaternion(a, this.rotation.order, !1)
    }
  }(),
  getWorldScale: function () {
    var a = new THREE.Vector3,
      b = new THREE.Quaternion;
    return function (c) {
      c = c || new THREE.Vector3;
      this.updateMatrixWorld(!0);
      this.matrixWorld.decompose(a, b, c);
      return c
    }
  }(),
  getWorldDirection: function () {
    var a = new THREE.Quaternion;
    return function (b) {
      b = b || new THREE.Vector3;
      this.getWorldQuaternion(a);
      return b.set(0, 0, 1).applyQuaternion(a)
    }
  }(),
  raycast: function () {},
  traverse: function (a) {
    a(this);
    for (var b = 0, c = this.children.length; b < c; b++) this.children[b].traverse(a)
  },
  traverseVisible: function (a) {
    if (!1 !== this.visible) {
      a(this);
      for (var b = 0, c = this.children.length; b <
        c; b++) this.children[b].traverseVisible(a)
    }
  },
  updateMatrix: function () {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = !0
  },
  updateMatrixWorld: function (a) {
    !0 === this.matrixAutoUpdate && this.updateMatrix();
    if (!0 === this.matrixWorldNeedsUpdate || !0 === a) void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
    for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
  },
  toJSON: function () {
    var a = {
        metadata: {
          version: 4.3,
          type: "Object",
          generator: "ObjectExporter"
        }
      },
      b = {},
      c = function (c) {
        void 0 === a.geometries && (a.geometries = []);
        if (void 0 === b[c.uuid]) {
          var d = c.toJSON();
          delete d.metadata;
          b[c.uuid] = d;
          a.geometries.push(d)
        }
        return c.uuid
      },
      d = {},
      e = function (b) {
        void 0 === a.materials && (a.materials = []);
        if (void 0 === d[b.uuid]) {
          var c = b.toJSON();
          delete c.metadata;
          d[b.uuid] = c;
          a.materials.push(c)
        }
        return b.uuid
      },
      f = function (a) {
        var b = {};
        b.uuid = a.uuid;
        b.type = a.type;
        "" !== a.name && (b.name = a.name);
        "{}" !==
        JSON.stringify(a.userData) && (b.userData = a.userData);
        !0 !== a.visible && (b.visible = a.visible);
        a instanceof THREE.PerspectiveCamera ? (b.fov = a.fov, b.aspect = a.aspect, b.near = a.near, b.far = a.far) : a instanceof THREE.OrthographicCamera ? (b.left = a.left, b.right = a.right, b.top = a.top, b.bottom = a.bottom, b.near = a.near, b.far = a.far) : a instanceof THREE.AmbientLight ? b.color = a.color.getHex() : a instanceof THREE.DirectionalLight ? (b.color = a.color.getHex(), b.intensity = a.intensity) : a instanceof THREE.PointLight ? (b.color = a.color.getHex(),
          b.intensity = a.intensity, b.distance = a.distance) : a instanceof THREE.SpotLight ? (b.color = a.color.getHex(), b.intensity = a.intensity, b.distance = a.distance, b.angle = a.angle, b.exponent = a.exponent) : a instanceof THREE.HemisphereLight ? (b.color = a.color.getHex(), b.groundColor = a.groundColor.getHex()) : a instanceof THREE.Mesh ? (b.geometry = c(a.geometry), b.material = e(a.material)) : a instanceof THREE.Line ? (b.geometry = c(a.geometry), b.material = e(a.material)) : a instanceof THREE.Sprite && (b.material = e(a.material));
        b.matrix =
          a.matrix.toArray();
        if (0 < a.children.length) {
          b.children = [];
          for (var d = 0; d < a.children.length; d++) b.children.push(f(a.children[d]))
        }
        return b
      };
    a.object = f(this);
    return a
  },
  clone: function (a, b) {
    void 0 === a && (a = new THREE.Object3D);
    void 0 === b && (b = !0);
    a.name = this.name;
    a.up.copy(this.up);
    a.position.copy(this.position);
    a.quaternion.copy(this.quaternion);
    a.scale.copy(this.scale);
    a.renderDepth = this.renderDepth;
    a.rotationAutoUpdate = this.rotationAutoUpdate;
    a.matrix.copy(this.matrix);
    a.matrixWorld.copy(this.matrixWorld);
    a.matrixAutoUpdate = this.matrixAutoUpdate;
    a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
    a.visible = this.visible;
    a.castShadow = this.castShadow;
    a.receiveShadow = this.receiveShadow;
    a.frustumCulled = this.frustumCulled;
    a.userData = JSON.parse(JSON.stringify(this.userData));
    if (!0 === b)
      for (var c = 0; c < this.children.length; c++) a.add(this.children[c].clone());
    return a
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
THREE.Object3DIdCount = 0;
THREE.Projector = function () {
  console.warn("THREE.Projector has been moved to /examples/renderers/Projector.js.");
  this.projectVector = function (a, b) {
    console.warn("THREE.Projector: .projectVector() is now vector.project().");
    a.project(b)
  };
  this.unprojectVector = function (a, b) {
    console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
    a.unproject(b)
  };
  this.pickingRay = function (a, b) {
    console.error("THREE.Projector: .pickingRay() has been removed.")
  }
};
THREE.Face3 = function (a, b, c, d, e, f) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
  this.vertexNormals = d instanceof Array ? d : [];
  this.color = e instanceof THREE.Color ? e : new THREE.Color;
  this.vertexColors = e instanceof Array ? e : [];
  this.vertexTangents = [];
  this.materialIndex = void 0 !== f ? f : 0
};
THREE.Face3.prototype = {
  constructor: THREE.Face3,
  clone: function () {
    var a = new THREE.Face3(this.a, this.b, this.c);
    a.normal.copy(this.normal);
    a.color.copy(this.color);
    a.materialIndex = this.materialIndex;
    for (var b = 0, c = this.vertexNormals.length; b < c; b++) a.vertexNormals[b] = this.vertexNormals[b].clone();
    b = 0;
    for (c = this.vertexColors.length; b < c; b++) a.vertexColors[b] = this.vertexColors[b].clone();
    b = 0;
    for (c = this.vertexTangents.length; b < c; b++) a.vertexTangents[b] = this.vertexTangents[b].clone();
    return a
  }
};
THREE.Face4 = function (a, b, c, d, e, f, g) {
  console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
  return new THREE.Face3(a, b, c, e, f, g)
};
THREE.BufferAttribute = function (a, b) {
  this.array = a;
  this.itemSize = b;
  this.needsUpdate = !1
};
THREE.BufferAttribute.prototype = {
  constructor: THREE.BufferAttribute,
  get length() {
    return this.array.length
  },
  copyAt: function (a, b, c) {
    a *= this.itemSize;
    c *= b.itemSize;
    for (var d = 0, e = this.itemSize; d < e; d++) this.array[a + d] = b.array[c + d]
  },
  set: function (a) {
    this.array.set(a);
    return this
  },
  setX: function (a, b) {
    this.array[a * this.itemSize] = b;
    return this
  },
  setY: function (a, b) {
    this.array[a * this.itemSize + 1] = b;
    return this
  },
  setZ: function (a, b) {
    this.array[a * this.itemSize + 2] = b;
    return this
  },
  setXY: function (a, b, c) {
    a *= this.itemSize;
    this.array[a] = b;
    this.array[a + 1] = c;
    return this
  },
  setXYZ: function (a, b, c, d) {
    a *= this.itemSize;
    this.array[a] = b;
    this.array[a + 1] = c;
    this.array[a + 2] = d;
    return this
  },
  setXYZW: function (a, b, c, d, e) {
    a *= this.itemSize;
    this.array[a] = b;
    this.array[a + 1] = c;
    this.array[a + 2] = d;
    this.array[a + 3] = e;
    return this
  },
  clone: function () {
    return new THREE.BufferAttribute(new this.array.constructor(this.array), this.itemSize)
  }
};
THREE.Int8Attribute = function (a, b) {
  console.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.Uint8Attribute = function (a, b) {
  console.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.Uint8ClampedAttribute = function (a, b) {
  console.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.Int16Attribute = function (a, b) {
  console.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.Uint16Attribute = function (a, b) {
  console.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.Int32Attribute = function (a, b) {
  console.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.Uint32Attribute = function (a, b) {
  console.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.Float32Attribute = function (a, b) {
  console.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.Float64Attribute = function (a, b) {
  console.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b)
};
THREE.BufferGeometry = function () {
  Object.defineProperty(this, "id", {
    value: THREE.GeometryIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.type = "BufferGeometry";
  this.attributes = {};
  this.attributesKeys = [];
  this.offsets = this.drawcalls = [];
  this.boundingSphere = this.boundingBox = null
};
THREE.BufferGeometry.prototype = {
  constructor: THREE.BufferGeometry,
  addAttribute: function (a, b, c) {
    !1 === b instanceof THREE.BufferAttribute ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.attributes[a] = {
      array: b,
      itemSize: c
    }) : (this.attributes[a] = b, this.attributesKeys = Object.keys(this.attributes))
  },
  getAttribute: function (a) {
    return this.attributes[a]
  },
  addDrawCall: function (a, b, c) {
    this.drawcalls.push({
      start: a,
      count: b,
      index: void 0 !== c ? c : 0
    })
  },
  applyMatrix: function (a) {
    var b =
      this.attributes.position;
    void 0 !== b && (a.applyToVector3Array(b.array), b.needsUpdate = !0);
    b = this.attributes.normal;
    void 0 !== b && ((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array), b.needsUpdate = !0)
  },
  center: function () {},
  fromGeometry: function (a, b) {
    b = b || {
      vertexColors: THREE.NoColors
    };
    var c = a.vertices,
      d = a.faces,
      e = a.faceVertexUvs,
      f = b.vertexColors,
      g = 0 < e[0].length,
      h = 3 == d[0].vertexNormals.length,
      k = new Float32Array(9 * d.length);
    this.addAttribute("position", new THREE.BufferAttribute(k, 3));
    var n =
      new Float32Array(9 * d.length);
    this.addAttribute("normal", new THREE.BufferAttribute(n, 3));
    if (f !== THREE.NoColors) {
      var p = new Float32Array(9 * d.length);
      this.addAttribute("color", new THREE.BufferAttribute(p, 3))
    }
    if (!0 === g) {
      var q = new Float32Array(6 * d.length);
      this.addAttribute("uv", new THREE.BufferAttribute(q, 2))
    }
    for (var m = 0, r = 0, t = 0; m < d.length; m++, r += 6, t += 9) {
      var s = d[m],
        u = c[s.a],
        v = c[s.b],
        y = c[s.c];
      k[t] = u.x;
      k[t + 1] = u.y;
      k[t + 2] = u.z;
      k[t + 3] = v.x;
      k[t + 4] = v.y;
      k[t + 5] = v.z;
      k[t + 6] = y.x;
      k[t + 7] = y.y;
      k[t + 8] = y.z;
      !0 === h ? (u = s.vertexNormals[0],
        v = s.vertexNormals[1], y = s.vertexNormals[2], n[t] = u.x, n[t + 1] = u.y, n[t + 2] = u.z, n[t + 3] = v.x, n[t + 4] = v.y, n[t + 5] = v.z, n[t + 6] = y.x, n[t + 7] = y.y, n[t + 8] = y.z) : (u = s.normal, n[t] = u.x, n[t + 1] = u.y, n[t + 2] = u.z, n[t + 3] = u.x, n[t + 4] = u.y, n[t + 5] = u.z, n[t + 6] = u.x, n[t + 7] = u.y, n[t + 8] = u.z);
      f === THREE.FaceColors ? (s = s.color, p[t] = s.r, p[t + 1] = s.g, p[t + 2] = s.b, p[t + 3] = s.r, p[t + 4] = s.g, p[t + 5] = s.b, p[t + 6] = s.r, p[t + 7] = s.g, p[t + 8] = s.b) : f === THREE.VertexColors && (u = s.vertexColors[0], v = s.vertexColors[1], s = s.vertexColors[2], p[t] = u.r, p[t + 1] = u.g, p[t + 2] = u.b, p[t + 3] =
        v.r, p[t + 4] = v.g, p[t + 5] = v.b, p[t + 6] = s.r, p[t + 7] = s.g, p[t + 8] = s.b);
      !0 === g && (s = e[0][m][0], u = e[0][m][1], v = e[0][m][2], q[r] = s.x, q[r + 1] = s.y, q[r + 2] = u.x, q[r + 3] = u.y, q[r + 4] = v.x, q[r + 5] = v.y)
    }
    this.computeBoundingSphere();
    return this
  },
  computeBoundingBox: function () {
    var a = new THREE.Vector3;
    return function () {
      null === this.boundingBox && (this.boundingBox = new THREE.Box3);
      var b = this.attributes.position.array;
      if (b) {
        var c = this.boundingBox;
        c.makeEmpty();
        for (var d = 0, e = b.length; d < e; d += 3) a.set(b[d], b[d + 1], b[d + 2]), c.expandByPoint(a)
      }
      if (void 0 ===
        b || 0 === b.length) this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0);
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')
    }
  }(),
  computeBoundingSphere: function () {
    var a = new THREE.Box3,
      b = new THREE.Vector3;
    return function () {
      null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
      var c = this.attributes.position.array;
      if (c) {
        a.makeEmpty();
        for (var d = this.boundingSphere.center, e = 0, f = c.length; e < f; e += 3) b.set(c[e], c[e + 1], c[e + 2]), a.expandByPoint(b);
        a.center(d);
        for (var g = 0, e = 0, f = c.length; e < f; e += 3) b.set(c[e], c[e + 1], c[e + 2]), g = Math.max(g, d.distanceToSquared(b));
        this.boundingSphere.radius = Math.sqrt(g);
        isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')
      }
    }
  }(),
  computeFaceNormals: function () {},
  computeVertexNormals: function () {
    var a =
      this.attributes;
    if (a.position) {
      var b = a.position.array;
      if (void 0 === a.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(b.length), 3));
      else
        for (var c = a.normal.array, d = 0, e = c.length; d < e; d++) c[d] = 0;
      var c = a.normal.array,
        f, g, h, k = new THREE.Vector3,
        n = new THREE.Vector3,
        p = new THREE.Vector3,
        q = new THREE.Vector3,
        m = new THREE.Vector3;
      if (a.index)
        for (var r = a.index.array, t = 0 < this.offsets.length ? this.offsets : [{
            start: 0,
            count: r.length,
            index: 0
          }], s = 0, u = t.length; s < u; ++s) {
          e = t[s].start;
          f = t[s].count;
          for (var v = t[s].index, d = e, e = e + f; d < e; d += 3) f = 3 * (v + r[d]), g = 3 * (v + r[d + 1]), h = 3 * (v + r[d + 2]), k.fromArray(b, f), n.fromArray(b, g), p.fromArray(b, h), q.subVectors(p, n), m.subVectors(k, n), q.cross(m), c[f] += q.x, c[f + 1] += q.y, c[f + 2] += q.z, c[g] += q.x, c[g + 1] += q.y, c[g + 2] += q.z, c[h] += q.x, c[h + 1] += q.y, c[h + 2] += q.z
        } else
          for (d = 0, e = b.length; d < e; d += 9) k.fromArray(b, d), n.fromArray(b, d + 3), p.fromArray(b, d + 6), q.subVectors(p, n), m.subVectors(k, n), q.cross(m), c[d] = q.x, c[d + 1] = q.y, c[d + 2] = q.z, c[d + 3] = q.x, c[d + 4] = q.y, c[d + 5] = q.z, c[d + 6] = q.x, c[d + 7] = q.y,
            c[d + 8] = q.z;
      this.normalizeNormals();
      a.normal.needsUpdate = !0
    }
  },
  computeTangents: function () {
    function a(a, b, c) {
      q.fromArray(d, 3 * a);
      m.fromArray(d, 3 * b);
      r.fromArray(d, 3 * c);
      t.fromArray(f, 2 * a);
      s.fromArray(f, 2 * b);
      u.fromArray(f, 2 * c);
      v = m.x - q.x;
      y = r.x - q.x;
      G = m.y - q.y;
      w = r.y - q.y;
      K = m.z - q.z;
      x = r.z - q.z;
      D = s.x - t.x;
      E = u.x - t.x;
      A = s.y - t.y;
      B = u.y - t.y;
      F = 1 / (D * B - E * A);
      R.set((B * v - A * y) * F, (B * G - A * w) * F, (B * K - A * x) * F);
      H.set((D * y - E * v) * F, (D * w - E * G) * F, (D * x - E * K) * F);
      k[a].add(R);
      k[b].add(R);
      k[c].add(R);
      n[a].add(H);
      n[b].add(H);
      n[c].add(H)
    }

    function b(a) {
      ya.fromArray(e,
        3 * a);
      P.copy(ya);
      Fa = k[a];
      la.copy(Fa);
      la.sub(ya.multiplyScalar(ya.dot(Fa))).normalize();
      ma.crossVectors(P, Fa);
      za = ma.dot(n[a]);
      Ga = 0 > za ? -1 : 1;
      h[4 * a] = la.x;
      h[4 * a + 1] = la.y;
      h[4 * a + 2] = la.z;
      h[4 * a + 3] = Ga
    }
    if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv) console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
    else {
      var c = this.attributes.index.array,
        d = this.attributes.position.array,
        e = this.attributes.normal.array,
        f = this.attributes.uv.array,
        g = d.length / 3;
      void 0 === this.attributes.tangent && this.addAttribute("tangent", new THREE.BufferAttribute(new Float32Array(4 * g), 4));
      for (var h = this.attributes.tangent.array, k = [], n = [], p = 0; p < g; p++) k[p] = new THREE.Vector3, n[p] = new THREE.Vector3;
      var q = new THREE.Vector3,
        m = new THREE.Vector3,
        r = new THREE.Vector3,
        t = new THREE.Vector2,
        s = new THREE.Vector2,
        u = new THREE.Vector2,
        v, y, G, w, K, x, D, E, A, B, F, R = new THREE.Vector3,
        H = new THREE.Vector3,
        C, T, Q, O, S;
      0 === this.drawcalls.length &&
        this.addDrawCall(0, c.length, 0);
      var X = this.drawcalls,
        p = 0;
      for (T = X.length; p < T; ++p) {
        C = X[p].start;
        Q = X[p].count;
        var Y = X[p].index,
          g = C;
        for (C += Q; g < C; g += 3) Q = Y + c[g], O = Y + c[g + 1], S = Y + c[g + 2], a(Q, O, S)
      }
      var la = new THREE.Vector3,
        ma = new THREE.Vector3,
        ya = new THREE.Vector3,
        P = new THREE.Vector3,
        Ga, Fa, za, p = 0;
      for (T = X.length; p < T; ++p)
        for (C = X[p].start, Q = X[p].count, Y = X[p].index, g = C, C += Q; g < C; g += 3) Q = Y + c[g], O = Y + c[g + 1], S = Y + c[g + 2], b(Q), b(O), b(S)
    }
  },
  computeOffsets: function (a) {
    var b = a;
    void 0 === a && (b = 65535);
    Date.now();
    a = this.attributes.index.array;
    for (var c = this.attributes.position.array, d = a.length / 3, e = new Uint16Array(a.length), f = 0, g = 0, h = [{
        start: 0,
        count: 0,
        index: 0
      }], k = h[0], n = 0, p = 0, q = new Int32Array(6), m = new Int32Array(c.length), r = new Int32Array(c.length), t = 0; t < c.length; t++) m[t] = -1, r[t] = -1;
    for (c = 0; c < d; c++) {
      for (var s = p = 0; 3 > s; s++) t = a[3 * c + s], -1 == m[t] ? (q[2 * s] = t, q[2 * s + 1] = -1, p++) : m[t] < k.index ? (q[2 * s] = t, q[2 * s + 1] = -1, n++) : (q[2 * s] = t, q[2 * s + 1] = m[t]);
      if (g + p > k.index + b)
        for (k = {
            start: f,
            count: 0,
            index: g
          }, h.push(k), p = 0; 6 > p; p += 2) s = q[p + 1], -1 < s && s < k.index && (q[p + 1] = -1);
      for (p = 0; 6 > p; p += 2) t = q[p], s = q[p + 1], -1 === s && (s = g++), m[t] = s, r[s] = t, e[f++] = s - k.index, k.count++
    }
    this.reorderBuffers(e, r, g);
    return this.offsets = h
  },
  merge: function () {
    console.log("BufferGeometry.merge(): TODO")
  },
  normalizeNormals: function () {
    for (var a = this.attributes.normal.array, b, c, d, e = 0, f = a.length; e < f; e += 3) b = a[e], c = a[e + 1], d = a[e + 2], b = 1 / Math.sqrt(b * b + c * c + d * d), a[e] *= b, a[e + 1] *= b, a[e + 2] *= b
  },
  reorderBuffers: function (a, b, c) {
    var d = {},
      e;
    for (e in this.attributes) "index" != e && (d[e] = new this.attributes[e].array.constructor(this.attributes[e].itemSize *
      c));
    for (var f = 0; f < c; f++) {
      var g = b[f];
      for (e in this.attributes)
        if ("index" != e)
          for (var h = this.attributes[e].array, k = this.attributes[e].itemSize, n = d[e], p = 0; p < k; p++) n[f * k + p] = h[g * k + p]
    }
    this.attributes.index.array = a;
    for (e in this.attributes) "index" != e && (this.attributes[e].array = d[e], this.attributes[e].numItems = this.attributes[e].itemSize * c)
  },
  toJSON: function () {
    var a = {
        metadata: {
          version: 4,
          type: "BufferGeometry",
          generator: "BufferGeometryExporter"
        },
        uuid: this.uuid,
        type: this.type,
        data: {
          attributes: {}
        }
      },
      b = this.attributes,
      c = this.offsets,
      d = this.boundingSphere,
      e;
    for (e in b) {
      for (var f = b[e], g = [], h = f.array, k = 0, n = h.length; k < n; k++) g[k] = h[k];
      a.data.attributes[e] = {
        itemSize: f.itemSize,
        type: f.array.constructor.name,
        array: g
      }
    }
    0 < c.length && (a.data.offsets = JSON.parse(JSON.stringify(c)));
    null !== d && (a.data.boundingSphere = {
      center: d.center.toArray(),
      radius: d.radius
    });
    return a
  },
  clone: function () {
    var a = new THREE.BufferGeometry,
      b;
    for (b in this.attributes) a.addAttribute(b, this.attributes[b].clone());
    b = 0;
    for (var c = this.offsets.length; b < c; b++) {
      var d =
        this.offsets[b];
      a.offsets.push({
        start: d.start,
        index: d.index,
        count: d.count
      })
    }
    return a
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry = function () {
  Object.defineProperty(this, "id", {
    value: THREE.GeometryIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.type = "Geometry";
  this.vertices = [];
  this.colors = [];
  this.faces = [];
  this.faceVertexUvs = [
    []
  ];
  this.morphTargets = [];
  this.morphColors = [];
  this.morphNormals = [];
  this.skinWeights = [];
  this.skinIndices = [];
  this.lineDistances = [];
  this.boundingSphere = this.boundingBox = null;
  this.hasTangents = !1;
  this.dynamic = !0;
  this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate =
    this.tangentsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
};
THREE.Geometry.prototype = {
  constructor: THREE.Geometry,
  applyMatrix: function (a) {
    for (var b = (new THREE.Matrix3).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a);
    c = 0;
    for (d = this.faces.length; c < d; c++) {
      a = this.faces[c];
      a.normal.applyMatrix3(b).normalize();
      for (var e = 0, f = a.vertexNormals.length; e < f; e++) a.vertexNormals[e].applyMatrix3(b).normalize()
    }
    this.boundingBox instanceof THREE.Box3 && this.computeBoundingBox();
    this.boundingSphere instanceof THREE.Sphere && this.computeBoundingSphere()
  },
  fromBufferGeometry: function (a) {
    for (var b = this, c = a.attributes, d = c.position.array, e = void 0 !== c.index ? c.index.array : void 0, f = void 0 !== c.normal ? c.normal.array : void 0, g = void 0 !== c.color ? c.color.array : void 0, h = void 0 !== c.uv ? c.uv.array : void 0, k = [], n = [], p = c = 0; c < d.length; c += 3, p += 2) b.vertices.push(new THREE.Vector3(d[c], d[c + 1], d[c + 2])), void 0 !== f && k.push(new THREE.Vector3(f[c], f[c + 1], f[c + 2])), void 0 !== g && b.colors.push(new THREE.Color(g[c], g[c + 1], g[c + 2])), void 0 !== h && n.push(new THREE.Vector2(h[p], h[p + 1]));
    h =
      function (a, c, d) {
        var e = void 0 !== f ? [k[a].clone(), k[c].clone(), k[d].clone()] : [],
          h = void 0 !== g ? [b.colors[a].clone(), b.colors[c].clone(), b.colors[d].clone()] : [];
        b.faces.push(new THREE.Face3(a, c, d, e, h));
        b.faceVertexUvs[0].push([n[a], n[c], n[d]])
      };
    if (void 0 !== e)
      for (c = 0; c < e.length; c += 3) h(e[c], e[c + 1], e[c + 2]);
    else
      for (c = 0; c < d.length / 3; c += 3) h(c, c + 1, c + 2);
    this.computeFaceNormals();
    null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
    null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
    return this
  },
  center: function () {
    this.computeBoundingBox();
    var a = new THREE.Vector3;
    a.addVectors(this.boundingBox.min, this.boundingBox.max);
    a.multiplyScalar(-.5);
    this.applyMatrix((new THREE.Matrix4).makeTranslation(a.x, a.y, a.z));
    this.computeBoundingBox();
    return a
  },
  computeFaceNormals: function () {
    for (var a = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; c < d; c++) {
      var e = this.faces[c],
        f = this.vertices[e.a],
        g = this.vertices[e.b];
      a.subVectors(this.vertices[e.c], g);
      b.subVectors(f, g);
      a.cross(b);
      a.normalize();
      e.normal.copy(a)
    }
  },
  computeVertexNormals: function (a) {
    var b, c, d;
    d = Array(this.vertices.length);
    b = 0;
    for (c = this.vertices.length; b < c; b++) d[b] = new THREE.Vector3;
    if (a) {
      var e, f, g, h = new THREE.Vector3,
        k = new THREE.Vector3;
      new THREE.Vector3;
      new THREE.Vector3;
      new THREE.Vector3;
      a = 0;
      for (b = this.faces.length; a < b; a++) c = this.faces[a], e = this.vertices[c.a], f = this.vertices[c.b], g = this.vertices[c.c], h.subVectors(g, f), k.subVectors(e, f), h.cross(k), d[c.a].add(h), d[c.b].add(h), d[c.c].add(h)
    } else
      for (a = 0, b = this.faces.length; a <
        b; a++) c = this.faces[a], d[c.a].add(c.normal), d[c.b].add(c.normal), d[c.c].add(c.normal);
    b = 0;
    for (c = this.vertices.length; b < c; b++) d[b].normalize();
    a = 0;
    for (b = this.faces.length; a < b; a++) c = this.faces[a], c.vertexNormals[0] = d[c.a].clone(), c.vertexNormals[1] = d[c.b].clone(), c.vertexNormals[2] = d[c.c].clone()
  },
  computeMorphNormals: function () {
    var a, b, c, d, e;
    c = 0;
    for (d = this.faces.length; c < d; c++)
      for (e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals ||
        (e.__originalVertexNormals = []), a = 0, b = e.vertexNormals.length; a < b; a++) e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
    var f = new THREE.Geometry;
    f.faces = this.faces;
    a = 0;
    for (b = this.morphTargets.length; a < b; a++) {
      if (!this.morphNormals[a]) {
        this.morphNormals[a] = {};
        this.morphNormals[a].faceNormals = [];
        this.morphNormals[a].vertexNormals = [];
        e = this.morphNormals[a].faceNormals;
        var g = this.morphNormals[a].vertexNormals,
          h, k;
        c =
          0;
        for (d = this.faces.length; c < d; c++) h = new THREE.Vector3, k = {
          a: new THREE.Vector3,
          b: new THREE.Vector3,
          c: new THREE.Vector3
        }, e.push(h), g.push(k)
      }
      g = this.morphNormals[a];
      f.vertices = this.morphTargets[a].vertices;
      f.computeFaceNormals();
      f.computeVertexNormals();
      c = 0;
      for (d = this.faces.length; c < d; c++) e = this.faces[c], h = g.faceNormals[c], k = g.vertexNormals[c], h.copy(e.normal), k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2])
    }
    c = 0;
    for (d = this.faces.length; c < d; c++) e = this.faces[c], e.normal =
      e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
  },
  computeTangents: function () {
    var a, b, c, d, e, f, g, h, k, n, p, q, m, r, t, s, u, v = [],
      y = [];
    c = new THREE.Vector3;
    var G = new THREE.Vector3,
      w = new THREE.Vector3,
      K = new THREE.Vector3,
      x = new THREE.Vector3;
    a = 0;
    for (b = this.vertices.length; a < b; a++) v[a] = new THREE.Vector3, y[a] = new THREE.Vector3;
    a = 0;
    for (b = this.faces.length; a < b; a++) e = this.faces[a], f = this.faceVertexUvs[0][a], d = e.a, u = e.b, e = e.c, g = this.vertices[d], h = this.vertices[u], k = this.vertices[e], n = f[0], p = f[1], q = f[2],
      f = h.x - g.x, m = k.x - g.x, r = h.y - g.y, t = k.y - g.y, h = h.z - g.z, g = k.z - g.z, k = p.x - n.x, s = q.x - n.x, p = p.y - n.y, n = q.y - n.y, q = 1 / (k * n - s * p), c.set((n * f - p * m) * q, (n * r - p * t) * q, (n * h - p * g) * q), G.set((k * m - s * f) * q, (k * t - s * r) * q, (k * g - s * h) * q), v[d].add(c), v[u].add(c), v[e].add(c), y[d].add(G), y[u].add(G), y[e].add(G);
    G = ["a", "b", "c", "d"];
    a = 0;
    for (b = this.faces.length; a < b; a++)
      for (e = this.faces[a], c = 0; c < Math.min(e.vertexNormals.length, 3); c++) x.copy(e.vertexNormals[c]), d = e[G[c]], u = v[d], w.copy(u), w.sub(x.multiplyScalar(x.dot(u))).normalize(), K.crossVectors(e.vertexNormals[c],
        u), d = K.dot(y[d]), d = 0 > d ? -1 : 1, e.vertexTangents[c] = new THREE.Vector4(w.x, w.y, w.z, d);
    this.hasTangents = !0
  },
  computeLineDistances: function () {
    for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++) 0 < c && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a
  },
  computeBoundingBox: function () {
    null === this.boundingBox && (this.boundingBox = new THREE.Box3);
    this.boundingBox.setFromPoints(this.vertices)
  },
  computeBoundingSphere: function () {
    null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
    this.boundingSphere.setFromPoints(this.vertices)
  },
  merge: function (a, b, c) {
    if (!1 === a instanceof THREE.Geometry) console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);
    else {
      var d, e = this.vertices.length,
        f = this.vertices,
        g = a.vertices,
        h = this.faces,
        k = a.faces,
        n = this.faceVertexUvs[0];
      a = a.faceVertexUvs[0];
      void 0 === c && (c = 0);
      void 0 !== b && (d = (new THREE.Matrix3).getNormalMatrix(b));
      for (var p = 0, q = g.length; p < q; p++) {
        var m = g[p].clone();
        void 0 !== b && m.applyMatrix4(b);
        f.push(m)
      }
      p = 0;
      for (q = k.length; p < q; p++) {
        var g = k[p],
          r, t = g.vertexNormals,
          s =
          g.vertexColors,
          m = new THREE.Face3(g.a + e, g.b + e, g.c + e);
        m.normal.copy(g.normal);
        void 0 !== d && m.normal.applyMatrix3(d).normalize();
        b = 0;
        for (f = t.length; b < f; b++) r = t[b].clone(), void 0 !== d && r.applyMatrix3(d).normalize(), m.vertexNormals.push(r);
        m.color.copy(g.color);
        b = 0;
        for (f = s.length; b < f; b++) r = s[b], m.vertexColors.push(r.clone());
        m.materialIndex = g.materialIndex + c;
        h.push(m)
      }
      p = 0;
      for (q = a.length; p < q; p++)
        if (c = a[p], d = [], void 0 !== c) {
          b = 0;
          for (f = c.length; b < f; b++) d.push(new THREE.Vector2(c[b].x, c[b].y));
          n.push(d)
        }
    }
  },
  mergeVertices: function () {
    var a = {},
      b = [],
      c = [],
      d, e = Math.pow(10, 4),
      f, g;
    f = 0;
    for (g = this.vertices.length; f < g; f++) d = this.vertices[f], d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z * e), void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
    a = [];
    f = 0;
    for (g = this.faces.length; f < g; f++)
      for (e = this.faces[f], e.a = c[e.a], e.b = c[e.b], e.c = c[e.c], e = [e.a, e.b, e.c], d = 0; 3 > d; d++)
        if (e[d] == e[(d + 1) % 3]) {
          a.push(f);
          break
        } for (f = a.length - 1; 0 <= f; f--)
      for (e = a[f], this.faces.splice(e, 1), c = 0, g = this.faceVertexUvs.length; c < g; c++) this.faceVertexUvs[c].splice(e,
        1);
    f = this.vertices.length - b.length;
    this.vertices = b;
    return f
  },
  toJSON: function () {
    function a(a, b, c) {
      return c ? a | 1 << b : a & ~(1 << b)
    }

    function b(a) {
      var b = a.x.toString() + a.y.toString() + a.z.toString();
      if (void 0 !== n[b]) return n[b];
      n[b] = k.length / 3;
      k.push(a.x, a.y, a.z);
      return n[b]
    }

    function c(a) {
      var b = a.r.toString() + a.g.toString() + a.b.toString();
      if (void 0 !== q[b]) return q[b];
      q[b] = p.length;
      p.push(a.getHex());
      return q[b]
    }

    function d(a) {
      var b = a.x.toString() + a.y.toString();
      if (void 0 !== r[b]) return r[b];
      r[b] = m.length / 2;
      m.push(a.x,
        a.y);
      return r[b]
    }
    var e = {
      metadata: {
        version: 4,
        type: "BufferGeometry",
        generator: "BufferGeometryExporter"
      },
      uuid: this.uuid,
      type: this.type
    };
    "" !== this.name && (e.name = this.name);
    if (void 0 !== this.parameters) {
      var f = this.parameters,
        g;
      for (g in f) void 0 !== f[g] && (e[g] = f[g]);
      return e
    }
    f = [];
    for (g = 0; g < this.vertices.length; g++) {
      var h = this.vertices[g];
      f.push(h.x, h.y, h.z)
    }
    var h = [],
      k = [],
      n = {},
      p = [],
      q = {},
      m = [],
      r = {};
    for (g = 0; g < this.faces.length; g++) {
      var t = this.faces[g],
        s = void 0 !== this.faceVertexUvs[0][g],
        u = 0 < t.normal.length(),
        v = 0 < t.vertexNormals.length,
        y = 1 !== t.color.r || 1 !== t.color.g || 1 !== t.color.b,
        G = 0 < t.vertexColors.length,
        w = 0,
        w = a(w, 0, 0),
        w = a(w, 1, !1),
        w = a(w, 2, !1),
        w = a(w, 3, s),
        w = a(w, 4, u),
        w = a(w, 5, v),
        w = a(w, 6, y),
        w = a(w, 7, G);
      h.push(w);
      h.push(t.a, t.b, t.c);
      s && (s = this.faceVertexUvs[0][g], h.push(d(s[0]), d(s[1]), d(s[2])));
      u && h.push(b(t.normal));
      v && (u = t.vertexNormals, h.push(b(u[0]), b(u[1]), b(u[2])));
      y && h.push(c(t.color));
      G && (t = t.vertexColors, h.push(c(t[0]), c(t[1]), c(t[2])))
    }
    e.data = {};
    e.data.vertices = f;
    e.data.normals = k;
    0 < p.length && (e.data.colors =
      p);
    0 < m.length && (e.data.uvs = [m]);
    e.data.faces = h;
    return e
  },
  clone: function () {
    for (var a = new THREE.Geometry, b = this.vertices, c = 0, d = b.length; c < d; c++) a.vertices.push(b[c].clone());
    b = this.faces;
    c = 0;
    for (d = b.length; c < d; c++) a.faces.push(b[c].clone());
    b = this.faceVertexUvs[0];
    c = 0;
    for (d = b.length; c < d; c++) {
      for (var e = b[c], f = [], g = 0, h = e.length; g < h; g++) f.push(new THREE.Vector2(e[g].x, e[g].y));
      a.faceVertexUvs[0].push(f)
    }
    return a
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);
THREE.GeometryIdCount = 0;
THREE.Camera = function () {
  THREE.Object3D.call(this);
  this.type = "Camera";
  this.matrixWorldInverse = new THREE.Matrix4;
  this.projectionMatrix = new THREE.Matrix4
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.getWorldDirection = function () {
  var a = new THREE.Quaternion;
  return function (b) {
    b = b || new THREE.Vector3;
    this.getWorldQuaternion(a);
    return b.set(0, 0, -1).applyQuaternion(a)
  }
}();
THREE.Camera.prototype.lookAt = function () {
  var a = new THREE.Matrix4;
  return function (b) {
    a.lookAt(this.position, b, this.up);
    this.quaternion.setFromRotationMatrix(a)
  }
}();
THREE.Camera.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Camera);
  THREE.Object3D.prototype.clone.call(this, a);
  a.matrixWorldInverse.copy(this.matrixWorldInverse);
  a.projectionMatrix.copy(this.projectionMatrix);
  return a
};
THREE.CubeCamera = function (a, b, c) {
  THREE.Object3D.call(this);
  this.type = "CubeCamera";
  var d = new THREE.PerspectiveCamera(90, 1, a, b);
  d.up.set(0, -1, 0);
  d.lookAt(new THREE.Vector3(1, 0, 0));
  this.add(d);
  var e = new THREE.PerspectiveCamera(90, 1, a, b);
  e.up.set(0, -1, 0);
  e.lookAt(new THREE.Vector3(-1, 0, 0));
  this.add(e);
  var f = new THREE.PerspectiveCamera(90, 1, a, b);
  f.up.set(0, 0, 1);
  f.lookAt(new THREE.Vector3(0, 1, 0));
  this.add(f);
  var g = new THREE.PerspectiveCamera(90, 1, a, b);
  g.up.set(0, 0, -1);
  g.lookAt(new THREE.Vector3(0, -1, 0));
  this.add(g);
  var h = new THREE.PerspectiveCamera(90, 1, a, b);
  h.up.set(0, -1, 0);
  h.lookAt(new THREE.Vector3(0, 0, 1));
  this.add(h);
  var k = new THREE.PerspectiveCamera(90, 1, a, b);
  k.up.set(0, -1, 0);
  k.lookAt(new THREE.Vector3(0, 0, -1));
  this.add(k);
  this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {
    format: THREE.RGBFormat,
    magFilter: THREE.LinearFilter,
    minFilter: THREE.LinearFilter
  });
  this.updateCubeMap = function (a, b) {
    var c = this.renderTarget,
      m = c.generateMipmaps;
    c.generateMipmaps = !1;
    c.activeCubeFace = 0;
    a.render(b, d, c);
    c.activeCubeFace =
      1;
    a.render(b, e, c);
    c.activeCubeFace = 2;
    a.render(b, f, c);
    c.activeCubeFace = 3;
    a.render(b, g, c);
    c.activeCubeFace = 4;
    a.render(b, h, c);
    c.generateMipmaps = m;
    c.activeCubeFace = 5;
    a.render(b, k, c)
  }
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.OrthographicCamera = function (a, b, c, d, e, f) {
  THREE.Camera.call(this);
  this.type = "OrthographicCamera";
  this.zoom = 1;
  this.left = a;
  this.right = b;
  this.top = c;
  this.bottom = d;
  this.near = void 0 !== e ? e : .1;
  this.far = void 0 !== f ? f : 2E3;
  this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
  var a = (this.right - this.left) / (2 * this.zoom),
    b = (this.top - this.bottom) / (2 * this.zoom),
    c = (this.right + this.left) / 2,
    d = (this.top + this.bottom) / 2;
  this.projectionMatrix.makeOrthographic(c - a, c + a, d + b, d - b, this.near, this.far)
};
THREE.OrthographicCamera.prototype.clone = function () {
  var a = new THREE.OrthographicCamera;
  THREE.Camera.prototype.clone.call(this, a);
  a.zoom = this.zoom;
  a.left = this.left;
  a.right = this.right;
  a.top = this.top;
  a.bottom = this.bottom;
  a.near = this.near;
  a.far = this.far;
  a.projectionMatrix.copy(this.projectionMatrix);
  return a
};
THREE.PerspectiveCamera = function (a, b, c, d) {
  THREE.Camera.call(this);
  this.type = "PerspectiveCamera";
  this.zoom = 1;
  this.fov = void 0 !== a ? a : 50;
  this.aspect = void 0 !== b ? b : 1;
  this.near = void 0 !== c ? c : .1;
  this.far = void 0 !== d ? d : 2E3;
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
  void 0 === b && (b = 24);
  this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, e, f) {
  this.fullWidth = a;
  this.fullHeight = b;
  this.x = c;
  this.y = d;
  this.width = e;
  this.height = f;
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
  var a = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
  if (this.fullWidth) {
    var b = this.fullWidth / this.fullHeight,
      a = Math.tan(THREE.Math.degToRad(.5 * a)) * this.near,
      c = -a,
      d = b * c,
      b = Math.abs(b * a - d),
      c = Math.abs(a - c);
    this.projectionMatrix.makeFrustum(d + this.x * b / this.fullWidth, d + (this.x + this.width) * b / this.fullWidth, a - (this.y + this.height) * c / this.fullHeight, a - this.y * c / this.fullHeight, this.near, this.far)
  } else this.projectionMatrix.makePerspective(a,
    this.aspect, this.near, this.far)
};
THREE.PerspectiveCamera.prototype.clone = function () {
  var a = new THREE.PerspectiveCamera;
  THREE.Camera.prototype.clone.call(this, a);
  a.zoom = this.zoom;
  a.fov = this.fov;
  a.aspect = this.aspect;
  a.near = this.near;
  a.far = this.far;
  a.projectionMatrix.copy(this.projectionMatrix);
  return a
};
THREE.Light = function (a) {
  THREE.Object3D.call(this);
  this.type = "Light";
  this.color = new THREE.Color(a)
};
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Light);
  THREE.Object3D.prototype.clone.call(this, a);
  a.color.copy(this.color);
  return a
};
THREE.AmbientLight = function (a) {
  THREE.Light.call(this, a);
  this.type = "AmbientLight"
};
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.clone = function () {
  var a = new THREE.AmbientLight;
  THREE.Light.prototype.clone.call(this, a);
  return a
};
THREE.AreaLight = function (a, b) {
  THREE.Light.call(this, a);
  this.type = "AreaLight";
  this.normal = new THREE.Vector3(0, -1, 0);
  this.right = new THREE.Vector3(1, 0, 0);
  this.intensity = void 0 !== b ? b : 1;
  this.height = this.width = 1;
  this.constantAttenuation = 1.5;
  this.linearAttenuation = .5;
  this.quadraticAttenuation = .1
};
THREE.AreaLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight = function (a, b) {
  THREE.Light.call(this, a);
  this.type = "DirectionalLight";
  this.position.set(0, 1, 0);
  this.target = new THREE.Object3D;
  this.intensity = void 0 !== b ? b : 1;
  this.onlyShadow = this.castShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5E3;
  this.shadowCameraLeft = -500;
  this.shadowCameraTop = this.shadowCameraRight = 500;
  this.shadowCameraBottom = -500;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = .5;
  this.shadowMapHeight = this.shadowMapWidth = 512;
  this.shadowCascade = !1;
  this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1E3);
  this.shadowCascadeCount = 2;
  this.shadowCascadeBias = [0, 0, 0];
  this.shadowCascadeWidth = [512, 512, 512];
  this.shadowCascadeHeight = [512, 512, 512];
  this.shadowCascadeNearZ = [-1, .99, .998];
  this.shadowCascadeFarZ = [.99, .998, 1];
  this.shadowCascadeArray = [];
  this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
};
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone = function () {
  var a = new THREE.DirectionalLight;
  THREE.Light.prototype.clone.call(this, a);
  a.target = this.target.clone();
  a.intensity = this.intensity;
  a.castShadow = this.castShadow;
  a.onlyShadow = this.onlyShadow;
  a.shadowCameraNear = this.shadowCameraNear;
  a.shadowCameraFar = this.shadowCameraFar;
  a.shadowCameraLeft = this.shadowCameraLeft;
  a.shadowCameraRight = this.shadowCameraRight;
  a.shadowCameraTop = this.shadowCameraTop;
  a.shadowCameraBottom = this.shadowCameraBottom;
  a.shadowCameraVisible =
    this.shadowCameraVisible;
  a.shadowBias = this.shadowBias;
  a.shadowDarkness = this.shadowDarkness;
  a.shadowMapWidth = this.shadowMapWidth;
  a.shadowMapHeight = this.shadowMapHeight;
  a.shadowCascade = this.shadowCascade;
  a.shadowCascadeOffset.copy(this.shadowCascadeOffset);
  a.shadowCascadeCount = this.shadowCascadeCount;
  a.shadowCascadeBias = this.shadowCascadeBias.slice(0);
  a.shadowCascadeWidth = this.shadowCascadeWidth.slice(0);
  a.shadowCascadeHeight = this.shadowCascadeHeight.slice(0);
  a.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0);
  a.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0);
  return a
};
THREE.HemisphereLight = function (a, b, c) {
  THREE.Light.call(this, a);
  this.type = "HemisphereLight";
  this.position.set(0, 100, 0);
  this.groundColor = new THREE.Color(b);
  this.intensity = void 0 !== c ? c : 1
};
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight.prototype.clone = function () {
  var a = new THREE.HemisphereLight;
  THREE.Light.prototype.clone.call(this, a);
  a.groundColor.copy(this.groundColor);
  a.intensity = this.intensity;
  return a
};
THREE.PointLight = function (a, b, c) {
  THREE.Light.call(this, a);
  this.type = "PointLight";
  this.intensity = void 0 !== b ? b : 1;
  this.distance = void 0 !== c ? c : 0
};
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight.prototype.clone = function () {
  var a = new THREE.PointLight;
  THREE.Light.prototype.clone.call(this, a);
  a.intensity = this.intensity;
  a.distance = this.distance;
  return a
};
THREE.SpotLight = function (a, b, c, d, e) {
  THREE.Light.call(this, a);
  this.type = "SpotLight";
  this.position.set(0, 1, 0);
  this.target = new THREE.Object3D;
  this.intensity = void 0 !== b ? b : 1;
  this.distance = void 0 !== c ? c : 0;
  this.angle = void 0 !== d ? d : Math.PI / 3;
  this.exponent = void 0 !== e ? e : 10;
  this.onlyShadow = this.castShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5E3;
  this.shadowCameraFov = 50;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = .5;
  this.shadowMapHeight = this.shadowMapWidth = 512;
  this.shadowMatrix =
    this.shadowCamera = this.shadowMapSize = this.shadowMap = null
};
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.clone = function () {
  var a = new THREE.SpotLight;
  THREE.Light.prototype.clone.call(this, a);
  a.target = this.target.clone();
  a.intensity = this.intensity;
  a.distance = this.distance;
  a.angle = this.angle;
  a.exponent = this.exponent;
  a.castShadow = this.castShadow;
  a.onlyShadow = this.onlyShadow;
  a.shadowCameraNear = this.shadowCameraNear;
  a.shadowCameraFar = this.shadowCameraFar;
  a.shadowCameraFov = this.shadowCameraFov;
  a.shadowCameraVisible = this.shadowCameraVisible;
  a.shadowBias = this.shadowBias;
  a.shadowDarkness =
    this.shadowDarkness;
  a.shadowMapWidth = this.shadowMapWidth;
  a.shadowMapHeight = this.shadowMapHeight;
  return a
};
THREE.Cache = function () {
  this.files = {}
};
THREE.Cache.prototype = {
  constructor: THREE.Cache,
  add: function (a, b) {
    this.files[a] = b
  },
  get: function (a) {
    return this.files[a]
  },
  remove: function (a) {
    delete this.files[a]
  },
  clear: function () {
    this.files = {}
  }
};
THREE.Loader = function (a) {
  this.statusDomElement = (this.showStatus = a) ? THREE.Loader.prototype.addStatusElement() : null;
  this.imageLoader = new THREE.ImageLoader;
  this.onLoadStart = function () {};
  this.onLoadProgress = function () {};
  this.onLoadComplete = function () {}
};
THREE.Loader.prototype = {
  constructor: THREE.Loader,
  crossOrigin: void 0,
  addStatusElement: function () {
    var a = document.createElement("div");
    a.style.position = "absolute";
    a.style.right = "0px";
    a.style.top = "0px";
    a.style.fontSize = "0.8em";
    a.style.textAlign = "left";
    a.style.background = "rgba(0,0,0,0.25)";
    a.style.color = "#fff";
    a.style.width = "120px";
    a.style.padding = "0.5em 0.5em 0.5em 0.5em";
    a.style.zIndex = 1E3;
    a.innerHTML = "Loading ...";
    return a
  },
  updateProgress: function (a) {
    var b = "Loaded ",
      b = a.total ? b + ((100 * a.loaded / a.total).toFixed(0) +
        "%") : b + ((a.loaded / 1024).toFixed(2) + " KB");
    this.statusDomElement.innerHTML = b
  },
  extractUrlBase: function (a) {
    a = a.split("/");
    if (1 === a.length) return "./";
    a.pop();
    return a.join("/") + "/"
  },
  initMaterials: function (a, b) {
    for (var c = [], d = 0; d < a.length; ++d) c[d] = this.createMaterial(a[d], b);
    return c
  },
  needsTangents: function (a) {
    for (var b = 0, c = a.length; b < c; b++)
      if (a[b] instanceof THREE.ShaderMaterial) return !0;
    return !1
  },
  createMaterial: function (a, b) {
    function c(a) {
      a = Math.log(a) / Math.LN2;
      return Math.pow(2, Math.round(a))
    }

    function d(a,
      d, e, g, h, k, s) {
      var u = b + e,
        v, y = THREE.Loader.Handlers.get(u);
      null !== y ? v = y.load(u) : (v = new THREE.Texture, y = f.imageLoader, y.crossOrigin = f.crossOrigin, y.load(u, function (a) {
        if (!1 === THREE.Math.isPowerOfTwo(a.width) || !1 === THREE.Math.isPowerOfTwo(a.height)) {
          var b = c(a.width),
            d = c(a.height),
            e = document.createElement("canvas");
          e.width = b;
          e.height = d;
          e.getContext("2d").drawImage(a, 0, 0, b, d);
          v.image = e
        } else v.image = a;
        v.needsUpdate = !0
      }));
      v.sourceFile = e;
      g && (v.repeat.set(g[0], g[1]), 1 !== g[0] && (v.wrapS = THREE.RepeatWrapping),
        1 !== g[1] && (v.wrapT = THREE.RepeatWrapping));
      h && v.offset.set(h[0], h[1]);
      k && (e = {
        repeat: THREE.RepeatWrapping,
        mirror: THREE.MirroredRepeatWrapping
      }, void 0 !== e[k[0]] && (v.wrapS = e[k[0]]), void 0 !== e[k[1]] && (v.wrapT = e[k[1]]));
      s && (v.anisotropy = s);
      a[d] = v
    }

    function e(a) {
      return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
    }
    var f = this,
      g = "MeshLambertMaterial",
      h = {
        color: 15658734,
        opacity: 1,
        map: null,
        lightMap: null,
        normalMap: null,
        bumpMap: null,
        wireframe: !1
      };
    if (a.shading) {
      var k = a.shading.toLowerCase();
      "phong" === k ? g = "MeshPhongMaterial" :
        "basic" === k && (g = "MeshBasicMaterial")
    }
    void 0 !== a.blending && void 0 !== THREE[a.blending] && (h.blending = THREE[a.blending]);
    if (void 0 !== a.transparent || 1 > a.opacity) h.transparent = a.transparent;
    void 0 !== a.depthTest && (h.depthTest = a.depthTest);
    void 0 !== a.depthWrite && (h.depthWrite = a.depthWrite);
    void 0 !== a.visible && (h.visible = a.visible);
    void 0 !== a.flipSided && (h.side = THREE.BackSide);
    void 0 !== a.doubleSided && (h.side = THREE.DoubleSide);
    void 0 !== a.wireframe && (h.wireframe = a.wireframe);
    void 0 !== a.vertexColors && ("face" ===
      a.vertexColors ? h.vertexColors = THREE.FaceColors : a.vertexColors && (h.vertexColors = THREE.VertexColors));
    a.colorDiffuse ? h.color = e(a.colorDiffuse) : a.DbgColor && (h.color = a.DbgColor);
    a.colorSpecular && (h.specular = e(a.colorSpecular));
    a.colorAmbient && (h.ambient = e(a.colorAmbient));
    a.colorEmissive && (h.emissive = e(a.colorEmissive));
    a.transparency && (h.opacity = a.transparency);
    a.specularCoef && (h.shininess = a.specularCoef);
    a.mapDiffuse && b && d(h, "map", a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap,
      a.mapDiffuseAnisotropy);
    a.mapLight && b && d(h, "lightMap", a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap, a.mapLightAnisotropy);
    a.mapBump && b && d(h, "bumpMap", a.mapBump, a.mapBumpRepeat, a.mapBumpOffset, a.mapBumpWrap, a.mapBumpAnisotropy);
    a.mapNormal && b && d(h, "normalMap", a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap, a.mapNormalAnisotropy);
    a.mapSpecular && b && d(h, "specularMap", a.mapSpecular, a.mapSpecularRepeat, a.mapSpecularOffset, a.mapSpecularWrap, a.mapSpecularAnisotropy);
    a.mapAlpha &&
      b && d(h, "alphaMap", a.mapAlpha, a.mapAlphaRepeat, a.mapAlphaOffset, a.mapAlphaWrap, a.mapAlphaAnisotropy);
    a.mapBumpScale && (h.bumpScale = a.mapBumpScale);
    a.mapNormal ? (g = THREE.ShaderLib.normalmap, k = THREE.UniformsUtils.clone(g.uniforms), k.tNormal.value = h.normalMap, a.mapNormalFactor && k.uNormalScale.value.set(a.mapNormalFactor, a.mapNormalFactor), h.map && (k.tDiffuse.value = h.map, k.enableDiffuse.value = !0), h.specularMap && (k.tSpecular.value = h.specularMap, k.enableSpecular.value = !0), h.lightMap && (k.tAO.value = h.lightMap,
      k.enableAO.value = !0), k.diffuse.value.setHex(h.color), k.specular.value.setHex(h.specular), k.ambient.value.setHex(h.ambient), k.shininess.value = h.shininess, void 0 !== h.opacity && (k.opacity.value = h.opacity), g = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: k,
      lights: !0,
      fog: !0
    }), h.transparent && (g.transparent = !0)) : g = new THREE[g](h);
    void 0 !== a.DbgName && (g.name = a.DbgName);
    return g
  }
};
THREE.Loader.Handlers = {
  handlers: [],
  add: function (a, b) {
    this.handlers.push(a, b)
  },
  get: function (a) {
    for (var b = 0, c = this.handlers.length; b < c; b += 2) {
      var d = this.handlers[b + 1];
      if (this.handlers[b].test(a)) return d
    }
    return null
  }
};
THREE.XHRLoader = function (a) {
  this.cache = new THREE.Cache;
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.XHRLoader.prototype = {
  constructor: THREE.XHRLoader,
  load: function (a, b, c, d) {
    var e = this,
      f = e.cache.get(a);
    void 0 !== f ? b && b(f) : (f = new XMLHttpRequest, f.open("GET", a, !0), f.addEventListener("load", function (c) {
      e.cache.add(a, this.response);
      b && b(this.response);
      e.manager.itemEnd(a)
    }, !1), void 0 !== c && f.addEventListener("progress", function (a) {
      c(a)
    }, !1), void 0 !== d && f.addEventListener("error", function (a) {
      d(a)
    }, !1), void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (f.responseType =
      this.responseType), f.send(null), e.manager.itemStart(a))
  },
  setResponseType: function (a) {
    this.responseType = a
  },
  setCrossOrigin: function (a) {
    this.crossOrigin = a
  }
};
THREE.ImageLoader = function (a) {
  this.cache = new THREE.Cache;
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.ImageLoader.prototype = {
  constructor: THREE.ImageLoader,
  load: function (a, b, c, d) {
    var e = this,
      f = e.cache.get(a);
    if (void 0 !== f) b(f);
    else return f = document.createElement("img"), void 0 !== b && f.addEventListener("load", function (c) {
      e.cache.add(a, this);
      b(this);
      e.manager.itemEnd(a)
    }, !1), void 0 !== c && f.addEventListener("progress", function (a) {
      c(a)
    }, !1), void 0 !== d && f.addEventListener("error", function (a) {
      d(a)
    }, !1), void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin), f.src = a, e.manager.itemStart(a), f
  },
  setCrossOrigin: function (a) {
    this.crossOrigin =
      a
  }
};
THREE.JSONLoader = function (a) {
  THREE.Loader.call(this, a);
  this.withCredentials = !1
};
THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.load = function (a, b, c) {
  c = c && "string" === typeof c ? c : this.extractUrlBase(a);
  this.onLoadStart();
  this.loadAjaxJSON(this, a, b, c)
};
THREE.JSONLoader.prototype.loadAjaxJSON = function (a, b, c, d, e) {
  var f = new XMLHttpRequest,
    g = 0;
  f.onreadystatechange = function () {
    if (f.readyState === f.DONE)
      if (200 === f.status || 0 === f.status) {
        if (f.responseText) {
          var h = JSON.parse(f.responseText);
          if (void 0 !== h.metadata && "scene" === h.metadata.type) {
            console.error('THREE.JSONLoader: "' + b + '" seems to be a Scene. Use THREE.SceneLoader instead.');
            return
          }
          h = a.parse(h, d);
          c(h.geometry, h.materials)
        } else console.error('THREE.JSONLoader: "' + b + '" seems to be unreachable or the file is empty.');
        a.onLoadComplete()
      } else console.error("THREE.JSONLoader: Couldn't load \"" + b + '" (' + f.status + ")");
    else f.readyState === f.LOADING ? e && (0 === g && (g = f.getResponseHeader("Content-Length")), e({
      total: g,
      loaded: f.responseText.length
    })) : f.readyState === f.HEADERS_RECEIVED && void 0 !== e && (g = f.getResponseHeader("Content-Length"))
  };
  f.open("GET", b, !0);
  f.withCredentials = this.withCredentials;
  f.send(null)
};
THREE.JSONLoader.prototype.parse = function (a, b) {
  var c = new THREE.Geometry,
    d = void 0 !== a.scale ? 1 / a.scale : 1;
  (function (b) {
    var d, g, h, k, n, p, q, m, r, t, s, u, v, y = a.faces;
    p = a.vertices;
    var G = a.normals,
      w = a.colors,
      K = 0;
    if (void 0 !== a.uvs) {
      for (d = 0; d < a.uvs.length; d++) a.uvs[d].length && K++;
      for (d = 0; d < K; d++) c.faceVertexUvs[d] = []
    }
    k = 0;
    for (n = p.length; k < n;) d = new THREE.Vector3, d.x = p[k++] * b, d.y = p[k++] * b, d.z = p[k++] * b, c.vertices.push(d);
    k = 0;
    for (n = y.length; k < n;)
      if (b = y[k++], r = b & 1, h = b & 2, d = b & 8, q = b & 16, t = b & 32, p = b & 64, b &= 128, r) {
        r = new THREE.Face3;
        r.a = y[k];
        r.b = y[k + 1];
        r.c = y[k + 3];
        s = new THREE.Face3;
        s.a = y[k + 1];
        s.b = y[k + 2];
        s.c = y[k + 3];
        k += 4;
        h && (h = y[k++], r.materialIndex = h, s.materialIndex = h);
        h = c.faces.length;
        if (d)
          for (d = 0; d < K; d++)
            for (u = a.uvs[d], c.faceVertexUvs[d][h] = [], c.faceVertexUvs[d][h + 1] = [], g = 0; 4 > g; g++) m = y[k++], v = u[2 * m], m = u[2 * m + 1], v = new THREE.Vector2(v, m), 2 !== g && c.faceVertexUvs[d][h].push(v), 0 !== g && c.faceVertexUvs[d][h + 1].push(v);
        q && (q = 3 * y[k++], r.normal.set(G[q++], G[q++], G[q]), s.normal.copy(r.normal));
        if (t)
          for (d = 0; 4 > d; d++) q = 3 * y[k++], t = new THREE.Vector3(G[q++],
            G[q++], G[q]), 2 !== d && r.vertexNormals.push(t), 0 !== d && s.vertexNormals.push(t);
        p && (p = y[k++], p = w[p], r.color.setHex(p), s.color.setHex(p));
        if (b)
          for (d = 0; 4 > d; d++) p = y[k++], p = w[p], 2 !== d && r.vertexColors.push(new THREE.Color(p)), 0 !== d && s.vertexColors.push(new THREE.Color(p));
        c.faces.push(r);
        c.faces.push(s)
      } else {
        r = new THREE.Face3;
        r.a = y[k++];
        r.b = y[k++];
        r.c = y[k++];
        h && (h = y[k++], r.materialIndex = h);
        h = c.faces.length;
        if (d)
          for (d = 0; d < K; d++)
            for (u = a.uvs[d], c.faceVertexUvs[d][h] = [], g = 0; 3 > g; g++) m = y[k++], v = u[2 * m], m = u[2 * m + 1],
              v = new THREE.Vector2(v, m), c.faceVertexUvs[d][h].push(v);
        q && (q = 3 * y[k++], r.normal.set(G[q++], G[q++], G[q]));
        if (t)
          for (d = 0; 3 > d; d++) q = 3 * y[k++], t = new THREE.Vector3(G[q++], G[q++], G[q]), r.vertexNormals.push(t);
        p && (p = y[k++], r.color.setHex(w[p]));
        if (b)
          for (d = 0; 3 > d; d++) p = y[k++], r.vertexColors.push(new THREE.Color(w[p]));
        c.faces.push(r)
      }
  })(d);
  (function () {
    var b = void 0 !== a.influencesPerVertex ? a.influencesPerVertex : 2;
    if (a.skinWeights)
      for (var d = 0, g = a.skinWeights.length; d < g; d += b) c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
        1 < b ? a.skinWeights[d + 1] : 0, 2 < b ? a.skinWeights[d + 2] : 0, 3 < b ? a.skinWeights[d + 3] : 0));
    if (a.skinIndices)
      for (d = 0, g = a.skinIndices.length; d < g; d += b) c.skinIndices.push(new THREE.Vector4(a.skinIndices[d], 1 < b ? a.skinIndices[d + 1] : 0, 2 < b ? a.skinIndices[d + 2] : 0, 3 < b ? a.skinIndices[d + 3] : 0));
    c.bones = a.bones;
    c.bones && 0 < c.bones.length && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length +
      "), and skinWeights (" + c.skinWeights.length + ") should match.");
    c.animation = a.animation;
    c.animations = a.animations
  })();
  (function (b) {
    if (void 0 !== a.morphTargets) {
      var d, g, h, k, n, p;
      d = 0;
      for (g = a.morphTargets.length; d < g; d++)
        for (c.morphTargets[d] = {}, c.morphTargets[d].name = a.morphTargets[d].name, c.morphTargets[d].vertices = [], n = c.morphTargets[d].vertices, p = a.morphTargets[d].vertices, h = 0, k = p.length; h < k; h += 3) {
          var q = new THREE.Vector3;
          q.x = p[h] * b;
          q.y = p[h + 1] * b;
          q.z = p[h + 2] * b;
          n.push(q)
        }
    }
    if (void 0 !== a.morphColors)
      for (d =
        0, g = a.morphColors.length; d < g; d++)
        for (c.morphColors[d] = {}, c.morphColors[d].name = a.morphColors[d].name, c.morphColors[d].colors = [], k = c.morphColors[d].colors, n = a.morphColors[d].colors, b = 0, h = n.length; b < h; b += 3) p = new THREE.Color(16755200), p.setRGB(n[b], n[b + 1], n[b + 2]), k.push(p)
  })(d);
  c.computeFaceNormals();
  c.computeBoundingSphere();
  if (void 0 === a.materials || 0 === a.materials.length) return {
    geometry: c
  };
  d = this.initMaterials(a.materials, b);
  this.needsTangents(d) && c.computeTangents();
  return {
    geometry: c,
    materials: d
  }
};
THREE.LoadingManager = function (a, b, c) {
  var d = this,
    e = 0,
    f = 0;
  this.onLoad = a;
  this.onProgress = b;
  this.onError = c;
  this.itemStart = function (a) {
    f++
  };
  this.itemEnd = function (a) {
    e++;
    if (void 0 !== d.onProgress) d.onProgress(a, e, f);
    if (e === f && void 0 !== d.onLoad) d.onLoad()
  }
};
THREE.DefaultLoadingManager = new THREE.LoadingManager;
THREE.BufferGeometryLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.BufferGeometryLoader.prototype = {
  constructor: THREE.BufferGeometryLoader,
  load: function (a, b, c, d) {
    var e = this,
      f = new THREE.XHRLoader;
    f.setCrossOrigin(this.crossOrigin);
    f.load(a, function (a) {
      b(e.parse(JSON.parse(a)))
    }, c, d)
  },
  setCrossOrigin: function (a) {
    this.crossOrigin = a
  },
  parse: function (a) {
    var b = new THREE.BufferGeometry,
      c = a.attributes,
      d;
    for (d in c) {
      var e = c[d],
        f = new self[e.type](e.array);
      b.addAttribute(d, new THREE.BufferAttribute(f, e.itemSize))
    }
    c = a.offsets;
    void 0 !== c && (b.offsets = JSON.parse(JSON.stringify(c)));
    a = a.boundingSphere;
    void 0 !== a && (c = new THREE.Vector3, void 0 !== a.center && c.fromArray(a.center), b.boundingSphere = new THREE.Sphere(c, a.radius));
    return b
  }
};
THREE.MaterialLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.MaterialLoader.prototype = {
  constructor: THREE.MaterialLoader,
  load: function (a, b, c, d) {
    var e = this,
      f = new THREE.XHRLoader;
    f.setCrossOrigin(this.crossOrigin);
    f.load(a, function (a) {
      b(e.parse(JSON.parse(a)))
    }, c, d)
  },
  setCrossOrigin: function (a) {
    this.crossOrigin = a
  },
  parse: function (a) {
    var b = new THREE[a.type];
    void 0 !== a.color && b.color.setHex(a.color);
    void 0 !== a.ambient && b.ambient.setHex(a.ambient);
    void 0 !== a.emissive && b.emissive.setHex(a.emissive);
    void 0 !== a.specular && b.specular.setHex(a.specular);
    void 0 !== a.shininess &&
      (b.shininess = a.shininess);
    void 0 !== a.uniforms && (b.uniforms = a.uniforms);
    void 0 !== a.vertexShader && (b.vertexShader = a.vertexShader);
    void 0 !== a.fragmentShader && (b.fragmentShader = a.fragmentShader);
    void 0 !== a.vertexColors && (b.vertexColors = a.vertexColors);
    void 0 !== a.shading && (b.shading = a.shading);
    void 0 !== a.blending && (b.blending = a.blending);
    void 0 !== a.side && (b.side = a.side);
    void 0 !== a.opacity && (b.opacity = a.opacity);
    void 0 !== a.transparent && (b.transparent = a.transparent);
    void 0 !== a.wireframe && (b.wireframe = a.wireframe);
    if (void 0 !== a.materials)
      for (var c = 0, d = a.materials.length; c < d; c++) b.materials.push(this.parse(a.materials[c]));
    return b
  }
};
THREE.ObjectLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.ObjectLoader.prototype = {
  constructor: THREE.ObjectLoader,
  load: function (a, b, c, d) {
    var e = this,
      f = new THREE.XHRLoader(e.manager);
    f.setCrossOrigin(this.crossOrigin);
    f.load(a, function (a) {
      b(e.parse(JSON.parse(a)))
    }, c, d)
  },
  setCrossOrigin: function (a) {
    this.crossOrigin = a
  },
  parse: function (a) {
    var b = this.parseGeometries(a.geometries),
      c = this.parseMaterials(a.materials);
    return this.parseObject(a.object, b, c)
  },
  parseGeometries: function (a) {
    var b = {};
    if (void 0 !== a)
      for (var c = new THREE.JSONLoader, d = new THREE.BufferGeometryLoader,
          e = 0, f = a.length; e < f; e++) {
        var g, h = a[e];
        switch (h.type) {
          case "PlaneGeometry":
            g = new THREE.PlaneGeometry(h.width, h.height, h.widthSegments, h.heightSegments);
            break;
          case "BoxGeometry":
          case "CubeGeometry":
            g = new THREE.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
            break;
          case "CircleGeometry":
            g = new THREE.CircleGeometry(h.radius, h.segments);
            break;
          case "CylinderGeometry":
            g = new THREE.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded);
            break;
          case "SphereGeometry":
            g = new THREE.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
            break;
          case "IcosahedronGeometry":
            g = new THREE.IcosahedronGeometry(h.radius, h.detail);
            break;
          case "TorusGeometry":
            g = new THREE.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
            break;
          case "TorusKnotGeometry":
            g = new THREE.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
            break;
          case "BufferGeometry":
            g =
              d.parse(h.data);
            break;
          case "Geometry":
            g = c.parse(h.data).geometry
        }
        g.uuid = h.uuid;
        void 0 !== h.name && (g.name = h.name);
        b[h.uuid] = g
      }
    return b
  },
  parseMaterials: function (a) {
    var b = {};
    if (void 0 !== a)
      for (var c = new THREE.MaterialLoader, d = 0, e = a.length; d < e; d++) {
        var f = a[d],
          g = c.parse(f);
        g.uuid = f.uuid;
        void 0 !== f.name && (g.name = f.name);
        b[f.uuid] = g
      }
    return b
  },
  parseObject: function () {
    var a = new THREE.Matrix4;
    return function (b, c, d) {
      var e;
      switch (b.type) {
        case "Scene":
          e = new THREE.Scene;
          break;
        case "PerspectiveCamera":
          e = new THREE.PerspectiveCamera(b.fov,
            b.aspect, b.near, b.far);
          break;
        case "OrthographicCamera":
          e = new THREE.OrthographicCamera(b.left, b.right, b.top, b.bottom, b.near, b.far);
          break;
        case "AmbientLight":
          e = new THREE.AmbientLight(b.color);
          break;
        case "DirectionalLight":
          e = new THREE.DirectionalLight(b.color, b.intensity);
          break;
        case "PointLight":
          e = new THREE.PointLight(b.color, b.intensity, b.distance);
          break;
        case "SpotLight":
          e = new THREE.SpotLight(b.color, b.intensity, b.distance, b.angle, b.exponent);
          break;
        case "HemisphereLight":
          e = new THREE.HemisphereLight(b.color,
            b.groundColor, b.intensity);
          break;
        case "Mesh":
          e = c[b.geometry];
          var f = d[b.material];
          void 0 === e && console.warn("THREE.ObjectLoader: Undefined geometry", b.geometry);
          void 0 === f && console.warn("THREE.ObjectLoader: Undefined material", b.material);
          e = new THREE.Mesh(e, f);
          break;
        case "Line":
          e = c[b.geometry];
          f = d[b.material];
          void 0 === e && console.warn("THREE.ObjectLoader: Undefined geometry", b.geometry);
          void 0 === f && console.warn("THREE.ObjectLoader: Undefined material", b.material);
          e = new THREE.Line(e, f);
          break;
        case "Sprite":
          f =
            d[b.material];
          void 0 === f && console.warn("THREE.ObjectLoader: Undefined material", b.material);
          e = new THREE.Sprite(f);
          break;
        case "Group":
          e = new THREE.Group;
          break;
        default:
          e = new THREE.Object3D
      }
      e.uuid = b.uuid;
      void 0 !== b.name && (e.name = b.name);
      void 0 !== b.matrix ? (a.fromArray(b.matrix), a.decompose(e.position, e.quaternion, e.scale)) : (void 0 !== b.position && e.position.fromArray(b.position), void 0 !== b.rotation && e.rotation.fromArray(b.rotation), void 0 !== b.scale && e.scale.fromArray(b.scale));
      void 0 !== b.visible && (e.visible =
        b.visible);
      void 0 !== b.userData && (e.userData = b.userData);
      if (void 0 !== b.children)
        for (var g in b.children) e.add(this.parseObject(b.children[g], c, d));
      return e
    }
  }()
};
THREE.TextureLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.TextureLoader.prototype = {
  constructor: THREE.TextureLoader,
  load: function (a, b, c, d) {
    var e = new THREE.ImageLoader(this.manager);
    e.setCrossOrigin(this.crossOrigin);
    e.load(a, function (a) {
      a = new THREE.Texture(a);
      a.needsUpdate = !0;
      void 0 !== b && b(a)
    }, c, d)
  },
  setCrossOrigin: function (a) {
    this.crossOrigin = a
  }
};
THREE.CompressedTextureLoader = function () {
  this._parser = null
};
THREE.CompressedTextureLoader.prototype = {
  constructor: THREE.CompressedTextureLoader,
  load: function (a, b, c) {
    var d = this,
      e = [],
      f = new THREE.CompressedTexture;
    f.image = e;
    var g = new THREE.XHRLoader;
    g.setResponseType("arraybuffer");
    if (a instanceof Array) {
      var h = 0;
      c = function (c) {
        g.load(a[c], function (a) {
          a = d._parser(a, !0);
          e[c] = {
            width: a.width,
            height: a.height,
            format: a.format,
            mipmaps: a.mipmaps
          };
          h += 1;
          6 === h && (1 == a.mipmapCount && (f.minFilter = THREE.LinearFilter), f.format = a.format, f.needsUpdate = !0, b && b(f))
        })
      };
      for (var k = 0, n =
          a.length; k < n; ++k) c(k)
    } else g.load(a, function (a) {
      a = d._parser(a, !0);
      if (a.isCubemap)
        for (var c = a.mipmaps.length / a.mipmapCount, g = 0; g < c; g++) {
          e[g] = {
            mipmaps: []
          };
          for (var h = 0; h < a.mipmapCount; h++) e[g].mipmaps.push(a.mipmaps[g * a.mipmapCount + h]), e[g].format = a.format, e[g].width = a.width, e[g].height = a.height
        } else f.image.width = a.width, f.image.height = a.height, f.mipmaps = a.mipmaps;
      1 === a.mipmapCount && (f.minFilter = THREE.LinearFilter);
      f.format = a.format;
      f.needsUpdate = !0;
      b && b(f)
    });
    return f
  }
};
THREE.Material = function () {
  Object.defineProperty(this, "id", {
    value: THREE.MaterialIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.type = "Material";
  this.side = THREE.FrontSide;
  this.opacity = 1;
  this.transparent = !1;
  this.blending = THREE.NormalBlending;
  this.blendSrc = THREE.SrcAlphaFactor;
  this.blendDst = THREE.OneMinusSrcAlphaFactor;
  this.blendEquation = THREE.AddEquation;
  this.depthWrite = this.depthTest = !0;
  this.polygonOffset = !1;
  this.overdraw = this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor =
    0;
  this.needsUpdate = this.visible = !0
};
THREE.Material.prototype = {
  constructor: THREE.Material,
  setValues: function (a) {
    if (void 0 !== a)
      for (var b in a) {
        var c = a[b];
        if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined.");
        else if (b in this) {
          var d = this[b];
          d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = "overdraw" == b ? Number(c) : c
        }
      }
  },
  toJSON: function () {
    var a = {
      metadata: {
        version: 4.2,
        type: "material",
        generator: "MaterialExporter"
      },
      uuid: this.uuid,
      type: this.type
    };
    "" !== this.name &&
      (a.name = this.name);
    this instanceof THREE.MeshBasicMaterial ? (a.color = this.color.getHex(), this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshLambertMaterial ? (a.color = this.color.getHex(), a.ambient = this.ambient.getHex(), a.emissive = this.emissive.getHex(), this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending &&
      (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshPhongMaterial ? (a.color = this.color.getHex(), a.ambient = this.ambient.getHex(), a.emissive = this.emissive.getHex(), a.specular = this.specular.getHex(), a.shininess = this.shininess, this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshNormalMaterial ? (this.shading !==
      THREE.FlatShading && (a.shading = this.shading), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshDepthMaterial ? (this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.ShaderMaterial ? (a.uniforms = this.uniforms, a.vertexShader = this.vertexShader, a.fragmentShader = this.fragmentShader) : this instanceof THREE.SpriteMaterial && (a.color = this.color.getHex());
    1 > this.opacity && (a.opacity = this.opacity);
    !1 !== this.transparent && (a.transparent = this.transparent);
    !1 !== this.wireframe && (a.wireframe = this.wireframe);
    return a
  },
  clone: function (a) {
    void 0 === a && (a = new THREE.Material);
    a.name = this.name;
    a.side = this.side;
    a.opacity = this.opacity;
    a.transparent = this.transparent;
    a.blending = this.blending;
    a.blendSrc = this.blendSrc;
    a.blendDst = this.blendDst;
    a.blendEquation = this.blendEquation;
    a.depthTest = this.depthTest;
    a.depthWrite = this.depthWrite;
    a.polygonOffset = this.polygonOffset;
    a.polygonOffsetFactor =
      this.polygonOffsetFactor;
    a.polygonOffsetUnits = this.polygonOffsetUnits;
    a.alphaTest = this.alphaTest;
    a.overdraw = this.overdraw;
    a.visible = this.visible;
    return a
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "LineBasicMaterial";
  this.color = new THREE.Color(16777215);
  this.linewidth = 1;
  this.linejoin = this.linecap = "round";
  this.vertexColors = THREE.NoColors;
  this.fog = !0;
  this.setValues(a)
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone = function () {
  var a = new THREE.LineBasicMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.linewidth = this.linewidth;
  a.linecap = this.linecap;
  a.linejoin = this.linejoin;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a
};
THREE.LineDashedMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "LineDashedMaterial";
  this.color = new THREE.Color(16777215);
  this.scale = this.linewidth = 1;
  this.dashSize = 3;
  this.gapSize = 1;
  this.vertexColors = !1;
  this.fog = !0;
  this.setValues(a)
};
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone = function () {
  var a = new THREE.LineDashedMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.linewidth = this.linewidth;
  a.scale = this.scale;
  a.dashSize = this.dashSize;
  a.gapSize = this.gapSize;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a
};
THREE.MeshBasicMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "MeshBasicMaterial";
  this.color = new THREE.Color(16777215);
  this.envMap = this.alphaMap = this.specularMap = this.lightMap = this.map = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinejoin = this.wireframeLinecap = "round";
  this.vertexColors = THREE.NoColors;
  this.morphTargets = this.skinning = !1;
  this.setValues(a)
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone = function () {
  var a = new THREE.MeshBasicMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.specularMap = this.specularMap;
  a.alphaMap = this.alphaMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  return a
};
THREE.MeshLambertMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "MeshLambertMaterial";
  this.color = new THREE.Color(16777215);
  this.ambient = new THREE.Color(16777215);
  this.emissive = new THREE.Color(0);
  this.wrapAround = !1;
  this.wrapRGB = new THREE.Vector3(1, 1, 1);
  this.envMap = this.alphaMap = this.specularMap = this.lightMap = this.map = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth =
    1;
  this.wireframeLinejoin = this.wireframeLinecap = "round";
  this.vertexColors = THREE.NoColors;
  this.morphNormals = this.morphTargets = this.skinning = !1;
  this.setValues(a)
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone = function () {
  var a = new THREE.MeshLambertMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.ambient.copy(this.ambient);
  a.emissive.copy(this.emissive);
  a.wrapAround = this.wrapAround;
  a.wrapRGB.copy(this.wrapRGB);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.specularMap = this.specularMap;
  a.alphaMap = this.alphaMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a
};
THREE.MeshPhongMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "MeshPhongMaterial";
  this.color = new THREE.Color(16777215);
  this.ambient = new THREE.Color(16777215);
  this.emissive = new THREE.Color(0);
  this.specular = new THREE.Color(1118481);
  this.shininess = 30;
  this.wrapAround = this.metal = !1;
  this.wrapRGB = new THREE.Vector3(1, 1, 1);
  this.bumpMap = this.lightMap = this.map = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalScale = new THREE.Vector2(1, 1);
  this.envMap = this.alphaMap = this.specularMap = null;
  this.combine =
    THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinejoin = this.wireframeLinecap = "round";
  this.vertexColors = THREE.NoColors;
  this.morphNormals = this.morphTargets = this.skinning = !1;
  this.setValues(a)
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone = function () {
  var a = new THREE.MeshPhongMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.ambient.copy(this.ambient);
  a.emissive.copy(this.emissive);
  a.specular.copy(this.specular);
  a.shininess = this.shininess;
  a.metal = this.metal;
  a.wrapAround = this.wrapAround;
  a.wrapRGB.copy(this.wrapRGB);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.bumpMap = this.bumpMap;
  a.bumpScale = this.bumpScale;
  a.normalMap = this.normalMap;
  a.normalScale.copy(this.normalScale);
  a.specularMap = this.specularMap;
  a.alphaMap = this.alphaMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a
};
THREE.MeshDepthMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "MeshDepthMaterial";
  this.wireframe = this.morphTargets = !1;
  this.wireframeLinewidth = 1;
  this.setValues(a)
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.clone = function () {
  var a = new THREE.MeshDepthMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  return a
};
THREE.MeshNormalMaterial = function (a) {
  THREE.Material.call(this, a);
  this.type = "MeshNormalMaterial";
  this.shading = THREE.FlatShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.morphTargets = !1;
  this.setValues(a)
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.clone = function () {
  var a = new THREE.MeshNormalMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  return a
};
THREE.MeshFaceMaterial = function (a) {
  this.uuid = THREE.Math.generateUUID();
  this.type = "MeshFaceMaterial";
  this.materials = a instanceof Array ? a : []
};
THREE.MeshFaceMaterial.prototype = {
  constructor: THREE.MeshFaceMaterial,
  toJSON: function () {
    for (var a = {
        metadata: {
          version: 4.2,
          type: "material",
          generator: "MaterialExporter"
        },
        uuid: this.uuid,
        type: this.type,
        materials: []
      }, b = 0, c = this.materials.length; b < c; b++) a.materials.push(this.materials[b].toJSON());
    return a
  },
  clone: function () {
    for (var a = new THREE.MeshFaceMaterial, b = 0; b < this.materials.length; b++) a.materials.push(this.materials[b].clone());
    return a
  }
};
THREE.PointCloudMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "PointCloudMaterial";
  this.color = new THREE.Color(16777215);
  this.map = null;
  this.size = 1;
  this.sizeAttenuation = !0;
  this.vertexColors = THREE.NoColors;
  this.fog = !0;
  this.setValues(a)
};
THREE.PointCloudMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.PointCloudMaterial.prototype.clone = function () {
  var a = new THREE.PointCloudMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.size = this.size;
  a.sizeAttenuation = this.sizeAttenuation;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a
};
THREE.ParticleBasicMaterial = function (a) {
  console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");
  return new THREE.PointCloudMaterial(a)
};
THREE.ParticleSystemMaterial = function (a) {
  console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");
  return new THREE.PointCloudMaterial(a)
};
THREE.ShaderMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "ShaderMaterial";
  this.defines = {};
  this.uniforms = {};
  this.attributes = null;
  this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
  this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
  this.shading = THREE.SmoothShading;
  this.linewidth = 1;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.lights = this.fog = !1;
  this.vertexColors = THREE.NoColors;
  this.morphNormals =
    this.morphTargets = this.skinning = !1;
  this.defaultAttributeValues = {
    color: [1, 1, 1],
    uv: [0, 0],
    uv2: [0, 0]
  };
  this.index0AttributeName = void 0;
  this.setValues(a)
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone = function () {
  var a = new THREE.ShaderMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.fragmentShader = this.fragmentShader;
  a.vertexShader = this.vertexShader;
  a.uniforms = THREE.UniformsUtils.clone(this.uniforms);
  a.attributes = this.attributes;
  a.defines = this.defines;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.fog = this.fog;
  a.lights = this.lights;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets =
    this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a
};
THREE.RawShaderMaterial = function (a) {
  THREE.ShaderMaterial.call(this, a);
  this.type = "RawShaderMaterial"
};
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.clone = function () {
  var a = new THREE.RawShaderMaterial;
  THREE.ShaderMaterial.prototype.clone.call(this, a);
  return a
};
THREE.SpriteMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "SpriteMaterial";
  this.color = new THREE.Color(16777215);
  this.map = null;
  this.rotation = 0;
  this.fog = !1;
  this.setValues(a)
};
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone = function () {
  var a = new THREE.SpriteMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.rotation = this.rotation;
  a.fog = this.fog;
  return a
};
THREE.Texture = function (a, b, c, d, e, f, g, h, k) {
  Object.defineProperty(this, "id", {
    value: THREE.TextureIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.image = void 0 !== a ? a : THREE.Texture.DEFAULT_IMAGE;
  this.mipmaps = [];
  this.mapping = void 0 !== b ? b : THREE.Texture.DEFAULT_MAPPING;
  this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
  this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
  this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
  this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
  this.anisotropy =
    void 0 !== k ? k : 1;
  this.format = void 0 !== g ? g : THREE.RGBAFormat;
  this.type = void 0 !== h ? h : THREE.UnsignedByteType;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.generateMipmaps = !0;
  this.premultiplyAlpha = !1;
  this.flipY = !0;
  this.unpackAlignment = 4;
  this._needsUpdate = !1;
  this.onUpdate = null
};
THREE.Texture.DEFAULT_IMAGE = void 0;
THREE.Texture.DEFAULT_MAPPING = new THREE.UVMapping;
THREE.Texture.prototype = {
  constructor: THREE.Texture,
  get needsUpdate() {
    return this._needsUpdate
  },
  set needsUpdate(a) {
    !0 === a && this.update();
    this._needsUpdate = a
  },
  clone: function (a) {
    void 0 === a && (a = new THREE.Texture);
    a.image = this.image;
    a.mipmaps = this.mipmaps.slice(0);
    a.mapping = this.mapping;
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.minFilter = this.minFilter;
    a.anisotropy = this.anisotropy;
    a.format = this.format;
    a.type = this.type;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    a.generateMipmaps =
      this.generateMipmaps;
    a.premultiplyAlpha = this.premultiplyAlpha;
    a.flipY = this.flipY;
    a.unpackAlignment = this.unpackAlignment;
    return a
  },
  update: function () {
    this.dispatchEvent({
      type: "update"
    })
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);
THREE.TextureIdCount = 0;
THREE.CubeTexture = function (a, b, c, d, e, f, g, h, k) {
  THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
  this.images = a
};
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CubeTexture.clone = function (a) {
  void 0 === a && (a = new THREE.CubeTexture);
  THREE.Texture.prototype.clone.call(this, a);
  a.images = this.images;
  return a
};
THREE.CompressedTexture = function (a, b, c, d, e, f, g, h, k, n, p) {
  THREE.Texture.call(this, null, f, g, h, k, n, d, e, p);
  this.image = {
    width: b,
    height: c
  };
  this.mipmaps = a;
  this.generateMipmaps = this.flipY = !1
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone = function () {
  var a = new THREE.CompressedTexture;
  THREE.Texture.prototype.clone.call(this, a);
  return a
};
THREE.DataTexture = function (a, b, c, d, e, f, g, h, k, n, p) {
  THREE.Texture.call(this, null, f, g, h, k, n, d, e, p);
  this.image = {
    data: a,
    width: b,
    height: c
  }
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.clone = function () {
  var a = new THREE.DataTexture;
  THREE.Texture.prototype.clone.call(this, a);
  return a
};
THREE.VideoTexture = function (a, b, c, d, e, f, g, h, k) {
  THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
  this.generateMipmaps = !1;
  var n = this,
    p = function () {
      requestAnimationFrame(p);
      a.readyState === a.HAVE_ENOUGH_DATA && (n.needsUpdate = !0)
    };
  p()
};
THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.Group = function () {
  THREE.Object3D.call(this);
  this.type = "Group"
};
THREE.Group.prototype = Object.create(THREE.Object3D.prototype);
THREE.PointCloud = function (a, b) {
  THREE.Object3D.call(this);
  this.type = "PointCloud";
  this.geometry = void 0 !== a ? a : new THREE.Geometry;
  this.material = void 0 !== b ? b : new THREE.PointCloudMaterial({
    color: 16777215 * Math.random()
  });
  this.sortParticles = !1
};
THREE.PointCloud.prototype = Object.create(THREE.Object3D.prototype);
THREE.PointCloud.prototype.raycast = function () {
  var a = new THREE.Matrix4,
    b = new THREE.Ray;
  return function (c, d) {
    var e = this,
      f = e.geometry,
      g = c.params.PointCloud.threshold;
    a.getInverse(this.matrixWorld);
    b.copy(c.ray).applyMatrix4(a);
    if (null === f.boundingBox || !1 !== b.isIntersectionBox(f.boundingBox)) {
      var h = g / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        k = new THREE.Vector3,
        g = function (a, f) {
          var g = b.distanceToPoint(a);
          if (g < h) {
            var k = b.closestPointToPoint(a);
            k.applyMatrix4(e.matrixWorld);
            var m = c.ray.origin.distanceTo(k);
            d.push({
              distance: m,
              distanceToRay: g,
              point: k.clone(),
              index: f,
              face: null,
              object: e
            })
          }
        };
      if (f instanceof THREE.BufferGeometry) {
        var n = f.attributes,
          p = n.position.array;
        if (void 0 !== n.index) {
          var n = n.index.array,
            q = f.offsets;
          0 === q.length && (q = [{
            start: 0,
            count: n.length,
            index: 0
          }]);
          for (var m = 0, r = q.length; m < r; ++m)
            for (var t = q[m].start, s = q[m].index, f = t, t = t + q[m].count; f < t; f++) {
              var u = s + n[f];
              k.fromArray(p, 3 * u);
              g(k, u)
            }
        } else
          for (n = p.length / 3, f = 0; f < n; f++) k.set(p[3 * f], p[3 * f + 1], p[3 * f + 2]), g(k, f)
      } else
        for (k = this.geometry.vertices,
          f = 0; f < k.length; f++) g(k[f], f)
    }
  }
}();
THREE.PointCloud.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.PointCloud(this.geometry, this.material));
  a.sortParticles = this.sortParticles;
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.ParticleSystem = function (a, b) {
  console.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");
  return new THREE.PointCloud(a, b)
};
THREE.Line = function (a, b, c) {
  THREE.Object3D.call(this);
  this.type = "Line";
  this.geometry = void 0 !== a ? a : new THREE.Geometry;
  this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({
    color: 16777215 * Math.random()
  });
  this.mode = void 0 !== c ? c : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.raycast = function () {
  var a = new THREE.Matrix4,
    b = new THREE.Ray,
    c = new THREE.Sphere;
  return function (d, e) {
    var f = d.linePrecision,
      f = f * f,
      g = this.geometry;
    null === g.boundingSphere && g.computeBoundingSphere();
    c.copy(g.boundingSphere);
    c.applyMatrix4(this.matrixWorld);
    if (!1 !== d.ray.isIntersectionSphere(c) && (a.getInverse(this.matrixWorld), b.copy(d.ray).applyMatrix4(a), g instanceof THREE.Geometry))
      for (var g = g.vertices, h = g.length, k = new THREE.Vector3, n = new THREE.Vector3, p = this.mode === THREE.LineStrip ?
          1 : 2, q = 0; q < h - 1; q += p)
        if (!(b.distanceSqToSegment(g[q], g[q + 1], n, k) > f)) {
          var m = b.origin.distanceTo(n);
          m < d.near || m > d.far || e.push({
            distance: m,
            point: k.clone().applyMatrix4(this.matrixWorld),
            face: null,
            faceIndex: null,
            object: this
          })
        }
  }
}();
THREE.Line.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Line(this.geometry, this.material, this.mode));
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.Mesh = function (a, b) {
  THREE.Object3D.call(this);
  this.type = "Mesh";
  this.geometry = void 0 !== a ? a : new THREE.Geometry;
  this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({
    color: 16777215 * Math.random()
  });
  this.updateMorphTargets()
};
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets = function () {
  if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
    this.morphTargetBase = -1;
    this.morphTargetForcedOrder = [];
    this.morphTargetInfluences = [];
    this.morphTargetDictionary = {};
    for (var a = 0, b = this.geometry.morphTargets.length; a < b; a++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a
  }
};
THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
  if (void 0 !== this.morphTargetDictionary[a]) return this.morphTargetDictionary[a];
  console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
  return 0
};
THREE.Mesh.prototype.raycast = function () {
  var a = new THREE.Matrix4,
    b = new THREE.Ray,
    c = new THREE.Sphere,
    d = new THREE.Vector3,
    e = new THREE.Vector3,
    f = new THREE.Vector3;
  return function (g, h) {
    var k = this.geometry;
    null === k.boundingSphere && k.computeBoundingSphere();
    c.copy(k.boundingSphere);
    c.applyMatrix4(this.matrixWorld);
    if (!1 !== g.ray.isIntersectionSphere(c) && (a.getInverse(this.matrixWorld), b.copy(g.ray).applyMatrix4(a), null === k.boundingBox || !1 !== b.isIntersectionBox(k.boundingBox)))
      if (k instanceof THREE.BufferGeometry) {
        var n =
          this.material;
        if (void 0 !== n) {
          var p = k.attributes,
            q, m, r = g.precision;
          if (void 0 !== p.index) {
            var t = p.index.array,
              s = p.position.array,
              u = k.offsets;
            0 === u.length && (u = [{
              start: 0,
              count: t.length,
              index: 0
            }]);
            for (var v = 0, y = u.length; v < y; ++v)
              for (var p = u[v].start, G = u[v].index, k = p, w = p + u[v].count; k < w; k += 3) {
                p = G + t[k];
                q = G + t[k + 1];
                m = G + t[k + 2];
                d.fromArray(s, 3 * p);
                e.fromArray(s, 3 * q);
                f.fromArray(s, 3 * m);
                var K = n.side === THREE.BackSide ? b.intersectTriangle(f, e, d, !0) : b.intersectTriangle(d, e, f, n.side !== THREE.DoubleSide);
                if (null !== K) {
                  K.applyMatrix4(this.matrixWorld);
                  var x = g.ray.origin.distanceTo(K);
                  x < r || x < g.near || x > g.far || h.push({
                    distance: x,
                    point: K,
                    face: new THREE.Face3(p, q, m, THREE.Triangle.normal(d, e, f)),
                    faceIndex: null,
                    object: this
                  })
                }
              }
          } else
            for (s = p.position.array, t = k = 0, w = s.length; k < w; k += 3, t += 9) p = k, q = k + 1, m = k + 2, d.fromArray(s, t), e.fromArray(s, t + 3), f.fromArray(s, t + 6), K = n.side === THREE.BackSide ? b.intersectTriangle(f, e, d, !0) : b.intersectTriangle(d, e, f, n.side !== THREE.DoubleSide), null !== K && (K.applyMatrix4(this.matrixWorld), x = g.ray.origin.distanceTo(K), x < r || x < g.near || x >
              g.far || h.push({
                distance: x,
                point: K,
                face: new THREE.Face3(p, q, m, THREE.Triangle.normal(d, e, f)),
                faceIndex: null,
                object: this
              }))
        }
      } else if (k instanceof THREE.Geometry)
      for (t = this.material instanceof THREE.MeshFaceMaterial, s = !0 === t ? this.material.materials : null, r = g.precision, u = k.vertices, v = 0, y = k.faces.length; v < y; v++)
        if (G = k.faces[v], n = !0 === t ? s[G.materialIndex] : this.material, void 0 !== n) {
          p = u[G.a];
          q = u[G.b];
          m = u[G.c];
          if (!0 === n.morphTargets) {
            K = k.morphTargets;
            x = this.morphTargetInfluences;
            d.set(0, 0, 0);
            e.set(0, 0, 0);
            f.set(0,
              0, 0);
            for (var w = 0, D = K.length; w < D; w++) {
              var E = x[w];
              if (0 !== E) {
                var A = K[w].vertices;
                d.x += (A[G.a].x - p.x) * E;
                d.y += (A[G.a].y - p.y) * E;
                d.z += (A[G.a].z - p.z) * E;
                e.x += (A[G.b].x - q.x) * E;
                e.y += (A[G.b].y - q.y) * E;
                e.z += (A[G.b].z - q.z) * E;
                f.x += (A[G.c].x - m.x) * E;
                f.y += (A[G.c].y - m.y) * E;
                f.z += (A[G.c].z - m.z) * E
              }
            }
            d.add(p);
            e.add(q);
            f.add(m);
            p = d;
            q = e;
            m = f
          }
          K = n.side === THREE.BackSide ? b.intersectTriangle(m, q, p, !0) : b.intersectTriangle(p, q, m, n.side !== THREE.DoubleSide);
          null !== K && (K.applyMatrix4(this.matrixWorld), x = g.ray.origin.distanceTo(K), x < r ||
            x < g.near || x > g.far || h.push({
              distance: x,
              point: K,
              face: G,
              faceIndex: v,
              object: this
            }))
        }
  }
}();
THREE.Mesh.prototype.clone = function (a, b) {
  void 0 === a && (a = new THREE.Mesh(this.geometry, this.material));
  THREE.Object3D.prototype.clone.call(this, a, b);
  return a
};
THREE.Bone = function (a) {
  THREE.Object3D.call(this);
  this.skin = a
};
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Skeleton = function (a, b, c) {
  this.useVertexTexture = void 0 !== c ? c : !0;
  this.identityMatrix = new THREE.Matrix4;
  a = a || [];
  this.bones = a.slice(0);
  this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = a = 256 < this.bones.length ? 64 : 64 < this.bones.length ? 32 : 16 < this.bones.length ? 16 : 8, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType),
    this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * this.bones.length);
  if (void 0 === b) this.calculateInverses();
  else if (this.bones.length === b.length) this.boneInverses = b.slice(0);
  else
    for (console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], b = 0, a = this.bones.length; b < a; b++) this.boneInverses.push(new THREE.Matrix4)
};
THREE.Skeleton.prototype.calculateInverses = function () {
  this.boneInverses = [];
  for (var a = 0, b = this.bones.length; a < b; a++) {
    var c = new THREE.Matrix4;
    this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
    this.boneInverses.push(c)
  }
};
THREE.Skeleton.prototype.pose = function () {
  for (var a, b = 0, c = this.bones.length; b < c; b++)(a = this.bones[b]) && a.matrixWorld.getInverse(this.boneInverses[b]);
  b = 0;
  for (c = this.bones.length; b < c; b++)
    if (a = this.bones[b]) a.parent ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale)
};
THREE.Skeleton.prototype.update = function () {
  var a = new THREE.Matrix4;
  return function () {
    for (var b = 0, c = this.bones.length; b < c; b++) a.multiplyMatrices(this.bones[b] ? this.bones[b].matrixWorld : this.identityMatrix, this.boneInverses[b]), a.flattenToArrayOffset(this.boneMatrices, 16 * b);
    this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
  }
}();
THREE.SkinnedMesh = function (a, b, c) {
  THREE.Mesh.call(this, a, b);
  this.type = "SkinnedMesh";
  this.bindMode = "attached";
  this.bindMatrix = new THREE.Matrix4;
  this.bindMatrixInverse = new THREE.Matrix4;
  a = [];
  if (this.geometry && void 0 !== this.geometry.bones) {
    for (var d, e, f, g, h = 0, k = this.geometry.bones.length; h < k; ++h) d = this.geometry.bones[h], e = d.pos, f = d.rotq, g = d.scl, b = new THREE.Bone(this), a.push(b), b.name = d.name, b.position.set(e[0], e[1], e[2]), b.quaternion.set(f[0], f[1], f[2], f[3]), void 0 !== g ? b.scale.set(g[0], g[1], g[2]) : b.scale.set(1,
      1, 1);
    h = 0;
    for (k = this.geometry.bones.length; h < k; ++h) d = this.geometry.bones[h], -1 !== d.parent ? a[d.parent].add(a[h]) : this.add(a[h])
  }
  this.normalizeSkinWeights();
  this.updateMatrixWorld(!0);
  this.bind(new THREE.Skeleton(a, void 0, c))
};
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.bind = function (a, b) {
  this.skeleton = a;
  void 0 === b && (this.updateMatrixWorld(!0), b = this.matrixWorld);
  this.bindMatrix.copy(b);
  this.bindMatrixInverse.getInverse(b)
};
THREE.SkinnedMesh.prototype.pose = function () {
  this.skeleton.pose()
};
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
  if (this.geometry instanceof THREE.Geometry)
    for (var a = 0; a < this.geometry.skinIndices.length; a++) {
      var b = this.geometry.skinWeights[a],
        c = 1 / b.lengthManhattan();
      Infinity !== c ? b.multiplyScalar(c) : b.set(1)
    }
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function (a) {
  THREE.Mesh.prototype.updateMatrixWorld.call(this, !0);
  "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unreckognized bindMode: " + this.bindMode)
};
THREE.SkinnedMesh.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture));
  THREE.Mesh.prototype.clone.call(this, a);
  return a
};
THREE.MorphAnimMesh = function (a, b) {
  THREE.Mesh.call(this, a, b);
  this.type = "MorphAnimMesh";
  this.duration = 1E3;
  this.mirroredLoop = !1;
  this.currentKeyframe = this.lastKeyframe = this.time = 0;
  this.direction = 1;
  this.directionBackwards = !1;
  this.setFrameRange(0, this.geometry.morphTargets.length - 1)
};
THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange = function (a, b) {
  this.startKeyframe = a;
  this.endKeyframe = b;
  this.length = this.endKeyframe - this.startKeyframe + 1
};
THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
  this.direction = 1;
  this.directionBackwards = !1
};
THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
  this.direction = -1;
  this.directionBackwards = !0
};
THREE.MorphAnimMesh.prototype.parseAnimations = function () {
  var a = this.geometry;
  a.animations || (a.animations = {});
  for (var b, c = a.animations, d = /([a-z]+)_?(\d+)/, e = 0, f = a.morphTargets.length; e < f; e++) {
    var g = a.morphTargets[e].name.match(d);
    if (g && 1 < g.length) {
      g = g[1];
      c[g] || (c[g] = {
        start: Infinity,
        end: -Infinity
      });
      var h = c[g];
      e < h.start && (h.start = e);
      e > h.end && (h.end = e);
      b || (b = g)
    }
  }
  a.firstAnimation = b
};
THREE.MorphAnimMesh.prototype.setAnimationLabel = function (a, b, c) {
  this.geometry.animations || (this.geometry.animations = {});
  this.geometry.animations[a] = {
    start: b,
    end: c
  }
};
THREE.MorphAnimMesh.prototype.playAnimation = function (a, b) {
  var c = this.geometry.animations[a];
  c ? (this.setFrameRange(c.start, c.end), this.duration = (c.end - c.start) / b * 1E3, this.time = 0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphAnimMesh.prototype.updateAnimation = function (a) {
  var b = this.duration / this.length;
  this.time += this.direction * a;
  if (this.mirroredLoop) {
    if (this.time > this.duration || 0 > this.time) this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time && (this.time = 0, this.directionBackwards = !1)
  } else this.time %= this.duration, 0 > this.time && (this.time += this.duration);
  a = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
  a !== this.currentKeyframe &&
    (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[a] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = a);
  b = this.time % b / b;
  this.directionBackwards && (b = 1 - b);
  this.morphTargetInfluences[this.currentKeyframe] = b;
  this.morphTargetInfluences[this.lastKeyframe] = 1 - b
};
THREE.MorphAnimMesh.prototype.interpolateTargets = function (a, b, c) {
  for (var d = this.morphTargetInfluences, e = 0, f = d.length; e < f; e++) d[e] = 0; - 1 < a && (d[a] = 1 - c); - 1 < b && (d[b] = c)
};
THREE.MorphAnimMesh.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.MorphAnimMesh(this.geometry, this.material));
  a.duration = this.duration;
  a.mirroredLoop = this.mirroredLoop;
  a.time = this.time;
  a.lastKeyframe = this.lastKeyframe;
  a.currentKeyframe = this.currentKeyframe;
  a.direction = this.direction;
  a.directionBackwards = this.directionBackwards;
  THREE.Mesh.prototype.clone.call(this, a);
  return a
};
THREE.LOD = function () {
  THREE.Object3D.call(this);
  this.objects = []
};
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel = function (a, b) {
  void 0 === b && (b = 0);
  b = Math.abs(b);
  for (var c = 0; c < this.objects.length && !(b < this.objects[c].distance); c++);
  this.objects.splice(c, 0, {
    distance: b,
    object: a
  });
  this.add(a)
};
THREE.LOD.prototype.getObjectForDistance = function (a) {
  for (var b = 1, c = this.objects.length; b < c && !(a < this.objects[b].distance); b++);
  return this.objects[b - 1].object
};
THREE.LOD.prototype.raycast = function () {
  var a = new THREE.Vector3;
  return function (b, c) {
    a.setFromMatrixPosition(this.matrixWorld);
    var d = b.ray.origin.distanceTo(a);
    this.getObjectForDistance(d).raycast(b, c)
  }
}();
THREE.LOD.prototype.update = function () {
  var a = new THREE.Vector3,
    b = new THREE.Vector3;
  return function (c) {
    if (1 < this.objects.length) {
      a.setFromMatrixPosition(c.matrixWorld);
      b.setFromMatrixPosition(this.matrixWorld);
      c = a.distanceTo(b);
      this.objects[0].object.visible = !0;
      for (var d = 1, e = this.objects.length; d < e; d++)
        if (c >= this.objects[d].distance) this.objects[d - 1].object.visible = !1, this.objects[d].object.visible = !0;
        else break;
      for (; d < e; d++) this.objects[d].object.visible = !1
    }
  }
}();
THREE.LOD.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.LOD);
  THREE.Object3D.prototype.clone.call(this, a);
  for (var b = 0, c = this.objects.length; b < c; b++) {
    var d = this.objects[b].object.clone();
    d.visible = 0 === b;
    a.addLevel(d, this.objects[b].distance)
  }
  return a
};
THREE.Sprite = function () {
  var a = new Uint16Array([0, 1, 2, 0, 2, 3]),
    b = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
    c = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
    d = new THREE.BufferGeometry;
  d.addAttribute("index", new THREE.BufferAttribute(a, 1));
  d.addAttribute("position", new THREE.BufferAttribute(b, 3));
  d.addAttribute("uv", new THREE.BufferAttribute(c, 2));
  return function (a) {
    THREE.Object3D.call(this);
    this.type = "Sprite";
    this.geometry = d;
    this.material = void 0 !== a ? a : new THREE.SpriteMaterial
  }
}();
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.raycast = function () {
  var a = new THREE.Vector3;
  return function (b, c) {
    a.setFromMatrixPosition(this.matrixWorld);
    var d = b.ray.distanceToPoint(a);
    d > this.scale.x || c.push({
      distance: d,
      point: this.position,
      face: null,
      object: this
    })
  }
}();
THREE.Sprite.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Sprite(this.material));
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.Particle = THREE.Sprite;
THREE.LensFlare = function (a, b, c, d, e) {
  THREE.Object3D.call(this);
  this.lensFlares = [];
  this.positionScreen = new THREE.Vector3;
  this.customUpdateCallback = void 0;
  void 0 !== a && this.add(a, b, c, d, e)
};
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add = function (a, b, c, d, e, f) {
  void 0 === b && (b = -1);
  void 0 === c && (c = 0);
  void 0 === f && (f = 1);
  void 0 === e && (e = new THREE.Color(16777215));
  void 0 === d && (d = THREE.NormalBlending);
  c = Math.min(c, Math.max(0, c));
  this.lensFlares.push({
    texture: a,
    size: b,
    distance: c,
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    rotation: 1,
    opacity: f,
    color: e,
    blending: d
  })
};
THREE.LensFlare.prototype.updateLensFlares = function () {
  var a, b = this.lensFlares.length,
    c, d = 2 * -this.positionScreen.x,
    e = 2 * -this.positionScreen.y;
  for (a = 0; a < b; a++) c = this.lensFlares[a], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = c.x * Math.PI * .25, c.rotation += .25 * (c.wantedRotation - c.rotation)
};
THREE.Scene = function () {
  THREE.Object3D.call(this);
  this.type = "Scene";
  this.overrideMaterial = this.fog = null;
  this.autoUpdate = !0
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Scene);
  THREE.Object3D.prototype.clone.call(this, a);
  null !== this.fog && (a.fog = this.fog.clone());
  null !== this.overrideMaterial && (a.overrideMaterial = this.overrideMaterial.clone());
  a.autoUpdate = this.autoUpdate;
  a.matrixAutoUpdate = this.matrixAutoUpdate;
  return a
};
THREE.Fog = function (a, b, c) {
  this.name = "";
  this.color = new THREE.Color(a);
  this.near = void 0 !== b ? b : 1;
  this.far = void 0 !== c ? c : 1E3
};
THREE.Fog.prototype.clone = function () {
  return new THREE.Fog(this.color.getHex(), this.near, this.far)
};
THREE.FogExp2 = function (a, b) {
  this.name = "";
  this.color = new THREE.Color(a);
  this.density = void 0 !== b ? b : 2.5E-4
};
THREE.FogExp2.prototype.clone = function () {
  return new THREE.FogExp2(this.color.getHex(), this.density)
};
THREE.ShaderChunk = {};
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n\tif ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n";
THREE.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\tvec3 dirVector = normalize( lDirection.xyz );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat lDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif";
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";
THREE.ShaderChunk.default_vertex = "vec4 mvPosition;\n\n#ifdef USE_SKINNING\n\n\tmvPosition = modelViewMatrix * skinned;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;";
THREE.ShaderChunk.map_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";
THREE.ShaderChunk.lightmap_pars_vertex = "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";
THREE.ShaderChunk.lights_phong_fragment = "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tvec3 pointDiffuse = vec3( 0.0 );\n\tvec3 pointSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tpointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tvec3 spotDiffuse = vec3( 0.0 );\n\tvec3 spotSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n\t\t\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tvec3 dirDiffuse = vec3( 0.0 );\n\tvec3 dirSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tdirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tvec3 hemiDiffuse = vec3( 0.0 );\n\tvec3 hemiSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\themiDiffuse += diffuse * hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n\ttotalDiffuse += dirDiffuse;\n\ttotalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\ttotalDiffuse += hemiDiffuse;\n\ttotalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\ttotalDiffuse += pointDiffuse;\n\ttotalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\ttotalDiffuse += spotDiffuse;\n\ttotalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\tuniform samplerCube envMap;\n\tuniform float flipEnvMap;\n\tuniform int combine;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform bool useRefract;\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t\t\t// Per-Pixel Tangent Space Normal Mapping\n\t\t\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\t#ifdef GAMMA_INPUT\n\n\t\ttexelColor.xyz *= texelColor.xyz;\n\n\t#endif\n\n\tgl_FragColor = gl_FragColor * texelColor;\n\n#endif";
THREE.ShaderChunk.lightmap_vertex = "#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n\tgl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif";
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n\t#ifdef GAMMA_INPUT\n\n\t\tvColor = color * color;\n\n\t#else\n\n\t\tvColor = color;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\tuniform bool useRefract;\n\n#endif\n";
THREE.ShaderChunk.linear_to_gamma_fragment = "#ifdef GAMMA_OUTPUT\n\n\tgl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif";
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";
THREE.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n\tvec3 reflectVec;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\n\t\tvec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n\t\tif ( useRefract ) {\n\n\t\t\treflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t} else { \n\n\t\t\treflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t}\n\n\t#else\n\n\t\treflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t\tvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#else\n\n\t\tvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#endif\n\n\t#ifdef GAMMA_INPUT\n\n\t\tcubeColor.xyz *= cubeColor.xyz;\n\n\t#endif\n\n\tif ( combine == 1 ) {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n\n\t} else if ( combine == 2 ) {\n\n\t\tgl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n\n\t} else {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n\n\t}\n\n#endif";
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tconst float LOG2 = 1.442695;\n\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t\t\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t\t\t//\thttp://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t\t\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif";
THREE.ShaderChunk.defaultnormal_vertex = "vec3 objectNormal;\n\n#ifdef USE_SKINNING\n\n\tobjectNormal = skinnedNormal.xyz;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\n\n\tobjectNormal = morphedNormal;\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\n\n\tobjectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;";
THREE.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;";
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";
THREE.ShaderChunk.map_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n\tgl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n\tgl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif";
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n\tworldNormal = normalize( worldNormal );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tif ( useRefract ) {\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t} else {\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t}\n\n#endif";
THREE.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\tshadowColor *= shadowColor;\n\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#endif\n\n\t#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#endif\n\n\t#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n\tgl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils = {
  merge: function (a) {
    for (var b = {}, c = 0; c < a.length; c++) {
      var d = this.clone(a[c]),
        e;
      for (e in d) b[e] = d[e]
    }
    return b
  },
  clone: function (a) {
    var b = {},
      c;
    for (c in a) {
      b[c] = {};
      for (var d in a[c]) {
        var e = a[c][d];
        b[c][d] = e instanceof THREE.Color || e instanceof THREE.Vector2 || e instanceof THREE.Vector3 || e instanceof THREE.Vector4 || e instanceof THREE.Matrix4 || e instanceof THREE.Texture ? e.clone() : e instanceof Array ? e.slice() : e
      }
    }
    return b
  }
};
THREE.UniformsLib = {
  common: {
    diffuse: {
      type: "c",
      value: new THREE.Color(15658734)
    },
    opacity: {
      type: "f",
      value: 1
    },
    map: {
      type: "t",
      value: null
    },
    offsetRepeat: {
      type: "v4",
      value: new THREE.Vector4(0, 0, 1, 1)
    },
    lightMap: {
      type: "t",
      value: null
    },
    specularMap: {
      type: "t",
      value: null
    },
    alphaMap: {
      type: "t",
      value: null
    },
    envMap: {
      type: "t",
      value: null
    },
    flipEnvMap: {
      type: "f",
      value: -1
    },
    useRefract: {
      type: "i",
      value: 0
    },
    reflectivity: {
      type: "f",
      value: 1
    },
    refractionRatio: {
      type: "f",
      value: .98
    },
    combine: {
      type: "i",
      value: 0
    },
    morphTargetInfluences: {
      type: "f",
      value: 0
    }
  },
  bump: {
    bumpMap: {
      type: "t",
      value: null
    },
    bumpScale: {
      type: "f",
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      type: "t",
      value: null
    },
    normalScale: {
      type: "v2",
      value: new THREE.Vector2(1, 1)
    }
  },
  fog: {
    fogDensity: {
      type: "f",
      value: 2.5E-4
    },
    fogNear: {
      type: "f",
      value: 1
    },
    fogFar: {
      type: "f",
      value: 2E3
    },
    fogColor: {
      type: "c",
      value: new THREE.Color(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      type: "fv",
      value: []
    },
    directionalLightDirection: {
      type: "fv",
      value: []
    },
    directionalLightColor: {
      type: "fv",
      value: []
    },
    hemisphereLightDirection: {
      type: "fv",
      value: []
    },
    hemisphereLightSkyColor: {
      type: "fv",
      value: []
    },
    hemisphereLightGroundColor: {
      type: "fv",
      value: []
    },
    pointLightColor: {
      type: "fv",
      value: []
    },
    pointLightPosition: {
      type: "fv",
      value: []
    },
    pointLightDistance: {
      type: "fv1",
      value: []
    },
    spotLightColor: {
      type: "fv",
      value: []
    },
    spotLightPosition: {
      type: "fv",
      value: []
    },
    spotLightDirection: {
      type: "fv",
      value: []
    },
    spotLightDistance: {
      type: "fv1",
      value: []
    },
    spotLightAngleCos: {
      type: "fv1",
      value: []
    },
    spotLightExponent: {
      type: "fv1",
      value: []
    }
  },
  particle: {
    psColor: {
      type: "c",
      value: new THREE.Color(15658734)
    },
    opacity: {
      type: "f",
      value: 1
    },
    size: {
      type: "f",
      value: 1
    },
    scale: {
      type: "f",
      value: 1
    },
    map: {
      type: "t",
      value: null
    },
    fogDensity: {
      type: "f",
      value: 2.5E-4
    },
    fogNear: {
      type: "f",
      value: 1
    },
    fogFar: {
      type: "f",
      value: 2E3
    },
    fogColor: {
      type: "c",
      value: new THREE.Color(16777215)
    }
  },
  shadowmap: {
    shadowMap: {
      type: "tv",
      value: []
    },
    shadowMapSize: {
      type: "v2v",
      value: []
    },
    shadowBias: {
      type: "fv1",
      value: []
    },
    shadowDarkness: {
      type: "fv1",
      value: []
    },
    shadowMatrix: {
      type: "m4v",
      value: []
    }
  }
};
THREE.ShaderLib = {
  basic: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
    vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex,
      THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "\t#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "\t#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
    ].join("\n"),
    fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment,
      THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
    ].join("\n")
  },
  lambert: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap,
      {
        ambient: {
          type: "c",
          value: new THREE.Color(16777215)
        },
        emissive: {
          type: "c",
          value: new THREE.Color(0)
        },
        wrapRGB: {
          type: "v3",
          value: new THREE.Vector3(1, 1, 1)
        }
      }
    ]),
    vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex,
      THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex,
      THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
    ].join("\n"),
    fragmentShader: ["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment,
      THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\tgl_FragColor.xyz *= vLightFront;\n\t\telse\n\t\t\tgl_FragColor.xyz *= vLightBack;\n\t#else\n\t\tgl_FragColor.xyz *= vLightFront;\n\t#endif",
      THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
    ].join("\n")
  },
  phong: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
      ambient: {
        type: "c",
        value: new THREE.Color(16777215)
      },
      emissive: {
        type: "c",
        value: new THREE.Color(0)
      },
      specular: {
        type: "c",
        value: new THREE.Color(1118481)
      },
      shininess: {
        type: "f",
        value: 30
      },
      wrapRGB: {
        type: "v3",
        value: new THREE.Vector3(1, 1, 1)
      }
    }]),
    vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex,
      THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "\tvNormal = normalize( transformedNormal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "\tvViewPosition = -mvPosition.xyz;",
      THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
    ].join("\n"),
    fragmentShader: ["#define PHONG\nuniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment,
      THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment,
      THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
    ].join("\n")
  },
  particle_basic: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
    vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex,
      THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
    ].join("\n"),
    fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;",
      THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"
    ].join("\n")
  },
  dashed: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common,
      THREE.UniformsLib.fog, {
        scale: {
          type: "f",
          value: 1
        },
        dashSize: {
          type: "f",
          value: 1
        },
        totalSize: {
          type: "f",
          value: 2
        }
      }
    ]),
    vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex,
      "}"
    ].join("\n"),
    fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tgl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment,
      "}"
    ].join("\n")
  },
  depth: {
    uniforms: {
      mNear: {
        type: "f",
        value: 1
      },
      mFar: {
        type: "f",
        value: 2E3
      },
      opacity: {
        type: "f",
        value: 1
      }
    },
    vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
    fragmentShader: ["uniform float mNear;\nuniform float mFar;\nuniform float opacity;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment,
      "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"
    ].join("\n")
  },
  normal: {
    uniforms: {
      opacity: {
        type: "f",
        value: 1
      }
    },
    vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvNormal = normalize( normalMatrix * normal );",
      THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"
    ].join("\n"),
    fragmentShader: ["uniform float opacity;\nvarying vec3 vNormal;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
  },
  normalmap: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
      enableAO: {
        type: "i",
        value: 0
      },
      enableDiffuse: {
        type: "i",
        value: 0
      },
      enableSpecular: {
        type: "i",
        value: 0
      },
      enableReflection: {
        type: "i",
        value: 0
      },
      enableDisplacement: {
        type: "i",
        value: 0
      },
      tDisplacement: {
        type: "t",
        value: null
      },
      tDiffuse: {
        type: "t",
        value: null
      },
      tCube: {
        type: "t",
        value: null
      },
      tNormal: {
        type: "t",
        value: null
      },
      tSpecular: {
        type: "t",
        value: null
      },
      tAO: {
        type: "t",
        value: null
      },
      uNormalScale: {
        type: "v2",
        value: new THREE.Vector2(1, 1)
      },
      uDisplacementBias: {
        type: "f",
        value: 0
      },
      uDisplacementScale: {
        type: "f",
        value: 1
      },
      diffuse: {
        type: "c",
        value: new THREE.Color(16777215)
      },
      specular: {
        type: "c",
        value: new THREE.Color(1118481)
      },
      ambient: {
        type: "c",
        value: new THREE.Color(16777215)
      },
      shininess: {
        type: "f",
        value: 30
      },
      opacity: {
        type: "f",
        value: 1
      },
      useRefract: {
        type: "i",
        value: 0
      },
      refractionRatio: {
        type: "f",
        value: .98
      },
      reflectivity: {
        type: "f",
        value: .5
      },
      uOffset: {
        type: "v2",
        value: new THREE.Vector2(0, 0)
      },
      uRepeat: {
        type: "v2",
        value: new THREE.Vector2(1, 1)
      },
      wrapRGB: {
        type: "v3",
        value: new THREE.Vector3(1, 1, 1)
      }
    }]),
    fragmentShader: ["uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\n\tuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
      THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\tvec3 specularTex = vec3( 1.0 );\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\n\tnormalTex.xy *= uNormalScale;\n\tnormalTex = normalize( normalTex );\n\tif( enableDiffuse ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\n\t\t\ttexelColor.xyz *= texelColor.xyz;\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\n\t\t#else\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n\t\t#endif\n\t}\n\tif( enableAO ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\n\t\t\taoColor.xyz *= aoColor.xyz;\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n\t\t#else\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n\t\t#endif\n\t}",
      THREE.ShaderChunk.alphatest_fragment, "\tif( enableSpecular )\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\n\tvec3 finalNormal = tsb * normalTex;\n\t#ifdef FLIP_SIDED\n\t\tfinalNormal = -finalNormal;\n\t#endif\n\tvec3 normal = normalize( finalNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\t#if MAX_POINT_LIGHTS > 0\n\t\tvec3 pointDiffuse = vec3( 0.0 );\n\t\tvec3 pointSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat pointDistance = 1.0;\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\n\t\t\tpointVector = normalize( pointVector );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n\t\t\t#endif\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( pointVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\tvec3 spotDiffuse = vec3( 0.0 );\n\t\tvec3 spotSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat spotDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\n\t\t\tspotVector = normalize( spotVector );\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\t\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\t\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\t\t\t\t#ifdef WRAP_AROUND\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\t\t\t\t#else\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t#endif\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( spotVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n\t\t\t}\n\t\t}\n\t#endif\n\t#if MAX_DIR_LIGHTS > 0\n\t\tvec3 dirDiffuse = vec3( 0.0 );\n\t\tvec3 dirSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n\t\t\t#endif\n\t\t\tdirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\tvec3 hemiDiffuse = vec3( 0.0 );\n\t\tvec3 hemiSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\t\t\themiDiffuse += diffuse * hemiColor;\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\t\t}\n\t#endif\n\tvec3 totalDiffuse = vec3( 0.0 );\n\tvec3 totalSpecular = vec3( 0.0 );\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalDiffuse += dirDiffuse;\n\t\ttotalSpecular += dirSpecular;\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalDiffuse += hemiDiffuse;\n\t\ttotalSpecular += hemiSpecular;\n\t#endif\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalDiffuse += pointDiffuse;\n\t\ttotalSpecular += pointSpecular;\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\ttotalDiffuse += spotDiffuse;\n\t\ttotalSpecular += spotSpecular;\n\t#endif\n\t#ifdef METAL\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\t#else\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\t#endif\n\tif ( enableReflection ) {\n\t\tvec3 vReflect;\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tif ( useRefract ) {\n\t\t\tvReflect = refract( cameraToVertex, normal, refractionRatio );\n\t\t} else {\n\t\t\tvReflect = reflect( cameraToVertex, normal );\n\t\t}\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n\t\t#ifdef GAMMA_INPUT\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\n\t\t#endif\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n\t}",
      THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
    ].join("\n"),
    vertexShader: ["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\n\tuniform sampler2D tDisplacement;\n\tuniform float uDisplacementScale;\n\tuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
      THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "\t#ifdef USE_SKINNING\n\t\tvNormal = normalize( normalMatrix * skinnedNormal.xyz );\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\n\t\tvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n\t#else\n\t\tvNormal = normalize( normalMatrix * normal );\n\t\tvTangent = normalize( normalMatrix * tangent.xyz );\n\t#endif\n\tvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\n\tvUv = uv * uRepeat + uOffset;\n\tvec3 displacedPosition;\n\t#ifdef VERTEX_TEXTURES\n\t\tif ( enableDisplacement ) {\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\n\t\t} else {\n\t\t\t#ifdef USE_SKINNING\n\t\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\t\tdisplacedPosition = skinned.xyz;\n\t\t\t#else\n\t\t\t\tdisplacedPosition = position;\n\t\t\t#endif\n\t\t}\n\t#else\n\t\t#ifdef USE_SKINNING\n\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\tdisplacedPosition = skinned.xyz;\n\t\t#else\n\t\t\tdisplacedPosition = position;\n\t\t#endif\n\t#endif\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",
      THREE.ShaderChunk.logdepthbuf_vertex, "\tvWorldPosition = worldPosition.xyz;\n\tvViewPosition = -mvPosition.xyz;\n\t#ifdef USE_SHADOWMAP\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\t\t}\n\t#endif\n}"
    ].join("\n")
  },
  cube: {
    uniforms: {
      tCube: {
        type: "t",
        value: null
      },
      tFlip: {
        type: "f",
        value: -1
      }
    },
    vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
      THREE.ShaderChunk.logdepthbuf_vertex, "}"
    ].join("\n"),
    fragmentShader: ["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
  },
  depthRGBA: {
    uniforms: {},
    vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex,
      "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"
    ].join("\n"),
    fragmentShader: [THREE.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
      THREE.ShaderChunk.logdepthbuf_fragment, "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"
    ].join("\n")
  }
};
THREE.WebGLRenderer = function (a) {
  function b(a) {
    var b = a.geometry;
    a = a.material;
    var c = b.vertices.length;
    if (a.attributes) {
      void 0 === b.__webglCustomAttributesList && (b.__webglCustomAttributesList = []);
      for (var d in a.attributes) {
        var e = a.attributes[d];
        if (!e.__webglInitialized || e.createUniqueBuffers) {
          e.__webglInitialized = !0;
          var f = 1;
          "v2" === e.type ? f = 2 : "v3" === e.type ? f = 3 : "v4" === e.type ? f = 4 : "c" === e.type && (f = 3);
          e.size = f;
          e.array = new Float32Array(c * f);
          e.buffer = l.createBuffer();
          e.buffer.belongsToAttribute = d;
          e.needsUpdate = !0
        }
        b.__webglCustomAttributesList.push(e)
      }
    }
  }

  function c(a, b) {
    var c = b.geometry,
      e = a.faces3,
      f = 3 * e.length,
      g = 1 * e.length,
      h = 3 * e.length,
      e = d(b, a);
    a.__vertexArray = new Float32Array(3 * f);
    a.__normalArray = new Float32Array(3 * f);
    a.__colorArray = new Float32Array(3 * f);
    a.__uvArray = new Float32Array(2 * f);
    1 < c.faceVertexUvs.length && (a.__uv2Array = new Float32Array(2 * f));
    c.hasTangents && (a.__tangentArray = new Float32Array(4 * f));
    b.geometry.skinWeights.length && b.geometry.skinIndices.length && (a.__skinIndexArray = new Float32Array(4 *
      f), a.__skinWeightArray = new Float32Array(4 * f));
    c = null !== pa.get("OES_element_index_uint") && 21845 < g ? Uint32Array : Uint16Array;
    a.__typeArray = c;
    a.__faceArray = new c(3 * g);
    a.__lineArray = new c(2 * h);
    var k;
    if (a.numMorphTargets)
      for (a.__morphTargetsArrays = [], c = 0, k = a.numMorphTargets; c < k; c++) a.__morphTargetsArrays.push(new Float32Array(3 * f));
    if (a.numMorphNormals)
      for (a.__morphNormalsArrays = [], c = 0, k = a.numMorphNormals; c < k; c++) a.__morphNormalsArrays.push(new Float32Array(3 * f));
    a.__webglFaceCount = 3 * g;
    a.__webglLineCount =
      2 * h;
    if (e.attributes) {
      void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = []);
      for (var m in e.attributes) {
        var g = e.attributes[m],
          h = {},
          n;
        for (n in g) h[n] = g[n];
        if (!h.__webglInitialized || h.createUniqueBuffers) h.__webglInitialized = !0, c = 1, "v2" === h.type ? c = 2 : "v3" === h.type ? c = 3 : "v4" === h.type ? c = 4 : "c" === h.type && (c = 3), h.size = c, h.array = new Float32Array(f * c), h.buffer = l.createBuffer(), h.buffer.belongsToAttribute = m, g.needsUpdate = !0, h.__original = g;
        a.__webglCustomAttributesList.push(h)
      }
    }
    a.__inittedArrays = !0
  }

  function d(a, b) {
    return a.material instanceof THREE.MeshFaceMaterial ? a.material.materials[b.materialIndex] : a.material
  }

  function e(a, b, c, d) {
    c = c.attributes;
    var e = b.attributes;
    b = b.attributesKeys;
    for (var f = 0, k = b.length; f < k; f++) {
      var m = b[f],
        n = e[m];
      if (0 <= n) {
        var p = c[m];
        void 0 !== p ? (m = p.itemSize, l.bindBuffer(l.ARRAY_BUFFER, p.buffer), g(n), l.vertexAttribPointer(n, m, l.FLOAT, !1, 0, d * m * 4)) : void 0 !== a.defaultAttributeValues && (2 === a.defaultAttributeValues[m].length ? l.vertexAttrib2fv(n, a.defaultAttributeValues[m]) :
          3 === a.defaultAttributeValues[m].length && l.vertexAttrib3fv(n, a.defaultAttributeValues[m]))
      }
    }
    h()
  }

  function f() {
    for (var a = 0, b = wb.length; a < b; a++) wb[a] = 0
  }

  function g(a) {
    wb[a] = 1;
    0 === ib[a] && (l.enableVertexAttribArray(a), ib[a] = 1)
  }

  function h() {
    for (var a = 0, b = ib.length; a < b; a++) ib[a] !== wb[a] && (l.disableVertexAttribArray(a), ib[a] = 0)
  }

  function k(a, b) {
    return a.material.id !== b.material.id ? b.material.id - a.material.id : a.z !== b.z ? b.z - a.z : a.id - b.id
  }

  function n(a, b) {
    return a.z !== b.z ? a.z - b.z : a.id - b.id
  }

  function p(a, b) {
    return b[0] -
      a[0]
  }

  function q(a, e) {
    if (!1 !== e.visible) {
      if (!(e instanceof THREE.Scene || e instanceof THREE.Group)) {
        void 0 === e.__webglInit && (e.__webglInit = !0, e._modelViewMatrix = new THREE.Matrix4, e._normalMatrix = new THREE.Matrix3, e.addEventListener("removed", Hc));
        var f = e.geometry;
        if (void 0 !== f && void 0 === f.__webglInit && (f.__webglInit = !0, f.addEventListener("dispose", Ic), !(f instanceof THREE.BufferGeometry)))
          if (e instanceof THREE.Mesh) s(a, e, f);
          else if (e instanceof THREE.Line) {
          if (void 0 === f.__webglVertexBuffer) {
            f.__webglVertexBuffer =
              l.createBuffer();
            f.__webglColorBuffer = l.createBuffer();
            f.__webglLineDistanceBuffer = l.createBuffer();
            J.info.memory.geometries++;
            var g = f.vertices.length;
            f.__vertexArray = new Float32Array(3 * g);
            f.__colorArray = new Float32Array(3 * g);
            f.__lineDistanceArray = new Float32Array(1 * g);
            f.__webglLineCount = g;
            b(e);
            f.verticesNeedUpdate = !0;
            f.colorsNeedUpdate = !0;
            f.lineDistancesNeedUpdate = !0
          }
        } else if (e instanceof THREE.PointCloud && void 0 === f.__webglVertexBuffer) {
          f.__webglVertexBuffer = l.createBuffer();
          f.__webglColorBuffer =
            l.createBuffer();
          J.info.memory.geometries++;
          var h = f.vertices.length;
          f.__vertexArray = new Float32Array(3 * h);
          f.__colorArray = new Float32Array(3 * h);
          f.__sortArray = [];
          f.__webglParticleCount = h;
          b(e);
          f.verticesNeedUpdate = !0;
          f.colorsNeedUpdate = !0
        }
        if (void 0 === e.__webglActive)
          if (e.__webglActive = !0, e instanceof THREE.Mesh)
            if (f instanceof THREE.BufferGeometry) u(ob, f, e);
            else {
              if (f instanceof THREE.Geometry)
                for (var k = xb[f.id], m = 0, n = k.length; m < n; m++) u(ob, k[m], e)
            }
        else e instanceof THREE.Line || e instanceof THREE.PointCloud ?
          u(ob, f, e) : (e instanceof THREE.ImmediateRenderObject || e.immediateRenderCallback) && jb.push({
            id: null,
            object: e,
            opaque: null,
            transparent: null,
            z: 0
          });
        if (e instanceof THREE.Light) cb.push(e);
        else if (e instanceof THREE.Sprite) yb.push(e);
        else if (e instanceof THREE.LensFlare) Ra.push(e);
        else {
          var t = ob[e.id];
          if (t && (!1 === e.frustumCulled || !0 === Ec.intersectsObject(e))) {
            var r = e.geometry,
              w, G;
            if (r instanceof THREE.BufferGeometry)
              for (var x = r.attributes, D = r.attributesKeys, E = 0, B = D.length; E < B; E++) {
                var A = D[E],
                  K = x[A];
                void 0 ===
                  K.buffer && (K.buffer = l.createBuffer(), K.needsUpdate = !0);
                if (!0 === K.needsUpdate) {
                  var F = "index" === A ? l.ELEMENT_ARRAY_BUFFER : l.ARRAY_BUFFER;
                  l.bindBuffer(F, K.buffer);
                  l.bufferData(F, K.array, l.STATIC_DRAW);
                  K.needsUpdate = !1
                }
              } else if (e instanceof THREE.Mesh) {
                !0 === r.groupsNeedUpdate && s(a, e, r);
                for (var H = xb[r.id], O = 0, Q = H.length; O < Q; O++) {
                  var R = H[O];
                  G = d(e, R);
                  !0 === r.groupsNeedUpdate && c(R, e);
                  w = G.attributes && v(G);
                  if (r.verticesNeedUpdate || r.morphTargetsNeedUpdate || r.elementsNeedUpdate || r.uvsNeedUpdate || r.normalsNeedUpdate ||
                    r.colorsNeedUpdate || r.tangentsNeedUpdate || w) {
                    var C = R,
                      P = e,
                      S = l.DYNAMIC_DRAW,
                      T = !r.dynamic,
                      X = G;
                    if (C.__inittedArrays) {
                      var bb = X && void 0 !== X.shading && X.shading === THREE.SmoothShading,
                        M = void 0,
                        ea = void 0,
                        Y = void 0,
                        ca = void 0,
                        ma = void 0,
                        pa = void 0,
                        sa = void 0,
                        Fa = void 0,
                        la = void 0,
                        hb = void 0,
                        za = void 0,
                        aa = void 0,
                        $ = void 0,
                        Z = void 0,
                        ya = void 0,
                        qa = void 0,
                        L = void 0,
                        Ga = void 0,
                        na = void 0,
                        nc = void 0,
                        ia = void 0,
                        oc = void 0,
                        pc = void 0,
                        qc = void 0,
                        Ba = void 0,
                        zb = void 0,
                        Ab = void 0,
                        Ha = void 0,
                        Bb = void 0,
                        Aa = void 0,
                        va = void 0,
                        Cb = void 0,
                        Oa = void 0,
                        Qb =
                        void 0,
                        Ma = void 0,
                        ib = void 0,
                        Ya = void 0,
                        Za = void 0,
                        uc = void 0,
                        Rb = void 0,
                        db = 0,
                        eb = 0,
                        qb = 0,
                        rb = 0,
                        Db = 0,
                        Sa = 0,
                        Ca = 0,
                        Pa = 0,
                        Ka = 0,
                        ja = 0,
                        ta = 0,
                        I = 0,
                        Ia = void 0,
                        Qa = C.__vertexArray,
                        sb = C.__uvArray,
                        fb = C.__uv2Array,
                        Ta = C.__normalArray,
                        ra = C.__tangentArray,
                        La = C.__colorArray,
                        Ua = C.__skinIndexArray,
                        Va = C.__skinWeightArray,
                        Eb = C.__morphTargetsArrays,
                        Jc = C.__morphNormalsArrays,
                        Kb = C.__webglCustomAttributesList,
                        z = void 0,
                        Sb = C.__faceArray,
                        Ja = C.__lineArray,
                        wa = P.geometry,
                        $a = wa.elementsNeedUpdate,
                        Kc = wa.uvsNeedUpdate,
                        ec = wa.normalsNeedUpdate,
                        da =
                        wa.tangentsNeedUpdate,
                        wb = wa.colorsNeedUpdate,
                        U = wa.morphTargetsNeedUpdate,
                        fa = wa.vertices,
                        N = C.faces3,
                        xa = wa.faces,
                        ua = wa.faceVertexUvs[0],
                        Lc = wa.faceVertexUvs[1],
                        Fc = wa.skinIndices,
                        Tb = wa.skinWeights,
                        kb = wa.morphTargets,
                        Da = wa.morphNormals;
                      if (wa.verticesNeedUpdate) {
                        M = 0;
                        for (ea = N.length; M < ea; M++) ca = xa[N[M]], aa = fa[ca.a], $ = fa[ca.b], Z = fa[ca.c], Qa[eb] = aa.x, Qa[eb + 1] = aa.y, Qa[eb + 2] = aa.z, Qa[eb + 3] = $.x, Qa[eb + 4] = $.y, Qa[eb + 5] = $.z, Qa[eb + 6] = Z.x, Qa[eb + 7] = Z.y, Qa[eb + 8] = Z.z, eb += 9;
                        l.bindBuffer(l.ARRAY_BUFFER, C.__webglVertexBuffer);
                        l.bufferData(l.ARRAY_BUFFER, Qa, S)
                      }
                      if (U)
                        for (Ma = 0, ib = kb.length; Ma < ib; Ma++) {
                          M = ta = 0;
                          for (ea = N.length; M < ea; M++) uc = N[M], ca = xa[uc], aa = kb[Ma].vertices[ca.a], $ = kb[Ma].vertices[ca.b], Z = kb[Ma].vertices[ca.c], Ya = Eb[Ma], Ya[ta] = aa.x, Ya[ta + 1] = aa.y, Ya[ta + 2] = aa.z, Ya[ta + 3] = $.x, Ya[ta + 4] = $.y, Ya[ta + 5] = $.z, Ya[ta + 6] = Z.x, Ya[ta + 7] = Z.y, Ya[ta + 8] = Z.z, X.morphNormals && (bb ? (Rb = Da[Ma].vertexNormals[uc], Ga = Rb.a, na = Rb.b, nc = Rb.c) : nc = na = Ga = Da[Ma].faceNormals[uc], Za = Jc[Ma], Za[ta] = Ga.x, Za[ta + 1] = Ga.y, Za[ta + 2] = Ga.z, Za[ta + 3] = na.x, Za[ta + 4] =
                            na.y, Za[ta + 5] = na.z, Za[ta + 6] = nc.x, Za[ta + 7] = nc.y, Za[ta + 8] = nc.z), ta += 9;
                          l.bindBuffer(l.ARRAY_BUFFER, C.__webglMorphTargetsBuffers[Ma]);
                          l.bufferData(l.ARRAY_BUFFER, Eb[Ma], S);
                          X.morphNormals && (l.bindBuffer(l.ARRAY_BUFFER, C.__webglMorphNormalsBuffers[Ma]), l.bufferData(l.ARRAY_BUFFER, Jc[Ma], S))
                        }
                      if (Tb.length) {
                        M = 0;
                        for (ea = N.length; M < ea; M++) ca = xa[N[M]], qc = Tb[ca.a], Ba = Tb[ca.b], zb = Tb[ca.c], Va[ja] = qc.x, Va[ja + 1] = qc.y, Va[ja + 2] = qc.z, Va[ja + 3] = qc.w, Va[ja + 4] = Ba.x, Va[ja + 5] = Ba.y, Va[ja + 6] = Ba.z, Va[ja + 7] = Ba.w, Va[ja + 8] = zb.x,
                          Va[ja + 9] = zb.y, Va[ja + 10] = zb.z, Va[ja + 11] = zb.w, Ab = Fc[ca.a], Ha = Fc[ca.b], Bb = Fc[ca.c], Ua[ja] = Ab.x, Ua[ja + 1] = Ab.y, Ua[ja + 2] = Ab.z, Ua[ja + 3] = Ab.w, Ua[ja + 4] = Ha.x, Ua[ja + 5] = Ha.y, Ua[ja + 6] = Ha.z, Ua[ja + 7] = Ha.w, Ua[ja + 8] = Bb.x, Ua[ja + 9] = Bb.y, Ua[ja + 10] = Bb.z, Ua[ja + 11] = Bb.w, ja += 12;
                        0 < ja && (l.bindBuffer(l.ARRAY_BUFFER, C.__webglSkinIndicesBuffer), l.bufferData(l.ARRAY_BUFFER, Ua, S), l.bindBuffer(l.ARRAY_BUFFER, C.__webglSkinWeightsBuffer), l.bufferData(l.ARRAY_BUFFER, Va, S))
                      }
                      if (wb) {
                        M = 0;
                        for (ea = N.length; M < ea; M++) ca = xa[N[M]], sa = ca.vertexColors,
                          Fa = ca.color, 3 === sa.length && X.vertexColors === THREE.VertexColors ? (ia = sa[0], oc = sa[1], pc = sa[2]) : pc = oc = ia = Fa, La[Ka] = ia.r, La[Ka + 1] = ia.g, La[Ka + 2] = ia.b, La[Ka + 3] = oc.r, La[Ka + 4] = oc.g, La[Ka + 5] = oc.b, La[Ka + 6] = pc.r, La[Ka + 7] = pc.g, La[Ka + 8] = pc.b, Ka += 9;
                        0 < Ka && (l.bindBuffer(l.ARRAY_BUFFER, C.__webglColorBuffer), l.bufferData(l.ARRAY_BUFFER, La, S))
                      }
                      if (da && wa.hasTangents) {
                        M = 0;
                        for (ea = N.length; M < ea; M++) ca = xa[N[M]], la = ca.vertexTangents, ya = la[0], qa = la[1], L = la[2], ra[Ca] = ya.x, ra[Ca + 1] = ya.y, ra[Ca + 2] = ya.z, ra[Ca + 3] = ya.w, ra[Ca + 4] = qa.x,
                          ra[Ca + 5] = qa.y, ra[Ca + 6] = qa.z, ra[Ca + 7] = qa.w, ra[Ca + 8] = L.x, ra[Ca + 9] = L.y, ra[Ca + 10] = L.z, ra[Ca + 11] = L.w, Ca += 12;
                        l.bindBuffer(l.ARRAY_BUFFER, C.__webglTangentBuffer);
                        l.bufferData(l.ARRAY_BUFFER, ra, S)
                      }
                      if (ec) {
                        M = 0;
                        for (ea = N.length; M < ea; M++)
                          if (ca = xa[N[M]], ma = ca.vertexNormals, pa = ca.normal, 3 === ma.length && bb)
                            for (Aa = 0; 3 > Aa; Aa++) Cb = ma[Aa], Ta[Sa] = Cb.x, Ta[Sa + 1] = Cb.y, Ta[Sa + 2] = Cb.z, Sa += 3;
                          else
                            for (Aa = 0; 3 > Aa; Aa++) Ta[Sa] = pa.x, Ta[Sa + 1] = pa.y, Ta[Sa + 2] = pa.z, Sa += 3;
                        l.bindBuffer(l.ARRAY_BUFFER, C.__webglNormalBuffer);
                        l.bufferData(l.ARRAY_BUFFER,
                          Ta, S)
                      }
                      if (Kc && ua) {
                        M = 0;
                        for (ea = N.length; M < ea; M++)
                          if (Y = N[M], hb = ua[Y], void 0 !== hb)
                            for (Aa = 0; 3 > Aa; Aa++) Oa = hb[Aa], sb[qb] = Oa.x, sb[qb + 1] = Oa.y, qb += 2;
                        0 < qb && (l.bindBuffer(l.ARRAY_BUFFER, C.__webglUVBuffer), l.bufferData(l.ARRAY_BUFFER, sb, S))
                      }
                      if (Kc && Lc) {
                        M = 0;
                        for (ea = N.length; M < ea; M++)
                          if (Y = N[M], za = Lc[Y], void 0 !== za)
                            for (Aa = 0; 3 > Aa; Aa++) Qb = za[Aa], fb[rb] = Qb.x, fb[rb + 1] = Qb.y, rb += 2;
                        0 < rb && (l.bindBuffer(l.ARRAY_BUFFER, C.__webglUV2Buffer), l.bufferData(l.ARRAY_BUFFER, fb, S))
                      }
                      if ($a) {
                        M = 0;
                        for (ea = N.length; M < ea; M++) Sb[Db] = db, Sb[Db +
                          1] = db + 1, Sb[Db + 2] = db + 2, Db += 3, Ja[Pa] = db, Ja[Pa + 1] = db + 1, Ja[Pa + 2] = db, Ja[Pa + 3] = db + 2, Ja[Pa + 4] = db + 1, Ja[Pa + 5] = db + 2, Pa += 6, db += 3;
                        l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, C.__webglFaceBuffer);
                        l.bufferData(l.ELEMENT_ARRAY_BUFFER, Sb, S);
                        l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, C.__webglLineBuffer);
                        l.bufferData(l.ELEMENT_ARRAY_BUFFER, Ja, S)
                      }
                      if (Kb)
                        for (Aa = 0, va = Kb.length; Aa < va; Aa++)
                          if (z = Kb[Aa], z.__original.needsUpdate) {
                            I = 0;
                            if (1 === z.size)
                              if (void 0 === z.boundTo || "vertices" === z.boundTo)
                                for (M = 0, ea = N.length; M < ea; M++) ca = xa[N[M]], z.array[I] =
                                  z.value[ca.a], z.array[I + 1] = z.value[ca.b], z.array[I + 2] = z.value[ca.c], I += 3;
                              else {
                                if ("faces" === z.boundTo)
                                  for (M = 0, ea = N.length; M < ea; M++) Ia = z.value[N[M]], z.array[I] = Ia, z.array[I + 1] = Ia, z.array[I + 2] = Ia, I += 3
                              }
                            else if (2 === z.size)
                              if (void 0 === z.boundTo || "vertices" === z.boundTo)
                                for (M = 0, ea = N.length; M < ea; M++) ca = xa[N[M]], aa = z.value[ca.a], $ = z.value[ca.b], Z = z.value[ca.c], z.array[I] = aa.x, z.array[I + 1] = aa.y, z.array[I + 2] = $.x, z.array[I + 3] = $.y, z.array[I + 4] = Z.x, z.array[I + 5] = Z.y, I += 6;
                              else {
                                if ("faces" === z.boundTo)
                                  for (M = 0, ea = N.length; M <
                                    ea; M++) Z = $ = aa = Ia = z.value[N[M]], z.array[I] = aa.x, z.array[I + 1] = aa.y, z.array[I + 2] = $.x, z.array[I + 3] = $.y, z.array[I + 4] = Z.x, z.array[I + 5] = Z.y, I += 6
                              }
                            else if (3 === z.size) {
                              var ka;
                              ka = "c" === z.type ? ["r", "g", "b"] : ["x", "y", "z"];
                              if (void 0 === z.boundTo || "vertices" === z.boundTo)
                                for (M = 0, ea = N.length; M < ea; M++) ca = xa[N[M]], aa = z.value[ca.a], $ = z.value[ca.b], Z = z.value[ca.c], z.array[I] = aa[ka[0]], z.array[I + 1] = aa[ka[1]], z.array[I + 2] = aa[ka[2]], z.array[I + 3] = $[ka[0]], z.array[I + 4] = $[ka[1]], z.array[I + 5] = $[ka[2]], z.array[I + 6] = Z[ka[0]], z.array[I +
                                  7] = Z[ka[1]], z.array[I + 8] = Z[ka[2]], I += 9;
                              else if ("faces" === z.boundTo)
                                for (M = 0, ea = N.length; M < ea; M++) Z = $ = aa = Ia = z.value[N[M]], z.array[I] = aa[ka[0]], z.array[I + 1] = aa[ka[1]], z.array[I + 2] = aa[ka[2]], z.array[I + 3] = $[ka[0]], z.array[I + 4] = $[ka[1]], z.array[I + 5] = $[ka[2]], z.array[I + 6] = Z[ka[0]], z.array[I + 7] = Z[ka[1]], z.array[I + 8] = Z[ka[2]], I += 9;
                              else if ("faceVertices" === z.boundTo)
                                for (M = 0, ea = N.length; M < ea; M++) Ia = z.value[N[M]], aa = Ia[0], $ = Ia[1], Z = Ia[2], z.array[I] = aa[ka[0]], z.array[I + 1] = aa[ka[1]], z.array[I + 2] = aa[ka[2]], z.array[I +
                                  3] = $[ka[0]], z.array[I + 4] = $[ka[1]], z.array[I + 5] = $[ka[2]], z.array[I + 6] = Z[ka[0]], z.array[I + 7] = Z[ka[1]], z.array[I + 8] = Z[ka[2]], I += 9
                            } else if (4 === z.size)
                              if (void 0 === z.boundTo || "vertices" === z.boundTo)
                                for (M = 0, ea = N.length; M < ea; M++) ca = xa[N[M]], aa = z.value[ca.a], $ = z.value[ca.b], Z = z.value[ca.c], z.array[I] = aa.x, z.array[I + 1] = aa.y, z.array[I + 2] = aa.z, z.array[I + 3] = aa.w, z.array[I + 4] = $.x, z.array[I + 5] = $.y, z.array[I + 6] = $.z, z.array[I + 7] = $.w, z.array[I + 8] = Z.x, z.array[I + 9] = Z.y, z.array[I + 10] = Z.z, z.array[I + 11] = Z.w, I += 12;
                              else if ("faces" ===
                              z.boundTo)
                              for (M = 0, ea = N.length; M < ea; M++) Z = $ = aa = Ia = z.value[N[M]], z.array[I] = aa.x, z.array[I + 1] = aa.y, z.array[I + 2] = aa.z, z.array[I + 3] = aa.w, z.array[I + 4] = $.x, z.array[I + 5] = $.y, z.array[I + 6] = $.z, z.array[I + 7] = $.w, z.array[I + 8] = Z.x, z.array[I + 9] = Z.y, z.array[I + 10] = Z.z, z.array[I + 11] = Z.w, I += 12;
                            else if ("faceVertices" === z.boundTo)
                              for (M = 0, ea = N.length; M < ea; M++) Ia = z.value[N[M]], aa = Ia[0], $ = Ia[1], Z = Ia[2], z.array[I] = aa.x, z.array[I + 1] = aa.y, z.array[I + 2] = aa.z, z.array[I + 3] = aa.w, z.array[I + 4] = $.x, z.array[I + 5] = $.y, z.array[I + 6] = $.z,
                                z.array[I + 7] = $.w, z.array[I + 8] = Z.x, z.array[I + 9] = Z.y, z.array[I + 10] = Z.z, z.array[I + 11] = Z.w, I += 12;
                            l.bindBuffer(l.ARRAY_BUFFER, z.buffer);
                            l.bufferData(l.ARRAY_BUFFER, z.array, S)
                          } T && (delete C.__inittedArrays, delete C.__colorArray, delete C.__normalArray, delete C.__tangentArray, delete C.__uvArray, delete C.__uv2Array, delete C.__faceArray, delete C.__vertexArray, delete C.__lineArray, delete C.__skinIndexArray, delete C.__skinWeightArray)
                    }
                  }
                }
                r.verticesNeedUpdate = !1;
                r.morphTargetsNeedUpdate = !1;
                r.elementsNeedUpdate = !1;
                r.uvsNeedUpdate = !1;
                r.normalsNeedUpdate = !1;
                r.colorsNeedUpdate = !1;
                r.tangentsNeedUpdate = !1;
                G.attributes && y(G)
              } else if (e instanceof THREE.Line) {
              G = d(e, r);
              w = G.attributes && v(G);
              if (r.verticesNeedUpdate || r.colorsNeedUpdate || r.lineDistancesNeedUpdate || w) {
                var Zb = l.DYNAMIC_DRAW,
                  ab, Fb, gb, $b, ga, vc, dc = r.vertices,
                  fc = r.colors,
                  Pb = r.lineDistances,
                  kc = dc.length,
                  lc = fc.length,
                  mc = Pb.length,
                  wc = r.__vertexArray,
                  xc = r.__colorArray,
                  jc = r.__lineDistanceArray,
                  sc = r.colorsNeedUpdate,
                  tc = r.lineDistancesNeedUpdate,
                  gc = r.__webglCustomAttributesList,
                  yc, Lb, Ea, hc, Wa, oa;
                if (r.verticesNeedUpdate) {
                  for (ab = 0; ab < kc; ab++) $b = dc[ab], ga = 3 * ab, wc[ga] = $b.x, wc[ga + 1] = $b.y, wc[ga + 2] = $b.z;
                  l.bindBuffer(l.ARRAY_BUFFER, r.__webglVertexBuffer);
                  l.bufferData(l.ARRAY_BUFFER, wc, Zb)
                }
                if (sc) {
                  for (Fb = 0; Fb < lc; Fb++) vc = fc[Fb], ga = 3 * Fb, xc[ga] = vc.r, xc[ga + 1] = vc.g, xc[ga + 2] = vc.b;
                  l.bindBuffer(l.ARRAY_BUFFER, r.__webglColorBuffer);
                  l.bufferData(l.ARRAY_BUFFER, xc, Zb)
                }
                if (tc) {
                  for (gb = 0; gb < mc; gb++) jc[gb] = Pb[gb];
                  l.bindBuffer(l.ARRAY_BUFFER, r.__webglLineDistanceBuffer);
                  l.bufferData(l.ARRAY_BUFFER,
                    jc, Zb)
                }
                if (gc)
                  for (yc = 0, Lb = gc.length; yc < Lb; yc++)
                    if (oa = gc[yc], oa.needsUpdate && (void 0 === oa.boundTo || "vertices" === oa.boundTo)) {
                      ga = 0;
                      hc = oa.value.length;
                      if (1 === oa.size)
                        for (Ea = 0; Ea < hc; Ea++) oa.array[Ea] = oa.value[Ea];
                      else if (2 === oa.size)
                        for (Ea = 0; Ea < hc; Ea++) Wa = oa.value[Ea], oa.array[ga] = Wa.x, oa.array[ga + 1] = Wa.y, ga += 2;
                      else if (3 === oa.size)
                        if ("c" === oa.type)
                          for (Ea = 0; Ea < hc; Ea++) Wa = oa.value[Ea], oa.array[ga] = Wa.r, oa.array[ga + 1] = Wa.g, oa.array[ga + 2] = Wa.b, ga += 3;
                        else
                          for (Ea = 0; Ea < hc; Ea++) Wa = oa.value[Ea], oa.array[ga] = Wa.x,
                            oa.array[ga + 1] = Wa.y, oa.array[ga + 2] = Wa.z, ga += 3;
                      else if (4 === oa.size)
                        for (Ea = 0; Ea < hc; Ea++) Wa = oa.value[Ea], oa.array[ga] = Wa.x, oa.array[ga + 1] = Wa.y, oa.array[ga + 2] = Wa.z, oa.array[ga + 3] = Wa.w, ga += 4;
                      l.bindBuffer(l.ARRAY_BUFFER, oa.buffer);
                      l.bufferData(l.ARRAY_BUFFER, oa.array, Zb)
                    }
              }
              r.verticesNeedUpdate = !1;
              r.colorsNeedUpdate = !1;
              r.lineDistancesNeedUpdate = !1;
              G.attributes && y(G)
            } else if (e instanceof THREE.PointCloud) {
              G = d(e, r);
              w = G.attributes && v(G);
              if (r.verticesNeedUpdate || r.colorsNeedUpdate || e.sortParticles || w) {
                var Mb =
                  l.DYNAMIC_DRAW,
                  Xa, tb, ub, W, vb, Ub, zc = r.vertices,
                  pb = zc.length,
                  Nb = r.colors,
                  Ob = Nb.length,
                  ac = r.__vertexArray,
                  bc = r.__colorArray,
                  Gb = r.__sortArray,
                  Xb = r.verticesNeedUpdate,
                  Yb = r.colorsNeedUpdate,
                  Hb = r.__webglCustomAttributesList,
                  lb, ic, ba, mb, ha, V;
                if (e.sortParticles) {
                  Gc.copy(Ac);
                  Gc.multiply(e.matrixWorld);
                  for (Xa = 0; Xa < pb; Xa++) ub = zc[Xa], Na.copy(ub), Na.applyProjection(Gc), Gb[Xa] = [Na.z, Xa];
                  Gb.sort(p);
                  for (Xa = 0; Xa < pb; Xa++) ub = zc[Gb[Xa][1]], W = 3 * Xa, ac[W] = ub.x, ac[W + 1] = ub.y, ac[W + 2] = ub.z;
                  for (tb = 0; tb < Ob; tb++) W = 3 * tb, Ub = Nb[Gb[tb][1]],
                    bc[W] = Ub.r, bc[W + 1] = Ub.g, bc[W + 2] = Ub.b;
                  if (Hb)
                    for (lb = 0, ic = Hb.length; lb < ic; lb++)
                      if (V = Hb[lb], void 0 === V.boundTo || "vertices" === V.boundTo)
                        if (W = 0, mb = V.value.length, 1 === V.size)
                          for (ba = 0; ba < mb; ba++) vb = Gb[ba][1], V.array[ba] = V.value[vb];
                        else if (2 === V.size)
                    for (ba = 0; ba < mb; ba++) vb = Gb[ba][1], ha = V.value[vb], V.array[W] = ha.x, V.array[W + 1] = ha.y, W += 2;
                  else if (3 === V.size)
                    if ("c" === V.type)
                      for (ba = 0; ba < mb; ba++) vb = Gb[ba][1], ha = V.value[vb], V.array[W] = ha.r, V.array[W + 1] = ha.g, V.array[W + 2] = ha.b, W += 3;
                    else
                      for (ba = 0; ba < mb; ba++) vb = Gb[ba][1],
                        ha = V.value[vb], V.array[W] = ha.x, V.array[W + 1] = ha.y, V.array[W + 2] = ha.z, W += 3;
                  else if (4 === V.size)
                    for (ba = 0; ba < mb; ba++) vb = Gb[ba][1], ha = V.value[vb], V.array[W] = ha.x, V.array[W + 1] = ha.y, V.array[W + 2] = ha.z, V.array[W + 3] = ha.w, W += 4
                } else {
                  if (Xb)
                    for (Xa = 0; Xa < pb; Xa++) ub = zc[Xa], W = 3 * Xa, ac[W] = ub.x, ac[W + 1] = ub.y, ac[W + 2] = ub.z;
                  if (Yb)
                    for (tb = 0; tb < Ob; tb++) Ub = Nb[tb], W = 3 * tb, bc[W] = Ub.r, bc[W + 1] = Ub.g, bc[W + 2] = Ub.b;
                  if (Hb)
                    for (lb = 0, ic = Hb.length; lb < ic; lb++)
                      if (V = Hb[lb], V.needsUpdate && (void 0 === V.boundTo || "vertices" === V.boundTo))
                        if (mb = V.value.length,
                          W = 0, 1 === V.size)
                          for (ba = 0; ba < mb; ba++) V.array[ba] = V.value[ba];
                        else if (2 === V.size)
                    for (ba = 0; ba < mb; ba++) ha = V.value[ba], V.array[W] = ha.x, V.array[W + 1] = ha.y, W += 2;
                  else if (3 === V.size)
                    if ("c" === V.type)
                      for (ba = 0; ba < mb; ba++) ha = V.value[ba], V.array[W] = ha.r, V.array[W + 1] = ha.g, V.array[W + 2] = ha.b, W += 3;
                    else
                      for (ba = 0; ba < mb; ba++) ha = V.value[ba], V.array[W] = ha.x, V.array[W + 1] = ha.y, V.array[W + 2] = ha.z, W += 3;
                  else if (4 === V.size)
                    for (ba = 0; ba < mb; ba++) ha = V.value[ba], V.array[W] = ha.x, V.array[W + 1] = ha.y, V.array[W + 2] = ha.z, V.array[W + 3] = ha.w, W +=
                      4
                }
                if (Xb || e.sortParticles) l.bindBuffer(l.ARRAY_BUFFER, r.__webglVertexBuffer), l.bufferData(l.ARRAY_BUFFER, ac, Mb);
                if (Yb || e.sortParticles) l.bindBuffer(l.ARRAY_BUFFER, r.__webglColorBuffer), l.bufferData(l.ARRAY_BUFFER, bc, Mb);
                if (Hb)
                  for (lb = 0, ic = Hb.length; lb < ic; lb++)
                    if (V = Hb[lb], V.needsUpdate || e.sortParticles) l.bindBuffer(l.ARRAY_BUFFER, V.buffer), l.bufferData(l.ARRAY_BUFFER, V.array, Mb)
              }
              r.verticesNeedUpdate = !1;
              r.colorsNeedUpdate = !1;
              G.attributes && y(G)
            }
            for (var cc = 0, nb = t.length; cc < nb; cc++) {
              var Bc = t[cc],
                Vb = Bc,
                rc =
                Vb.object,
                Cc = Vb.buffer,
                Dc = rc.geometry,
                Wb = rc.material;
              Wb instanceof THREE.MeshFaceMaterial ? (Wb = Wb.materials[Dc instanceof THREE.BufferGeometry ? 0 : Cc.materialIndex], Vb.material = Wb, Wb.transparent ? Ib.push(Vb) : Jb.push(Vb)) : Wb && (Vb.material = Wb, Wb.transparent ? Ib.push(Vb) : Jb.push(Vb));
              Bc.render = !0;
              !0 === J.sortObjects && (null !== e.renderDepth ? Bc.z = e.renderDepth : (Na.setFromMatrixPosition(e.matrixWorld), Na.applyProjection(Ac), Bc.z = Na.z))
            }
          }
        }
      }
      cc = 0;
      for (nb = e.children.length; cc < nb; cc++) q(a, e.children[cc])
    }
  }

  function m(a,
    b, c, d, e, f) {
    for (var g, h = a.length - 1; - 1 !== h; h--) {
      g = a[h];
      var k = g.object,
        l = g.buffer;
      x(k, b);
      if (f) g = f;
      else {
        g = g.material;
        if (!g) continue;
        e && J.setBlending(g.blending, g.blendEquation, g.blendSrc, g.blendDst);
        J.setDepthTest(g.depthTest);
        J.setDepthWrite(g.depthWrite);
        B(g.polygonOffset, g.polygonOffsetFactor, g.polygonOffsetUnits)
      }
      J.setMaterialFaces(g);
      l instanceof THREE.BufferGeometry ? J.renderBufferDirect(b, c, d, g, l, k) : J.renderBuffer(b, c, d, g, l, k)
    }
  }

  function r(a, b, c, d, e, f, g) {
    for (var h, k = 0, l = a.length; k < l; k++) {
      h = a[k];
      var m = h.object;
      if (m.visible) {
        if (g) h = g;
        else {
          h = h[b];
          if (!h) continue;
          f && J.setBlending(h.blending, h.blendEquation, h.blendSrc, h.blendDst);
          J.setDepthTest(h.depthTest);
          J.setDepthWrite(h.depthWrite);
          B(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits)
        }
        J.renderImmediateObject(c, d, e, h, m)
      }
    }
  }

  function t(a) {
    var b = a.object.material;
    b.transparent ? (a.transparent = b, a.opaque = null) : (a.opaque = b, a.transparent = null)
  }

  function s(a, b, d) {
    var e = b.material,
      f = !1;
    if (void 0 === xb[d.id] || !0 === d.groupsNeedUpdate) {
      delete ob[b.id];
      a = xb;
      for (var g = d.id, e = e instanceof THREE.MeshFaceMaterial, h = pa.get("OES_element_index_uint") ? 4294967296 : 65535, k, f = {}, m = d.morphTargets.length, n = d.morphNormals.length, p, r = {}, q = [], t = 0, s = d.faces.length; t < s; t++) {
        k = d.faces[t];
        var v = e ? k.materialIndex : 0;
        v in f || (f[v] = {
          hash: v,
          counter: 0
        });
        k = f[v].hash + "_" + f[v].counter;
        k in r || (p = {
          id: rc++,
          faces3: [],
          materialIndex: v,
          vertices: 0,
          numMorphTargets: m,
          numMorphNormals: n
        }, r[k] = p, q.push(p));
        r[k].vertices + 3 > h && (f[v].counter += 1, k = f[v].hash + "_" + f[v].counter, k in r || (p = {
          id: rc++,
          faces3: [],
          materialIndex: v,
          vertices: 0,
          numMorphTargets: m,
          numMorphNormals: n
        }, r[k] = p, q.push(p)));
        r[k].faces3.push(t);
        r[k].vertices += 3
      }
      a[g] = q;
      d.groupsNeedUpdate = !1
    }
    a = xb[d.id];
    g = 0;
    for (e = a.length; g < e; g++) {
      h = a[g];
      if (void 0 === h.__webglVertexBuffer) {
        f = h;
        f.__webglVertexBuffer = l.createBuffer();
        f.__webglNormalBuffer = l.createBuffer();
        f.__webglTangentBuffer = l.createBuffer();
        f.__webglColorBuffer = l.createBuffer();
        f.__webglUVBuffer = l.createBuffer();
        f.__webglUV2Buffer = l.createBuffer();
        f.__webglSkinIndicesBuffer = l.createBuffer();
        f.__webglSkinWeightsBuffer = l.createBuffer();
        f.__webglFaceBuffer = l.createBuffer();
        f.__webglLineBuffer = l.createBuffer();
        n = m = void 0;
        if (f.numMorphTargets)
          for (f.__webglMorphTargetsBuffers = [], m = 0, n = f.numMorphTargets; m < n; m++) f.__webglMorphTargetsBuffers.push(l.createBuffer());
        if (f.numMorphNormals)
          for (f.__webglMorphNormalsBuffers = [], m = 0, n = f.numMorphNormals; m < n; m++) f.__webglMorphNormalsBuffers.push(l.createBuffer());
        J.info.memory.geometries++;
        c(h, b);
        d.verticesNeedUpdate = !0;
        d.morphTargetsNeedUpdate = !0;
        d.elementsNeedUpdate = !0;
        d.uvsNeedUpdate = !0;
        d.normalsNeedUpdate = !0;
        d.tangentsNeedUpdate = !0;
        f = d.colorsNeedUpdate = !0
      } else f = !1;
      (f || void 0 === b.__webglActive) && u(ob, h, b)
    }
    b.__webglActive = !0
  }

  function u(a, b, c) {
    var d = c.id;
    a[d] = a[d] || [];
    a[d].push({
      id: d,
      buffer: b,
      object: c,
      material: null,
      z: 0
    })
  }

  function v(a) {
    for (var b in a.attributes)
      if (a.attributes[b].needsUpdate) return !0;
    return !1
  }

  function y(a) {
    for (var b in a.attributes) a.attributes[b].needsUpdate = !1
  }

  function G(a, b, c, d, e) {
    var f, g, h, k;
    dc = 0;
    if (d.needsUpdate) {
      d.program && Cc(d);
      d.addEventListener("dispose",
        Dc);
      var m;
      d instanceof THREE.MeshDepthMaterial ? m = "depth" : d instanceof THREE.MeshNormalMaterial ? m = "normal" : d instanceof THREE.MeshBasicMaterial ? m = "basic" : d instanceof THREE.MeshLambertMaterial ? m = "lambert" : d instanceof THREE.MeshPhongMaterial ? m = "phong" : d instanceof THREE.LineBasicMaterial ? m = "basic" : d instanceof THREE.LineDashedMaterial ? m = "dashed" : d instanceof THREE.PointCloudMaterial && (m = "particle_basic");
      if (m) {
        var n = THREE.ShaderLib[m];
        d.__webglShader = {
          uniforms: THREE.UniformsUtils.clone(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader
        }
      } else d.__webglShader = {
        uniforms: d.uniforms,
        vertexShader: d.vertexShader,
        fragmentShader: d.fragmentShader
      };
      for (var p = 0, r = 0, q = 0, t = 0, s = 0, u = b.length; s < u; s++) {
        var v = b[s];
        v.onlyShadow || !1 === v.visible || (v instanceof THREE.DirectionalLight && p++, v instanceof THREE.PointLight && r++, v instanceof THREE.SpotLight && q++, v instanceof THREE.HemisphereLight && t++)
      }
      f = p;
      g = r;
      h = q;
      k = t;
      for (var y, G = 0, x = 0, B = b.length; x < B; x++) {
        var A = b[x];
        A.castShadow && (A instanceof THREE.SpotLight &&
          G++, A instanceof THREE.DirectionalLight && !A.shadowCascade && G++)
      }
      y = G;
      var C;
      if (jc && e && e.skeleton && e.skeleton.useVertexTexture) C = 1024;
      else {
        var H = l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),
          S = Math.floor((H - 20) / 4);
        void 0 !== e && e instanceof THREE.SkinnedMesh && (S = Math.min(e.skeleton.bones.length, S), S < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + S + " (try OpenGL instead of ANGLE)"));
        C = S
      }
      var P = {
          precision: X,
          supportsVertexTextures: sc,
          map: !!d.map,
          envMap: !!d.envMap,
          lightMap: !!d.lightMap,
          bumpMap: !!d.bumpMap,
          normalMap: !!d.normalMap,
          specularMap: !!d.specularMap,
          alphaMap: !!d.alphaMap,
          vertexColors: d.vertexColors,
          fog: c,
          useFog: d.fog,
          fogExp: c instanceof THREE.FogExp2,
          sizeAttenuation: d.sizeAttenuation,
          logarithmicDepthBuffer: Fa,
          skinning: d.skinning,
          maxBones: C,
          useVertexTexture: jc && e && e.skeleton && e.skeleton.useVertexTexture,
          morphTargets: d.morphTargets,
          morphNormals: d.morphNormals,
          maxMorphTargets: J.maxMorphTargets,
          maxMorphNormals: J.maxMorphNormals,
          maxDirLights: f,
          maxPointLights: g,
          maxSpotLights: h,
          maxHemiLights: k,
          maxShadows: y,
          shadowMapEnabled: J.shadowMapEnabled && e.receiveShadow && 0 < y,
          shadowMapType: J.shadowMapType,
          shadowMapDebug: J.shadowMapDebug,
          shadowMapCascade: J.shadowMapCascade,
          alphaTest: d.alphaTest,
          metal: d.metal,
          wrapAround: d.wrapAround,
          doubleSided: d.side === THREE.DoubleSide,
          flipSided: d.side === THREE.BackSide
        },
        T = [];
      m ? T.push(m) : (T.push(d.fragmentShader), T.push(d.vertexShader));
      if (void 0 !== d.defines)
        for (var bb in d.defines) T.push(bb), T.push(d.defines[bb]);
      for (bb in P) T.push(bb), T.push(P[bb]);
      for (var M = T.join(), Y, jb = 0, ca = hb.length; jb < ca; jb++) {
        var cb = hb[jb];
        if (cb.code === M) {
          Y = cb;
          Y.usedTimes++;
          break
        }
      }
      void 0 === Y && (Y = new THREE.WebGLProgram(J, M, d, P), hb.push(Y), J.info.memory.programs = hb.length);
      d.program = Y;
      var ob = Y.attributes;
      if (d.morphTargets) {
        d.numSupportedMorphTargets = 0;
        for (var ma, pa = "morphTarget", la = 0; la < J.maxMorphTargets; la++) ma = pa + la, 0 <= ob[ma] && d.numSupportedMorphTargets++
      }
      if (d.morphNormals)
        for (d.numSupportedMorphNormals = 0, pa = "morphNormal", la = 0; la < J.maxMorphNormals; la++) ma =
          pa + la, 0 <= ob[ma] && d.numSupportedMorphNormals++;
      d.uniformsList = [];
      for (var Jb in d.__webglShader.uniforms) {
        var za = d.program.uniforms[Jb];
        za && d.uniformsList.push([d.__webglShader.uniforms[Jb], za])
      }
      d.needsUpdate = !1
    }
    d.morphTargets && !e.__webglMorphTargetInfluences && (e.__webglMorphTargetInfluences = new Float32Array(J.maxMorphTargets));
    var aa = !1,
      $ = !1,
      Z = !1,
      yb = d.program,
      qa = yb.uniforms,
      L = d.__webglShader.uniforms;
    yb.id !== tc && (l.useProgram(yb.program), tc = yb.id, Z = $ = aa = !0);
    d.id !== Kb && (-1 === Kb && (Z = !0), Kb = d.id, $ = !0);
    if (aa || a !== ec) l.uniformMatrix4fv(qa.projectionMatrix, !1, a.projectionMatrix.elements), Fa && l.uniform1f(qa.logDepthBufFC, 2 / (Math.log(a.far + 1) / Math.LN2)), a !== ec && (ec = a), (d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && null !== qa.cameraPosition && (Na.setFromMatrixPosition(a.matrixWorld), l.uniform3f(qa.cameraPosition, Na.x, Na.y, Na.z)), (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.ShaderMaterial || d.skinning) && null !== qa.viewMatrix &&
      l.uniformMatrix4fv(qa.viewMatrix, !1, a.matrixWorldInverse.elements);
    if (d.skinning)
      if (e.bindMatrix && null !== qa.bindMatrix && l.uniformMatrix4fv(qa.bindMatrix, !1, e.bindMatrix.elements), e.bindMatrixInverse && null !== qa.bindMatrixInverse && l.uniformMatrix4fv(qa.bindMatrixInverse, !1, e.bindMatrixInverse.elements), jc && e.skeleton && e.skeleton.useVertexTexture) {
        if (null !== qa.boneTexture) {
          var Ib = K();
          l.uniform1i(qa.boneTexture, Ib);
          J.setTexture(e.skeleton.boneTexture, Ib)
        }
        null !== qa.boneTextureWidth && l.uniform1i(qa.boneTextureWidth,
          e.skeleton.boneTextureWidth);
        null !== qa.boneTextureHeight && l.uniform1i(qa.boneTextureHeight, e.skeleton.boneTextureHeight)
      } else e.skeleton && e.skeleton.boneMatrices && null !== qa.boneGlobalMatrices && l.uniformMatrix4fv(qa.boneGlobalMatrices, !1, e.skeleton.boneMatrices);
    if ($) {
      c && d.fog && (L.fogColor.value = c.color, c instanceof THREE.Fog ? (L.fogNear.value = c.near, L.fogFar.value = c.far) : c instanceof THREE.FogExp2 && (L.fogDensity.value = c.density));
      if (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial ||
        d.lights) {
        if (fc) {
          var Z = !0,
            na, Ra, ia, ya = 0,
            Ga = 0,
            Oa = 0,
            Ba, zb, Ab, Ha, Bb, Aa, va = Mc,
            Cb = va.directional.colors,
            ib = va.directional.positions,
            Qb = va.point.colors,
            Ma = va.point.positions,
            xb = va.point.distances,
            Ya = va.spot.colors,
            Za = va.spot.positions,
            Mb = va.spot.distances,
            Rb = va.spot.directions,
            db = va.spot.anglesCos,
            eb = va.spot.exponents,
            qb = va.hemi.skyColors,
            rb = va.hemi.groundColors,
            Db = va.hemi.positions,
            Sa = 0,
            Ca = 0,
            Pa = 0,
            Ka = 0,
            ja = 0,
            ta = 0,
            I = 0,
            Ia = 0,
            Qa = 0,
            sb = 0,
            fb = 0,
            Ta = 0;
          na = 0;
          for (Ra = b.length; na < Ra; na++) ia = b[na], ia.onlyShadow || (Ba = ia.color,
            Ha = ia.intensity, Aa = ia.distance, ia instanceof THREE.AmbientLight ? ia.visible && (J.gammaInput ? (ya += Ba.r * Ba.r, Ga += Ba.g * Ba.g, Oa += Ba.b * Ba.b) : (ya += Ba.r, Ga += Ba.g, Oa += Ba.b)) : ia instanceof THREE.DirectionalLight ? (ja += 1, ia.visible && (sa.setFromMatrixPosition(ia.matrixWorld), Na.setFromMatrixPosition(ia.target.matrixWorld), sa.sub(Na), sa.normalize(), Qa = 3 * Sa, ib[Qa] = sa.x, ib[Qa + 1] = sa.y, ib[Qa + 2] = sa.z, J.gammaInput ? D(Cb, Qa, Ba, Ha * Ha) : E(Cb, Qa, Ba, Ha), Sa += 1)) : ia instanceof THREE.PointLight ? (ta += 1, ia.visible && (sb = 3 * Ca, J.gammaInput ?
              D(Qb, sb, Ba, Ha * Ha) : E(Qb, sb, Ba, Ha), Na.setFromMatrixPosition(ia.matrixWorld), Ma[sb] = Na.x, Ma[sb + 1] = Na.y, Ma[sb + 2] = Na.z, xb[Ca] = Aa, Ca += 1)) : ia instanceof THREE.SpotLight ? (I += 1, ia.visible && (fb = 3 * Pa, J.gammaInput ? D(Ya, fb, Ba, Ha * Ha) : E(Ya, fb, Ba, Ha), sa.setFromMatrixPosition(ia.matrixWorld), Za[fb] = sa.x, Za[fb + 1] = sa.y, Za[fb + 2] = sa.z, Mb[Pa] = Aa, Na.setFromMatrixPosition(ia.target.matrixWorld), sa.sub(Na), sa.normalize(), Rb[fb] = sa.x, Rb[fb + 1] = sa.y, Rb[fb + 2] = sa.z, db[Pa] = Math.cos(ia.angle), eb[Pa] = ia.exponent, Pa += 1)) : ia instanceof THREE.HemisphereLight && (Ia += 1, ia.visible && (sa.setFromMatrixPosition(ia.matrixWorld), sa.normalize(), Ta = 3 * Ka, Db[Ta] = sa.x, Db[Ta + 1] = sa.y, Db[Ta + 2] = sa.z, zb = ia.color, Ab = ia.groundColor, J.gammaInput ? (Bb = Ha * Ha, D(qb, Ta, zb, Bb), D(rb, Ta, Ab, Bb)) : (E(qb, Ta, zb, Ha), E(rb, Ta, Ab, Ha)), Ka += 1)));
          na = 3 * Sa;
          for (Ra = Math.max(Cb.length, 3 * ja); na < Ra; na++) Cb[na] = 0;
          na = 3 * Ca;
          for (Ra = Math.max(Qb.length, 3 * ta); na < Ra; na++) Qb[na] = 0;
          na = 3 * Pa;
          for (Ra = Math.max(Ya.length, 3 * I); na < Ra; na++) Ya[na] = 0;
          na = 3 * Ka;
          for (Ra = Math.max(qb.length, 3 * Ia); na < Ra; na++) qb[na] =
            0;
          na = 3 * Ka;
          for (Ra = Math.max(rb.length, 3 * Ia); na < Ra; na++) rb[na] = 0;
          va.directional.length = Sa;
          va.point.length = Ca;
          va.spot.length = Pa;
          va.hemi.length = Ka;
          va.ambient[0] = ya;
          va.ambient[1] = Ga;
          va.ambient[2] = Oa;
          fc = !1
        }
        if (Z) {
          var ra = Mc;
          L.ambientLightColor.value = ra.ambient;
          L.directionalLightColor.value = ra.directional.colors;
          L.directionalLightDirection.value = ra.directional.positions;
          L.pointLightColor.value = ra.point.colors;
          L.pointLightPosition.value = ra.point.positions;
          L.pointLightDistance.value = ra.point.distances;
          L.spotLightColor.value =
            ra.spot.colors;
          L.spotLightPosition.value = ra.spot.positions;
          L.spotLightDistance.value = ra.spot.distances;
          L.spotLightDirection.value = ra.spot.directions;
          L.spotLightAngleCos.value = ra.spot.anglesCos;
          L.spotLightExponent.value = ra.spot.exponents;
          L.hemisphereLightSkyColor.value = ra.hemi.skyColors;
          L.hemisphereLightGroundColor.value = ra.hemi.groundColors;
          L.hemisphereLightDirection.value = ra.hemi.positions;
          w(L, !0)
        } else w(L, !1)
      }
      if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) {
        L.opacity.value = d.opacity;
        J.gammaInput ? L.diffuse.value.copyGammaToLinear(d.color) : L.diffuse.value = d.color;
        L.map.value = d.map;
        L.lightMap.value = d.lightMap;
        L.specularMap.value = d.specularMap;
        L.alphaMap.value = d.alphaMap;
        d.bumpMap && (L.bumpMap.value = d.bumpMap, L.bumpScale.value = d.bumpScale);
        d.normalMap && (L.normalMap.value = d.normalMap, L.normalScale.value.copy(d.normalScale));
        var La;
        d.map ? La = d.map : d.specularMap ? La = d.specularMap : d.normalMap ? La = d.normalMap : d.bumpMap ? La = d.bumpMap : d.alphaMap &&
          (La = d.alphaMap);
        if (void 0 !== La) {
          var Ua = La.offset,
            Va = La.repeat;
          L.offsetRepeat.value.set(Ua.x, Ua.y, Va.x, Va.y)
        }
        L.envMap.value = d.envMap;
        L.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
        L.reflectivity.value = d.reflectivity;
        L.refractionRatio.value = d.refractionRatio;
        L.combine.value = d.combine;
        L.useRefract.value = d.envMap && d.envMap.mapping instanceof THREE.CubeRefractionMapping
      }
      d instanceof THREE.LineBasicMaterial ? (L.diffuse.value = d.color, L.opacity.value = d.opacity) : d instanceof THREE.LineDashedMaterial ?
        (L.diffuse.value = d.color, L.opacity.value = d.opacity, L.dashSize.value = d.dashSize, L.totalSize.value = d.dashSize + d.gapSize, L.scale.value = d.scale) : d instanceof THREE.PointCloudMaterial ? (L.psColor.value = d.color, L.opacity.value = d.opacity, L.size.value = d.size, L.scale.value = O.height / 2, L.map.value = d.map) : d instanceof THREE.MeshPhongMaterial ? (L.shininess.value = d.shininess, J.gammaInput ? (L.ambient.value.copyGammaToLinear(d.ambient), L.emissive.value.copyGammaToLinear(d.emissive), L.specular.value.copyGammaToLinear(d.specular)) :
          (L.ambient.value = d.ambient, L.emissive.value = d.emissive, L.specular.value = d.specular), d.wrapAround && L.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshLambertMaterial ? (J.gammaInput ? (L.ambient.value.copyGammaToLinear(d.ambient), L.emissive.value.copyGammaToLinear(d.emissive)) : (L.ambient.value = d.ambient, L.emissive.value = d.emissive), d.wrapAround && L.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshDepthMaterial ? (L.mNear.value = a.near, L.mFar.value = a.far, L.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial &&
        (L.opacity.value = d.opacity);
      if (e.receiveShadow && !d._shadowPass && L.shadowMatrix)
        for (var Eb = 0, pb = 0, Nb = b.length; pb < Nb; pb++) {
          var z = b[pb];
          z.castShadow && (z instanceof THREE.SpotLight || z instanceof THREE.DirectionalLight && !z.shadowCascade) && (L.shadowMap.value[Eb] = z.shadowMap, L.shadowMapSize.value[Eb] = z.shadowMapSize, L.shadowMatrix.value[Eb] = z.shadowMatrix, L.shadowDarkness.value[Eb] = z.shadowDarkness, L.shadowBias.value[Eb] = z.shadowBias, Eb++)
        }
      for (var Sb = d.uniformsList, Ja, wa, $a, nb = 0, Pb = Sb.length; nb < Pb; nb++) {
        var da =
          Sb[nb][0];
        if (!1 !== da.needsUpdate) {
          var wb = da.type,
            U = da.value,
            fa = Sb[nb][1];
          switch (wb) {
            case "1i":
              l.uniform1i(fa, U);
              break;
            case "1f":
              l.uniform1f(fa, U);
              break;
            case "2f":
              l.uniform2f(fa, U[0], U[1]);
              break;
            case "3f":
              l.uniform3f(fa, U[0], U[1], U[2]);
              break;
            case "4f":
              l.uniform4f(fa, U[0], U[1], U[2], U[3]);
              break;
            case "1iv":
              l.uniform1iv(fa, U);
              break;
            case "3iv":
              l.uniform3iv(fa, U);
              break;
            case "1fv":
              l.uniform1fv(fa, U);
              break;
            case "2fv":
              l.uniform2fv(fa, U);
              break;
            case "3fv":
              l.uniform3fv(fa, U);
              break;
            case "4fv":
              l.uniform4fv(fa, U);
              break;
            case "Matrix3fv":
              l.uniformMatrix3fv(fa, !1, U);
              break;
            case "Matrix4fv":
              l.uniformMatrix4fv(fa, !1, U);
              break;
            case "i":
              l.uniform1i(fa, U);
              break;
            case "f":
              l.uniform1f(fa, U);
              break;
            case "v2":
              l.uniform2f(fa, U.x, U.y);
              break;
            case "v3":
              l.uniform3f(fa, U.x, U.y, U.z);
              break;
            case "v4":
              l.uniform4f(fa, U.x, U.y, U.z, U.w);
              break;
            case "c":
              l.uniform3f(fa, U.r, U.g, U.b);
              break;
            case "iv1":
              l.uniform1iv(fa, U);
              break;
            case "iv":
              l.uniform3iv(fa, U);
              break;
            case "fv1":
              l.uniform1fv(fa, U);
              break;
            case "fv":
              l.uniform3fv(fa, U);
              break;
            case "v2v":
              void 0 ===
                da._array && (da._array = new Float32Array(2 * U.length));
              for (var N = 0, xa = U.length; N < xa; N++) $a = 2 * N, da._array[$a] = U[N].x, da._array[$a + 1] = U[N].y;
              l.uniform2fv(fa, da._array);
              break;
            case "v3v":
              void 0 === da._array && (da._array = new Float32Array(3 * U.length));
              N = 0;
              for (xa = U.length; N < xa; N++) $a = 3 * N, da._array[$a] = U[N].x, da._array[$a + 1] = U[N].y, da._array[$a + 2] = U[N].z;
              l.uniform3fv(fa, da._array);
              break;
            case "v4v":
              void 0 === da._array && (da._array = new Float32Array(4 * U.length));
              N = 0;
              for (xa = U.length; N < xa; N++) $a = 4 * N, da._array[$a] = U[N].x,
                da._array[$a + 1] = U[N].y, da._array[$a + 2] = U[N].z, da._array[$a + 3] = U[N].w;
              l.uniform4fv(fa, da._array);
              break;
            case "m3":
              l.uniformMatrix3fv(fa, !1, U.elements);
              break;
            case "m3v":
              void 0 === da._array && (da._array = new Float32Array(9 * U.length));
              N = 0;
              for (xa = U.length; N < xa; N++) U[N].flattenToArrayOffset(da._array, 9 * N);
              l.uniformMatrix3fv(fa, !1, da._array);
              break;
            case "m4":
              l.uniformMatrix4fv(fa, !1, U.elements);
              break;
            case "m4v":
              void 0 === da._array && (da._array = new Float32Array(16 * U.length));
              N = 0;
              for (xa = U.length; N < xa; N++) U[N].flattenToArrayOffset(da._array,
                16 * N);
              l.uniformMatrix4fv(fa, !1, da._array);
              break;
            case "t":
              Ja = U;
              wa = K();
              l.uniform1i(fa, wa);
              if (!Ja) continue;
              if (Ja instanceof THREE.CubeTexture || Ja.image instanceof Array && 6 === Ja.image.length) {
                var ua = Ja,
                  Lb = wa;
                if (6 === ua.image.length)
                  if (ua.needsUpdate) {
                    ua.image.__webglTextureCube || (ua.addEventListener("dispose", gc), ua.image.__webglTextureCube = l.createTexture(), J.info.memory.textures++);
                    l.activeTexture(l.TEXTURE0 + Lb);
                    l.bindTexture(l.TEXTURE_CUBE_MAP, ua.image.__webglTextureCube);
                    l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,
                      ua.flipY);
                    for (var Ob = ua instanceof THREE.CompressedTexture, Tb = ua.image[0] instanceof THREE.DataTexture, kb = [], Da = 0; 6 > Da; Da++) kb[Da] = !J.autoScaleCubemaps || Ob || Tb ? Tb ? ua.image[Da].image : ua.image[Da] : R(ua.image[Da], $c);
                    var ka = kb[0],
                      Zb = THREE.Math.isPowerOfTwo(ka.width) && THREE.Math.isPowerOfTwo(ka.height),
                      ab = Q(ua.format),
                      Fb = Q(ua.type);
                    F(l.TEXTURE_CUBE_MAP, ua, Zb);
                    for (Da = 0; 6 > Da; Da++)
                      if (Ob)
                        for (var gb, $b = kb[Da].mipmaps, ga = 0, Xb = $b.length; ga < Xb; ga++) gb = $b[ga], ua.format !== THREE.RGBAFormat && ua.format !== THREE.RGBFormat ?
                          -1 < Nc().indexOf(ab) ? l.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + Da, ga, ab, gb.width, gb.height, 0, gb.data) : console.warn("Attempt to load unsupported compressed texture format") : l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + Da, ga, ab, gb.width, gb.height, 0, ab, Fb, gb.data);
                      else Tb ? l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + Da, 0, ab, kb[Da].width, kb[Da].height, 0, ab, Fb, kb[Da].data) : l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + Da, 0, ab, ab, Fb, kb[Da]);
                    ua.generateMipmaps && Zb && l.generateMipmap(l.TEXTURE_CUBE_MAP);
                    ua.needsUpdate = !1;
                    if (ua.onUpdate) ua.onUpdate()
                  } else l.activeTexture(l.TEXTURE0 + Lb), l.bindTexture(l.TEXTURE_CUBE_MAP, ua.image.__webglTextureCube)
              } else if (Ja instanceof THREE.WebGLRenderTargetCube) {
                var Yb = Ja;
                l.activeTexture(l.TEXTURE0 + wa);
                l.bindTexture(l.TEXTURE_CUBE_MAP, Yb.__webglTexture)
              } else J.setTexture(Ja, wa);
              break;
            case "tv":
              void 0 === da._array && (da._array = []);
              N = 0;
              for (xa = da.value.length; N < xa; N++) da._array[N] = K();
              l.uniform1iv(fa, da._array);
              N = 0;
              for (xa = da.value.length; N < xa; N++) Ja = da.value[N], wa = da._array[N],
                Ja && J.setTexture(Ja, wa);
              break;
            default:
              console.warn("THREE.WebGLRenderer: Unknown uniform type: " + wb)
          }
        }
      }
    }
    l.uniformMatrix4fv(qa.modelViewMatrix, !1, e._modelViewMatrix.elements);
    qa.normalMatrix && l.uniformMatrix3fv(qa.normalMatrix, !1, e._normalMatrix.elements);
    null !== qa.modelMatrix && l.uniformMatrix4fv(qa.modelMatrix, !1, e.matrixWorld.elements);
    return yb
  }

  function w(a, b) {
    a.ambientLightColor.needsUpdate = b;
    a.directionalLightColor.needsUpdate = b;
    a.directionalLightDirection.needsUpdate = b;
    a.pointLightColor.needsUpdate =
      b;
    a.pointLightPosition.needsUpdate = b;
    a.pointLightDistance.needsUpdate = b;
    a.spotLightColor.needsUpdate = b;
    a.spotLightPosition.needsUpdate = b;
    a.spotLightDistance.needsUpdate = b;
    a.spotLightDirection.needsUpdate = b;
    a.spotLightAngleCos.needsUpdate = b;
    a.spotLightExponent.needsUpdate = b;
    a.hemisphereLightSkyColor.needsUpdate = b;
    a.hemisphereLightGroundColor.needsUpdate = b;
    a.hemisphereLightDirection.needsUpdate = b
  }

  function K() {
    var a = dc;
    a >= Oc && console.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " +
      Oc);
    dc += 1;
    return a
  }

  function x(a, b) {
    a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, a.matrixWorld);
    a._normalMatrix.getNormalMatrix(a._modelViewMatrix)
  }

  function D(a, b, c, d) {
    a[b] = c.r * c.r * d;
    a[b + 1] = c.g * c.g * d;
    a[b + 2] = c.b * c.b * d
  }

  function E(a, b, c, d) {
    a[b] = c.r * d;
    a[b + 1] = c.g * d;
    a[b + 2] = c.b * d
  }

  function A(a) {
    a !== Pc && (l.lineWidth(a), Pc = a)
  }

  function B(a, b, c) {
    Qc !== a && (a ? l.enable(l.POLYGON_OFFSET_FILL) : l.disable(l.POLYGON_OFFSET_FILL), Qc = a);
    !a || Rc === b && Sc === c || (l.polygonOffset(b, c), Rc = b, Sc = c)
  }

  function F(a, b, c) {
    c ?
      (l.texParameteri(a, l.TEXTURE_WRAP_S, Q(b.wrapS)), l.texParameteri(a, l.TEXTURE_WRAP_T, Q(b.wrapT)), l.texParameteri(a, l.TEXTURE_MAG_FILTER, Q(b.magFilter)), l.texParameteri(a, l.TEXTURE_MIN_FILTER, Q(b.minFilter))) : (l.texParameteri(a, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(a, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.texParameteri(a, l.TEXTURE_MAG_FILTER, T(b.magFilter)), l.texParameteri(a, l.TEXTURE_MIN_FILTER, T(b.minFilter)));
    (c = pa.get("EXT_texture_filter_anisotropic")) && b.type !== THREE.FloatType && (1 < b.anisotropy ||
      b.__oldAnisotropy) && (l.texParameterf(a, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, J.getMaxAnisotropy())), b.__oldAnisotropy = b.anisotropy)
  }

  function R(a, b) {
    if (a.width > b || a.height > b) {
      var c = b / Math.max(a.width, a.height),
        d = document.createElement("canvas");
      d.width = Math.floor(a.width * c);
      d.height = Math.floor(a.height * c);
      d.getContext("2d").drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height);
      console.log("THREE.WebGLRenderer:", a, "is too big (" + a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height +
        ".");
      return d
    }
    return a
  }

  function H(a, b) {
    l.bindRenderbuffer(l.RENDERBUFFER, a);
    b.depthBuffer && !b.stencilBuffer ? (l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_COMPONENT16, b.width, b.height), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT, l.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (l.renderbufferStorage(l.RENDERBUFFER, l.DEPTH_STENCIL, b.width, b.height), l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_STENCIL_ATTACHMENT, l.RENDERBUFFER, a)) : l.renderbufferStorage(l.RENDERBUFFER, l.RGBA4, b.width,
      b.height)
  }

  function C(a) {
    a instanceof THREE.WebGLRenderTargetCube ? (l.bindTexture(l.TEXTURE_CUBE_MAP, a.__webglTexture), l.generateMipmap(l.TEXTURE_CUBE_MAP), l.bindTexture(l.TEXTURE_CUBE_MAP, null)) : (l.bindTexture(l.TEXTURE_2D, a.__webglTexture), l.generateMipmap(l.TEXTURE_2D), l.bindTexture(l.TEXTURE_2D, null))
  }

  function T(a) {
    return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? l.NEAREST : l.LINEAR
  }

  function Q(a) {
    var b;
    if (a === THREE.RepeatWrapping) return l.REPEAT;
    if (a === THREE.ClampToEdgeWrapping) return l.CLAMP_TO_EDGE;
    if (a === THREE.MirroredRepeatWrapping) return l.MIRRORED_REPEAT;
    if (a === THREE.NearestFilter) return l.NEAREST;
    if (a === THREE.NearestMipMapNearestFilter) return l.NEAREST_MIPMAP_NEAREST;
    if (a === THREE.NearestMipMapLinearFilter) return l.NEAREST_MIPMAP_LINEAR;
    if (a === THREE.LinearFilter) return l.LINEAR;
    if (a === THREE.LinearMipMapNearestFilter) return l.LINEAR_MIPMAP_NEAREST;
    if (a === THREE.LinearMipMapLinearFilter) return l.LINEAR_MIPMAP_LINEAR;
    if (a === THREE.UnsignedByteType) return l.UNSIGNED_BYTE;
    if (a === THREE.UnsignedShort4444Type) return l.UNSIGNED_SHORT_4_4_4_4;
    if (a === THREE.UnsignedShort5551Type) return l.UNSIGNED_SHORT_5_5_5_1;
    if (a === THREE.UnsignedShort565Type) return l.UNSIGNED_SHORT_5_6_5;
    if (a === THREE.ByteType) return l.BYTE;
    if (a === THREE.ShortType) return l.SHORT;
    if (a === THREE.UnsignedShortType) return l.UNSIGNED_SHORT;
    if (a === THREE.IntType) return l.INT;
    if (a === THREE.UnsignedIntType) return l.UNSIGNED_INT;
    if (a === THREE.FloatType) return l.FLOAT;
    if (a === THREE.AlphaFormat) return l.ALPHA;
    if (a === THREE.RGBFormat) return l.RGB;
    if (a === THREE.RGBAFormat) return l.RGBA;
    if (a === THREE.LuminanceFormat) return l.LUMINANCE;
    if (a === THREE.LuminanceAlphaFormat) return l.LUMINANCE_ALPHA;
    if (a === THREE.AddEquation) return l.FUNC_ADD;
    if (a === THREE.SubtractEquation) return l.FUNC_SUBTRACT;
    if (a === THREE.ReverseSubtractEquation) return l.FUNC_REVERSE_SUBTRACT;
    if (a === THREE.ZeroFactor) return l.ZERO;
    if (a === THREE.OneFactor) return l.ONE;
    if (a === THREE.SrcColorFactor) return l.SRC_COLOR;
    if (a === THREE.OneMinusSrcColorFactor) return l.ONE_MINUS_SRC_COLOR;
    if (a ===
      THREE.SrcAlphaFactor) return l.SRC_ALPHA;
    if (a === THREE.OneMinusSrcAlphaFactor) return l.ONE_MINUS_SRC_ALPHA;
    if (a === THREE.DstAlphaFactor) return l.DST_ALPHA;
    if (a === THREE.OneMinusDstAlphaFactor) return l.ONE_MINUS_DST_ALPHA;
    if (a === THREE.DstColorFactor) return l.DST_COLOR;
    if (a === THREE.OneMinusDstColorFactor) return l.ONE_MINUS_DST_COLOR;
    if (a === THREE.SrcAlphaSaturateFactor) return l.SRC_ALPHA_SATURATE;
    b = pa.get("WEBGL_compressed_texture_s3tc");
    if (null !== b) {
      if (a === THREE.RGB_S3TC_DXT1_Format) return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (a === THREE.RGBA_S3TC_DXT1_Format) return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (a === THREE.RGBA_S3TC_DXT3_Format) return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (a === THREE.RGBA_S3TC_DXT5_Format) return b.COMPRESSED_RGBA_S3TC_DXT5_EXT
    }
    b = pa.get("WEBGL_compressed_texture_pvrtc");
    if (null !== b) {
      if (a === THREE.RGB_PVRTC_4BPPV1_Format) return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (a === THREE.RGB_PVRTC_2BPPV1_Format) return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (a === THREE.RGBA_PVRTC_4BPPV1_Format) return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (a === THREE.RGBA_PVRTC_2BPPV1_Format) return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
    }
    b = pa.get("EXT_blend_minmax");
    if (null !== b) {
      if (a === THREE.MinEquation) return b.MIN_EXT;
      if (a === THREE.MaxEquation) return b.MAX_EXT
    }
    return 0
  }
  console.log("THREE.WebGLRenderer", THREE.REVISION);
  a = a || {};
  var O = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
    S = void 0 !== a.context ? a.context : null,
    X = void 0 !== a.precision ? a.precision : "highp",
    Y = void 0 !== a.alpha ? a.alpha : !1,
    la = void 0 !== a.depth ? a.depth : !0,
    ma = void 0 !== a.stencil ?
    a.stencil : !0,
    ya = void 0 !== a.antialias ? a.antialias : !1,
    P = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
    Ga = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
    Fa = void 0 !== a.logarithmicDepthBuffer ? a.logarithmicDepthBuffer : !1,
    za = new THREE.Color(0),
    bb = 0,
    cb = [],
    ob = {},
    jb = [],
    Jb = [],
    Ib = [],
    yb = [],
    Ra = [];
  this.domElement = O;
  this.context = null;
  this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1;
  this.sortObjects = this.autoClearStencil =
    this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
  this.shadowMapEnabled = this.gammaOutput = this.gammaInput = !1;
  this.shadowMapType = THREE.PCFShadowMap;
  this.shadowMapCullFace = THREE.CullFaceFront;
  this.shadowMapCascade = this.shadowMapDebug = !1;
  this.maxMorphTargets = 8;
  this.maxMorphNormals = 4;
  this.autoScaleCubemaps = !0;
  this.info = {
    memory: {
      programs: 0,
      geometries: 0,
      textures: 0
    },
    render: {
      calls: 0,
      vertices: 0,
      faces: 0,
      points: 0
    }
  };
  var J = this,
    hb = [],
    tc = null,
    Tc = null,
    Kb = -1,
    Oa = -1,
    ec = null,
    dc = 0,
    Lb = -1,
    Mb = -1,
    pb = -1,
    Nb = -1,
    Ob = -1,
    Xb = -1,
    Yb = -1,
    nb = -1,
    Qc = null,
    Rc = null,
    Sc = null,
    Pc = null,
    Pb = 0,
    kc = 0,
    lc = O.width,
    mc = O.height,
    Uc = 0,
    Vc = 0,
    wb = new Uint8Array(16),
    ib = new Uint8Array(16),
    Ec = new THREE.Frustum,
    Ac = new THREE.Matrix4,
    Gc = new THREE.Matrix4,
    Na = new THREE.Vector3,
    sa = new THREE.Vector3,
    fc = !0,
    Mc = {
      ambient: [0, 0, 0],
      directional: {
        length: 0,
        colors: [],
        positions: []
      },
      point: {
        length: 0,
        colors: [],
        positions: [],
        distances: []
      },
      spot: {
        length: 0,
        colors: [],
        positions: [],
        distances: [],
        directions: [],
        anglesCos: [],
        exponents: []
      },
      hemi: {
        length: 0,
        skyColors: [],
        groundColors: [],
        positions: []
      }
    },
    l;
  try {
    var Wc = {
      alpha: Y,
      depth: la,
      stencil: ma,
      antialias: ya,
      premultipliedAlpha: P,
      preserveDrawingBuffer: Ga
    };
    l = S || O.getContext("webgl", Wc) || O.getContext("experimental-webgl", Wc);
    if (null === l) {
      if (null !== O.getContext("webgl")) throw "Error creating WebGL context with your selected attributes.";
      throw "Error creating WebGL context.";
    }
  } catch (ad) {
    console.error(ad)
  }
  void 0 === l.getShaderPrecisionFormat && (l.getShaderPrecisionFormat = function () {
    return {
      rangeMin: 1,
      rangeMax: 1,
      precision: 1
    }
  });
  var pa = new THREE.WebGLExtensions(l);
  pa.get("OES_texture_float");
  pa.get("OES_texture_float_linear");
  pa.get("OES_standard_derivatives");
  Fa && pa.get("EXT_frag_depth");
  l.clearColor(0, 0, 0, 1);
  l.clearDepth(1);
  l.clearStencil(0);
  l.enable(l.DEPTH_TEST);
  l.depthFunc(l.LEQUAL);
  l.frontFace(l.CCW);
  l.cullFace(l.BACK);
  l.enable(l.CULL_FACE);
  l.enable(l.BLEND);
  l.blendEquation(l.FUNC_ADD);
  l.blendFunc(l.SRC_ALPHA, l.ONE_MINUS_SRC_ALPHA);
  l.viewport(Pb, kc, lc, mc);
  l.clearColor(za.r, za.g, za.b, bb);
  this.context = l;
  var Oc = l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),
    bd = l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    cd = l.getParameter(l.MAX_TEXTURE_SIZE),
    $c = l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),
    sc = 0 < bd,
    jc = sc && pa.get("OES_texture_float"),
    dd = l.getShaderPrecisionFormat(l.VERTEX_SHADER, l.HIGH_FLOAT),
    ed = l.getShaderPrecisionFormat(l.VERTEX_SHADER, l.MEDIUM_FLOAT);
  l.getShaderPrecisionFormat(l.VERTEX_SHADER, l.LOW_FLOAT);
  var fd = l.getShaderPrecisionFormat(l.FRAGMENT_SHADER, l.HIGH_FLOAT),
    gd = l.getShaderPrecisionFormat(l.FRAGMENT_SHADER, l.MEDIUM_FLOAT);
  l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,
    l.LOW_FLOAT);
  var Nc = function () {
      var a;
      return function () {
        if (void 0 !== a) return a;
        a = [];
        if (pa.get("WEBGL_compressed_texture_pvrtc") || pa.get("WEBGL_compressed_texture_s3tc"))
          for (var b = l.getParameter(l.COMPRESSED_TEXTURE_FORMATS), c = 0; c < b.length; c++) a.push(b[c]);
        return a
      }
    }(),
    hd = 0 < dd.precision && 0 < fd.precision,
    Xc = 0 < ed.precision && 0 < gd.precision;
  "highp" !== X || hd || (Xc ? (X = "mediump", console.warn("THREE.WebGLRenderer: highp not supported, using mediump.")) : (X = "lowp", console.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));
  "mediump" !== X || Xc || (X = "lowp", console.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));
  var id = new THREE.ShadowMapPlugin(this, cb, ob, jb),
    jd = new THREE.SpritePlugin(this, yb),
    kd = new THREE.LensFlarePlugin(this, Ra);
  this.getContext = function () {
    return l
  };
  this.supportsVertexTextures = function () {
    return sc
  };
  this.supportsFloatTextures = function () {
    return pa.get("OES_texture_float")
  };
  this.supportsStandardDerivatives = function () {
    return pa.get("OES_standard_derivatives")
  };
  this.supportsCompressedTextureS3TC =
    function () {
      return pa.get("WEBGL_compressed_texture_s3tc")
    };
  this.supportsCompressedTexturePVRTC = function () {
    return pa.get("WEBGL_compressed_texture_pvrtc")
  };
  this.supportsBlendMinMax = function () {
    return pa.get("EXT_blend_minmax")
  };
  this.getMaxAnisotropy = function () {
    var a;
    return function () {
      if (void 0 !== a) return a;
      var b = pa.get("EXT_texture_filter_anisotropic");
      return a = null !== b ? l.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    }
  }();
  this.getPrecision = function () {
    return X
  };
  this.setSize = function (a, b, c) {
    O.width =
      a * this.devicePixelRatio;
    O.height = b * this.devicePixelRatio;
    !1 !== c && (O.style.width = a + "px", O.style.height = b + "px");
    this.setViewport(0, 0, a, b)
  };
  this.setViewport = function (a, b, c, d) {
    Pb = a * this.devicePixelRatio;
    kc = b * this.devicePixelRatio;
    lc = c * this.devicePixelRatio;
    mc = d * this.devicePixelRatio;
    l.viewport(Pb, kc, lc, mc)
  };
  this.setScissor = function (a, b, c, d) {
    l.scissor(a * this.devicePixelRatio, b * this.devicePixelRatio, c * this.devicePixelRatio, d * this.devicePixelRatio)
  };
  this.enableScissorTest = function (a) {
    a ? l.enable(l.SCISSOR_TEST) :
      l.disable(l.SCISSOR_TEST)
  };
  this.setClearColor = function (a, b) {
    za.set(a);
    bb = void 0 !== b ? b : 1;
    l.clearColor(za.r, za.g, za.b, bb)
  };
  this.setClearColorHex = function (a, b) {
    console.warn("THREE.WebGLRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");
    this.setClearColor(a, b)
  };
  this.getClearColor = function () {
    return za
  };
  this.getClearAlpha = function () {
    return bb
  };
  this.clear = function (a, b, c) {
    var d = 0;
    if (void 0 === a || a) d |= l.COLOR_BUFFER_BIT;
    if (void 0 === b || b) d |= l.DEPTH_BUFFER_BIT;
    if (void 0 === c || c) d |=
      l.STENCIL_BUFFER_BIT;
    l.clear(d)
  };
  this.clearColor = function () {
    l.clear(l.COLOR_BUFFER_BIT)
  };
  this.clearDepth = function () {
    l.clear(l.DEPTH_BUFFER_BIT)
  };
  this.clearStencil = function () {
    l.clear(l.STENCIL_BUFFER_BIT)
  };
  this.clearTarget = function (a, b, c, d) {
    this.setRenderTarget(a);
    this.clear(b, c, d)
  };
  this.resetGLState = function () {
    ec = tc = null;
    Kb = Oa = Mb = Lb = nb = Yb = pb = -1;
    fc = !0
  };
  var Hc = function (a) {
      a.target.traverse(function (a) {
        a.removeEventListener("remove", Hc);
        if (a instanceof THREE.Mesh || a instanceof THREE.PointCloud || a instanceof THREE.Line) delete ob[a.id];
        else if (a instanceof THREE.ImmediateRenderObject || a.immediateRenderCallback)
          for (var b = jb, c = b.length - 1; 0 <= c; c--) b[c].object === a && b.splice(c, 1);
        delete a.__webglInit;
        delete a._modelViewMatrix;
        delete a._normalMatrix;
        delete a.__webglActive
      })
    },
    Ic = function (a) {
      a = a.target;
      a.removeEventListener("dispose", Ic);
      delete a.__webglInit;
      if (a instanceof THREE.BufferGeometry) {
        for (var b in a.attributes) {
          var c = a.attributes[b];
          void 0 !== c.buffer && (l.deleteBuffer(c.buffer), delete c.buffer)
        }
        J.info.memory.geometries--
      } else if (b =
        xb[a.id], void 0 !== b) {
        for (var c = 0, d = b.length; c < d; c++) {
          var e = b[c];
          if (void 0 !== e.numMorphTargets) {
            for (var f = 0, g = e.numMorphTargets; f < g; f++) l.deleteBuffer(e.__webglMorphTargetsBuffers[f]);
            delete e.__webglMorphTargetsBuffers
          }
          if (void 0 !== e.numMorphNormals) {
            f = 0;
            for (g = e.numMorphNormals; f < g; f++) l.deleteBuffer(e.__webglMorphNormalsBuffers[f]);
            delete e.__webglMorphNormalsBuffers
          }
          Yc(e)
        }
        delete xb[a.id]
      } else Yc(a);
      Oa = -1
    },
    gc = function (a) {
      a = a.target;
      a.removeEventListener("dispose", gc);
      a.image && a.image.__webglTextureCube ?
        (l.deleteTexture(a.image.__webglTextureCube), delete a.image.__webglTextureCube) : void 0 !== a.__webglInit && (l.deleteTexture(a.__webglTexture), delete a.__webglTexture, delete a.__webglInit);
      J.info.memory.textures--
    },
    Zc = function (a) {
      a = a.target;
      a.removeEventListener("dispose", Zc);
      if (a && void 0 !== a.__webglTexture) {
        l.deleteTexture(a.__webglTexture);
        delete a.__webglTexture;
        if (a instanceof THREE.WebGLRenderTargetCube)
          for (var b = 0; 6 > b; b++) l.deleteFramebuffer(a.__webglFramebuffer[b]), l.deleteRenderbuffer(a.__webglRenderbuffer[b]);
        else l.deleteFramebuffer(a.__webglFramebuffer), l.deleteRenderbuffer(a.__webglRenderbuffer);
        delete a.__webglFramebuffer;
        delete a.__webglRenderbuffer
      }
      J.info.memory.textures--
    },
    Dc = function (a) {
      a = a.target;
      a.removeEventListener("dispose", Dc);
      Cc(a)
    },
    Yc = function (a) {
      for (var b = "__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(" "),
          c = 0, d = b.length; c < d; c++) {
        var e = b[c];
        void 0 !== a[e] && (l.deleteBuffer(a[e]), delete a[e])
      }
      if (void 0 !== a.__webglCustomAttributesList) {
        for (e in a.__webglCustomAttributesList) l.deleteBuffer(a.__webglCustomAttributesList[e].buffer);
        delete a.__webglCustomAttributesList
      }
      J.info.memory.geometries--
    },
    Cc = function (a) {
      var b = a.program.program;
      if (void 0 !== b) {
        a.program = void 0;
        var c, d, e = !1;
        a = 0;
        for (c = hb.length; a < c; a++)
          if (d = hb[a], d.program === b) {
            d.usedTimes--;
            0 === d.usedTimes && (e = !0);
            break
          } if (!0 === e) {
          e = [];
          a = 0;
          for (c = hb.length; a <
            c; a++) d = hb[a], d.program !== b && e.push(d);
          hb = e;
          l.deleteProgram(b);
          J.info.memory.programs--
        }
      }
    };
  this.renderBufferImmediate = function (a, b, c) {
    f();
    a.hasPositions && !a.__webglVertexBuffer && (a.__webglVertexBuffer = l.createBuffer());
    a.hasNormals && !a.__webglNormalBuffer && (a.__webglNormalBuffer = l.createBuffer());
    a.hasUvs && !a.__webglUvBuffer && (a.__webglUvBuffer = l.createBuffer());
    a.hasColors && !a.__webglColorBuffer && (a.__webglColorBuffer = l.createBuffer());
    a.hasPositions && (l.bindBuffer(l.ARRAY_BUFFER, a.__webglVertexBuffer),
      l.bufferData(l.ARRAY_BUFFER, a.positionArray, l.DYNAMIC_DRAW), g(b.attributes.position), l.vertexAttribPointer(b.attributes.position, 3, l.FLOAT, !1, 0, 0));
    if (a.hasNormals) {
      l.bindBuffer(l.ARRAY_BUFFER, a.__webglNormalBuffer);
      if (c.shading === THREE.FlatShading) {
        var d, e, k, m, n, p, r, q, t, s, v, u = 3 * a.count;
        for (v = 0; v < u; v += 9) s = a.normalArray, d = s[v], e = s[v + 1], k = s[v + 2], m = s[v + 3], p = s[v + 4], q = s[v + 5], n = s[v + 6], r = s[v + 7], t = s[v + 8], d = (d + m + n) / 3, e = (e + p + r) / 3, k = (k + q + t) / 3, s[v] = d, s[v + 1] = e, s[v + 2] = k, s[v + 3] = d, s[v + 4] = e, s[v + 5] = k, s[v + 6] = d, s[v +
          7] = e, s[v + 8] = k
      }
      l.bufferData(l.ARRAY_BUFFER, a.normalArray, l.DYNAMIC_DRAW);
      g(b.attributes.normal);
      l.vertexAttribPointer(b.attributes.normal, 3, l.FLOAT, !1, 0, 0)
    }
    a.hasUvs && c.map && (l.bindBuffer(l.ARRAY_BUFFER, a.__webglUvBuffer), l.bufferData(l.ARRAY_BUFFER, a.uvArray, l.DYNAMIC_DRAW), g(b.attributes.uv), l.vertexAttribPointer(b.attributes.uv, 2, l.FLOAT, !1, 0, 0));
    a.hasColors && c.vertexColors !== THREE.NoColors && (l.bindBuffer(l.ARRAY_BUFFER, a.__webglColorBuffer), l.bufferData(l.ARRAY_BUFFER, a.colorArray, l.DYNAMIC_DRAW),
      g(b.attributes.color), l.vertexAttribPointer(b.attributes.color, 3, l.FLOAT, !1, 0, 0));
    h();
    l.drawArrays(l.TRIANGLES, 0, a.count);
    a.count = 0
  };
  this.renderBufferDirect = function (a, b, c, d, g, h) {
    if (!1 !== d.visible)
      if (a = G(a, b, c, d, h), b = !1, c = 16777215 * g.id + 2 * a.id + (d.wireframe ? 1 : 0), c !== Oa && (Oa = c, b = !0), b && f(), h instanceof THREE.Mesh)
        if (h = !0 === d.wireframe ? l.LINES : l.TRIANGLES, c = g.attributes.index) {
          var k, m;
          c.array instanceof Uint32Array && pa.get("OES_element_index_uint") ? (k = l.UNSIGNED_INT, m = 4) : (k = l.UNSIGNED_SHORT, m = 2);
          var n =
            g.offsets;
          if (0 === n.length) b && (e(d, a, g, 0), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, c.buffer)), l.drawElements(h, c.array.length, k, 0), J.info.render.calls++, J.info.render.vertices += c.array.length, J.info.render.faces += c.array.length / 3;
          else {
            b = !0;
            for (var p = 0, r = n.length; p < r; p++) {
              var q = n[p].index;
              b && (e(d, a, g, q), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, c.buffer));
              l.drawElements(h, n[p].count, k, n[p].start * m);
              J.info.render.calls++;
              J.info.render.vertices += n[p].count;
              J.info.render.faces += n[p].count / 3
            }
          }
        } else b && e(d, a, g, 0),
          d = g.attributes.position, l.drawArrays(h, 0, d.array.length / 3), J.info.render.calls++, J.info.render.vertices += d.array.length / 3, J.info.render.faces += d.array.length / 9;
    else if (h instanceof THREE.PointCloud) b && e(d, a, g, 0), d = g.attributes.position, l.drawArrays(l.POINTS, 0, d.array.length / 3), J.info.render.calls++, J.info.render.points += d.array.length / 3;
    else if (h instanceof THREE.Line)
      if (h = h.mode === THREE.LineStrip ? l.LINE_STRIP : l.LINES, A(d.linewidth), c = g.attributes.index)
        if (c.array instanceof Uint32Array ? (k = l.UNSIGNED_INT,
            m = 4) : (k = l.UNSIGNED_SHORT, m = 2), n = g.offsets, 0 === n.length) b && (e(d, a, g, 0), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, c.buffer)), l.drawElements(h, c.array.length, k, 0), J.info.render.calls++, J.info.render.vertices += c.array.length;
        else
          for (1 < n.length && (b = !0), p = 0, r = n.length; p < r; p++) q = n[p].index, b && (e(d, a, g, q), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, c.buffer)), l.drawElements(h, n[p].count, k, n[p].start * m), J.info.render.calls++, J.info.render.vertices += n[p].count;
    else b && e(d, a, g, 0), d = g.attributes.position, l.drawArrays(h, 0,
      d.array.length / 3), J.info.render.calls++, J.info.render.points += d.array.length / 3
  };
  this.renderBuffer = function (a, b, c, d, e, k) {
    if (!1 !== d.visible) {
      c = G(a, b, c, d, k);
      b = c.attributes;
      a = !1;
      c = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0);
      c !== Oa && (Oa = c, a = !0);
      a && f();
      if (!d.morphTargets && 0 <= b.position) a && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglVertexBuffer), g(b.position), l.vertexAttribPointer(b.position, 3, l.FLOAT, !1, 0, 0));
      else if (k.morphTargetBase) {
        c = d.program.attributes; - 1 !== k.morphTargetBase && 0 <= c.position ? (l.bindBuffer(l.ARRAY_BUFFER,
          e.__webglMorphTargetsBuffers[k.morphTargetBase]), g(c.position), l.vertexAttribPointer(c.position, 3, l.FLOAT, !1, 0, 0)) : 0 <= c.position && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglVertexBuffer), g(c.position), l.vertexAttribPointer(c.position, 3, l.FLOAT, !1, 0, 0));
        if (k.morphTargetForcedOrder.length)
          for (var m = 0, n = k.morphTargetForcedOrder, r = k.morphTargetInfluences; m < d.numSupportedMorphTargets && m < n.length;) 0 <= c["morphTarget" + m] && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[n[m]]), g(c["morphTarget" + m]), l.vertexAttribPointer(c["morphTarget" +
            m], 3, l.FLOAT, !1, 0, 0)), 0 <= c["morphNormal" + m] && d.morphNormals && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[n[m]]), g(c["morphNormal" + m]), l.vertexAttribPointer(c["morphNormal" + m], 3, l.FLOAT, !1, 0, 0)), k.__webglMorphTargetInfluences[m] = r[n[m]], m++;
        else {
          var n = [],
            r = k.morphTargetInfluences,
            q, t = r.length;
          for (q = 0; q < t; q++) m = r[q], 0 < m && n.push([m, q]);
          n.length > d.numSupportedMorphTargets ? (n.sort(p), n.length = d.numSupportedMorphTargets) : n.length > d.numSupportedMorphNormals ? n.sort(p) : 0 === n.length && n.push([0,
            0
          ]);
          for (m = 0; m < d.numSupportedMorphTargets;) n[m] ? (q = n[m][1], 0 <= c["morphTarget" + m] && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[q]), g(c["morphTarget" + m]), l.vertexAttribPointer(c["morphTarget" + m], 3, l.FLOAT, !1, 0, 0)), 0 <= c["morphNormal" + m] && d.morphNormals && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[q]), g(c["morphNormal" + m]), l.vertexAttribPointer(c["morphNormal" + m], 3, l.FLOAT, !1, 0, 0)), k.__webglMorphTargetInfluences[m] = r[q]) : k.__webglMorphTargetInfluences[m] = 0, m++
        }
        null !== d.program.uniforms.morphTargetInfluences &&
          l.uniform1fv(d.program.uniforms.morphTargetInfluences, k.__webglMorphTargetInfluences)
      }
      if (a) {
        if (e.__webglCustomAttributesList)
          for (c = 0, r = e.__webglCustomAttributesList.length; c < r; c++) n = e.__webglCustomAttributesList[c], 0 <= b[n.buffer.belongsToAttribute] && (l.bindBuffer(l.ARRAY_BUFFER, n.buffer), g(b[n.buffer.belongsToAttribute]), l.vertexAttribPointer(b[n.buffer.belongsToAttribute], n.size, l.FLOAT, !1, 0, 0));
        0 <= b.color && (0 < k.geometry.colors.length || 0 < k.geometry.faces.length ? (l.bindBuffer(l.ARRAY_BUFFER, e.__webglColorBuffer),
          g(b.color), l.vertexAttribPointer(b.color, 3, l.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && l.vertexAttrib3fv(b.color, d.defaultAttributeValues.color));
        0 <= b.normal && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglNormalBuffer), g(b.normal), l.vertexAttribPointer(b.normal, 3, l.FLOAT, !1, 0, 0));
        0 <= b.tangent && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglTangentBuffer), g(b.tangent), l.vertexAttribPointer(b.tangent, 4, l.FLOAT, !1, 0, 0));
        0 <= b.uv && (k.geometry.faceVertexUvs[0] ? (l.bindBuffer(l.ARRAY_BUFFER, e.__webglUVBuffer), g(b.uv),
          l.vertexAttribPointer(b.uv, 2, l.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && l.vertexAttrib2fv(b.uv, d.defaultAttributeValues.uv));
        0 <= b.uv2 && (k.geometry.faceVertexUvs[1] ? (l.bindBuffer(l.ARRAY_BUFFER, e.__webglUV2Buffer), g(b.uv2), l.vertexAttribPointer(b.uv2, 2, l.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && l.vertexAttrib2fv(b.uv2, d.defaultAttributeValues.uv2));
        d.skinning && 0 <= b.skinIndex && 0 <= b.skinWeight && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), g(b.skinIndex), l.vertexAttribPointer(b.skinIndex,
          4, l.FLOAT, !1, 0, 0), l.bindBuffer(l.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), g(b.skinWeight), l.vertexAttribPointer(b.skinWeight, 4, l.FLOAT, !1, 0, 0));
        0 <= b.lineDistance && (l.bindBuffer(l.ARRAY_BUFFER, e.__webglLineDistanceBuffer), g(b.lineDistance), l.vertexAttribPointer(b.lineDistance, 1, l.FLOAT, !1, 0, 0))
      }
      h();
      k instanceof THREE.Mesh ? (k = e.__typeArray === Uint32Array ? l.UNSIGNED_INT : l.UNSIGNED_SHORT, d.wireframe ? (A(d.wireframeLinewidth), a && l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), l.drawElements(l.LINES,
        e.__webglLineCount, k, 0)) : (a && l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), l.drawElements(l.TRIANGLES, e.__webglFaceCount, k, 0)), J.info.render.calls++, J.info.render.vertices += e.__webglFaceCount, J.info.render.faces += e.__webglFaceCount / 3) : k instanceof THREE.Line ? (k = k.mode === THREE.LineStrip ? l.LINE_STRIP : l.LINES, A(d.linewidth), l.drawArrays(k, 0, e.__webglLineCount), J.info.render.calls++) : k instanceof THREE.PointCloud && (l.drawArrays(l.POINTS, 0, e.__webglParticleCount), J.info.render.calls++, J.info.render.points +=
        e.__webglParticleCount)
    }
  };
  this.render = function (a, b, c, d) {
    if (!1 === b instanceof THREE.Camera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
    else {
      var e = a.fog;
      Kb = Oa = -1;
      ec = null;
      fc = !0;
      !0 === a.autoUpdate && a.updateMatrixWorld();
      void 0 === b.parent && b.updateMatrixWorld();
      a.traverse(function (a) {
        a instanceof THREE.SkinnedMesh && a.skeleton.update()
      });
      b.matrixWorldInverse.getInverse(b.matrixWorld);
      Ac.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
      Ec.setFromMatrix(Ac);
      cb.length = 0;
      Jb.length = 0;
      Ib.length = 0;
      yb.length = 0;
      Ra.length = 0;
      q(a, a);
      !0 === J.sortObjects && (Jb.sort(k), Ib.sort(n));
      id.render(a, b);
      J.info.render.calls = 0;
      J.info.render.vertices = 0;
      J.info.render.faces = 0;
      J.info.render.points = 0;
      this.setRenderTarget(c);
      (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
      d = 0;
      for (var f = jb.length; d < f; d++) {
        var g = jb[d],
          h = g.object;
        h.visible && (x(h, b), t(g))
      }
      a.overrideMaterial ? (d = a.overrideMaterial, this.setBlending(d.blending, d.blendEquation,
        d.blendSrc, d.blendDst), this.setDepthTest(d.depthTest), this.setDepthWrite(d.depthWrite), B(d.polygonOffset, d.polygonOffsetFactor, d.polygonOffsetUnits), m(Jb, b, cb, e, !0, d), m(Ib, b, cb, e, !0, d), r(jb, "", b, cb, e, !1, d)) : (d = null, this.setBlending(THREE.NoBlending), m(Jb, b, cb, e, !1, d), r(jb, "opaque", b, cb, e, !1, d), m(Ib, b, cb, e, !0, d), r(jb, "transparent", b, cb, e, !0, d));
      jd.render(a, b);
      kd.render(a, b, Uc, Vc);
      c && c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter && C(c);
      this.setDepthTest(!0);
      this.setDepthWrite(!0)
    }
  };
  this.renderImmediateObject = function (a, b, c, d, e) {
    var f = G(a, b, c, d, e);
    Oa = -1;
    J.setMaterialFaces(d);
    e.immediateRenderCallback ? e.immediateRenderCallback(f, l, Ec) : e.render(function (a) {
      J.renderBufferImmediate(a, f, d)
    })
  };
  var xb = {},
    rc = 0;
  this.setFaceCulling = function (a, b) {
    a === THREE.CullFaceNone ? l.disable(l.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? l.frontFace(l.CW) : l.frontFace(l.CCW), a === THREE.CullFaceBack ? l.cullFace(l.BACK) : a === THREE.CullFaceFront ? l.cullFace(l.FRONT) : l.cullFace(l.FRONT_AND_BACK), l.enable(l.CULL_FACE))
  };
  this.setMaterialFaces = function (a) {
    var b = a.side === THREE.DoubleSide;
    a = a.side === THREE.BackSide;
    Lb !== b && (b ? l.disable(l.CULL_FACE) : l.enable(l.CULL_FACE), Lb = b);
    Mb !== a && (a ? l.frontFace(l.CW) : l.frontFace(l.CCW), Mb = a)
  };
  this.setDepthTest = function (a) {
    Yb !== a && (a ? l.enable(l.DEPTH_TEST) : l.disable(l.DEPTH_TEST), Yb = a)
  };
  this.setDepthWrite = function (a) {
    nb !== a && (l.depthMask(a), nb = a)
  };
  this.setBlending = function (a, b, c, d) {
    a !== pb && (a === THREE.NoBlending ? l.disable(l.BLEND) : a === THREE.AdditiveBlending ? (l.enable(l.BLEND), l.blendEquation(l.FUNC_ADD),
      l.blendFunc(l.SRC_ALPHA, l.ONE)) : a === THREE.SubtractiveBlending ? (l.enable(l.BLEND), l.blendEquation(l.FUNC_ADD), l.blendFunc(l.ZERO, l.ONE_MINUS_SRC_COLOR)) : a === THREE.MultiplyBlending ? (l.enable(l.BLEND), l.blendEquation(l.FUNC_ADD), l.blendFunc(l.ZERO, l.SRC_COLOR)) : a === THREE.CustomBlending ? l.enable(l.BLEND) : (l.enable(l.BLEND), l.blendEquationSeparate(l.FUNC_ADD, l.FUNC_ADD), l.blendFuncSeparate(l.SRC_ALPHA, l.ONE_MINUS_SRC_ALPHA, l.ONE, l.ONE_MINUS_SRC_ALPHA)), pb = a);
    if (a === THREE.CustomBlending) {
      if (b !== Nb && (l.blendEquation(Q(b)),
          Nb = b), c !== Ob || d !== Xb) l.blendFunc(Q(c), Q(d)), Ob = c, Xb = d
    } else Xb = Ob = Nb = null
  };
  this.uploadTexture = function (a) {
    void 0 === a.__webglInit && (a.__webglInit = !0, a.addEventListener("dispose", gc), a.__webglTexture = l.createTexture(), J.info.memory.textures++);
    l.bindTexture(l.TEXTURE_2D, a.__webglTexture);
    l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, a.flipY);
    l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha);
    l.pixelStorei(l.UNPACK_ALIGNMENT, a.unpackAlignment);
    a.image = R(a.image, cd);
    var b = a.image,
      c = THREE.Math.isPowerOfTwo(b.width) &&
      THREE.Math.isPowerOfTwo(b.height),
      d = Q(a.format),
      e = Q(a.type);
    F(l.TEXTURE_2D, a, c);
    var f = a.mipmaps;
    if (a instanceof THREE.DataTexture)
      if (0 < f.length && c) {
        for (var g = 0, h = f.length; g < h; g++) b = f[g], l.texImage2D(l.TEXTURE_2D, g, d, b.width, b.height, 0, d, e, b.data);
        a.generateMipmaps = !1
      } else l.texImage2D(l.TEXTURE_2D, 0, d, b.width, b.height, 0, d, e, b.data);
    else if (a instanceof THREE.CompressedTexture)
      for (g = 0, h = f.length; g < h; g++) b = f[g], a.format !== THREE.RGBAFormat && a.format !== THREE.RGBFormat ? -1 < Nc().indexOf(d) ? l.compressedTexImage2D(l.TEXTURE_2D,
        g, d, b.width, b.height, 0, b.data) : console.warn("Attempt to load unsupported compressed texture format") : l.texImage2D(l.TEXTURE_2D, g, d, b.width, b.height, 0, d, e, b.data);
    else if (0 < f.length && c) {
      g = 0;
      for (h = f.length; g < h; g++) b = f[g], l.texImage2D(l.TEXTURE_2D, g, d, d, e, b);
      a.generateMipmaps = !1
    } else l.texImage2D(l.TEXTURE_2D, 0, d, d, e, a.image);
    a.generateMipmaps && c && l.generateMipmap(l.TEXTURE_2D);
    a.needsUpdate = !1;
    if (a.onUpdate) a.onUpdate()
  };
  this.setTexture = function (a, b) {
    l.activeTexture(l.TEXTURE0 + b);
    a.needsUpdate ? J.uploadTexture(a) :
      l.bindTexture(l.TEXTURE_2D, a.__webglTexture)
  };
  this.setRenderTarget = function (a) {
    var b = a instanceof THREE.WebGLRenderTargetCube;
    if (a && void 0 === a.__webglFramebuffer) {
      void 0 === a.depthBuffer && (a.depthBuffer = !0);
      void 0 === a.stencilBuffer && (a.stencilBuffer = !0);
      a.addEventListener("dispose", Zc);
      a.__webglTexture = l.createTexture();
      J.info.memory.textures++;
      var c = THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height),
        d = Q(a.format),
        e = Q(a.type);
      if (b) {
        a.__webglFramebuffer = [];
        a.__webglRenderbuffer = [];
        l.bindTexture(l.TEXTURE_CUBE_MAP, a.__webglTexture);
        F(l.TEXTURE_CUBE_MAP, a, c);
        for (var f = 0; 6 > f; f++) {
          a.__webglFramebuffer[f] = l.createFramebuffer();
          a.__webglRenderbuffer[f] = l.createRenderbuffer();
          l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, d, a.width, a.height, 0, d, e, null);
          var g = a,
            h = l.TEXTURE_CUBE_MAP_POSITIVE_X + f;
          l.bindFramebuffer(l.FRAMEBUFFER, a.__webglFramebuffer[f]);
          l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, h, g.__webglTexture, 0);
          H(a.__webglRenderbuffer[f], a)
        }
        c && l.generateMipmap(l.TEXTURE_CUBE_MAP)
      } else a.__webglFramebuffer =
        l.createFramebuffer(), a.__webglRenderbuffer = a.shareDepthFrom ? a.shareDepthFrom.__webglRenderbuffer : l.createRenderbuffer(), l.bindTexture(l.TEXTURE_2D, a.__webglTexture), F(l.TEXTURE_2D, a, c), l.texImage2D(l.TEXTURE_2D, 0, d, a.width, a.height, 0, d, e, null), d = l.TEXTURE_2D, l.bindFramebuffer(l.FRAMEBUFFER, a.__webglFramebuffer), l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, d, a.__webglTexture, 0), a.shareDepthFrom ? a.depthBuffer && !a.stencilBuffer ? l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_ATTACHMENT,
          l.RENDERBUFFER, a.__webglRenderbuffer) : a.depthBuffer && a.stencilBuffer && l.framebufferRenderbuffer(l.FRAMEBUFFER, l.DEPTH_STENCIL_ATTACHMENT, l.RENDERBUFFER, a.__webglRenderbuffer) : H(a.__webglRenderbuffer, a), c && l.generateMipmap(l.TEXTURE_2D);
      b ? l.bindTexture(l.TEXTURE_CUBE_MAP, null) : l.bindTexture(l.TEXTURE_2D, null);
      l.bindRenderbuffer(l.RENDERBUFFER, null);
      l.bindFramebuffer(l.FRAMEBUFFER, null)
    }
    a ? (b = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, c = a.width, a = a.height, e = d = 0) : (b = null, c = lc, a = mc,
      d = Pb, e = kc);
    b !== Tc && (l.bindFramebuffer(l.FRAMEBUFFER, b), l.viewport(d, e, c, a), Tc = b);
    Uc = c;
    Vc = a
  };
  this.initMaterial = function () {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
  };
  this.addPrePlugin = function () {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
  };
  this.addPostPlugin = function () {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
  };
  this.updateShadowMap = function () {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
  }
};
THREE.WebGLRenderTarget = function (a, b, c) {
  this.width = a;
  this.height = b;
  c = c || {};
  this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping;
  this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping;
  this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter;
  this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter;
  this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.format = void 0 !== c.format ? c.format :
    THREE.RGBAFormat;
  this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType;
  this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
  this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
  this.generateMipmaps = !0;
  this.shareDepthFrom = null
};
THREE.WebGLRenderTarget.prototype = {
  constructor: THREE.WebGLRenderTarget,
  setSize: function (a, b) {
    this.width = a;
    this.height = b
  },
  clone: function () {
    var a = new THREE.WebGLRenderTarget(this.width, this.height);
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.minFilter = this.minFilter;
    a.anisotropy = this.anisotropy;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    a.format = this.format;
    a.type = this.type;
    a.depthBuffer = this.depthBuffer;
    a.stencilBuffer = this.stencilBuffer;
    a.generateMipmaps = this.generateMipmaps;
    a.shareDepthFrom = this.shareDepthFrom;
    return a
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    })
  }
};
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube = function (a, b, c) {
  THREE.WebGLRenderTarget.call(this, a, b, c);
  this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLExtensions = function (a) {
  var b = {};
  this.get = function (c) {
    if (void 0 !== b[c]) return b[c];
    var d;
    switch (c) {
      case "OES_texture_float":
        d = a.getExtension("OES_texture_float");
        break;
      case "OES_texture_float_linear":
        d = a.getExtension("OES_texture_float_linear");
        break;
      case "OES_standard_derivatives":
        d = a.getExtension("OES_standard_derivatives");
        break;
      case "EXT_texture_filter_anisotropic":
        d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      case "OES_element_index_uint":
        d = a.getExtension("OES_element_index_uint");
        break;
      case "EXT_blend_minmax":
        d = a.getExtension("EXT_blend_minmax");
        break;
      case "EXT_frag_depth":
        d = a.getExtension("EXT_frag_depth")
    }
    null === d && console.log("THREE.WebGLRenderer: " + c + " extension not supported.");
    return b[c] = d
  }
};
THREE.WebGLProgram = function () {
  var a = 0;
  return function (b, c, d, e) {
    var f = b.context,
      g = d.defines,
      h = d.__webglShader.uniforms,
      k = d.attributes,
      n = d.__webglShader.vertexShader,
      p = d.__webglShader.fragmentShader,
      q = d.index0AttributeName;
    void 0 === q && !0 === e.morphTargets && (q = "position");
    var m = "SHADOWMAP_TYPE_BASIC";
    e.shadowMapType === THREE.PCFShadowMap ? m = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === THREE.PCFSoftShadowMap && (m = "SHADOWMAP_TYPE_PCF_SOFT");
    var r, t;
    r = [];
    for (var s in g) t = g[s], !1 !== t && (t = "#define " + s + " " + t, r.push(t));
    r = r.join("\n");
    g = f.createProgram();
    d instanceof THREE.RawShaderMaterial ? b = d = "" : (d = ["precision " + e.precision + " float;", "precision " + e.precision + " int;", r, e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", b.gammaInput ? "#define GAMMA_INPUT" : "", b.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define MAX_DIR_LIGHTS " + e.maxDirLights, "#define MAX_POINT_LIGHTS " + e.maxPointLights, "#define MAX_SPOT_LIGHTS " + e.maxSpotLights, "#define MAX_HEMI_LIGHTS " + e.maxHemiLights, "#define MAX_SHADOWS " + e.maxShadows, "#define MAX_BONES " +
        e.maxBones, e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.skinning ? "#define USE_SKINNING" : "", e.useVertexTexture ? "#define BONE_TEXTURE" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals ? "#define USE_MORPHNORMALS" : "", e.wrapAround ? "#define WRAP_AROUND" :
        "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + m : "", e.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", e.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"
      ].join("\n"),
      b = ["precision " + e.precision + " float;", "precision " + e.precision + " int;", e.bumpMap || e.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", r, "#define MAX_DIR_LIGHTS " + e.maxDirLights, "#define MAX_POINT_LIGHTS " + e.maxPointLights, "#define MAX_SPOT_LIGHTS " + e.maxSpotLights, "#define MAX_HEMI_LIGHTS " + e.maxHemiLights, "#define MAX_SHADOWS " + e.maxShadows, e.alphaTest ? "#define ALPHATEST " + e.alphaTest : "", b.gammaInput ? "#define GAMMA_INPUT" : "", b.gammaOutput ? "#define GAMMA_OUTPUT" : "", e.useFog && e.fog ? "#define USE_FOG" :
        "", e.useFog && e.fogExp ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.metal ? "#define METAL" : "", e.wrapAround ? "#define WRAP_AROUND" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" :
        "", e.shadowMapEnabled ? "#define " + m : "", e.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", e.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"
      ].join("\n"));
    n = new THREE.WebGLShader(f, f.VERTEX_SHADER, d + n);
    p = new THREE.WebGLShader(f, f.FRAGMENT_SHADER, b + p);
    f.attachShader(g, n);
    f.attachShader(g, p);
    void 0 !== q && f.bindAttribLocation(g, 0, q);
    f.linkProgram(g);
    !1 === f.getProgramParameter(g, f.LINK_STATUS) && (console.error("THREE.WebGLProgram: Could not initialise shader."),
      console.error("gl.VALIDATE_STATUS", f.getProgramParameter(g, f.VALIDATE_STATUS)), console.error("gl.getError()", f.getError()));
    "" !== f.getProgramInfoLog(g) && console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", f.getProgramInfoLog(g));
    f.deleteShader(n);
    f.deleteShader(p);
    q = "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");
    e.useVertexTexture ? (q.push("boneTexture"), q.push("boneTextureWidth"), q.push("boneTextureHeight")) :
      q.push("boneGlobalMatrices");
    e.logarithmicDepthBuffer && q.push("logDepthBufFC");
    for (var u in h) q.push(u);
    h = q;
    u = {};
    q = 0;
    for (b = h.length; q < b; q++) m = h[q], u[m] = f.getUniformLocation(g, m);
    this.uniforms = u;
    q = "position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");
    for (h = 0; h < e.maxMorphTargets; h++) q.push("morphTarget" + h);
    for (h = 0; h < e.maxMorphNormals; h++) q.push("morphNormal" + h);
    for (var v in k) q.push(v);
    e = q;
    k = {};
    v = 0;
    for (h = e.length; v < h; v++) u = e[v], k[u] = f.getAttribLocation(g, u);
    this.attributes =
      k;
    this.attributesKeys = Object.keys(this.attributes);
    this.id = a++;
    this.code = c;
    this.usedTimes = 1;
    this.program = g;
    this.vertexShader = n;
    this.fragmentShader = p;
    return this
  }
}();
THREE.WebGLShader = function () {
  var a = function (a) {
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) a[c] = c + 1 + ": " + a[c];
    return a.join("\n")
  };
  return function (b, c, d) {
    c = b.createShader(c);
    b.shaderSource(c, d);
    b.compileShader(c);
    !1 === b.getShaderParameter(c, b.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile.");
    "" !== b.getShaderInfoLog(c) && (console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", b.getShaderInfoLog(c)), console.warn(a(d)));
    return c
  }
}();
THREE.LensFlarePlugin = function (a, b) {
  var c, d, e, f, g, h, k, n, p, q, m = a.context,
    r, t, s, u, v, y;
  this.render = function (G, w, K, x) {
    if (0 !== b.length) {
      G = new THREE.Vector3;
      var D = x / K,
        E = .5 * K,
        A = .5 * x,
        B = 16 / x,
        F = new THREE.Vector2(B * D, B),
        R = new THREE.Vector3(1, 1, 0),
        H = new THREE.Vector2(1, 1);
      if (void 0 === s) {
        var B = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
          C = new Uint16Array([0, 1, 2, 0, 2, 3]);
        r = m.createBuffer();
        t = m.createBuffer();
        m.bindBuffer(m.ARRAY_BUFFER, r);
        m.bufferData(m.ARRAY_BUFFER, B, m.STATIC_DRAW);
        m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
          t);
        m.bufferData(m.ELEMENT_ARRAY_BUFFER, C, m.STATIC_DRAW);
        v = m.createTexture();
        y = m.createTexture();
        m.bindTexture(m.TEXTURE_2D, v);
        m.texImage2D(m.TEXTURE_2D, 0, m.RGB, 16, 16, 0, m.RGB, m.UNSIGNED_BYTE, null);
        m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
        m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
        m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
        m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST);
        m.bindTexture(m.TEXTURE_2D, y);
        m.texImage2D(m.TEXTURE_2D, 0,
          m.RGBA, 16, 16, 0, m.RGBA, m.UNSIGNED_BYTE, null);
        m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
        m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
        m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
        m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST);
        var B = (u = 0 < m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) ? {
            vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
            fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
          } : {
            vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
            fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
          },
          C = m.createProgram(),
          T = m.createShader(m.FRAGMENT_SHADER),
          Q = m.createShader(m.VERTEX_SHADER),
          O = "precision " + a.getPrecision() + " float;\n";
        m.shaderSource(T, O + B.fragmentShader);
        m.shaderSource(Q, O + B.vertexShader);
        m.compileShader(T);
        m.compileShader(Q);
        m.attachShader(C, T);
        m.attachShader(C, Q);
        m.linkProgram(C);
        s = C;
        p = m.getAttribLocation(s, "position");
        q = m.getAttribLocation(s, "uv");
        c = m.getUniformLocation(s, "renderType");
        d = m.getUniformLocation(s, "map");
        e = m.getUniformLocation(s, "occlusionMap");
        f = m.getUniformLocation(s,
          "opacity");
        g = m.getUniformLocation(s, "color");
        h = m.getUniformLocation(s, "scale");
        k = m.getUniformLocation(s, "rotation");
        n = m.getUniformLocation(s, "screenPosition")
      }
      m.useProgram(s);
      m.enableVertexAttribArray(p);
      m.enableVertexAttribArray(q);
      m.uniform1i(e, 0);
      m.uniform1i(d, 1);
      m.bindBuffer(m.ARRAY_BUFFER, r);
      m.vertexAttribPointer(p, 2, m.FLOAT, !1, 16, 0);
      m.vertexAttribPointer(q, 2, m.FLOAT, !1, 16, 8);
      m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, t);
      m.disable(m.CULL_FACE);
      m.depthMask(!1);
      C = 0;
      for (T = b.length; C < T; C++)
        if (B = 16 / x, F.set(B *
            D, B), Q = b[C], G.set(Q.matrixWorld.elements[12], Q.matrixWorld.elements[13], Q.matrixWorld.elements[14]), G.applyMatrix4(w.matrixWorldInverse), G.applyProjection(w.projectionMatrix), R.copy(G), H.x = R.x * E + E, H.y = R.y * A + A, u || 0 < H.x && H.x < K && 0 < H.y && H.y < x) {
          m.activeTexture(m.TEXTURE1);
          m.bindTexture(m.TEXTURE_2D, v);
          m.copyTexImage2D(m.TEXTURE_2D, 0, m.RGB, H.x - 8, H.y - 8, 16, 16, 0);
          m.uniform1i(c, 0);
          m.uniform2f(h, F.x, F.y);
          m.uniform3f(n, R.x, R.y, R.z);
          m.disable(m.BLEND);
          m.enable(m.DEPTH_TEST);
          m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT,
            0);
          m.activeTexture(m.TEXTURE0);
          m.bindTexture(m.TEXTURE_2D, y);
          m.copyTexImage2D(m.TEXTURE_2D, 0, m.RGBA, H.x - 8, H.y - 8, 16, 16, 0);
          m.uniform1i(c, 1);
          m.disable(m.DEPTH_TEST);
          m.activeTexture(m.TEXTURE1);
          m.bindTexture(m.TEXTURE_2D, v);
          m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0);
          Q.positionScreen.copy(R);
          Q.customUpdateCallback ? Q.customUpdateCallback(Q) : Q.updateLensFlares();
          m.uniform1i(c, 2);
          m.enable(m.BLEND);
          for (var O = 0, S = Q.lensFlares.length; O < S; O++) {
            var X = Q.lensFlares[O];
            .001 < X.opacity && .001 < X.scale && (R.x = X.x,
              R.y = X.y, R.z = X.z, B = X.size * X.scale / x, F.x = B * D, F.y = B, m.uniform3f(n, R.x, R.y, R.z), m.uniform2f(h, F.x, F.y), m.uniform1f(k, X.rotation), m.uniform1f(f, X.opacity), m.uniform3f(g, X.color.r, X.color.g, X.color.b), a.setBlending(X.blending, X.blendEquation, X.blendSrc, X.blendDst), a.setTexture(X.texture, 1), m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0))
          }
        } m.enable(m.CULL_FACE);
      m.enable(m.DEPTH_TEST);
      m.depthMask(!0);
      a.resetGLState()
    }
  }
};
THREE.ShadowMapPlugin = function (a, b, c, d) {
  function e(a, b, d) {
    if (b.visible) {
      var f = c[b.id];
      if (f && b.castShadow && (!1 === b.frustumCulled || !0 === p.intersectsObject(b)))
        for (var g = 0, h = f.length; g < h; g++) {
          var k = f[g];
          b._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, b.matrixWorld);
          s.push(k)
        }
      g = 0;
      for (h = b.children.length; g < h; g++) e(a, b.children[g], d)
    }
  }
  var f = a.context,
    g, h, k, n, p = new THREE.Frustum,
    q = new THREE.Matrix4,
    m = new THREE.Vector3,
    r = new THREE.Vector3,
    t = new THREE.Vector3,
    s = [],
    u = THREE.ShaderLib.depthRGBA,
    v = THREE.UniformsUtils.clone(u.uniforms);
  g = new THREE.ShaderMaterial({
    uniforms: v,
    vertexShader: u.vertexShader,
    fragmentShader: u.fragmentShader
  });
  h = new THREE.ShaderMaterial({
    uniforms: v,
    vertexShader: u.vertexShader,
    fragmentShader: u.fragmentShader,
    morphTargets: !0
  });
  k = new THREE.ShaderMaterial({
    uniforms: v,
    vertexShader: u.vertexShader,
    fragmentShader: u.fragmentShader,
    skinning: !0
  });
  n = new THREE.ShaderMaterial({
    uniforms: v,
    vertexShader: u.vertexShader,
    fragmentShader: u.fragmentShader,
    morphTargets: !0,
    skinning: !0
  });
  g._shadowPass = !0;
  h._shadowPass = !0;
  k._shadowPass = !0;
  n._shadowPass = !0;
  this.render = function (c, v) {
    if (!1 !== a.shadowMapEnabled) {
      var u, K, x, D, E, A, B, F, R = [];
      D = 0;
      f.clearColor(1, 1, 1, 1);
      f.disable(f.BLEND);
      f.enable(f.CULL_FACE);
      f.frontFace(f.CCW);
      a.shadowMapCullFace === THREE.CullFaceFront ? f.cullFace(f.FRONT) : f.cullFace(f.BACK);
      a.setDepthTest(!0);
      u = 0;
      for (K = b.length; u < K; u++)
        if (x = b[u], x.castShadow)
          if (x instanceof THREE.DirectionalLight && x.shadowCascade)
            for (E = 0; E < x.shadowCascadeCount; E++) {
              var H;
              if (x.shadowCascadeArray[E]) H = x.shadowCascadeArray[E];
              else {
                B = x;
                var C =
                  E;
                H = new THREE.DirectionalLight;
                H.isVirtual = !0;
                H.onlyShadow = !0;
                H.castShadow = !0;
                H.shadowCameraNear = B.shadowCameraNear;
                H.shadowCameraFar = B.shadowCameraFar;
                H.shadowCameraLeft = B.shadowCameraLeft;
                H.shadowCameraRight = B.shadowCameraRight;
                H.shadowCameraBottom = B.shadowCameraBottom;
                H.shadowCameraTop = B.shadowCameraTop;
                H.shadowCameraVisible = B.shadowCameraVisible;
                H.shadowDarkness = B.shadowDarkness;
                H.shadowBias = B.shadowCascadeBias[C];
                H.shadowMapWidth = B.shadowCascadeWidth[C];
                H.shadowMapHeight = B.shadowCascadeHeight[C];
                H.pointsWorld = [];
                H.pointsFrustum = [];
                F = H.pointsWorld;
                A = H.pointsFrustum;
                for (var T = 0; 8 > T; T++) F[T] = new THREE.Vector3, A[T] = new THREE.Vector3;
                F = B.shadowCascadeNearZ[C];
                B = B.shadowCascadeFarZ[C];
                A[0].set(-1, -1, F);
                A[1].set(1, -1, F);
                A[2].set(-1, 1, F);
                A[3].set(1, 1, F);
                A[4].set(-1, -1, B);
                A[5].set(1, -1, B);
                A[6].set(-1, 1, B);
                A[7].set(1, 1, B);
                H.originalCamera = v;
                A = new THREE.Gyroscope;
                A.position.copy(x.shadowCascadeOffset);
                A.add(H);
                A.add(H.target);
                v.add(A);
                x.shadowCascadeArray[E] = H;
                console.log("Created virtualLight", H)
              }
              C =
                x;
              F = E;
              B = C.shadowCascadeArray[F];
              B.position.copy(C.position);
              B.target.position.copy(C.target.position);
              B.lookAt(B.target);
              B.shadowCameraVisible = C.shadowCameraVisible;
              B.shadowDarkness = C.shadowDarkness;
              B.shadowBias = C.shadowCascadeBias[F];
              A = C.shadowCascadeNearZ[F];
              C = C.shadowCascadeFarZ[F];
              B = B.pointsFrustum;
              B[0].z = A;
              B[1].z = A;
              B[2].z = A;
              B[3].z = A;
              B[4].z = C;
              B[5].z = C;
              B[6].z = C;
              B[7].z = C;
              R[D] = H;
              D++
            } else R[D] = x, D++;
      u = 0;
      for (K = R.length; u < K; u++) {
        x = R[u];
        x.shadowMap || (E = THREE.LinearFilter, a.shadowMapType === THREE.PCFSoftShadowMap &&
          (E = THREE.NearestFilter), x.shadowMap = new THREE.WebGLRenderTarget(x.shadowMapWidth, x.shadowMapHeight, {
            minFilter: E,
            magFilter: E,
            format: THREE.RGBAFormat
          }), x.shadowMapSize = new THREE.Vector2(x.shadowMapWidth, x.shadowMapHeight), x.shadowMatrix = new THREE.Matrix4);
        if (!x.shadowCamera) {
          if (x instanceof THREE.SpotLight) x.shadowCamera = new THREE.PerspectiveCamera(x.shadowCameraFov, x.shadowMapWidth / x.shadowMapHeight, x.shadowCameraNear, x.shadowCameraFar);
          else if (x instanceof THREE.DirectionalLight) x.shadowCamera = new THREE.OrthographicCamera(x.shadowCameraLeft,
            x.shadowCameraRight, x.shadowCameraTop, x.shadowCameraBottom, x.shadowCameraNear, x.shadowCameraFar);
          else {
            console.error("Unsupported light type for shadow");
            continue
          }
          c.add(x.shadowCamera);
          !0 === c.autoUpdate && c.updateMatrixWorld()
        }
        x.shadowCameraVisible && !x.cameraHelper && (x.cameraHelper = new THREE.CameraHelper(x.shadowCamera), c.add(x.cameraHelper));
        if (x.isVirtual && H.originalCamera == v) {
          E = v;
          D = x.shadowCamera;
          A = x.pointsFrustum;
          B = x.pointsWorld;
          m.set(Infinity, Infinity, Infinity);
          r.set(-Infinity, -Infinity, -Infinity);
          for (C = 0; 8 > C; C++) F = B[C], F.copy(A[C]), F.unproject(E), F.applyMatrix4(D.matrixWorldInverse), F.x < m.x && (m.x = F.x), F.x > r.x && (r.x = F.x), F.y < m.y && (m.y = F.y), F.y > r.y && (r.y = F.y), F.z < m.z && (m.z = F.z), F.z > r.z && (r.z = F.z);
          D.left = m.x;
          D.right = r.x;
          D.top = r.y;
          D.bottom = m.y;
          D.updateProjectionMatrix()
        }
        D = x.shadowMap;
        A = x.shadowMatrix;
        E = x.shadowCamera;
        E.position.setFromMatrixPosition(x.matrixWorld);
        t.setFromMatrixPosition(x.target.matrixWorld);
        E.lookAt(t);
        E.updateMatrixWorld();
        E.matrixWorldInverse.getInverse(E.matrixWorld);
        x.cameraHelper &&
          (x.cameraHelper.visible = x.shadowCameraVisible);
        x.shadowCameraVisible && x.cameraHelper.update();
        A.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
        A.multiply(E.projectionMatrix);
        A.multiply(E.matrixWorldInverse);
        q.multiplyMatrices(E.projectionMatrix, E.matrixWorldInverse);
        p.setFromMatrix(q);
        a.setRenderTarget(D);
        a.clear();
        s.length = 0;
        e(c, c, E);
        x = 0;
        for (D = s.length; x < D; x++) B = s[x], A = B.object, B = B.buffer, C = A.material instanceof THREE.MeshFaceMaterial ? A.material.materials[0] : A.material, F = void 0 !== A.geometry.morphTargets &&
          0 < A.geometry.morphTargets.length && C.morphTargets, T = A instanceof THREE.SkinnedMesh && C.skinning, F = A.customDepthMaterial ? A.customDepthMaterial : T ? F ? n : k : F ? h : g, a.setMaterialFaces(C), B instanceof THREE.BufferGeometry ? a.renderBufferDirect(E, b, null, F, B, A) : a.renderBuffer(E, b, null, F, B, A);
        x = 0;
        for (D = d.length; x < D; x++) B = d[x], A = B.object, A.visible && A.castShadow && (A._modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, A.matrixWorld), a.renderImmediateObject(E, b, null, g, A))
      }
      u = a.getClearColor();
      K = a.getClearAlpha();
      f.clearColor(u.r,
        u.g, u.b, K);
      f.enable(f.BLEND);
      a.shadowMapCullFace === THREE.CullFaceFront && f.cullFace(f.BACK);
      a.resetGLState()
    }
  }
};
THREE.SpritePlugin = function (a, b) {
  var c, d, e, f, g, h, k, n, p, q, m, r, t, s, u, v, y;

  function G(a, b) {
    return a.z !== b.z ? b.z - a.z : b.id - a.id
  }
  var w = a.context,
    K, x, D, E;
  this.render = function (A, B) {
    if (0 !== b.length) {
      if (void 0 === D) {
        var F = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
          R = new Uint16Array([0, 1, 2, 0, 2, 3]);
        K = w.createBuffer();
        x = w.createBuffer();
        w.bindBuffer(w.ARRAY_BUFFER, K);
        w.bufferData(w.ARRAY_BUFFER, F, w.STATIC_DRAW);
        w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, x);
        w.bufferData(w.ELEMENT_ARRAY_BUFFER, R, w.STATIC_DRAW);
        var F = w.createProgram(),
          R = w.createShader(w.VERTEX_SHADER),
          H = w.createShader(w.FRAGMENT_SHADER);
        w.shaderSource(R, ["precision " + a.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
        w.shaderSource(H, ["precision " + a.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
        w.compileShader(R);
        w.compileShader(H);
        w.attachShader(F, R);
        w.attachShader(F, H);
        w.linkProgram(F);
        D = F;
        v = w.getAttribLocation(D, "position");
        y = w.getAttribLocation(D, "uv");
        c = w.getUniformLocation(D, "uvOffset");
        d = w.getUniformLocation(D, "uvScale");
        e = w.getUniformLocation(D, "rotation");
        f = w.getUniformLocation(D, "scale");
        g = w.getUniformLocation(D, "color");
        h = w.getUniformLocation(D, "map");
        k = w.getUniformLocation(D, "opacity");
        n = w.getUniformLocation(D, "modelViewMatrix");
        p = w.getUniformLocation(D, "projectionMatrix");
        q =
          w.getUniformLocation(D, "fogType");
        m = w.getUniformLocation(D, "fogDensity");
        r = w.getUniformLocation(D, "fogNear");
        t = w.getUniformLocation(D, "fogFar");
        s = w.getUniformLocation(D, "fogColor");
        u = w.getUniformLocation(D, "alphaTest");
        F = document.createElement("canvas");
        F.width = 8;
        F.height = 8;
        R = F.getContext("2d");
        R.fillStyle = "white";
        R.fillRect(0, 0, 8, 8);
        E = new THREE.Texture(F);
        E.needsUpdate = !0
      }
      w.useProgram(D);
      w.enableVertexAttribArray(v);
      w.enableVertexAttribArray(y);
      w.disable(w.CULL_FACE);
      w.enable(w.BLEND);
      w.bindBuffer(w.ARRAY_BUFFER,
        K);
      w.vertexAttribPointer(v, 2, w.FLOAT, !1, 16, 0);
      w.vertexAttribPointer(y, 2, w.FLOAT, !1, 16, 8);
      w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, x);
      w.uniformMatrix4fv(p, !1, B.projectionMatrix.elements);
      w.activeTexture(w.TEXTURE0);
      w.uniform1i(h, 0);
      R = F = 0;
      (H = A.fog) ? (w.uniform3f(s, H.color.r, H.color.g, H.color.b), H instanceof THREE.Fog ? (w.uniform1f(r, H.near), w.uniform1f(t, H.far), w.uniform1i(q, 1), R = F = 1) : H instanceof THREE.FogExp2 && (w.uniform1f(m, H.density), w.uniform1i(q, 2), R = F = 2)) : (w.uniform1i(q, 0), R = F = 0);
      for (var H = 0, C = b.length; H <
        C; H++) {
        var T = b[H];
        T._modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, T.matrixWorld);
        T.z = null === T.renderDepth ? -T._modelViewMatrix.elements[14] : T.renderDepth
      }
      b.sort(G);
      for (var Q = [], H = 0, C = b.length; H < C; H++) {
        var T = b[H],
          O = T.material;
        w.uniform1f(u, O.alphaTest);
        w.uniformMatrix4fv(n, !1, T._modelViewMatrix.elements);
        Q[0] = T.scale.x;
        Q[1] = T.scale.y;
        T = 0;
        A.fog && O.fog && (T = R);
        F !== T && (w.uniform1i(q, T), F = T);
        null !== O.map ? (w.uniform2f(c, O.map.offset.x, O.map.offset.y), w.uniform2f(d, O.map.repeat.x, O.map.repeat.y)) :
          (w.uniform2f(c, 0, 0), w.uniform2f(d, 1, 1));
        w.uniform1f(k, O.opacity);
        w.uniform3f(g, O.color.r, O.color.g, O.color.b);
        w.uniform1f(e, O.rotation);
        w.uniform2fv(f, Q);
        a.setBlending(O.blending, O.blendEquation, O.blendSrc, O.blendDst);
        a.setDepthTest(O.depthTest);
        a.setDepthWrite(O.depthWrite);
        O.map && O.map.image && O.map.image.width ? a.setTexture(O.map, 0) : a.setTexture(E, 0);
        w.drawElements(w.TRIANGLES, 6, w.UNSIGNED_SHORT, 0)
      }
      w.enable(w.CULL_FACE);
      a.resetGLState()
    }
  }
};
THREE.GeometryUtils = {
  merge: function (a, b, c) {
    console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
    var d;
    b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, b = b.geometry);
    a.merge(b, d, c)
  },
  center: function (a) {
    console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
    return a.center()
  }
};
THREE.ImageUtils = {
  crossOrigin: void 0,
  loadTexture: function (a, b, c, d) {
    var e = new THREE.ImageLoader;
    e.crossOrigin = this.crossOrigin;
    var f = new THREE.Texture(void 0, b);
    e.load(a, function (a) {
      f.image = a;
      f.needsUpdate = !0;
      c && c(f)
    }, void 0, function (a) {
      d && d(a)
    });
    f.sourceFile = a;
    return f
  },
  loadTextureCube: function (a, b, c, d) {
    var e = new THREE.ImageLoader;
    e.crossOrigin = this.crossOrigin;
    var f = new THREE.CubeTexture([], b);
    f.flipY = !1;
    var g = 0;
    b = function (b) {
      e.load(a[b], function (a) {
        f.images[b] = a;
        g += 1;
        6 === g && (f.needsUpdate = !0, c &&
          c(f))
      })
    };
    d = 0;
    for (var h = a.length; d < h; ++d) b(d);
    return f
  },
  loadCompressedTexture: function () {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
  },
  loadCompressedTextureCube: function () {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
  },
  getNormalMap: function (a, b) {
    var c = function (a) {
      var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
      return [a[0] / b, a[1] / b, a[2] / b]
    };
    b |= 1;
    var d = a.width,
      e = a.height,
      f = document.createElement("canvas");
    f.width = d;
    f.height = e;
    var g = f.getContext("2d");
    g.drawImage(a, 0, 0);
    for (var h = g.getImageData(0, 0, d, e).data, k = g.createImageData(d, e), n = k.data, p = 0; p < d; p++)
      for (var q = 0; q < e; q++) {
        var m = 0 > q - 1 ? 0 : q - 1,
          r = q + 1 > e - 1 ? e - 1 : q + 1,
          t = 0 > p - 1 ? 0 : p - 1,
          s = p + 1 > d - 1 ? d - 1 : p + 1,
          u = [],
          v = [0, 0, h[4 * (q * d + p)] / 255 * b];
        u.push([-1, 0, h[4 * (q * d + t)] / 255 * b]);
        u.push([-1, -1, h[4 * (m * d + t)] / 255 * b]);
        u.push([0, -1, h[4 * (m * d + p)] / 255 * b]);
        u.push([1, -1, h[4 * (m * d + s)] / 255 * b]);
        u.push([1, 0, h[4 * (q * d + s)] / 255 * b]);
        u.push([1, 1, h[4 * (r * d + s)] / 255 * b]);
        u.push([0, 1, h[4 * (r * d + p)] / 255 *
          b
        ]);
        u.push([-1, 1, h[4 * (r * d + t)] / 255 * b]);
        m = [];
        t = u.length;
        for (r = 0; r < t; r++) {
          var s = u[r],
            y = u[(r + 1) % t],
            s = [s[0] - v[0], s[1] - v[1], s[2] - v[2]],
            y = [y[0] - v[0], y[1] - v[1], y[2] - v[2]];
          m.push(c([s[1] * y[2] - s[2] * y[1], s[2] * y[0] - s[0] * y[2], s[0] * y[1] - s[1] * y[0]]))
        }
        u = [0, 0, 0];
        for (r = 0; r < m.length; r++) u[0] += m[r][0], u[1] += m[r][1], u[2] += m[r][2];
        u[0] /= m.length;
        u[1] /= m.length;
        u[2] /= m.length;
        v = 4 * (q * d + p);
        n[v] = (u[0] + 1) / 2 * 255 | 0;
        n[v + 1] = (u[1] + 1) / 2 * 255 | 0;
        n[v + 2] = 255 * u[2] | 0;
        n[v + 3] = 255
      }
    g.putImageData(k, 0, 0);
    return f
  },
  generateDataTexture: function (a,
    b, c) {
    var d = a * b,
      e = new Uint8Array(3 * d),
      f = Math.floor(255 * c.r),
      g = Math.floor(255 * c.g);
    c = Math.floor(255 * c.b);
    for (var h = 0; h < d; h++) e[3 * h] = f, e[3 * h + 1] = g, e[3 * h + 2] = c;
    a = new THREE.DataTexture(e, a, b, THREE.RGBFormat);
    a.needsUpdate = !0;
    return a
  }
};
THREE.SceneUtils = {
  createMultiMaterialObject: function (a, b) {
    for (var c = new THREE.Object3D, d = 0, e = b.length; d < e; d++) c.add(new THREE.Mesh(a, b[d]));
    return c
  },
  detach: function (a, b, c) {
    a.applyMatrix(b.matrixWorld);
    b.remove(a);
    c.add(a)
  },
  attach: function (a, b, c) {
    var d = new THREE.Matrix4;
    d.getInverse(c.matrixWorld);
    a.applyMatrix(d);
    b.remove(a);
    c.add(a)
  }
};
THREE.FontUtils = {
  faces: {},
  face: "helvetiker",
  weight: "normal",
  style: "normal",
  size: 150,
  divisions: 10,
  getFace: function () {
    try {
      return this.faces[this.face][this.weight][this.style]
    } catch (a) {
      throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing.";
    }
  },
  loadFace: function (a) {
    var b = a.familyName.toLowerCase();
    this.faces[b] = this.faces[b] || {};
    this.faces[b][a.cssFontWeight] = this.faces[b][a.cssFontWeight] || {};
    this.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
    return this.faces[b][a.cssFontWeight][a.cssFontStyle] =
      a
  },
  drawText: function (a) {
    var b = this.getFace(),
      c = this.size / b.resolution,
      d = 0,
      e = String(a).split(""),
      f = e.length,
      g = [];
    for (a = 0; a < f; a++) {
      var h = new THREE.Path,
        h = this.extractGlyphPoints(e[a], b, c, d, h),
        d = d + h.offset;
      g.push(h.path)
    }
    return {
      paths: g,
      offset: d / 2
    }
  },
  extractGlyphPoints: function (a, b, c, d, e) {
    var f = [],
      g, h, k, n, p, q, m, r, t, s, u, v = b.glyphs[a] || b.glyphs["?"];
    if (v) {
      if (v.o)
        for (b = v._cachedOutline || (v._cachedOutline = v.o.split(" ")), n = b.length, a = 0; a < n;) switch (k = b[a++], k) {
          case "m":
            k = b[a++] * c + d;
            p = b[a++] * c;
            e.moveTo(k, p);
            break;
          case "l":
            k = b[a++] * c + d;
            p = b[a++] * c;
            e.lineTo(k, p);
            break;
          case "q":
            k = b[a++] * c + d;
            p = b[a++] * c;
            r = b[a++] * c + d;
            t = b[a++] * c;
            e.quadraticCurveTo(r, t, k, p);
            if (g = f[f.length - 1])
              for (q = g.x, m = g.y, g = 1, h = this.divisions; g <= h; g++) {
                var y = g / h;
                THREE.Shape.Utils.b2(y, q, r, k);
                THREE.Shape.Utils.b2(y, m, t, p)
              }
            break;
          case "b":
            if (k = b[a++] * c + d, p = b[a++] * c, r = b[a++] * c + d, t = b[a++] * c, s = b[a++] * c + d, u = b[a++] * c, e.bezierCurveTo(r, t, s, u, k, p), g = f[f.length - 1])
              for (q = g.x, m = g.y, g = 1, h = this.divisions; g <= h; g++) y = g / h, THREE.Shape.Utils.b3(y, q, r, s, k), THREE.Shape.Utils.b3(y,
                m, t, u, p)
        }
      return {
        offset: v.ha * c,
        path: e
      }
    }
  }
};
THREE.FontUtils.generateShapes = function (a, b) {
  b = b || {};
  var c = void 0 !== b.curveSegments ? b.curveSegments : 4,
    d = void 0 !== b.font ? b.font : "helvetiker",
    e = void 0 !== b.weight ? b.weight : "normal",
    f = void 0 !== b.style ? b.style : "normal";
  THREE.FontUtils.size = void 0 !== b.size ? b.size : 100;
  THREE.FontUtils.divisions = c;
  THREE.FontUtils.face = d;
  THREE.FontUtils.weight = e;
  THREE.FontUtils.style = f;
  c = THREE.FontUtils.drawText(a).paths;
  d = [];
  e = 0;
  for (f = c.length; e < f; e++) Array.prototype.push.apply(d, c[e].toShapes());
  return d
};
(function (a) {
  var b = function (a) {
    for (var b = a.length, e = 0, f = b - 1, g = 0; g < b; f = g++) e += a[f].x * a[g].y - a[g].x * a[f].y;
    return .5 * e
  };
  a.Triangulate = function (a, d) {
    var e = a.length;
    if (3 > e) return null;
    var f = [],
      g = [],
      h = [],
      k, n, p;
    if (0 < b(a))
      for (n = 0; n < e; n++) g[n] = n;
    else
      for (n = 0; n < e; n++) g[n] = e - 1 - n;
    var q = 2 * e;
    for (n = e - 1; 2 < e;) {
      if (0 >= q--) {
        console.log("Warning, unable to triangulate polygon!");
        break
      }
      k = n;
      e <= k && (k = 0);
      n = k + 1;
      e <= n && (n = 0);
      p = n + 1;
      e <= p && (p = 0);
      var m;
      a: {
        var r = m = void 0,
          t = void 0,
          s = void 0,
          u = void 0,
          v = void 0,
          y = void 0,
          G = void 0,
          w = void 0,
          r = a[g[k]].x,
          t = a[g[k]].y,
          s = a[g[n]].x,
          u = a[g[n]].y,
          v = a[g[p]].x,
          y = a[g[p]].y;
        if (1E-10 > (s - r) * (y - t) - (u - t) * (v - r)) m = !1;
        else {
          var K = void 0,
            x = void 0,
            D = void 0,
            E = void 0,
            A = void 0,
            B = void 0,
            F = void 0,
            R = void 0,
            H = void 0,
            C = void 0,
            H = R = F = w = G = void 0,
            K = v - s,
            x = y - u,
            D = r - v,
            E = t - y,
            A = s - r,
            B = u - t;
          for (m = 0; m < e; m++)
            if (G = a[g[m]].x, w = a[g[m]].y, !(G === r && w === t || G === s && w === u || G === v && w === y) && (F = G - r, R = w - t, H = G - s, C = w - u, G -= v, w -= y, H = K * C - x * H, F = A * R - B * F, R = D * w - E * G, -1E-10 <= H && -1E-10 <= R && -1E-10 <= F)) {
              m = !1;
              break a
            } m = !0
        }
      }
      if (m) {
        f.push([a[g[k]], a[g[n]], a[g[p]]]);
        h.push([g[k], g[n], g[p]]);
        k = n;
        for (p = n + 1; p < e; k++, p++) g[k] = g[p];
        e--;
        q = 2 * e
      }
    }
    return d ? h : f
  };
  a.Triangulate.area = b;
  return a
})(THREE.FontUtils);
self._typeface_js = {
  faces: THREE.FontUtils.faces,
  loadFace: THREE.FontUtils.loadFace
};
THREE.typeface_js = self._typeface_js;
THREE.Audio = function (a) {
  THREE.Object3D.call(this);
  this.type = "Audio";
  this.context = a.context;
  this.source = this.context.createBufferSource();
  this.gain = this.context.createGain();
  this.gain.connect(this.context.destination);
  this.panner = this.context.createPanner();
  this.panner.connect(this.gain)
};
THREE.Audio.prototype = Object.create(THREE.Object3D.prototype);
THREE.Audio.prototype.load = function (a) {
  var b = this,
    c = new XMLHttpRequest;
  c.open("GET", a, !0);
  c.responseType = "arraybuffer";
  c.onload = function (a) {
    b.context.decodeAudioData(this.response, function (a) {
      b.source.buffer = a;
      b.source.connect(b.panner);
      b.source.start(0)
    })
  };
  c.send();
  return this
};
THREE.Audio.prototype.setLoop = function (a) {
  this.source.loop = a
};
THREE.Audio.prototype.setRefDistance = function (a) {
  this.panner.refDistance = a
};
THREE.Audio.prototype.setRolloffFactor = function (a) {
  this.panner.rolloffFactor = a
};
THREE.Audio.prototype.updateMatrixWorld = function () {
  var a = new THREE.Vector3;
  return function (b) {
    THREE.Object3D.prototype.updateMatrixWorld.call(this, b);
    a.setFromMatrixPosition(this.matrixWorld);
    this.panner.setPosition(a.x, a.y, a.z)
  }
}();
THREE.AudioListener = function () {
  THREE.Object3D.call(this);
  this.type = "AudioListener";
  this.context = new(window.AudioContext || window.webkitAudioContext)
};
THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype);
THREE.AudioListener.prototype.updateMatrixWorld = function () {
  var a = new THREE.Vector3,
    b = new THREE.Quaternion,
    c = new THREE.Vector3,
    d = new THREE.Vector3,
    e = new THREE.Vector3,
    f = new THREE.Vector3;
  return function (g) {
    THREE.Object3D.prototype.updateMatrixWorld.call(this, g);
    g = this.context.listener;
    this.matrixWorld.decompose(a, b, c);
    d.set(0, 0, -1).applyQuaternion(b);
    e.subVectors(a, f);
    g.setPosition(a.x, a.y, a.z);
    g.setOrientation(d.x, d.y, d.z, this.up.x, this.up.y, this.up.z);
    g.setVelocity(e.x, e.y, e.z);
    f.copy(a)
  }
}();
THREE.Curve = function () {};
THREE.Curve.prototype.getPoint = function (a) {
  console.log("Warning, getPoint() not implemented!");
  return null
};
THREE.Curve.prototype.getPointAt = function (a) {
  a = this.getUtoTmapping(a);
  return this.getPoint(a)
};
THREE.Curve.prototype.getPoints = function (a) {
  a || (a = 5);
  var b, c = [];
  for (b = 0; b <= a; b++) c.push(this.getPoint(b / a));
  return c
};
THREE.Curve.prototype.getSpacedPoints = function (a) {
  a || (a = 5);
  var b, c = [];
  for (b = 0; b <= a; b++) c.push(this.getPointAt(b / a));
  return c
};
THREE.Curve.prototype.getLength = function () {
  var a = this.getLengths();
  return a[a.length - 1]
};
THREE.Curve.prototype.getLengths = function (a) {
  a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
  if (this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate) return this.cacheArcLengths;
  this.needsUpdate = !1;
  var b = [],
    c, d = this.getPoint(0),
    e, f = 0;
  b.push(0);
  for (e = 1; e <= a; e++) c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
  return this.cacheArcLengths = b
};
THREE.Curve.prototype.updateArcLengths = function () {
  this.needsUpdate = !0;
  this.getLengths()
};
THREE.Curve.prototype.getUtoTmapping = function (a, b) {
  var c = this.getLengths(),
    d = 0,
    e = c.length,
    f;
  f = b ? b : a * c[e - 1];
  for (var g = 0, h = e - 1, k; g <= h;)
    if (d = Math.floor(g + (h - g) / 2), k = c[d] - f, 0 > k) g = d + 1;
    else if (0 < k) h = d - 1;
  else {
    h = d;
    break
  }
  d = h;
  if (c[d] == f) return d / (e - 1);
  g = c[d];
  return c = (d + (f - g) / (c[d + 1] - g)) / (e - 1)
};
THREE.Curve.prototype.getTangent = function (a) {
  var b = a - 1E-4;
  a += 1E-4;
  0 > b && (b = 0);
  1 < a && (a = 1);
  b = this.getPoint(b);
  return this.getPoint(a).clone().sub(b).normalize()
};
THREE.Curve.prototype.getTangentAt = function (a) {
  a = this.getUtoTmapping(a);
  return this.getTangent(a)
};
THREE.Curve.Utils = {
  tangentQuadraticBezier: function (a, b, c, d) {
    return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
  },
  tangentCubicBezier: function (a, b, c, d, e) {
    return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
  },
  tangentSpline: function (a, b, c, d, e) {
    return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
  },
  interpolate: function (a, b, c, d, e) {
    a = .5 * (c - a);
    d = .5 * (d - b);
    var f = e * e;
    return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
  }
};
THREE.Curve.create = function (a, b) {
  a.prototype = Object.create(THREE.Curve.prototype);
  a.prototype.getPoint = b;
  return a
};
THREE.CurvePath = function () {
  this.curves = [];
  this.bends = [];
  this.autoClose = !1
};
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.add = function (a) {
  this.curves.push(a)
};
THREE.CurvePath.prototype.checkConnection = function () {};
THREE.CurvePath.prototype.closePath = function () {
  var a = this.curves[0].getPoint(0),
    b = this.curves[this.curves.length - 1].getPoint(1);
  a.equals(b) || this.curves.push(new THREE.LineCurve(b, a))
};
THREE.CurvePath.prototype.getPoint = function (a) {
  var b = a * this.getLength(),
    c = this.getCurveLengths();
  for (a = 0; a < c.length;) {
    if (c[a] >= b) return b = c[a] - b, a = this.curves[a], b = 1 - b / a.getLength(), a.getPointAt(b);
    a++
  }
  return null
};
THREE.CurvePath.prototype.getLength = function () {
  var a = this.getCurveLengths();
  return a[a.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function () {
  if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
  var a = [],
    b = 0,
    c, d = this.curves.length;
  for (c = 0; c < d; c++) b += this.curves[c].getLength(), a.push(b);
  return this.cacheLengths = a
};
THREE.CurvePath.prototype.getBoundingBox = function () {
  var a = this.getPoints(),
    b, c, d, e, f, g;
  b = c = Number.NEGATIVE_INFINITY;
  e = f = Number.POSITIVE_INFINITY;
  var h, k, n, p, q = a[0] instanceof THREE.Vector3;
  p = q ? new THREE.Vector3 : new THREE.Vector2;
  k = 0;
  for (n = a.length; k < n; k++) h = a[k], h.x > b ? b = h.x : h.x < e && (e = h.x), h.y > c ? c = h.y : h.y < f && (f = h.y), q && (h.z > d ? d = h.z : h.z < g && (g = h.z)), p.add(h);
  a = {
    minX: e,
    minY: f,
    maxX: b,
    maxY: c
  };
  q && (a.maxZ = d, a.minZ = g);
  return a
};
THREE.CurvePath.prototype.createPointsGeometry = function (a) {
  a = this.getPoints(a, !0);
  return this.createGeometry(a)
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function (a) {
  a = this.getSpacedPoints(a, !0);
  return this.createGeometry(a)
};
THREE.CurvePath.prototype.createGeometry = function (a) {
  for (var b = new THREE.Geometry, c = 0; c < a.length; c++) b.vertices.push(new THREE.Vector3(a[c].x, a[c].y, a[c].z || 0));
  return b
};
THREE.CurvePath.prototype.addWrapPath = function (a) {
  this.bends.push(a)
};
THREE.CurvePath.prototype.getTransformedPoints = function (a, b) {
  var c = this.getPoints(a),
    d, e;
  b || (b = this.bends);
  d = 0;
  for (e = b.length; d < e; d++) c = this.getWrapPoints(c, b[d]);
  return c
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function (a, b) {
  var c = this.getSpacedPoints(a),
    d, e;
  b || (b = this.bends);
  d = 0;
  for (e = b.length; d < e; d++) c = this.getWrapPoints(c, b[d]);
  return c
};
THREE.CurvePath.prototype.getWrapPoints = function (a, b) {
  var c = this.getBoundingBox(),
    d, e, f, g, h, k;
  d = 0;
  for (e = a.length; d < e; d++) f = a[d], g = f.x, h = f.y, k = g / c.maxX, k = b.getUtoTmapping(k, g), g = b.getPoint(k), k = b.getTangent(k), k.set(-k.y, k.x).multiplyScalar(h), f.x = g.x + k.x, f.y = g.y + k.y;
  return a
};
THREE.Gyroscope = function () {
  THREE.Object3D.call(this)
};
THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld = function () {
  var a = new THREE.Vector3,
    b = new THREE.Quaternion,
    c = new THREE.Vector3,
    d = new THREE.Vector3,
    e = new THREE.Quaternion,
    f = new THREE.Vector3;
  return function (g) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || g) this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(d, e, f), this.matrix.decompose(a, b, c), this.matrixWorld.compose(d, b, f)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, g = !0;
    for (var h = 0, k = this.children.length; h < k; h++) this.children[h].updateMatrixWorld(g)
  }
}();
THREE.Path = function (a) {
  THREE.CurvePath.call(this);
  this.actions = [];
  a && this.fromPoints(a)
};
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.PathActions = {
  MOVE_TO: "moveTo",
  LINE_TO: "lineTo",
  QUADRATIC_CURVE_TO: "quadraticCurveTo",
  BEZIER_CURVE_TO: "bezierCurveTo",
  CSPLINE_THRU: "splineThru",
  ARC: "arc",
  ELLIPSE: "ellipse"
};
THREE.Path.prototype.fromPoints = function (a) {
  this.moveTo(a[0].x, a[0].y);
  for (var b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y)
};
THREE.Path.prototype.moveTo = function (a, b) {
  var c = Array.prototype.slice.call(arguments);
  this.actions.push({
    action: THREE.PathActions.MOVE_TO,
    args: c
  })
};
THREE.Path.prototype.lineTo = function (a, b) {
  var c = Array.prototype.slice.call(arguments),
    d = this.actions[this.actions.length - 1].args,
    d = new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a, b));
  this.curves.push(d);
  this.actions.push({
    action: THREE.PathActions.LINE_TO,
    args: c
  })
};
THREE.Path.prototype.quadraticCurveTo = function (a, b, c, d) {
  var e = Array.prototype.slice.call(arguments),
    f = this.actions[this.actions.length - 1].args,
    f = new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
  this.curves.push(f);
  this.actions.push({
    action: THREE.PathActions.QUADRATIC_CURVE_TO,
    args: e
  })
};
THREE.Path.prototype.bezierCurveTo = function (a, b, c, d, e, f) {
  var g = Array.prototype.slice.call(arguments),
    h = this.actions[this.actions.length - 1].args,
    h = new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length - 2], h[h.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d), new THREE.Vector2(e, f));
  this.curves.push(h);
  this.actions.push({
    action: THREE.PathActions.BEZIER_CURVE_TO,
    args: g
  })
};
THREE.Path.prototype.splineThru = function (a) {
  var b = Array.prototype.slice.call(arguments),
    c = this.actions[this.actions.length - 1].args,
    c = [new THREE.Vector2(c[c.length - 2], c[c.length - 1])];
  Array.prototype.push.apply(c, a);
  c = new THREE.SplineCurve(c);
  this.curves.push(c);
  this.actions.push({
    action: THREE.PathActions.CSPLINE_THRU,
    args: b
  })
};
THREE.Path.prototype.arc = function (a, b, c, d, e, f) {
  var g = this.actions[this.actions.length - 1].args;
  this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f)
};
THREE.Path.prototype.absarc = function (a, b, c, d, e, f) {
  this.absellipse(a, b, c, c, d, e, f)
};
THREE.Path.prototype.ellipse = function (a, b, c, d, e, f, g) {
  var h = this.actions[this.actions.length - 1].args;
  this.absellipse(a + h[h.length - 2], b + h[h.length - 1], c, d, e, f, g)
};
THREE.Path.prototype.absellipse = function (a, b, c, d, e, f, g) {
  var h = Array.prototype.slice.call(arguments),
    k = new THREE.EllipseCurve(a, b, c, d, e, f, g);
  this.curves.push(k);
  k = k.getPoint(1);
  h.push(k.x);
  h.push(k.y);
  this.actions.push({
    action: THREE.PathActions.ELLIPSE,
    args: h
  })
};
THREE.Path.prototype.getSpacedPoints = function (a, b) {
  a || (a = 40);
  for (var c = [], d = 0; d < a; d++) c.push(this.getPoint(d / a));
  return c
};
THREE.Path.prototype.getPoints = function (a, b) {
  if (this.useSpacedPoints) return console.log("tata"), this.getSpacedPoints(a, b);
  a = a || 12;
  var c = [],
    d, e, f, g, h, k, n, p, q, m, r, t, s;
  d = 0;
  for (e = this.actions.length; d < e; d++) switch (f = this.actions[d], g = f.action, f = f.args, g) {
    case THREE.PathActions.MOVE_TO:
      c.push(new THREE.Vector2(f[0], f[1]));
      break;
    case THREE.PathActions.LINE_TO:
      c.push(new THREE.Vector2(f[0], f[1]));
      break;
    case THREE.PathActions.QUADRATIC_CURVE_TO:
      h = f[2];
      k = f[3];
      q = f[0];
      m = f[1];
      0 < c.length ? (g = c[c.length - 1], r = g.x,
        t = g.y) : (g = this.actions[d - 1].args, r = g[g.length - 2], t = g[g.length - 1]);
      for (f = 1; f <= a; f++) s = f / a, g = THREE.Shape.Utils.b2(s, r, q, h), s = THREE.Shape.Utils.b2(s, t, m, k), c.push(new THREE.Vector2(g, s));
      break;
    case THREE.PathActions.BEZIER_CURVE_TO:
      h = f[4];
      k = f[5];
      q = f[0];
      m = f[1];
      n = f[2];
      p = f[3];
      0 < c.length ? (g = c[c.length - 1], r = g.x, t = g.y) : (g = this.actions[d - 1].args, r = g[g.length - 2], t = g[g.length - 1]);
      for (f = 1; f <= a; f++) s = f / a, g = THREE.Shape.Utils.b3(s, r, q, n, h), s = THREE.Shape.Utils.b3(s, t, m, p, k), c.push(new THREE.Vector2(g, s));
      break;
    case THREE.PathActions.CSPLINE_THRU:
      g =
        this.actions[d - 1].args;
      s = [new THREE.Vector2(g[g.length - 2], g[g.length - 1])];
      g = a * f[0].length;
      s = s.concat(f[0]);
      s = new THREE.SplineCurve(s);
      for (f = 1; f <= g; f++) c.push(s.getPointAt(f / g));
      break;
    case THREE.PathActions.ARC:
      h = f[0];
      k = f[1];
      m = f[2];
      n = f[3];
      g = f[4];
      q = !!f[5];
      r = g - n;
      t = 2 * a;
      for (f = 1; f <= t; f++) s = f / t, q || (s = 1 - s), s = n + s * r, g = h + m * Math.cos(s), s = k + m * Math.sin(s), c.push(new THREE.Vector2(g, s));
      break;
    case THREE.PathActions.ELLIPSE:
      for (h = f[0], k = f[1], m = f[2], p = f[3], n = f[4], g = f[5], q = !!f[6], r = g - n, t = 2 * a, f = 1; f <= t; f++) s = f / t, q ||
        (s = 1 - s), s = n + s * r, g = h + m * Math.cos(s), s = k + p * Math.sin(s), c.push(new THREE.Vector2(g, s))
  }
  d = c[c.length - 1];
  1E-10 > Math.abs(d.x - c[0].x) && 1E-10 > Math.abs(d.y - c[0].y) && c.splice(c.length - 1, 1);
  b && c.push(c[0]);
  return c
};
THREE.Path.prototype.toShapes = function (a, b) {
  function c(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) {
      var e = a[c],
        f = new THREE.Shape;
      f.actions = e.actions;
      f.curves = e.curves;
      b.push(f)
    }
    return b
  }

  function d(a, b) {
    for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
      var g = b[e],
        h = b[f],
        k = h.x - g.x,
        m = h.y - g.y;
      if (1E-10 < Math.abs(m)) {
        if (0 > m && (g = b[f], k = -k, h = b[e], m = -m), !(a.y < g.y || a.y > h.y))
          if (a.y == g.y) {
            if (a.x == g.x) return !0
          } else {
            e = m * (a.x - g.x) - k * (a.y - g.y);
            if (0 == e) return !0;
            0 > e || (d = !d)
          }
      } else if (a.y == g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <=
          h.x)) return !0
    }
    return d
  }
  var e = function (a) {
    var b, c, d, e, f = [],
      g = new THREE.Path;
    b = 0;
    for (c = a.length; b < c; b++) d = a[b], e = d.args, d = d.action, d == THREE.PathActions.MOVE_TO && 0 != g.actions.length && (f.push(g), g = new THREE.Path), g[d].apply(g, e);
    0 != g.actions.length && f.push(g);
    return f
  }(this.actions);
  if (0 == e.length) return [];
  if (!0 === b) return c(e);
  var f, g, h, k = [];
  if (1 == e.length) return g = e[0], h = new THREE.Shape, h.actions = g.actions, h.curves = g.curves, k.push(h), k;
  var n = !THREE.Shape.Utils.isClockWise(e[0].getPoints()),
    n = a ? !n : n;
  h = [];
  var p = [],
    q = [],
    m = 0,
    r;
  p[m] = void 0;
  q[m] = [];
  var t, s;
  t = 0;
  for (s = e.length; t < s; t++) g = e[t], r = g.getPoints(), f = THREE.Shape.Utils.isClockWise(r), (f = a ? !f : f) ? (!n && p[m] && m++, p[m] = {
    s: new THREE.Shape,
    p: r
  }, p[m].s.actions = g.actions, p[m].s.curves = g.curves, n && m++, q[m] = []) : q[m].push({
    h: g,
    p: r[0]
  });
  if (!p[0]) return c(e);
  if (1 < p.length) {
    t = !1;
    s = [];
    g = 0;
    for (e = p.length; g < e; g++) h[g] = [];
    g = 0;
    for (e = p.length; g < e; g++)
      for (f = q[g], n = 0; n < f.length; n++) {
        m = f[n];
        r = !0;
        for (var u = 0; u < p.length; u++) d(m.p, p[u].p) && (g != u && s.push({
          froms: g,
          tos: u,
          hole: n
        }), r ? (r = !1, h[u].push(m)) : t = !0);
        r && h[g].push(m)
      }
    0 < s.length && (t || (q = h))
  }
  t = 0;
  for (s = p.length; t < s; t++)
    for (h = p[t].s, k.push(h), g = q[t], e = 0, f = g.length; e < f; e++) h.holes.push(g[e].h);
  return k
};
THREE.Shape = function () {
  THREE.Path.apply(this, arguments);
  this.holes = []
};
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude = function (a) {
  return new THREE.ExtrudeGeometry(this, a)
};
THREE.Shape.prototype.makeGeometry = function (a) {
  return new THREE.ShapeGeometry(this, a)
};
THREE.Shape.prototype.getPointsHoles = function (a) {
  var b, c = this.holes.length,
    d = [];
  for (b = 0; b < c; b++) d[b] = this.holes[b].getTransformedPoints(a, this.bends);
  return d
};
THREE.Shape.prototype.getSpacedPointsHoles = function (a) {
  var b, c = this.holes.length,
    d = [];
  for (b = 0; b < c; b++) d[b] = this.holes[b].getTransformedSpacedPoints(a, this.bends);
  return d
};
THREE.Shape.prototype.extractAllPoints = function (a) {
  return {
    shape: this.getTransformedPoints(a),
    holes: this.getPointsHoles(a)
  }
};
THREE.Shape.prototype.extractPoints = function (a) {
  return this.useSpacedPoints ? this.extractAllSpacedPoints(a) : this.extractAllPoints(a)
};
THREE.Shape.prototype.extractAllSpacedPoints = function (a) {
  return {
    shape: this.getTransformedSpacedPoints(a),
    holes: this.getSpacedPointsHoles(a)
  }
};
THREE.Shape.Utils = {
  triangulateShape: function (a, b) {
    function c(a, b, c) {
      return a.x != b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
    }

    function d(a, b, d, e, f) {
      var g = b.x - a.x,
        h = b.y - a.y,
        k = e.x - d.x,
        n = e.y - d.y,
        p = a.x - d.x,
        q = a.y - d.y,
        D = h * k - g * n,
        E = h * p - g * q;
      if (1E-10 < Math.abs(D)) {
        if (0 < D) {
          if (0 > E || E > D) return [];
          k = n * p - k * q;
          if (0 > k || k > D) return []
        } else {
          if (0 < E || E < D) return [];
          k = n * p - k * q;
          if (0 < k || k < D) return []
        }
        if (0 == k) return !f || 0 != E && E != D ? [a] : [];
        if (k == D) return !f || 0 != E && E != D ? [b] : [];
        if (0 == E) return [d];
        if (E == D) return [e];
        f = k / D;
        return [{
          x: a.x + f * g,
          y: a.y + f * h
        }]
      }
      if (0 != E || n * p != k * q) return [];
      h = 0 == g && 0 == h;
      k = 0 == k && 0 == n;
      if (h && k) return a.x != d.x || a.y != d.y ? [] : [a];
      if (h) return c(d, e, a) ? [a] : [];
      if (k) return c(a, b, d) ? [d] : [];
      0 != g ? (a.x < b.x ? (g = a, k = a.x, h = b, a = b.x) : (g = b, k = b.x, h = a, a = a.x), d.x < e.x ? (b = d, D = d.x, n = e, d = e.x) : (b = e, D = e.x, n = d, d = d.x)) : (a.y < b.y ? (g = a, k = a.y, h = b, a = b.y) : (g = b, k = b.y, h = a, a = a.y), d.y < e.y ? (b = d, D = d.y, n = e, d = e.y) : (b = e, D = e.y, n = d, d = d.y));
      return k <= D ? a < D ? [] : a == D ? f ? [] : [b] : a <= d ? [b, h] : [b, n] : k > d ? [] : k == d ? f ? [] : [g] : a <= d ? [g, h] : [g, n]
    }

    function e(a, b, c, d) {
      var e = b.x - a.x,
        f = b.y - a.y;
      b = c.x - a.x;
      c = c.y - a.y;
      var g = d.x - a.x;
      d = d.y - a.y;
      a = e * c - f * b;
      e = e * d - f * g;
      return 1E-10 < Math.abs(a) ? (b = g * c - d * b, 0 < a ? 0 <= e && 0 <= b : 0 <= e || 0 <= b) : 0 < e
    }
    var f, g, h, k, n, p = {};
    h = a.concat();
    f = 0;
    for (g = b.length; f < g; f++) Array.prototype.push.apply(h, b[f]);
    f = 0;
    for (g = h.length; f < g; f++) n = h[f].x + ":" + h[f].y, void 0 !== p[n] && console.log("Duplicate point", n), p[n] = f;
    f = function (a, b) {
      function c(a, b) {
        var d = h.length - 1,
          f = a - 1;
        0 > f && (f = d);
        var g = a + 1;
        g > d && (g = 0);
        d = e(h[a], h[f], h[g], k[b]);
        if (!d) return !1;
        d = k.length - 1;
        f = b - 1;
        0 > f && (f = d);
        g = b + 1;
        g > d && (g = 0);
        return (d = e(k[b], k[f], k[g], h[a])) ? !0 : !1
      }

      function f(a, b) {
        var c, e;
        for (c = 0; c < h.length; c++)
          if (e = c + 1, e %= h.length, e = d(a, b, h[c], h[e], !0), 0 < e.length) return !0;
        return !1
      }

      function g(a, c) {
        var e, f, h, k;
        for (e = 0; e < n.length; e++)
          for (f = b[n[e]], h = 0; h < f.length; h++)
            if (k = h + 1, k %= f.length, k = d(a, c, f[h], f[k], !0), 0 < k.length) return !0;
        return !1
      }
      var h = a.concat(),
        k, n = [],
        p, q, x, D, E, A = [],
        B, F, R, H = 0;
      for (p = b.length; H < p; H++) n.push(H);
      B = 0;
      for (var C = 2 * n.length; 0 < n.length;) {
        C--;
        if (0 > C) {
          console.log("Infinite Loop! Holes left:" +
            n.length + ", Probably Hole outside Shape!");
          break
        }
        for (q = B; q < h.length; q++) {
          x = h[q];
          p = -1;
          for (H = 0; H < n.length; H++)
            if (D = n[H], E = x.x + ":" + x.y + ":" + D, void 0 === A[E]) {
              k = b[D];
              for (F = 0; F < k.length; F++)
                if (D = k[F], c(q, F) && !f(x, D) && !g(x, D)) {
                  p = F;
                  n.splice(H, 1);
                  B = h.slice(0, q + 1);
                  D = h.slice(q);
                  F = k.slice(p);
                  R = k.slice(0, p + 1);
                  h = B.concat(F).concat(R).concat(D);
                  B = q;
                  break
                } if (0 <= p) break;
              A[E] = !0
            } if (0 <= p) break
        }
      }
      return h
    }(a, b);
    var q = THREE.FontUtils.Triangulate(f, !1);
    f = 0;
    for (g = q.length; f < g; f++)
      for (k = q[f], h = 0; 3 > h; h++) n = k[h].x + ":" + k[h].y,
        n = p[n], void 0 !== n && (k[h] = n);
    return q.concat()
  },
  isClockWise: function (a) {
    return 0 > THREE.FontUtils.Triangulate.area(a)
  },
  b2p0: function (a, b) {
    var c = 1 - a;
    return c * c * b
  },
  b2p1: function (a, b) {
    return 2 * (1 - a) * a * b
  },
  b2p2: function (a, b) {
    return a * a * b
  },
  b2: function (a, b, c, d) {
    return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d)
  },
  b3p0: function (a, b) {
    var c = 1 - a;
    return c * c * c * b
  },
  b3p1: function (a, b) {
    var c = 1 - a;
    return 3 * c * c * a * b
  },
  b3p2: function (a, b) {
    return 3 * (1 - a) * a * a * b
  },
  b3p3: function (a, b) {
    return a * a * a * b
  },
  b3: function (a, b, c, d, e) {
    return this.b3p0(a,
      b) + this.b3p1(a, c) + this.b3p2(a, d) + this.b3p3(a, e)
  }
};
THREE.LineCurve = function (a, b) {
  this.v1 = a;
  this.v2 = b
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.getPoint = function (a) {
  var b = this.v2.clone().sub(this.v1);
  b.multiplyScalar(a).add(this.v1);
  return b
};
THREE.LineCurve.prototype.getPointAt = function (a) {
  return this.getPoint(a)
};
THREE.LineCurve.prototype.getTangent = function (a) {
  return this.v2.clone().sub(this.v1).normalize()
};
THREE.QuadraticBezierCurve = function (a, b, c) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint = function (a) {
  var b = new THREE.Vector2;
  b.x = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
  b.y = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
  return b
};
THREE.QuadraticBezierCurve.prototype.getTangent = function (a) {
  var b = new THREE.Vector2;
  b.x = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x);
  b.y = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y);
  return b.normalize()
};
THREE.CubicBezierCurve = function (a, b, c, d) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c;
  this.v3 = d
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint = function (a) {
  var b;
  b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  a = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  return new THREE.Vector2(b, a)
};
THREE.CubicBezierCurve.prototype.getTangent = function (a) {
  var b;
  b = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  a = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  b = new THREE.Vector2(b, a);
  b.normalize();
  return b
};
THREE.SplineCurve = function (a) {
  this.points = void 0 == a ? [] : a
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint = function (a) {
  var b = this.points;
  a *= b.length - 1;
  var c = Math.floor(a);
  a -= c;
  var d = b[0 == c ? c : c - 1],
    e = b[c],
    f = b[c > b.length - 2 ? b.length - 1 : c + 1],
    b = b[c > b.length - 3 ? b.length - 1 : c + 2],
    c = new THREE.Vector2;
  c.x = THREE.Curve.Utils.interpolate(d.x, e.x, f.x, b.x, a);
  c.y = THREE.Curve.Utils.interpolate(d.y, e.y, f.y, b.y, a);
  return c
};
THREE.EllipseCurve = function (a, b, c, d, e, f, g) {
  this.aX = a;
  this.aY = b;
  this.xRadius = c;
  this.yRadius = d;
  this.aStartAngle = e;
  this.aEndAngle = f;
  this.aClockwise = g
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint = function (a) {
  var b = this.aEndAngle - this.aStartAngle;
  0 > b && (b += 2 * Math.PI);
  b > 2 * Math.PI && (b -= 2 * Math.PI);
  a = !0 === this.aClockwise ? this.aEndAngle + (1 - a) * (2 * Math.PI - b) : this.aStartAngle + a * b;
  b = new THREE.Vector2;
  b.x = this.aX + this.xRadius * Math.cos(a);
  b.y = this.aY + this.yRadius * Math.sin(a);
  return b
};
THREE.ArcCurve = function (a, b, c, d, e, f) {
  THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.LineCurve3 = THREE.Curve.create(function (a, b) {
  this.v1 = a;
  this.v2 = b
}, function (a) {
  var b = new THREE.Vector3;
  b.subVectors(this.v2, this.v1);
  b.multiplyScalar(a);
  b.add(this.v1);
  return b
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (a, b, c) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c
}, function (a) {
  var b = new THREE.Vector3;
  b.x = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
  b.y = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
  b.z = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z);
  return b
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function (a, b, c, d) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c;
  this.v3 = d
}, function (a) {
  var b = new THREE.Vector3;
  b.x = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  b.y = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  b.z = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
  return b
});
THREE.SplineCurve3 = THREE.Curve.create(function (a) {
  this.points = void 0 == a ? [] : a
}, function (a) {
  var b = this.points;
  a *= b.length - 1;
  var c = Math.floor(a);
  a -= c;
  var d = b[0 == c ? c : c - 1],
    e = b[c],
    f = b[c > b.length - 2 ? b.length - 1 : c + 1],
    b = b[c > b.length - 3 ? b.length - 1 : c + 2],
    c = new THREE.Vector3;
  c.x = THREE.Curve.Utils.interpolate(d.x, e.x, f.x, b.x, a);
  c.y = THREE.Curve.Utils.interpolate(d.y, e.y, f.y, b.y, a);
  c.z = THREE.Curve.Utils.interpolate(d.z, e.z, f.z, b.z, a);
  return c
});
THREE.ClosedSplineCurve3 = THREE.Curve.create(function (a) {
  this.points = void 0 == a ? [] : a
}, function (a) {
  var b = this.points;
  a *= b.length - 0;
  var c = Math.floor(a);
  a -= c;
  var c = c + (0 < c ? 0 : (Math.floor(Math.abs(c) / b.length) + 1) * b.length),
    d = b[(c - 1) % b.length],
    e = b[c % b.length],
    f = b[(c + 1) % b.length],
    b = b[(c + 2) % b.length],
    c = new THREE.Vector3;
  c.x = THREE.Curve.Utils.interpolate(d.x, e.x, f.x, b.x, a);
  c.y = THREE.Curve.Utils.interpolate(d.y, e.y, f.y, b.y, a);
  c.z = THREE.Curve.Utils.interpolate(d.z, e.z, f.z, b.z, a);
  return c
});
THREE.AnimationHandler = {
  LINEAR: 0,
  CATMULLROM: 1,
  CATMULLROM_FORWARD: 2,
  add: function () {
    console.warn("THREE.AnimationHandler.add() has been deprecated.")
  },
  get: function () {
    console.warn("THREE.AnimationHandler.get() has been deprecated.")
  },
  remove: function () {
    console.warn("THREE.AnimationHandler.remove() has been deprecated.")
  },
  animations: [],
  init: function (a) {
    if (!0 !== a.initialized) {
      for (var b = 0; b < a.hierarchy.length; b++) {
        for (var c = 0; c < a.hierarchy[b].keys.length; c++)
          if (0 > a.hierarchy[b].keys[c].time && (a.hierarchy[b].keys[c].time =
              0), void 0 !== a.hierarchy[b].keys[c].rot && !(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)) {
            var d = a.hierarchy[b].keys[c].rot;
            a.hierarchy[b].keys[c].rot = (new THREE.Quaternion).fromArray(d)
          } if (a.hierarchy[b].keys.length && void 0 !== a.hierarchy[b].keys[0].morphTargets) {
          d = {};
          for (c = 0; c < a.hierarchy[b].keys.length; c++)
            for (var e = 0; e < a.hierarchy[b].keys[c].morphTargets.length; e++) {
              var f = a.hierarchy[b].keys[c].morphTargets[e];
              d[f] = -1
            }
          a.hierarchy[b].usedMorphTargets = d;
          for (c = 0; c < a.hierarchy[b].keys.length; c++) {
            var g = {};
            for (f in d) {
              for (e = 0; e < a.hierarchy[b].keys[c].morphTargets.length; e++)
                if (a.hierarchy[b].keys[c].morphTargets[e] === f) {
                  g[f] = a.hierarchy[b].keys[c].morphTargetsInfluences[e];
                  break
                } e === a.hierarchy[b].keys[c].morphTargets.length && (g[f] = 0)
            }
            a.hierarchy[b].keys[c].morphTargetsInfluences = g
          }
        }
        for (c = 1; c < a.hierarchy[b].keys.length; c++) a.hierarchy[b].keys[c].time === a.hierarchy[b].keys[c - 1].time && (a.hierarchy[b].keys.splice(c, 1), c--);
        for (c = 0; c < a.hierarchy[b].keys.length; c++) a.hierarchy[b].keys[c].index = c
      }
      a.initialized = !0;
      return a
    }
  },
  parse: function (a) {
    var b = function (a, c) {
        c.push(a);
        for (var d = 0; d < a.children.length; d++) b(a.children[d], c)
      },
      c = [];
    if (a instanceof THREE.SkinnedMesh)
      for (var d = 0; d < a.skeleton.bones.length; d++) c.push(a.skeleton.bones[d]);
    else b(a, c);
    return c
  },
  play: function (a) {
    -1 === this.animations.indexOf(a) && this.animations.push(a)
  },
  stop: function (a) {
    a = this.animations.indexOf(a); - 1 !== a && this.animations.splice(a, 1)
  },
  update: function (a) {
    for (var b = 0; b < this.animations.length; b++) this.animations[b].resetBlendWeights();
    for (b = 0; b < this.animations.length; b++) this.animations[b].update(a)
  }
};
THREE.Animation = function (a, b) {
  this.root = a;
  this.data = THREE.AnimationHandler.init(b);
  this.hierarchy = THREE.AnimationHandler.parse(a);
  this.currentTime = 0;
  this.timeScale = 1;
  this.isPlaying = !1;
  this.loop = !0;
  this.weight = 0;
  this.interpolationType = THREE.AnimationHandler.LINEAR
};
THREE.Animation.prototype.keyTypes = ["pos", "rot", "scl"];
THREE.Animation.prototype.play = function (a, b) {
  this.currentTime = void 0 !== a ? a : 0;
  this.weight = void 0 !== b ? b : 1;
  this.isPlaying = !0;
  this.reset();
  THREE.AnimationHandler.play(this)
};
THREE.Animation.prototype.stop = function () {
  this.isPlaying = !1;
  THREE.AnimationHandler.stop(this)
};
THREE.Animation.prototype.reset = function () {
  for (var a = 0, b = this.hierarchy.length; a < b; a++) {
    var c = this.hierarchy[a];
    c.matrixAutoUpdate = !0;
    void 0 === c.animationCache && (c.animationCache = {
      animations: {},
      blending: {
        positionWeight: 0,
        quaternionWeight: 0,
        scaleWeight: 0
      }
    });
    void 0 === c.animationCache.animations[this.data.name] && (c.animationCache.animations[this.data.name] = {}, c.animationCache.animations[this.data.name].prevKey = {
        pos: 0,
        rot: 0,
        scl: 0
      }, c.animationCache.animations[this.data.name].nextKey = {
        pos: 0,
        rot: 0,
        scl: 0
      },
      c.animationCache.animations[this.data.name].originalMatrix = c.matrix);
    for (var c = c.animationCache.animations[this.data.name], d = 0; 3 > d; d++) {
      for (var e = this.keyTypes[d], f = this.data.hierarchy[a].keys[0], g = this.getNextKeyWith(e, a, 1); g.time < this.currentTime && g.index > f.index;) f = g, g = this.getNextKeyWith(e, a, g.index + 1);
      c.prevKey[e] = f;
      c.nextKey[e] = g
    }
  }
};
THREE.Animation.prototype.resetBlendWeights = function () {
  for (var a = 0, b = this.hierarchy.length; a < b; a++) {
    var c = this.hierarchy[a];
    void 0 !== c.animationCache && (c.animationCache.blending.positionWeight = 0, c.animationCache.blending.quaternionWeight = 0, c.animationCache.blending.scaleWeight = 0)
  }
};
THREE.Animation.prototype.update = function () {
  var a = [],
    b = new THREE.Vector3,
    c = new THREE.Vector3,
    d = new THREE.Quaternion,
    e = function (a, b) {
      var c = [],
        d = [],
        e, q, m, r, t, s;
      e = (a.length - 1) * b;
      q = Math.floor(e);
      e -= q;
      c[0] = 0 === q ? q : q - 1;
      c[1] = q;
      c[2] = q > a.length - 2 ? q : q + 1;
      c[3] = q > a.length - 3 ? q : q + 2;
      q = a[c[0]];
      r = a[c[1]];
      t = a[c[2]];
      s = a[c[3]];
      c = e * e;
      m = e * c;
      d[0] = f(q[0], r[0], t[0], s[0], e, c, m);
      d[1] = f(q[1], r[1], t[1], s[1], e, c, m);
      d[2] = f(q[2], r[2], t[2], s[2], e, c, m);
      return d
    },
    f = function (a, b, c, d, e, f, m) {
      a = .5 * (c - a);
      d = .5 * (d - b);
      return (2 * (b - c) + a + d) * m +
        (-3 * (b - c) - 2 * a - d) * f + a * e + b
    };
  return function (f) {
    if (!1 !== this.isPlaying && (this.currentTime += f * this.timeScale, 0 !== this.weight)) {
      f = this.data.length;
      if (this.currentTime > f || 0 > this.currentTime)
        if (this.loop) this.currentTime %= f, 0 > this.currentTime && (this.currentTime += f), this.reset();
        else {
          this.stop();
          return
        } f = 0;
      for (var h = this.hierarchy.length; f < h; f++)
        for (var k = this.hierarchy[f], n = k.animationCache.animations[this.data.name], p = k.animationCache.blending, q = 0; 3 > q; q++) {
          var m = this.keyTypes[q],
            r = n.prevKey[m],
            t = n.nextKey[m];
          if (0 < this.timeScale && t.time <= this.currentTime || 0 > this.timeScale && r.time >= this.currentTime) {
            r = this.data.hierarchy[f].keys[0];
            for (t = this.getNextKeyWith(m, f, 1); t.time < this.currentTime && t.index > r.index;) r = t, t = this.getNextKeyWith(m, f, t.index + 1);
            n.prevKey[m] = r;
            n.nextKey[m] = t
          }
          k.matrixAutoUpdate = !0;
          k.matrixWorldNeedsUpdate = !0;
          var s = (this.currentTime - r.time) / (t.time - r.time),
            u = r[m],
            v = t[m];
          0 > s && (s = 0);
          1 < s && (s = 1);
          if ("pos" === m)
            if (this.interpolationType === THREE.AnimationHandler.LINEAR) c.x = u[0] + (v[0] - u[0]) * s, c.y =
              u[1] + (v[1] - u[1]) * s, c.z = u[2] + (v[2] - u[2]) * s, r = this.weight / (this.weight + p.positionWeight), k.position.lerp(c, r), p.positionWeight += this.weight;
            else {
              if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) a[0] = this.getPrevKeyWith("pos", f, r.index - 1).pos, a[1] = u, a[2] = v, a[3] = this.getNextKeyWith("pos", f, t.index + 1).pos, s = .33 * s + .33, t = e(a, s), r = this.weight / (this.weight + p.positionWeight), p.positionWeight += this.weight, m = k.position, m.x += (t[0] -
                m.x) * r, m.y += (t[1] - m.y) * r, m.z += (t[2] - m.z) * r, this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (s = e(a, 1.01 * s), b.set(s[0], s[1], s[2]), b.sub(m), b.y = 0, b.normalize(), s = Math.atan2(b.x, b.z), k.rotation.set(0, s, 0))
            }
          else "rot" === m ? (THREE.Quaternion.slerp(u, v, d, s), 0 === p.quaternionWeight ? (k.quaternion.copy(d), p.quaternionWeight = this.weight) : (r = this.weight / (this.weight + p.quaternionWeight), THREE.Quaternion.slerp(k.quaternion, d, k.quaternion, r), p.quaternionWeight += this.weight)) : "scl" === m && (c.x = u[0] +
            (v[0] - u[0]) * s, c.y = u[1] + (v[1] - u[1]) * s, c.z = u[2] + (v[2] - u[2]) * s, r = this.weight / (this.weight + p.scaleWeight), k.scale.lerp(c, r), p.scaleWeight += this.weight)
        }
      return !0
    }
  }
}();
THREE.Animation.prototype.getNextKeyWith = function (a, b, c) {
  var d = this.data.hierarchy[b].keys;
  for (c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c < d.length - 1 ? c : d.length - 1 : c % d.length; c < d.length; c++)
    if (void 0 !== d[c][a]) return d[c];
  return this.data.hierarchy[b].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function (a, b, c) {
  var d = this.data.hierarchy[b].keys;
  for (c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < c ? c : 0 : 0 <= c ? c : c + d.length; 0 <= c; c--)
    if (void 0 !== d[c][a]) return d[c];
  return this.data.hierarchy[b].keys[d.length - 1]
};
THREE.KeyFrameAnimation = function (a) {
  this.root = a.node;
  this.data = THREE.AnimationHandler.init(a);
  this.hierarchy = THREE.AnimationHandler.parse(this.root);
  this.currentTime = 0;
  this.timeScale = .001;
  this.isPlaying = !1;
  this.loop = this.isPaused = !0;
  a = 0;
  for (var b = this.hierarchy.length; a < b; a++) {
    var c = this.data.hierarchy[a].sids,
      d = this.hierarchy[a];
    if (this.data.hierarchy[a].keys.length && c) {
      for (var e = 0; e < c.length; e++) {
        var f = c[e],
          g = this.getNextKeyWith(f, a, 0);
        g && g.apply(f)
      }
      d.matrixAutoUpdate = !1;
      this.data.hierarchy[a].node.updateMatrix();
      d.matrixWorldNeedsUpdate = !0
    }
  }
};
THREE.KeyFrameAnimation.prototype.play = function (a) {
  this.currentTime = void 0 !== a ? a : 0;
  if (!1 === this.isPlaying) {
    this.isPlaying = !0;
    var b = this.hierarchy.length,
      c, d;
    for (a = 0; a < b; a++) c = this.hierarchy[a], d = this.data.hierarchy[a], void 0 === d.animationCache && (d.animationCache = {}, d.animationCache.prevKey = null, d.animationCache.nextKey = null, d.animationCache.originalMatrix = c.matrix), c = this.data.hierarchy[a].keys, c.length && (d.animationCache.prevKey = c[0], d.animationCache.nextKey = c[1], this.startTime = Math.min(c[0].time,
      this.startTime), this.endTime = Math.max(c[c.length - 1].time, this.endTime));
    this.update(0)
  }
  this.isPaused = !1;
  THREE.AnimationHandler.play(this)
};
THREE.KeyFrameAnimation.prototype.stop = function () {
  this.isPaused = this.isPlaying = !1;
  THREE.AnimationHandler.stop(this);
  for (var a = 0; a < this.data.hierarchy.length; a++) {
    var b = this.hierarchy[a],
      c = this.data.hierarchy[a];
    if (void 0 !== c.animationCache) {
      var d = c.animationCache.originalMatrix;
      d.copy(b.matrix);
      b.matrix = d;
      delete c.animationCache
    }
  }
};
THREE.KeyFrameAnimation.prototype.update = function (a) {
  if (!1 !== this.isPlaying) {
    this.currentTime += a * this.timeScale;
    a = this.data.length;
    !0 === this.loop && this.currentTime > a && (this.currentTime %= a);
    this.currentTime = Math.min(this.currentTime, a);
    a = 0;
    for (var b = this.hierarchy.length; a < b; a++) {
      var c = this.hierarchy[a],
        d = this.data.hierarchy[a],
        e = d.keys,
        d = d.animationCache;
      if (e.length) {
        var f = d.prevKey,
          g = d.nextKey;
        if (g.time <= this.currentTime) {
          for (; g.time < this.currentTime && g.index > f.index;) f = g, g = e[f.index + 1];
          d.prevKey =
            f;
          d.nextKey = g
        }
        g.time >= this.currentTime ? f.interpolate(g, this.currentTime) : f.interpolate(g, g.time);
        this.data.hierarchy[a].node.updateMatrix();
        c.matrixWorldNeedsUpdate = !0
      }
    }
  }
};
THREE.KeyFrameAnimation.prototype.getNextKeyWith = function (a, b, c) {
  b = this.data.hierarchy[b].keys;
  for (c %= b.length; c < b.length; c++)
    if (b[c].hasTarget(a)) return b[c];
  return b[0]
};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function (a, b, c) {
  b = this.data.hierarchy[b].keys;
  for (c = 0 <= c ? c : c + b.length; 0 <= c; c--)
    if (b[c].hasTarget(a)) return b[c];
  return b[b.length - 1]
};
THREE.MorphAnimation = function (a) {
  this.mesh = a;
  this.frames = a.morphTargetInfluences.length;
  this.currentTime = 0;
  this.duration = 1E3;
  this.loop = !0;
  this.isPlaying = !1
};
THREE.MorphAnimation.prototype = {
  play: function () {
    this.isPlaying = !0
  },
  pause: function () {
    this.isPlaying = !1
  },
  update: function () {
    var a = 0,
      b = 0;
    return function (c) {
      if (!1 !== this.isPlaying) {
        this.currentTime += c;
        !0 === this.loop && this.currentTime > this.duration && (this.currentTime %= this.duration);
        this.currentTime = Math.min(this.currentTime, this.duration);
        c = this.duration / this.frames;
        var d = Math.floor(this.currentTime / c);
        d != b && (this.mesh.morphTargetInfluences[a] = 0, this.mesh.morphTargetInfluences[b] = 1, this.mesh.morphTargetInfluences[d] =
          0, a = b, b = d);
        this.mesh.morphTargetInfluences[d] = this.currentTime % c / c;
        this.mesh.morphTargetInfluences[a] = 1 - this.mesh.morphTargetInfluences[d]
      }
    }
  }()
};
THREE.BoxGeometry = function (a, b, c, d, e, f) {
  function g(a, b, c, d, e, f, g, s) {
    var u, v = h.widthSegments,
      y = h.heightSegments,
      G = e / 2,
      w = f / 2,
      K = h.vertices.length;
    if ("x" === a && "y" === b || "y" === a && "x" === b) u = "z";
    else if ("x" === a && "z" === b || "z" === a && "x" === b) u = "y", y = h.depthSegments;
    else if ("z" === a && "y" === b || "y" === a && "z" === b) u = "x", v = h.depthSegments;
    var x = v + 1,
      D = y + 1,
      E = e / v,
      A = f / y,
      B = new THREE.Vector3;
    B[u] = 0 < g ? 1 : -1;
    for (e = 0; e < D; e++)
      for (f = 0; f < x; f++) {
        var F = new THREE.Vector3;
        F[a] = (f * E - G) * c;
        F[b] = (e * A - w) * d;
        F[u] = g;
        h.vertices.push(F)
      }
    for (e =
      0; e < y; e++)
      for (f = 0; f < v; f++) w = f + x * e, a = f + x * (e + 1), b = f + 1 + x * (e + 1), c = f + 1 + x * e, d = new THREE.Vector2(f / v, 1 - e / y), g = new THREE.Vector2(f / v, 1 - (e + 1) / y), u = new THREE.Vector2((f + 1) / v, 1 - (e + 1) / y), G = new THREE.Vector2((f + 1) / v, 1 - e / y), w = new THREE.Face3(w + K, a + K, c + K), w.normal.copy(B), w.vertexNormals.push(B.clone(), B.clone(), B.clone()), w.materialIndex = s, h.faces.push(w), h.faceVertexUvs[0].push([d, g, G]), w = new THREE.Face3(a + K, b + K, c + K), w.normal.copy(B), w.vertexNormals.push(B.clone(), B.clone(), B.clone()), w.materialIndex = s, h.faces.push(w),
        h.faceVertexUvs[0].push([g.clone(), u, G.clone()])
  }
  THREE.Geometry.call(this);
  this.type = "BoxGeometry";
  this.parameters = {
    width: a,
    height: b,
    depth: c,
    widthSegments: d,
    heightSegments: e,
    depthSegments: f
  };
  this.widthSegments = d || 1;
  this.heightSegments = e || 1;
  this.depthSegments = f || 1;
  var h = this;
  d = a / 2;
  e = b / 2;
  f = c / 2;
  g("z", "y", -1, -1, c, b, d, 0);
  g("z", "y", 1, -1, c, b, -d, 1);
  g("x", "z", 1, 1, a, c, e, 2);
  g("x", "z", 1, -1, a, c, -e, 3);
  g("x", "y", 1, -1, a, b, f, 4);
  g("x", "y", -1, -1, a, b, -f, 5);
  this.mergeVertices()
};
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry = function (a, b, c, d) {
  THREE.Geometry.call(this);
  this.type = "CircleGeometry";
  this.parameters = {
    radius: a,
    segments: b,
    thetaStart: c,
    thetaLength: d
  };
  a = a || 50;
  b = void 0 !== b ? Math.max(3, b) : 8;
  c = void 0 !== c ? c : 0;
  d = void 0 !== d ? d : 2 * Math.PI;
  var e, f = [];
  e = new THREE.Vector3;
  var g = new THREE.Vector2(.5, .5);
  this.vertices.push(e);
  f.push(g);
  for (e = 0; e <= b; e++) {
    var h = new THREE.Vector3,
      k = c + e / b * d;
    h.x = a * Math.cos(k);
    h.y = a * Math.sin(k);
    this.vertices.push(h);
    f.push(new THREE.Vector2((h.x / a + 1) / 2, (h.y / a + 1) / 2))
  }
  c = new THREE.Vector3(0,
    0, 1);
  for (e = 1; e <= b; e++) this.faces.push(new THREE.Face3(e, e + 1, 0, [c.clone(), c.clone(), c.clone()])), this.faceVertexUvs[0].push([f[e].clone(), f[e + 1].clone(), g.clone()]);
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry = function (a, b, c, d, e, f) {
  console.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry.");
  return new THREE.BoxGeometry(a, b, c, d, e, f)
};
THREE.CylinderGeometry = function (a, b, c, d, e, f) {
  THREE.Geometry.call(this);
  this.type = "CylinderGeometry";
  this.parameters = {
    radiusTop: a,
    radiusBottom: b,
    height: c,
    radialSegments: d,
    heightSegments: e,
    openEnded: f
  };
  a = void 0 !== a ? a : 20;
  b = void 0 !== b ? b : 20;
  c = void 0 !== c ? c : 100;
  d = d || 8;
  e = e || 1;
  f = void 0 !== f ? f : !1;
  var g = c / 2,
    h, k, n = [],
    p = [];
  for (k = 0; k <= e; k++) {
    var q = [],
      m = [],
      r = k / e,
      t = r * (b - a) + a;
    for (h = 0; h <= d; h++) {
      var s = h / d,
        u = new THREE.Vector3;
      u.x = t * Math.sin(s * Math.PI * 2);
      u.y = -r * c + g;
      u.z = t * Math.cos(s * Math.PI * 2);
      this.vertices.push(u);
      q.push(this.vertices.length -
        1);
      m.push(new THREE.Vector2(s, 1 - r))
    }
    n.push(q);
    p.push(m)
  }
  c = (b - a) / c;
  for (h = 0; h < d; h++)
    for (0 !== a ? (q = this.vertices[n[0][h]].clone(), m = this.vertices[n[0][h + 1]].clone()) : (q = this.vertices[n[1][h]].clone(), m = this.vertices[n[1][h + 1]].clone()), q.setY(Math.sqrt(q.x * q.x + q.z * q.z) * c).normalize(), m.setY(Math.sqrt(m.x * m.x + m.z * m.z) * c).normalize(), k = 0; k < e; k++) {
      var r = n[k][h],
        t = n[k + 1][h],
        s = n[k + 1][h + 1],
        u = n[k][h + 1],
        v = q.clone(),
        y = q.clone(),
        G = m.clone(),
        w = m.clone(),
        K = p[k][h].clone(),
        x = p[k + 1][h].clone(),
        D = p[k + 1][h + 1].clone(),
        E = p[k][h + 1].clone();
      this.faces.push(new THREE.Face3(r, t, u, [v, y, w]));
      this.faceVertexUvs[0].push([K, x, E]);
      this.faces.push(new THREE.Face3(t, s, u, [y.clone(), G, w.clone()]));
      this.faceVertexUvs[0].push([x.clone(), D, E.clone()])
    }
  if (!1 === f && 0 < a)
    for (this.vertices.push(new THREE.Vector3(0, g, 0)), h = 0; h < d; h++) r = n[0][h], t = n[0][h + 1], s = this.vertices.length - 1, v = new THREE.Vector3(0, 1, 0), y = new THREE.Vector3(0, 1, 0), G = new THREE.Vector3(0, 1, 0), K = p[0][h].clone(), x = p[0][h + 1].clone(), D = new THREE.Vector2(x.x, 0), this.faces.push(new THREE.Face3(r,
      t, s, [v, y, G])), this.faceVertexUvs[0].push([K, x, D]);
  if (!1 === f && 0 < b)
    for (this.vertices.push(new THREE.Vector3(0, -g, 0)), h = 0; h < d; h++) r = n[k][h + 1], t = n[k][h], s = this.vertices.length - 1, v = new THREE.Vector3(0, -1, 0), y = new THREE.Vector3(0, -1, 0), G = new THREE.Vector3(0, -1, 0), K = p[k][h + 1].clone(), x = p[k][h].clone(), D = new THREE.Vector2(x.x, 1), this.faces.push(new THREE.Face3(r, t, s, [v, y, G])), this.faceVertexUvs[0].push([K, x, D]);
  this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry = function (a, b) {
  "undefined" !== typeof a && (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", a = a instanceof Array ? a : [a], this.addShapeList(a, b), this.computeFaceNormals())
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.addShapeList = function (a, b) {
  for (var c = a.length, d = 0; d < c; d++) this.addShape(a[d], b)
};
THREE.ExtrudeGeometry.prototype.addShape = function (a, b) {
  function c(a, b, c) {
    b || console.log("die");
    return b.clone().multiplyScalar(c).add(a)
  }

  function d(a, b, c) {
    var d = 1,
      d = a.x - b.x,
      e = a.y - b.y,
      f = c.x - a.x,
      g = c.y - a.y,
      h = d * d + e * e;
    if (1E-10 < Math.abs(d * g - e * f)) {
      var k = Math.sqrt(h),
        m = Math.sqrt(f * f + g * g),
        h = b.x - e / k;
      b = b.y + d / k;
      f = ((c.x - g / m - h) * g - (c.y + f / m - b) * f) / (d * g - e * f);
      c = h + d * f - a.x;
      a = b + e * f - a.y;
      d = c * c + a * a;
      if (2 >= d) return new THREE.Vector2(c, a);
      d = Math.sqrt(d / 2)
    } else a = !1, 1E-10 < d ? 1E-10 < f && (a = !0) : -1E-10 > d ? -1E-10 > f && (a = !0) : Math.sign(e) ==
      Math.sign(g) && (a = !0), a ? (c = -e, a = d, d = Math.sqrt(h)) : (c = d, a = e, d = Math.sqrt(h / 2));
    return new THREE.Vector2(c / d, a / d)
  }

  function e(a, b) {
    var c, d;
    for (P = a.length; 0 <= --P;) {
      c = P;
      d = P - 1;
      0 > d && (d = a.length - 1);
      for (var e = 0, f = r + 2 * p, e = 0; e < f; e++) {
        var g = la * e,
          h = la * (e + 1),
          k = b + c + g,
          g = b + d + g,
          m = b + d + h,
          h = b + c + h,
          k = k + R,
          g = g + R,
          m = m + R,
          h = h + R;
        F.faces.push(new THREE.Face3(k, g, h, null, null, y));
        F.faces.push(new THREE.Face3(g, m, h, null, null, y));
        k = G.generateSideWallUV(F, k, g, m, h);
        F.faceVertexUvs[0].push([k[0], k[1], k[3]]);
        F.faceVertexUvs[0].push([k[1],
          k[2], k[3]
        ])
      }
    }
  }

  function f(a, b, c) {
    F.vertices.push(new THREE.Vector3(a, b, c))
  }

  function g(a, b, c) {
    a += R;
    b += R;
    c += R;
    F.faces.push(new THREE.Face3(a, b, c, null, null, v));
    a = G.generateTopUV(F, a, b, c);
    F.faceVertexUvs[0].push(a)
  }
  var h = void 0 !== b.amount ? b.amount : 100,
    k = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
    n = void 0 !== b.bevelSize ? b.bevelSize : k - 2,
    p = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
    q = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
    m = void 0 !== b.curveSegments ? b.curveSegments : 12,
    r = void 0 !== b.steps ? b.steps : 1,
    t = b.extrudePath,
    s, u = !1,
    v = b.material,
    y = b.extrudeMaterial,
    G = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator,
    w, K, x, D;
  t && (s = t.getSpacedPoints(r), u = !0, q = !1, w = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(t, r, !1), K = new THREE.Vector3, x = new THREE.Vector3, D = new THREE.Vector3);
  q || (n = k = p = 0);
  var E, A, B, F = this,
    R = this.vertices.length,
    t = a.extractPoints(m),
    m = t.shape,
    H = t.holes;
  if (t = !THREE.Shape.Utils.isClockWise(m)) {
    m = m.reverse();
    A = 0;
    for (B = H.length; A < B; A++) E = H[A], THREE.Shape.Utils.isClockWise(E) &&
      (H[A] = E.reverse());
    t = !1
  }
  var C = THREE.Shape.Utils.triangulateShape(m, H),
    T = m;
  A = 0;
  for (B = H.length; A < B; A++) E = H[A], m = m.concat(E);
  var Q, O, S, X, Y, la = m.length,
    ma, ya = C.length,
    t = [],
    P = 0;
  S = T.length;
  Q = S - 1;
  for (O = P + 1; P < S; P++, Q++, O++) Q === S && (Q = 0), O === S && (O = 0), t[P] = d(T[P], T[Q], T[O]);
  var Ga = [],
    Fa, za = t.concat();
  A = 0;
  for (B = H.length; A < B; A++) {
    E = H[A];
    Fa = [];
    P = 0;
    S = E.length;
    Q = S - 1;
    for (O = P + 1; P < S; P++, Q++, O++) Q === S && (Q = 0), O === S && (O = 0), Fa[P] = d(E[P], E[Q], E[O]);
    Ga.push(Fa);
    za = za.concat(Fa)
  }
  for (Q = 0; Q < p; Q++) {
    S = Q / p;
    X = k * (1 - S);
    O = n * Math.sin(S *
      Math.PI / 2);
    P = 0;
    for (S = T.length; P < S; P++) Y = c(T[P], t[P], O), f(Y.x, Y.y, -X);
    A = 0;
    for (B = H.length; A < B; A++)
      for (E = H[A], Fa = Ga[A], P = 0, S = E.length; P < S; P++) Y = c(E[P], Fa[P], O), f(Y.x, Y.y, -X)
  }
  O = n;
  for (P = 0; P < la; P++) Y = q ? c(m[P], za[P], O) : m[P], u ? (x.copy(w.normals[0]).multiplyScalar(Y.x), K.copy(w.binormals[0]).multiplyScalar(Y.y), D.copy(s[0]).add(x).add(K), f(D.x, D.y, D.z)) : f(Y.x, Y.y, 0);
  for (S = 1; S <= r; S++)
    for (P = 0; P < la; P++) Y = q ? c(m[P], za[P], O) : m[P], u ? (x.copy(w.normals[S]).multiplyScalar(Y.x), K.copy(w.binormals[S]).multiplyScalar(Y.y),
      D.copy(s[S]).add(x).add(K), f(D.x, D.y, D.z)) : f(Y.x, Y.y, h / r * S);
  for (Q = p - 1; 0 <= Q; Q--) {
    S = Q / p;
    X = k * (1 - S);
    O = n * Math.sin(S * Math.PI / 2);
    P = 0;
    for (S = T.length; P < S; P++) Y = c(T[P], t[P], O), f(Y.x, Y.y, h + X);
    A = 0;
    for (B = H.length; A < B; A++)
      for (E = H[A], Fa = Ga[A], P = 0, S = E.length; P < S; P++) Y = c(E[P], Fa[P], O), u ? f(Y.x, Y.y + s[r - 1].y, s[r - 1].x + X) : f(Y.x, Y.y, h + X)
  }(function () {
    if (q) {
      var a;
      a = 0 * la;
      for (P = 0; P < ya; P++) ma = C[P], g(ma[2] + a, ma[1] + a, ma[0] + a);
      a = r + 2 * p;
      a *= la;
      for (P = 0; P < ya; P++) ma = C[P], g(ma[0] + a, ma[1] + a, ma[2] + a)
    } else {
      for (P = 0; P < ya; P++) ma = C[P], g(ma[2],
        ma[1], ma[0]);
      for (P = 0; P < ya; P++) ma = C[P], g(ma[0] + la * r, ma[1] + la * r, ma[2] + la * r)
    }
  })();
  (function () {
    var a = 0;
    e(T, a);
    a += T.length;
    A = 0;
    for (B = H.length; A < B; A++) E = H[A], e(E, a), a += E.length
  })()
};
THREE.ExtrudeGeometry.WorldUVGenerator = {
  generateTopUV: function (a, b, c, d) {
    a = a.vertices;
    b = a[b];
    c = a[c];
    d = a[d];
    return [new THREE.Vector2(b.x, b.y), new THREE.Vector2(c.x, c.y), new THREE.Vector2(d.x, d.y)]
  },
  generateSideWallUV: function (a, b, c, d, e) {
    a = a.vertices;
    b = a[b];
    c = a[c];
    d = a[d];
    e = a[e];
    return .01 > Math.abs(b.y - c.y) ? [new THREE.Vector2(b.x, 1 - b.z), new THREE.Vector2(c.x, 1 - c.z), new THREE.Vector2(d.x, 1 - d.z), new THREE.Vector2(e.x, 1 - e.z)] : [new THREE.Vector2(b.y, 1 - b.z), new THREE.Vector2(c.y, 1 - c.z), new THREE.Vector2(d.y,
      1 - d.z), new THREE.Vector2(e.y, 1 - e.z)]
  }
};
THREE.ShapeGeometry = function (a, b) {
  THREE.Geometry.call(this);
  this.type = "ShapeGeometry";
  !1 === a instanceof Array && (a = [a]);
  this.addShapeList(a, b);
  this.computeFaceNormals()
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.addShapeList = function (a, b) {
  for (var c = 0, d = a.length; c < d; c++) this.addShape(a[c], b);
  return this
};
THREE.ShapeGeometry.prototype.addShape = function (a, b) {
  void 0 === b && (b = {});
  var c = b.material,
    d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator,
    e, f, g, h = this.vertices.length;
  e = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
  var k = e.shape,
    n = e.holes;
  if (!THREE.Shape.Utils.isClockWise(k))
    for (k = k.reverse(), e = 0, f = n.length; e < f; e++) g = n[e], THREE.Shape.Utils.isClockWise(g) && (n[e] = g.reverse());
  var p = THREE.Shape.Utils.triangulateShape(k, n);
  e = 0;
  for (f = n.length; e < f; e++) g = n[e],
    k = k.concat(g);
  n = k.length;
  f = p.length;
  for (e = 0; e < n; e++) g = k[e], this.vertices.push(new THREE.Vector3(g.x, g.y, 0));
  for (e = 0; e < f; e++) n = p[e], k = n[0] + h, g = n[1] + h, n = n[2] + h, this.faces.push(new THREE.Face3(k, g, n, null, null, c)), this.faceVertexUvs[0].push(d.generateTopUV(this, k, g, n))
};
THREE.LatheGeometry = function (a, b, c, d) {
  THREE.Geometry.call(this);
  this.type = "LatheGeometry";
  this.parameters = {
    points: a,
    segments: b,
    phiStart: c,
    phiLength: d
  };
  b = b || 12;
  c = c || 0;
  d = d || 2 * Math.PI;
  for (var e = 1 / (a.length - 1), f = 1 / b, g = 0, h = b; g <= h; g++)
    for (var k = c + g * f * d, n = Math.cos(k), p = Math.sin(k), k = 0, q = a.length; k < q; k++) {
      var m = a[k],
        r = new THREE.Vector3;
      r.x = n * m.x - p * m.y;
      r.y = p * m.x + n * m.y;
      r.z = m.z;
      this.vertices.push(r)
    }
  c = a.length;
  g = 0;
  for (h = b; g < h; g++)
    for (k = 0, q = a.length - 1; k < q; k++) {
      b = p = k + c * g;
      d = p + c;
      var n = p + 1 + c,
        p = p + 1,
        m = g * f,
        r = k * e,
        t =
        m + f,
        s = r + e;
      this.faces.push(new THREE.Face3(b, d, p));
      this.faceVertexUvs[0].push([new THREE.Vector2(m, r), new THREE.Vector2(t, r), new THREE.Vector2(m, s)]);
      this.faces.push(new THREE.Face3(d, n, p));
      this.faceVertexUvs[0].push([new THREE.Vector2(t, r), new THREE.Vector2(t, s), new THREE.Vector2(m, s)])
    }
  this.mergeVertices();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry = function (a, b, c, d) {
  console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.");
  THREE.Geometry.call(this);
  this.type = "PlaneGeometry";
  this.parameters = {
    width: a,
    height: b,
    widthSegments: c,
    heightSegments: d
  };
  this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a, b, c, d))
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneBufferGeometry = function (a, b, c, d) {
  THREE.BufferGeometry.call(this);
  this.type = "PlaneBufferGeometry";
  this.parameters = {
    width: a,
    height: b,
    widthSegments: c,
    heightSegments: d
  };
  var e = a / 2,
    f = b / 2;
  c = c || 1;
  d = d || 1;
  var g = c + 1,
    h = d + 1,
    k = a / c,
    n = b / d;
  b = new Float32Array(g * h * 3);
  a = new Float32Array(g * h * 3);
  for (var p = new Float32Array(g * h * 2), q = 0, m = 0, r = 0; r < h; r++)
    for (var t = r * n - f, s = 0; s < g; s++) b[q] = s * k - e, b[q + 1] = -t, a[q + 2] = 1, p[m] = s / c, p[m + 1] = 1 - r / d, q += 3, m += 2;
  q = 0;
  e = new(65535 < b.length / 3 ? Uint32Array : Uint16Array)(c * d * 6);
  for (r = 0; r < d; r++)
    for (s =
      0; s < c; s++) f = s + g * (r + 1), h = s + 1 + g * (r + 1), k = s + 1 + g * r, e[q] = s + g * r, e[q + 1] = f, e[q + 2] = k, e[q + 3] = f, e[q + 4] = h, e[q + 5] = k, q += 6;
  this.addAttribute("index", new THREE.BufferAttribute(e, 1));
  this.addAttribute("position", new THREE.BufferAttribute(b, 3));
  this.addAttribute("normal", new THREE.BufferAttribute(a, 3));
  this.addAttribute("uv", new THREE.BufferAttribute(p, 2))
};
THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.RingGeometry = function (a, b, c, d, e, f) {
  THREE.Geometry.call(this);
  this.type = "RingGeometry";
  this.parameters = {
    innerRadius: a,
    outerRadius: b,
    thetaSegments: c,
    phiSegments: d,
    thetaStart: e,
    thetaLength: f
  };
  a = a || 0;
  b = b || 50;
  e = void 0 !== e ? e : 0;
  f = void 0 !== f ? f : 2 * Math.PI;
  c = void 0 !== c ? Math.max(3, c) : 8;
  d = void 0 !== d ? Math.max(1, d) : 8;
  var g, h = [],
    k = a,
    n = (b - a) / d;
  for (a = 0; a < d + 1; a++) {
    for (g = 0; g < c + 1; g++) {
      var p = new THREE.Vector3,
        q = e + g / c * f;
      p.x = k * Math.cos(q);
      p.y = k * Math.sin(q);
      this.vertices.push(p);
      h.push(new THREE.Vector2((p.x / b + 1) / 2,
        (p.y / b + 1) / 2))
    }
    k += n
  }
  b = new THREE.Vector3(0, 0, 1);
  for (a = 0; a < d; a++)
    for (e = a * (c + 1), g = 0; g < c; g++) f = q = g + e, n = q + c + 1, p = q + c + 2, this.faces.push(new THREE.Face3(f, n, p, [b.clone(), b.clone(), b.clone()])), this.faceVertexUvs[0].push([h[f].clone(), h[n].clone(), h[p].clone()]), f = q, n = q + c + 2, p = q + 1, this.faces.push(new THREE.Face3(f, n, p, [b.clone(), b.clone(), b.clone()])), this.faceVertexUvs[0].push([h[f].clone(), h[n].clone(), h[p].clone()]);
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, k)
};
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry = function (a, b, c, d, e, f, g) {
  THREE.Geometry.call(this);
  this.type = "SphereGeometry";
  this.parameters = {
    radius: a,
    widthSegments: b,
    heightSegments: c,
    phiStart: d,
    phiLength: e,
    thetaStart: f,
    thetaLength: g
  };
  a = a || 50;
  b = Math.max(3, Math.floor(b) || 8);
  c = Math.max(2, Math.floor(c) || 6);
  d = void 0 !== d ? d : 0;
  e = void 0 !== e ? e : 2 * Math.PI;
  f = void 0 !== f ? f : 0;
  g = void 0 !== g ? g : Math.PI;
  var h, k, n = [],
    p = [];
  for (k = 0; k <= c; k++) {
    var q = [],
      m = [];
    for (h = 0; h <= b; h++) {
      var r = h / b,
        t = k / c,
        s = new THREE.Vector3;
      s.x = -a * Math.cos(d + r * e) * Math.sin(f + t * g);
      s.y = a * Math.cos(f + t * g);
      s.z = a * Math.sin(d + r * e) * Math.sin(f + t * g);
      this.vertices.push(s);
      q.push(this.vertices.length - 1);
      m.push(new THREE.Vector2(r, 1 - t))
    }
    n.push(q);
    p.push(m)
  }
  for (k = 0; k < c; k++)
    for (h = 0; h < b; h++) {
      d = n[k][h + 1];
      e = n[k][h];
      f = n[k + 1][h];
      g = n[k + 1][h + 1];
      var q = this.vertices[d].clone().normalize(),
        m = this.vertices[e].clone().normalize(),
        r = this.vertices[f].clone().normalize(),
        t = this.vertices[g].clone().normalize(),
        s = p[k][h + 1].clone(),
        u = p[k][h].clone(),
        v = p[k + 1][h].clone(),
        y = p[k + 1][h + 1].clone();
      Math.abs(this.vertices[d].y) ===
        a ? (s.x = (s.x + u.x) / 2, this.faces.push(new THREE.Face3(d, f, g, [q, r, t])), this.faceVertexUvs[0].push([s, v, y])) : Math.abs(this.vertices[f].y) === a ? (v.x = (v.x + y.x) / 2, this.faces.push(new THREE.Face3(d, e, f, [q, m, r])), this.faceVertexUvs[0].push([s, u, v])) : (this.faces.push(new THREE.Face3(d, e, g, [q, m, t])), this.faceVertexUvs[0].push([s, u, y]), this.faces.push(new THREE.Face3(e, f, g, [m.clone(), r, t.clone()])), this.faceVertexUvs[0].push([u.clone(), v, y.clone()]))
    }
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3,
    a)
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TextGeometry = function (a, b) {
  b = b || {};
  var c = THREE.FontUtils.generateShapes(a, b);
  b.amount = void 0 !== b.height ? b.height : 50;
  void 0 === b.bevelThickness && (b.bevelThickness = 10);
  void 0 === b.bevelSize && (b.bevelSize = 8);
  void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
  THREE.ExtrudeGeometry.call(this, c, b);
  this.type = "TextGeometry"
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry = function (a, b, c, d, e) {
  THREE.Geometry.call(this);
  this.type = "TorusGeometry";
  this.parameters = {
    radius: a,
    tube: b,
    radialSegments: c,
    tubularSegments: d,
    arc: e
  };
  a = a || 100;
  b = b || 40;
  c = c || 8;
  d = d || 6;
  e = e || 2 * Math.PI;
  for (var f = new THREE.Vector3, g = [], h = [], k = 0; k <= c; k++)
    for (var n = 0; n <= d; n++) {
      var p = n / d * e,
        q = k / c * Math.PI * 2;
      f.x = a * Math.cos(p);
      f.y = a * Math.sin(p);
      var m = new THREE.Vector3;
      m.x = (a + b * Math.cos(q)) * Math.cos(p);
      m.y = (a + b * Math.cos(q)) * Math.sin(p);
      m.z = b * Math.sin(q);
      this.vertices.push(m);
      g.push(new THREE.Vector2(n /
        d, k / c));
      h.push(m.clone().sub(f).normalize())
    }
  for (k = 1; k <= c; k++)
    for (n = 1; n <= d; n++) a = (d + 1) * k + n - 1, b = (d + 1) * (k - 1) + n - 1, e = (d + 1) * (k - 1) + n, f = (d + 1) * k + n, p = new THREE.Face3(a, b, f, [h[a].clone(), h[b].clone(), h[f].clone()]), this.faces.push(p), this.faceVertexUvs[0].push([g[a].clone(), g[b].clone(), g[f].clone()]), p = new THREE.Face3(b, e, f, [h[b].clone(), h[e].clone(), h[f].clone()]), this.faces.push(p), this.faceVertexUvs[0].push([g[b].clone(), g[e].clone(), g[f].clone()]);
  this.computeFaceNormals()
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry = function (a, b, c, d, e, f, g) {
  function h(a, b, c, d, e) {
    var f = Math.cos(a),
      g = Math.sin(a);
    a *= b / c;
    b = Math.cos(a);
    f *= d * (2 + b) * .5;
    g = d * (2 + b) * g * .5;
    d = e * d * Math.sin(a) * .5;
    return new THREE.Vector3(f, g, d)
  }
  THREE.Geometry.call(this);
  this.type = "TorusKnotGeometry";
  this.parameters = {
    radius: a,
    tube: b,
    radialSegments: c,
    tubularSegments: d,
    p: e,
    q: f,
    heightScale: g
  };
  a = a || 100;
  b = b || 40;
  c = c || 64;
  d = d || 8;
  e = e || 2;
  f = f || 3;
  g = g || 1;
  for (var k = Array(c), n = new THREE.Vector3, p = new THREE.Vector3, q = new THREE.Vector3, m = 0; m < c; ++m) {
    k[m] =
      Array(d);
    var r = m / c * 2 * e * Math.PI,
      t = h(r, f, e, a, g),
      r = h(r + .01, f, e, a, g);
    n.subVectors(r, t);
    p.addVectors(r, t);
    q.crossVectors(n, p);
    p.crossVectors(q, n);
    q.normalize();
    p.normalize();
    for (r = 0; r < d; ++r) {
      var s = r / d * 2 * Math.PI,
        u = -b * Math.cos(s),
        s = b * Math.sin(s),
        v = new THREE.Vector3;
      v.x = t.x + u * p.x + s * q.x;
      v.y = t.y + u * p.y + s * q.y;
      v.z = t.z + u * p.z + s * q.z;
      k[m][r] = this.vertices.push(v) - 1
    }
  }
  for (m = 0; m < c; ++m)
    for (r = 0; r < d; ++r) e = (m + 1) % c, f = (r + 1) % d, a = k[m][r], b = k[e][r], e = k[e][f], f = k[m][f], g = new THREE.Vector2(m / c, r / d), n = new THREE.Vector2((m + 1) / c,
      r / d), p = new THREE.Vector2((m + 1) / c, (r + 1) / d), q = new THREE.Vector2(m / c, (r + 1) / d), this.faces.push(new THREE.Face3(a, b, f)), this.faceVertexUvs[0].push([g, n, q]), this.faces.push(new THREE.Face3(b, e, f)), this.faceVertexUvs[0].push([n.clone(), p, q.clone()]);
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry = function (a, b, c, d, e) {
  THREE.Geometry.call(this);
  this.type = "TubeGeometry";
  this.parameters = {
    path: a,
    segments: b,
    radius: c,
    radialSegments: d,
    closed: e
  };
  b = b || 64;
  c = c || 1;
  d = d || 8;
  e = e || !1;
  var f = [],
    g, h, k = b + 1,
    n, p, q, m, r = new THREE.Vector3,
    t, s, u;
  t = new THREE.TubeGeometry.FrenetFrames(a, b, e);
  s = t.normals;
  u = t.binormals;
  this.tangents = t.tangents;
  this.normals = s;
  this.binormals = u;
  for (t = 0; t < k; t++)
    for (f[t] = [], n = t / (k - 1), m = a.getPointAt(n), g = s[t], h = u[t], n = 0; n < d; n++) p = n / d * 2 * Math.PI, q = -c * Math.cos(p), p = c * Math.sin(p),
      r.copy(m), r.x += q * g.x + p * h.x, r.y += q * g.y + p * h.y, r.z += q * g.z + p * h.z, f[t][n] = this.vertices.push(new THREE.Vector3(r.x, r.y, r.z)) - 1;
  for (t = 0; t < b; t++)
    for (n = 0; n < d; n++) k = e ? (t + 1) % b : t + 1, r = (n + 1) % d, a = f[t][n], c = f[k][n], k = f[k][r], r = f[t][r], s = new THREE.Vector2(t / b, n / d), u = new THREE.Vector2((t + 1) / b, n / d), g = new THREE.Vector2((t + 1) / b, (n + 1) / d), h = new THREE.Vector2(t / b, (n + 1) / d), this.faces.push(new THREE.Face3(a, c, r)), this.faceVertexUvs[0].push([s, u, h]), this.faces.push(new THREE.Face3(c, k, r)), this.faceVertexUvs[0].push([u.clone(),
      g, h.clone()
    ]);
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames = function (a, b, c) {
  new THREE.Vector3;
  var d = new THREE.Vector3;
  new THREE.Vector3;
  var e = [],
    f = [],
    g = [],
    h = new THREE.Vector3,
    k = new THREE.Matrix4;
  b += 1;
  var n, p, q;
  this.tangents = e;
  this.normals = f;
  this.binormals = g;
  for (n = 0; n < b; n++) p = n / (b - 1), e[n] = a.getTangentAt(p), e[n].normalize();
  f[0] = new THREE.Vector3;
  g[0] = new THREE.Vector3;
  a = Number.MAX_VALUE;
  n = Math.abs(e[0].x);
  p = Math.abs(e[0].y);
  q = Math.abs(e[0].z);
  n <= a && (a = n, d.set(1, 0, 0));
  p <= a && (a = p, d.set(0, 1, 0));
  q <= a && d.set(0, 0, 1);
  h.crossVectors(e[0],
    d).normalize();
  f[0].crossVectors(e[0], h);
  g[0].crossVectors(e[0], f[0]);
  for (n = 1; n < b; n++) f[n] = f[n - 1].clone(), g[n] = g[n - 1].clone(), h.crossVectors(e[n - 1], e[n]), 1E-4 < h.length() && (h.normalize(), d = Math.acos(THREE.Math.clamp(e[n - 1].dot(e[n]), -1, 1)), f[n].applyMatrix4(k.makeRotationAxis(h, d))), g[n].crossVectors(e[n], f[n]);
  if (c)
    for (d = Math.acos(THREE.Math.clamp(f[0].dot(f[b - 1]), -1, 1)), d /= b - 1, 0 < e[0].dot(h.crossVectors(f[0], f[b - 1])) && (d = -d), n = 1; n < b; n++) f[n].applyMatrix4(k.makeRotationAxis(e[n], d * n)), g[n].crossVectors(e[n],
      f[n])
};
THREE.PolyhedronGeometry = function (a, b, c, d) {
  function e(a) {
    var b = a.normalize().clone();
    b.index = k.vertices.push(b) - 1;
    var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + .5;
    a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5;
    b.uv = new THREE.Vector2(c, 1 - a);
    return b
  }

  function f(a, b, c) {
    var d = new THREE.Face3(a.index, b.index, c.index, [a.clone(), b.clone(), c.clone()]);
    k.faces.push(d);
    u.copy(a).add(b).add(c).divideScalar(3);
    d = Math.atan2(u.z, -u.x);
    k.faceVertexUvs[0].push([h(a.uv, a, d), h(b.uv, b, d), h(c.uv, c, d)])
  }

  function g(a, b) {
    var c =
      Math.pow(2, b);
    Math.pow(4, b);
    for (var d = e(k.vertices[a.a]), g = e(k.vertices[a.b]), h = e(k.vertices[a.c]), m = [], n = 0; n <= c; n++) {
      m[n] = [];
      for (var p = e(d.clone().lerp(h, n / c)), q = e(g.clone().lerp(h, n / c)), r = c - n, s = 0; s <= r; s++) m[n][s] = 0 == s && n == c ? p : e(p.clone().lerp(q, s / r))
    }
    for (n = 0; n < c; n++)
      for (s = 0; s < 2 * (c - n) - 1; s++) d = Math.floor(s / 2), 0 == s % 2 ? f(m[n][d + 1], m[n + 1][d], m[n][d]) : f(m[n][d + 1], m[n + 1][d + 1], m[n + 1][d])
  }

  function h(a, b, c) {
    0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1, a.y));
    0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + .5,
      a.y));
    return a.clone()
  }
  THREE.Geometry.call(this);
  this.type = "PolyhedronGeometry";
  this.parameters = {
    vertices: a,
    indices: b,
    radius: c,
    detail: d
  };
  c = c || 1;
  d = d || 0;
  for (var k = this, n = 0, p = a.length; n < p; n += 3) e(new THREE.Vector3(a[n], a[n + 1], a[n + 2]));
  a = this.vertices;
  for (var q = [], m = n = 0, p = b.length; n < p; n += 3, m++) {
    var r = a[b[n]],
      t = a[b[n + 1]],
      s = a[b[n + 2]];
    q[m] = new THREE.Face3(r.index, t.index, s.index, [r.clone(), t.clone(), s.clone()])
  }
  for (var u = new THREE.Vector3, n = 0, p = q.length; n < p; n++) g(q[n], d);
  n = 0;
  for (p = this.faceVertexUvs[0].length; n <
    p; n++) b = this.faceVertexUvs[0][n], d = b[0].x, a = b[1].x, q = b[2].x, m = Math.max(d, Math.max(a, q)), r = Math.min(d, Math.min(a, q)), .9 < m && .1 > r && (.2 > d && (b[0].x += 1), .2 > a && (b[1].x += 1), .2 > q && (b[2].x += 1));
  n = 0;
  for (p = this.vertices.length; n < p; n++) this.vertices[n].multiplyScalar(c);
  this.mergeVertices();
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c)
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.DodecahedronGeometry = function (a, b) {
  this.parameters = {
    radius: a,
    detail: b
  };
  var c = (1 + Math.sqrt(5)) / 2,
    d = 1 / c;
  THREE.PolyhedronGeometry.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19,
    11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9
  ], a, b)
};
THREE.DodecahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry = function (a, b) {
  var c = (1 + Math.sqrt(5)) / 2;
  THREE.PolyhedronGeometry.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b);
  this.type = "IcosahedronGeometry";
  this.parameters = {
    radius: a,
    detail: b
  }
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry = function (a, b) {
  this.parameters = {
    radius: a,
    detail: b
  };
  THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
  this.type = "OctahedronGeometry";
  this.parameters = {
    radius: a,
    detail: b
  }
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry = function (a, b) {
  THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
  this.type = "TetrahedronGeometry";
  this.parameters = {
    radius: a,
    detail: b
  }
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry = function (a, b, c) {
  THREE.Geometry.call(this);
  this.type = "ParametricGeometry";
  this.parameters = {
    func: a,
    slices: b,
    stacks: c
  };
  var d = this.vertices,
    e = this.faces,
    f = this.faceVertexUvs[0],
    g, h, k, n, p = b + 1;
  for (g = 0; g <= c; g++)
    for (n = g / c, h = 0; h <= b; h++) k = h / b, k = a(k, n), d.push(k);
  var q, m, r, t;
  for (g = 0; g < c; g++)
    for (h = 0; h < b; h++) a = g * p + h, d = g * p + h + 1, n = (g + 1) * p + h + 1, k = (g + 1) * p + h, q = new THREE.Vector2(h / b, g / c), m = new THREE.Vector2((h + 1) / b, g / c), r = new THREE.Vector2((h + 1) / b, (g + 1) / c), t = new THREE.Vector2(h / b, (g + 1) / c), e.push(new THREE.Face3(a,
      d, k)), f.push([q, m, t]), e.push(new THREE.Face3(d, n, k)), f.push([m.clone(), r, t.clone()]);
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.AxisHelper = function (a) {
  a = a || 1;
  var b = new Float32Array([0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a]),
    c = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
  a = new THREE.BufferGeometry;
  a.addAttribute("position", new THREE.BufferAttribute(b, 3));
  a.addAttribute("color", new THREE.BufferAttribute(c, 3));
  b = new THREE.LineBasicMaterial({
    vertexColors: THREE.VertexColors
  });
  THREE.Line.call(this, a, b, THREE.LinePieces)
};
THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ArrowHelper = function () {
  var a = new THREE.Geometry;
  a.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
  var b = new THREE.CylinderGeometry(0, .5, 1, 5, 1);
  b.applyMatrix((new THREE.Matrix4).makeTranslation(0, -.5, 0));
  return function (c, d, e, f, g, h) {
    THREE.Object3D.call(this);
    void 0 === f && (f = 16776960);
    void 0 === e && (e = 1);
    void 0 === g && (g = .2 * e);
    void 0 === h && (h = .2 * g);
    this.position.copy(d);
    this.line = new THREE.Line(a, new THREE.LineBasicMaterial({
      color: f
    }));
    this.line.matrixAutoUpdate = !1;
    this.add(this.line);
    this.cone = new THREE.Mesh(b, new THREE.MeshBasicMaterial({
      color: f
    }));
    this.cone.matrixAutoUpdate = !1;
    this.add(this.cone);
    this.setDirection(c);
    this.setLength(e, g, h)
  }
}();
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.setDirection = function () {
  var a = new THREE.Vector3,
    b;
  return function (c) {
    .99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a.set(c.z, 0, -c.x).normalize(), b = Math.acos(c.y), this.quaternion.setFromAxisAngle(a, b))
  }
}();
THREE.ArrowHelper.prototype.setLength = function (a, b, c) {
  void 0 === b && (b = .2 * a);
  void 0 === c && (c = .2 * b);
  this.line.scale.set(1, a, 1);
  this.line.updateMatrix();
  this.cone.scale.set(c, b, c);
  this.cone.position.y = a;
  this.cone.updateMatrix()
};
THREE.ArrowHelper.prototype.setColor = function (a) {
  this.line.material.color.set(a);
  this.cone.material.color.set(a)
};
THREE.BoxHelper = function (a) {
  var b = new THREE.BufferGeometry;
  b.addAttribute("position", new THREE.BufferAttribute(new Float32Array(72), 3));
  THREE.Line.call(this, b, new THREE.LineBasicMaterial({
    color: 16776960
  }), THREE.LinePieces);
  void 0 !== a && this.update(a)
};
THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update = function (a) {
  var b = a.geometry;
  null === b.boundingBox && b.computeBoundingBox();
  var c = b.boundingBox.min,
    b = b.boundingBox.max,
    d = this.geometry.attributes.position.array;
  d[0] = b.x;
  d[1] = b.y;
  d[2] = b.z;
  d[3] = c.x;
  d[4] = b.y;
  d[5] = b.z;
  d[6] = c.x;
  d[7] = b.y;
  d[8] = b.z;
  d[9] = c.x;
  d[10] = c.y;
  d[11] = b.z;
  d[12] = c.x;
  d[13] = c.y;
  d[14] = b.z;
  d[15] = b.x;
  d[16] = c.y;
  d[17] = b.z;
  d[18] = b.x;
  d[19] = c.y;
  d[20] = b.z;
  d[21] = b.x;
  d[22] = b.y;
  d[23] = b.z;
  d[24] = b.x;
  d[25] = b.y;
  d[26] = c.z;
  d[27] = c.x;
  d[28] = b.y;
  d[29] = c.z;
  d[30] = c.x;
  d[31] = b.y;
  d[32] = c.z;
  d[33] = c.x;
  d[34] = c.y;
  d[35] = c.z;
  d[36] = c.x;
  d[37] = c.y;
  d[38] = c.z;
  d[39] = b.x;
  d[40] = c.y;
  d[41] = c.z;
  d[42] = b.x;
  d[43] = c.y;
  d[44] = c.z;
  d[45] = b.x;
  d[46] = b.y;
  d[47] = c.z;
  d[48] = b.x;
  d[49] = b.y;
  d[50] = b.z;
  d[51] = b.x;
  d[52] = b.y;
  d[53] = c.z;
  d[54] = c.x;
  d[55] = b.y;
  d[56] = b.z;
  d[57] = c.x;
  d[58] = b.y;
  d[59] = c.z;
  d[60] = c.x;
  d[61] = c.y;
  d[62] = b.z;
  d[63] = c.x;
  d[64] = c.y;
  d[65] = c.z;
  d[66] = b.x;
  d[67] = c.y;
  d[68] = b.z;
  d[69] = b.x;
  d[70] = c.y;
  d[71] = c.z;
  this.geometry.attributes.position.needsUpdate = !0;
  this.geometry.computeBoundingSphere();
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1
};
THREE.BoundingBoxHelper = function (a, b) {
  var c = void 0 !== b ? b : 8947848;
  this.object = a;
  this.box = new THREE.Box3;
  THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
    color: c,
    wireframe: !0
  }))
};
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.BoundingBoxHelper.prototype.update = function () {
  this.box.setFromObject(this.object);
  this.box.size(this.scale);
  this.box.center(this.position)
};
THREE.CameraHelper = function (a) {
  function b(a, b, d) {
    c(a, d);
    c(b, d)
  }

  function c(a, b) {
    d.vertices.push(new THREE.Vector3);
    d.colors.push(new THREE.Color(b));
    void 0 === f[a] && (f[a] = []);
    f[a].push(d.vertices.length - 1)
  }
  var d = new THREE.Geometry,
    e = new THREE.LineBasicMaterial({
      color: 16777215,
      vertexColors: THREE.FaceColors
    }),
    f = {};
  b("n1", "n2", 16755200);
  b("n2", "n4", 16755200);
  b("n4", "n3", 16755200);
  b("n3", "n1", 16755200);
  b("f1", "f2", 16755200);
  b("f2", "f4", 16755200);
  b("f4", "f3", 16755200);
  b("f3", "f1", 16755200);
  b("n1", "f1", 16755200);
  b("n2", "f2", 16755200);
  b("n3", "f3", 16755200);
  b("n4", "f4", 16755200);
  b("p", "n1", 16711680);
  b("p", "n2", 16711680);
  b("p", "n3", 16711680);
  b("p", "n4", 16711680);
  b("u1", "u2", 43775);
  b("u2", "u3", 43775);
  b("u3", "u1", 43775);
  b("c", "t", 16777215);
  b("p", "c", 3355443);
  b("cn1", "cn2", 3355443);
  b("cn3", "cn4", 3355443);
  b("cf1", "cf2", 3355443);
  b("cf3", "cf4", 3355443);
  THREE.Line.call(this, d, e, THREE.LinePieces);
  this.camera = a;
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  this.pointMap = f;
  this.update()
};
THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update = function () {
  var a, b, c = new THREE.Vector3,
    d = new THREE.Camera,
    e = function (e, g, h, k) {
      c.set(g, h, k).unproject(d);
      e = b[e];
      if (void 0 !== e)
        for (g = 0, h = e.length; g < h; g++) a.vertices[e[g]].copy(c)
    };
  return function () {
    a = this.geometry;
    b = this.pointMap;
    d.projectionMatrix.copy(this.camera.projectionMatrix);
    e("c", 0, 0, -1);
    e("t", 0, 0, 1);
    e("n1", -1, -1, -1);
    e("n2", 1, -1, -1);
    e("n3", -1, 1, -1);
    e("n4", 1, 1, -1);
    e("f1", -1, -1, 1);
    e("f2", 1, -1, 1);
    e("f3", -1, 1, 1);
    e("f4", 1, 1, 1);
    e("u1", .7, 1.1, -1);
    e("u2", -.7, 1.1,
      -1);
    e("u3", 0, 2, -1);
    e("cf1", -1, 0, 1);
    e("cf2", 1, 0, 1);
    e("cf3", 0, -1, 1);
    e("cf4", 0, 1, 1);
    e("cn1", -1, 0, -1);
    e("cn2", 1, 0, -1);
    e("cn3", 0, -1, -1);
    e("cn4", 0, 1, -1);
    a.verticesNeedUpdate = !0
  }
}();
THREE.DirectionalLightHelper = function (a, b) {
  THREE.Object3D.call(this);
  this.light = a;
  this.light.updateMatrixWorld();
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  b = b || 1;
  var c = new THREE.Geometry;
  c.vertices.push(new THREE.Vector3(-b, b, 0), new THREE.Vector3(b, b, 0), new THREE.Vector3(b, -b, 0), new THREE.Vector3(-b, -b, 0), new THREE.Vector3(-b, b, 0));
  var d = new THREE.LineBasicMaterial({
    fog: !1
  });
  d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.lightPlane = new THREE.Line(c, d);
  this.add(this.lightPlane);
  c = new THREE.Geometry;
  c.vertices.push(new THREE.Vector3, new THREE.Vector3);
  d = new THREE.LineBasicMaterial({
    fog: !1
  });
  d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.targetLine = new THREE.Line(c, d);
  this.add(this.targetLine);
  this.update()
};
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.dispose = function () {
  this.lightPlane.geometry.dispose();
  this.lightPlane.material.dispose();
  this.targetLine.geometry.dispose();
  this.targetLine.material.dispose()
};
THREE.DirectionalLightHelper.prototype.update = function () {
  var a = new THREE.Vector3,
    b = new THREE.Vector3,
    c = new THREE.Vector3;
  return function () {
    a.setFromMatrixPosition(this.light.matrixWorld);
    b.setFromMatrixPosition(this.light.target.matrixWorld);
    c.subVectors(b, a);
    this.lightPlane.lookAt(c);
    this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    this.targetLine.geometry.vertices[1].copy(c);
    this.targetLine.geometry.verticesNeedUpdate = !0;
    this.targetLine.material.color.copy(this.lightPlane.material.color)
  }
}();
THREE.EdgesHelper = function (a, b) {
  var c = void 0 !== b ? b : 16777215,
    d = [0, 0],
    e = {},
    f = function (a, b) {
      return a - b
    },
    g = ["a", "b", "c"],
    h = new THREE.BufferGeometry,
    k = a.geometry.clone();
  k.mergeVertices();
  k.computeFaceNormals();
  for (var n = k.vertices, k = k.faces, p = 0, q = 0, m = k.length; q < m; q++)
    for (var r = k[q], t = 0; 3 > t; t++) {
      d[0] = r[g[t]];
      d[1] = r[g[(t + 1) % 3]];
      d.sort(f);
      var s = d.toString();
      void 0 === e[s] ? (e[s] = {
        vert1: d[0],
        vert2: d[1],
        face1: q,
        face2: void 0
      }, p++) : e[s].face2 = q
    }
  d = new Float32Array(6 * p);
  f = 0;
  for (s in e)
    if (g = e[s], void 0 === g.face2 ||
      .9999 > k[g.face1].normal.dot(k[g.face2].normal)) p = n[g.vert1], d[f++] = p.x, d[f++] = p.y, d[f++] = p.z, p = n[g.vert2], d[f++] = p.x, d[f++] = p.y, d[f++] = p.z;
  h.addAttribute("position", new THREE.BufferAttribute(d, 3));
  THREE.Line.call(this, h, new THREE.LineBasicMaterial({
    color: c
  }), THREE.LinePieces);
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1
};
THREE.EdgesHelper.prototype = Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper = function (a, b, c, d) {
  this.object = a;
  this.size = void 0 !== b ? b : 1;
  a = void 0 !== c ? c : 16776960;
  d = void 0 !== d ? d : 1;
  b = new THREE.Geometry;
  c = 0;
  for (var e = this.object.geometry.faces.length; c < e; c++) b.vertices.push(new THREE.Vector3, new THREE.Vector3);
  THREE.Line.call(this, b, new THREE.LineBasicMaterial({
    color: a,
    linewidth: d
  }), THREE.LinePieces);
  this.matrixAutoUpdate = !1;
  this.normalMatrix = new THREE.Matrix3;
  this.update()
};
THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update = function () {
  var a = this.geometry.vertices,
    b = this.object,
    c = b.geometry.vertices,
    d = b.geometry.faces,
    e = b.matrixWorld;
  b.updateMatrixWorld(!0);
  this.normalMatrix.getNormalMatrix(e);
  for (var f = b = 0, g = d.length; b < g; b++, f += 2) {
    var h = d[b];
    a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);
    a[f + 1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])
  }
  this.geometry.verticesNeedUpdate = !0;
  return this
};
THREE.GridHelper = function (a, b) {
  var c = new THREE.Geometry,
    d = new THREE.LineBasicMaterial({
      vertexColors: THREE.VertexColors
    });
  this.color1 = new THREE.Color(4473924);
  this.color2 = new THREE.Color(8947848);
  for (var e = -a; e <= a; e += b) {
    c.vertices.push(new THREE.Vector3(-a, 0, e), new THREE.Vector3(a, 0, e), new THREE.Vector3(e, 0, -a), new THREE.Vector3(e, 0, a));
    var f = 0 === e ? this.color1 : this.color2;
    c.colors.push(f, f, f, f)
  }
  THREE.Line.call(this, c, d, THREE.LinePieces)
};
THREE.GridHelper.prototype = Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors = function (a, b) {
  this.color1.set(a);
  this.color2.set(b);
  this.geometry.colorsNeedUpdate = !0
};
THREE.HemisphereLightHelper = function (a, b, c, d) {
  THREE.Object3D.call(this);
  this.light = a;
  this.light.updateMatrixWorld();
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  this.colors = [new THREE.Color, new THREE.Color];
  a = new THREE.SphereGeometry(b, 4, 2);
  a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
  for (b = 0; 8 > b; b++) a.faces[b].color = this.colors[4 > b ? 0 : 1];
  b = new THREE.MeshBasicMaterial({
    vertexColors: THREE.FaceColors,
    wireframe: !0
  });
  this.lightSphere = new THREE.Mesh(a, b);
  this.add(this.lightSphere);
  this.update()
};
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.dispose = function () {
  this.lightSphere.geometry.dispose();
  this.lightSphere.material.dispose()
};
THREE.HemisphereLightHelper.prototype.update = function () {
  var a = new THREE.Vector3;
  return function () {
    this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
    this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
    this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
    this.lightSphere.geometry.colorsNeedUpdate = !0
  }
}();
THREE.PointLightHelper = function (a, b) {
  this.light = a;
  this.light.updateMatrixWorld();
  var c = new THREE.SphereGeometry(b, 4, 2),
    d = new THREE.MeshBasicMaterial({
      wireframe: !0,
      fog: !1
    });
  d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  THREE.Mesh.call(this, c, d);
  this.matrix = this.light.matrixWorld;
  this.matrixAutoUpdate = !1
};
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.PointLightHelper.prototype.dispose = function () {
  this.geometry.dispose();
  this.material.dispose()
};
THREE.PointLightHelper.prototype.update = function () {
  this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
};
THREE.SkeletonHelper = function (a) {
  this.bones = this.getBoneList(a);
  for (var b = new THREE.Geometry, c = 0; c < this.bones.length; c++) this.bones[c].parent instanceof THREE.Bone && (b.vertices.push(new THREE.Vector3), b.vertices.push(new THREE.Vector3), b.colors.push(new THREE.Color(0, 0, 1)), b.colors.push(new THREE.Color(0, 1, 0)));
  c = new THREE.LineBasicMaterial({
    vertexColors: THREE.VertexColors,
    depthTest: !1,
    depthWrite: !1,
    transparent: !0
  });
  THREE.Line.call(this, b, c, THREE.LinePieces);
  this.root = a;
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  this.update()
};
THREE.SkeletonHelper.prototype = Object.create(THREE.Line.prototype);
THREE.SkeletonHelper.prototype.getBoneList = function (a) {
  var b = [];
  a instanceof THREE.Bone && b.push(a);
  for (var c = 0; c < a.children.length; c++) b.push.apply(b, this.getBoneList(a.children[c]));
  return b
};
THREE.SkeletonHelper.prototype.update = function () {
  for (var a = this.geometry, b = (new THREE.Matrix4).getInverse(this.root.matrixWorld), c = new THREE.Matrix4, d = 0, e = 0; e < this.bones.length; e++) {
    var f = this.bones[e];
    f.parent instanceof THREE.Bone && (c.multiplyMatrices(b, f.matrixWorld), a.vertices[d].setFromMatrixPosition(c), c.multiplyMatrices(b, f.parent.matrixWorld), a.vertices[d + 1].setFromMatrixPosition(c), d += 2)
  }
  a.verticesNeedUpdate = !0;
  a.computeBoundingSphere()
};
THREE.SpotLightHelper = function (a) {
  THREE.Object3D.call(this);
  this.light = a;
  this.light.updateMatrixWorld();
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  a = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0);
  a.applyMatrix((new THREE.Matrix4).makeTranslation(0, -.5, 0));
  a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
  var b = new THREE.MeshBasicMaterial({
    wireframe: !0,
    fog: !1
  });
  this.cone = new THREE.Mesh(a, b);
  this.add(this.cone);
  this.update()
};
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose = function () {
  this.cone.geometry.dispose();
  this.cone.material.dispose()
};
THREE.SpotLightHelper.prototype.update = function () {
  var a = new THREE.Vector3,
    b = new THREE.Vector3;
  return function () {
    var c = this.light.distance ? this.light.distance : 1E4,
      d = c * Math.tan(this.light.angle);
    this.cone.scale.set(d, d, c);
    a.setFromMatrixPosition(this.light.matrixWorld);
    b.setFromMatrixPosition(this.light.target.matrixWorld);
    this.cone.lookAt(b.sub(a));
    this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
  }
}();
THREE.VertexNormalsHelper = function (a, b, c, d) {
  this.object = a;
  this.size = void 0 !== b ? b : 1;
  b = void 0 !== c ? c : 16711680;
  d = void 0 !== d ? d : 1;
  c = new THREE.Geometry;
  a = a.geometry.faces;
  for (var e = 0, f = a.length; e < f; e++)
    for (var g = 0, h = a[e].vertexNormals.length; g < h; g++) c.vertices.push(new THREE.Vector3, new THREE.Vector3);
  THREE.Line.call(this, c, new THREE.LineBasicMaterial({
    color: b,
    linewidth: d
  }), THREE.LinePieces);
  this.matrixAutoUpdate = !1;
  this.normalMatrix = new THREE.Matrix3;
  this.update()
};
THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update = function (a) {
  var b = new THREE.Vector3;
  return function (a) {
    a = ["a", "b", "c", "d"];
    this.object.updateMatrixWorld(!0);
    this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
    for (var d = this.geometry.vertices, e = this.object.geometry.vertices, f = this.object.geometry.faces, g = this.object.matrixWorld, h = 0, k = 0, n = f.length; k < n; k++)
      for (var p = f[k], q = 0, m = p.vertexNormals.length; q < m; q++) {
        var r = p.vertexNormals[q];
        d[h].copy(e[p[a[q]]]).applyMatrix4(g);
        b.copy(r).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
        b.add(d[h]);
        h += 1;
        d[h].copy(b);
        h += 1
      }
    this.geometry.verticesNeedUpdate = !0;
    return this
  }
}();
THREE.VertexTangentsHelper = function (a, b, c, d) {
  this.object = a;
  this.size = void 0 !== b ? b : 1;
  b = void 0 !== c ? c : 255;
  d = void 0 !== d ? d : 1;
  c = new THREE.Geometry;
  a = a.geometry.faces;
  for (var e = 0, f = a.length; e < f; e++)
    for (var g = 0, h = a[e].vertexTangents.length; g < h; g++) c.vertices.push(new THREE.Vector3), c.vertices.push(new THREE.Vector3);
  THREE.Line.call(this, c, new THREE.LineBasicMaterial({
    color: b,
    linewidth: d
  }), THREE.LinePieces);
  this.matrixAutoUpdate = !1;
  this.update()
};
THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update = function (a) {
  var b = new THREE.Vector3;
  return function (a) {
    a = ["a", "b", "c", "d"];
    this.object.updateMatrixWorld(!0);
    for (var d = this.geometry.vertices, e = this.object.geometry.vertices, f = this.object.geometry.faces, g = this.object.matrixWorld, h = 0, k = 0, n = f.length; k < n; k++)
      for (var p = f[k], q = 0, m = p.vertexTangents.length; q < m; q++) {
        var r = p.vertexTangents[q];
        d[h].copy(e[p[a[q]]]).applyMatrix4(g);
        b.copy(r).transformDirection(g).multiplyScalar(this.size);
        b.add(d[h]);
        h += 1;
        d[h].copy(b);
        h += 1
      }
    this.geometry.verticesNeedUpdate = !0;
    return this
  }
}();
THREE.WireframeHelper = function (a, b) {
  var c = void 0 !== b ? b : 16777215,
    d = [0, 0],
    e = {},
    f = function (a, b) {
      return a - b
    },
    g = ["a", "b", "c"],
    h = new THREE.BufferGeometry;
  if (a.geometry instanceof THREE.Geometry) {
    for (var k = a.geometry.vertices, n = a.geometry.faces, p = 0, q = new Uint32Array(6 * n.length), m = 0, r = n.length; m < r; m++)
      for (var t = n[m], s = 0; 3 > s; s++) {
        d[0] = t[g[s]];
        d[1] = t[g[(s + 1) % 3]];
        d.sort(f);
        var u = d.toString();
        void 0 === e[u] && (q[2 * p] = d[0], q[2 * p + 1] = d[1], e[u] = !0, p++)
      }
    d = new Float32Array(6 * p);
    m = 0;
    for (r = p; m < r; m++)
      for (s = 0; 2 > s; s++) p =
        k[q[2 * m + s]], g = 6 * m + 3 * s, d[g + 0] = p.x, d[g + 1] = p.y, d[g + 2] = p.z;
    h.addAttribute("position", new THREE.BufferAttribute(d, 3))
  } else if (a.geometry instanceof THREE.BufferGeometry) {
    if (void 0 !== a.geometry.attributes.index) {
      k = a.geometry.attributes.position.array;
      r = a.geometry.attributes.index.array;
      n = a.geometry.drawcalls;
      p = 0;
      0 === n.length && (n = [{
        count: r.length,
        index: 0,
        start: 0
      }]);
      for (var q = new Uint32Array(2 * r.length), t = 0, v = n.length; t < v; ++t)
        for (var s = n[t].start, u = n[t].count, g = n[t].index, m = s, y = s + u; m < y; m += 3)
          for (s = 0; 3 > s; s++) d[0] =
            g + r[m + s], d[1] = g + r[m + (s + 1) % 3], d.sort(f), u = d.toString(), void 0 === e[u] && (q[2 * p] = d[0], q[2 * p + 1] = d[1], e[u] = !0, p++);
      d = new Float32Array(6 * p);
      m = 0;
      for (r = p; m < r; m++)
        for (s = 0; 2 > s; s++) g = 6 * m + 3 * s, p = 3 * q[2 * m + s], d[g + 0] = k[p], d[g + 1] = k[p + 1], d[g + 2] = k[p + 2]
    } else
      for (k = a.geometry.attributes.position.array, p = k.length / 3, q = p / 3, d = new Float32Array(6 * p), m = 0, r = q; m < r; m++)
        for (s = 0; 3 > s; s++) g = 18 * m + 6 * s, q = 9 * m + 3 * s, d[g + 0] = k[q], d[g + 1] = k[q + 1], d[g + 2] = k[q + 2], p = 9 * m + (s + 1) % 3 * 3, d[g + 3] = k[p], d[g + 4] = k[p + 1], d[g + 5] = k[p + 2];
    h.addAttribute("position", new THREE.BufferAttribute(d,
      3))
  }
  THREE.Line.call(this, h, new THREE.LineBasicMaterial({
    color: c
  }), THREE.LinePieces);
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1
};
THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ImmediateRenderObject = function () {
  THREE.Object3D.call(this);
  this.render = function (a) {}
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.MorphBlendMesh = function (a, b) {
  THREE.Mesh.call(this, a, b);
  this.animationsMap = {};
  this.animationsList = [];
  var c = this.geometry.morphTargets.length;
  this.createAnimation("__default", 0, c - 1, c / 1);
  this.setAnimationWeight("__default", 1)
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation = function (a, b, c, d) {
  b = {
    startFrame: b,
    endFrame: c,
    length: c - b + 1,
    fps: d,
    duration: (c - b) / d,
    lastFrame: 0,
    currentFrame: 0,
    active: !1,
    time: 0,
    direction: 1,
    weight: 1,
    directionBackwards: !1,
    mirroredLoop: !1
  };
  this.animationsMap[a] = b;
  this.animationsList.push(b)
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (a) {
  for (var b = /([a-z]+)_?(\d+)/, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f < g; f++) {
    var h = e.morphTargets[f].name.match(b);
    if (h && 1 < h.length) {
      var k = h[1];
      d[k] || (d[k] = {
        start: Infinity,
        end: -Infinity
      });
      h = d[k];
      f < h.start && (h.start = f);
      f > h.end && (h.end = f);
      c || (c = k)
    }
  }
  for (k in d) h = d[k], this.createAnimation(k, h.start, h.end, a);
  this.firstAnimation = c
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (a) {
  if (a = this.animationsMap[a]) a.direction = 1, a.directionBackwards = !1
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (a) {
  if (a = this.animationsMap[a]) a.direction = -1, a.directionBackwards = !0
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.weight = b)
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.time = b)
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function (a) {
  var b = 0;
  if (a = this.animationsMap[a]) b = a.time;
  return b
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function (a) {
  var b = -1;
  if (a = this.animationsMap[a]) b = a.duration;
  return b
};
THREE.MorphBlendMesh.prototype.playAnimation = function (a) {
  var b = this.animationsMap[a];
  b ? (b.time = 0, b.active = !0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphBlendMesh.prototype.stopAnimation = function (a) {
  if (a = this.animationsMap[a]) a.active = !1
};
THREE.MorphBlendMesh.prototype.update = function (a) {
  for (var b = 0, c = this.animationsList.length; b < c; b++) {
    var d = this.animationsList[b];
    if (d.active) {
      var e = d.duration / d.length;
      d.time += d.direction * a;
      if (d.mirroredLoop) {
        if (d.time > d.duration || 0 > d.time) d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1)
      } else d.time %= d.duration, 0 > d.time && (d.time += d.duration);
      var f = d.startFrame + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1),
        g = d.weight;
      f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
      e = d.time % e / e;
      d.directionBackwards && (e = 1 - e);
      this.morphTargetInfluences[d.currentFrame] = e * g;
      this.morphTargetInfluences[d.lastFrame] = (1 - e) * g
    }
  }
};