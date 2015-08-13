var spot_with_background_video = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<h2>"
    + escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "			<div>";
  stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"RichContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "			<a class=\"btn btn-default\" "
    + escapeExpression(((helpers.link || (depth0 && depth0.link) || helperMissing).call(depth0, (depth0 != null ? depth0.CTAUrl : depth0), {"name":"link","hash":{},"data":data})))
    + " role=\"button\">"
    + escapeExpression(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "			<a "
    + escapeExpression(((helpers.link || (depth0 && depth0.link) || helperMissing).call(depth0, (depth0 != null ? depth0.LinkUrl : depth0), {"name":"link","hash":{},"data":data})))
    + ">"
    + escapeExpression(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"panel panel-default panel-video\" title=\""
    + escapeExpression(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Component","hash":{},"data":data}) : helper)))
    + "- "
    + escapeExpression(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <video width=\"100%\" height=\"100%\" autoplay loop>\r\n        <source src=\"video/Pfa2_converted.m4v\" type=\"video/mp4\">\r\n    </video>\r\n    <div class=\"panel-body\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.HeadingTwo : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.RichContent : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.CTAText : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.LinkText : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>";
},"useData":true});