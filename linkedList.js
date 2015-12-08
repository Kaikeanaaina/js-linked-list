// /**
//  * @name  linkedListGenerator
//  * @description  Main Module
//  * @return {Object} an object exposing methods to be used to manipulate a linked list
//  */
function linkedListGenerator(){

  var head = null;
  var tail = null;
  var test = 0;
  var module = {};


  module.getHead = function(){
    return head;
  };

  module.getTail = function(){
    return tail;
  };

  module.add = function(parameter){
    var newNodeObject={
      value:parameter,
      next:null,
    };
      test = 'testing';

    if(head===null&&tail===null){
      head=newNodeObject;
      tail=newNodeObject;
      return newNodeObject;
    }
    else{
      tail.next=newNodeObject;
      tail=newNodeObject;
      return newNodeObject;
    }
  };

  module.get = function(number){
    var i=0;
    if(number===0){
     return head;
    }
    var currentNode = head;

    while(i<number){

      if(currentNode.next === null && i+1<=number){
        return false;
      }
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;




  };

  module.remove = function(number){

    if(module.get(number)===getHead()){
      head=module.get(number+1);
    }
    else if (module.get(number)===getTail()){
      tail = module.get(number-1);
      getTail().next=null;
    }
    else{
      var thePrevNumFromRemoveNum = module.get(number-1);

      thePrevNumFromRemoveNum.next = module.get(number+1);
    }


  };


  module.insert = function(Value,number){

  };
  return module;
}


// console.log(linkedListGenerator().getHead());
var one = linkedListGenerator();
one.add('bomber');
one.add('man');
one.add('Playstation');
one.add('console');


one.get(1);
