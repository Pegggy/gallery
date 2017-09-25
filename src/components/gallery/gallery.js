import React,{Component} from 'react'
import ReactDom from 'react-dom'
import ImgsData from './imgsdata.json'

let ImgsInfo = ImgsData.map((img)=>{
 return Object.assign({},
    img,
    {url: `../../imgs/${img.filename}`}
  )
})
console.log(ImgsInfo)
class Gallery extends Component{
  render(){
    return(
      <div> hello react</div>
    )
  }
}
export default Gallery