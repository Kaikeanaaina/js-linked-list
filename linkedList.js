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
    if(module.get(number)===module.getHead()){
        head=module.get(number+1);

        console.log(head);
        console.log('the head is true');
        return head;
    }
    else if(module.get(number)===module.getTail()){
        tail = module.get(number-1);
        tail.next = null;
        console.log(tail);
        console.log('the tail is true also');
        return tail;
    }

    else if(module.get(number)===false){
        return false;
    }

    else{
        var prior = module.get(number-1);
        var after = module.get(number+1);
        prior.next = after;
        console.log(prior);
        console.log(after);
        console.log(head);
    }


  };

  module.createNode = function(Value){
    var newNodeObject = {
      value:Value,
      next:null
    };
    return newNodeObject;
  };

  module.insert = function(Value,number){

    if(module.get(number)===module.getHead()){
        var insideTheNode = module.createNode(Value);
        insideTheNode.next = module.get(0);
        head = insideTheNode;
        console.log(insideTheNode);
        console.log(head);
        return insideTheNoede;
    }
    else if(module.get(number)===module.getTail()){
        var willBeTheBack = module.createNode(Value);
        var theBack = module.getTail();
        theBack.next = willBeTheBack;
        tail = willBeTheBack;
        console.log(theBack);
        console.log(tail);
        return willBeTheBack;
    }

    else {
        var inTheMiddle = module.createNode(Value);
        inTheMiddle.next = module.get(number+1);
        module.get(number).next =inTheMiddle;
        console.log(inTheMiddle);
    }


  };
  return module;
}


// console.log(linkedListGenerator().getHead());
var one = linkedListGenerator();
one.add('bomber');
one.add('man');
one.add('Playstation');
one.add('console');

one.insert('kainoa',2);
console.log(one.getHead());

