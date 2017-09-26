import React,{Component} from 'react'
import ReactDom from 'react-dom'
import ImgsData from './imgsdata.json'
import './gallery.less'
// 获取图片数组相关信息，增加 URL
let ImgsInfo = ImgsData.map((img)=>{
 return Object.assign({},
    img,
    {url: `../../imgs/${img.filename}`}
  )
})
class Image extends Component{
  render(){
  let styleObj = {}
    if(this.props.arrange.pos){
      styleObj = this.props.arrange.pos
    }
    if(this.props.arrange.rotate){
      style["transform"] = `rotate(${this.props.arrange.rotate}deg`
    }
    return(
      <figure className="img-pin" style={styleObj}>
        <img src={this.props.data.url} alt={this.props.data.des} />	
        <figcaption>
          <h3>{this.props.data.title}</h3>
        </figcaption>
      </figure>
    )
  }
}
class Gallery extends Component{


  render(){
    return(
      <div className="stage">
        <div className="img-container"></div>
        <nav className="img-nav"></nav>
      </div>
    )
  }
}
export default Gallery