import React,{Component} from 'react'
import ReactDom from 'react-dom'
import ImgsData from './imgsdata.json'
import './gallery.less'

// 获取图片数组相关信息，增加 URL
let ImgInfos = ImgsData.map((img)=>{
 return Object.assign({},
    img,
    {url: require(`src/imgs/${img.filename}`)}
  )
})
class Image extends Component{
  render(){
  // let styleObj = {}
    // if(this.props.arrange.pos){
    //   styleObj = this.props.arrange.pos
    // }
    // if(this.props.arrange.rotate){
    //   style["transform"] = `rotate(${this.props.arrange.rotate}deg`
    // }
    return(
      <figure className="img-pin">
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
    let navigators = []
    let imgFigures = []
    ImgInfos.forEach((imgInfo)=>{
      console.log(imgInfo.url)
      imgFigures.push(<Image data={imgInfo}/>)
    })
    return(
      <div className="stage">
        <div className="img-container">
          {imgFigures}
        </div>
        <nav className="img-nav">
          {navigators}
        </nav>
      </div>
    )
  }
}
export default Gallery