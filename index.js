 // FILE RUN THROUGH INDEX.HTML INSTEAD OF APP.JS

 const express = require("express");
 const app = express();
 const port = process.env.PORT|| 5000;
 app.use(express.static("./index.html"));
 function yellowRow() {
   const yellowArrow = document.getElementById("arrow-1");
   const yellowCircle = document.getElementById("circle-1");
   console.log("yellow row is clicked");
   var pos = 220;
   id = setInterval(frame, 10);
   function frame() {
     if (pos == 0) {
       clearInterval(id);
       yellowCircle.style.backgroundColor = "pink";
     } else {
       pos--;
       yellowArrow.style.marginLeft = pos + "px";
     }
   }
 }
 function blueRow() {
     const blueArrow = document.getElementById("arrow-2");
     const blueCircle = document.getElementById("circle-2");
   console.log("Blue row is clicked");
   var pos = 220;
   id = setInterval(frame, 10);
   function frame() {
     if (pos == 0) {
       clearInterval(id);
       blueCircle.style.backgroundColor = "black";
     } else {
       pos--;
       blueArrow.style.marginLeft = pos + "px";
     }
   }
 };
 function redRow(){
     const redArrow = document.getElementById("arrow-3");
     const redCircle = document.getElementById("circle-3");
   console.log("red row is clicked");
   var pos = 220;
   id = setInterval(frame, 10);
   function frame() {
     if (pos == 0) {
       clearInterval(id);
       redCircle.style.backgroundColor = "beige";
     } else {
       pos--;
       redArrow.style.marginLeft = pos + "px";
     }
   }
 };
 function greenRow (){
     const greenArrow = document.getElementById("arrow-4");      
     const greenCircle = document.getElementById("circle-4");
    console.log("green row is clicked");
    var pos = 220;
    id = setInterval(frame, 10);
   function frame() {
     if (pos == 0) {
       clearInterval(id);
       greenCircle.style.backgroundColor = "cyan";
     } else {
       pos--;
       greenArrow.style.marginLeft = pos + "px";
     }
   }
 };
 function reset(){
   const yellowArrow = document.getElementById("arrow-1");
   const yellowCircle = document.getElementById("circle-1");
   const blueArrow = document.getElementById("arrow-2");
   const blueCircle = document.getElementById("circle-2");
   const redArrow = document.getElementById("arrow-3");
   const redCircle = document.getElementById("circle-3");
   const greenArrow = document.getElementById("arrow-4");      
   const greenCircle = document.getElementById("circle-4");
  var pos = 0;
  id = setInterval(frame, 10);
 function frame() {
   if (pos == 220) {
     clearInterval(id);
     greenCircle.style.backgroundColor = "green";
     redCircle.style.backgroundColor = "red";
     blueCircle.style.backgroundColor = "blue";
     yellowCircle.style.backgroundColor = "yellow";
   } else {
     pos++;
     greenArrow.style.marginLeft = pos + "px";
     redArrow.style.marginLeft = pos + "px";
     blueArrow.style.marginLeft = pos + "px";
     yellowArrow.style.marginLeft = pos + "px";
   }
 }
   
 }
 
 app.listen(port, () => {
   console.log(`Server Started at port number ${port}`);
 });
 