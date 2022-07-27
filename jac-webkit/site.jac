import {*} with "./components.jac";
import {*} with "./edges.jac";

graph my_site {
    ## this is necessary, but idk why
    has anchor root;

    spawn {
        root = spawn node::Container(name="mainContainer");
        hero = spawn node::Hero(name="hero1", background_image="https://i.imgur.com/0Z1Z0Zm.jpg");
        
        root-[section(name="children")]->hero;

        navbar1 = spawn root-[section(name="children")]->node::Navbar(
            name="navbar1", 
            links=[
                {"label": "Home", "href": "#"}, 
                {"label": "About", "href": "#"}
            ]
        );

        // navbar1.css.color = "red";
            
        // alert1 = spawn root-[section(name="right")]->node::Alert(name="alert1", message="Hello", palette="Primary");

        // alertBtn = spawn alert1-[section(name="children")]->node::Button(name="alertBtn", label="Click Me")
        //     -[section(name="children")]->node::Button(name="alertBtn1", label="Click Here");

        // alert1-[section(name="children")]->alertBtn;
        // alertBtn-[section(name="children")]->alertBtn2;
    }    
    
}


// An intelligent AI that integrates with slack to perform various company-related tasks.
// It receive some instruction, performs name entity extraction, to determine what tasks to perform and how to do it.
