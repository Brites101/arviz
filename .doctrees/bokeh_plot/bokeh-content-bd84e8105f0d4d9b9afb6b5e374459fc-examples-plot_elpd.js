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
    
      
      
    
      const element = document.getElementById("dcb41397-39ab-4c7f-8d15-4091c694cc84");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dcb41397-39ab-4c7f-8d15-4091c694cc84' but no matching script tag was found.")
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
                    
                  const docs_json = '{"242b787b-c6a9-44b6-bf1f-adf1482024db":{"defs":[],"roots":{"references":[{"attributes":{"toolbar":{"id":"20642"},"toolbar_location":"above"},"id":"20643","type":"ToolbarBox"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20623","type":"Scatter"},{"attributes":{"below":[{"id":"20596"}],"center":[{"id":"20599"},{"id":"20603"}],"height":288,"left":[{"id":"20600"}],"output_backend":"webgl","renderers":[{"id":"20625"}],"title":{"id":"20627"},"toolbar":{"id":"20614"},"toolbar_location":null,"width":432,"x_range":{"id":"20588"},"x_scale":{"id":"20592"},"y_range":{"id":"20590"},"y_scale":{"id":"20594"}},"id":"20587","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20637","type":"Selection"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20631"},"group":null,"major_label_policy":{"id":"20632"},"ticker":{"id":"20601"}},"id":"20600","type":"LinearAxis"},{"attributes":{"tools":[{"id":"20604"},{"id":"20605"},{"id":"20606"},{"id":"20607"},{"id":"20608"},{"id":"20609"},{"id":"20610"},{"id":"20611"}]},"id":"20614","type":"Toolbar"},{"attributes":{},"id":"20597","type":"BasicTicker"},{"attributes":{},"id":"20592","type":"LinearScale"},{"attributes":{"source":{"id":"20624"}},"id":"20626","type":"CDSView"},{"attributes":{},"id":"20607","type":"WheelZoomTool"},{"attributes":{},"id":"20634","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"20612"}},"id":"20606","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"20643"},{"id":"20641"}]},"id":"20644","type":"Column"},{"attributes":{"overlay":{"id":"20613"}},"id":"20608","type":"LassoSelectTool"},{"attributes":{},"id":"20604","type":"ResetTool"},{"attributes":{"children":[[{"id":"20587"},0,0]]},"id":"20641","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"20624"},"glyph":{"id":"20623"},"group":null,"hover_glyph":null,"view":{"id":"20626"}},"id":"20625","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"20634"},"group":null,"major_label_policy":{"id":"20635"},"ticker":{"id":"20597"}},"id":"20596","type":"LinearAxis"},{"attributes":{},"id":"20610","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20627","type":"Title"},{"attributes":{"axis":{"id":"20596"},"coordinates":null,"group":null,"ticker":null},"id":"20599","type":"Grid"},{"attributes":{},"id":"20631","type":"BasicTickFormatter"},{"attributes":{},"id":"20601","type":"BasicTicker"},{"attributes":{},"id":"20605","type":"PanTool"},{"attributes":{},"id":"20636","type":"UnionRenderers"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20637"},"selection_policy":{"id":"20636"}},"id":"20624","type":"ColumnDataSource"},{"attributes":{},"id":"20609","type":"UndoTool"},{"attributes":{"callback":null},"id":"20611","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"20614"}],"tools":[{"id":"20604"},{"id":"20605"},{"id":"20606"},{"id":"20607"},{"id":"20608"},{"id":"20609"},{"id":"20610"},{"id":"20611"}]},"id":"20642","type":"ProxyToolbar"},{"attributes":{},"id":"20590","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20612","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20613","type":"PolyAnnotation"},{"attributes":{},"id":"20635","type":"AllLabels"},{"attributes":{},"id":"20588","type":"DataRange1d"},{"attributes":{},"id":"20594","type":"LinearScale"},{"attributes":{},"id":"20632","type":"AllLabels"},{"attributes":{"axis":{"id":"20600"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20603","type":"Grid"}],"root_ids":["20644"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"242b787b-c6a9-44b6-bf1f-adf1482024db","root_ids":["20644"],"roots":{"20644":"dcb41397-39ab-4c7f-8d15-4091c694cc84"}}];
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