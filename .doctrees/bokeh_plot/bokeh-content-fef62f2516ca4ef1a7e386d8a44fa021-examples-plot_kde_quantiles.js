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
    
      
      
    
      const element = document.getElementById("23deca24-a479-410b-ac6d-d679dcd9a8d3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '23deca24-a479-410b-ac6d-d679dcd9a8d3' but no matching script tag was found.")
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
                    
                  const docs_json = '{"1ee1d38b-d482-4572-856f-ae5413eb470f":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"24012"},{"id":"24010"}]},"id":"24013","type":"Column"},{"attributes":{"source":{"id":"23973"}},"id":"23978","type":"CDSView"},{"attributes":{"source":{"id":"23985"}},"id":"23990","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"23973"},"glyph":{"id":"23974"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23976"},"nonselection_glyph":{"id":"23975"},"view":{"id":"23978"}},"id":"23977","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"23994"},"group":null,"major_label_policy":{"id":"23995"},"ticker":{"id":"23945"}},"id":"23944","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"zxPPemvWzz99LKbyCgXQPxLP5CfgHtA/p3EjXbU40D88FGKSilLQP9G2oMdfbNA/Zlnf/DSG0D/7+x0yCqDQP5CeXGffudA/JkGbnLTT0D+749nRie3QP1CGGAdfB9E/5ShXPDQh0T96y5VxCTvRPw9u1KbeVNE/pRAT3LNu0T86s1ERiYjRP89VkEZeotE/ZPjOezO80T/5mg2xCNbRP449TObd79E/JOCKG7MJ0j+5gslQiCPSP04lCIZdPdI/48dGuzJX0j94aoXwB3HSPw0NxCXditI/o68CW7Kk0j84UkGQh77SP830f8Vc2NI/Ype++jHy0j/3Of0vBwzTP4zcO2XcJdM/In96mrE/0z+3IbnPhlnTP0zE9wRcc9M/4WY2OjGN0z92CXVvBqfTPwuss6TbwNM/oU7y2bDa0z828TAPhvTTP8uTb0RbDtQ/YDaueTAo1D/12OyuBULUP4p7K+TaW9Q/Hx5qGbB11D+1wKhOhY/UP0pj54NaqdQ/3wUmuS/D1D90qGTuBN3UPwlLoyPa9tQ/nu3hWK8Q1T80kCCOhCrVP8kyX8NZRNU/XtWd+C5e1T/zd9wtBHjVP4gaG2PZkdU/Hb1ZmK6r1T+zX5jNg8XVP0gC1wJZ39U/3aQVOC751T9yR1RtAxPWPwfqkqLYLNY/nIzR161G1j8yLxANg2DWP8fRTkJYetY/XHSNdy2U1j/xFsysAq7WP4a5CuLXx9Y/G1xJF63h1j+x/odMgvvWP0ahxoFXFdc/20MFtywv1z9w5kPsAUnXPwWJgiHXYtc/mivBVqx81z8wzv+LgZbXPzDO/4uBltc/MM7/i4GW1z+aK8FWrHzXPwWJgiHXYtc/cOZD7AFJ1z/bQwW3LC/XP0ahxoFXFdc/sf6HTIL71j8bXEkXreHWP4a5CuLXx9Y/8RbMrAKu1j9cdI13LZTWP8fRTkJYetY/Mi8QDYNg1j+cjNHXrUbWPwfqkqLYLNY/ckdUbQMT1j/dpBU4LvnVP0gC1wJZ39U/s1+YzYPF1T8dvVmYrqvVP4gaG2PZkdU/83fcLQR41T9e1Z34Ll7VP8kyX8NZRNU/NJAgjoQq1T+e7eFYrxDVPwlLoyPa9tQ/dKhk7gTd1D/fBSa5L8PUP0pj54NaqdQ/tcCoToWP1D8fHmoZsHXUP4p7K+TaW9Q/9djsrgVC1D9gNq55MCjUP8uTb0RbDtQ/NvEwD4b00z+hTvLZsNrTPwuss6TbwNM/dgl1bwan0z/hZjY6MY3TP0zE9wRcc9M/tyG5z4ZZ0z8if3qasT/TP4zcO2XcJdM/9zn9LwcM0z9il776MfLSP830f8Vc2NI/OFJBkIe+0j+jrwJbsqTSPw0NxCXditI/eGqF8Adx0j/jx0a7MlfSP04lCIZdPdI/uYLJUIgj0j8k4IobswnSP449TObd79E/+ZoNsQjW0T9k+M57M7zRP89VkEZeotE/OrNREYmI0T+lEBPcs27RPw9u1KbeVNE/esuVcQk70T/lKFc8NCHRP1CGGAdfB9E/u+PZ0Ynt0D8mQZuctNPQP5CeXGffudA/+/sdMgqg0D9mWd/8NIbQP9G2oMdfbNA/PBRikopS0D+ncSNdtTjQPxLP5CfgHtA/fSym8goF0D/PE896a9bPP88Tz3pr1s8/","dtype":"float64","order":"little","shape":[156]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFM35Dstufo/UzfkOy25+j+JHBW6heD6P5vH4YZOCfs/zECxJosy+z/HPsJGNlr7P6QFnSnngvs/xQpArEms+z8sRGKwrNf7Py0X8kQ1A/w/DTdUXUkt/D+GVGZyDln8P/QVW1tkhPw/2K/6eQWx/D/CWtScYtz8P0OpkzE9Cf0/Uey6Mw81/T+RIsxNV2L9PzBiAkhkjv0/bCG7ytS7/T864U5kT+j9PyOwsBq5Ff4/t/jRLMtC/j9ET6vxF3D+P+eJ/iH+nP4/GFRExDDK/j9J0YxZB/b+P0FrWS23If8/mN4lUOZN/z+U7wBnQ3n/P2xm2Hpdpf8/zz/9qY3Q/z+liB0+k/v/P7hYSKQpEwBAVv/Kn6EoAEBswiEaaj0AQMuWF3rgUgBALvF1JrtnAEDgT5IKEHwAQH0XtzmIkABAM3rFKl2kAECRVpvtY7gAQKKKYyoTzABAM+yEn6ffAEAMr+W3BfMAQAgYlo4MBgFA6U4S21sZAUBc9aklUCwBQFWzt5q+PgFA+porYXhRAUCBsvAZkmMBQIEvMyjSdQFAvT9yOdyHAUDh0kCFMpkBQCLJIv7QqgFAUK+Mb8W7AUCHAVZ9qMwBQBU2FYx43QFAaJReu8XtAUDYp5j1hP4BQPBowJUVDwJA0sRlAoQgAkDAE/0otzACQBWgCT62QAJAbzr3b8xQAkB/FSocimACQNPP2Ny7bwJAFiqpKF5+AkDZjk6T6owCQNzyh7gBnAJAtofgJAqqAkD3JPZpSbgCQOL3J+NxxQJAdQKWwpvSAkBdWDO4oN8CQC8ryP8e7AJAX47vmbn3AkBTmDUr4AMDQAAAAAAAAAAA","dtype":"float64","order":"little","shape":[156]}},"selected":{"id":"24004"},"selection_policy":{"id":"24003"}},"id":"23979","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23957","type":"PolyAnnotation"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23980","type":"Patch"},{"attributes":{},"id":"23994","type":"BasicTickFormatter"},{"attributes":{},"id":"23941","type":"BasicTicker"},{"attributes":{"source":{"id":"23967"}},"id":"23972","type":"CDSView"},{"attributes":{},"id":"23997","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"23940"},"coordinates":null,"group":null,"ticker":null},"id":"23943","type":"Grid"},{"attributes":{},"id":"23953","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[564]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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","dtype":"float64","order":"little","shape":[564]}},"selected":{"id":"24006"},"selection_policy":{"id":"24005"}},"id":"23985","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","hatch_alpha":0.1,"line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23987","type":"Patch"},{"attributes":{"coordinates":null,"group":null},"id":"23991","type":"Title"},{"attributes":{},"id":"23932","type":"DataRange1d"},{"attributes":{},"id":"23995","type":"AllLabels"},{"attributes":{},"id":"24005","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"23967"},"glyph":{"id":"23968"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23970"},"nonselection_glyph":{"id":"23969"},"view":{"id":"23972"}},"id":"23971","type":"GlyphRenderer"},{"attributes":{},"id":"23945","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"23979"},"glyph":{"id":"23980"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23982"},"nonselection_glyph":{"id":"23981"},"view":{"id":"23984"}},"id":"23983","type":"GlyphRenderer"},{"attributes":{},"id":"24002","type":"Selection"},{"attributes":{},"id":"24004","type":"Selection"},{"attributes":{"toolbars":[{"id":"23958"}],"tools":[{"id":"23948"},{"id":"23949"},{"id":"23950"},{"id":"23951"},{"id":"23952"},{"id":"23953"},{"id":"23954"},{"id":"23955"}]},"id":"24011","type":"ProxyToolbar"},{"attributes":{},"id":"23936","type":"LinearScale"},{"attributes":{},"id":"23951","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23956","type":"BoxAnnotation"},{"attributes":{},"id":"23948","type":"ResetTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","hatch_alpha":0.1,"line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23969","type":"Patch"},{"attributes":{"fill_alpha":0.2,"fill_color":"#2a2eec","hatch_alpha":0.2,"line_alpha":0.2,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23982","type":"Patch"},{"attributes":{},"id":"23954","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"23985"},"glyph":{"id":"23986"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23988"},"nonselection_glyph":{"id":"23987"},"view":{"id":"23990"}},"id":"23989","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","hatch_alpha":0.1,"line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23981","type":"Patch"},{"attributes":{},"id":"23999","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"23948"},{"id":"23949"},{"id":"23950"},{"id":"23951"},{"id":"23952"},{"id":"23953"},{"id":"23954"},{"id":"23955"}]},"id":"23958","type":"Toolbar"},{"attributes":{},"id":"23934","type":"DataRange1d"},{"attributes":{"axis":{"id":"23944"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"23947","type":"Grid"},{"attributes":{"fill_alpha":0.2,"fill_color":"#2a2eec","hatch_alpha":0.2,"line_alpha":0.2,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23970","type":"Patch"},{"attributes":{},"id":"23938","type":"LinearScale"},{"attributes":{"callback":null},"id":"23955","type":"HoverTool"},{"attributes":{},"id":"24001","type":"UnionRenderers"},{"attributes":{"below":[{"id":"23940"}],"center":[{"id":"23943"},{"id":"23947"}],"height":500,"left":[{"id":"23944"}],"output_backend":"webgl","renderers":[{"id":"23971"},{"id":"23977"},{"id":"23983"},{"id":"23989"}],"title":{"id":"23991"},"toolbar":{"id":"23958"},"toolbar_location":null,"width":500,"x_range":{"id":"23932"},"x_scale":{"id":"23936"},"y_range":{"id":"23934"},"y_scale":{"id":"23938"}},"id":"23931","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"23931"},0,0]]},"id":"24010","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"XbAXvjqyfj/UKuAGxJOCP3l9tK5qzoU/HtCIVhEJiT/EIl3+t0OMP2h1MaZefo8/B+QCp4JckT9aDe361fmSP6w2104pl5Q//1/Bonw0lj9Riav2z9GXP6SylUojb5k/99t/nnYMmz9JBWryyamcP5wuVEYdR54/7lc+mnDknz+hQBT34cCgP0pVCaGLj6E/82n+SjVeoj+dfvP03iyjP0aT6J6I+6M/8KfdSDLKpD+ZvNLy25ilP0LRx5yFZ6Y/7OW8Ri82pz+V+rHw2ASoPz4Pp5qC06g/5yOcRCyiqT+ROJHu1XCqPzpNhph/P6s/42F7QikOrD+NdnDs0tysPzaLZZZ8q60/359aQCZ6rj+JtE/qz0ivP5lkIsq8C7A/7e4cnxFzsD9CeRd0ZtqwP5cDEkm7QbE/640MHhCpsT9AGAfzZBCyP5WiAci5d7I/6iz8nA7fsj8+t/ZxY0azP5NB8Ua4rbM/6MvrGw0VtD88VubwYXy0P5Hg4MW247Q/5mrbmgtLtT869dVvYLK1P49/0ES1GbY/4wnLGQqBtj84lMXuXui2P40ewMOzT7c/4ai6mAi3tz82M7VtXR64P4u9r0Kyhbg/30eqFwftuD800qTsW1S5P4lcn8Gwu7k/3eaZlgUjuj8ycZRrWoq6P4f7jkCv8bo/24WJFQRZuz8wEITqWMC7P4Wafr+tJ7w/2SR5lAKPvD8ur3NpV/a8P4M5bj6sXb0/18NoEwHFvT8sTmPoVSy+P4HYXb2qk74/1WJYkv/6vj8q7VJnVGK/P393TTypyb8/6QCkCH8YwD8URiFzKUzAPz6Lnt3Tf8A/aNAbSH6zwD+TFZmyKOfAP71aFh3TGsE/6J+Th31OwT8S5RDyJ4LBPzwqjlzStcE/Z28Lx3zpwT+RtIgxJx3CP7v5BZzRUMI/u/kFnNFQwj+7+QWc0VDCP5G0iDEnHcI/Z28Lx3zpwT88Ko5c0rXBPxLlEPIngsE/6J+Th31OwT+9WhYd0xrBP5MVmbIo58A/aNAbSH6zwD8+i57d03/APxRGIXMpTMA/6QCkCH8YwD9/d008qcm/PyrtUmdUYr8/1WJYkv/6vj+B2F29qpO+PyxOY+hVLL4/18NoEwHFvT+DOW4+rF29Py6vc2lX9rw/2SR5lAKPvD+Fmn6/rSe8PzAQhOpYwLs/24WJFQRZuz+H+45Ar/G6PzJxlGtairo/3eaZlgUjuj+JXJ/BsLu5PzTSpOxbVLk/30eqFwftuD+Lva9CsoW4PzYztW1dHrg/4ai6mAi3tz+NHsDDs0+3PziUxe5e6LY/4wnLGQqBtj+Pf9BEtRm2Pzr11W9gsrU/5mrbmgtLtT+R4ODFtuO0PzxW5vBhfLQ/6MvrGw0VtD+TQfFGuK2zPz639nFjRrM/6iz8nA7fsj+VogHIuXeyP0AYB/NkELI/640MHhCpsT+XAxJJu0GxP0J5F3Rm2rA/7e4cnxFzsD+ZZCLKvAuwP4m0T+rPSK8/359aQCZ6rj82i2WWfKutP412cOzS3Kw/42F7QikOrD86TYaYfz+rP5E4ke7VcKo/5yOcRCyiqT8+D6eagtOoP5X6sfDYBKg/7OW8Ri82pz9C0cechWemP5m80vLbmKU/8KfdSDLKpD9Gk+ieiPujP51+8/TeLKM/82n+SjVeoj9KVQmhi4+hP6FAFPfhwKA/7lc+mnDknz+cLlRGHUeeP0kFavLJqZw/99t/nnYMmz+kspVKI2+ZP1GJq/bP0Zc//1/Bonw0lj+sNtdOKZeUP1oN7frV+ZI/B+QCp4JckT9odTGmXn6PP8QiXf63Q4w/HtCIVhEJiT95fbSuas6FP9Qq4AbEk4I/XbAXvjqyfj9dsBe+OrJ+Pw==","dtype":"float64","order":"little","shape":[176]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzQEvraLAkAHNAS+tosCQGdPEKulggJAA+ylC6V5AkAXvQI0tG8CQMxUDleeZQJANVR0Hn9bAkBoT5UAJlECQCwsXfnuRQJAEpIqdFI6AkAHIFdy9y0CQBGSUNJUIQJAY3clzv0UAkC2+viKdwcCQDemqTi4+QFAhjqxGk7qAUC1Lqer1toBQCbsrW/xygFAjmBRPL26AUB5edcvAqoBQAXjZk6hlwFAhULN1oCFAUCZPIJJS3IBQLRq+fqpXgFAzHTRIMFJAUBGyywaozQBQMgzkCi0HQFAIUl5SS8HAUAvZsyC1e4AQLA8fyLs1QBAYv4xJ/G7AECV1u886aEAQDl0Fpy+hQBA2ZTjB/hpAEAi1dy7dkwAQO8CEqwyLgBA4We8v64OAEDdFIG5et3/P653hyOFm/8/SK+kF5BX/z9yPhjW7BP/Pze5SsZezf4/gsWt5Y2F/j+X0AEstjn+P2YQZucP7v0/9MC6GZyh/T9cUFMY41P9P4OiNZRhBf0/YeQRKZK0/D8O2KVWFmX8Pxi9gtByFPw/zj6c5DHC+z/JL1CkaG/7PzwkeP+KG/s/Fb3B/yDK+j8yo7VkKXj6P4b995a2I/o/5DQjSHTQ+T+WhyjbjX35P4iKGcWBLPk/AxbWKjTc+D/X3b3CLoz4P/Ct+2pDPfg/CxOGgjbx9z+VRWwwW6T3P1YTCz29Wfc/6KtEWUgQ9z/PZLmRh8j2P29/iOrhgvY/l+fj1hZA9j9Td5HDYAH2P9vr1HBwxvU/ZVjjJUSM9T+iKqBvZFf1P8qohXe6I/U/2LndBPD09D9eRoG+Ccf0P24BSDz/nvQ/0cl8nmJ49D8i5QumvFb0P5pF2w0sOPQ/p0phnM8c9D+uY9sEQwb0P9l89bbl8/M/omcTho3l8z/12lMJaNrzP8IrjwBh0/M/pwu0MwnR8z8AAAAAAAAAAA==","dtype":"float64","order":"little","shape":[176]}},"selected":{"id":"24000"},"selection_policy":{"id":"23999"}},"id":"23967","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"23997"},"group":null,"major_label_policy":{"id":"23998"},"ticker":{"id":"23941"}},"id":"23940","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","hatch_alpha":0.1,"line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23975","type":"Patch"},{"attributes":{"source":{"id":"23979"}},"id":"23984","type":"CDSView"},{"attributes":{},"id":"23998","type":"AllLabels"},{"attributes":{"toolbar":{"id":"24011"},"toolbar_location":"above"},"id":"24012","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.2,"fill_color":"#2a2eec","hatch_alpha":0.2,"line_alpha":0.2,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23988","type":"Patch"},{"attributes":{"overlay":{"id":"23956"}},"id":"23950","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"23957"}},"id":"23952","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23974","type":"Patch"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23968","type":"Patch"},{"attributes":{},"id":"23949","type":"PanTool"},{"attributes":{"fill_alpha":0.2,"fill_color":"#2a2eec","hatch_alpha":0.2,"line_alpha":0.2,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23976","type":"Patch"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"23986","type":"Patch"},{"attributes":{},"id":"24000","type":"Selection"},{"attributes":{},"id":"24006","type":"Selection"},{"attributes":{},"id":"24003","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"5j6DBnyEwj8QhABxJrjCPzrJfdvQ68I/ZQ77RXsfwz+PU3iwJVPDP7mY9RrQhsM/5N1yhXq6wz8OI/DvJO7DPzhobVrPIcQ/Y63qxHlVxD+N8mcvJInEP7c35ZnOvMQ/4XxiBHnwxD8Mwt9uIyTFPzYHXdnNV8U/YEzaQ3iLxT+LkVeuIr/FP7XW1BjN8sU/3xtSg3cmxj8KYc/tIVrGPzSmTFjMjcY/XuvJwnbBxj+JMEctIfXGP7N1xJfLKMc/3bpBAnZcxz8IAL9sIJDHPzJFPNfKw8c/XIq5QXX3xz+HzzasHyvIP7EUtBbKXsg/21kxgXSSyD8Gn67rHsbIPzDkK1bJ+cg/WimpwHMtyT+FbiYrHmHJP6+zo5XIlMk/2fggAHPIyT8EPp5qHfzJPy6DG9XHL8o/WMiYP3Jjyj+DDRaqHJfKP61SkxTHyso/15cQf3H+yj8C3Y3pGzLLPywiC1TGZcs/VmeIvnCZyz+BrAUpG83LP6vxgpPFAMw/1TYA/m80zD8AfH1oGmjMPyrB+tLEm8w/VAZ4PW/PzD9/S/WnGQPNP6mQchLENs0/09XvfG5qzT/+Gm3nGJ7NPyhg6lHD0c0/UqVnvG0Fzj996uQmGDnOP6cvYpHCbM4/0XTf+2ygzj/8uVxmF9TOPyb/2dDBB88/UERXO2w7zz97idSlFm/PP6XOURDBos8/pc5REMGizz+lzlEQwaLPP3uJ1KUWb88/UERXO2w7zz8m/9nQwQfPP/y5XGYX1M4/0XTf+2ygzj+nL2KRwmzOP33q5CYYOc4/UqVnvG0Fzj8oYOpRw9HNP/4abecYns0/09XvfG5qzT+pkHISxDbNP39L9acZA80/VAZ4PW/PzD8qwfrSxJvMPwB8fWgaaMw/1TYA/m80zD+r8YKTxQDMP4GsBSkbzcs/VmeIvnCZyz8sIgtUxmXLPwLdjekbMss/15cQf3H+yj+tUpMUx8rKP4MNFqocl8o/WMiYP3Jjyj8ugxvVxy/KPwQ+nmod/Mk/2fggAHPIyT+vs6OVyJTJP4VuJiseYck/WimpwHMtyT8w5CtWyfnIPwafrusexsg/21kxgXSSyD+xFLQWyl7IP4fPNqwfK8g/XIq5QXX3xz8yRTzXysPHPwgAv2wgkMc/3bpBAnZcxz+zdcSXyyjHP4kwRy0h9cY/XuvJwnbBxj80pkxYzI3GPwphz+0hWsY/3xtSg3cmxj+11tQYzfLFP4uRV64iv8U/YEzaQ3iLxT82B13ZzVfFPwzC324jJMU/4XxiBHnwxD+3N+WZzrzEP43yZy8kicQ/Y63qxHlVxD84aG1azyHEPw4j8O8k7sM/5N1yhXq6wz+5mPUa0IbDP49TeLAlU8M/ZQ77RXsfwz86yX3b0OvCPxCEAHEmuMI/5j6DBnyEwj/mPoMGfITCPw==","dtype":"float64","order":"little","shape":[134]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnXyzBBEQA0CdfLMEERADQBaQEPMFGwNAGj2g9BIlA0BvILgoRi8DQJN+1Z2UOANAOcvWgMtBA0C7djOlJ0oDQEfNVQrSUQNAEcuJ5QlZA0D5mH3ZP14DQKZADxYMZANAJ9em5GNpA0CO+dT98m0DQGrQH8TgcgNA/seiL0V2A0C66cLnwXkDQCm38UQ1fANA83CbGMR+A0AOCXnoU4ADQBqI4zrXggNA/CndDMKDA0AZmrOoroMDQFLHIGyjgwNAy//LDUCCA0DXvaCLdIADQLQ+5q3efgNAk1iG/Q18A0AiKr/asnkDQGLBiHvWdgNAKzgpIKBzA0BXkDjVQXADQGEys4MPbQNA3VTMGZtoA0AWqFUebWMDQPje5upTXgNAh6j1o6VZA0A99POgqVUDQFzgsTlCUANAYJRGsfpKA0Dm6a/isEUDQEu33f36PwNAqhSgv4Y6A0BmnkXVzjQDQNlz+er8LgNAdpmpoWspA0DH3pAwISMDQMWYRWKXHANA8Ui7MDMVA0BG0FRdDA8DQGAZflHOCANAjXI8XdECA0C1renadvwCQN+89n+S9QJAchquYkDvAkAr7tuTkOcCQImsWMxy4AJAcqU4rxLZAkAUlVjTitICQFpXa5OFywJA/psSrNfEAkB7zBbGZ70CQNCyC6wttQJAvXskC5WtAkAZiYTJ8KUCQBiC/f5GnQJACLsC1NyUAkAAAAAAAAAAAA==","dtype":"float64","order":"little","shape":[134]}},"selected":{"id":"24002"},"selection_policy":{"id":"24001"}},"id":"23973","type":"ColumnDataSource"}],"root_ids":["24013"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"1ee1d38b-d482-4572-856f-ae5413eb470f","root_ids":["24013"],"roots":{"24013":"23deca24-a479-410b-ac6d-d679dcd9a8d3"}}];
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