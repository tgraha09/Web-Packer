import {TKG} from './tkg.js';
import $, { each } from "jquery";
import a$ from "arrive"

//https://www.youtube.com/watch?v=F36tmlmnYvg&list=PLBsXg60UJjlrI_8w8-_vRl-A1NbfSmE1P&index=1&ab_channel=OnlineTutorials
export class TKGPager extends TKG{
    constructor(){
        super(TKG)



        var Init = ()=>{
            
            this.slide = false
            let Self = this
            let controllers = $(Self).children(".t-controller")
            let children = []
            let controller = document.createElement("ul")
            let display = undefined
            controller.className = "t-controller"
            
            $(Self).children().not(".t-controller").not(".t-display").not(".t-page").each((i, child)=>{
                //console.log(child)
                children.push(child)
                
                $(child).detach()
                
            })
            Self.prechildren = children
           // log(children)
            if($(Self).children(".t-controller").length>0){
                
            }
            else{
               // log("Missing Controller")
                
                if($(Self).children().length <= 0){
                   // log("Appening Controller")
                    Self.append(controller)
                }
                else{
                    let name = $(Self).children()[0].className
                    //log($(Self).children()[0].className)
                    if(name != "t-controller" && name != "t-display"){
                       // log("Replacing First Child")
                        $(Self).children()[0].outerHTML = controller.outerHTML
                    }
                    if(name != "t-controller" && name == "t-display"){
                       // log("Inserting Controller")
                        $(controller).insertBefore($(Self).children()[0])
                        //$(Self).children()[0].outerHTML = controller.outerHTML
                    }
                }
                
               
            }

        
            
            if($(Self).children(".t-display").length>0){
                display = document.body.getElementsByClassName("t-display")
                display.className = "t-display"
                log("FOUND DISPLAY")
            }
            else{
               // log("Missing Display")
                display = document.createElement("div")
                display.className = "t-display"
                log("Appening Display")
                Self.append(display)
                
            }
            let pair = {bttn: undefined, disp: undefined, idx: undefined}
            let count = 0;
            let li = {fade: false, obj: undefined}
            
            
           // log(Self.prechildren)
            Self.prechildren.forEach((child, i)=>{
                count++
                
                li.fade = false
                if(count == 1){
                    pair.bttn = child
                   // log(display) 
                }
                if(count == 2){
                    
                    pair.disp = child
                   // log(child)
                    li.obj = document.createElement("li")
                    li.obj.append(pair.bttn)
                    li.obj.className = "t-page"
                    
                    
                    controller.append(li.obj)
                    li.obj.onclick = ()=>{
                       // $(child).hide()
                        log($(display).children())
                        if($(display).children().length==0){
                            //log("No children")
                        }
                        else if($(display).children().length>0){
                            log("Has children")
                            $(display).empty()
                            
                            $(display).append(child)
                            //$(display).append(child)
                            
                            

                        }
                       
                        
                    }
                    
                    
                    count = 0
                }
                if(i == 1){
                    $(display).append(pair.disp)
                    log("FIRST")
                    
                    //log(display)
                }
               // log(controller)
                
            })
            
           // log(Self)
        }
        window.onload = ()=>{
            Init();
        }
    } 

    
    
    

    connectedCallback() {
        
        
        //console.log('CB');
        
        
        
    }

    BuildPager(){
        
        

        
    }

    PushContent(_content){

    }

    
}

function log(msg){
    console.log(msg)
}

customElements.define('tkg-pager', TKGPager);

