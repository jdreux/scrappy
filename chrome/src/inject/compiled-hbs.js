this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"scrappy\">\n	<div class=\"key\">\n		<label>Key</label> <input type=\"text\" name=\"key\" value=\"\">\n		<button>Start matching</button>\n	</div>\n	<div class=\"select\">\n		<h6>Current selector</h6>\n		<b class=\"selector\"></b>\n		<h6>Match Type:</h6>\n		<p><input type=\"radio\" name=\"matchType\" value=\"collection\" selected=\"selected\"/>Collection</p>\n		<p><input type=\"radio\" name=\"matchType\" value=\"single\"/> Single</p>\n	</div>\n	<div class=\"matches\">\n		<h6>Matched Data</h6>\n		<b></b>\n		<pre>\n\n		</pre>\n		<button>Match</button>\n	</div>\n	<div class=\"results\">\n\n	</div>\n	<div class=\"menu\">\n		<button>Save Blueprint</button>\n	</div>\n</div>";
  });