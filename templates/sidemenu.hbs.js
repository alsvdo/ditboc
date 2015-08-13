var sidemenu = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    "
    + escapeExpression(((helper = (helper = helpers.HeadingOne || (depth0 != null ? depth0.HeadingOne : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"HeadingOne","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  return "                    Submenu\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            ";
  stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"RichContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"7":function(depth0,helpers,partials,data) {
  return "            <a href=\"#\" class=\"list-group-item\">\n                Lorem ipsum\n            </a>\n            <a href=\"#\" class=\"list-group-item\">\n                Lorem ipsum\n            </a>\n            <a href=\"#\" class=\"list-group-item\">\n                Lorem ipsum\n        </a>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"custom-sidebar\" title=\""
    + escapeExpression(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Component","hash":{},"data":data}) : helper)))
    + "\n\n\n\n"
    + escapeExpression(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"list-group\">\n        <span href=\"#\" class=\"list-group-item active\">\n            <span>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.HeadingOne : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </span>\n            <span class=\"pull-right\" id=\"slide-submenu\">\n                <i class=\"fa fa-times\"></i>\n            </span>\n        </span>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.RichContent : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"useData":true});