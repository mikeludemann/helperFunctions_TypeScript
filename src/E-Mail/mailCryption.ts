let mailCryption = {

  link: function (url: any, text: any) {

    document.write("<a href=\"mailto:" + this.decode(url) + "\">" + this.decode(text) + "</a>");

  },

  go: function (c: any) {

    location.href = "mailto:" + this.decode(c);

  },

  decode: function (c: any) {

    let l = c.length - 1, i = c.charCodeAt(l) - 32, o = "", p;

    while (i < l) {

      p = c.charCodeAt(i) - 32;

      o += c.charAt(p);

      i = i < p ? p + 1 : i + 1;

    }

    return o;
      
  },

  encode: function (v: any, s: any) {

    let e = s, i;

    for (i = 0; i < v.length; i++) {

      let c = v.charAt(i), p = e.indexOf(c);

      if (p < 0) {

        e += String.fromCharCode(e.length + 33) + c;

      } else {

        e += String.fromCharCode(p + 32);

      }

    }

    e += String.fromCharCode(s.length + 32);

    return e;

  }

}