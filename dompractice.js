// Create an index.html and dompractice.js. Connect the js file.
// Inside the body of your element write the code below to create a bunch of divs using Emmett shortcut.
// For example, div#frenchfry
// There should be a parent div which 6 children and each children has 3 children :)
// The names of the divs should contain the following class names.
// parent > child > grandchild

// ===== JavaScript =====
// Change the title of your webpage to 'DOM Practice' using textContent and without assigning an id or a class name


// Access the parent and apply the following properties to the parent.
// width 500px
// height of 450 px
// background color of red


// Access the children of parent and apply the following properties to them
// Width 100%
// Height 50px
// Background color of blue
// Margins 30 px at top and bottom and 0 on left and right
// Text align of center
// Font color of #E0D635


// Access the grandchildren give them the following properties
// width 100%
// height of 7px
// text that indicates index starting at 1
// margin top of 10px


// Grandma's favorite
// Access the 14th grandchild and give them a font color of pink and italicize
// use array index to access the child and use 'children' to access the grandchild.
// Look at MDN DOM children property
// Assign a text color purple to the 14th grandchild


// The JavaScript of Grandchildren
// Access the parent with the child named 9 and give the parent a position of relative
// Access the 9th child and assign it to a variable named blackSheep. Use the same method from above to access the child (children property)
// Give the following properties to blackSheep
// text color black
// font size 9rem
// text align right
// transform scale(-1, 1)
// position absolute
// top 30px
// left 500px

const title = document.querySelector("title");
title.textContent = "DOM Practice"


const parent_div = document.querySelector(".parent");
parent_div.style.backgroundColor = "red";
parent_div.style.width = "500px"
parent_div.style.height = "450px"
//console.log(parent_div);

//Access the children of parent and apply the following properties to them
// Width 100%
// Height 50px
// Background color of blue
// Margins 30 px at top and bottom and 0 on left and right
// Text align of center
// Font color of #E0D635

const children_div = document.querySelectorAll(".child")
for(let child of children_div){
    child.style.width = "100%"
    child.style.height = "50px";
    child.style.backgroundColor = "blue";
    child.style.margin = "30px 0px";
    child.style.textAlign = "center";
    child.style.color = '#E0D635';
}

const grandchildren_div = document.querySelectorAll(".grandchild")
for(let i=0;i<grandchildren_div.length;i++){
    let grand_child = grandchildren_div[i];
    grand_child.style.width = "100%"
    grand_child.style.height = "7px"
    grand_child.style.margin = "10px 0px 0px 0px";
    grand_child.textContent = i+1;
}


// grandchildren_div[13].style.color = "pink";
// grandchildren_div[13].style.fontStyle = "italic";


//console.log(document.querySelectorAll(".child")[4].children[1]);
const favgrandchild = document.querySelectorAll(".child")[4].children[1];
favgrandchild.style.color = "pink"
favgrandchild.style.fontStyle = "italic";
favgrandchild.style.color = "purple";

function get9thChild(){
    for(let child of children_div)
{
  for(let grandchild of child.children) 
  {
    if(grandchild.textContent === "9")
    {
        return grandchild;
    }
  }
}
}


let blacksheep = get9thChild();
blacksheep.parentElement.style.position = "relative";


blacksheep.style.color = "black";
blacksheep.style.fontSize = "9rem";
blacksheep.style.textAlign = "right";
blacksheep.style.transform = "scale(-1,1)";
blacksheep.style.position = "absolute";
blacksheep.style.top = "30px";
blacksheep.style.left = "500px";






