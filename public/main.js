

console.log('我是main.js')

getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/page2.json')
    request.onreadystatechange = ()=>{
        if(request.response === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li =document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
        }
    }
    request.send()
}

getJson.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/5.json')
    request.onreadystatechange= ()=>{
        if(request.response===4 && request.status === 200){
            console.log(request.response)
        }
        // console.log(request.response)
        const object = JSON.parse(request.response)
        myName.textContent = object.name 
        // console.log(object)

    }
    request.send()
}

getXml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/4.xml')
    request.onreadystatechange =()=>{
        if(request.readyState===4 && request.status===200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('waring')[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
}

getHtml.onclick= ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/3.html')
    request.onload =()=>{
        console.log(request.response);
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
}

getJs.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/2.js')
    request.onload = ()=>{
        console.log(request.response);
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{}
    request.send()
}

getCss.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/style.css');   //readyState = 1
    request.onreadystatechange = ()=>{
       console.log(request.readyState)
       if(request.readyState===4){
           console.log('下载完成')    //下载完成，但是不知道是否成功
           if(request.status >= 200 && request.status < 300){
           const style = document.createElement("style")
           style.innerHTML = request.response
           document.body.appendChild(style)
           }else{
               console.log('加载CSS失败')
           }
       }
    };
    request.send();   //readyState = 2
} 
