(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("44a03752-b149-4f8b-8328-d2187c573685");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '44a03752-b149-4f8b-8328-d2187c573685' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"f99195af-9db3-4e04-9ffe-822ff2bc9721":{"defs":[],"roots":{"references":[{"attributes":{},"id":"23812","type":"UndoTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23834","type":"Patch"},{"attributes":{},"id":"23856","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"23790"},0,0]]},"id":"23863","type":"GridBox"},{"attributes":{},"id":"23813","type":"SaveTool"},{"attributes":{},"id":"23853","type":"AllLabels"},{"attributes":{"source":{"id":"23832"}},"id":"23837","type":"CDSView"},{"attributes":{},"id":"23797","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"23849"},"group":null,"major_label_policy":{"id":"23850"},"ticker":{"id":"23804"}},"id":"23803","type":"LinearAxis"},{"attributes":{},"id":"23852","type":"BasicTickFormatter"},{"attributes":{},"id":"23804","type":"BasicTicker"},{"attributes":{},"id":"23858","type":"UnionRenderers"},{"attributes":{},"id":"23810","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"23838"},"glyph":{"id":"23839"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23841"},"nonselection_glyph":{"id":"23840"},"view":{"id":"23843"}},"id":"23842","type":"GlyphRenderer"},{"attributes":{},"id":"23854","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"23807"},{"id":"23808"},{"id":"23809"},{"id":"23810"},{"id":"23811"},{"id":"23812"},{"id":"23813"},{"id":"23814"}]},"id":"23817","type":"Toolbar"},{"attributes":{"axis":{"id":"23803"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23806","type":"Grid"},{"attributes":{},"id":"23849","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[304]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[304]}},"selected":{"id":"23857"},"selection_policy":{"id":"23856"}},"id":"23832","type":"ColumnDataSource"},{"attributes":{"end":6.5845192562636266,"start":-2.3027703800156587},"id":"23845","type":"Range1d"},{"attributes":{"children":[{"id":"23865"},{"id":"23863"}]},"id":"23866","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"oA7pHtZ08D/qQq/xHXvwPzHtUgoDgvA/Nkdc0Tuq8D+mN+t2W+jwP254npAkOPE//GYThEak8T98MHbcpsLxP5tDPPBSKvI/AjDlrfTL8j8QHj3HLwrzP7HQwLpUhvM/pAsEsrhR9D9W++U6a1b0PyaVUdgaP/U/OPnKnEGZ9T9tnRxjzzD2P8zmkYfK4PY/6VqSh34x9z9c1FhyUyj4P0PjfmNCXPg/8MEfXdxv+T8vqbJYhq/5P4Sv5kdlt/o/eD11SvMe+z8Yna0y7v77P/XJ34+r6Pw/rIp0HXdG/T9AeDsIAI7+P+1HLlipb/8/0GUC84jV/z+yqeTuiI4AQGNIBELQKAFAfCBIZE0yAUBGl6vZEdYBQBAOD0/WeQJA2oRyxJodA0Ck+9U5X8EDQGxyOa8jZQRANumcJOgIBUAAYACarKwFQPWQAeIkSgZAytZjD3FQBkCUTceENfQGQNxi2np5KQdAXsQq+vmXB0AnCTKKM70HQOw31rAM/QdAtow/TMg2CEAmO45vvjsIQLHyTbYiWAhAFROJVVZZCEDwDmT1bk4IQOzffNomRQhAJjuOb747CEDOCp63YzAIQBSP55h/AwhANuuW52/BB0BexCr6+ZcHQC7ZRj61dAdAAzxFze4pB0CUTceENfQGQL+JCkxQ2wZALNvp+wyABkDK1mMPcVAGQHjWeZzZFAZAAGAAmqysBUBfYHPZypYFQDbpnCToCAVAiYR7fAYEBUBscjmvI2UEQGdQX/ZWWwRApPvVOV/BA0Ael/wAmaUDQNqEcsSaHQNAsrm5gHHkAkAQDg9P1nkCQORLv/d6/wFARper2RHWAUB8IEhkTTIBQJy0pp4Z1gBAsqnk7oiOAEDQZQLziNX/P2C2od6a2/4/QHg7CACO/j+rinQdd0b9PxidrTLu/vs/hK/mR2W3+j/wwR9d3G/5P1zUWHJTKPg/zOaRh8rg9j84+cqcQZn1P2Zj9Q+NwfQ/pAsEsrhR9D8QHj3HLwrzP6Q2iOLV6vI/rBnAe2wD8j98MHbcpsLxP6ZPv4UeHPE/ITHEFYGj8D/qQq/xHXvwP6AO6R7WdPA/","dtype":"float64","order":"little","shape":[102]},"y":{"__ndarray__":"usqk/Ubb+T8YGQR0/2b6P3REw+7o+fo/ML7h34oY/D/oNwDRLDf9P6SxHsLOVf4/XCs9s3B0/z98zluC57X/P4zSLVKJSQBAaA+9StrYAEC4IP07GgkBQEZMTEMraAFAu/hlG0f0AUAkids7fPcBQADGajTNhgJA1uISosm+AkDeAvosHhYDQKh/s33wegNAuj+JJW+lA0D8YSi7ehwEQJh8GB7ANARAHvTBToKoBEB0uacWEcQEQPAUT6Y5LQVAUvY2D2JTBUAroCOyXaEFQC4zxgez4gVAWpcdGDb8BUAkA7gLRUMGQAxwVQAEcgZANkUc1TiGBkCIrfNbLMkGQOis5PhUAQdAIqIZsPQEB0A8YzEUwjkHQBbN4FS1YwdAalRHB1SBB0D7YFAYG4gHQOcONoT2gQdAngzMrAd3B0BT8kq0VU0HQOis5PhUAQdA4erUxcL9BkDR/ULjFpUGQAxwVQAEcgZACoGMwfsSBkAuM8YHs+IFQFL2Ng9iUwVAdLmnFhHEBEADGFCpobAEQJh8GB7ANARAuj+JJW+lA0DeAvosHhYDQADGajTNhgJAoSPcaq1GAkAkids7fPcBQEZMTEMraAFAaA+9StrYAEBY6GMQ8owAQIzSLVKJSQBAXSs9s3B0/z9QHRNmt7L+P6SxHsLOVf4/6DcA0Sw3/T+1v3MlbrX8PzC+4d+KGPw/WpYCzyYt+z90RMPu6Pn6P4hbNB/x5Pk/usqk/Ubb+T8AQoIKac34PwBRhgylvPg/robe47XI9z9G12cbA573P9s6uRKUzfY/jF1JKmF/9j8dnDJeF+31P9LjKjm/YPU/DsImWUIw9T+LPX4Bd5D0PxhqDEgdQvQ/SOOGGwMA9D+uckZUgnnzP17w7VZ7I/M/MtWfc7IG8z/CTQL2Ja3yP3Y+oWtxfPI/lg1fpI1j8j/UMhxcpEXyP2CK6oSFLPI/h2lFVohT8j+JyEtVHNTyP17w7VZ7I/M/mp8wcbpM8z///KCeeR/0PxhqDEgdQvQ/0uMqOb9g9T/mpL4vO6j1P4xdSSphf/Y/RtdnGwOe9z8AUYYMpbz4P7rKpP1G2/k/","dtype":"float64","order":"little","shape":[102]}},"selected":{"id":"23859"},"selection_policy":{"id":"23858"}},"id":"23838","type":"ColumnDataSource"},{"attributes":{},"id":"23857","type":"Selection"},{"attributes":{"source":{"id":"23838"}},"id":"23843","type":"CDSView"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23839","type":"Patch"},{"attributes":{},"id":"23850","type":"AllLabels"},{"attributes":{},"id":"23855","type":"Selection"},{"attributes":{"end":7.26729343196563,"start":-2.8882055222669747},"id":"23844","type":"Range1d"},{"attributes":{},"id":"23859","type":"Selection"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23829","type":"Patch"},{"attributes":{"axis":{"id":"23799"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23802","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"23826"},"glyph":{"id":"23827"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23829"},"nonselection_glyph":{"id":"23828"},"view":{"id":"23831"}},"id":"23830","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23815","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23835","type":"Patch"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23841","type":"Patch"},{"attributes":{"coordinates":null,"formatter":{"id":"23852"},"group":null,"major_label_policy":{"id":"23853"},"ticker":{"id":"23800"}},"id":"23799","type":"LinearAxis"},{"attributes":{},"id":"23808","type":"PanTool"},{"attributes":{"coordinates":null,"group":null},"id":"23846","type":"Title"},{"attributes":{"coordinates":null,"data_source":{"id":"23832"},"glyph":{"id":"23833"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23835"},"nonselection_glyph":{"id":"23834"},"view":{"id":"23837"}},"id":"23836","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23826"}},"id":"23831","type":"CDSView"},{"attributes":{"overlay":{"id":"23815"}},"id":"23809","type":"BoxZoomTool"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23827","type":"Patch"},{"attributes":{"below":[{"id":"23799"}],"center":[{"id":"23802"},{"id":"23806"}],"height":500,"left":[{"id":"23803"}],"output_backend":"webgl","renderers":[{"id":"23830"},{"id":"23836"},{"id":"23842"}],"title":{"id":"23846"},"toolbar":{"id":"23817"},"toolbar_location":null,"width":500,"x_range":{"id":"23844"},"x_scale":{"id":"23795"},"y_range":{"id":"23845"},"y_scale":{"id":"23797"}},"id":"23790","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"23814","type":"HoverTool"},{"attributes":{"overlay":{"id":"23816"}},"id":"23811","type":"LassoSelectTool"},{"attributes":{"toolbars":[{"id":"23817"}],"tools":[{"id":"23807"},{"id":"23808"},{"id":"23809"},{"id":"23810"},{"id":"23811"},{"id":"23812"},{"id":"23813"},{"id":"23814"}]},"id":"23864","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23816","type":"PolyAnnotation"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23833","type":"Patch"},{"attributes":{},"id":"23795","type":"LinearScale"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23840","type":"Patch"},{"attributes":{},"id":"23800","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"eBqun5MW77+wMvPhrzHvv2PlH3lVB++/FucRX843779c+bSrGvPvvwVZ908AGfC/5nOCine577/24Hv3gQLvv7L8RKIb/+6/sQ0O/i2/7r/ue4AgBvzuv/bge/eBAu+/bNatsuVO77/24Hv3gQLvv8uff+QWOu6/EOVjfb1y7b803qHEF6jsv9AF7iFwc+y/4Ah/4JXJ67/Etq1+0Pvqv0yYeBKiTeq/qCpgTF7k6b/AVHDsEcnpv1gHpi3LKum/MFvGUq8b6L+AT9J2TFXnvyrJomz9Ree/+Dkhz7uz5r9cdEShOsbkv1CctpRZwuS/vj7Yq1tG4780mbbLKDfiv5NG6pHzIOK/oVXi33Bb4b/YZlC+jyHgvxh8UewtUN+/QfAZauSP3b/QxTVBCjLav7W6V6fN+Nm/3DOD/Ozq1r+ADxqW5hPVv8pkVRcdl9O/HjOAE1Yx0L9gsvzVhevPv9WKSYdtlcq/0EXFfz6vxb+VlOMXOz7Fv8qMnlMzfMC/YLIbU+7ltr8RXyNVa9Wyvz+1Z0zG7Im/AMlmNf1qg7+VXhLX9OymPwAAwgUvC7I//wcy5cbpvD+gbBjZ3kHDPxy60cojCsg/QNlPLyZ+zT+MGzacYCPQP/Ciw8I23dM/Av3CkzlS1D84Wd9tWvvYP/aCCRcKQ9k/kBQrlsgJ3j+JD/sYfhneP9AATB2YeOE/7GIL4tCb4T8QPpm34irkP9AdxHlqtOQ/OBknjfS55j//ztjFmpjoP2D0tGIGSek/hM9COBjY6z9sISLzinDsP6yq0A0qZ+4/Qt5Wka9i7z/qQq/xHXvwP7DoMmQn/fA/fDB23KbC8T+XBYFrisjyPxAePccvCvM/pAsEsrhR9D/y4luiVj71Pzj5ypxBmfU/xMmV9I/Z9j/M5pGHyuD2P7146sB1Dvg/XNRYclMo+D/wwR9d3G/5P2Qb15wM8/k/hK/mR2W3+j8Yna0y7v77P+Y/QBcTcfw/rIp0HXdG/T9AeDsIAI7+P/oibKSQSP8/0GUC84jV/z+yqeTuiI4AQHwgSGRNMgFA1pCdLh02AUBGl6vZEdYBQBAOD0/WeQJAxJk9ez4GA0DahHLEmh0DQKT71TlfwQNAbHI5ryNlBEDM7AZq1cYEQDbpnCToCAVAAGAAmqysBUDK1mMPcVAGQL/j17J77AZAlU3HhDX0BkA3ICQugfwGQF7EKvr5lwdAJjuOb747CEAshStD83gIQPCx8eSC3whAuihVWkeDCUCEn7jPCycKQE4WHEXQygpAGI1/upRuC0DiA+MvWRIMQNKONZQiswxAqnpGpR22DEB08aka4lkNQHW02YXxag1APmgNkKb9DUAI33AFa6EOQNJV1HovRQ9Afp6VtHFWD0CczDfw8+gPQB8kEBMjLhBAsqHNMlxGEEAXXX9tPpgQQHwYMagg6hBAoSMY67YEEUDh0+LiAjwRQEaPlB3ljRFAiTGoKT+ZEUCrSkZYx98RQK2ZHgNCGxJADwb4kqkxEkAati38SGYSQHTBqc2LgxJAMKm8msSzEkDZfFsIbtUSQNHojGF5ERNAPjgNQ1AnE0AMT5kJDFoTQKTzvn0yeRNAaxur/i1/E0Awpk6bNYcTQH1jerwZlRNACa9wuBTLE0DdVandr9oTQNAEjESbBBRACjvb6nj7E0Bg80NaX/cTQGY6YwuHEBRAbWoi8/YcFEDuGJmGVj4UQL7Rl1mzSxRAyL6zdzJLFEDbWZio3k4UQEDfndVNShRA41tGvFU3FECRXjTgUyYUQPwMSpv6IBRAbWoi8/YcFECXBNbqmRwUQAr55NhiExRAtc0TU1MBFECW1/gp2OsTQDePd/Oy0xNACK9wuBTLE0BkZj/Jw8ATQPXtP8nHtRNAzrLM4c+mE0CoJj3en48TQFVK8HK5eRNAo/O+fTJ5E0AWpvOsvGcTQHFVOkZsTBNAuO5/ErQtE0A+OA1DUCcTQOI1yTOOChNA8YjOlrLdEkDZfFsIbtUSQOJbUuxbqBJAdMGpzYuDEkAFqTN61noSQNCTuBtUXRJAPeI5jRA+EkAPBviSqTESQD6K1FkRExJAq0pGWMffEUDMUc87ZtgRQACcGJr2lhFARo+UHeWNEUA7yffLPVoRQOHT4uICPBFAWXzUHochEUB8GDGoIOoQQMqm0BVL5BBArmpyj6+jEEAXXX9tPpgQQGVGFWnYZBBAsqHNMlxGEECi3zP/9jIQQEpMK8bsBxBAnMw38PPoD0APYnnQVKMPQNJV1HovRQ9AKsKB0IoPD0AI33AFa6EOQKTNV4URYQ5APmgNkKb9DUBvQHeNUa4NQHTxqRriWQ1Asm13icgSDUCqekalHbYMQHJBmooNfAxA4gPjL1kSDEDF6jvwUdgLQBiNf7qUbgtAykfIFQg2C0BOFhxF0MoKQCZy9OQtgApAhJ+4zwsnCkDcQbvks6cJQLooVVpHgwlA8LHx5ILfCEBS+FqGiscIQCY7jm++OwhAeklMMxzqB0BexCr6+ZcHQL3GtaI/IgdAlE3HhDX0BkBHEMZ3mWEGQMrWYw9xUAZA9NZTFWOzBUAAYACarKwFQDbpnCToCAVAwDn4lrCxBEBscjmvI2UEQKT71TlfwQNAOQbI9Jc8A0DahHLEmh0DQBAOD0/WeQJAinF2XE4kAkBGl6vZEdYBQHwgSGRNMgFAPBd1y9bTAECyqeTuiI4AQNBlAvOI1f8/PzoAc8DU/j9BeDsIAI7+P6yKdB13Rv0/9BoSO+E3/D8Yna0y7v77P4Sv5kdlt/o/8MEfXdxv+T9c1FhyUyj4P+KEq5p23/c/zOaRh8rg9j84+cqcQZn1P6QLBLK4UfQ/EB49xy8K8z98MHbcpsLxP+pCr/Ede/A/LC+DXMU78D+sqtANKmfuP4TPQjgY2Os/YPS0YgZJ6T84GSeN9LnmPxA+mbfiKuQ/7GIL4tCb4T+ID/sYfhnePzhZ321a+9g/8KLDwjbd0z9A2U8vJn7NP6BsGNneQcM/2J6siJRPtj8AAMIFLwuyP/AshS/0S1U/AMlmNf1qg79gshtT7uW2v9BFxX8+r8W/Jl+PeVTtx79gsvzVhevPv2nGFO5VpNG/gA8aluYT1b/QxTVBCjLav4B2Er0awtq/NMgA4kQG3b8YfFHsLVDfvweMidtn6OG/NJm2yyg34r8ZfkBzpVrjv1x0RKE6xuS/5/szQaSc5b+AT9J2TFXnv9d5cx+tPui/QzNqc9cc6b+2PJb2knnpv6gqYExe5Om/UVo58Wyn6r9QEL7hLEDsv9AF7iFwc+y/mKBNqbAT7r/24Hv3gQLvv3garp+TFu+/AADCBS8Lsj/e8Hp0TeW0P8Q7ZuwKvrs/fe9er6hvwT+gbBjZ3kHDP6Z5TeXiZcU/3jphzlfsyz9A2U8vJn7NP9/RfNuYGtI/8KLDwjbd0z/co+NZRe7VPzhZ321a+9g/ZurDJWiO2j+ID/sYfhneP+xiC+LQm+E/JvB/EYHi4T8QPpm34irkP94Wq6MukuY/OBknjfS55j9g9LRiBknpP4TPQjgY2Os/rKrQDSpn7j/qQq/xHXvwP3wwdtymwvE/EB49xy8K8z+kCwSyuFH0Pzj5ypxBmfU/zOaRh8rg9j9c1FhyUyj4P+QCdxnfivg/78EfXdxv+T+Er+ZHZbf6PxidrTLu/vs/rIp0HXdG/T+HCYH+tYv9P0B4OwgAjv4/0GUC84jV/z+0Z6BZ0kYAQLKp5O6IjgBAfCBIZE0yAUA0vShHE5sBQEaXq9kR1gFAEA4PT9Z5AkBsP7tDOdMCQNqEcsSaHQNApPvVOV/BA0BocsFNG+MDQGxyOa8jZQRAMrwgxa+7BEA26Zwk6AgFQDJQH9mqgQVAAGAAmqysBUA9triDNkwGQMrWYw9xUAZAlE3HhDX0BkDP/Nj3rh4HQF7EKvr5lwdA8uOjNoPqB0AmO45vvjsIQGJ1oEnJmwhA8LHx5ILfCEDoq5coOjoJQLooVVpHgwlA3MckOqfKCUCEn7jPCycKQFD2QtDhTwpAThYcRdDKCkBq3F9XB9UKQKWYPf5sWgtAGI1/upRuC0AVSxn+SNALQOID4y9ZEgxAX+dDNGkzDECsRlzW3pkMQKp6RqUdtgxA8CUA5yILDUB08aka4lkNQCjrmzK9cQ1AyyFPrbHTDUA+aA2Qpv0NQNKcY6Q3Mg5A6ptPNpOFDkAI33AFa6EOQBhlspk/0A5AP7rrUyMYD0DSVdR6L0UPQDz/Gn1FUw9AWndr7Rp+D0Cs+GWVD6oPQNOws+eo3Q9Am8w38PPoD0ARJFL+yQUQQDvnSsw/EhBAo/cA2HUbEECCy8yUAyoQQASnSnCfNhBAOox12so6EEBW4EVWBjwQQJmM4FIIOxBAI6nU7FwyEEDRzsN2kiEQQMbs5G7JBxBAnMw38PPoD0CmYKEpVNkPQLIQFhPSoA9A4gFmAp9QD0DSVdR6L0UPQEbSufnB8g5AB99wBWuhDkAahhidm34OQD5oDZCm/Q1A1g8zUki4DUB08aka4lkNQOiwuXky4gxAqnpGpR22DEDhUsK9zhUMQOID4y9ZEgxAGI1/upRuC0BOFhxF0MoKQDZMtmCnmwpAhJ+4zwsnCkC6KFVaR4MJQPCx8eSC3whAJzuOb747CEBexCr6+ZcHQJRNx4Q19AZAytZjD3FQBkAAYACarKwFQDbpnCToCAVAbHI5ryNlBEC+O40lmMgDQKT71TlfwQNA2oRyxJodA0AQDg9P1nkCQEaXq9kR1gFAcJBiv/TPAUB8IEhkTTIBQLKp5O6IjgBAzSY5t3AoAEDQZQLziNX/P0B4OwgAjv4/wUQSwrGq/T+rinQdd0b9PxidrTLu/vs/phZGWMx6+z+Er+ZHZbf6Py8Y1xdFg/k/8MEfXdxv+T9c1FhyUyj4P7heV+Znrvc/zOaRh8rg9j/ZY1ushvv1Pzj5ypxBmfU/qUTzrt1n9D+jCwSyuFH0PxAePccvCvM/8iuFgq308j98MHbcpsLxPxmbOaseq/E/6kKv8R178D/PyDOHY27wP6yq0A0qZ+4/wMesmlwf7D+Ez0I4GNjrP83kVN2Q6uk/YfS0YgZJ6T/mxXxGkLXnPzgZJ430ueY/lvQK0k+o5T8QPpm34irkPwf9Xh8pxeM/pS97A3fs4T/sYgvi0JvhP0utwSa2HuA/iA/7GH4Z3j8EEP+t+kTdPz7xYzJLldo/OFnfbVr72D8YaRQ2c+bXP9xcmAyrNdU/8KLDwjbd0z9w2eJjbsHSP0fmT/rSLNA/QNlPLyZ+zT9pGQR2KtrKP+dhsJrCqcU/oGwY2d5Bwz+5jb2nUnLBP/7wA+O1Zrw/ktp0rDPvtj/b7p/fPTezPwAAwgUvC7I/zdudGL+AsT962edPT0OtP+22tdL5BaM/cWiKajY2lz8JSwfWHNmdP4ur3WvifKY/VqWT0tfoqT9KHixQlZSsP9fNtJ4dvrA/AADCBS8Lsj8=","dtype":"float64","order":"little","shape":[514]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[514]}},"selected":{"id":"23855"},"selection_policy":{"id":"23854"}},"id":"23826","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"23864"},"toolbar_location":"above"},"id":"23865","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23828","type":"Patch"},{"attributes":{},"id":"23807","type":"ResetTool"}],"root_ids":["23866"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"f99195af-9db3-4e04-9ffe-822ff2bc9721","root_ids":["23866"],"roots":{"23866":"44a03752-b149-4f8b-8328-d2187c573685"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();