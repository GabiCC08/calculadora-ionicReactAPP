import { IonText, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';

import './Home.css';

const Home: React.FC = () => {

  const [ text, setText ] = useState(0);
  const [ num1, setNum1 ] = useState(0);
  const [ num2, setNum2 ] = useState(0);
  const [ opcion, setOpcion ] = useState(0);



  const add = () => {
    setNum2(num1);
    setOpcion(1);
    setText(0);
  }

  const subtract = () => {
    setNum2(num1);
    setOpcion(2);
    setText(0);
  }

  const prod = () => {
    setNum2(num1);
    setOpcion(3);
    setText(0);
  }

  const div = () => {
    setNum2(num1);
    setOpcion(4);
    setText(0);
  }

  const clean = () => {
    setNum2(0);
    setOpcion(0);
    setText(0);
    setNum1(0);
  }

  const equal = () => {
    switch(opcion){
      case 1:
        setText(num1 + num2);
        break;
      case 2:
        setText(num2 - num1);
        break;
      case 3:
        setText(num1 * num2);
        break;
      case 4:
        setText(num2 / num1);
        break;
      default:
        setText(0);
        break;
    }
    setNum1(0);
    setNum2(0);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora básica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonGrid>
          <IonRow>
            <IonCol>
                <IonText>{text}</IonText>
            </IonCol>
            <IonCol>
                <IonButton onClick={()=>{clean()}} expand="block"  >clean</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <IonButton onClick={()=>{setText(7);setNum1(7)}} shape="round" expand="block" >7</IonButton>
            </IonCol>
            <IonCol>
                <IonButton onClick={()=>{setText(8);setNum1(8)}} shape="round" expand="block"  >8</IonButton>
            </IonCol>
            <IonCol>
                <IonButton onClick={()=>{setText(9);setNum1(9)}} shape="round" expand="block"  >9</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <IonButton onClick={()=>{setText(4);setNum1(4)}} shape="round" expand="block"  >4</IonButton>
            </IonCol>
            <IonCol>
                <IonButton onClick={()=>{setText(5);setNum1(5)}} shape="round" expand="block"  >5</IonButton>
            </IonCol>
            <IonCol>
                <IonButton onClick={()=>{setText(6);setNum1(6)}} shape="round" expand="block"  >6</IonButton>
            </IonCol>
             </IonRow>
          <IonRow>
            <IonCol>
                <IonButton onClick={()=>{setText(1);setNum1(1)}} shape="round" expand="block"  >1</IonButton>
            </IonCol>
            <IonCol>
                <IonButton onClick={()=>{setText(2);setNum1(2)}} shape="round" expand="block"  >2</IonButton>
            </IonCol>
            <IonCol>
                <IonButton onClick={()=>{setText(3);setNum1(3)}} shape="round" expand="block"  >3</IonButton>
            </IonCol>
          </IonRow>
        <IonRow>
            <IonCol>
                <IonButton onClick={()=>{setNum1(0)}} shape="round" expand="block"  >0</IonButton>
            </IonCol>
          <IonCol>
              <IonButton onClick={()=>{add()}} expand="block"  >+</IonButton>
          </IonCol>
          <IonCol>
              <IonButton onClick={()=>{subtract()}} expand="block"  >-</IonButton>
          </IonCol>

        </IonRow>
          <IonRow>
              <IonCol>
                  <IonButton onClick={()=>{prod()}} expand="block"  >*</IonButton>
              </IonCol>
              <IonCol>
                  <IonButton onClick={()=>{div()}} expand="block"  >/</IonButton>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
                  <IonButton onClick={()=>{equal()}} expand="block"  >=</IonButton>
              </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
