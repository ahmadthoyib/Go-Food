import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Counter from './components/counter';
import {Container, Card,Row,Col, CardImg,CardBody,
  CardTitle, Button } from 'reactstrap';

class App extends Component {
  state={
    makanan:[{
     nama:"gado-gado",
     img:"http://www.tentik.com/wp-content/uploads/2017/08/makananindomahal10.jpg" 
    },
    {
      nama:"jajanan",
      img: "http://www.asliindonesia.net/wp-content/uploads/2016/09/Cetil-jajan-Indonesia.jpg"
     },
     {
       nama:"es dawet",
       img:"https://www.tips.my.id/wp-content/uploads/2017/12/minuman-khas-indonesia-02.jpg"
     },
     {
       nama:"wedang bajigur",
       img:"https://palingunik85.files.wordpress.com/2016/01/0034.jpg?w=840"
     },
     
    ]
  }
  render() {
    return (
      <div>
        <Header/>
        <Row>
        {this.state.makanan.map(item =>(
          <Col xs="3">
        <Counter gambar={item.img} menu={item.nama}/>
        </Col>
        ))}
        </Row>
        </div>
    );
  }
}

export default App;
