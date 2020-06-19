class Boundary
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic: true
			//restitution:0.4, 
			//friction:0
		
			}
		//this.x=x;
		//this.y=y;
		this.w=w; 
		this.h=h;
		
		this.body=Bodies.rectangle(this.x, this.y, (this.r)/2, options)
		this.color=color(random(0,255), random(0,255), random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;

			noStroke(); 
			fill(this.color)
			push();
			
			translate(pos.x, pos.y);
			ellipseMode(RADIUS); 
			rect(0,0,this.w,this.h);
	
			pop(); 
			
	}

}

