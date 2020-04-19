import React from 'react'
import "./brother.scss"
import Popup from "reactjs-popup"


//TODO: make brother pic expand into a different view when clicked to show: pledge class, hometown, major, interests/bio all in a pannel view or sm
//also make a graduation year class, so that when you click a year like 2022 it expands to show the 2022's pics
//idea: somehow have 'special' view on brother flip through different pics of them

import rush from '../assets/images/brothers/charlesCoffey.jpg'

class Brother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      name: this.props.name,
      picView: this.props.picView,
      bio: this.props.bio,
      year: this.props.year,
      major: this.props.major,
      hometown: this.props.hometown,
      nickname: this.props.nickname,

    };
  }

  

  renderBrotherImage(){
    return (
        <img src={this.props.img} alt={this.state.name} className={"brother"}/>
        );
  }

  renderBrotherInfo(){

  }

  render() {
    return (
    <div className={"brother"}>
      <p>{this.renderBrotherImage()}</p>
      <p>{this.state.name}</p>
      <Popup
        trigger={<button> More </button>}
        modal
        closeOnDocumentClick
      >
          <div id="main">
              <section id="one" className="tiles">
                      <div className="grid-wrapper">
                          <div className="col-0">
                              <div className="mb-5">
                                {this.renderBrotherImage(this.state.img, this.state.name)}
                              </div>
                          </div>
                          <div className="col-5">
                              <div className="mb-5">
                                <h2 align = "center">{this.state.name}</h2>
                                <p>Class of {this.state.year}</p>
                                <p>{this.state.hometown}</p>

                              </div>
                          </div>
                          <div className="col-6">
                              <div className="mb-5">
                                <h2 align = "center">{this.state.nickname}</h2>
                                <p>{this.state.major}</p>
                                <p>"{this.state.bio}"</p>
                              </div>
                          </div>                          


                      </div>

                </section>
          </div>
      </Popup>
    </div>
    );
  }
}
// brother name
// a bio
// hometown
// major
// officer positions

// <div id="modal-brother-info" class="modal open" tabindex="0" style="z-index: 1003; display: block; opacity: 1; top: 10%; transform: scaleX(1) scaleY(1);">
//           <div style="overflow-y:hidden;" class="modal-content">
//             <div class="row" style="margin-bottom: 0px;">
//               <div id="special-div-stuff" style="padding: 0px;" class="col m5 l5 s12">
//                 <div class="slider" style="height: 500px;">
//                   <ul id="ul-brother-gallery" class="slides" style="height: 500px;"><li class="" style="opacity: 0; transform: translateX(0px) translateY(0px);"><img src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="background-image: url(&quot;images/brothers/2022/ahomma.jpg&quot;);"></li><li class="active" style="opacity: 1; transform: translateX(0px) translateY(0px);"><img src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="background-image: url(&quot;images/brothers/2022/gallery/homma2.jpeg&quot;);"></li><li class="" style="opacity: 0; transform: translateX(0px) translateY(0px);"><img src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="background-image: url(&quot;images/brothers/2022/gallery/homma3.jpg&quot;);"></li></ul>
//                 </div>
//               </div>
//               <div id="brother-information-container" class="col m7 l7 s12">
//                 <div id="modal-brother-name" class="col s12 m12 l12 black-text">Alex Homma</div>
//                 <div id="modal-brother-pledge-class" class="col s12 m12 l12 black-text">Pledge Class Of 2022</div>
//                 <div id="modal-brother-home-town" class="col s12 m12 l12 black-text">Home Town: Monterrey, Mexico</div>
//                 <div id="modal-brother-major" class="col s12 m12 l12 black-text">Major: Course 6-14</div>
//                 <div id="modal-brother-interests" class="col s12 m12 l12 black-text">Interests: Cooking, Calisthenics, Traveling</div>

//                 <div id="modal-brother-description" class="col s12 m12 l12">
//                   <i id="first-quote" class="material-icons">format_quote</i>
//                   <span id="modal-brother-description-span" class="black-text">Alexander Homma, better known by  his stage name Alex, stays true to his half-Flexican, half-Trapanese roots. A distinguished member of Phi-goon, Alex is famous for his resemblance to Sid the Sloth, and for getting his arm broken by Diego on the first day of Rush (check out our photos if you want evidence). Pictured: Alex with a baguette in Paris, yet another piece of evidence that he does, in fact, get this bread.</span>
//                   <i id="second-quote" class="material-icons">format_quote</i>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//this.renderBrotherImage(this.props.img, this.props.name)
//<button src={img} onClick={() => this.setState({picView: this.state.picView == "Normal" ? "Special" : 'Normal'})}>
export default Brother


        // <span>
        //   <div className={"brother"}>
        //   <p>{this.renderBrotherImage(this.props.img, this.props.name)}</p>
        //   </div>
        //   <div className={"brotherInfo"}>
        //     <p align="left" style={{color: "black"}}>
        //       Brother Name: slicky the thicky
        //     </p>
        //     <p align="left" style={{color: "black"}}>
        //       Big: Pascual
        //     </p>
        //     <p align="left" style={{color: "black"}}>
        //      Bio: im a cool guy
        //     </p>
        //     <p align="left" style={{color: "black"}}>
        //       hometown: somewhere in pennsylvania
        //     </p>
        //     <p align="left" style={{color: "black"}}>
        //       major: 20
        //     </p>
        //     <p align="left" style={{color: "black"}}>
        //       officer positions: basically all of them
        //     </p>
        //   </div>
        // </span>