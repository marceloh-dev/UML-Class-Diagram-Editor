

function FactoryClass(p) {
    return {
        x: p.mouseX,
        y: p.mouseY,
        p5: p,
        width: 80,
        height: 65,
        domElement: null,
        
        setPosition: function(nX,nY) {
            this.x = nX;
            this.y = nY;
            console.log('seted')
        },
        drawClass: function() {
            const htmlContent = "<h3> Class Name </h3> <div class='atributes'> <span class='atr-simbol'> + </span> Atributes</div> <div class='method'> <span class='meth-simbol'> () </span> Methods</div>"
            this.domElement = p.createDiv()
            console.log(this.domElement)
            // this.domElement.html(htmlContent)
            // this.domElemnt.addClass('uml-class');
            // this.domElemnt.size(this.width,this.height)
            // this.domElement.position(this.x,this.y)
        },
        moveClass: function() {

        }


    }

}