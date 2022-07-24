import {*} with './site.jac';

walker renderer {
    has payload={};
    Component {
        if(here.loc==null): here.loc=payload;
        take -->;
    }
    with exit {
        std.out(payload);
    }
}

walker init {
    // Spawn main graph at root
    root {
        spawn here -[section(name="root")]-> graph::my_site;
        spawn -->[0] walker::renderer;
    }

}



