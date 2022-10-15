const cnvContainer = document.querySelector('#canvas-container3')

let animateConnX;
let animateConnY;

const animation01 = p => {
    p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(120);
    
   }
   

   const lineAnimation = {
    startX : null,
    startY : null,
    guideX : null,
    guideY : null,
   getMousePosition(x,y){         
           this.startX = x;
           this.startY = y;
    }
   }

   const rectAnimation = {
    startX : null,
    startY : null,
    guideX : null,
    guideY : null,
   getMousePosition(x,y){          
           this.startX = x;
           this.startY = y;
    }
  }

window.addEventListener('click', event => {
    lineAnimation.getMousePosition(event.clientX,event.clientY);
    rectAnimation.getMousePosition(event.clientX,event.clientY);

})

let oldY
let oldX
let senseX
let senseY
oldY = p.mouseY
   p.draw = function () {
  
    p.stroke(250)
    cnvContainer.addEventListener('click', ()=>{
           
        lineAnimation.getMousePosition(p.mouseX,p.mouseY)

        console.log('working')
        p.line(lineAnimation.startX,lineAnimation.startY,p.mouseX,p.mouseY)
       
       
    })
    p.clear()
    
    p.stroke(16, 228, 232)
    p.fill(16,228,232,20)
    
    if (isLineAnimating === true && lineToolButton.classList.contains('active')) {
        p.line(lineAnimation.startX,lineAnimation.startY,p.mouseX,p.mouseY)
    }
    if(isRectAnimating === true && classTollButton.classList.contains('active')){
        console.log('test')
        p.rect(rectAnimation.startX,rectAnimation.startY,p.mouseX -rectAnimation.startX ,p.mouseY-rectAnimation.startY)
        p.rect(rectAnimation.startX,rectAnimation.startY, p.mouseX -rectAnimation.startX , (p.mouseY-rectAnimation.startY)/2)
        p.rect(rectAnimation.startX,rectAnimation.startY, p.mouseX -rectAnimation.startX , (p.mouseY-rectAnimation.startY)/4)
    }
    if(classTollButton.classList.contains('active')){
        p.rect(p.mouseX -70, p.mouseY -45,140,90)
    }
     
    if(IsConnectAnimating) {
        if(IsConnectAnimating) {

                p.line(animateConnX,animateConnY, p.mouseX, p.mouseY)
            }
            
    }
    
    // if(isRectAnimating === true && formButton.classList.contains('active')) {

    // }

   }
}
const p5Animation = new p5(animation01,cnvContainer)