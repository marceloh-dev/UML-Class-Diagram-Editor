

const tools = document.querySelectorAll(".tool")

const classTollButton = document.querySelector('#class-tool');
const selectToolButton = document.querySelector('#select-tool');
const pencilToolButton = document.querySelector('#pencil-tool');
const lineToolButton = document.querySelector('#line-tool');
const eraseToolButton = document.querySelector('#pencil-tool');

const cnvContainer1 = document.querySelector('#canvas-container1')
const cnvContainer2 = document.querySelector('#canvas-container2')
const cnvContainer3 = document.querySelector('#canvas-container3')


// const stn = document.createElement('div')
// stn.classList.add('stn')
// console.log(stn)
// cnvContainer2.appendChild(stn)



let isLineAnimating = false
let isRectAnimating = false
let isCreatingUmlClass = false
let IsConnectAnimating = false


const classes = [];
const connections = [];
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
     p.frameRate(24);  
     
    
   

}  

// const classTool = {

//  startX : null,
//  startY : null,
//  endX : null,
//  endY : null,
//  width : 200,
//  height: 190,
//  countClick : 0,
//  domElemnt : null,

//  setFirstPosition(x,y) {
//     this.startX = x;
//     this.startY = y;
//  },
//  setLastPosition(x , y) {
//     this.endX = x;
//     this.endY = y;
//  },
//  draw() {
//      const newUmlClass = {
//          domReference: null,
//          connectClass: function(element) {
//          },
//          move : function() {

//          }

//      }
//      let htmlContent = "<h3> Class Name </h3> <div class='atributes'> <span class='atr-simbol'> + </span> Atributes</div> <div class='method'> <span class='meth-simbol'> () </span> Methods</div>"
//      this.domElemnt = p.createDiv();
//      this.domElemnt.html(htmlContent);
//      this.domElemnt.addClass('uml-class');
     
//      this.domElemnt.size(this.endX - this.startX,  this.endY - this.startY)
//      if(this.endX - this.startX < this.width) {
//         this.domElemnt.size(this.endX - this.startX,  this.height)
//      }
//      if(this.endY - this.startY < this.height) {
//         this.domElemnt.size(this.width,  this.endY - this.startY)
//      }
//      this.domElemnt.position(this.startX,this.startY)
      
     
//  //    p.rect(this.startX,this.startY, this.endX - this.startX,  this.endY - this.startY)
    
  

//  //    p.rect(this.startX,this.startY, this.endX - this.startX, (this.endY - this.startY)/2)
//  //    p.rect(this.startX,this.startY, this.endX - this.startX, (this.endY - this.startY)/4)
   
//  },

//  resetCordenates() {
//     this.startX = null;
//     this.startY = null;
//     this.endX = null;
//     this.endY = null;
//  },
//  drawRect() {
//     if(this.countClick === 0){         
//         this.setFirstPosition(p.mouseX,p.mouseY);            
//         this.countClick = 1;
//         isRectAnimating = true;
//     } else {    
//      isRectAnimating = false;
//         this.setLastPosition(p.mouseX,p.mouseY);
//         this.draw();
//         classes.push(this.domElemnt)
//         this.resetCordenates();
//         this.countClick = 0;
//     } 
//  }

// }
    

    
//    const lineTool = {
//      startX : null,
//      startY : null,
//      endX : null,
//      endY : null,
//      countClick : 0,
//      firstClick : true,
    
//     getSequentialPosition(x,y){
//         if(this.firstClick) {
//             this.startX = x;
//             this.startY = y;
//             this.firstClick = false;
//             isLineAnimating = true
//         } else {
//             this.endX = x;
//             this.endY = y;

//             lines.push( { x1: lineTool.startX, 
//                 y1: lineTool.startY,
//                 x2: lineTool.endX,
//                 y2: lineTool.endY })
//             this.firstClick = true;
//         }
//      },
//      setFirstPosition(x,y) {
//         this.startX = x;
//         this.startY = y;
//      },
//      setLastPosition(x , y) {
//         this.endX = x;
//         this.endY = y;
//      },
//      draw() {
//         p.line(this.startX,this.startY,this.endX,this.endY)
//      },
//      resetCordenates() {
//         this.startX = null;
//         this.startY = null;
//         this.endX = null;
//         this.endY = null;
//      },
//      drawSingleLines() {
//         if(this.countClick === 0){         
//             this.setFirstPosition(p.mouseX,p.mouseY);            
//             this.countClick = 1;
//             isLineAnimating = true;
//         } else {    
//             isLineAnimating = false;
//             this.setLastPosition(p.mouseX,p.mouseY);
//             this.draw();
//             this.resetCordenates();
//             this.countClick = 0;
//         } 
//      },
//      drawContinuosLins() {
//         this.getSequentialPosition(p.mouseX,p.mouseY)
       
//         if(this.endX != null && this.endY != null) {
//             this.draw()
       
//         }      
//      },
//    } // linTool ends

let getDomTest = null;

    
    function FactoryClass(p) {
        const p5 = p
        return {
            x: p.mouseX,
            y: p.mouseY,
            
            width: 140,
            height: 90,
            domElement: null,
            childReference: null,
            arrowLeft: null,
            arrowUp: null,
            arrowRight: null,
            arrowDown: null,
         
            setPosition: function(nX,nY) {
                this.x = nX;
                this.y = nY;
            },
            drawUmlClass: function() {
                
                 const classHtmlContent = "<h3> Class Name </h3> <div class='atributes'> <span class='atr-simbol'> + </span> Atributes</div> <div class='method'> <span class='meth-simbol'> () </span> Methods</div>"
           
                 if(detectMouse  !== null)  {
                
                    this.domElement = p5.createDiv()
                   
                    this.arrowLeft = p5.createDiv()
                    this.arrowUp = p5.createDiv()
                    this.arrowRight = p5.createDiv()
                    this.arrowDown = p5.createDiv()

            
                     this.domElement.mouseOver(setClassForConn)
                    
                    this.arrowLeft.addClass('arrow-left')
                    this.arrowUp.addClass('arrow-up')
                    this.arrowRight.addClass('arrow-right')
                    this.arrowDown.addClass('arrow-down')
                    
                    this.arrowUp.html(`<svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="triangle" d="M6.49 0.12L0 8.49L13.13 8.26L6.4 0.12Z" fill="#8DE0AE"/> </svg>`);
                    this.arrowLeft.html(`<svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="triangle" d="M0.0546265 6.56436L8.35896 12.9899L8.24971 1.19966e-05L0.0546265 6.56436Z" fill="#8DE0AE"/> </svg>`);
                    this.arrowRight.html(`<svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="triangle" d="M9.06266 6.59223L0.75832 13.0178L0.867573 0.0278877L9.06266 6.59223Z" fill="#8DE0AE"/> </svg>`);
                    this.arrowDown.html(`<svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="triangle" d="M6.49889 9.12783L0.147077 0.766939L13.1355 0.991178L6.49889 9.12783Z" fill="#8DE0AE"/> </svg>`);
                    
                    this.arrowUp.mousePressed(testDragg)
                    this.arrowLeft.mousePressed(testDragg)
                    this.arrowRight.mousePressed(testDragg)
                    this.arrowDown.mousePressed(testDragg)

                    this.arrowUp.addClass('arrow')
                    this.arrowLeft.addClass('arrow')
                    this.arrowRight.addClass('arrow')
                    this.arrowDown.addClass('arrow')

                  

                    this.domElement.html(classHtmlContent)
                    this.domElement.size(this.width,this.height)       
                    this.domElement.addClass('uml-class');
                    this.domElement.position(p.mouseX -this.width/2, p.mouseY -this.height/2)

                    
                    this.domElement.child(this.arrowLeft)    
                    this.domElement.child(this.arrowUp)    
                    this.domElement.child(this.arrowRight)    
                    this.domElement.child(this.arrowDown)    
                }
            }
        }

    }
    
//   function FactoryConnection() {

//    return {
//        

//          firstElement: null,
//          secondElement: null,
//          conectType: { 
//             inheritance: null
//          }, 
//          startPoint: {
//             x:null,
//             y:null
//          },
//          endPoint: {
//             x:null,
//             y:null
//          },
//          setFirstElement : function(e){
//                 this.firstElement = e;
//                 console.log(this.firstElement.x,this.firstElement.y)
//          },
//          setSecondElement : function(e) {
//             this.secondElement = e;
//             console.log(this.secondElement.x,this.secondElement.y)
//          }, 
         
//          animate: function() {
           
            
//          },
//         connectElement: function() {
//             if(this.firstClick===true) {

//             }
//         }   
//    }
// }
const classBufer = {
    classSeted: null,
    
    setClass: function(c) {
        this.classSeted = c
    }
}
const connectClasses =  {
  
    firstClick: true,

    firstElement: null,
    secondElement: null,
    conectType: { 
       inheritance: null
    }, 
   
    setFirstElement : function(e){
           this.firstElement = e;
           console.log('seting first element', e.x,e.y)
    },
    setSecondElement : function(e) {
       this.secondElement = e;
       console.log('seting second element', e.x ,e.y) 
    }, 
    resetElements : function() {
        this.firstElement = null;
        this.secondElement = null;
        this.firstClick = true;
        console.log( 'reseting connectClasses')
    }
   
}
    function FactoryConnection(a,b) {

        return {
        relationship: null,
        classA: a,
        classB: b,
        midlePoint: {
            x: null,
            y: null,
            size: 20,
            color: 'blue',
            renderPoint: function() {
                p.stroke( this.color)
                p.strokeWeight( this.size)
                p.point(this.x,this.y)
            }
        },
       
        lineLenght: function(){
            let linLenght = p.dist(this.classA.x, this.classA.y, this.classB.x, this.classB.y)
            return linLenght;
        }
        
        ,

        setClasses: function(a,b) {
            this.classA = a;
            this.classB = b;
            console.log('elements recivied')
        },
        renderConnection: function() {
            p.stroke(246, 228, 0)
            p.line(this.classA.x + this.classA.width /2, this.classA.y, this.classB.x + this.classB.width/2, this.classB.y)
        
     
        
        }

    }
    }

    function testStroke( ) {
        console.log('a')
    }
    let ix = 0
    let iy = 0
    // This function detects colision on rect forms like squares or retangles
    function detectMouseOnRect (rect) {
        if(rect.x < p.mouseX && rect.width + rect.x >p.mouseX && rect.y < p.mouseY && rect.width + rect.y> p.mouseY ) {
            return true
        
        }
    
    }
 
    let moving = false;

    let detectMouse = true;
    let indexOfElement = null;
    let currentClassOnConnect = null;
    
    p.draw = function () {

       p.clear()
        if(moving && classes.length != 0) {   
            classes[indexOfElement].domElement.position( p.mouseX - classes[indexOfElement].width/2 , p.mouseY - classes[indexOfElement].height/2);
            classes[indexOfElement].arrowLeft.addClass('hide');
            classes[indexOfElement].arrowUp.addClass('hide');
            classes[indexOfElement].arrowRight.addClass('hide');
            classes[indexOfElement].arrowDown.addClass('hide');
        } else {
            classes.forEach(element => element.arrowLeft.removeClass('hide') )
            classes.forEach(element => element.arrowUp.removeClass('hide') )
            classes.forEach(element => element.arrowRight.removeClass('hide') )
            classes.forEach(element => element.arrowDown.removeClass('hide') )
        }
         
        if(connections.length != null) {
                for(conn of connections) {
                    conn.renderConnection()
            }
        }
         
       
      

     
       
     
    } // p.draw function ends
    
    function testDragg() {
        connectClasses.setFirstElement(classBufer.classSeted)
        connectClasses.firstClick = false
        
        animateConnection(connectClasses.firstElement.x,connectClasses.firstElement.y)
        moving = false;
        classTollButton.classList.remove('active')
   
      
       
    }

   
    function animateConnection(x,y) {
        animateConnX = x;
        animateConnY = y;
        IsConnectAnimating = true;
    }

    function setClassForConn() {
        classBufer.setClass(this)
        console.log('class seted for connection', 'X',classBufer.classSeted.x,'Y',classBufer.classSeted.y);
    }




    let isCnvCliked  = false;
    let conectElementAnimating = false;

    cnvContainer2.addEventListener('click',()=> isCnvCliked = true);




    p.mouseClicked = function() {

        if(lineToolButton.classList.contains('active') && isCnvCliked) {
            lineTool.drawSingleLines()
            isCnvCliked = false
        }
        
        if(classTollButton.classList.contains('active') && isCnvCliked ) {    
            classes.push( FactoryClass(p)); 
            if(classes.length> 0 ) {
                let element = classes[classes.length-1]
                if(moving === false ) {
                    element.drawUmlClass()
                }  
            }
            isCnvCliked = false 
        }     

      
    } // p.mouseCliked ends

    
    p.mousePressed  = function() {
        
        if(classes[0] != null ) {   
            for(umlClass of classes) {     
                if(detectMouseOnRect(umlClass.domElement)) {
                    moving = true;
                    if(moving) {
                        classTollButton.classList.remove('active')    
                    }
                    indexOfElement = classes.indexOf(umlClass);
                }
            }
        }
    }
 
    p.mouseReleased = function() {
        moving = false;   
        IsConnectAnimating = false
        
        if(classes[0] != null ) {   

   

            for(umlClass of classes) {     
                if(detectMouseOnRect(umlClass.domElement) && connectClasses.firstClick === false ){
                   console.log('mouse released on class', umlClass.domElement.x)
                    console.log(connectClasses.firstClick)
                    connectClasses.setSecondElement(classBufer.classSeted)
                    connections.push(FactoryConnection(connectClasses.firstElement,connectClasses.secondElement))
                    console.log('A conection was done!')
                    console.log(connections[connections.length-1])
                    connectClasses.resetElements()
                }
            }
        }
        if(connections.length != null ) {
            for( conn of  connections) {
                console.log('lenght',parseInt( conn.lineLenght()) )
            }
        }

    }
    
} // scketch01 ends 
const p5Layer1 = new p5(scketch02,cnvContainer2);




// if(IsConnectAnimating) {

    //      p.line(animateConnX,animateConnY, p.mouseX, p.mouseY)
    // }
    