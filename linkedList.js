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
  var length = 0;


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
      length++;
      return newNodeObject;
    }
    else{
      tail.next=newNodeObject;
      tail=newNodeObject;
      length++;
      return newNodeObject;
    }


  };

  module.getLength = function(){
    return length;
  };

  module.get = function(number){
    var i=0;
    var getLength = 0;
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
        length--;
        return head;
    }
    else if(module.get(number)===module.getTail()){
        tail = module.get(number-1);
        tail.next = null;
        length--;
        return tail;
    }

    else if(module.get(number)===false){
        return false;
    }

    else{
        var prior = module.get(number-1);
        var after = module.get(number+1);
        prior.next = after;


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
    if((number)>=(module.getLength())){
      return false;
    }

    else if(number < 0){
      return false;
    }

    else if(module.get(number)===module.getHead()){
        var insideTheNode = module.createNode(Value);
        insideTheNode.next = module.get(0);
        head = insideTheNode;
        length++;
        return insideTheNode;
    }
    else if(module.get(number-1)===module.getTail()){
        var willBeTheBack = module.createNode(Value);
        var theBack = module.getTail();
        theBack.next = willBeTheBack;
        tail = willBeTheBack;
        length++;
        return willBeTheBack;
    }



    else {
        var inTheMiddle = module.createNode(Value);
        inTheMiddle.next = module.get(number);
        module.get(number-1).next =inTheMiddle;
        length++;
        return inTheMiddle;
    }


  };

  // var saveButton = document.getElementById('save');
  // saveButton.addEventListener('click',function(){
  //   var textInput = document.getElementById('textInput');
  //   var newOne = one.createNode('kainoa');

  //   newOne.next = one.getHead();

  //   head = newOne;
  //   return head;
  // });

  // var deleteButton = document.getElementById('delete');
  // deleteButton.addEventListener('click',function(){
  //   var goingToDelete = getHead();
  //   get
  // });

  return module;
}


// console.log(linkedListGenerator().getHead());
var one = linkedListGenerator();
one.add('bomber');
one.add('man');
one.add('Playstation');
one.add('console');

console.log(one.insert('kainoa',3));
console.log("");

console.log('ohohohohho');
console.log("");


console.log(one.get(0));
console.log('');
console.log(one.get(1));
console.log('');
console.log(one.get(2));
console.log('');
console.log(one.get(3));
console.log('');
console.log(one.get(4));
console.log('');
console.log(one.getLength());
console.log('');




