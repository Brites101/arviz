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
    
      
      
    
      const element = document.getElementById("4e3c3a4d-46ea-42ef-9e48-308bc4b42d41");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4e3c3a4d-46ea-42ef-9e48-308bc4b42d41' but no matching script tag was found.")
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
                    
                  const docs_json = '{"f6bd9783-5d9e-437a-b35c-db87ed0916f5":{"defs":[],"roots":{"references":[{"attributes":{},"id":"48138","type":"BasicTickFormatter"},{"attributes":{},"id":"48139","type":"AllLabels"},{"attributes":{},"id":"48141","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48113","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48141"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48142"},"ticker":{"id":"48013"}},"id":"48012","type":"LinearAxis"},{"attributes":{},"id":"48142","type":"AllLabels"},{"attributes":{},"id":"48020","type":"ResetTool"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48138"},"group":null,"major_label_policy":{"id":"48139"},"ticker":{"id":"48101"}},"id":"48016","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48029","type":"PolyAnnotation"},{"attributes":{},"id":"48010","type":"LinearScale"},{"attributes":{"overlay":{"id":"48029"}},"id":"48024","type":"LassoSelectTool"},{"attributes":{},"id":"48026","type":"SaveTool"},{"attributes":{"axis":{"id":"48016"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48019","type":"Grid"},{"attributes":{},"id":"48155","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48173"},{"id":"48171"}]},"id":"48174","type":"Column"},{"attributes":{"axis":{"id":"48012"},"coordinates":null,"group":null,"ticker":null},"id":"48015","type":"Grid"},{"attributes":{},"id":"48156","type":"AllLabels"},{"attributes":{},"id":"48143","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48028","type":"BoxAnnotation"},{"attributes":{},"id":"48013","type":"BasicTicker"},{"attributes":{},"id":"48158","type":"BasicTickFormatter"},{"attributes":{},"id":"48144","type":"Selection"},{"attributes":{},"id":"48159","type":"AllLabels"},{"attributes":{"tools":[{"id":"48020"},{"id":"48021"},{"id":"48022"},{"id":"48023"},{"id":"48024"},{"id":"48025"},{"id":"48026"},{"id":"48027"}]},"id":"48030","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48103","type":"Title"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48114","type":"VBar"},{"attributes":{},"id":"48044","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48163"},"selection_policy":{"id":"48162"}},"id":"48112","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"48028"}},"id":"48022","type":"BoxZoomTool"},{"attributes":{},"id":"48008","type":"LinearScale"},{"attributes":{"callback":null},"id":"48027","type":"HoverTool"},{"attributes":{},"id":"48145","type":"UnionRenderers"},{"attributes":{},"id":"48023","type":"WheelZoomTool"},{"attributes":{},"id":"48146","type":"Selection"},{"attributes":{},"id":"48160","type":"UnionRenderers"},{"attributes":{},"id":"48021","type":"PanTool"},{"attributes":{},"id":"48025","type":"UndoTool"},{"attributes":{},"id":"48161","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48115","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48073"},"glyph":{"id":"48074"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48076"},"nonselection_glyph":{"id":"48075"},"view":{"id":"48078"}},"id":"48077","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48086","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48075","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48076","type":"VBar"},{"attributes":{},"id":"48147","type":"UnionRenderers"},{"attributes":{"source":{"id":"48073"}},"id":"48078","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48146"},"selection_policy":{"id":"48145"}},"id":"48080","type":"ColumnDataSource"},{"attributes":{},"id":"48148","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48082","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48081","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48080"},"glyph":{"id":"48081"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48083"},"nonselection_glyph":{"id":"48082"},"view":{"id":"48085"}},"id":"48084","type":"GlyphRenderer"},{"attributes":{},"id":"48162","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48088","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48093","type":"Span"},{"attributes":{"callback":null},"id":"48061","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48087"},"glyph":{"id":"48088"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48090"},"nonselection_glyph":{"id":"48089"},"view":{"id":"48092"}},"id":"48091","type":"GlyphRenderer"},{"attributes":{},"id":"48163","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48083","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48089","type":"VBar"},{"attributes":{"source":{"id":"48080"}},"id":"48085","type":"CDSView"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48155"},"group":null,"major_label_policy":{"id":"48156"},"ticker":{"id":"48133"}},"id":"48050","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48148"},"selection_policy":{"id":"48147"}},"id":"48087","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48158"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48159"},"ticker":{"id":"48047"}},"id":"48046","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48095","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48100","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48094"},"glyph":{"id":"48095"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48097"},"nonselection_glyph":{"id":"48096"},"view":{"id":"48099"}},"id":"48098","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48090","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48096","type":"VBar"},{"attributes":{},"id":"48047","type":"BasicTicker"},{"attributes":{"axis":{"id":"48046"},"coordinates":null,"group":null,"ticker":null},"id":"48049","type":"Grid"},{"attributes":{"source":{"id":"48087"}},"id":"48092","type":"CDSView"},{"attributes":{},"id":"48149","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48150"},"selection_policy":{"id":"48149"}},"id":"48094","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48106","type":"VBar"},{"attributes":{},"id":"48150","type":"Selection"},{"attributes":{"axis":{"id":"48050"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48053","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48125","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48135","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48074","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48097","type":"VBar"},{"attributes":{"overlay":{"id":"48062"}},"id":"48056","type":"BoxZoomTool"},{"attributes":{},"id":"48055","type":"PanTool"},{"attributes":{"source":{"id":"48094"}},"id":"48099","type":"CDSView"},{"attributes":{},"id":"48164","type":"UnionRenderers"},{"attributes":{},"id":"48054","type":"ResetTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"48133","type":"FixedTicker"},{"attributes":{},"id":"48060","type":"SaveTool"},{"attributes":{},"id":"48004","type":"DataRange1d"},{"attributes":{},"id":"48165","type":"Selection"},{"attributes":{},"id":"48057","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48107","type":"VBar"},{"attributes":{"overlay":{"id":"48063"}},"id":"48058","type":"LassoSelectTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48161"},"selection_policy":{"id":"48160"}},"id":"48105","type":"ColumnDataSource"},{"attributes":{},"id":"48059","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48112"},"glyph":{"id":"48113"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48115"},"nonselection_glyph":{"id":"48114"},"view":{"id":"48117"}},"id":"48116","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48120","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48121","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48108","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48165"},"selection_policy":{"id":"48164"}},"id":"48119","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"48003"},0,0],[{"id":"48039"},0,1]]},"id":"48171","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"48119"},"glyph":{"id":"48120"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48122"},"nonselection_glyph":{"id":"48121"},"view":{"id":"48124"}},"id":"48123","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48062","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48063","type":"PolyAnnotation"},{"attributes":{"source":{"id":"48112"}},"id":"48117","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48105"},"glyph":{"id":"48106"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48108"},"nonselection_glyph":{"id":"48107"},"view":{"id":"48110"}},"id":"48109","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48127","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48132","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48126"},"glyph":{"id":"48127"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48129"},"nonselection_glyph":{"id":"48128"},"view":{"id":"48131"}},"id":"48130","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48105"}},"id":"48110","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48122","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48128","type":"VBar"},{"attributes":{"source":{"id":"48119"}},"id":"48124","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48111","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48167"},"selection_policy":{"id":"48166"}},"id":"48126","type":"ColumnDataSource"},{"attributes":{},"id":"48166","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"48172"},"toolbar_location":"above"},"id":"48173","type":"ToolbarBox"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48118","type":"Span"},{"attributes":{},"id":"48167","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48129","type":"VBar"},{"attributes":{"source":{"id":"48126"}},"id":"48131","type":"CDSView"},{"attributes":{"below":[{"id":"48046"}],"center":[{"id":"48049"},{"id":"48053"},{"id":"48111"},{"id":"48118"},{"id":"48125"},{"id":"48132"}],"height":331,"left":[{"id":"48050"}],"output_backend":"webgl","renderers":[{"id":"48109"},{"id":"48116"},{"id":"48123"},{"id":"48130"}],"title":{"id":"48135"},"toolbar":{"id":"48064"},"toolbar_location":null,"width":496,"x_range":{"id":"48004"},"x_scale":{"id":"48042"},"y_range":{"id":"48006"},"y_scale":{"id":"48044"}},"id":"48039","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"48030"},{"id":"48064"}],"tools":[{"id":"48020"},{"id":"48021"},{"id":"48022"},{"id":"48023"},{"id":"48024"},{"id":"48025"},{"id":"48026"},{"id":"48027"},{"id":"48054"},{"id":"48055"},{"id":"48056"},{"id":"48057"},{"id":"48058"},{"id":"48059"},{"id":"48060"},{"id":"48061"}]},"id":"48172","type":"ProxyToolbar"},{"attributes":{"ticks":[0,1,2,3]},"id":"48101","type":"FixedTicker"},{"attributes":{},"id":"48006","type":"DataRange1d"},{"attributes":{"below":[{"id":"48012"}],"center":[{"id":"48015"},{"id":"48019"},{"id":"48079"},{"id":"48086"},{"id":"48093"},{"id":"48100"}],"height":331,"left":[{"id":"48016"}],"output_backend":"webgl","renderers":[{"id":"48077"},{"id":"48084"},{"id":"48091"},{"id":"48098"}],"title":{"id":"48103"},"toolbar":{"id":"48030"},"toolbar_location":null,"width":496,"x_range":{"id":"48004"},"x_scale":{"id":"48008"},"y_range":{"id":"48006"},"y_scale":{"id":"48010"}},"id":"48003","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"48054"},{"id":"48055"},{"id":"48056"},{"id":"48057"},{"id":"48058"},{"id":"48059"},{"id":"48060"},{"id":"48061"}]},"id":"48064","type":"Toolbar"},{"attributes":{},"id":"48042","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48079","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48144"},"selection_policy":{"id":"48143"}},"id":"48073","type":"ColumnDataSource"}],"root_ids":["48174"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"f6bd9783-5d9e-437a-b35c-db87ed0916f5","root_ids":["48174"],"roots":{"48174":"4e3c3a4d-46ea-42ef-9e48-308bc4b42d41"}}];
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