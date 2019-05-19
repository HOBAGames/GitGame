class PlayerIvan(){
    constructor(){
        this.y=150;
        this.x=150;
        this.speed=10;
    }
    
    
    update(){
        if(isKeyPressed[87]){
            this.y-=this.speed;
        }
        
        if(isKeyPressed[83]){
            this.y+=this.speed;
        }
        
        if(isKeyPressed[65]){
            this.x-=this.speed;
        }
        
        if(isKeyPressed[68]){
            this.x+=this.speed;
        }
    }
    
    draw(){
        context.fillRect(this.x,this.y,110,110);
    }
  
}


b = new PlayerIvan();

function update(){
    a.update();
}

function draw(){
    a.draw();
}
