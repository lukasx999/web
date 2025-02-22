use std::sync::Mutex;
use std::sync::Arc;
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::HashMap;
use std::sync::mpsc;

use rocket::fs::FileServer;
use rocket::futures::{SinkExt, StreamExt};
use rocket::State;
use serde::Serialize;

#[macro_use] extern crate rocket;

mod player;
use player::Player;

mod messages;
use messages::{Message, MessageKind, PlayerUpdate, PlayerJoin, PlayerLeave};


type Client = Player;

struct ServerState {
    id_counter: i32,
    clients: Vec<Client>,
}


async fn send<T: Serialize>(stream: &mut ws::stream::DuplexStream, msg: T) {
    let json = serde_json::ser::to_string_pretty(&msg).unwrap();
    stream.send(json.into()).await.unwrap();
}



#[get("/ws")]
fn echo(ws: ws::WebSocket, state: &State<Mutex<ServerState>>) -> ws::Channel<'static> {
    let mut state = state.lock().unwrap();
    let id = state.id_counter;
    state.id_counter += 1;

    let player = Player::new(id);
    state.clients.push(player);

    ws.channel(move |mut stream| Box::pin(async move {

        let msg = Message::new(MessageKind::PlayerJoin, PlayerJoin::new(player));
        send(&mut stream, msg).await;


        while let Some(message) = stream.next().await {
            //stream.send(message?).await.unwrap();
        }

        let msg = Message::new(MessageKind::PlayerLeave, PlayerLeave::new(id));
        send(&mut stream, msg).await;

        Ok(())
    }))

}



#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", FileServer::from("../frontend/"))
        .mount("/", routes![echo])
        .manage(Mutex::new(ServerState {
            id_counter: 0,
            clients: Vec::new(),
        }))
}
