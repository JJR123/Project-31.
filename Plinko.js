class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.4, 
			friction:0
		
			
			} 
		this.x=x;
		this.y=y;
		this.r=r;
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			fill("white")
			
			var pos=this.body.position;
		   
			push();
			
			translate(pos.x, pos.y);
			//ellipseMode(RADIUS); 
			ellipse(0,0,this.r*2);
	
			pop(); 
			
	}

}

