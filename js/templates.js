(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['confirm-order'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"confirm-order panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\n\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"information\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"panel panel-info\">\n        <div class=\"panel-body\">\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <small style=\"color: #a7a7a7\">Product</small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <small style=\"color: #a7a7a7\">Stock</small>\n                </div>\n                <div class=\"col-xs-2\">\n                    <small style=\"color: #a7a7a7\">Product Name</small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <small style=\"color: #a7a7a7\">Amount</small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <small style=\"color: #a7a7a7\">Amount in Product</small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <small style=\"color: #a7a7a7\">Price</small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <small style=\"color: #a7a7a7\">Price/Stk</small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <small style=\"color: #a7a7a7\">Type</small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <small style=\"color: #a7a7a7\">Whole Price</small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <small style=\"color: #a7a7a7\">Ta bort</small>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/150x100\">\n                    <small style=\"display: block; margin-top: 5px; color: #969696\" class=\"text-center\">Art nr:\n                        <small style=\"color: #a7a7a7; font-size: 12px\">262224</small>\n                    </small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <img src=\"http://www.onemed.se/Archive/Images/SWEDEN/Bestallningsvara.gif\" alt=\"\">\n                </div>\n                <div class=\"col-xs-2\">\n                    Tension-free Vaginal Tape TVT Abbrevo\n                </div>\n                <div class=\"col-xs-1\">\n                    <input style=\"width: 100%; display: inline-block\" type=\"number\" value=\"4\">\n                </div>\n                <div class=\"col-xs-1\">\n                    1\n                </div>\n                <div class=\"col-xs-1\">\n                    8 904,46kr\n                </div>\n                <div class=\"col-xs-1\">\n                    8 904,46kr\n                </div>\n                <div class=\"col-xs-1\">\n                    fp\n                </div>\n                <div class=\"col-xs-1\">\n                    35 617,86kr\n                </div>\n                <div class=\"col-xs-1\">\n                    <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Update</a>\n                    <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Remove</a>\n                </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/150x100\">\n                    <small style=\"display: block; margin-top: 5px; color: #969696\" class=\"text-center\">Art nr:\n                        <small style=\"color: #a7a7a7; font-size: 12px\">262224</small>\n                    </small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <img src=\"http://www.onemed.se/Archive/Images/SWEDEN/Bestallningsvara.gif\" alt=\"\">\n                </div>\n                <div class=\"col-xs-2\">\n                    Klädhängare plast tvärslå och krokar 9-pack\n                </div>\n                <div class=\"col-xs-1\">\n                    <input style=\"width: 100%; display: inline-block\" type=\"number\" value=\"4\">\n                </div>\n                <div class=\"col-xs-1\">\n                    9\n                </div>\n                <div class=\"col-xs-1\">\n                    182,55kr\n                </div>\n                <div class=\"col-xs-1\">\n                    20,28kr\n                </div>\n                <div class=\"col-xs-1\">\n                    fp\n                </div>\n                <div class=\"col-xs-1\">\n                    182,55kr\n                </div>\n                <div class=\"col-xs-1\">\n                    <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Update</a>\n                    <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Remove</a>\n                </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/150x100\">\n                    <small style=\"display: block; margin-top: 5px; color: #969696\" class=\"text-center\">Art nr:\n                        <small style=\"color: #a7a7a7; font-size: 12px\">262224</small>\n                    </small>\n                </div>\n                <div class=\"col-xs-1\">\n                    <img src=\"http://www.onemed.se/Archive/Images/SWEDEN/Bestallningsvara.gif\" alt=\"\">\n                </div>\n                <div class=\"col-xs-2\">\n                    Klädhängare plast tvärslå och krokar 9-pack\n                </div>\n                <div class=\"col-xs-1\">\n                    <input style=\"width: 100%; display: inline-block\" type=\"number\" value=\"4\">\n                </div>\n                <div class=\"col-xs-1\">\n                    9\n                </div>\n                <div class=\"col-xs-1\">\n                    182,55kr\n                </div>\n                <div class=\"col-xs-1\">\n                    20,28kr\n                </div>\n                <div class=\"col-xs-1\">\n                    fp\n                </div>\n                <div class=\"col-xs-1\">\n                    182,55kr\n                </div>\n                <div class=\"col-xs-1\">\n                    <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Update</a>\n                    <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Remove</a>\n                </div>\n            </div>\n\n        </div>\n        <hr>\n    </div>\n\n    <div class=\"confirm-order-form\">\n\n        <p>Godsmärkning: Fältet får ej innehålla specialtecken som t.ex. $, §, %.\n            <br> (T.ex. Beställarens namn, rumsnummer, klass eller avdelning. OBS! För leveransanvisningar till transportör eller byte av leveransadress, portkod mm, kontakta kundservice)\n            <br> Kund definerad ordernr: Du har inga produkter i kundvagnen Välj leveransdatum\n            < Ange leveransdatum Skicka orderbekräftelse via e-post</p>\n\n                <textarea class=\"comment\" placeholder=\"Kommentar til forsendelse\"></textarea>\n\n                <br>\n\n                <div>\n                    <span>Kunde definerad ordenr</span>\n                    <input type=\"text\">\n                </div>\n\n                <div>\n                    <span>Välj leveransdatum</span>\n                    <input type=\"date\">\n                </div>\n\n                <div>\n                    <span>Email Address</span>\n                    <input type=\"text\"> - Type Email Address to get order confirmation on mail\n                </div>\n\n    </div>\n\n    <a class=\"btn btn-primary\">Gennemför Køb</a>\n\n</div>\n";
},"useData":true});
templates['contact-form'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\">\r\n		<form role=\"form\" action=\"\" method=\"post\" >\r\n			<div class=\"col-lg-12\">\r\n				<div class=\"well well-sm\"><strong><i class=\"glyphicon glyphicon-ok form-control-feedback\"></i> Required Field</strong></div>\r\n				<div class=\"form-group\">\r\n					<label for=\"InputName\">Your Name</label>\r\n					<div class=\"input-group\">\r\n						<input type=\"text\" class=\"form-control\" name=\"InputName\" id=\"InputName\" placeholder=\"Enter Name\" required>\r\n						<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-ok form-control-feedback\"></i></span></div>\r\n				</div>\r\n				<div class=\"form-group\">\r\n					<label for=\"InputEmail\">Your Email</label>\r\n					<div class=\"input-group\">\r\n						<input type=\"email\" class=\"form-control\" id=\"InputEmail\" name=\"InputEmail\" placeholder=\"Enter Email\" required  >\r\n						<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-ok form-control-feedback\"></i></span></div>\r\n				</div>\r\n				<div class=\"form-group\">\r\n					<label for=\"InputMessage\">Message</label>\r\n					<div class=\"input-group\"\r\n		>\r\n						<textarea name=\"InputMessage\" id=\"InputMessage\" class=\"form-control\" rows=\"5\" required></textarea>\r\n						<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-ok form-control-feedback\"></i></span></div>\r\n				</div>\r\n				<div class=\"form-group\">\r\n					<label for=\"InputReal\">What is 4+3? (Simple Spam Checker)</label>\r\n					<div class=\"input-group\">\r\n						<input type=\"text\" class=\"form-control\" name=\"InputReal\" id=\"InputReal\" required>\r\n						<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-ok form-control-feedback\"></i></span></div>\r\n				</div>\r\n				<input type=\"submit\" name=\"submit\" id=\"submit\" value=\"Submit\" class=\"btn btn-info pull-right\">\r\n			</div>\r\n		</form>\r\n    </div>\r\n</div>";
},"useData":true});
templates['content-with-accordion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n            <h4 class=\"panel-title\">\r\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" >\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.HeadingOne || (depth0 != null ? depth0.HeadingOne : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingOne","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                </a>\r\n            </h4>\r\n        </div>\r\n        <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n            <div class=\"panel-body\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n            <h4 class=\"panel-title\">\r\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                        "
    + ((stack1 = ((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "                                \r\n                </a>\r\n            </h4>\r\n        </div>\r\n        <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n            <div class=\"panel-body\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\r\n            <h4 class=\"panel-title\">\r\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.HeadingThree || (depth0 != null ? depth0.HeadingThree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingThree","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "                                \r\n                </a>                                \r\n            </h4>\r\n        </div>\r\n        <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\r\n            <div class=\"panel-body\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['content-with-columns'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\" style=\"column-count: 3;-webkit-column-count: 3;column-gap: 40px;-webkit-column-gap: 40px;\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['content-with-inline-video'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "			<iframe width=\"100%\" height=\"200\" frameborder=\"0\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" allowfullscreen></iframe><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['content-with-quote'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<blockquote title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <p>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n</blockquote>";
},"useData":true});
templates['content-with-table'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"page-content\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Username</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <th scope=\"row\">1</th>\r\n                <td>Mark</td>\r\n                <td>Otto</td>\r\n                <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n                <th scope=\"row\">2</th>\r\n                <td>Jacob</td>\r\n                <td>Thornton</td>\r\n                <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n                <th scope=\"row\">3</th>\r\n                <td>Larry</td>\r\n                <td>the Bird</td>\r\n                <td>@twitter</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
},"useData":true});
templates['content-with-tabs'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div role=\"tabpanel\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <!-- Nav tabs -->\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n        <li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Tab1</a></li>\r\n        <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Tab2</a></li>\r\n        <li role=\"presentation\"><a href=\"#messages\" aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\">Tab3</a></li>\r\n        <li role=\"presentation\"><a href=\"#settings\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Tab4</a></li>\r\n    </ul>\r\n\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\r\n            <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">\r\n            <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"messages\">\r\n            <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"settings\">\r\n            <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
},"useData":true});
templates['content'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\">\r\n		"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n	</div>\r\n</div>";
},"useData":true});
templates['filter'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n    <div class=\"filter-lockup\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n\r\n        <div class=\"col-md-4\">\r\n            <p>561 Produkter</p>\r\n\r\n            <select>\r\n                <option>Choose Category</option>\r\n                <option>Subcategory 1</option>\r\n                <option>Subcategory 2</option>\r\n            </select>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-2\">\r\n\r\n            <select>\r\n                <option>Sort by</option>\r\n                <option>Newest</option>\r\n                <option>Items on sale</option>\r\n                <option>Price low to high</option>\r\n                <option>Price high to low</option>\r\n                <option>Bestesellers</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-md-offset-1\">\r\n\r\n            <select>\r\n                <option>Filter by</option>\r\n                <option>Part of contract</option>\r\n                <option>Complementary</option>\r\n                <option>All products</option>\r\n            </select>\r\n        </div>\r\n\r\n            <div class=\"col-md-3\">\r\n\r\n                <ul class=\"custom-pagination\">\r\n                    <li>\r\n                        <a href=\"#\"><span>&laquo;</span></a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <span>1/9</span>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a href=\"#\" aria-label=\"Next\"><span>&raquo;</span><a>\r\n                    </li>\r\n                </ul>\r\n\r\n    </div>\r\n\r\n\r\n    </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n";
},"useData":true});
templates['heading'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "				"
    + this.escapeExpression(((helper = (helper = helpers.HeadingOne || (depth0 != null ? depth0.HeadingOne : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingOne","hash":{},"data":data}) : helper)))
    + "\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "				"
    + this.escapeExpression(((helper = (helper = helpers.currentPageName || (depth0 != null ? depth0.currentPageName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"currentPageName","hash":{},"data":data}) : helper)))
    + "\r\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<img src=\""
    + ((stack1 = ((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\">\r\n		<h1>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingOne : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		</h1>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>\r\n";
},"useData":true});
templates['iframe'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\">\r\n       <iframe width=\"100%\" height=\"200\" frameborder=\"0\" src=\""
    + alias3(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" allowfullscreen></iframe><br>\r\n    </div>\r\n</div>";
},"useData":true});
templates['intro-text'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\">\r\n        <p>"
    + alias3(((helper = (helper = helpers.IntroText || (depth0 != null ? depth0.IntroText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"IntroText","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});
templates['list-group'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['login'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"login-module\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <strong> Sign in to continue</strong>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <form role=\"form\" action=\"#\" method=\"POST\">\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-10  col-md-offset-1 \">\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"glyphicon glyphicon-user\"></i>\r\n                                                </span>\r\n                                                <input class=\"form-control\" placeholder=\"Username\" name=\"loginname\" type=\"text\" autofocus>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"glyphicon glyphicon-lock\"></i>\r\n                                                </span>\r\n                                                <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" value=\"\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <a data-dynamic "
    + this.escapeExpression((helpers.link || (depth0 && depth0.link) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " class=\"btn btn-lg btn-primary btn-block\">Sign In</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"panel-footer \">\r\n                        Don't have an account? <br> Call us on <a href=\"tel\">0770-111 115</a> for directions\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['navbar-default'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Children : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-id=\""
    + alias3(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Id","hash":{},"data":data}) : helper)))
    + "\">\r\n                <a data-page=\""
    + ((stack1 = ((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Id","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + alias3(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "  \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Children : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </a> \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Children : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </li>\r\n";
},"2":function(depth0,helpers,partials,data) {
    return " data-dropdown ";
},"4":function(depth0,helpers,partials,data) {
    return "                        <span class=\"caret\"></span>\r\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Children : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.recursiveMenu,depth0,{"name":"recursiveMenu","data":data,"indent":"                            ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n    </button>\r\n</div>\r\n<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n    <ul role=\"navigation\" class=\"nav navbar-nav\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.menuitems : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>";
},"usePartial":true,"useData":true});
templates['news-list-filters'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<!-- Small button group -->\r\n		<div class=\"btn-group\" style=\"float:right;\">\r\n		  <button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n		   	2015 <span class=\"caret\"></span>\r\n		  </button>\r\n		  <ul class=\"dropdown-menu\" role=\"menu\">\r\n		    <li><a href=\"#\">2014</a></li>\r\n		    <li><a href=\"#\">2013</a></li>\r\n		    <li><a href=\"#\">2012</a></li>\r\n		  </ul>\r\n		</div>\r\n		<ul class=\"nav nav-pills\" role=\"tablist\">\r\n		  <li role=\"presentation\"><a href=\"#\">Filter 1 <span class=\"badge\">42</span></a></li>\r\n		  <li role=\"presentation\"><a href=\"#\">Filter 2</a></li>\r\n		  <li role=\"presentation\"><a href=\"#\">Filter 3 <span class=\"badge\">3</span></a></li>\r\n		  <li role=\"presentation\" class=\"active\"><a href=\"#\">All <span class=\"badge\">47</span></a></li>\r\n		</ul>\r\n		<br>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n		 <nav>\r\n	          <ul class=\"pagination\">\r\n	            <li>\r\n	              <a href=\"#\" aria-label=\"Previous\">\r\n	                <span aria-hidden=\"true\">&laquo;</span>\r\n	              </a>\r\n	            </li>\r\n	            <li><a href=\"#\">1</a></li>\r\n	            <li><a href=\"#\">2</a></li>\r\n	            <li><a href=\"#\">3</a></li>\r\n	            <li><a href=\"#\">4</a></li>\r\n	            <li><a href=\"#\">5</a></li>\r\n	            <li>\r\n	              <a href=\"#\" aria-label=\"Next\">\r\n	                <span aria-hidden=\"true\">&raquo;</span>\r\n	              </a>\r\n	            </li>\r\n	          </ul>\r\n	        </nav>\r\n	</div>\r\n</div>";
},"useData":true});
templates['news-list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['order-details'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"order-details\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"row\" style=\"padding-left: 15px; padding-right: 15px\">\r\n            <div class=\"col-xs-12\">\r\n\r\n                <div class=\"invoice-title\">\r\n                    <h2>Invoice</h2>\r\n                    <h3 class=\"pull-right\">Order # 12345</h3>\r\n                </div>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <address>\r\n                    <strong>Billed To:</strong><br>\r\n                        John Smith<br>\r\n                        1234 Main<br>\r\n                        Apt. 4B<br>\r\n                        Springfield, ST 54321\r\n                    </address>\r\n                    </div>\r\n                    <div class=\"col-xs-6 text-right\">\r\n                        <address>\r\n                    <strong>Shipped To:</strong><br>\r\n                        Jane Smith<br>\r\n                        1234 Main<br>\r\n                        Apt. 4B<br>\r\n                        Springfield, ST 54321\r\n                    </address>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <address>\r\n                        <strong>Payment Method:</strong><br>\r\n                        Visa ending **** 4242<br>\r\n                        jsmith@email.com\r\n                    </address>\r\n                    </div>\r\n                    <div class=\"col-xs-6 text-right\">\r\n                        <address>\r\n                        <strong>Order Date:</strong><br>\r\n                        March 7, 2014<br><br>\r\n                    </address>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\"><strong>Order summary</strong></h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-condensed\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <td><strong>Item</strong>\r\n                                    </td>\r\n                                    <td class=\"text-center\"><strong>Price</strong>\r\n                                    </td>\r\n                                    <td class=\"text-center\"><strong>Quantity</strong>\r\n                                    </td>\r\n                                    <td class=\"text-right\"><strong>Totals</strong>\r\n                                    </td>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <!-- foreach ($order->lineItems as $line) or some such thing here -->\r\n                                <tr>\r\n                                    <td>BS-200</td>\r\n                                    <td class=\"text-center\">$10.99</td>\r\n                                    <td class=\"text-center\">1</td>\r\n                                    <td class=\"text-right\">$10.99</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>BS-400</td>\r\n                                    <td class=\"text-center\">$20.00</td>\r\n                                    <td class=\"text-center\">3</td>\r\n                                    <td class=\"text-right\">$60.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>BS-1000</td>\r\n                                    <td class=\"text-center\">$600.00</td>\r\n                                    <td class=\"text-center\">1</td>\r\n                                    <td class=\"text-right\">$600.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"thick-line\"></td>\r\n                                    <td class=\"thick-line\"></td>\r\n                                    <td class=\"thick-line text-center\"><strong>Subtotal</strong>\r\n                                    </td>\r\n                                    <td class=\"thick-line text-right\">$670.99</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"no-line\"></td>\r\n                                    <td class=\"no-line\"></td>\r\n                                    <td class=\"no-line text-center\"><strong>Shipping</strong>\r\n                                    </td>\r\n                                    <td class=\"no-line text-right\">$15</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"no-line\"></td>\r\n                                    <td class=\"no-line\"></td>\r\n                                    <td class=\"no-line text-center\"><strong>Total</strong>\r\n                                    </td>\r\n                                    <td class=\"no-line text-right\">$685.99</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['order-history'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-info order-history\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel panel-info\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"panel-title\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <h5>\r\n                            <span class=\"glyphicon glyphicon-shopping-cart\"></span> Order History</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Date\r\n                        </th>\r\n                        <th>\r\n                            Order No\r\n                        </th>\r\n                        <th>\r\n                            Own Order No\r\n                        </th>\r\n                        <th>\r\n                            Person no\r\n                        </th>\r\n                        <th>\r\n                            Customer no\r\n                        </th>\r\n                        <th>\r\n                            Order by\r\n                        </th>\r\n                        <th>\r\n                            Delivery Date\r\n                        </th>\r\n                        <th>\r\n                            Sum\r\n                        </th>\r\n                        <th>\r\n                            Status\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>\r\n                            2015-04-14\r\n                        </td>\r\n                        <td>\r\n                            W1622852\r\n                        </td>\r\n                        <td>\r\n\r\n                        </td>\r\n                        <td>\r\n\r\n                        </td>\r\n                        <td>\r\n                            anno10a\r\n                        </td>\r\n                        <td>\r\n                            Ann-Sofie Nordenhjälm\r\n                        </td>\r\n                        <td>\r\n                            2015-04-16\r\n                        </td>\r\n                        <td>\r\n                            765,57kr\r\n                        </td>\r\n                        <td>\r\n                            Under Registration\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            2015-04-09\r\n                        </td>\r\n                        <td>\r\n                            W1619622\r\n                        </td>\r\n                        <td>\r\n\r\n                        </td>\r\n                        <td>\r\n\r\n                        </td>\r\n                        <td>\r\n                            Additiontest\r\n                        </td>\r\n                        <td>\r\n                            Addition Test\r\n                        </td>\r\n                        <td>\r\n                            2015-04-14\r\n                        </td>\r\n                        <td>\r\n                            119,25kr\r\n                        </td>\r\n                        <td>\r\n                            Under Registration\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            2015-03-05\r\n                        </td>\r\n                        <td>\r\n                            W1594512\r\n                        </td>\r\n                        <td>\r\n\r\n                        </td>\r\n                        <td>\r\n\r\n                        </td>\r\n                        <td>\r\n                            Additiontest\r\n                        </td>\r\n                        <td>\r\n                            Addition Test\r\n                        </td>\r\n                        <td>\r\n                            2015-04-02\r\n                        </td>\r\n                        <td>\r\n                            8 400,00kr\r\n                        </td>\r\n                        <td>\r\n                            Under Registration\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            2015-01-26\r\n                        </td>\r\n                        <td>\r\n                            W1563652\r\n                        </td>\r\n                        <td>\r\n\r\n                        </td>\r\n                        <td>\r\n\r\n                        </td>\r\n                        <td>\r\n                            PELU01\r\n                        </td>\r\n                        <td>\r\n                            Peter Lundqvist\r\n                        </td>\r\n                        <td>\r\n                            2015-01-30\r\n                        </td>\r\n                        <td>\r\n                            12,73kr\r\n                        </td>\r\n                        <td>\r\n                            Under Registration\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n                <div>\r\n                    <div class=\"filter-lockup\">\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-md-1\" style=\"padding-top: 8px\">\r\n                                    4 Orders\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3\">\r\n                                    <input type=\"search\" placeholder=\"Order No\">\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3\">\r\n                                    Date from:\r\n                                    <input type=\"date\">\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-md-3\">\r\n                                    Date to:\r\n                                    <input type=\"date\">\r\n                                </div>\r\n\r\n                                <div class=\"col-md-2\">\r\n                                    <ul class=\"custom-pagination\">\r\n                                        <li>\r\n                                            <a href=\"#\">\r\n                                                <span>&laquo;</span>\r\n                                            </a>\r\n                                        </li>\r\n\r\n                                        <li>\r\n                                            <span>1/9</span>\r\n                                        </li>\r\n\r\n                                        <li>\r\n                                            <a href=\"#\" aria-label=\"Next\">\r\n                                                <span>&raquo;</span>\r\n                                                <a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                            </div>\r\n                    </div>\r\n            </table>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n";
},"useData":true});
templates['order-payment'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"card-checkout\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\"><img class=\"pull-right\" src=\"http://i76.imgup.net/accepted_c22e0.png\">Payment Details</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form role=\"form\" id=\"payment-form\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"cardNumber\">CARD NUMBER</label>\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"cardNumber\" placeholder=\"Valid Card Number\" required autofocus data-stripe=\"number\" />\r\n                                    <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-7 col-md-7\">\r\n                            <div class=\"form-group\">\r\n                                <label style=\"display: block\" for=\"expMonth\">EXPIRATION DATE</label>\r\n                                <div class=\"col-xs-6 col-lg-6 pl-ziro custom\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"expMonth\" placeholder=\"MM\" required data-stripe=\"exp_month\" />\r\n                                </div>\r\n                                <div class=\"col-xs-6 col-lg-6 pl-ziro\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"expYear\" placeholder=\"YY\" required data-stripe=\"exp_year\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-5 col-md-5 pull-right\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"cvCode\">CV CODE</label>\r\n                                <input type=\"password\" class=\"form-control\" name=\"cvCode\" placeholder=\"CV\" required data-stripe=\"cvc\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"couponCode\">COUPON CODE</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"couponCode\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Place Order</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"display:none;\">\r\n                        <div class=\"col-xs-12\">\r\n                            <p class=\"payment-errors\"></p>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['panel-shortcuts'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "                        <h2 class=\"panel-title\">\r\n                            <span class=\"glyphicon glyphicon-bookmark\"></span> "
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "                    "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <a style=\"background: #C0392B\" href=\"?page=24&client=onemed\" class=\"btn btn-danger btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-time\"></span>\r\n                                    <br/>Order History</a>\r\n                                <a style=\"background: #F5AB35\" href=\"?page=22&client=onemed\" class=\"btn btn-warning btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-bookmark\"></span>\r\n                                    <br/>Shopping Lists</a>\r\n                                <a style=\"background: #22A7F0\" href=\"?page=25&client=onemed\" class=\"btn btn-primary btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-signal\"></span>\r\n                                    <br/>Statistics</a>\r\n                                <a style=\"background: #4DAF7C\" href=\"?page=26&client=onemed\" class=\"btn btn-primary btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-list-alt\"></span>\r\n                                    <br/>Price Lists</a>\r\n                                <a style=\"background: #5C97BF\" href=\"?page=27&client=onemed\" class=\"btn btn-primary btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-pencil\"></span>\r\n                                    <br/>Terms of service</a>\r\n                                <a style=\"background: #9B59B6\" href=\"?page=28&client=onemed\" class=\"btn btn-primary btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-repeat\"></span>\r\n                                    <br/>Return Policy</a>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <a style=\"background: #C0392B\" href=\"?page=23&client=onemed\" class=\"btn btn-success btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-user\"></span>\r\n                                    <br/>My Account</a>\r\n                                <a style=\"background: #F5AB35\" href=\"?page=29&client=onemed\" class=\"btn btn-info btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-check\"></span>\r\n                                    <br/>Administration</a>\r\n                                <a style=\"background: #22A7F0\" href=\"?page=30&client=onemed\" class=\"btn btn-primary btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-barcode\"></span>\r\n                                    <br/>Bar Codes</a>\r\n                                <a style=\"background: #4DAF7C\" href=\"?page=31&client=onemed\" class=\"btn btn-primary btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-indent-right\"></span>\r\n                                    <br/>Bar Code Equipment</a>\r\n                                <a style=\"background: #5C97BF\" href=\"?page=32&client=onemed\" class=\"btn btn-primary btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-lock\"></span>\r\n                                    <br/>Change Password</a>\r\n                                <a style=\"background: #9B59B6\" href=\"?page=33&client=onemed\" class=\"btn btn-primary btn-lg col-xs-4\" role=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-home\"></span>\r\n                                    <br/>Change Addresse</a>\r\n                            </div>\r\n                        </div>\r\n                        <!--<a href=\"http://www.jquery2dotnet.com/\" class=\"btn btn-success btn-lg btn-block\" role=\"button\">\r\n                            <span class=\"glyphicon glyphicon-globe\"></span> Website</a>-->\r\n                    </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel-shortcuts\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"panel panel-primary\">\r\n                <div class=\"panel-heading\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n";
},"useData":true});
templates['panel'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">"
    + ((stack1 = ((helper = (helper = helpers.HeadingThree || (depth0 != null ? depth0.HeadingThree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingThree","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['product-banner'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n\r\n\r\n\r\n</div>\r\n";
},"useData":true});
templates['product-highlight'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<h2><a style=\"color: #333; text-decoration: none\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</a></h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <p>\r\n            "
    + ((stack1 = ((helper = (helper = helpers.Price || (depth0 != null ? depth0.Price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Price","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        </p>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-primary\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\" style=\"border-radius: 0\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" style=\"border-radius: 0\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTATwoUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.CTATwoText || (depth0 != null ? depth0.CTATwoText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTATwoText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\" style=\"background-size: cover; background-position:50% 50%; background-repeat:no-repeat; background-image: url('"
    + alias3(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "');\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Price : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTATwoText : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});
templates['product-info'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " "
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + " ";
},"3":function(depth0,helpers,partials,data) {
    return " http://placehold.it/400x500 ";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <p>"
    + ((stack1 = ((helper = (helper = helpers.Teaser || (depth0 != null ? depth0.Teaser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Teaser","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            "
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "        <a data-dynamic "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " class=\"btn btn-primary\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"11":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "        <a data-dynamic "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTATwoUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " class=\"btn btn-default\">"
    + alias2(((helper = (helper = helpers.CTATwoText || (depth0 != null ? depth0.CTATwoText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTATwoText","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel product-info\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <br>\r\n    <div class=\"col-md-4\">\r\n        <!-- Image -->\r\n        <img src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" class=\"img-responsive\">\r\n\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <!-- Title -->\r\n        <h1>"
    + ((stack1 = ((helper = (helper = helpers.HeadingOne || (depth0 != null ? depth0.HeadingOne : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingOne","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\r\n\r\n        <hr>\r\n\r\n        <!-- Small description -->\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Teaser : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <!-- Informations -->\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <!-- Full Description -->\r\n        <big>\r\n            "
    + alias3(((helper = (helper = helpers.Price || (depth0 != null ? depth0.Price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Price","hash":{},"data":data}) : helper)))
    + "\r\n        </big>\r\n        <div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTATwoText : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n\r\n        <hr>\r\n        <!-- Breadcrumbs -->\r\n        <!-- <ol class=\"breadcrumb\">\r\n            <li>Kontorsmaterial</li>\r\n            <li>Engångs-</li>\r\n            <li class=\"active\">hygien- &#38; säkerhetsprodukter</li>\r\n        </ol> -->\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n</div>\r\n";
},"useData":true});
templates['product-list-item'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " "
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + " ";
},"3":function(depth0,helpers,partials,data) {
    return " http://placehold.it/400x500 ";
},"5":function(depth0,helpers,partials,data) {
    return " HeadingTwo ";
},"7":function(depth0,helpers,partials,data) {
    return " 35 ";
},"9":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <p class=\"text-center\">\r\n                <small>"
    + ((stack1 = ((helper = (helper = helpers.Teaser || (depth0 != null ? depth0.Teaser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Teaser","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</small>\r\n            </p>\r\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <h4 class=\"text-center\">"
    + ((stack1 = ((helper = (helper = helpers.Price || (depth0 != null ? depth0.Price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Price","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\r\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "                <a "
    + this.escapeExpression((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " style=\"border-radius: 0\" class=\"btn btn-primary\">"
    + ((stack1 = ((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a>\r\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "                <a "
    + this.escapeExpression((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTATwoUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " style=\"border-radius: 0\" class=\"btn btn-default\">"
    + ((stack1 = ((helper = (helper = helpers.CTATwoText || (depth0 != null ? depth0.CTATwoText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTATwoText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!-- <div class=\"panel product-info\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n    <article class=\"product-list-item\">\r\n\r\n        <img src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\"\" />\r\n\r\n        <h1>"
    + ((stack1 = ((helper = (helper = helpers.HeadingOne || (depth0 != null ? depth0.HeadingOne : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingOne","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1> -->\r\n\r\n<!-- <small>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + " se</small> -->\r\n\r\n<!-- <div class=\"button-group\">\r\n            <a type=\"button\" class=\"btn btn-info\" href=\""
    + ((stack1 = ((helper = (helper = helpers.LinkUrl || (depth0 != null ? depth0.LinkUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"LinkUrl","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">Tilføj til indkøbslise</a>\r\n            <a type=\"button\" class=\"btn btn-success\" href=\""
    + ((stack1 = ((helper = (helper = helpers.CTAUrl || (depth0 != null ? depth0.CTAUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"CTAUrl","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">Tilføj til inkøbskurv</a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div> -->\r\n\r\n\r\n<div class=\"thumbnail\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <br>\r\n    <a "
    + alias3((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n        <img src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\"\">\r\n    </a>\r\n    <div class=\"caption\">\r\n        <h3 class=\"text-center\"><a style=\"color: #333; text-decoration: none\" "
    + alias3((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + ((stack1 = ((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></h3>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Teaser : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Price : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <p class=\"text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTATwoText : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </p>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['product-list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " "
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + " ";
},"3":function(depth0,helpers,partials,data) {
    return " http://placehold.it/400x500 ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-info productlist\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-2\"></div>\r\n            <div class=\"col-xs-2\"><small style=\"color: #a7a7a7\">Product</small>\r\n            </div>\r\n            <div class=\"col-xs-3\"><small style=\"color: #a7a7a7\">Description</small>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-2\"><img class=\"img-responsive\" src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                <h2>"
    + ((stack1 = ((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <h3>"
    + ((stack1 = ((helper = (helper = helpers.HeadingThree || (depth0 != null ? depth0.HeadingThree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingThree","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <div class=\"col-xs-4 text-right\">\r\n                    <h6><strong>Antal:</strong></h6>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <input type=\"text\" class=\"form-control input-sm\" value=\"1\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                <a class=\"btn btn-success btn-block\" "
    + alias3((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n                    Køb\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-2\"><img class=\"img-responsive\" src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                <h2>"
    + ((stack1 = ((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <h3>"
    + ((stack1 = ((helper = (helper = helpers.HeadingThree || (depth0 != null ? depth0.HeadingThree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingThree","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <div class=\"col-xs-4 text-right\">\r\n                    <h6><strong>Antal:</strong></h6>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <input type=\"text\" class=\"form-control input-sm\" value=\"1\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                <a class=\"btn btn-success btn-block\" "
    + alias3((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n                    Køb\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-2\"><img class=\"img-responsive\" src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                <h2>"
    + ((stack1 = ((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <h3>"
    + ((stack1 = ((helper = (helper = helpers.HeadingThree || (depth0 != null ? depth0.HeadingThree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingThree","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <div class=\"col-xs-4 text-right\">\r\n                    <h6><strong>Antal:</strong></h6>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <input type=\"text\" class=\"form-control input-sm\" value=\"1\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                <a class=\"btn btn-success btn-block\" "
    + alias3((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n                    Køb\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['product-tabs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "				<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "				"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "				<div class=\"panel with-nav-tabs panel-default\">\r\n					<div class=\"panel-heading\">\r\n						<ul class=\"nav nav-tabs\">\r\n							<li class=\"active\"><a href=\"#tab1default\" data-toggle=\"tab\">Spefications</a>\r\n							</li>\r\n							<li><a href=\"#tab2default\" data-toggle=\"tab\">Stock amount</a>\r\n							</li>\r\n							<li><a href=\"#tab3default\" data-toggle=\"tab\">Customer Feedback</a>\r\n							</li>\r\n							<li><a href=\"#tab4default\" data-toggle=\"tab\">More Information</a>\r\n							</li>\r\n						</ul>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<div class=\"tab-content\">\r\n							<div class=\"tab-pane fade in active\" id=\"tab1default\">\r\n								<p>Model nr: 23142</p>\r\n								<p>Color: Red</p>\r\n								<p>ID: 23123123</p>\r\n								<p>Material: Cloth</p>\r\n							</div>\r\n							<div class=\"tab-pane fade\" id=\"tab2default\">\r\n								<p>Stockholm: 202</p>\r\n								<p>Copenhagen: 140</p>\r\n								<p>Amsterdam: 69</p>\r\n							</div>\r\n							<div class=\"tab-pane fade\" id=\"tab3default\">\r\n								<div>\r\n									<small style=\"display: block\">John Doe</small>\r\n									<p>\r\n										Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ea assumenda provident enim sit nisi.\r\n									</p>\r\n								</div>\r\n							</div>\r\n							<div class=\"tab-pane fade\" id=\"tab4default\">\r\n								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quisquam quos ut vero ipsam quibusdam quasi amet at accusantium quas reiciendis, doloribus animi distinctio sint rerum expedita, aperiam, omnis repudiandae!</p>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-tabs panel panel-default\">\r\n	<div class=\"row\">\r\n		<div class=\"col-xs-12\">\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</div>\r\n";
},"useData":true});
templates['recursiveMenu'] = template({"1":function(depth0,helpers,partials,data) {
    return " data-dropdown ";
},"3":function(depth0,helpers,partials,data) {
    return "            <span class=\"caret\"></span>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Children : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.recursiveMenu,depth0,{"name":"recursiveMenu","data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " <li "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Children : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-id=\""
    + alias3(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <a data-page=\""
    + ((stack1 = ((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Id","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + alias3(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "  \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Children : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </a> \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Children : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>";
},"usePartial":true,"useData":true});
templates['search-form'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "                <h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingOne || (depth0 != null ? depth0.HeadingOne : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingOne","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\">\r\n		<div class=\"page-header\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingOne : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            <form>\r\n              <div class=\"input-group\">\r\n             <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n              <button type=\"submit\" class=\"btn btn-default\">Search</button>\r\n            </form>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});
templates['search-result'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n            <div class=\"panel-body\">\r\n                <ul>\r\n                    <li>\r\n                        <strong>Headline</strong><br>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc quis ipsum porttitor sollicitudin eu et risus. Integer urna lectus, tincidunt non ullamcorper sed, euismod et nibh. Donec vel suscipit quam, sit amet aliquet augue. Sed et lacinia lacus. Sed eu erat sapien. Mauris</p>\r\n                    </li>\r\n                    <li>\r\n                        <strong>Headline</strong><br>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc quis ipsum porttitor sollicitudin eu et risus. Integer urna lectus, tincidunt non ullamcorper sed, euismod et nibh. Donec vel suscipit quam, sit amet aliquet augue. Sed et lacinia lacus. Sed eu erat sapien. Mauris</p>\r\n                    </li>\r\n                    <li>\r\n                        <strong>Headline</strong><br>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc quis ipsum porttitor sollicitudin eu et risus. Integer urna lectus, tincidunt non ullamcorper sed, euismod et nibh. Donec vel suscipit quam, sit amet aliquet augue. Sed et lacinia lacus. Sed eu erat sapien. Mauris</p>\r\n                    </li>\r\n                    <li>\r\n                        <strong>Headline</strong><br>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc quis ipsum porttitor sollicitudin eu et risus. Integer urna lectus, tincidunt non ullamcorper sed, euismod et nibh. Donec vel suscipit quam, sit amet aliquet augue. Sed et lacinia lacus. Sed eu erat sapien. Mauris</p>\r\n                    </li>\r\n                    <li>\r\n                        <strong>Headline</strong><br>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc quis ipsum porttitor sollicitudin eu et risus. Integer urna lectus, tincidunt non ullamcorper sed, euismod et nibh. Donec vel suscipit quam, sit amet aliquet augue. Sed et lacinia lacus. Sed eu erat sapien. Mauris</p>\r\n                    </li>\r\n                </ul>\r\n\r\n                <nav>\r\n                  <ul class=\"pagination\">\r\n                    <li>\r\n                      <a href=\"#\" aria-label=\"Previous\">\r\n                        <span aria-hidden=\"true\">&laquo;</span>\r\n                      </a>\r\n                    </li>\r\n                    <li><a href=\"#\">1</a></li>\r\n                    <li><a href=\"#\">2</a></li>\r\n                    <li><a href=\"#\">3</a></li>\r\n                    <li><a href=\"#\">4</a></li>\r\n                    <li><a href=\"#\">5</a></li>\r\n                    <li>\r\n                      <a href=\"#\" aria-label=\"Next\">\r\n                        <span aria-hidden=\"true\">&raquo;</span>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </nav>\r\n            </div>\r\n        </div>";
},"useData":true});
templates['shopping-cart'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div name=\"shoppingCart\" class=\"panel panel-info productlist\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel panel-info\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"panel-title\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <h5>\r\n                            <span class=\"glyphicon glyphicon-shopping-cart\"></span> Shopping Basket</h5>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-2\">\r\n                    <small style=\"color: #a7a7a7\">Product</small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <small style=\"color: #a7a7a7\">Stock</small>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                    <small style=\"color: #a7a7a7\">Product Name</small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <small style=\"color: #a7a7a7\">Amount</small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <small style=\"color: #a7a7a7\">Amount in Product</small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <small style=\"color: #a7a7a7\">Price</small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <small style=\"color: #a7a7a7\">Price/Stk</small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <small style=\"color: #a7a7a7\">Type</small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <small style=\"color: #a7a7a7\">Whole Price</small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <small style=\"color: #a7a7a7\">Ta bort</small>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-2\">\r\n                    <img class=\"img-responsive\" src=\"http://placehold.it/150x100\">\r\n                    <small style=\"display: block; margin-top: 5px; color: #969696\" class=\"text-center\">Art nr:\r\n                        <small style=\"color: #a7a7a7; font-size: 12px\">262224</small>\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <img src=\"http://www.onemed.se/Archive/Images/SWEDEN/Bestallningsvara.gif\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                    Tension-free Vaginal Tape\r\nTVT Abbrevo\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <input style=\"width: 100%; display: inline-block\" type=\"number\" value=\"4\">\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    1\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    8 904,46kr\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    8 904,46kr\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    fp\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    35 617,86kr\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Update</a>\r\n                    <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Remove</a>\r\n                </div>\r\n            </div>\r\n             <hr>\r\n             <div class=\"row\">\r\n                 <div class=\"col-xs-2\">\r\n                     <img class=\"img-responsive\" src=\"http://placehold.it/150x100\">\r\n                     <small style=\"display: block; margin-top: 5px; color: #969696\" class=\"text-center\">Art nr:\r\n                         <small style=\"color: #a7a7a7; font-size: 12px\">262224</small>\r\n                     </small>\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     <img src=\"http://www.onemed.se/Archive/Images/SWEDEN/Bestallningsvara.gif\" alt=\"\">\r\n                 </div>\r\n                 <div class=\"col-xs-2\">\r\n                     Klädhängare plast tvärslå och krokar 9-pack\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     <input style=\"width: 100%; display: inline-block\" type=\"number\" value=\"4\">\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     9\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     182,55kr\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     20,28kr\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     fp\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     182,55kr\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Update</a>\r\n                     <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Remove</a>\r\n                 </div>\r\n             </div>\r\n             <hr>\r\n             <div class=\"row\">\r\n                 <div class=\"col-xs-2\">\r\n                     <img class=\"img-responsive\" src=\"http://placehold.it/150x100\">\r\n                     <small style=\"display: block; margin-top: 5px; color: #969696\" class=\"text-center\">Art nr:\r\n                         <small style=\"color: #a7a7a7; font-size: 12px\">262224</small>\r\n                     </small>\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     <img src=\"http://www.onemed.se/Archive/Images/SWEDEN/Bestallningsvara.gif\" alt=\"\">\r\n                 </div>\r\n                 <div class=\"col-xs-2\">\r\n                     Klädhängare plast tvärslå och krokar 9-pack\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     <input style=\"width: 100%; display: inline-block\" type=\"number\" value=\"4\">\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     9\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     182,55kr\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     20,28kr\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     fp\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     182,55kr\r\n                 </div>\r\n                 <div class=\"col-xs-1\">\r\n                     <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Update</a>\r\n                     <a type=\"button\" style=\"width: 100%; padding-left: 3px; padding-right: 3px; border-radius: 0; font-size: 11px\" class=\"btn btn-default\">Remove</a>\r\n                 </div>\r\n             </div>\r\n\r\n        </div>\r\n        <hr>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <div class=\"row text-center\">\r\n            <div class=\"col-xs-9\">\r\n                <h4 class=\"text-right\">Total\r\n                    <strong>50,00kr</strong>\r\n                </h4>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <div class=\"glyphicon glyphicon-share-alt btn btn-primary btn-block\">\r\n                    <span style=\"font-family: verdana; padding-top: -5px\"><a href='?page=17&client=onemed'>Checkout</a></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['similar-products'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "		<h2 style=\"padding-left: 54px\">"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return " "
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + " ";
},"5":function(depth0,helpers,partials,data) {
    return " http://placehold.it/150x150 ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"panel panel-default\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	<div class='row'>\r\n		<div class='col-xs-12'>\r\n			<div class=\"carousel slide media-carousel\" id=\"media\">\r\n				<div class=\"carousel-inner\">\r\n					<div class=\"item  active\">\r\n						<div class=\"row\">\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<div class=\"item\">\r\n						<div class=\"row\">\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<div class=\"item\">\r\n						<div class=\"row\">\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n							<div class=\"col-md-2\">\r\n								<a class=\"thumbnail\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">\r\n									<img alt=\"\" src=\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n								</a>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<a data-slide=\"prev\" href=\"#media\" class=\"left carousel-control\">‹</a>\r\n				<a data-slide=\"next\" href=\"#media\" class=\"right carousel-control\">›</a>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
},"useData":true});
templates['slider'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://placehold.it/1500X500";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div id=\"myCarousel\" class=\"carousel slide\" data-dynamic=\"component\" style=\"margin-bottom:30px;\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"item active\">\r\n            <img\r\n            src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" style=\"width:100%\" class=\"img-responsive\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption\">\r\n                    <h1>"
    + ((stack1 = ((helper = (helper = helpers.HeadingOne || (depth0 != null ? depth0.HeadingOne : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingOne","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\r\n                    <p data-dynamic=\"teaser\"><a class=\"btn btn-lg btn-primary\" href=\"http://getbootstrap.com\">"
    + ((stack1 = ((helper = (helper = helpers.IntroText || (depth0 != null ? depth0.IntroText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"IntroText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img data-dynamic src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" style=\"width:100%\" class=\"img-responsive\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption\">\r\n                    <h1>"
    + ((stack1 = ((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\r\n                    <p>"
    + ((stack1 = ((helper = (helper = helpers.IntroText || (depth0 != null ? depth0.IntroText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"IntroText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n                    <p><a class=\"btn btn-large btn-primary\" href=\"#\">Learn more</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img data-dynamic src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" style=\"width:100%\" class=\"img-responsive\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption\">\r\n                    <h1>"
    + ((stack1 = ((helper = (helper = helpers.HeadingThree || (depth0 != null ? depth0.HeadingThree : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"HeadingThree","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>                                \r\n                    <p data-dynamic=\"teaser\">\r\n                        "
    + ((stack1 = ((helper = (helper = helpers.IntroText || (depth0 != null ? depth0.IntroText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"IntroText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                    <a class=\"btn btn-large btn-primary\" href=\"#\">Browse gallery</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Controls -->\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n        <span class=\"icon-prev\"></span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n        <span class=\"icon-next\"></span>\r\n    </a>\r\n</div>";
},"useData":true});
templates['spot-with-background-image'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"panel-body\" style=\"background-size: cover; background-position:50% 50%; background-repeat:no-repeat; background-image: url('"
    + alias3(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "');\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['spot-with-background-video'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default panel-video\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <video width=\"100%\" height=\"100%\" autoplay loop>\r\n        <source src=\"video/Pfa2_converted.m4v\" type=\"video/mp4\">\r\n    </video>\r\n    <div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['spot-with-inline-image'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "			<img style=\"max-width:100%;\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\"></img><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>";
},"useData":true});
templates['spot-with-inline-video'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "			<iframe width=\"100%\" height=\"200\" frameborder=\"0\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" allowfullscreen></iframe><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\"  title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>\r\n";
},"useData":true});
templates['spot-with-link-list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.LinkUrl : depth0),{"name":"link","hash":{},"data":data}))
    + ">"
    + alias2(((helper = (helper = helpers.LinkText || (depth0 != null ? depth0.LinkText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"LinkText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.LinkText : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>";
},"useData":true});
templates['vacancies'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<h2>"
    + this.escapeExpression(((helper = (helper = helpers.HeadingTwo || (depth0 != null ? depth0.HeadingTwo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"HeadingTwo","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>"
    + ((stack1 = ((helper = (helper = helpers.RichContent || (depth0 != null ? depth0.RichContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"RichContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<a class=\"btn btn-default\" "
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(depth0 != null ? depth0.CTAUrl : depth0),{"name":"link","hash":{},"data":data}))
    + " role=\"button\">"
    + alias2(((helper = (helper = helpers.CTAText || (depth0 != null ? depth0.CTAText : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"CTAText","hash":{},"data":data}) : helper)))
    + "</a><br>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\" style=\"text-align:center;\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.HeadingTwo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.RichContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.CTAText : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>";
},"useData":true});
templates['vacancy'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-default\" title=\""
    + alias3(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Component","hash":{},"data":data}) : helper)))
    + "\r\n\r\n"
    + alias3(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"panel-body\">\r\n		<ul>\r\n			<li>\r\n				<strong><a href=\"#\">Job 1</a></strong><br>\r\n				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus erat pharetra feugiat sodales. Vivamus pharetra luctus sagittis. Duis et sollicitudin neque. Praesent ut tempor velit. Etiam nec rutrum elit.</p>\r\n			</li>\r\n			<li>\r\n				<strong><a href=\"#\">Job 2</a></strong><br>\r\n				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus erat pharetra feugiat sodales. Vivamus pharetra luctus sagittis. Duis et sollicitudin neque. Praesent ut tempor velit. Etiam nec rutrum elit.</p>\r\n			</li>\r\n			<li>\r\n				<strong><a href=\"#\">Job 3</a></strong><br>\r\n				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus erat pharetra feugiat sodales. Vivamus pharetra luctus sagittis. Duis et sollicitudin neque. Praesent ut tempor velit. Etiam nec rutrum elit.</p>\r\n			</li>\r\n			<li>\r\n				<strong><a href=\"#\">Job 4</a></strong><br>\r\n				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus erat pharetra feugiat sodales. Vivamus pharetra luctus sagittis. Duis et sollicitudin neque. Praesent ut tempor velit. Etiam nec rutrum elit.</p>\r\n			</li>\r\n		</ul>\r\n\r\n		<nav>\r\n          <ul class=\"pagination\">\r\n            <li>\r\n              <a href=\"#\" aria-label=\"Previous\">\r\n                <span aria-hidden=\"true\">&laquo;</span>\r\n              </a>\r\n            </li>\r\n            <li><a href=\"#\">1</a></li>\r\n            <li><a href=\"#\">2</a></li>\r\n            <li><a href=\"#\">3</a></li>\r\n            <li><a href=\"#\">4</a></li>\r\n            <li><a href=\"#\">5</a></li>\r\n            <li>\r\n              <a href=\"#\" aria-label=\"Next\">\r\n                <span aria-hidden=\"true\">&raquo;</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n	</div>\r\n</div>";
},"useData":true});
})();
