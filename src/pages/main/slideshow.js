import React, { Component } from 'react'
import {WingBlank,Carousel} from "antd-mobile"
export default class slideshow extends Component {
    state = {
        data: ['fangchang1', 'fangchang2'],
        imgHeight:120,
    }

  render() {
    return (
        <div>
            {/* 轮播图 */}
            <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                autoplayInterval={4000}
            >
                {this.state.data.map(val => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                            src={require(`../../assts/imgs/${val}.jpg`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', height: "130px" }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        </div>
    )
  }
}
