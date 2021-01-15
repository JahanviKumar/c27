class SlingShot{

constructor(bodyA,pointB){

 
    var options=
    {
      bodyA:bodyA,
      pointB:pointB,
      stiffness:0.002,
      length:10
    }
    this.pointb=pointB
    this.sling=Constraint.create(options);
    World.add(world,this.sling);


}
fly()
{
  this.sling.bodyA=null;
}
display()
{
  if(this.sling.bodyA)
  {
   var pointA=this.sling.bodyA.position;
    var pointB=this.pointb;

    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
  }



}





}