var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-napi');
var ref = require('ref-napi')



var voit = exports.voit = ref.types.void
var uchar = exports.uchar = ref.types.uchar
var gfxPrimitivesFontdata_arr = ArrayType(uchar, 2048)

FFI.Library(process.platform == 'win32' ? 'SDL2_gfx' : 'libSDL2_gfx', {
}, exports)