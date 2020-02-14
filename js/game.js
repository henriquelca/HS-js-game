window.onload = function() {
    var ship = new Rectangle(getWidth() * 0.1, getHeight() * 0.2);
    var rectl ;
    var rectr ;
    var circle ;
    var circle2 ;
    var circle3 ;
    var circle4 ;
    var btest = true;
    var btest2 = true;
    var btest3 = true;
    var btest4 = true;
    var boxX = 0;
    var boxY = 0;
    var eleml ;
    var elemr ;
    var acc = 20;
    var speed = 5;
    var score = 5;
    var txt = new Text("Hello, world!", "17pt Arial");
    var txts = new Text("Hello, world!", "17pt Arial");

    function colision(){
        if (eleml != rectl && elemr != rectr){
            if(elemr == null){
            println(ship.getX() + " " + ship.getY() + " "+ circle.getX() + " " + circle.getY() +" "+ eleml.getX()+" " + 0);
        }
        if (eleml == null){
            println(ship.getX() + " " + ship.getY() + " "+ circle.getX() + " " + circle.getY() +" "+ 0 +" " + elemr.getX());
        }
            stopTimer(moveB);
            println(score - 5);
        }
    }

    function start(){

      shipp();
      balls();
      sideBox();
      mouseMoveMethod(moveS);
      keyDownMethod(keyDown);
      keyUpMethod(keyUp);
      setTimer(moveB, 50);
      setTimer(moveship,20);
    }

    function balls(){
            circle = new Circle(getWidth() * 0.125 / 2);
            circle.setPosition(getWidth() * 0.315, 0);
            circle.setColor(Color.red);
            
            circle2 = new Circle(getWidth() * 0.125 / 2);
            circle2.setPosition(getWidth() * 0.315 + getWidth() * 0.125 * 1 , 0);
            circle2.setColor(Color.red);
            
            circle3 = new Circle(getWidth() * 0.125 / 2);
            circle3.setPosition(getWidth() * 0.315 + getWidth() * 0.125 * 2 , 0);
            circle3.setColor(Color.red);
            
            circle4 = new Circle(getWidth() * 0.125 / 2);
            circle4.setPosition(getWidth() * 0.315 + getWidth() * 0.125 * 3 , 0);
            circle4.setColor(Color.red);
            
            add(circle);
            add(circle2);
            add(circle3);
            add(circle4);
        
         var roll = Randomizer.nextInt(1,4);
           if (roll == 1){
                remove(circle);
                btest = false;
            }else if (roll == 2){
                remove(circle2);
                btest2 = false;
            }else if (roll == 3){
                remove(circle3);
                btest3 = false;
            }else if (roll == 4){
                remove(circle4);
                btest4 = false;
            }
    }

    function moveB(){
        eleml = getElementAt(ship.getX() + 1 ,ship.getY() - 3 );
        elemr = getElementAt(ship.getX() + getWidth() * 0.1 - 1 ,ship.getY() - 3 );
        if (eleml != null || elemr != null){
        colision();
        }
        txt.setText("score = " + (score - 5));
        txt.setPosition(0, getHeight()*0.1);
        txt.setColor(Color.GREEN);
        add(txt);
        
        txts.setText("speed = " + (speed - 5));
        txts.setPosition(0, getHeight()*0.15);
        txts.setColor(Color.GREEN);
        add(txts);
        
        //println(ship.getX() + " " + ship.getY() + " "+ circle.getX() + " " + circle.getY());
        //print(ship.getY() + " ");
        //print(circle.getX() + " ");
        //print(circle.getY() + " ");
        circle.move( 0,speed );
        circle2.move( 0,speed );
        circle3.move( 0,speed );
        circle4.move( 0,speed );
        println(speed);
        if (circle.getY() > getHeight() + circle.getRadius()){
            
            circle.setPosition (getWidth() * 0.315, 0);
            circle2.setPosition (getWidth() * 0.315 + getWidth() * 0.125 * 1 , 0);
            circle3.setPosition (getWidth() * 0.315 + getWidth() * 0.125 * 2 , 0);
            circle4.setPosition (getWidth() * 0.315 + getWidth() * 0.125 * 3 , 0);
            speed +=0.5 ;
            score ++;
            if(btest == false){
                add(circle);
                btest = true;
            }
            else if(btest2 == false){
                add(circle2);
                btest2 = true;
            }
            else if (btest3 == false){
                add(circle3);
                btest3 = true;
            }
            else if(btest4 ==false){
                add(circle4);
                btest4 = true;
            }
            // faz uma funcao 
            var roll = Randomizer.nextInt(1,4);
           if (roll == 1){
                remove(circle);
                btest = false;
            }
           else if (roll == 2){
                remove(circle2);
                btest2 = false;
            }
            else if (roll == 3){
                remove(circle3);
                btest3 = false;
            }
            else if (roll == 4){
                remove(circle4);
                btest4 = false;
            }
        }
    }

    function moveS(e){
        ship.setPosition(e.getX() - (getHeight() * 0.1)/2, (getHeight() - getHeight() * 0.2) - getHeight() * 0.01 );
        if( e.getX() < getWidth() - getWidth() + getWidth()/4 + (getHeight() * 0.1)/2 ){
            ship.setPosition( getWidth() - getWidth() + getWidth()/4, (getHeight() - getHeight() * 0.2) - getHeight() * 0.01 );
        }
        else if( e.getX() > getWidth() * 0.75 - (getHeight() * 0.1)/2){
            ship.setPosition( getWidth() * 0.75 - getWidth() * 0.1, (getHeight() - getHeight() * 0.2) - getHeight() * 0.01 );
        }
        
        add(ship);

    }

    function shipp(){
            ship.setPosition(getWidth()/2 - (getWidth() * 0.1)/2, (getHeight() - getHeight() * 0.2) - getHeight() * 0.01 );
            ship.setColor(Color.GREEN);
            add(ship);
    }

    function keyDown(e){
    	if(e.keyCode == Keyboard.LEFT){
    		boxX = -1 * speed;
    		boxY = 0;
    	}
    	
    	if(e.keyCode == Keyboard.RIGHT){
    		boxX = speed;
    		boxY = 0;
    	}
    	if(e.keyCode == Keyboard.UP){
    		boxX = 0;
    		boxY = -1 * speed;
    	}
    	if(e.keyCode == Keyboard.DOWN){
    		boxX = 0;
            boxY = speed;
    	}
    }

    function keyUp(e) {
    	boxX = 0;
    	boxY = 0;
    }

    function moveship(){
        
        ship.move(boxX, boxY);
        if( ship.getX() + getWidth() * 0.1 < getWidth() - getWidth() + getWidth()/4 + (getHeight() * 0.1)/2 ){
            ship.setPosition( getWidth() - getWidth() + getWidth()/4, (getHeight() - getHeight() * 0.2) - getHeight() * 0.01 );
        }
        if( ship.getX() > getWidth() * 0.75 - (getHeight() * 0.1)/2){
            ship.setPosition( getWidth() * 0.75 - getWidth() * 0.1, (getHeight() - getHeight() * 0.2) - getHeight() * 0.01 );
        }
    }

    function sideBox(){
            rectl = new Rectangle(getWidth()/4, getHeight());
            rectl.setPosition(getWidth() - getWidth(),0);
            rectl.setColor(Color.blue);
            
            rectr = new Rectangle(getWidth()/4, getHeight());
            rectr.setPosition(getWidth() * 0.75, 0);
            rectr.setColor(Color.blue);
            
                add(rectl);
                add(rectr);
    }
        if (typeof start === 'function') {
        start();
    }
};