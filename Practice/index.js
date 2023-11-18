//ReactDOM.render(<h1 className="header">Hello, everyone!</h1>,document.getElementById("root"));
// another approach
//ReactDOM.render(<p>React is proving to be fun!</p>,document.getElementById("root"));

//ReactDOM.render(<i>My name is Opungo jacob, a student of IST</i>,document.getElementById("root"));

// Challenge: try to render an <ul> with 2+ <li> inside
/* ReactDOM.render(<ul><b>Meals</b>
    <li>Pizza</li>
    <li>Chips & chicken</li>
    <li>Roles</li>
</ul>, document.getElementById("root")) */



/* Challenge: Recreate the above line of code in vanilla JS by creating and appending an h1 to our divroot(without using innerHTML).
1. -create a new h1 element
2. -Give it some Textcontent
3. -Append it as a child of the div#root

const h1 = document.createElement("h1")
h1.textContent = "This  is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
*/


//JSX

//Building a React info SIte | JSX (javascript, XML)

/* const page = (
    <div>
        <h1>Hello, This is JSX!</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render( */
/* <div>
<h1>Hello, This is JSX!</h1>
<p>This is a paragraph</p>
</div> */
//page,
// document.getElementById("root"))


/* Challenge
1. create a navbar in jsx:
2. -use the semantic `nav` element as the parent wrapper
3. -Have an h1 element with the brand name of your "website"
4. -Insert an unordered list for the other nav elements
5. -inside the `ul`, have three `li`s for "Pricing", "About", and "Contact"
6. -Dont worry about styling yet*/

  /*   const jacob = (
        <nav>
            <h1>Gadget Craze</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </nav>
    )

    ReactDOM.render(
        jacob, document.getElementById("root")
    ) */
    

    /* Challenge
        Findout what happens if we try to append JSX to our
        div#root using ".append()" instead of ReactDOM
        
        1. Create a simple page in JSX (>= 4 elements) and save them in a variable
        2. Select the div with the ID of "root" and use `.append()` to append your JSX
        3. See if you can guess what will show up in the browser before running the code
        4. See if you can explain what exactly shows up in the browser
    

        const me = (
            <div>
                <h1>Hello everyone, am coding in react!!</h1>
            <ol>
                <li>Boeing</li>
                <li>Airbus</li>
                <li>Apache</li>
                
            </ol>
            <h3>Very soon i will be developing apps</h3>
            <p>This is fun</p>

            </div>
            
        )
        ReactDOM.render(
            me, document.getElementById("root");
        )
        // document.getElementById("root").append(JSON.stringify(me))
        */


      /*  Challenge: Starting from scratch, build and render the HTML 
      for our section project. check the Google slide for what youre trying to build.
      we'll be adding styling to it later.

      Hints:
     1.  * The react logo is a file in the project tree, so you can
      access it by using `src"./react-logo.png" in your image element
     2.  *You can alos set the `width` attribute of the image element just like in HTML. 
      in the slide, i have set it 40px
 

      const page = (
        <div>

            <img src="./logo192.png" width="40px"></img>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has wll over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>


        </div>
      )
      ReactDOM.render(
        page, document.getElementById("root")
      )
      */



    /* Creating cusy=tom components in React using Functions. 
    NB: This is the correct way to do so
    
   function FuncName (){
    return (
        <div>
        <img src="./logo192.png" width="40px"></img>
        <h1>Fun facts about React</h1>

        <ul>
            <li>Was first released in 2003</li>
            <li>Was originally created by Jordan Walkie</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
            
        </ul>
    </div>

    )
    
   }
ReactDOM.render(
    <FuncName />, document.getElementById("root")
)
*/

/* 
Challenge:
Part 1: Create a page of your own using a custom page component
it should return an ordered list with the reasons why you're
excited to be learning react :)

render your list to the page


function Reason() {
    return(
       <div>
         <h2>Reasons for learning React</h2>
         <ol>
            <li>I want to esplore the different JavaScript frame work</li>
            <li>I want to obtain new skills in manipulating javascript</li>
            <li>I want to learn how to build modular sites </li>
            <li>I want to succeed as a programmer</li>
         </ol>
       </div>
    )
}
ReactDOM.render(
    <Reason />, document.getElementById("root")
)
*/

/* Challenge:

Part 2:
i) - Add a `header` element with a nested `nav` element. inside the `nav`,
  include a `img` element with the image of the react logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen.
ii) - Add an `h1` with some text describing the page. (E.g "Reasons 
  i'm excited to learn React"). Place it above the ordered list.
iii) - Add a `footer` after the list that says:
  ""    

function Reason(){
    return(
        <div>
            <header>
                <nav>
                    <img src="./logo192.png" width="40px"></img>
                </nav>
            </header>
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>I want to esplore the different JavaScript frame work</li>
                <li>I want to obtain new skills in manipulating javascript</li>
                <li>I want to learn how to build modular sites </li>
                <li>I want to succeed as a programmer</li>
            </ol>

            <footer>
                <small> &#169; 2023 Jacob develpment. All rights reserved.</small>
            </footer>

        </div>

    )
}

ReactDOM.render(
<Reason />, document.getElementById("root")
)
*/



/* 
Mini challenge:
1. Move the `header` element from page into its own component called `header`


function Header(){
    return(
        <>
        <header>
                <nav>
                    <img src="./logo192.png" width="40px"></img>
                </nav>
            </header>
    </>
    )
    
}


function Reason(){
    return(
        <>
            <Header />

            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>I want to esplore the different JavaScript frame work</li>
                <li>I want to obtain new skills in manipulating javascript</li>
                <li>I want to learn how to build modular sites </li>
                <li>I want to succeed as a programmer</li>
            </ol>

            <footer>
                <small> &#169; 2023 Jacob develpment. All rights reserved.</small>
            </footer>

        </>
    )
}

ReactDOM.render(
    <Reason />, document.getElementById("root")
)

*/

/* 
Challenge:

- Move the `footer` into its own component called "Footer"
  and render that component inside the page component.
- Move the `h1` and `ol` together into another component 
  called "Main content" and render insde page as well 


function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src="./logo192.png" width="40px"></img>
                </nav>
            </header>
        </>
    )
}
function Footer(){
    return(
        <>
            <footer>
                <small> &#169; 2023 Jacob develpment. All rights reserved.</small>
            </footer>
        </>
    )
}
function MainContent(){
    return(
        <>
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>I want to esplore the different JavaScript frame work</li>
                <li>I want to obtain new skills in manipulating javascript</li>
                <li>I want to learn how to build modular sites </li>
                <li>I want to succeed as a programmer</li>
            </ol>

        </>
    )
}
function Reason(){
    return(
        <>
        <Header />
        <MainContent />
        <Footer />
        </>
    )
}
ReactDOM.render(
    <Reason />, document.getElementById("root")
)
*/
/* The above function is the representation of the naming of 
a parent child
i.e Reason is the parent component. and by virtue that parent
is rendering other components such as Header, Footer, MainContent, they are
considered to be child components.
*/



/* Build a React info site | Styling with Classes */

/* 
Challenge a): using the above code, do the following;
- Add a `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing","About","Contact"

Challenge b): 
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo

Challenge c):
- Change the image styling to happen in css instead of in-line
  For practice, add a new class to the image in order to style it. 

function Header(){
    return(
        <>
            <header>
                <nav className="nav">
                    <img src="./logo192.png" className="image"></img>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
function Bar(){
return(
    <hr className="thing" />
)
}

function MainContent(){
    return(
        <>
            <div className="body">
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>I want to esplore the different JavaScript frame work</li>
                <li>I want to obtain new skills in manipulating javascript</li>
                <li>I want to learn how to build modular sites </li>
                <li>I want to succeed as a programmer</li>
            </ol>

            </div>
        </>
    )
}
function Footer(){
    return(
        <>
            <footer>
                <small> &#169; 2023 Jacob develpment. All rights reserved.</small>
            </footer>
        </>
    )
}
function Reason(){
    return(
        <>
        <Header />
        <Bar />
        <MainContent />
        <Footer />
        </>
    )
}
ReactDOM.render(
    <Reason />, document.getElementById("root")
)
*/


/* 
Challenge:
- Move the footer, header and maincontent components
into their own files.
NB: u will have to import and export the files.
*/

import Header from "./Header";
import Bar from "./Bar";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Reason(){
    return(
        <>
        <Header />
        <Bar />
        <MainContent />
        <Footer />
        </>
    )
}
ReactDOM.render(
    <Reason />, document.getElementById("root")
)
