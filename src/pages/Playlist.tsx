import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonThumbnail, IonItem, IonLabel } from '@ionic/react';
import './Playlist.scss';

const Playlist: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  id="background">
          <IonTitle>SoundList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="playlistCont" id="background">
        <IonThumbnail id="list">
          <IonItem id="background">
            <IonButton  id= "track" routerLink="/TrackPlayer">
              <img id="albumImgA" src="..\assets\img\Easy on me.jpg" />
              <IonLabel id="details" class="ion-text-left">  
                <h3>Easy on Me</h3>
                <p>Adele</p>
              </IonLabel>
            </IonButton>
          </IonItem>

          <IonItem id="background">
            <IonButton id= "track">
              <img id="albumImg"src="..\assets\img\For my Father.jpg"/>
              <IonLabel id="details" class="ion-text-left">
              <h3>For my Father</h3>
              <p>Andy Mckee</p>
            </IonLabel>
            </IonButton>
          </IonItem>

          <IonItem  id="background">
            <IonButton id= "track">
              <img id="albumImgJC" src="..\assets\img\Here Comes the Sun.jpg"/>
              <IonLabel id="details" class="ion-text-left">
              <h3>Here Comes the Sun</h3>
              <p>Jacob Collier</p>
            </IonLabel>
            </IonButton>
          </IonItem>

          <IonItem  id="background">
            <IonButton id= "track" >
              <img id="albumImg" src="..\assets\img\Higher Power.jpg"/>
              <IonLabel id="details" class="ion-text-left">
              <h3>Higher Power</h3>
              <p>Coldplay</p>
            </IonLabel>
            </IonButton>
          </IonItem>

          <IonItem  id="background">
            <IonButton id= "track" >
              <img id="albumImgJM" src="..\assets\img\Last Train Home.jpg"/>
              <IonLabel id="details" class="ion-text-left">
              <h3>Last Train Home</h3>
              <p>John Mayer</p>
            </IonLabel>
            </IonButton> 
          </IonItem>

          <IonItem  id="background">
            <IonButton id= "track">
              <img id="albumImgGB" src="..\assets\img\The One.jpg"/>
              <IonLabel id="details" class="ion-text-left">
              <h3>The One</h3>
              <p>Gabe Bondoc</p>
            </IonLabel>
            </IonButton>
          </IonItem>

          <IonItem  id="background">
            <IonButton id= "track">
              <img id="albumImgCW" src="..\assets\img\The Striped.jpg"/>
              <IonLabel id="details" class="ion-text-left">
              <h3>Design</h3>
              <p>Cory Wong</p>
            </IonLabel>
            </IonButton>
          </IonItem>
          
        </IonThumbnail>
      </IonContent>
    </IonPage>
  );
};

export default Playlist;
