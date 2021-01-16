import {TKG} from './tkg.js';
import $ from "jquery";
import a$ from "arrive"

//https://www.youtube.com/watch?v=F36tmlmnYvg&list=PLBsXg60UJjlrI_8w8-_vRl-A1NbfSmE1P&index=1&ab_channel=OnlineTutorials
export class TKGPager extends TKG{
    constructor(){
        super(TKG)

        //console.log('CONST');
        
        let children = []
        this.instance = this
        let instance = this.instance
        this.WatchDomInsert(function (params) {
            if(params != undefined){
                //console.log('Moving Children');
                instance.BuildPager()
                params.forEach(element => {
                    //console.log(element);
                    //this.PushContent(element)
                    instance.PushContent(element.outerHTML)
                });
            }
            else{
                instance.BuildPager()
            }
            
        })
        
        //console.log(this.prechildren);
        


        //this.Update()
    } 

    

    

    connectedCallback() {
        
        
        //console.log('CB');
        
        this.init = false
        this.className = 'pager'
        this.style.visibility = 'hidden'
        this.controller = this.CreateElement('ul')
        this.controller.className = 'controller'
        this.page = this.CreateElement('li')
        this.page.className = 'page'
        this.content = this.CreateElement('div')
        this.content.className = 'content'


        this.tagNameWhitelist.push('pager')
        this.tagNameWhitelist.push('controller')
        this.tagNameWhitelist.push('page')
        this.tagNameWhitelist.push('content')
        
    }

    BuildPager(){
        
        


        this.page.innerHTML = this.content.outerHTML
        this.controller.innerHTML = this.page.outerHTML
        this.innerHTML = this.controller.outerHTML
        this.init = true
        
    }

    PushContent(_content){

        if(_content == undefined){
            //console.log('No Content');
            return
        }
        
        this.content.innerHTML += _content
        this.page.innerHTML = this.content.outerHTML
        this.controller.innerHTML = this.page.outerHTML
        this.innerHTML = this.controller.outerHTML

        this.css_width = $(this.card).css('width', 'initial')
        if($(this).css('padding') != ''){
            let padding = $(this).css('padding')
            console.log(padding);
            document.documentElement.style.setProperty('--contpad', padding);
            $(this).css('padding', '0')
           
        }
        //console.log(this.css_width);
        //console.log(this.css_width);
    }

    SetContent(_content){
        //if()
        if(_content == undefined){
            return
            //console.log('No Content');
        }
        this.content.innerHTML = _content
        this.page.innerHTML = this.content.outerHTML
        this.controller.innerHTML = this.page.outerHTML
        this.innerHTML = this.controller.outerHTML 
    }  
}


customElements.define('tkg-pager', TKGPager);

