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
    
      
      
    
      const element = document.getElementById("206b8740-77b8-4bd1-9984-e72dd03428ee");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '206b8740-77b8-4bd1-9984-e72dd03428ee' but no matching script tag was found.")
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
                    
                  const docs_json = '{"d55b6b23-da1b-41da-adb0-1a5be9147848":{"defs":[],"roots":{"references":[{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20925"},{"id":"20931"}]},"id":"20947","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20922","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20930","type":"Line"},{"attributes":{},"id":"20953","type":"BasicTickFormatter"},{"attributes":{},"id":"20965","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20942","type":"Circle"},{"attributes":{"source":{"id":"20933"}},"id":"20938","type":"CDSView"},{"attributes":{},"id":"20957","type":"AllLabels"},{"attributes":{"overlay":{"id":"20911"}},"id":"20906","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20939"},"glyph":{"id":"20940"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20942"},"nonselection_glyph":{"id":"20941"},"view":{"id":"20944"}},"id":"20943","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20953"},"group":null,"major_label_policy":{"id":"20954"},"ticker":{"id":"20899"}},"id":"20898","type":"LinearAxis"},{"attributes":{"overlay":{"id":"20910"}},"id":"20904","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20923","type":"Circle"},{"attributes":{},"id":"20886","type":"DataRange1d"},{"attributes":{},"id":"20956","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"20894"},"coordinates":null,"group":null,"ticker":null},"id":"20897","type":"Grid"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20934","type":"Line"},{"attributes":{},"id":"20954","type":"AllLabels"},{"attributes":{"axis":{"id":"20898"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20901","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"20921"},"glyph":{"id":"20922"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20924"},"nonselection_glyph":{"id":"20923"},"view":{"id":"20926"}},"id":"20925","type":"GlyphRenderer"},{"attributes":{"above":[{"id":"20946"}],"below":[{"id":"20894"}],"center":[{"id":"20897"},{"id":"20901"}],"height":500,"left":[{"id":"20898"}],"output_backend":"webgl","renderers":[{"id":"20925"},{"id":"20931"},{"id":"20937"},{"id":"20943"},{"id":"20945"}],"title":{"id":"20949"},"toolbar":{"id":"20912"},"toolbar_location":null,"width":500,"x_range":{"id":"20886"},"x_scale":{"id":"20890"},"y_range":{"id":"20888"},"y_scale":{"id":"20892"}},"id":"20885","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20962","type":"UnionRenderers"},{"attributes":{},"id":"20963","type":"Selection"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20956"},"group":null,"major_label_policy":{"id":"20957"},"ticker":{"id":"20895"}},"id":"20894","type":"LinearAxis"},{"attributes":{"source":{"id":"20921"}},"id":"20926","type":"CDSView"},{"attributes":{},"id":"20958","type":"UnionRenderers"},{"attributes":{},"id":"20960","type":"UnionRenderers"},{"attributes":{},"id":"20961","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20929","type":"Line"},{"attributes":{},"id":"20899","type":"BasicTicker"},{"attributes":{},"id":"20907","type":"UndoTool"},{"attributes":{"tools":[{"id":"20902"},{"id":"20903"},{"id":"20904"},{"id":"20905"},{"id":"20906"},{"id":"20907"},{"id":"20908"},{"id":"20909"}]},"id":"20912","type":"Toolbar"},{"attributes":{},"id":"20890","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20949","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20959"},"selection_policy":{"id":"20958"}},"id":"20921","type":"ColumnDataSource"},{"attributes":{},"id":"20902","type":"ResetTool"},{"attributes":{"source":{"id":"20927"}},"id":"20932","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20963"},"selection_policy":{"id":"20962"}},"id":"20933","type":"ColumnDataSource"},{"attributes":{},"id":"20903","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20928","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20936","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20910","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20935","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20961"},"selection_policy":{"id":"20960"}},"id":"20927","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20911","type":"PolyAnnotation"},{"attributes":{},"id":"20908","type":"SaveTool"},{"attributes":{},"id":"20959","type":"Selection"},{"attributes":{},"id":"20892","type":"LinearScale"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20947"},{"id":"20948"}],"location":"center_right","orientation":"horizontal"},"id":"20946","type":"Legend"},{"attributes":{"coordinates":null,"data_source":{"id":"20927"},"glyph":{"id":"20928"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20930"},"nonselection_glyph":{"id":"20929"},"view":{"id":"20932"}},"id":"20931","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"20933"},"glyph":{"id":"20934"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20936"},"nonselection_glyph":{"id":"20935"},"view":{"id":"20938"}},"id":"20937","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"20909","type":"HoverTool"},{"attributes":{"children":[{"id":"20971"},{"id":"20969"}]},"id":"20972","type":"Column"},{"attributes":{},"id":"20905","type":"WheelZoomTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20943"},{"id":"20937"}]},"id":"20948","type":"LegendItem"},{"attributes":{},"id":"20964","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20924","type":"Circle"},{"attributes":{"children":[[{"id":"20885"},0,0]]},"id":"20969","type":"GridBox"},{"attributes":{"toolbar":{"id":"20970"},"toolbar_location":"above"},"id":"20971","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20940","type":"Circle"},{"attributes":{},"id":"20888","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"20912"}],"tools":[{"id":"20902"},{"id":"20903"},{"id":"20904"},{"id":"20905"},{"id":"20906"},{"id":"20907"},{"id":"20908"},{"id":"20909"}]},"id":"20970","type":"ProxyToolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20965"},"selection_policy":{"id":"20964"}},"id":"20939","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20941","type":"Circle"},{"attributes":{},"id":"20895","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20945","type":"Span"},{"attributes":{"source":{"id":"20939"}},"id":"20944","type":"CDSView"}],"root_ids":["20972"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"d55b6b23-da1b-41da-adb0-1a5be9147848","root_ids":["20972"],"roots":{"20972":"206b8740-77b8-4bd1-9984-e72dd03428ee"}}];
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