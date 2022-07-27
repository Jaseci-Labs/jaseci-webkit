import {*} with './main.jac';

node Component {
    has name;
    has c_type;
    has loc=null;
    has css = {};
    has props = {};
    has sections = {};
    
    can get_props {
        std.out("After: ", here.info["jid"]);
        for prop in here.context.dict::keys {
            // std.out(loc["props"]);
            if prop not in ["name", "type", "loc", "css", "props", "sections", "c_type"] {
                if here.context[prop]: loc["props"][prop] = here.context[prop];
            }
        }
    }
    

    can pre_render with pre_renderer exit {
        loc['name'] = name;
        loc['component'] = c_type;
        loc['sections'] = {"children": []};
        loc['css'] = css;
        loc['props'] = {};
        ::get_props;
        


        for i in --> {
             i.loc={};
             i.loc['name'] = i.name;
             i.loc['css'] = i.css;
             i.loc['component'] = c_type;
             i.loc['sections'] = {};
             i.loc['sections']["children"] = [];
             i.loc['props'] = {};
             std.out("Before: ", i.info["jid"]);
             i::get_props;

             loc['sections']["children"].l::append(i.loc);
        }
    }
}

node Container:Component {
    has c_type = "Container";
}

node Navbar:Component {
    has c_type = "Navbar";
    has title;
    has links = [];
}

node Alert:Component {
    has c_type = "Alert";
    has message;
    has palette;
}

node Button:Component {
    has c_type = "Button";
    has label;
    has palette;
    has tooltip;
    has active;
    has variant;
    has tooltipPosition;
    has tooltipPalette;
    has noRadius;
    has size;
}

node Anchor:Component {
    has c_type = "Anchor";
    has label;
    has href;
    has target;
    has hover;
    has palette;
}

node Avatar:Component {
    has c_type = "Avatar";
    has name;
    has variant;
    has src;
    has placeholder;
}

node Badge:Component {
    has c_type = "Badge";
    has label;
    has palette;
    has size;
}

node Breadcrumbs:Component {
    has c_type = "Breadcrumbs";
    has links;
}

node ButtonGroup:Component {
    has c_type = "ButtonGroup";
    has buttons;
}

node Card:Component {
    has c_type = "Card";
    has title;
    has variant;
    has shadow;
    has radius;
}

node Carousel:Component {
    has c_type = "Carousel";
    has slides;
}

node Checkbox:Component {
    has c_type = "Checkbox";
    has label;
    has value;
    has palette;
}

node Collapse:Component {
    has c_type = "Collapse";
    has label;
    has label;
    has palette;
    has icon;
}


node Column:Component {
    has c_type = "Column";
    has justify;
    has items;
}


node DataGrid:Component {
    has c_type = "DataGrid";
    has variant;
    has server;
    has walker_name;
    has snt;
    has token;
    has headings;
    has items_per_page;
}

node DataList:Component {
    has c_type = "DataList";
    has server;
    has walker_name;
    has snt;
    has token;
    has layout;
    has template;
    has getters;
}

node DatePicker:Component {
    // has type;
    has label;
    has value;
}

node Dialog:Component {
    has open;
    has title;
}

node Divider:Component {
    has orientation;
    has color;
    has label;
    has size;
}

node Drawer {
    has title;
    has open;
}

node Dropdown {
    has label;
    has items;
    has buttonprops;
}

node Hero:Component {
    has action;
    has description;
    has background_image;
    
    can get_props {
        ::Component:get_props;
        std.out("Should only be hero comp", here.info);
        std.out(loc["props"]);
        loc["props"].dict::update({"backgroundimage": loc["props"]["background_image"]});
        loc["props"].dict::pop("background_image");
    }
}


// node Input {}

// node Label {}

// node Popover {}

// node Progress {}

// node Radio {}

// node RadioGroup {}

// node Range {}
// node Rating {}
// node Row {}
// node Select {}
// node SpeechInput {}
// node Stat {}
// node Tabs {}
// node Text {}
// node TextBox {}
// node Toast {}
// node Toggle {}
// node Tooltip {}
// node MyComponent {}





