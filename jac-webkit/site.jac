import {*} with "./components.jac";
import {*} with "./edges.jac";

graph my_site {
    ## this is necessary, but idk why
    has anchor root;

    spawn {
        root = spawn node::Container(name="mainContainer");

        navbar1 = spawn root-[section(name="children")]->node::Navbar(
            name="navbar1", 
            links=[
                {"label": "Home", "href": "#"}, 
                {"label": "About", "href": "#"}
            ]
        );
            
        alert1 = spawn root-[section(name="children")]->node::Alert(name="alert1", message="Hello", palette="Primary");
        alertBtn = spawn alert1-[section(name="right")]->node::Button(name="alertBtn", label="Click Me");

        alert1-[section(name="right")]->alertBtn; 
    }    
    
}


// An intelligent AI that integrates with slack to perform various company-related tasks.
// It receive some instruction, performs name entity extraction, to determine what tasks to perform and how to do it.
