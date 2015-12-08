// /**
//  * @name  linkedListGenerator
//  * @description  Main Module
//  * @return {Object} an object exposing methods to be used to manipulate a linked list
//  */
function linkedListGenerator(){
  var node = {};
  var head = null;
  var tail = null;

  return {
    getHead:function(){
      return head;
    },

    getTail:function(){
      return tail;
    },

    add:function(value){
      var newNodeObject={
        value:value,
        next:null,
      };

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
    },

    get:function(number){

    },

    remove:function(number){

    },


    insert:function(Value,number){

    }

  };


}



// function linkedListGenerator(){
//   var poo = {
//     value:null,
//     next:null
//   };


//     return {
//       getHead:function(){
//         var getPoo = poo.value;
//         return getPoo;
//       },


//       getTail:function(){



//       },

//       add:function(value){
//         var node = poo;
//         node.checker = false;
//         while(node.checker===false){
//           if(node.next===null){
//             var insideNode = {};
//             insideNode.value = value;
//             insideNode.next = null;
//             node.checker = true;
//             node.next = insideNode;
//             return insideNode;
//           }

//           else {
//             var tail = {};
//             node.next = tail;
//             return tail;
//           }

//         }

// //       },

// //       remove:function(number){

// //       },

// //       get:function(number){

// //       },

// //       insert:function(value,number){

// //       }
// //     };
// // }

