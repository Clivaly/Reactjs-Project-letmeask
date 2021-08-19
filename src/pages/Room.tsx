import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss';

export function Room() {
  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <RoomCode />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala test</h1>
          <span>3 perguntas</span>
        </div>
        
        <form>
          <textarea
         placeholder="O que voçê quer perguntar?"
          />

          <div className="form-footer">
            <span>Para enviar sua pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}