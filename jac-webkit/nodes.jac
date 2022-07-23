import {graph::{my_site}} with "./site.jac";

edge section {
    has name;
}

walker init {
    root {
        spawn here --> graph::my_site;
        for i in -->:
            std.out(i.name);
    }

    std.out("Hello world");    
}
