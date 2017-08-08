document.addEventListener("DOMContentLoaded", function(event) {
    let openMenu = document.getElementById('openMenu'),
        activeHeader = document.querySelector('header'),
        diva = document.querySelector('section').querySelector('div'),
        liNav  = document.getElementById('ulMob').getElementsByTagName('a');
        openMenu.onclick = ()=>{
            if(openMenu.getAttribute('class')){
                openMenu.setAttribute('class','');
                activeHeader.setAttribute('class','');
                diva.setAttribute('class','')
            }else{
                openMenu.setAttribute('class','active');
                activeHeader.setAttribute('class','active')
                diva.setAttribute('class','active')
            }
        };
    Array.from(liNav).map((a)=>{
        a.onclick = ()=>{
            console.log('hi');
            openMenu.setAttribute('class','');
            activeHeader.setAttribute('class','');
            diva.setAttribute('class','')
        }
    })
    let harmony = document.querySelector('aside').getElementsByTagName('p');
        Array.from(harmony).map((p)=>{
            p.onclick = ()=>{
                if(p.parentNode.getAttribute('class') == 'active'){
                    Array.from(harmony).map((p2)=>{
                        p2.parentNode.setAttribute('class','');
                    })
                }else{
                    Array.from(harmony).map((p2)=>{
                        p2.parentNode.setAttribute('class','');
                    })
                    p.parentNode.setAttribute('class','active');
                }
            }
        });
    let openMap = document.getElementById('openMap');
    openMap.onclick = ()=> {
            if (openMap.className == 'open_map active') {
                openMap.className = openMap.className.replace(' active', '');
            } else {
                openMap.className = openMap.className + ' active'
            }
        };
    window.onscroll = (e)=>{
        let correctScroll = e.target.scrollingElement.scrollTop,
            homePage = document.getElementById('home').offsetHeight,
            toUp = document.getElementById('toUp');
        if(correctScroll<homePage){
            toUp.className = 'to_up active'
        }else {
            toUp.className = 'to_up';
        }
    }
});