import React, { Component } from 'react';
import ImageDog from './ImageDog';

class Dog extends Component {
  constructor() {
    super();
    this.fetchDog = this.fetchDog.bind(this);
    this.saveData = this.saveData.bind(this);
    this.saveName = this.saveName.bind(this);
    this.state = {
      imgDog: '',
      breadDog: '',
      name: '',
      array: [],
      loading: true,
    };
  }

  componentDidMount() {
    // if (localStorage.namedDogURL) {
    //   const parseStorage = JSON.parse(localStorage.namedDogURL);
    //   const lastDog = parseStorage[parseStorage.length - 1].imgDog;
    //   this.setState({
    //     array: parseStorage,
    //     imgDog: lastDog,
    //   });
    // } else {
    //   this.fetchDog();
    // }
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const value = !nextState.imgDog.includes('terrier');
    return value;
  }

  componentDidUpdate(prevProps, prevState) {
    const { imgDog } = this.state;
    if (prevState.imgDog !== imgDog) {
      const dogBreed = imgDog.split('/')[4];
      // alert(dogBreed);
    }
    // localStorage.setItem('imgDog', imgDog);
  }

  newDog() {
    this.fetchDog();
  }

  saveData() {
    const {
      imgDog,
      name,
      array,
    } = this.state;
    const dogData = { imgDog, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: '' });
    localStorage.setItem('namedDogURL', JSON.stringify(newArray));
  }

  saveName(event) {
    // console.log(event.target);
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  }

  async fetchDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    const breed = data.message.split('/')[4];
    this.setState({
      imgDog: data.message,
      breadDog: breed,

    });
  }

  render() {
    const { imgDog, breadDog, name } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <main>
        { imgDog !== '' ? <ImageDog
          srcImg={ imgDog }
          changeDog={ () => this.newDog() }
          bread={ breadDog }
          value={ name }
        /> : loadingElement }
        <div>
          <input
            type="text"
            value={ name }
            placeholder="Digite o nome do doguinho"
            onChange={ this.saveName }
          />
          <button type="button" onClick={ this.saveData }>
            Salvar doguinho!
          </button>
        </div>
      </main>
    );
  }
}

export default Dog;
