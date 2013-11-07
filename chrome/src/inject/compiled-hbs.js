this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"scrappy\">\n	<div class=\"next-mode separator\">\n		<h3>Scrap Type</h3>\n		<p>\n            <input type=\"radio\" name=\"scrap-type\" value=\"single\" checked=\"checked\"/>Single Page\n            <input type=\"radio\" name=\"scrap-type\" value=\"multi\"/>Multi Page\n        </p>\n        <div id=\"next-page-div\" style=\"display:none\">\n			<p><b>Next Page Selector: </b> <input type=\"text\" name=\"next-selector\" readonly=\"readonly\"/> <button>Select</button></p>\n        </div>\n	</div>\n	<div class=\"key separator\">\n        <h3>Match</h3>\n        <p><label>Type: </label></p>\n        <p>\n            <input type=\"radio\" name=\"match-type\" value=\"collection\" checked=\"checked\"/>Collection\n            <input type=\"radio\" name=\"match-type\" value=\"ancstor\"/>Ancestor\n            <input type=\"radio\" name=\"match-type\" value=\"single\"/> Single\n        </p>\n        <p>\n            <button>Start matching</button>\n        </p>\n	</div>\n	<div class=\"matches separator\">\n        <h6>Current selector</h6>\n		<b class=\"selector\"></b>\n\n		<h6>Matched Data</h6> \n		<b class=\"count\"></b>\n        <div style=\"overflow: auto; height: 100px;\">\n       		<pre>\n\n    		</pre>\n        </div>\n		<input type=\"text\" name=\"key\" value=\"\" placeholder=\"Match Name\"><button disabled=\"disabled\">Match</button>\n	</div>\n	<div class=\"results separator\">\n        Data\n        <ul>\n\n        </ul>\n        <button>Save to file</button>\n	</div>\n</div>";
  });