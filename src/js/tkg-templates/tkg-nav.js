import {TKG} from './tkg.js';
import $, { each } from "jquery";


//https://www.youtube.com/watch?v=F36tmlmnYvg&list=PLBsXg60UJjlrI_8w8-_vRl-A1NbfSmE1P&index=1&ab_channel=OnlineTutorials
export class TKGNav extends TKG{
    constructor(){
        super(TKG)
        var Init = ()=>{
            //this.appendChild()
            log("STARTED")
            //Checks if there are children on page load, will move them
            let Self = this
            let dimensions = []
            if ($(this).children.length > 0 ) {
                let children = $(this).children()
                log(children)
                if($(this).children(".nav").length > 0){
                    
                    log("Nav Present")
                    let nav = $(this).find(".nav")[0]

                    //log(nav)
                    dimensions = Self.MoveContentToList(children, nav)
                }
                if($(this).children(".nav").length <= 0){
                    
                    log("Creating Nav")
                    let nav = document.createElement("ul")
                    nav.className = 'nav'
                    $(this).append(nav)
                   // log(nav)
                    
                   dimensions = Self.MoveContentToList(children, nav)
                    
                }
                //$(this).css("width", dimensions[0])
                //$(this).css("height", dimensions[1])
                log(dimensions)
                
                // do something
           }
        }
        window.onload = ()=>{
            Init();
        }
        //console.log(this.prechildren);
        
        


        //this.Update()
    } 

    
    MoveContentToList(_children, _nav){
        _children.not(".nav").each((i, child)=>{
            
            log(child)
            let li = document.createElement("li")
            li.className = "nav-content"
            
            li.appendChild(child)
            _nav.append(li)

            
        })
        let height = $(_nav).height()
        let width = $(_nav).width()
        //log(width)
        //log(height)
        return [width, height]
    }
    

    connectedCallback() {
        
        
        //console.log('CB');
        
        this.init = false
        this.className = ''
        
    }

    

    BuildCard(){
        
        
    }

    PushContent(_content){

        
    }

    SetContent(_content){
         
    }  
}

function log(msg){
    console.log(msg)
}

customElements.define('tkg-nav', TKGNav);


