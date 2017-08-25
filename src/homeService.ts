//angular war stories
export class HomeService {

  // create a service with some dependencies
  static $inject = ["$http", "$location"];
  constructor(private $http:any,private $location:any) {

  }

  public doSomething():void {
    console.log("Home Service was called...");
  }

  public logAMessage(msg:string):void {
    console.log("Home Service the message was: "+msg)
  }
}