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

    
    WatchDomInsert(callback) {
      let children = []
      

      let storageCount = 0;
      let cc = setInterval(() => {
       
          this.tickcount++
          children = this.children;
          //console.log(children.length);
          if (children.length > 0) {
            
            // console.log('JQ');
            let n_children = [];
            //console.log('Child Present');
            let idx = 0;
            // console.log('LEN');
            // console.log(this.getChildren.length);
            for (let child of this.getChildren) {
              if (child !== undefined) {
                //console.log(child)
                if (this.ArrayContainsItem(this.tagNameWhitelist, child.tagName) == false) {
                  n_children.push(child)
                  localStorage.setItem(idx + '_pre', child.outerHTML)
                  storageCount++
                  //this.removeChild(child)

                  // console.log(child);
                  idx++
                }
              }
            }
            this.innerHTML = ''

            //this.FunctionLoader()
            //this.func()
            //console.log(localStorage.length);
            for (let index = 0; index < localStorage.length; index++) {
                let el = $(localStorage.getItem(index + '_pre'))[0]
                this.prechildren.push(el)
                //console.log(el);
               
            }
            

            //console.log(this.prechildren);
            localStorage.clear()
            this.style.visibility = 'visible'
          }
          if(this.prechildren.length > 0 &&  this.innerHTML == ''){
            //console.log("Children Stored");
            clearInterval(cc)
            
            callback(this.prechildren)
          }

          


      }, 200);
      
      
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
    
    Observe(element){
      const config = { attributes: true, childList: true, subtree: true };
      const observer = new MutationObserver(this.CallBackObs);

      // Start observing the target node for configured mutations
      observer.observe(element, config);
      
      //console.log("Observing");
      //console.log(this.check);
      // Later, you can stop observing
      //observer.disconnect();
      return this.check
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
