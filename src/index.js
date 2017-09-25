import React,{Component} from 'react'
import {render} from 'react-dom'
import Gallery from './components/gallery/gallery'
if(module.hot){
    module.hot.accept()
}

render(
<Gallery />,
document.getElementById('root')
)
