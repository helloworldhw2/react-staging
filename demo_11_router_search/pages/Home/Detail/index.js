import React, { Component } from 'react';
import qs from "querystring"

const detailData = [
  {id:1,tatle:'message1',content:'i love you'},
  {id:2,tatle:'message2',content:'you love you'},
  {id:3,tatle:'message3',content:'he love you'},
]

class Detail extends Component {
  render() {
    //qs.stringify(obj)
    let {id,tatil} = qs.parse(this.props.location.search.slice(1))
    const detai = detailData.find((item) => {
      return item.id === id*1
    })
    return (
      <ul>
        <li>id: {id}</li>
        <li>tatil: {tatil}</li>
        <li>content: {detai.content}</li>
      </ul>
    );
  }
}

export default Detail;