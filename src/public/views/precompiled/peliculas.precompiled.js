(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['peliculas.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p>Título: "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":20}}}) : helper)))
    + "</p>\r\n<p>Fecha: "
    + alias4(((helper = (helper = lookupProperty(helpers,"release_date") || (depth0 != null ? lookupProperty(depth0,"release_date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"release_date","hash":{},"data":data,"loc":{"start":{"line":4,"column":10},"end":{"line":4,"column":26}}}) : helper)))
    + "</p>\r\n<p>Media de Votos: "
    + alias4(((helper = (helper = lookupProperty(helpers,"vote_average") || (depth0 != null ? lookupProperty(depth0,"vote_average") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_average","hash":{},"data":data,"loc":{"start":{"line":5,"column":19},"end":{"line":5,"column":35}}}) : helper)))
    + "</p>\r\n<p>Sinopsis: "
    + alias4(((helper = (helper = lookupProperty(helpers,"overview") || (depth0 != null ? lookupProperty(depth0,"overview") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"overview","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":25}}}) : helper)))
    + "</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Resultados:\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"results") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();