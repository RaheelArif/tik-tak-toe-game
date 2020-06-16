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
      .then((data) => this.setState({ data: data.fight }));
    let red = 0;
    let blue = 0;
    for (let i = 0; i < this.state.data.rounds.length; i++) {
      red = red + this.state.data.rounds[i].roundBallots.global.fighter1Score;
      blue = blue + this.state.data.rounds[i].roundBallots.global.fighter2Score;
    }
    let redPT = red / this.state.rounds.length;
    red = red.toFixed(2);
    let bluePT = blue / this.state.rounds.length;
    blue = blue.toFixed(2);
    this.setState(
      {
        redPt: redPT,
        bluePt: bluePT,
        redTotal: red,
        blueTotal: blue,
      },
      (e) => console.log(this.state, "aahshs")
    );
  }

  render() {
    return (
      <div>
        {!this.state.data ? (
          <h1>not data</h1>
        ) : (
          <div className="s-container">
            <div className="s-box">
              <div className="s-top">
                <div className="s-top-l">
                  <h4 className="s-t-l-txt">
                    {this.state.data.fighter1.fighterFirstName}{" "}
                    {this.state.data.fighter1.fighterLastName}
                  </h4>
                  <img
                    src={this.state.data.fighter1.fighterImageURL}
                    alt=""
                    className="s-t-l-img"
                  />
                </div>
                <div className="s-top-c">
                  <img src={Logo} alt="" className="s-t-c-logo" />
                  <div className="t-c-botm">
                    <h4 className="s-t-c-global">Global Scorecard</h4>
                    <img src={earth} alt="" className="s-t-c-gimg" />
                  </div>
                </div>
                <div className="s-top-r">
                  <h4 className="s-t-r-txt">
                    {this.state.data.fighter2.fighterFirstName}{" "}
                    {this.state.data.fighter2.fighterLastName}
                  </h4>
                  <img
                    src={this.state.data.fighter2.fighterImageURL}
                    alt=""
                    className="s-t-r-img"
                  />
                </div>
              </div>
              {this.state.data.rounds.map((value, index) => {
                return (
                  <div className="s-mid">
                    <div className="s-m-box">
                      <h2 className="s-m-h">ROUND {index + 1}</h2>
                      <div className="sm-new-cc">
                        <div className="sm-pro">
                          <div className="sm-pro-lc">
                            <h4 className="sm-pro-lc-txt">
                              {value.roundBallots.global.fighter1Score.toFixed(
                                2
                              )}
                            </h4>

                            <LinearProgress
                              className="sm-pro-lc-bx"
                              progress={
                                value.roundBallots.global.fighter1Score / 10
                              }
                              bufferingDots={false}
                              buffer={1}
                              reversed={true}
                            />
                          </div>
                          {value.roundBallots.global.fighter1Score -
                            value.roundBallots.global.fighter2Score >
                          0 ? (
                            <div className="sm-pro-lc2">
                              <h4 className="sm-pro-lc-txt2">
                                +
                                {(
                                  value.roundBallots.global.fighter1Score.toFixed(
                                    2
                                  ) -
                                  value.roundBallots.global.fighter2Score.toFixed(
                                    2
                                  )
                                ).toFixed(2)}
                              </h4>

                              <LinearProgress
                                className="sm-pro-lc-bx2"
                                progress={
                                  (value.roundBallots.global.fighter1Score -
                                    value.roundBallots.global.fighter2Score) /
                                  10
                                }
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
                                  progress={
                                    value.roundBallots.global.fighter2Score / 10
                                  }
                                  bufferingDots={false}
                                  buffer={1}
                                />
                                <h4 className="sm-pro-rc-txt">
                                  {value.roundBallots.global.fighter2Score.toFixed(
                                    2
                                  )}
                                </h4>
                              </div>
                            </div>
                            {value.roundBallots.global.fighter2Score -
                              value.roundBallots.global.fighter1Score >
                            0 ? (
                              <div className="sm-pro-rc2">
                                <LinearProgress
                                  className="sm-pro-rc-bx2"
                                  progress={
                                    (value.roundBallots.global.fighter2Score -
                                      value.roundBallots.global.fighter1Score) /
                                    10
                                  }
                                  bufferingDots={false}
                                  buffer={1}
                                />
                                <h4 className="sm-pro-rc-txt2">
                                  {(
                                    value.roundBallots.global.fighter2Score.toFixed(
                                      2
                                    ) -
                                    value.roundBallots.global.fighter1Score.toFixed(
                                      2
                                    )
                                  ).toFixed(2)}
                                  +
                                </h4>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      {value.roundBallots.global.fighter2Score -
                        value.roundBallots.global.fighter1Score !==
                      0 ? (
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
                        <h4 className="sm-pro-lc-txt">{this.state.redTotal}</h4>

                        <LinearProgress
                          className="sm-pro-lc-bxff"
                          progress={
                            this.state.redTotal /
                            this.state.data.rounds.length /
                            10
                          }
                          bufferingDots={false}
                          buffer={1}
                          reversed={true}
                        />
                      </div>
                      {this.state.redTotal - this.state.blueTotal > 0 ? (
                        <div className="sm-pro-lc2">
                          <h4 className="sm-pro-lc-txt22">
                            +{(this.state.redTotal - this.state.blueTotal).toFixed(2)}
                          </h4>

                          <LinearProgress
                            className="sm-pro-lc-bx22f"
                            progress={this.state.redPt / 10}
                            bufferingDots={false}
                            buffer={1}
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="sm-diff">
                      <div className="sm-pro2f dif22-2">
                        <div className="dif-bb">
                          <div className="sm-pro-rc">
                            <LinearProgress
                              className="sm-pro-rc-bx"
                              progress={
                                this.state.blueTotal /
                                this.state.data.rounds.length /
                                10
                              }
                              bufferingDots={false}
                              buffer={1}
                            />
                            <h4 className="sm-pro-rc-txt">
                              {this.state.blueTotal}
                            </h4>
                          </div>
                        </div>
                        {this.state.blueTotal - this.state.redTotal > 0 ? (
                          <div className="sm-pro-rc2">
                            <LinearProgress
                              className="sm-pro-rc-bx2"
                              progress={this.state.bluePt / 10}
                              bufferingDots={false}
                              buffer={1}
                            />
                            <h4 className="sm-pro-rc-txt22">
                              {(
                                this.state.blueTotal - this.state.redTotal
                              ).toFixed(2)}
                            </h4>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "-10px" }} className="h4-dd">
                    Difference
                  </div>
                </div>
              </div>
              <div className="f-c-footer">
                <img className="fc-icon1" src={icon2} alt="" />
                <img className="fc-icon1" src={icon1} alt="" />
              </div>
            </div>
          </div>
        )}
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
        <button
          className="buttonDownload"
          onClick={() => exportComponentAsJPEG(this.componentRef)}
        >
          JPEG
        </button>

        <button
          className="buttonDownload"
          onClick={() => exportComponentAsPNG(this.componentRef)}
        >
          PNG
        </button>
      </React.Fragment>
    );
  }
}
