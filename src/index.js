            function randomInteger(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1)
                rand = Math.round(rand);
                return rand;
            }
           
           
           var example = document.getElementById("example"),
			ctx = example.getContext('2d');
            example.width  = 600;
            example.height = 450;
            


            // Игрок
            let player = {
                x: 340,
                y: 290,
                viewDirection:'top',
                speedX:0,
                speedY:0,
                cellX:0,
                cellY:0,
            }

            function camMove(direction){

                if(direction=='right'){
                fieldOfView.x2+=1;
                fieldOfView.x1+=1;
        
                for(let i = 1; i <= 30; i += 1 ){
                    setTimeout(()=>{dx+=1},i*1)
                    if(i==29){
                        for(let j = 1; j <= 30; j += 1 ){
                            setTimeout(()=>{dx-=1},j*5)
                        }
                        for(let i = 1; i <= 30; i += 1 ){
                            setTimeout(()=>{player.x-=1},i*5)
                        }
                    }
                }
                }
                if(direction=='left'){
                    fieldOfView.x2-=1;
                    fieldOfView.x1-=1;
            
                   
                    for(let i = 1; i <= 30; i += 1 ){
                        setTimeout(()=>{dx-=1},i*1)
                        if(i==29){
                            for(let j = 1; j <= 30; j += 1 ){
                                setTimeout(()=>{dx+=1},j*5)
                            }
                            for(let i = 1; i <= 30; i += 1 ){
                                setTimeout(()=>{player.x+=1},i*5)
                            }
                        }
                    }
                }
                if(direction=='top'){
                    fieldOfView.y2-=1;
                    fieldOfView.y1-=1;
            
                   
                    for(let i = 1; i <= 30; i += 1 ){
                        setTimeout(()=>{dy-=1},i*1)
                        if(i==29){
                            for(let j = 1; j <= 30; j += 1 ){
                                setTimeout(()=>{dy+=1},j*5)
                            }
                            for(let i = 1; i <= 30; i += 1 ){
                                setTimeout(()=>{player.y+=1},i*5)
                            }
                        }
                    }
                }
                if(direction=='bottom'){
                    fieldOfView.y2+=1;
                    fieldOfView.y1+=1;
            
                   
                    for(let i = 1; i <= 30; i += 1 ){
                        setTimeout(()=>{dy+=1},i*1)
                        if(i==29){
                            for(let j = 1; j <= 30; j += 1 ){
                                setTimeout(()=>{dy-=1},j*5)
                            }
                            for(let i = 1; i <= 30; i += 1 ){
                                setTimeout(()=>{player.y-=1},i*5)
                            }
                        }
                    }
                }
                   
                
            }

            



           
            // Нажатия
            document.onkeydown = function(event){
                if(event.key=='w') {player.speedY = -4; player.speedX = 0;  player.viewDirection = 'top';}
                if(event.key=='a') {player.speedX = -4; player.speedY = 0; player.viewDirection = 'left'}
                if(event.key=='s') {player.speedY = 4; player.speedX = 0; player.viewDirection = "bottom"}
                if(event.key=='d') {player.speedX = 4;  player.speedY = 0;player.viewDirection = 'right'}
                }
            
            document.onkeyup = function(event){
                player.speedY = 0;
                player.speedX = 0;
            }

            
           



            // РЕНДЕР
            setInterval(()=>{
                // create display map
                readToView();
                
                // fill Background
                drawBackground();

                // fill Map
                drawMap();
               

            


                if(player.cellX >= 17 && fieldOfView.x2<=59) {
                    camMove('right');
                  
                };

                if(player.cellX <= 4 && fieldOfView.x1>=1) {
                   camMove('left');
                  
                };

                if(player.cellY <= 4 && fieldOfView.y1>=1) {
                    camMove('top');
                  
                };

                if(player.cellY >= 11 && fieldOfView.y2<=29) {
                    camMove('bottom')
                  
                };


               

               

                
                // Draw a player
                ctx.fillStyle = "green";
                ctx.fillRect(player.x,player.y,30,30);

                ctx.fillStyle = "rgb(78, 78, 78)";
                if(player.viewDirection == 'top') ctx.fillRect(player.x+13,player.y-15,4,30);
                if(player.viewDirection == 'bottom') ctx.fillRect(player.x+13,player.y+15,4,30);
                if(player.viewDirection == 'right') ctx.fillRect(player.x+15,player.y+15,30,4);
                if(player.viewDirection == 'left') ctx.fillRect(player.x-15,player.y+15,30,4);
                   
                


                player.cellX = Math.round((player.x)/30);
                player.cellY = Math.round((player.y)/30);

                
                //Столкновения
                 if(view[player.cellY][player.cellX]==1 ) {
                    
                    if(player.viewDirection=='top') player.y+=20;
                    if(player.viewDirection=='bottom') player.y-=20;
                    if(player.viewDirection=='left') player.x+=20;
                    if(player.viewDirection=='right') player.x-=20;
                    
                }; 

                player.x+=player.speedX;
                player.y+=player.speedY;

                
               
                

            },1000/60)
			
			