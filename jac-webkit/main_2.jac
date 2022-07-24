import {*} with './site.jac';

walker build_json {
    has anchor nodes = [];
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
            }
        }
        
    }
}


walker init {
    has visited = [];
    has stack = [];

    // Spawn main graph at root
    root {
        spawn here -[section(name="root")]-> graph::my_site;
    }

    take -->;

    Component {
        visited.list::append(here);
        for n in -->: stack.list.append(n);

        std.out(visited);       
    }
}



