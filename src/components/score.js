import React, { Component } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import LinearProgress from "@material/react-linear-progress";
import Logo from "./images/verdict-logo.svg";
import earth from "./images/earth.png";
import lestner from "./images/Brock.jpg";
import icon1 from "./images/google-play.png";
import icon2 from "./images/app-store.png";
import "@material/react-linear-progress/dist/linear-progress.css";
import "./score.css";
class Score extends Component {
  state = {
    redTotal: 0,
    redPt: undefined,
    rounds: [
      { red: 9.0, blue: 9.0 },
      { red: 9.8, blue: 7.8 },
      { red: 9.83, blue: 8.7 },
      { red: 9, blue: 9.9 },
      { red: 8, blue: 9.8 },
    ],
  };
  async componentDidMount() {
    await fetch("https://dayviec25.github.io/test-apis/sample1.json")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
    console.log(this.state, "aahshs");
    let red = 0;
    let blue = 0;
    for (let i = 0; i < this.state.rounds.length; i++) {
      red = red + this.state.rounds[i].red;
      blue = blue + this.state.rounds[i].blue;
    }
    let redPT = red / this.state.rounds.length;
    let bluePT = blue / this.state.rounds.length;

    this.setState({
      redPt: redPT,
      bluePt: bluePT,
      redTotal: red,
      blueTotal: blue,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="s-container">
        <div className="s-box">
          <div className="s-top">
            <div className="s-top-l">
              <h4 className="s-t-l-txt">joanna jedrzejczyk</h4>
              <img src={lestner} alt="" className="s-t-l-img" />
            </div>
            <div className="s-top-c">
              <img src={Logo} alt="" className="s-t-c-logo" />
              <div className="t-c-botm">
                <h4 className="s-t-c-global">Global Scorecard</h4>
                <img src={earth} alt="" className="s-t-c-gimg" />
              </div>
            </div>
            <div className="s-top-r">
              <h4 className="s-t-r-txt">Michelle Waterson</h4>
              <img src={lestner} alt="" className="s-t-r-img" />
            </div>
          </div>
          {this.state.rounds.map((value, index) => {
            return (
              <div className="s-mid">
                <div className="s-m-box">
                  <h2 className="s-m-h">ROUND {index + 1}</h2>
                  <div className="sm-new-cc">
                    <div className="sm-pro">
                      <div className="sm-pro-lc">
                        <h4 className="sm-pro-lc-txt">{value.red}</h4>

                        <LinearProgress
                          className="sm-pro-lc-bx"
                          progress={value.red / 10}
                          bufferingDots={false}
                          buffer={1}
                          reversed={true}
                        />
                      </div>
                      {value.red - value.blue > 0 ? (
                        <div className="sm-pro-lc2">
                          <h4 className="sm-pro-lc-txt2">+{(value.red - value.blue).toFixed(2)}</h4>

                          <LinearProgress
                            className="sm-pro-lc-bx2"
                            progress={0.1}
                            bufferingDots={false}
                            buffer={1}
                          />
                        </div>
                      ) : null}
                    </div>

                      <div className="sm-diff">
                        <div className="sm-pro2">
                          <div className="dif-bb">
                            <div className="sm-pro-rc">
                              <LinearProgress
                                className="sm-pro-rc-bx"
                                progress={value.blue / 10}
                                bufferingDots={false}
                                buffer={1}
                              />
                              <h4 className="sm-pro-rc-txt">{value.blue}</h4>
                            </div>
                          </div>
                          {value.blue - value.red > 0 ? (
                            <div className="sm-pro-rc2">
                              <LinearProgress
                                className="sm-pro-rc-bx2"
                                progress={(value.blue - value.red) / 10}
                                bufferingDots={false}
                                buffer={1}
                              />
                              <h4 className="sm-pro-rc-txt2">
                                {(value.blue - value.red).toFixed(2)}+
                              </h4>
                            </div>
                          ) : null}
                        </div>
                      </div>
                  </div>
                  {value.blue - value.red !== 0 ? (

                  <div className="h4-dd">Difference</div>
                  ) : null}

                </div>
              </div>
            );
          })}

          <div className="s-mid">
            <div className="s-m-box">
              <h2 className="s-m-h">FINAL SCORE </h2>
              <div className="sm-new-cc">
                <div className="sm-pro2f">
                  <div className="sm-pro-lc">
                    <h4 className="sm-pro-lc-txt">+44.76</h4>

                    <LinearProgress
                      className="sm-pro-lc-bxff"
                      progress={0.9}
                      bufferingDots={false}
                      buffer={1}
                      reversed={true}
                    />
                  </div>
                  {this.state.redTotal - this.state.blueTotal > 0 ? (
                    <div className="sm-pro-lc2">
                      <h4 className="sm-pro-lc-txt22">
                        +
                        {(this.state.redTotal - this.state.blueTotal).toFixed(
                          2
                        )}
                      </h4>

                      <LinearProgress
                        className="sm-pro-lc-bx22f"
                        progress={4.52 / 10}
                        bufferingDots={false}
                        buffer={1}
                      />
                    </div>
                  ) : null}
                </div>

                <div className="sm-diff">
                  <div className="sm-pro2f">
                    <div className="dif-bb">
                      <div className="sm-pro-rc">
                        <LinearProgress
                          className="sm-pro-rc-bx"
                          progress={45.26 / 5 / 10}
                          bufferingDots={false}
                          buffer={1}
                        />
                        <h4 className="sm-pro-rc-txt">{45.26}</h4>
                      </div>
                    </div>
                    {this.state.blueTotal - this.state.redTotal > 0 ? (
                      <div className="sm-pro-rc2">
                        <LinearProgress
                          className="sm-pro-rc-bx2"
                          progress={12 / 10}
                          bufferingDots={false}
                          buffer={1}
                        />
                        <h4 className="sm-pro-rc-txt22">
                          {(this.state.blueTotal - this.state.redTotal).toFixed(
                            2
                          )}
                        </h4>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div style={{marginTop:"-10px"}} className="h4-dd">Difference</div>
            </div>
          </div>
          <div className="f-c-footer">
            <img className="fc-icon1" src={icon2} alt="" />
            <img className="fc-icon1" src={icon1} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <Score ref={this.componentRef} />
        <h3 className="downl-r">Download Restults</h3>
        <button className="buttonDownload" onClick={() => exportComponentAsJPEG(this.componentRef)}>
          JPEG
        </button>

        <button className="buttonDownload" onClick={() => exportComponentAsPNG(this.componentRef)}>
         PNG
        </button>
      </React.Fragment>
    );
  }
}
