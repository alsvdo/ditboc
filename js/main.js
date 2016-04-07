    var client = (function() {
        var clients = {
            'master': { //prototype.master
                components: 'https://docs.google.com/spreadsheets/d/1NWQbwm4SLCuR3HMjsp-w3UmqERV0Dv84x-pyVDwgraM/edit#gid=1693330084',
                edit: 'https://docs.google.com/spreadsheets/d/1NWQbwm4SLCuR3HMjsp-w3UmqERV0Dv84x-pyVDwgraM/edit#gid=956447144'
            },
            'edit.pfa.dk': {
                components: 'https://docs.google.com/spreadsheets/d/1dYT1l22KHG6VedgQfd_DF_bQy4AEnst7nFE15u8GT3I#gid=671887640',
                edit: 'https://docs.google.com/spreadsheets/d/1dYT1l22KHG6VedgQfd_DF_bQy4AEnst7nFE15u8GT3I/edit#gid=1367716908'
            },
            'english.pfa.dk': {
                components: 'https://docs.google.com/spreadsheets/d/1dYT1l22KHG6VedgQfd_DF_bQy4AEnst7nFE15u8GT3I#gid=671887640',
                edit: 'https://docs.google.com/spreadsheets/d/1dYT1l22KHG6VedgQfd_DF_bQy4AEnst7nFE15u8GT3I/edit#gid=127466075'
            },
            'iss': {
                components: 'https://docs.google.com/spreadsheets/d/1NWQbwm4SLCuR3HMjsp-w3UmqERV0Dv84x-pyVDwgraM/edit#gid=1693330084',
                edit: 'https://docs.google.com/spreadsheets/d/1NWQbwm4SLCuR3HMjsp-w3UmqERV0Dv84x-pyVDwgraM/edit#gid=911671213'
            },
            'iss.manual': {
                components: 'https://docs.google.com/spreadsheets/d/1PAS_OmAgq9SmkYTr-eNcBsPrGpDuF9DWOguKlIl3yh8/edit#gid=1693330084',
                edit: 'https://docs.google.com/spreadsheets/d/1PAS_OmAgq9SmkYTr-eNcBsPrGpDuF9DWOguKlIl3yh8/edit#gid=913242986'
            },
            standard: {
                components: 'https://docs.google.com/spreadsheets/d/1PAS_OmAgq9SmkYTr-eNcBsPrGpDuF9DWOguKlIl3yh8/edit#gid=1693330084',
                edit: 'https://docs.google.com/spreadsheets/d/1NWQbwm4SLCuR3HMjsp-w3UmqERV0Dv84x-pyVDwgraM/edit#gid=956447144'
            },
            'servicefutures': {
                components: 'https://docs.google.com/spreadsheets/d/1PAS_OmAgq9SmkYTr-eNcBsPrGpDuF9DWOguKlIl3yh8/edit#gid=1693330084',
                edit: 'https://docs.google.com/spreadsheets/d/1NWQbwm4SLCuR3HMjsp-w3UmqERV0Dv84x-pyVDwgraM/edit#gid=2035244876'
            }
        };

    console.log(client);
    switch (getUrlParameter('client')) {
        case 'master':
            return clients['master'];
        case 'edit.pfa.dk':
        case 'pfa':
            return clients['edit.pfa.dk'];
        case 'english.pfa.dk':
            return clients['english.pfa.dk'];
        case 'iss':
            return clients['iss'];
        case 'iss.manual':
            return clients['iss.manual'];
        case 'servicefutures':
            return clients['servicefutures']
    }
    return clients.standard;
})();
// var client = getClient();

if (window.location.href.indexOf(".html") == -1) {
    window.location.href = "index.html" + window.location.search;
}

$.fn.sheetrock.options.url = client.edit;
$.fn.sheetrock.options.chunkSize = 200;
$.fn.sheetrock.options.formatting = true;
$.fn.sheetrock.options.headersOff = true;

var dataTable = $('#datatable');
var componentData = new Array();
var pageComponents = new Array();
var pageName;

(function getComponentData() {
    dataTable.sheetrock({
        url: client.components,

        columns: {
            A: 'Component',
            B: 'Category',
            D: 'Filename',
            E: 'Type',
            F: 'HeadingOne',
            G: 'HeadingTwo',
            H: 'HeadingThree',
            I: 'Teaser',
            J: 'RichContent',
            K: 'LinkText',
            L: 'LinkUrl',
            M: 'Image',
            N: 'Date',
            O: 'Price',
            P: 'CTAText',
            Q: 'CTAUrl',
            R: 'CTATwoText',
            S: 'CTATwoUrl',
            U: 'UserStoryForPresentation',
            X: 'Placement'
        },

        // This array becomes the property names of the output javascript object, it must have exactly the same amount of strings as the retrieved columns.
        labels: ['Component', 'Category', 'Filename', 'Type', 'HeadingOne', 'HeadingTwo', 'HeadingThree', 'Teaser', 'RichContent', 'LinkText', 'LinkUrl', 'Image', 'Date', 'Price', 'CTAText', 'CTAUrl', 'CTATwoText', 'CTATwoUrl', 'UserStoryForPresentation', 'Placement'],

        sql: 'Select %Component%, %Category%, %Filename%, %Type%, %HeadingOne%, %HeadingTwo%, %HeadingThree%, %Teaser%, %RichContent%, %LinkText%, %LinkUrl%, %Image%, %Date%, %Price%, %CTAText%, %CTAUrl%, %CTATwoText%, %CTATwoUrl%, %UserStoryForPresentation%, %Placement%',

        rowHandler: function (row) {
            componentData.push(row.cells);
        },
        userCallback: function () {
            console.log(componentData)
            console.log(componentData.length + " Components loaded")
        }
    })
})();

(function createMenuStructure() {
    var menuStructure = new Array();
    // checks the list of objects for a "children" property recursively.
    function childrenCheck(parentObj, childObj) {
        if (parentObj.Children) {
            for (var i = parentObj.Children.length; i >= 0; i--) {
                if (parentObj.Children[i] != null) {
                    var currentItem = parentObj.Children[i];
                    if (currentItem.Id == childObj.Parent) {
                        if (!currentItem.Children) {
                            currentItem["Children"] = new Array();
                        }
                        currentItem.Children.unshift(childObj);
                    } else {
                        childrenCheck(currentItem, childObj);
                    }
                }
            }
        }
    }

    dataTable.sheetrock({
        sql: 'select %Id%, %Parent%, %Name% where %Name% is not null and %HideInLists% != TRUE',
        // sql: 'select %Id%, %Parent%, %Name% where %Name% is not null and %HideInLists% != "TRUE"',

        rowHandler: function (row) {
            menuStructure.push(row.cells);
        },
        userCallback: function () {
            for (var i = menuStructure.length; i >= 0; i--) {
                if (menuStructure[i] != null) {
                    currentItem = menuStructure[i];
                    if (currentItem.Parent != (null || "")) {
                        for (var j = 0; j < menuStructure.length; j++) {
                            if (menuStructure[j].Id == currentItem.Parent) {
                                var parentItem = menuStructure[j];
                                if (!parentItem.Children) {
                                    parentItem["Children"] = new Array();
                                }
                                parentItem.Children.unshift(currentItem);
                                menuStructure.splice(menuStructure.indexOf(currentItem), 1);
                            } else {
                                childrenCheck(menuStructure[j], currentItem);
                            }
                        }
                    }
                }

            }
            for (var i = menuStructure.length; i >= 0; i--) {
                var currentItem = menuStructure[i];
                if (currentItem != null) {
                    if (currentItem.Parent != (null || "")) {
                        menuStructure.splice(i, 1);
                    } else {
                        delete currentItem["Parent"];
                    }
                }
            }
            menuObject = {
                menuitems: menuStructure
            };
        }
    })
})();

$(document).on('click', 'a[data-page]', function (e) {
    var $that = $(this),
        pageId = $that.data('page'),
        currentLocation = window.location,
        wWidth = $(window).width();

    if (pageId != null) {
        if ($that.next('ul').length && wWidth <= 768) {
            if ($that.hasClass('clicked')) {
                window.location.href = addUrlParameter(currentLocation, 'page', pageId);
            } else {
                $('a[data-page]').removeClass('clicked');
                $that.addClass('clicked')
            }
        } else {
            window.location.href = addUrlParameter(currentLocation, 'page', pageId);
        }
    }
});

$(document).on('mouseenter mouseleave', '#main-menu ul li[data-dropdown]', function (e) {
    var currentElement = $(e.target);
    // console.log(currentElement.prop("tagName"))
    $('main').css('padding-top', 50 * currentElement.parents('li[data-dropdown]').length);

    if (e.type == "mouseenter") {
        $('.onPage > ul').css('display', 'none');
    } else {
        $('.onPage > ul').css('display', 'block');
        if ($('.onPage').length) {
            // $('main').css('padding-top', 50 * ($('.onPage').length > 0 ? $('.onPage').length: 1))

            if ($('.onPage').length > 0) {

                if ($('.onPage:last').attr('data-dropdown') !== undefined) {
                    $('main').css('padding-top', 50 * $('.onPage').length)
                } else {
                    $('main').css('padding-top', 50 * ($('.onPage').length - 1))
                }

            }

        } else {
            $('main').css('padding-top', '0')
        }

    }
});

function getUrlParameter(param) {
    var pageUrl = location.search.substring(1);
    var urlVariables = pageUrl.split('&');
    for (var i = 0; i < urlVariables.length; i++) {
        var parameterName = urlVariables[i].split("=");
        if (parameterName[0] == param) {
            return parameterName[1];
        }
    }
};

function addUrlParameter(url, param, value) {
    // Using a positive lookahead (?=\=) to find the
    // given parameter, preceded by a ? or &, and followed
    // by a = with a value after than (using a non-greedy selector)
    // and then followed by a & or the end of the string
    var val = new RegExp('(\\?|\\&)' + param + '=.*?(?=(&|$))'),
        parts = url.toString().split('#'),
        url = parts[0],
        hash = parts[1]
    qstring = /\?.+$/,
        newURL = url;

    // Check if the parameter exists
    if (val.test(url)) {
        // if it does, replace it, using the captured group
        // to determine & or ? at the beginning
        newURL = url.replace(val, '$1' + param + '=' + value);
    } else if (qstring.test(url)) {
        // otherwise, if there is a query string at all
        // add the param to the end of it
        newURL = url + '&' + param + '=' + value;
    } else {
        // if there's no query string, add one
        newURL = url + '?' + param + '=' + value;
    }

    if (hash) {
        newURL += '#' + hash;
    }
    return newURL;
};

function getComponentObjectByName(string) {
    for (var i = 0; i < componentData.length; i++) {
        var currentComponent = componentData[i];
        if (currentComponent.Component != (null || "")) {
            // console.log(currentComponent.Component + " (" + string + ")");
            if (currentComponent.Component == string) {
                obj = currentComponent;
                return currentComponent;
            }
        }
    }
};

function populateTemplate(target, obj, templateFile) {
    var dfd = $.Deferred();
    if (obj != null) {
        var template = Handlebars.templates[templateFile.replace('.handlebars', '')];

        if (template) {
            var html = template(obj);
            $(target).attr('id') != "layoutTemp" ? target.append(html) : target.replaceWith(html);
            dfd.resolve()
        } else {
            console.warn('"' + templateFile + '" template not found');
            dfd.reject();
        }

    } else {
        console.warn('"' + templateFile + '" not found')
        dfd.reject();
    }
    return dfd.promise();
};

function getPageComponenents(pageId) {
    dataTable.sheetrock({
        labels: ['Components', 'Name'],
        headersOff: true,
        sql: "Select %Components%, %Name% where %Id% = " + pageId,
        rowHandler: function (row) {
            if (pageName == null) {
                pageName = row.cells.Name;
            }
            pageComponents.push(row.cells);
        },
        userCallback: function () {
            console.log('page components: ' + pageComponents);
            var componentCollection = pageComponents[0].Components;
            var splitCollection = componentCollection.split("\n");

            for (var i = 0; i < splitCollection.length; i++) {
                var rowComponents = splitCollection[i].split(','),
                    editorialComponents = new Array(),
                    layoutComponents = new Array();

                for (var j = 0; j < rowComponents.length; j++) {

                    var componentName = rowComponents[j].trim();
                    var component = getComponentObjectByName(componentName);

                    console.log(component.Type);
                     component.Type.toLowerCase() === "editorial managed" ? editorialComponents.push(component) : layoutComponents.push(component);

                }
                if (editorialComponents.length) {
                    $('main > .container').append('<div class="row" data-id="' + i + '"></div>');
                    var latestRow = $('main > .container > .row[data-id="' + i + '"]');

                    var columnSize = 12 / editorialComponents.length;
                    for (var j = 0; j < editorialComponents.length; j++) {
                        var component = editorialComponents[j];
                        latestRow.append('<div class="component col-md-' + columnSize + '" data-component="' + j + '" data-row="' + i + '"></div>');
                        var latestCol = $('.component[data-component="' + j + '"][data-row="' + i + '"]');
                        populateTemplate(latestCol, component, component.Filename);
                    }
                }
                if (layoutComponents.length) {
                    for (var j = 0; j < layoutComponents.length; j++) {
                        var component = layoutComponents[j];
                        var tempString = '<div id="layoutTemp"></div>';
                        var $main = $('main');
                        if (component.Placement != (null || "")) {

                            switch (component.Placement.toLowerCase()) {

                                case "content bottom":
                                    $main.find('> .container:not(.sidecontent) .row:last-of-type').after(tempString)
                                    break;

                                case "content top":
                                    $main.find('> .container:not(.sidecontent) .row:first-of-type').before(tempString);
                                    break;

                                case "top":
                                    $main.before(tempString);
                                    break;

                                case "bottom":
                                    $main.after(tempString);
                                    break;

                                case "content left":
                                    if (!$('.container.sidecontent').length) {
                                        $main.find('> .container').wrap(function () {
                                            return '<div class="container-fluid sidecontent"><div class="row"><div class="col-sm-6 maincontent"> </div></div></div>'
                                        });
                                    }
                                    $('.sidecontent .row .maincontent').before('<div class="col-sm-3">' + tempString + '</div>');

                                    break;
                                case "content right":
                                    if (!$('.container.sidecontent').length) {
                                        $main.find('> .container').wrap(function () {
                                            return '<div class="container-fluid sidecontent"><div class="row"><div class="col-sm-6 maincontent"> </div></div></div>'
                                        });
                                    }
                                    $('.sidecontent .row .maincontent').after('<div class="col-sm-3">' + tempString + '</div>');

                                    break;

                                default:
                                    $main.before(tempString);
                                    break;
                            }
                        } else {
                            $main.before(tempString);
                        }
                        var temp = $('#layoutTemp');
                        var obj;
                        switch (component.Category.toLowerCase()) {
                            case "navigation":
                                obj = menuObject;
                                break;
                            default:
                                obj = component;
                                break;
                        }
                        populateTemplate(temp, obj, component.Filename).done(function () {

                            switch (component.Component.toLowerCase()) {
                                case "global menu":
                                    initializeGlobalMenu();
                                    break;

                            }

                            function initializeGlobalMenu() {
                                var currentPage = $('li[data-id="' + getUrlParameter('page') + '"]');
                                currentPage.addClass('onPage');
                                currentPage.parents('li').addClass('onPage');
                                if ($('.onPage').length) {

                                    if ($('.onPage').length > 0) {

                                        if ($(currentPage).attr('data-dropdown') !== undefined) {
                                            $('main').css('padding-top', 50 * $('.onPage').length)
                                        } else {
                                            $('main').css('padding-top', 50 * ($('.onPage').length - 1))
                                        }

                                    }
                                }
                            }

                        });
                    }

                }
            }
        }
    });
};

Handlebars.registerHelper("currentPageName", function () {
    return pageName;
});

Handlebars.registerPartial("recursiveMenu", Handlebars.templates['recursiveMenu']);

Handlebars.registerHelper("times", function (n, block) {
    var accum = '';
    for (var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

Handlebars.registerHelper("contains", function (string, val) {
    return (val.indexOf(string) > -1);
});

Handlebars.registerHelper('link', function (link) {
    if (link.indexOf('http') > -1) {
        return 'href="' + link + '"';
    } else {
        return 'data-page=' + link;
    }
});

getUrlParameter('page') != null ? getPageComponenents(getUrlParameter('page')) : getPageComponenents(1);
