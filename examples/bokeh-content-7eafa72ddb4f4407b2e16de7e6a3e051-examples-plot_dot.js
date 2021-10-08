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
    
      
      
    
      const element = document.getElementById("edb94370-e797-4536-a620-64bf5d72cfbc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'edb94370-e797-4536-a620-64bf5d72cfbc' but no matching script tag was found.")
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
                    
                  const docs_json = '{"6f6ffd11-f3a2-4b78-a568-38addffa6965":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20449","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20488","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20468"},"glyph":{"id":"20469"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20471"},"nonselection_glyph":{"id":"20470"},"view":{"id":"20473"}},"id":"20472","type":"GlyphRenderer"},{"attributes":{},"id":"20439","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"20495"},"group":null,"major_label_policy":{"id":"20496"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20446"}},"id":"20445","type":"LinearAxis"},{"attributes":{"below":[{"id":"20441"}],"center":[{"id":"20444"},{"id":"20448"}],"height":360,"left":[{"id":"20445"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20472"},{"id":"20478"},{"id":"20484"},{"id":"20490"}],"title":{"id":"20492"},"toolbar":{"id":"20459"},"toolbar_location":null,"width":720,"x_range":{"id":"20433"},"x_scale":{"id":"20437"},"y_range":{"id":"20435"},"y_scale":{"id":"20439"}},"id":"20432","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"formatter":{"id":"20498"},"group":null,"major_label_policy":{"id":"20499"},"ticker":{"id":"20442"}},"id":"20441","type":"LinearAxis"},{"attributes":{"children":[{"id":"20513"},{"id":"20511"}]},"id":"20514","type":"Column"},{"attributes":{},"id":"20437","type":"LinearScale"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20477","type":"Line"},{"attributes":{"source":{"id":"20486"}},"id":"20491","type":"CDSView"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20501"},"selection_policy":{"id":"20500"}},"id":"20468","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20507"},"selection_policy":{"id":"20506"}},"id":"20486","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"20505"},"selection_policy":{"id":"20504"}},"id":"20480","type":"ColumnDataSource"},{"attributes":{},"id":"20500","type":"UnionRenderers"},{"attributes":{},"id":"20433","type":"DataRange1d"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20503"},"selection_policy":{"id":"20502"}},"id":"20474","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20457"}},"id":"20451","type":"BoxZoomTool"},{"attributes":{},"id":"20502","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"20480"},"glyph":{"id":"20481"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20483"},"nonselection_glyph":{"id":"20482"},"view":{"id":"20485"}},"id":"20484","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20470","type":"Line"},{"attributes":{"source":{"id":"20480"}},"id":"20485","type":"CDSView"},{"attributes":{"overlay":{"id":"20458"}},"id":"20453","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20471","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20489","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20482","type":"Circle"},{"attributes":{"callback":null},"id":"20456","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20486"},"glyph":{"id":"20487"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20489"},"nonselection_glyph":{"id":"20488"},"view":{"id":"20491"}},"id":"20490","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20476","type":"Line"},{"attributes":{"source":{"id":"20474"}},"id":"20479","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20483","type":"Circle"},{"attributes":{"children":[[{"id":"20432"},0,0]]},"id":"20511","type":"GridBox"},{"attributes":{},"id":"20495","type":"BasicTickFormatter"},{"attributes":{},"id":"20504","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"20449"},{"id":"20450"},{"id":"20451"},{"id":"20452"},{"id":"20453"},{"id":"20454"},{"id":"20455"},{"id":"20456"}]},"id":"20459","type":"Toolbar"},{"attributes":{},"id":"20498","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"20512"},"toolbar_location":"above"},"id":"20513","type":"ToolbarBox"},{"attributes":{},"id":"20505","type":"Selection"},{"attributes":{"axis":{"id":"20445"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20448","type":"Grid"},{"attributes":{"source":{"id":"20468"}},"id":"20473","type":"CDSView"},{"attributes":{},"id":"20499","type":"AllLabels"},{"attributes":{},"id":"20452","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null},"id":"20492","type":"Title"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20457","type":"BoxAnnotation"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20475","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20481","type":"Circle"},{"attributes":{},"id":"20507","type":"Selection"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20469","type":"Line"},{"attributes":{},"id":"20496","type":"AllLabels"},{"attributes":{},"id":"20506","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"20474"},"glyph":{"id":"20475"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20477"},"nonselection_glyph":{"id":"20476"},"view":{"id":"20479"}},"id":"20478","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20458","type":"PolyAnnotation"},{"attributes":{},"id":"20446","type":"BasicTicker"},{"attributes":{"axis":{"id":"20441"},"coordinates":null,"group":null,"ticker":null},"id":"20444","type":"Grid"},{"attributes":{},"id":"20503","type":"Selection"},{"attributes":{},"id":"20435","type":"DataRange1d"},{"attributes":{},"id":"20455","type":"SaveTool"},{"attributes":{},"id":"20442","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"20459"}],"tools":[{"id":"20449"},{"id":"20450"},{"id":"20451"},{"id":"20452"},{"id":"20453"},{"id":"20454"},{"id":"20455"},{"id":"20456"}]},"id":"20512","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20487","type":"Circle"},{"attributes":{},"id":"20501","type":"Selection"},{"attributes":{},"id":"20450","type":"PanTool"},{"attributes":{},"id":"20454","type":"UndoTool"}],"root_ids":["20514"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"6f6ffd11-f3a2-4b78-a568-38addffa6965","root_ids":["20514"],"roots":{"20514":"edb94370-e797-4536-a620-64bf5d72cfbc"}}];
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