node Component {
    has name;
    has parent;
    has loc=null;
    has css = {};
    has props = {};
    has sections = {};

    can render with renderer exit {
        loc['name'] = name;
        loc['sections'] = {"children": []};
        for i in --> {
             i.loc={};
             loc['sections']['children'].l::append(i.loc);
        }
    }

    can get_json {
        json = { "name": here.c_name };
        parents = <-[section]-;

        for parent in parents {
            std.out("Parent: ", parent.name, "Child: ", here.name);
        }
    }
}

node Container:Component {
    has c_type = "Container";

    can get_json {
        ::Component:get_json;
    }
}

node Navbar:Component {
    has c_type = "Navbar";
    has title;
    has links = [];

    can get_json {
        ::Component:get_json;
    }
}

node Alert:Component {
    has c_type = "Alert";
    has message;
    has palette;

    can get_json {
        ::Component:get_json;
    }
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

    can get_json {
        ::Component:get_json;
    }
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

