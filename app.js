

const tools = document.querySelectorAll(".tool")

const classTollButton = document.querySelector('#class-tool');
const selectToolButton = document.querySelector('#select-tool');
const pencilToolButton = document.querySelector('#pencil-tool');
const lineToolButton = document.querySelector('#line-tool');
const eraseToolButton = document.querySelector('#pencil-tool');

const cnvContainer1 = document.querySelector('#canvas-container1')
const cnvContainer2 = document.querySelector('#canvas-container2')
const cnvContainer3 = document.querySelector('#canvas-container3')

let isLineAnimating = false
let isRectAnimating = false

const classes = [];
const lines = [];

const toggleButton =  button => {
    button.classList.toggle('active')
    
}
 
tools.forEach(tool => tool.addEventListener('click', ()=>{
    tools.forEach(tool => tool.classList.remove('active'));
    tool.classList.toggle('active');
}) );


// Make a function to get the the coordenates between two clicks




const scketch02 = p => {

     p.setup = function () {
     p.createCanvas(p.windowWidth, p.windowHeight);
     p.frameRate(48);
      
}  
const classTool = {
 startX : null,
 startY : null,
 endX : null,
 endY : null,
 width : 200,
 height: 190,
 countClick : 0,
 domElemnt : null,

 setFirstPosition(x,y) {
    this.startX = x;
    this.startY = y;
 },
 setLastPosition(x , y) {
    this.endX = x;
    this.endY = y;
 },
 draw() {
     const newUmlClass = {
         domReference: null,
         connectClass: function(element) {
         },
         move : function() {

         }

     }
     let htmlContent = "<h3> Class Name </h3> <div class='atributes'> <span class='atr-simbol'> + </span> Atributes</div> <div class='method'> <span class='meth-simbol'> () </span> Methods</div>"
     this.domElemnt = p.createDiv();
     this.domElemnt.html(htmlContent);
     this.domElemnt.addClass('uml-class');
     
     this.domElemnt.size(this.endX - this.startX,  this.endY - this.startY)
     if(this.endX - this.startX < this.width) {
        this.domElemnt.size(this.endX - this.startX,  this.height)
     }
     if(this.endY - this.startY < this.height) {
        this.domElemnt.size(this.width,  this.endY - this.startY)
     }
     this.domElemnt.position(this.startX,this.startY)
      
     
 //    p.rect(this.startX,this.startY, this.endX - this.startX,  this.endY - this.startY)
    
  

 //    p.rect(this.startX,this.startY, this.endX - this.startX, (this.endY - this.startY)/2)
 //    p.rect(this.startX,this.startY, this.endX - this.startX, (this.endY - this.startY)/4)
   
 },

 resetCordenates() {
    this.startX = null;
    this.startY = null;
    this.endX = null;
    this.endY = null;
 },
 drawRect() {
    if(this.countClick === 0){         
        this.setFirstPosition(p.mouseX,p.mouseY);            
        this.countClick = 1;
        isRectAnimating = true;
    } else {    
     isRectAnimating = false;
        this.setLastPosition(p.mouseX,p.mouseY);
        this.draw();
        classes.push(this.domElemnt)
        this.resetCordenates();
        this.countClick = 0;
    } 
 }

}
   
   const lineTool = {
     startX : null,
     startY : null,
     endX : null,
     endY : null,
     countClick : 0,
     firstClick : true,
    
    getSequentialPosition(x,y){
        if(this.firstClick) {
            this.startX = x;
            this.startY = y;
            this.firstClick = false;
            isLineAnimating = true
        } else {
            this.endX = x;
            this.endY = y;

            lines.push( { x1: lineTool.startX, 
                y1: lineTool.startY,
                x2: lineTool.endX,
                y2: lineTool.endY })
            this.firstClick = true;
        }
     },
     setFirstPosition(x,y) {
        this.startX = x;
        this.startY = y;
     },
     setLastPosition(x , y) {
        this.endX = x;
        this.endY = y;
     },
     draw() {
        p.line(this.startX,this.startY,this.endX,this.endY)
     },
     resetCordenates() {
        this.startX = null;
        this.startY = null;
        this.endX = null;
        this.endY = null;
     },
     drawSingleLines() {
        if(this.countClick === 0){         
            this.setFirstPosition(p.mouseX,p.mouseY);            
            this.countClick = 1;
            isLineAnimating = true;
        } else {    
            isLineAnimating = false;
            this.setLastPosition(p.mouseX,p.mouseY);
            this.draw();
            this.resetCordenates();
            this.countClick = 0;
        } 
     },
     drawContinuosLins() {
        this.getSequentialPosition(p.mouseX,p.mouseY)
       
        if(this.endX != null && this.endY != null) {
            this.draw()
       
        }      
     },
   }


  

  

let ix = 0
let iy = 0
function detectMouseOnRect (rect) {
    if(rect.x < p.mouseX && rect.width + rect.x >p.mouseX && rect.y < p.mouseY && rect.width + rect.y> p.mouseY ) {
        return true
    }
  
}

let moving = false
let indexOfElement = null;


p.draw = function () {


    if(moving && classes.length != 0) {
       classes[indexOfElement].position(  p.mouseX - classes[indexOfElement].width/2 , 
                                          p.mouseY - classes[indexOfElement].height/2                                  
                                        ) 
       }
          

} // p.draw function ends

let isCnvCliked  = false;

cnvContainer2.addEventListener('click',()=> isCnvCliked = true);

p.mouseClicked = function() {
    if(lineToolButton.classList.contains('active') && isCnvCliked) {
        lineTool.drawSingleLines()
        isCnvCliked = false
       
    }
    if(classTollButton.classList.contains('active') && isCnvCliked) {
        classTool.drawRect()
       
        isCnvCliked = false 
    }  
    
    if(classes[0] != null ) {   
        for(element of classes) {     
            if(detectMouseOnRect(element)) {
                moving = false;
                console.log('cliked')
                
            }
        }
     }  
    
} // p.mouseCliked ends

p.mousePressed  = function() {
   
    if(classes[0] != null ) {   
        for(element of classes) {     
            if(detectMouseOnRect(element)) {
                moving = true;
                indexOfElement = classes.indexOf(element);
            }
        }
     }
}
p.mouseReleased = function() {
 
    moving = false;   
}
}
const p5Layer1 = new p5(scketch02,cnvContainer2);









