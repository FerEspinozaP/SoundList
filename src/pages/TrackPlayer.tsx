import ReactAudioPlayer from 'react-audio-player';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonThumbnail, IonItem, IonLabel, IonIcon } from '@ionic/react';
import './TrackPlayer.scss';


import {
    chevronDown
  } from 'ionicons/icons';

const TrackPlayer: React.FC = () => {
    return (
      <IonPage>
          <IonContent className="track-content" id="background">
        <IonHeader>
        <IonToolbar id="background">
            <IonButton fill="clear" routerLink="/Playlist">
              <IonIcon id="icon" icon={chevronDown} />
            </IonButton>
          <IonTitle>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
        <img id="albumCov" src="..\assets\img\Easy on me.jpg" />
        <IonLabel id="details" class="ion-text-center">  
            <h3>Easy on Me</h3>
            <p>Adele</p>
        </IonLabel>

        <ReactAudioPlayer controls id="trackControler" >
            <source src="..\assets\Canciones\Easy on Me - Adele.mp3"/>
        </ReactAudioPlayer>

      </IonContent>
      </IonPage>
    );
  };

export default TrackPlayer;