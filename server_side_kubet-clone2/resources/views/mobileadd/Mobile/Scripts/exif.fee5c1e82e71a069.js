(function () {
  function i(n) {
    return !!n.exifdata;
  }
  function y(n, t) {
    var i;
    t = t || n.match(/^data\:([^\;]+)\;base64,/im)[1] || "";
    n = n.replace(/^data\:([^\;]+)\;base64,/gim, "");
    var r = atob(n),
      u = r.length,
      f = new ArrayBuffer(u),
      e = new Uint8Array(f);
    for (i = 0; i < u; i++) e[i] = r.charCodeAt(i);
    return f;
  }
  function p(n, t) {
    var i = new XMLHttpRequest();
    i.open("GET", n, !0);
    i.responseType = "blob";
    i.onload = function () {
      (this.status == 200 || this.status === 0) && t(this.response);
    };
    i.send();
  }
  function w(i, r) {
    function e(t) {
      var e = s(t),
        u,
        f;
      i.exifdata = e || {};
      u = b(t);
      i.iptcdata = u || {};
      n.isXmpEnabled && ((f = it(t)), (i.xmpdata = f || {}));
      r && r.call(i);
    }
    var o, u, f;
    i.src
      ? /^data\:/i.test(i.src)
        ? ((o = y(i.src)), e(o))
        : /^blob\:/i.test(i.src)
        ? ((f = new FileReader()),
          (f.onload = function (n) {
            e(n.target.result);
          }),
          p(i.src, function (n) {
            f.readAsArrayBuffer(n);
          }))
        : ((u = new XMLHttpRequest()),
          (u.onload = function () {
            if (this.status == 200 || this.status === 0) e(u.response);
            else throw "Could not load image";
            u = null;
          }),
          u.open("GET", i.src, !0),
          (u.responseType = "arraybuffer"),
          u.send(null))
      : self.FileReader &&
        (i instanceof self.Blob || i instanceof self.File) &&
        ((f = new FileReader()),
        (f.onload = function (n) {
          t && console.log("Got file of length " + n.target.result.byteLength);
          e(n.target.result);
        }),
        f.readAsArrayBuffer(i));
  }
  function s(n) {
    var r = new DataView(n),
      i,
      f,
      u;
    if (
      (t && console.log("Got file of length " + n.byteLength),
      r.getUint8(0) != 255 || r.getUint8(1) != 216)
    )
      return t && console.log("Not a valid JPEG"), !1;
    for (i = 2, f = n.byteLength; i < f; ) {
      if (r.getUint8(i) != 255)
        return (
          t &&
            console.log(
              "Not a valid marker at offset " + i + ", found: " + r.getUint8(i)
            ),
          !1
        );
      if (((u = r.getUint8(i + 1)), t && console.log(u), u == 225))
        return (
          t && console.log("Found 0xFFE1 marker"),
          tt(r, i + 4, r.getUint16(i + 2) - 2)
        );
      i += 2 + r.getUint16(i + 2);
    }
  }
  function b(n) {
    var u = new DataView(n),
      i,
      f,
      e;
    if (
      (t && console.log("Got file of length " + n.byteLength),
      u.getUint8(0) != 255 || u.getUint8(1) != 216)
    )
      return t && console.log("Not a valid JPEG"), !1;
    for (
      var r = 2,
        o = n.byteLength,
        s = function (n, t) {
          return (
            n.getUint8(t) === 56 &&
            n.getUint8(t + 1) === 66 &&
            n.getUint8(t + 2) === 73 &&
            n.getUint8(t + 3) === 77 &&
            n.getUint8(t + 4) === 4 &&
            n.getUint8(t + 5) === 4
          );
        };
      r < o;

    ) {
      if (s(u, r))
        return (
          (i = u.getUint8(r + 7)),
          i % 2 != 0 && (i += 1),
          i === 0 && (i = 4),
          (f = r + 8 + i),
          (e = u.getUint16(r + 6 + i)),
          k(n, f, e)
        );
      r++;
    }
  }
  function k(n, t, i) {
    for (var s = new DataView(n), u = {}, h, f, c, l, a, e = t; e < t + i; )
      s.getUint8(e) === 28 &&
        s.getUint8(e + 1) === 2 &&
        ((l = s.getUint8(e + 2)),
        l in o &&
          ((c = s.getInt16(e + 3)),
          (a = c + 5),
          (f = o[l]),
          (h = r(s, e + 5, c)),
          u.hasOwnProperty(f)
            ? u[f] instanceof Array
              ? u[f].push(h)
              : (u[f] = [u[f], h])
            : (u[f] = h))),
        e++;
    return u;
  }
  function f(n, i, r, u, f) {
    for (var c = n.getUint16(r, !f), h = {}, e, s, o = 0; o < c; o++)
      (e = r + o * 12 + 2),
        (s = u[n.getUint16(e, !f)]),
        !s && t && console.log("Unknown tag: " + n.getUint16(e, !f)),
        (h[s] = d(n, e, i, r, f));
    return h;
  }
  function d(n, t, i, u, f) {
    var y = n.getUint16(t + 2, !f),
      s = n.getUint32(t + 4, !f),
      h = n.getUint32(t + 8, !f) + i,
      c,
      o,
      v,
      e,
      l,
      a;
    switch (y) {
      case 1:
      case 7:
        if (s == 1) return n.getUint8(t + 8, !f);
        for (c = s > 4 ? h : t + 8, o = [], e = 0; e < s; e++)
          o[e] = n.getUint8(c + e);
        return o;
      case 2:
        return (c = s > 4 ? h : t + 8), r(n, c, s - 1);
      case 3:
        if (s == 1) return n.getUint16(t + 8, !f);
        for (c = s > 2 ? h : t + 8, o = [], e = 0; e < s; e++)
          o[e] = n.getUint16(c + 2 * e, !f);
        return o;
      case 4:
        if (s == 1) return n.getUint32(t + 8, !f);
        for (o = [], e = 0; e < s; e++) o[e] = n.getUint32(h + 4 * e, !f);
        return o;
      case 5:
        if (s == 1)
          return (
            (l = n.getUint32(h, !f)),
            (a = n.getUint32(h + 4, !f)),
            (v = new Number(l / a)),
            (v.numerator = l),
            (v.denominator = a),
            v
          );
        for (o = [], e = 0; e < s; e++)
          (l = n.getUint32(h + 8 * e, !f)),
            (a = n.getUint32(h + 4 + 8 * e, !f)),
            (o[e] = new Number(l / a)),
            (o[e].numerator = l),
            (o[e].denominator = a);
        return o;
      case 9:
        if (s == 1) return n.getInt32(t + 8, !f);
        for (o = [], e = 0; e < s; e++) o[e] = n.getInt32(h + 4 * e, !f);
        return o;
      case 10:
        if (s == 1) return n.getInt32(h, !f) / n.getInt32(h + 4, !f);
        for (o = [], e = 0; e < s; e++)
          o[e] = n.getInt32(h + 8 * e, !f) / n.getInt32(h + 4 + 8 * e, !f);
        return o;
    }
  }
  function g(n, t, i) {
    var r = n.getUint16(t, !i);
    return n.getUint32(t + 2 + r * 12, !i);
  }
  function nt(n, t, i, r) {
    var e = g(n, t + i, r),
      u,
      o,
      s;
    if (e) {
      if (e > n.byteLength) return {};
    } else return {};
    if (((u = f(n, t, t + e, v, r)), u.Compression))
      switch (u.Compression) {
        case 6:
          u.JpegIFOffset &&
            u.JpegIFByteCount &&
            ((o = t + u.JpegIFOffset),
            (s = u.JpegIFByteCount),
            (u.blob = new Blob([new Uint8Array(n.buffer, o, s)], {
              type: "image/jpeg",
            })));
          break;
        case 1:
          console.log(
            "Thumbnail image format is TIFF, which is not implemented."
          );
          break;
        default:
          console.log("Unknown thumbnail image format '%s'", u.Compression);
      }
    else
      u.PhotometricInterpretation == 2 &&
        console.log("Thumbnail image format is RGB, which is not implemented.");
    return u;
  }
  function r(n, t, i) {
    for (var u = "", r = t; r < t + i; r++)
      u += String.fromCharCode(n.getUint8(r));
    return u;
  }
  function tt(n, i) {
    var h, v, e, o, y, s, p;
    if (r(n, i, 4) != "Exif")
      return t && console.log("Not valid EXIF data! " + r(n, i, 4)), !1;
    if (((s = i + 6), n.getUint16(s) == 18761)) h = !1;
    else if (n.getUint16(s) == 19789) h = !0;
    else
      return t && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
    if (n.getUint16(s + 2, !h) != 42)
      return t && console.log("Not valid TIFF data! (no 0x002A)"), !1;
    if (((p = n.getUint32(s + 4, !h)), p < 8))
      return (
        t &&
          console.log(
            "Not valid TIFF data! (First offset less than 8)",
            n.getUint32(s + 4, !h)
          ),
        !1
      );
    if (((v = f(n, s, s + p, l, h)), v.ExifIFDPointer)) {
      o = f(n, s, s + v.ExifIFDPointer, c, h);
      for (e in o) {
        switch (e) {
          case "LightSource":
          case "Flash":
          case "MeteringMode":
          case "ExposureProgram":
          case "SensingMethod":
          case "SceneCaptureType":
          case "SceneType":
          case "CustomRendered":
          case "WhiteBalance":
          case "GainControl":
          case "Contrast":
          case "Saturation":
          case "Sharpness":
          case "SubjectDistanceRange":
          case "FileSource":
            o[e] = u[e][o[e]];
            break;
          case "ExifVersion":
          case "FlashpixVersion":
            o[e] = String.fromCharCode(o[e][0], o[e][1], o[e][2], o[e][3]);
            break;
          case "ComponentsConfiguration":
            o[e] =
              u.Components[o[e][0]] +
              u.Components[o[e][1]] +
              u.Components[o[e][2]] +
              u.Components[o[e][3]];
        }
        v[e] = o[e];
      }
    }
    if (v.GPSInfoIFDPointer) {
      y = f(n, s, s + v.GPSInfoIFDPointer, a, h);
      for (e in y) {
        switch (e) {
          case "GPSVersionID":
            y[e] = y[e][0] + "." + y[e][1] + "." + y[e][2] + "." + y[e][3];
        }
        v[e] = y[e];
      }
    }
    return (v.thumbnail = nt(n, s, p, h)), v;
  }
  function it(n) {
    var u, e, o;
    if ("DOMParser" in self) {
      if (
        ((u = new DataView(n)),
        t && console.log("Got file of length " + n.byteLength),
        u.getUint8(0) != 255 || u.getUint8(1) != 216)
      )
        return t && console.log("Not a valid JPEG"), !1;
      for (var f = 2, s = n.byteLength, h = new DOMParser(); f < s - 4; ) {
        if (r(u, f, 4) == "http") {
          var c = f - 1,
            l = u.getUint16(f - 2) - 1,
            i = r(u, c, l),
            a = i.indexOf("xmpmeta>") + 8;
          return (
            (i = i.substring(i.indexOf("<x:xmpmeta"), a)),
            (e = i.indexOf("x:xmpmeta") + 10),
            (i =
              i.slice(0, e) +
              'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
              i.slice(e)),
            (o = h.parseFromString(i, "text/xml")),
            rt(o)
          );
        }
        f++;
      }
    }
  }
  function e(n) {
    var t = {},
      r,
      o,
      u,
      f,
      i,
      s;
    if (n.nodeType == 1) {
      if (n.attributes.length > 0)
        for (t["@attributes"] = {}, r = 0; r < n.attributes.length; r++)
          (o = n.attributes.item(r)),
            (t["@attributes"][o.nodeName] = o.nodeValue);
    } else if (n.nodeType == 3) return n.nodeValue;
    if (n.hasChildNodes())
      for (u = 0; u < n.childNodes.length; u++)
        (f = n.childNodes.item(u)),
          (i = f.nodeName),
          t[i] == null
            ? (t[i] = e(f))
            : (t[i].push == null && ((s = t[i]), (t[i] = []), t[i].push(s)),
              t[i].push(e(f)));
    return t;
  }
  function rt(n) {
    var t, u, r, f, o, i, c;
    try {
      if (((t = {}), n.children.length > 0))
        for (u = 0; u < n.children.length; u++) {
          r = n.children.item(u);
          f = r.attributes;
          for (o in f) {
            var s = f[o],
              h = s.nodeName,
              l = s.nodeValue;
            h !== undefined && (t[h] = l);
          }
          i = r.nodeName;
          typeof t[i] == "undefined"
            ? (t[i] = e(r))
            : (typeof t[i].push == "undefined" &&
                ((c = t[i]), (t[i] = []), t[i].push(c)),
              t[i].push(e(r)));
        }
      else t = n.textContent;
      return t;
    } catch (a) {
      console.log(a.message);
    }
  }
  var t = !1,
    h = this,
    n = function (t) {
      if (t instanceof n) return t;
      if (!(this instanceof n)) return new n(t);
      this.EXIFwrapped = t;
    },
    o;
  typeof exports != "undefined"
    ? (typeof module != "undefined" &&
        module.exports &&
        (exports = module.exports = n),
      (exports.EXIF = n))
    : (h.EXIF = n);
  var c = (n.Tags = {
      36864: "ExifVersion",
      40960: "FlashpixVersion",
      40961: "ColorSpace",
      40962: "PixelXDimension",
      40963: "PixelYDimension",
      37121: "ComponentsConfiguration",
      37122: "CompressedBitsPerPixel",
      37500: "MakerNote",
      37510: "UserComment",
      40964: "RelatedSoundFile",
      36867: "DateTimeOriginal",
      36868: "DateTimeDigitized",
      37520: "SubsecTime",
      37521: "SubsecTimeOriginal",
      37522: "SubsecTimeDigitized",
      33434: "ExposureTime",
      33437: "FNumber",
      34850: "ExposureProgram",
      34852: "SpectralSensitivity",
      34855: "ISOSpeedRatings",
      34856: "OECF",
      37377: "ShutterSpeedValue",
      37378: "ApertureValue",
      37379: "BrightnessValue",
      37380: "ExposureBias",
      37381: "MaxApertureValue",
      37382: "SubjectDistance",
      37383: "MeteringMode",
      37384: "LightSource",
      37385: "Flash",
      37396: "SubjectArea",
      37386: "FocalLength",
      41483: "FlashEnergy",
      41484: "SpatialFrequencyResponse",
      41486: "FocalPlaneXResolution",
      41487: "FocalPlaneYResolution",
      41488: "FocalPlaneResolutionUnit",
      41492: "SubjectLocation",
      41493: "ExposureIndex",
      41495: "SensingMethod",
      41728: "FileSource",
      41729: "SceneType",
      41730: "CFAPattern",
      41985: "CustomRendered",
      41986: "ExposureMode",
      41987: "WhiteBalance",
      41988: "DigitalZoomRation",
      41989: "FocalLengthIn35mmFilm",
      41990: "SceneCaptureType",
      41991: "GainControl",
      41992: "Contrast",
      41993: "Saturation",
      41994: "Sharpness",
      41995: "DeviceSettingDescription",
      41996: "SubjectDistanceRange",
      40965: "InteroperabilityIFDPointer",
      42016: "ImageUniqueID",
    }),
    l = (n.TiffTags = {
      256: "ImageWidth",
      257: "ImageHeight",
      34665: "ExifIFDPointer",
      34853: "GPSInfoIFDPointer",
      40965: "InteroperabilityIFDPointer",
      258: "BitsPerSample",
      259: "Compression",
      262: "PhotometricInterpretation",
      274: "Orientation",
      277: "SamplesPerPixel",
      284: "PlanarConfiguration",
      530: "YCbCrSubSampling",
      531: "YCbCrPositioning",
      282: "XResolution",
      283: "YResolution",
      296: "ResolutionUnit",
      273: "StripOffsets",
      278: "RowsPerStrip",
      279: "StripByteCounts",
      513: "JPEGInterchangeFormat",
      514: "JPEGInterchangeFormatLength",
      301: "TransferFunction",
      318: "WhitePoint",
      319: "PrimaryChromaticities",
      529: "YCbCrCoefficients",
      532: "ReferenceBlackWhite",
      306: "DateTime",
      270: "ImageDescription",
      271: "Make",
      272: "Model",
      305: "Software",
      315: "Artist",
      33432: "Copyright",
    }),
    a = (n.GPSTags = {
      0: "GPSVersionID",
      1: "GPSLatitudeRef",
      2: "GPSLatitude",
      3: "GPSLongitudeRef",
      4: "GPSLongitude",
      5: "GPSAltitudeRef",
      6: "GPSAltitude",
      7: "GPSTimeStamp",
      8: "GPSSatellites",
      9: "GPSStatus",
      10: "GPSMeasureMode",
      11: "GPSDOP",
      12: "GPSSpeedRef",
      13: "GPSSpeed",
      14: "GPSTrackRef",
      15: "GPSTrack",
      16: "GPSImgDirectionRef",
      17: "GPSImgDirection",
      18: "GPSMapDatum",
      19: "GPSDestLatitudeRef",
      20: "GPSDestLatitude",
      21: "GPSDestLongitudeRef",
      22: "GPSDestLongitude",
      23: "GPSDestBearingRef",
      24: "GPSDestBearing",
      25: "GPSDestDistanceRef",
      26: "GPSDestDistance",
      27: "GPSProcessingMethod",
      28: "GPSAreaInformation",
      29: "GPSDateStamp",
      30: "GPSDifferential",
    }),
    v = (n.IFD1Tags = {
      256: "ImageWidth",
      257: "ImageHeight",
      258: "BitsPerSample",
      259: "Compression",
      262: "PhotometricInterpretation",
      273: "StripOffsets",
      274: "Orientation",
      277: "SamplesPerPixel",
      278: "RowsPerStrip",
      279: "StripByteCounts",
      282: "XResolution",
      283: "YResolution",
      284: "PlanarConfiguration",
      296: "ResolutionUnit",
      513: "JpegIFOffset",
      514: "JpegIFByteCount",
      529: "YCbCrCoefficients",
      530: "YCbCrSubSampling",
      531: "YCbCrPositioning",
      532: "ReferenceBlackWhite",
    }),
    u = (n.StringValues = {
      ExposureProgram: {
        0: "Not defined",
        1: "Manual",
        2: "Normal program",
        3: "Aperture priority",
        4: "Shutter priority",
        5: "Creative program",
        6: "Action program",
        7: "Portrait mode",
        8: "Landscape mode",
      },
      MeteringMode: {
        0: "Unknown",
        1: "Average",
        2: "CenterWeightedAverage",
        3: "Spot",
        4: "MultiSpot",
        5: "Pattern",
        6: "Partial",
        255: "Other",
      },
      LightSource: {
        0: "Unknown",
        1: "Daylight",
        2: "Fluorescent",
        3: "Tungsten (incandescent light)",
        4: "Flash",
        9: "Fine weather",
        10: "Cloudy weather",
        11: "Shade",
        12: "Daylight fluorescent (D 5700 - 7100K)",
        13: "Day white fluorescent (N 4600 - 5400K)",
        14: "Cool white fluorescent (W 3900 - 4500K)",
        15: "White fluorescent (WW 3200 - 3700K)",
        17: "Standard light A",
        18: "Standard light B",
        19: "Standard light C",
        20: "D55",
        21: "D65",
        22: "D75",
        23: "D50",
        24: "ISO studio tungsten",
        255: "Other",
      },
      Flash: {
        0: "Flash did not fire",
        1: "Flash fired",
        5: "Strobe return light not detected",
        7: "Strobe return light detected",
        9: "Flash fired, compulsory flash mode",
        13: "Flash fired, compulsory flash mode, return light not detected",
        15: "Flash fired, compulsory flash mode, return light detected",
        16: "Flash did not fire, compulsory flash mode",
        24: "Flash did not fire, auto mode",
        25: "Flash fired, auto mode",
        29: "Flash fired, auto mode, return light not detected",
        31: "Flash fired, auto mode, return light detected",
        32: "No flash function",
        65: "Flash fired, red-eye reduction mode",
        69: "Flash fired, red-eye reduction mode, return light not detected",
        71: "Flash fired, red-eye reduction mode, return light detected",
        73: "Flash fired, compulsory flash mode, red-eye reduction mode",
        77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
        79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
        89: "Flash fired, auto mode, red-eye reduction mode",
        93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
        95: "Flash fired, auto mode, return light detected, red-eye reduction mode",
      },
      SensingMethod: {
        1: "Not defined",
        2: "One-chip color area sensor",
        3: "Two-chip color area sensor",
        4: "Three-chip color area sensor",
        5: "Color sequential area sensor",
        7: "Trilinear sensor",
        8: "Color sequential linear sensor",
      },
      SceneCaptureType: {
        0: "Standard",
        1: "Landscape",
        2: "Portrait",
        3: "Night scene",
      },
      SceneType: { 1: "Directly photographed" },
      CustomRendered: { 0: "Normal process", 1: "Custom process" },
      WhiteBalance: { 0: "Auto white balance", 1: "Manual white balance" },
      GainControl: {
        0: "None",
        1: "Low gain up",
        2: "High gain up",
        3: "Low gain down",
        4: "High gain down",
      },
      Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" },
      Saturation: { 0: "Normal", 1: "Low saturation", 2: "High saturation" },
      Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" },
      SubjectDistanceRange: {
        0: "Unknown",
        1: "Macro",
        2: "Close view",
        3: "Distant view",
      },
      FileSource: { 3: "DSC" },
      Components: { 0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B" },
    });
  o = {
    120: "caption",
    110: "credit",
    25: "keywords",
    55: "dateCreated",
    80: "byline",
    85: "bylineTitle",
    122: "captionWriter",
    105: "headline",
    116: "copyright",
    15: "category",
  };
  n.enableXmp = function () {
    n.isXmpEnabled = !0;
  };
  n.disableXmp = function () {
    n.isXmpEnabled = !1;
  };
  n.getData = function (n, t) {
    return ((self.Image && n instanceof self.Image) ||
      (self.HTMLImageElement && n instanceof self.HTMLImageElement)) &&
      !n.complete
      ? !1
      : (i(n) ? t && t.call(n) : w(n, t), !0);
  };
  n.getTag = function (n, t) {
    if (i(n)) return n.exifdata[t];
  };
  n.getIptcTag = function (n, t) {
    if (i(n)) return n.iptcdata[t];
  };
  n.getAllTags = function (n) {
    if (!i(n)) return {};
    var t,
      r = n.exifdata,
      u = {};
    for (t in r) r.hasOwnProperty(t) && (u[t] = r[t]);
    return u;
  };
  n.getAllIptcTags = function (n) {
    if (!i(n)) return {};
    var t,
      r = n.iptcdata,
      u = {};
    for (t in r) r.hasOwnProperty(t) && (u[t] = r[t]);
    return u;
  };
  n.pretty = function (n) {
    if (!i(n)) return "";
    var t,
      r = n.exifdata,
      u = "";
    for (t in r)
      r.hasOwnProperty(t) &&
        (u +=
          typeof r[t] == "object"
            ? r[t] instanceof Number
              ? t +
                " : " +
                r[t] +
                " [" +
                r[t].numerator +
                "/" +
                r[t].denominator +
                "]\r\n"
              : t + " : [" + r[t].length + " values]\r\n"
            : t + " : " + r[t] + "\r\n");
    return u;
  };
  n.readFromBinaryFile = function (n) {
    return s(n);
  };
  typeof define == "function" &&
    define.amd &&
    define("exif-js", [], function () {
      return n;
    });
}.call(this));
