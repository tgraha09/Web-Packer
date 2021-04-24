import $ from "jquery";


export class TKG extends HTMLElement{
    constructor(){
        super()
        this.getChildren = $(this).children().prevObject[0].children
        //this.GetChildren()
        // Options for the observer (which mutations to observe)
        this.instance = this; 
        this.init == undefined;
        this.prechildren = []
        this.tagNameWhitelist = []
        this.tickCount = 0
        this.has_prechildren = undefined
        this.RUN = undefined
        this.instance = this
        this.css_width = undefined
    } 



    connectedCallback() {
        
    }

    ExtractString(sub, string){
      let matched = 0;
      let g = 0;
      let found = '';
      for (var i = 0; i < string.length; i++) {
        let letter1 = string.charAt(i)
        let letter2 = sub.charAt(g)
        if(letter1 == letter2) {
          g++;
          found+=letter1;
        }
      }
      console.log(found);
    }

    
   
    
    PromiseHandler(promise, callback){
      promise.then(function(data){
        callback(data)
      })
    }
    SetObserveCheck(_value ){
      this.check = _value;
     // console.log(this.check);
    }

    ChangeStyle(element, property, value){
      $(element).css(property, value)
    }


    ArrayContainsItem(arr, item) {
      let len = arr.length
      let found = 0;
      for (let i = 0; i < len; i++) {
        if (found == len)
          found++
      }
      if (found == len)
        return true
      return false
    }
    
   
    CreateElement(_ele){
        return document.createElement(_ele)
    }

    GenRandColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
}

