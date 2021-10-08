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
    
      
      
    
      const element = document.getElementById("e0be2b2f-771d-4c3b-ba8d-3332d05287bb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e0be2b2f-771d-4c3b-ba8d-3332d05287bb' but no matching script tag was found.")
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
                    
                  const docs_json = '{"1c47534e-14fb-4b68-87ef-7ba799720691":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"17291"},0,0]]},"id":"17345","type":"GridBox"},{"attributes":{"toolbars":[{"id":"17318"}],"tools":[{"id":"17308"},{"id":"17309"},{"id":"17310"},{"id":"17311"},{"id":"17312"},{"id":"17313"},{"id":"17314"},{"id":"17315"}]},"id":"17346","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"17304"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17307","type":"Grid"},{"attributes":{"coordinates":null,"formatter":{"id":"17338"},"group":null,"major_label_policy":{"id":"17339"},"ticker":{"id":"17301"}},"id":"17300","type":"LinearAxis"},{"attributes":{},"id":"17301","type":"BasicTicker"},{"attributes":{},"id":"17313","type":"UndoTool"},{"attributes":{"callback":null},"id":"17315","type":"HoverTool"},{"attributes":{},"id":"17294","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17335"},"group":null,"major_label_policy":{"id":"17336"},"ticker":{"id":"17305"}},"id":"17304","type":"LinearAxis"},{"attributes":{},"id":"17314","type":"SaveTool"},{"attributes":{},"id":"17296","type":"LinearScale"},{"attributes":{"children":[{"id":"17347"},{"id":"17345"}]},"id":"17348","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"17328"},"glyph":{"id":"17327"},"group":null,"hover_glyph":null,"view":{"id":"17330"}},"id":"17329","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17328"}},"id":"17330","type":"CDSView"},{"attributes":{},"id":"17341","type":"Selection"},{"attributes":{"overlay":{"id":"17316"}},"id":"17310","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"17308"},{"id":"17309"},{"id":"17310"},{"id":"17311"},{"id":"17312"},{"id":"17313"},{"id":"17314"},{"id":"17315"}]},"id":"17318","type":"Toolbar"},{"attributes":{},"id":"17305","type":"BasicTicker"},{"attributes":{},"id":"17298","type":"LinearScale"},{"attributes":{},"id":"17309","type":"PanTool"},{"attributes":{},"id":"17308","type":"ResetTool"},{"attributes":{},"id":"17311","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17331","type":"Title"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17341"},"selection_policy":{"id":"17340"}},"id":"17328","type":"ColumnDataSource"},{"attributes":{},"id":"17339","type":"AllLabels"},{"attributes":{"axis":{"id":"17300"},"coordinates":null,"group":null,"ticker":null},"id":"17303","type":"Grid"},{"attributes":{},"id":"17335","type":"BasicTickFormatter"},{"attributes":{},"id":"17336","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17316","type":"BoxAnnotation"},{"attributes":{},"id":"17338","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"17317"}},"id":"17312","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"17346"},"toolbar_location":"above"},"id":"17347","type":"ToolbarBox"},{"attributes":{},"id":"17292","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17327","type":"Scatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17317","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"17300"}],"center":[{"id":"17303"},{"id":"17307"}],"height":288,"left":[{"id":"17304"}],"output_backend":"webgl","renderers":[{"id":"17329"}],"title":{"id":"17331"},"toolbar":{"id":"17318"},"toolbar_location":null,"width":432,"x_range":{"id":"17292"},"x_scale":{"id":"17296"},"y_range":{"id":"17294"},"y_scale":{"id":"17298"}},"id":"17291","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17340","type":"UnionRenderers"}],"root_ids":["17348"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"1c47534e-14fb-4b68-87ef-7ba799720691","root_ids":["17348"],"roots":{"17348":"e0be2b2f-771d-4c3b-ba8d-3332d05287bb"}}];
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