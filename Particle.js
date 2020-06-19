class Particle
{
	constructor(x,y,r)
	{
		var options={
	
			restitution:0.4, 
			friction:0
		
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.x +=random(-1,1);
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
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
			ellipse(0,0,this.r,this.r);
	
			pop(); 
			
	}

}

