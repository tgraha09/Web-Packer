import {TKG} from './tkg.js';
import $, { each } from "jquery";
import a$ from "arrive"

//https://www.youtube.com/watch?v=F36tmlmnYvg&list=PLBsXg60UJjlrI_8w8-_vRl-A1NbfSmE1P&index=1&ab_channel=OnlineTutorials
export class TKGAccordian extends TKG{
    constructor(){
        super(TKG)
        var Init = ()=>{

            this.fade = false;
            let Self = this
            //console.log(Self)
          
            let accordians = document.querySelectorAll("tkg-accordian")
            let accWidths = []
            

            //log(accordians)
            accordians.forEach(accord => {
                let prechild = []
                if ($(accordians).children.length > 0 ) {
                    accord.fade = Self.fade
                    let children = $(accord).children()
                    let display = document.createElement("div")
                    display.className = "acc-disp"
                    let firstChild = $(accord).children()[0]
                   // log(firstChild)
                    children.not(firstChild).each((i, child)=>{
                        //log(child)
                       $(child).css("display", "none");
                       //$(child).slideUp();
                       prechild.push(child)
                    })
                    
                    accord.addEventListener("click", ()=>{
                        //log("Clicked")
                        accord.fade = !accord.fade
                        let fade = accord.fade
                        prechild.forEach(child=>{
                            //log(child)
                            if(fade == false){
                                $(child).slideUp();
                            }
                            else{
                                //accord.after(child)
                                
                                $(child).slideDown();
                            }                 
                                 
                         })
                    })
               }
            });
            
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

customElements.define('tkg-accordian', TKGAccordian);

