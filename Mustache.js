const Mustache = require('mustache');

const view = {
  title: "Joe",
  calc: () => ( 2 + 4 )
};

const output = Mustache.render("{{title}} spends {{calc}}", view);
<html>
  <body onload="renderHello()">
    <div id="target">Loading...</div>
    <script id="template" type="x-tmpl-mustache">
      Hello {{ name }}!
    </script>

    <script src="https://unpkg.com/mustache@latest"></script>
    <script src="render.js"></script>
  </body>
</html>
