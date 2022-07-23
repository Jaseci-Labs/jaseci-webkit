import {*} with './site.jac';

walker get_nodes {
    has nodes; 
    take -->;

    Component {
        nodes.list::append(here);
    }
}

walker set_parent {
    has n;
    n.parent = <-[section]-[0];
}

walker build_json {
    has nodes;
    has children = [];
    
    for n in nodes {
        spawn n walker::set_parent(n=n);
        std.out("Parent: ", n.parent.name, "Child: ", n.name);

        if n.parent.c_type.bool {
            if("children" in n.parent.sections.dict.keys) {
                std.out(n.parent.sections.children);
                n.parent.sections["children"].list::append({ "name": n.name, "sections": n.sections });
            } else {
                n.parent.sections["children"] = [{ "name": n.name, "sections": n.sections }];
                // std.out("Parent Section", n.parent.sections);
            }
        }

        // if(n.parent) {
            // children.list::append({ "component": n.name });
        //    if n.parent: n.parent.sections.dict::update({ "children": [] });
        //    std.out(n.parent.sections);
        // }
    }
}


walker init {
    has json = [];
    has nodes = [];
    has nodes_reversed = [];  

    // Spawn main graph at root
    root {
        spawn here -[section(name="root")]-> graph::my_site;
        spawn here walker::get_nodes(nodes=nodes);
        nodes.list::reverse;
        spawn here walker::build_json(nodes=nodes);

        std.out("\n\n-----");
    }

    take -->;

    Component {
        std.out(here.parent.type);
        std.out("name", here.name);
        std.out("sections", here.sections);
    }
}



