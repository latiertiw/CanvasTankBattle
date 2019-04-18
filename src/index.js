function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}



let projectileImg = new Image();
let exp = new Image();
let ke = new Image();
let exp2 = new Image();  // Создание нового объекта изображения
projectileImg.src = 'src/projectile.png';
exp.src ='src/exp.gif';
exp2.src ='src/exp2.gif';
ke.src = 'src/ke.jpg'

//Map

let map = {
    cellSize:30,
    cellCountX:60,
    cellCountY:30,
    map:[
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 2, 1, 0, 3],
        [3, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 2, 1, 0, 3],
        [3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 2, 1, 0, 3],
        [3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 1, 1, 1, 1, 0, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 2, 1, 0, 3],
        [3, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 1, 0, 3],
        [3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 0, 3],
        [3, 0, 0, 4, 4, 4, 4, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 1, 1, 0, 0, 0, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 3, 3],
        [3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 3, 3],
        [3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 0, 3, 3, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    ],
    camSpeedX:0,
    camSpeedY:0,
    camOffsetX:0,
    camOffsetY:0
}

map.drawBackground = function() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 600, 600);
};

map.fillLowLevelMap = function() {
  for (let i = 0; i < this.cellCountY; i += 1) {
    for (let j = 0; j < this.cellCountX; j += 1) {
      switch (this.map[i][j]) {
        case 0:
          this.drawSoil(j, i);
          break;
        case 1:
          this.drawBrick(j, i);
          break;
        case 2:
          this.drawGrass(j, i);
          break;
        case 3:
          this.drawArmour(j, i);
          break;
        case 4:
          this.drawWater(j, i);
          break;
      }
    }
  }
};
map.fillTopLevelMap = function() {
    for (let i = 0; i < this.cellCountY; i += 1) {
      for (let j = 0; j < this.cellCountX; j += 1) {
        switch (this.map[i][j]) {
          case 2:
            this.drawGrass(j, i);
            break;
        }
      }
    }
};

map.drawBrick = function(x, y) {
  cellSize = this.cellSize;

  x = x * cellSize;
  y = y * cellSize;
  x = x - this.camOffsetX;
  y = y - this.camOffsetY;
  ctx.fillStyle = "orange";

  //ctx.fillRect(x, y, cellSize, cellSize);
  ctx.drawImage(ke,x,y,cellSize,cellSize)
  

  /* ctx.fillStyle = "#CD8500";
  ctx.fillRect(x, y, cellSize, cellSize / 8);
  ctx.fillRect(x, y + cellSize / 2, cellSize, cellSize / 8);
  ctx.fillRect(x + cellSize / 2, y, cellSize / 8, cellSize / 2);
  ctx.fillRect(x + cellSize / 8, y + cellSize / 2, cellSize / 8, cellSize / 2);

  ctx.fillStyle = "#D3D3D3";
  ctx.fillRect(x, y + cellSize / 2 - cellSize / 8, cellSize, cellSize / 8);
  ctx.fillRect(x, y + cellSize - cellSize / 8, cellSize, cellSize / 8);
  ctx.fillRect(x + cellSize / 2 - cellSize / 8, y, cellSize / 8, cellSize / 2);
  ctx.fillRect(x, y + cellSize / 2 - cellSize / 8, cellSize / 8, cellSize / 2); */
};

map.drawSoil = function(x, y) {
  cellSize = this.cellSize;

  x = x * cellSize;
  y = y * cellSize;
  x = x - this.camOffsetX;
  y = y - this.camOffsetY;
  ctx.fillStyle = "rgb(54, 41, 11)";

  ctx.fillRect(x, y, cellSize, cellSize);

  ctx.fillStyle = "rgb(55, 56, 44)";
  ctx.fillRect(x, y, cellSize, cellSize / 8);
  ctx.fillRect(x, y + cellSize / 2, cellSize, cellSize / 8);
  ctx.fillRect(x + cellSize / 2, y, cellSize / 8, cellSize / 2);
  ctx.fillRect(x + cellSize / 8, y + cellSize / 2, cellSize / 8, cellSize / 2);

  ctx.fillStyle = "black";
  ctx.fillRect(x, y + cellSize / 2 - cellSize / 8, cellSize, cellSize / 8);
  ctx.fillRect(x, y + cellSize - cellSize / 8, cellSize, cellSize / 8);
  ctx.fillRect(x + cellSize / 2 - cellSize / 8, y, cellSize / 8, cellSize / 2);
  ctx.fillRect(x, y + cellSize / 2 - cellSize / 8, cellSize / 8, cellSize / 2);
};

map.drawArmour = function(x, y) {
  cellSize = this.cellSize;
  x = x * cellSize;
  y = y * cellSize;
  x = x - this.camOffsetX;
  y = y - this.camOffsetY;
  ctx.fillStyle = "#cccccc";
  ctx.fillRect(x, y, cellSize, cellSize);

  ctx.fillStyle = "#909090";
  ctx.beginPath();
  ctx.moveTo(x, y + cellSize);
  ctx.lineTo(x + cellSize, y + cellSize);
  ctx.lineTo(x + cellSize, y);
  ctx.fill();
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(x + cellSize / 4, y + cellSize / 4, cellSize / 2, cellSize / 2);
};

map.drawGrass = function(x, y) {
  cellSize = this.cellSize;
  x = x * cellSize;
  y = y * cellSize;
  x = x - this.camOffsetX;
  y = y - this.camOffsetY;
  ctx.fillStyle = "rgb(13, 71, 18)";
  ctx.fillRect(x, y, cellSize, cellSize);

  ctx.fillStyle = "rgb(37, 172, 49)";
  ctx.beginPath();
  ctx.moveTo(x, y + cellSize);
  ctx.lineTo(x + cellSize, y + cellSize);
  ctx.lineTo(x + cellSize, y);
  ctx.fill();
  ctx.fillStyle = "green";
  ctx.fillRect(x + cellSize / 4, y + cellSize / 4, cellSize / 2, cellSize / 2);
};

map.drawWater = function(x, y) {
  cellSize = this.cellSize;
  x = x * cellSize;
  y = y * cellSize;
  x = x - this.camOffsetX;
  y = y - this.camOffsetY;

  ctx.fillStyle = "rgb(36, 113, 158)";
  ctx.fillRect(x, y, cellSize, cellSize);

  ctx.fillStyle = "rgb(81, 154, 196)";
  if (this.phase == 1) {
    ctx.fillRect(
      x + cellSize / 4,
      y + cellSize / 6,
      cellSize / 3,
      cellSize / 12
    );
    ctx.fillRect(
      x + cellSize / 1.5,
      y + cellSize / 2.5,
      cellSize / 3,
      cellSize / 12
    );
    ctx.fillRect(
      x + cellSize / 5,
      y + cellSize / 1.3,
      cellSize / 3,
      cellSize / 12
    );
  } else {
    ctx.fillRect(
      x + cellSize / 1.5,
      y + cellSize / 5,
      cellSize / 3,
      cellSize / 12
    );
    ctx.fillRect(
      x + cellSize / 6,
      y + cellSize / 3,
      cellSize / 3,
      cellSize / 12
    );
    ctx.fillRect(
      x + cellSize / 2,
      y + cellSize / 1.3,
      cellSize / 3,
      cellSize / 12
    );
  }
};

map.drawExplode = function(x,y) {
    let time = 0;
       let timer = setInterval(() => {
        dx = x - this.camOffsetX;
        dy = y - this.camOffsetY;
        ctx.drawImage(ke,dx-80,dy-50,160,100)
        time += 1;
        if(time>=100){clearInterval(timer)}
       }, 1000/60);
    
}

map.init = function() {
  setInterval(() => {
    if (map.phase == 1) map.phase = 0;
    else map.phase = 1;
  }, 1000);
};

map.drawTank = function(x, y, direction) {
  ctx.fillStyle = "green";
  x = x - this.camOffsetX;
  y = y - this.camOffsetY;

  switch (direction) {
    case "top": {
      ctx.fillStyle = "rgb(208, 211, 23)";
      ctx.fillRect(x - 15, y - 7, 30, 16);
      ctx.fillRect(x - 15, y - 15, 10, 30);
      ctx.fillRect(x + 5, y - 15, 10, 30);

      ctx.fillStyle = "grey";
      ctx.fillRect(x - 2, y, 4, -25);
      break;
    }
    case "right": {
      ctx.fillStyle = "rgb(208, 211, 23)";
      ctx.fillRect(x - 7, y - 15, 16, 30);
      ctx.fillRect(x - 14, y - 15, 30, 10);
      ctx.fillRect(x - 14, y + 5, 30, 10);

      ctx.fillStyle = "grey";
      ctx.fillRect(x, y - 2, 25, 4);
      break;
    }
    case "left": {
      ctx.fillStyle = "rgb(208, 211, 23)";
      ctx.fillRect(x - 7, y - 15, 16, 30);
      ctx.fillRect(x - 14, y - 15, 30, 10);
      ctx.fillRect(x - 14, y + 5, 30, 10);

      ctx.fillStyle = "grey";
      ctx.fillRect(x - 25, y - 2, 25, 4);
      break;
    }

    case "bottom": {
      ctx.fillStyle = "rgb(208, 211, 23)";
      ctx.fillRect(x - 15, y - 7, 30, 16);
      ctx.fillRect(x - 15, y - 15, 10, 30);
      ctx.fillRect(x + 5, y - 15, 10, 30);

      ctx.fillStyle = "grey";
      ctx.fillRect(x - 2, y + 25, 4, -25);
      break;
    }

    default: {
      ctx.fillRect(x - 15, y - 15, 30, 30);
    }
  }
  ctx.fillStyle = "white";
  ctx.fillRect(x + 15, y + 15, 1, 1);
  ctx.fillRect(x - 15, y + 15, 1, 1);
  ctx.fillRect(x + 15, y - 15, 1, 1);
  ctx.fillRect(x - 15, y - 15, 1, 1);
};

map.drawProjectile = function(x, y, direction) {
    ctx.fillStyle = "grey";
    x = x - this.camOffsetX;
    y = y - this.camOffsetY;
  
    switch (direction) {
      case "top": {
        ctx.drawImage(projectileImg,x-15,y-8,16,30)
        break;
      }
      case "right": {
        //ctx.drawImage(projectileImg,x-15,y-8,30,16)
        ctx.drawImage(ke,x-15,y-8,30,16)
        break;
      }
      case "left": {
        ctx.fillStyle = "grey";
        ctx.drawImage(projectileImg,x-15,y-8,30,16)
       
        break;
      }
  
      case "bottom": {
        ctx.drawImage(projectileImg,x-15,y-8,16,30)
        break;
      }
  
      default: {
        ctx.fillRect(x - 15, y - 15, 30, 30);
      }
    }
    ctx.fillStyle = "white";
    ctx.fillRect(x + 15, y + 15, 1, 1);
    ctx.fillRect(x - 15, y + 15, 1, 1);
    ctx.fillRect(x + 15, y - 15, 1, 1);
    ctx.fillRect(x - 15, y - 15, 1, 1);
};

map.moveCam = function() {
  //this.fillMap();
  if (map.camOffsetX < 0) map.camOffsetX = 1;
  else if (map.camOffsetX > 1200) map.camOffsetX = 1200;
  else map.camOffsetX += map.camSpeedX;

  if (map.camOffsetY < 0) map.camOffsetY = 0;
  else if (map.camOffsetY > 300) map.camOffsetY = 300;
  else map.camOffsetY += map.camSpeedY;
};

map.checkKeysPress = function(key) {
  if (key == "ArrowUp") {
    this.camSpeedY = -4;
  }
  if (key == "ArrowLeft") {
    this.camSpeedX = -4;
  }
  if (key == "ArrowDown") {
    this.camSpeedY = 4;
  }
  if (key == "ArrowRight") {
    this.camSpeedX = 4;
  }
};

map.keysUnPress = function() {
  this.camSpeedY = 0;
  this.camSpeedX = 0;
};



//Player

let player = {
  id: randomInteger(0, 999999),
  x: 80,
  y: 100,
  lastX: 100,
  lastY: 80,
  direction: "top",
  speedX: 0,
  speedY: 0,
  timer: 0
};

player.checkKeysPress = function(key) {
  if (key == "w") {
    this.speedY = -4;
    this.speedX = 0;
    this.direction = "top";
  }
  if (key == "a") {
    this.speedX = -4;
    this.speedY = 0;
    this.direction = "left";
  }
  if (key == "s") {
    this.speedY = 4;
    this.speedX = 0;
    this.direction = "bottom";
  }
  if (key == "d") {
    this.speedX = 4;
    this.speedY = 0;
    this.direction = "right";
  }
  if (key == "f") {
    projectiles.fire(this.x,this.y,this.direction);
  }
};

player.keysUnPress = function() {
  this.speedY = 0;
  this.speedX = 0;
};

player.draw = function(map) {
  this.x += this.speedX;
  this.y += this.speedY;
  map.drawTank(this.x, this.y, this.direction);
};

player.checkCollisions = function(map) {
  if (this.x - map.camOffsetX < 150) map.camOffsetX -= 4;
  if (map.camOffsetX + 600 - this.x < 150) map.camOffsetX += 4;
  if (this.y - map.camOffsetY < 150) map.camOffsetY -= 4;
  if (map.camOffsetY + 600 - this.y < 150) map.camOffsetY += 4;

  let cellX1 = Math.floor((this.x + 15) / 30);
  let cellY1 = Math.floor((this.y + 15) / 30);

  let cellX2 = Math.floor((this.x + 15) / 30);
  let cellY2 = Math.floor((this.y - 15) / 30);

  let cellX3 = Math.floor((this.x - 15) / 30);
  let cellY3 = Math.floor((this.y - 15) / 30);

  let cellX4 = Math.floor((this.x - 15) / 30);
  let cellY4 = Math.floor((this.y + 15) / 30);

  let pos1 = map.map[cellY1][cellX1];
  let pos2 = map.map[cellY2][cellX2];
  let pos3 = map.map[cellY3][cellX3];
  let pos4 = map.map[cellY4][cellX4];
  if (
    pos1 == 1 ||
    pos2 == 1 ||
    pos3 == 1 ||
    pos4 == 1 ||
    pos1 == 3 ||
    pos2 == 3 ||
    pos3 == 3 ||
    pos4 == 3 ||
    pos1 == 4 ||
    pos2 == 4 ||
    pos3 == 4 ||
    pos4 == 4
  ) {
    this.x = this.lastX;
    this.y = this.lastY;
  } else {
    this.lastX = this.x;
    this.lastY = this.y;
  }
};



//Players

let players = {
  players: []
};

players.set = function(mas) {
  this.players = mas;
};

players.draw = function(map) {
  for (let i = 0; i < this.players.length; i += 1) {
    if (this.players[i].id == player.id) {
    } else {
      map.drawTank(
        this.players[i].x,
        this.players[i].y,
        this.players[i].direction
      );
    }
  }
};


//Projectiles

let projectile = {
  id:0,
  x: 80,
  y: 100,
  lastX: 100,
  lastY: 80,
  direction: null,
  speedX: 0,
  speedY: 0,
}

let projectiles = [];

projectiles.fire = function(x,y,direction){
    let obj = Object.assign({},projectile);
   
    obj.x = x;
    obj.y = y;

    if(direction == "right") obj.speedX = 10; 
    if(direction == "left") obj.speedX = -10;
    if(direction == "top") obj.speedY = -10; 
    if(direction == "bottom") obj.speedY = 10; 

    obj.direction = direction;
    projectiles.push(obj);


    //let i = this.length-1;
    console.log(this.length);

    setTimeout(() => {
        this.splice(0,1);
     }, 600);
}

projectiles.draw = function(map){
    for(let i = 0; i < projectiles.length;i+=1){
        map.drawProjectile( this[i].x,this[i].y,this[i].direction);
        this[i].x+=this[i].speedX;
        this[i].y+=this[i].speedY;


        let cellX = Math.floor(this[i].x / 30);
        let cellY = Math.floor(this[i].y / 30);
         if(map.map[cellY][cellX] == 1 || map.map[cellY][cellX] == 3){
            this[i].speedX = 0;
            this[i].speedY = 0;
            
           
            this[i].x=this[i].lastX;
            this[i].y=this[i].lastY;
         map.drawExplode(this[i].x,this[i].y);
         if(map.map[cellY][cellX] == 1){
             setTimeout(()=>{
                map.map[cellY][cellX] =0;
             },100)
           // map.map[cellY][cellX] =0;
         }
        } 
        else{
        this[i].lastX=this[i].x;
        this[i].lastY=this[i].y;
        }
    }
}

////////////////////////////////
////////////////////////////////

{
  document.onkeydown = function(event) {
    map.checkKeysPress(event.key);
    player.checkKeysPress(event.key);
  };
  document.onkeyup = function(event) {
    map.keysUnPress();
    player.keysUnPress();
  };
}

var example = document.getElementById("example"),
  ctx = example.getContext("2d");
example.width = 600;
example.height = 600;

//var socket = new WebSocket("ws://localhost:8080");
//https://vast-taiga-25187.herokuapp.com
var socket = new WebSocket("ws://shielded-falls-64327.herokuapp.com");

socket.onmessage = function(event) {
  //console.log(event.data);
  let packet = JSON.parse(event.data);
  players.set(packet);
};

/* socket.onopen = function(event){
  console.log('connected')
} */

map.fillLowLevelMap();
map.init();



//Game
setTimeout(()=>{
  let game = setInterval(() => {
    map.drawBackground();
  
    map.fillLowLevelMap();
  
    player.draw(map);
    player.checkCollisions(map);
    players.draw(map);
  
    projectiles.draw(map);
  
    //map.fillTopLevelMap();
    map.moveCam();
    socket.send(JSON.stringify(player));
  }, 1000 / 60);


},300)

