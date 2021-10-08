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
    
      
      
    
      const element = document.getElementById("ae96127a-6cee-4163-acac-07dbdd1ff4c0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ae96127a-6cee-4163-acac-07dbdd1ff4c0' but no matching script tag was found.")
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
                    
                  const docs_json = '{"874c43ed-9fac-4fa3-ac88-ec2c85f836db":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18163"},"selection_policy":{"id":"18162"}},"id":"18124","type":"ColumnDataSource"},{"attributes":{},"id":"18169","type":"Selection"},{"attributes":{"callback":null},"id":"18110","type":"HoverTool"},{"attributes":{},"id":"18157","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"18124"},"glyph":{"id":"18125"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18127"},"nonselection_glyph":{"id":"18126"},"view":{"id":"18129"}},"id":"18128","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18139","type":"Circle"},{"attributes":{"source":{"id":"18136"}},"id":"18141","type":"CDSView"},{"attributes":{},"id":"18103","type":"ResetTool"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18169"},"selection_policy":{"id":"18168"}},"id":"18142","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18112","type":"PolyAnnotation"},{"attributes":{"source":{"id":"18124"}},"id":"18129","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"18136"},"glyph":{"id":"18137"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18139"},"nonselection_glyph":{"id":"18138"},"view":{"id":"18141"}},"id":"18140","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18126","type":"Scatter"},{"attributes":{"overlay":{"id":"18111"}},"id":"18105","type":"BoxZoomTool"},{"attributes":{},"id":"18106","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"18177"},{"id":"18175"}]},"id":"18178","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"18130"},"glyph":{"id":"18131"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18133"},"nonselection_glyph":{"id":"18132"},"view":{"id":"18135"}},"id":"18134","type":"GlyphRenderer"},{"attributes":{},"id":"18170","type":"UnionRenderers"},{"attributes":{},"id":"18171","type":"Selection"},{"attributes":{},"id":"18162","type":"UnionRenderers"},{"attributes":{},"id":"18163","type":"Selection"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18160"},"group":null,"major_label_policy":{"id":"18161"},"ticker":{"id":"18096"}},"id":"18095","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"18142"},"glyph":{"id":"18143"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18145"},"nonselection_glyph":{"id":"18144"},"view":{"id":"18147"}},"id":"18146","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18142"}},"id":"18147","type":"CDSView"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18143","type":"MultiLine"},{"attributes":{},"id":"18109","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18145","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18132","type":"MultiLine"},{"attributes":{"tools":[{"id":"18103"},{"id":"18104"},{"id":"18105"},{"id":"18106"},{"id":"18107"},{"id":"18108"},{"id":"18109"},{"id":"18110"}]},"id":"18113","type":"Toolbar"},{"attributes":{"axis":{"id":"18099"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18102","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18144","type":"MultiLine"},{"attributes":{},"id":"18160","type":"BasicTickFormatter"},{"attributes":{},"id":"18104","type":"PanTool"},{"attributes":{},"id":"18164","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null},"id":"18155","type":"Title"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18137","type":"Circle"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18122","type":"FixedTicker"},{"attributes":{},"id":"18165","type":"Selection"},{"attributes":{"coordinates":null,"formatter":{"id":"18157"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18158"},"ticker":{"id":"18122"}},"id":"18099","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18127","type":"Scatter"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18165"},"selection_policy":{"id":"18164"}},"id":"18130","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18149","type":"Circle"},{"attributes":{"children":[[{"id":"18086"},0,0]]},"id":"18175","type":"GridBox"},{"attributes":{"below":[{"id":"18095"}],"center":[{"id":"18098"},{"id":"18102"}],"height":500,"left":[{"id":"18099"}],"output_backend":"webgl","renderers":[{"id":"18128"},{"id":"18134"},{"id":"18140"},{"id":"18146"},{"id":"18152"},{"id":"18154"}],"title":{"id":"18155"},"toolbar":{"id":"18113"},"toolbar_location":null,"width":500,"x_range":{"id":"18087"},"x_scale":{"id":"18091"},"y_range":{"id":"18089"},"y_scale":{"id":"18093"}},"id":"18086","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18171"},"selection_policy":{"id":"18170"}},"id":"18148","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18150","type":"Circle"},{"attributes":{"overlay":{"id":"18112"}},"id":"18107","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"18176"},"toolbar_location":"above"},"id":"18177","type":"ToolbarBox"},{"attributes":{"toolbars":[{"id":"18113"}],"tools":[{"id":"18103"},{"id":"18104"},{"id":"18105"},{"id":"18106"},{"id":"18107"},{"id":"18108"},{"id":"18109"},{"id":"18110"}]},"id":"18176","type":"ProxyToolbar"},{"attributes":{},"id":"18161","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18151","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"18148"},"glyph":{"id":"18149"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18151"},"nonselection_glyph":{"id":"18150"},"view":{"id":"18153"}},"id":"18152","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18148"}},"id":"18153","type":"CDSView"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"18154","type":"Span"},{"attributes":{"source":{"id":"18130"}},"id":"18135","type":"CDSView"},{"attributes":{},"id":"18166","type":"UnionRenderers"},{"attributes":{"axis":{"id":"18095"},"coordinates":null,"group":null,"ticker":null},"id":"18098","type":"Grid"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18125","type":"Scatter"},{"attributes":{},"id":"18167","type":"Selection"},{"attributes":{},"id":"18093","type":"LinearScale"},{"attributes":{},"id":"18108","type":"UndoTool"},{"attributes":{},"id":"18087","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18111","type":"BoxAnnotation"},{"attributes":{"end":0.5,"start":-1.5},"id":"18089","type":"DataRange1d"},{"attributes":{},"id":"18096","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18133","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18167"},"selection_policy":{"id":"18166"}},"id":"18136","type":"ColumnDataSource"},{"attributes":{},"id":"18091","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18138","type":"Circle"},{"attributes":{},"id":"18158","type":"AllLabels"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18131","type":"MultiLine"},{"attributes":{},"id":"18168","type":"UnionRenderers"}],"root_ids":["18178"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"874c43ed-9fac-4fa3-ac88-ec2c85f836db","root_ids":["18178"],"roots":{"18178":"ae96127a-6cee-4163-acac-07dbdd1ff4c0"}}];
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